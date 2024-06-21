<template>
    <div :id="id" :class="className" :style="{ height, width }"></div>
</template>

<script setup lang="ts">
// 按需导入需要用到的 vue函数 和 echarts
import {
    onMounted,
    onUnmounted,
    onBeforeUnmount,
    defineProps,
    watch,
    ref,
    defineEmits,
    defineExpose,
} from 'vue';
import * as echarts from 'echarts';

// 获取 dom 和 父组件数据 并定义"myChart"用于初始化图表
let myChart: echarts.ECharts;
const props = defineProps({
    id: {
        type: String,
        default: 'chart',
        required: true,
    },
    className: {
        type: String,
        default: '',
    },
    width: {
        type: String,
        default: '100%',
    },
    height: {
        type: String,
        default: '300px',
    },
    loading: {
        type: Boolean,
        default: true,
    },
    fullOptions: {
        type: Object,
        default: () => ({}),
        required: true,
    },
});
// 重绘图表函数
const resizeHandler = () => {
    myChart.resize();
};

// 传出 实例
const chartObj = () => {
    return myChart;
};
// 设置防抖，保证无论拖动窗口大小，只执行一次获取浏览器宽高的方法
const debounce = (fun: { (): void; (): void }, delay: number | undefined) => {
    let timer: number | undefined;
    return function () {
        if (timer) {
            clearTimeout(timer);
        }
        timer = setTimeout(() => {
            fun();
        }, delay);
    };
};
const cancalDebounce = debounce(resizeHandler, 50);
const emit = defineEmits(['legendselectchange']);
// 页面成功渲染，开始绘制图表
onMounted(() => {
    // 配置为 svg 形式，预防页面缩放而出现模糊问题；图表过于复杂时建议使用 Canvas
    myChart = echarts.init(document.getElementById(props.id) as HTMLDivElement, {
        renderer: 'svg',
    });
    // props.loading &&
    //   myChart.showLoading({
    //     text: '',
    //     color: '#409eff',
    //     textColor: '#000',
    //     maskColor: 'rgba(255, 255, 255, .95)',
    //     zlevel: 0,
    //     lineWidth: 2,
    //   });
    // if (!props.loading) {
    // myChart.hideLoading();
    myChart.setOption(props.fullOptions.options, true);
    // }
    // 自适应不同屏幕时改变图表尺寸
    window.addEventListener('resize', cancalDebounce);

    // 监听图例的选中状态切换事件
    myChart.on('legendselectchanged', function (params) {
        console.log('legendselectchanged', params);
        emit('legendselectchange', params);
    });
});
// 页面销毁前，销毁事件和实例
onBeforeUnmount(() => {
    window.removeEventListener('resize', cancalDebounce);
    myChart?.dispose();
});
defineExpose({ resizeHandler, chartObj });

// 监听图表数据时候变化，重新渲染图表
watch(
    () => [props.fullOptions.options, props.loading],
    () => {
        // if (!props.loading) {
        // myChart.hideLoading();
        myChart.setOption(props.fullOptions.options, true);
        // }
    },
    { deep: true }
);
</script>
