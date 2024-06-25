<template>
    <div
        style="width: 100%; height: 100%; position: relative"
        :style="{ display: type === '1' ? 'block' : 'flex' }"
    >
        <img src="./bg.png" id="bg_img" style="display: none" />
        <img src="./round1.png" id="round1" style="display: none" />
        <img src="./round2.png" id="round2" style="display: none" />
        <Echarts :id="props.id" :full-options="option" :width="width" :height="height" />
        <div class="title" v-if="type === '1'">
            <div>{{ title }}</div>
            <div class="sub-title">
                {{ subTitle }}
                <div>{{ subUnit }}</div>
            </div>
        </div>
        <div class="title2" v-else style="flex: 1; margin-top: 18%" :style="textPosStyle">
            <div>{{ title }}</div>
            <div class="sub-title">
                {{ subTitle }}
                <div>{{ subUnit }}</div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import Echarts from '@/components/Echarts/index.vue';
import { reactive, onMounted, watch } from 'vue';

const props = defineProps({
    id: String,
    title: {
        type: String,
        default: '计划里程',
    },
    subTitle: {
        type: String,
        default: '538',
    },
    subUnit: {
        type: String,
        default: 'KM',
    },
    value: {
        type: Number,
        default: 0,
    },
    type: {
        type: String,
        default: '1',
    },
    width: {
        type: String,
        default: '400px',
    },
    height: {
        type: String,
        default: '400px',
    },
    textPosStyle: {
        type: Object,
        default: () => {
            return {
                marginTop: '0',
            };
        },
    },
});

const option = reactive({
    options: {},
});

function initEchart(val = 0) {
    const value = val; // 值，0~1之间
    // const startAngle = 215; // 开始角度
    // const endAngle = -35; // 结束角度

    const startAngle = props.type === '2' ? 180 : 215; // 开始角度
    const endAngle = props.type === '2' ? 0 : -35; // 结束角度

    const splitCount = 60; // 刻度数量
    const pointerAngle = (startAngle - endAngle) * (1 - value) + endAngle; // 当前指针（值）角度

    const options = {
        series: [
            {
                type: 'gauge',
                center: ['50%', '50%'],
                radius: '91%',
                splitNumber: 10, // 刻度数量
                min: 0,
                max: 100,
                startAngle: startAngle,
                endAngle: endAngle,

                axisLine: {
                    show: true,
                    lineStyle: {
                        width: 3,
                        shadowBlur: 0,
                        color: [[1, '#2771A7']],
                    },
                },
                axisLabel: { show: false },
                axisTick: {
                    show: false,
                    lineStyle: {
                        color: '#4174f6',
                        width: 1,
                    },
                    length: 8,
                    splitNumber: 10,
                },
                splitLine: {
                    show: false,
                    length: 12,
                    lineStyle: {
                        color: '#4174f6',
                    },
                },
                pointer: {
                    // 仪表盘指针
                    show: 0,
                },
                detail: {
                    show: false,
                },
                // pointer: {
                //     icon: 'path://M2090.36389,615.30999 L2090.36389,615.30999 C2091.48372,615.30999 2092.40383,616.194028 2092.44859,617.312956 L2096.90698,728.755929 C2097.05155,732.369577 2094.2393,735.416212 2090.62566,735.56078 C2090.53845,735.564269 2090.45117,735.566014 2090.36389,735.566014 L2090.36389,735.566014 C2086.74736,735.566014 2083.81557,732.63423 2083.81557,729.017692 C2083.81557,728.930412 2083.81732,728.84314 2083.82081,728.755929 L2088.2792,617.312956 C2088.32396,616.194028 2089.24407,615.30999 2090.36389,615.30999 Z',
                //     length: '55%',
                //     width: 16,

                //     offsetCenter: [0, '5%'],
                // },
            },
            {
                type: 'gauge',
                center: ['50%', '50%'],
                radius: '60%',
                splitNumber: 10, // 刻度数量
                min: 0,
                max: 100,
                startAngle: startAngle,
                endAngle: endAngle,

                axisLine: {
                    show: true,
                    lineStyle: {
                        width: 3,
                        shadowBlur: 0,
                        color: [[1, '#071F3F']],
                    },
                },
                axisTick: {
                    show: false,
                    lineStyle: {
                        color: '#4174f6',
                        width: 1,
                    },
                    length: 8,
                    splitNumber: 10,
                },
                axisLabel: { show: false },
                splitLine: {
                    show: false,
                    length: 12,
                    lineStyle: {
                        color: '#4174f6',
                    },
                },
                pointer: {
                    // 仪表盘指针
                    show: 0,
                },
                detail: {
                    show: false,
                },
                // pointer: {
                //     icon: 'path://M2090.36389,615.30999 L2090.36389,615.30999 C2091.48372,615.30999 2092.40383,616.194028 2092.44859,617.312956 L2096.90698,728.755929 C2097.05155,732.369577 2094.2393,735.416212 2090.62566,735.56078 C2090.53845,735.564269 2090.45117,735.566014 2090.36389,735.566014 L2090.36389,735.566014 C2086.74736,735.566014 2083.81557,732.63423 2083.81557,729.017692 C2083.81557,728.930412 2083.81732,728.84314 2083.82081,728.755929 L2088.2792,617.312956 C2088.32396,616.194028 2089.24407,615.30999 2090.36389,615.30999 Z',
                //     length: '55%',
                //     width: 16,

                //     offsetCenter: [0, '5%'],
                // },
            },
            {
                type: 'gauge',
                radius: '90%',
                startAngle: pointerAngle,
                endAngle: endAngle,
                splitNumber: 1,
                axisLine: {
                    show: false,
                    lineStyle: {
                        width: 4,
                        opacity: 0,
                    },
                },
                title: { show: false },
                detail: { show: false },
                splitLine: { show: false },
                axisTick: {
                    length: '20%',
                    splitNumber: Math.ceil((1 - value) * splitCount),
                    lineStyle: {
                        color: '#001242',
                        width: 4,
                    },
                },
                axisLabel: { show: false },
                pointer: { show: false },
                itemStyle: {},
                markPoint: {
                    animation: false,
                    silent: true,
                    // data: [
                    //     {
                    //         symbol:
                    //             'image://' +
                    //             document.getElementById(props?.type == '1' ? 'round1' : 'round2')
                    //                 .src,
                    //         x: '50%',
                    //         y: '50%',
                    //         symbolSize: 370,
                    //         itemStyle: {
                    //             borderWidth: 6,
                    //         },
                    //     },
                    //     {
                    //         symbol: 'circle',
                    //         symbolSize: 200,
                    //     },
                    // ],
                },
                data: [
                    {
                        value: value,
                        name: 'test gauge',
                    },
                ],
                pointer: {
                    itemStyle: {
                        borderWidth: 15,
                        color: '#37AEE7',
                    },
                },
                anchor: {
                    show: true,
                    showAbove: true,
                    size: 25,
                    itemStyle: {
                        borderWidth: 10,
                        color: '#000',
                    },
                },
            },

            {
                type: 'gauge',
                radius: '90%',
                startAngle: startAngle,
                endAngle: pointerAngle,
                splitNumber: 1,
                axisLine: {
                    show: false,
                    lineStyle: {
                        width: 3,
                        opacity: 0,
                    },
                },
                title: { show: false },
                detail: { show: false },
                splitLine: { show: false },
                axisTick: {
                    length: '20%',
                    splitNumber: Math.ceil(value * splitCount),
                    lineStyle: {
                        color: {
                            image: document.getElementById('bg_img'),
                            repeat: 'no-repeat',
                        },
                        width: 4,
                    },
                },
                axisLabel: { show: false },
                pointer: { show: false },
                itemStyle: {},
                data: [
                    {
                        value: value,
                        name: 'test gauge',
                    },
                ],
            },
        ],
    };
    option.options = options;
}

onMounted(() => {
    initEchart(props.value);
});

watch(
    () => props.value,
    (newVal) => {
        initEchart(newVal);
    }
);
</script>

<style scoped>
.title {
    color: #fff;
    font-size: 40px;
    font-weight: bold;
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: absolute;
    z-index: 999;
    bottom: 0;
    left: 0;
    right: 0;
    text-align: center;
}
.title > div:nth-child(1) {
    font-size: 30px;
}
.title > .sub-title {
    display: flex;
    justify-content: center;
    color: #5dedfd;
    align-items: flex-end;
}
.title > .sub-title > div {
    color: #fff;
    font-size: 20px;
    margin-bottom: 10px;
    margin-left: 10px;
}
.title2 {
    color: #fff;
    font-weight: bold;
}
.title2 > div:nth-child(1) {
    font-size: 30px;
}
.title2 > div:nth-child(2) {
    display: flex;
    font-size: 40px;
    align-items: end;
}
.title2 > div:nth-child(2) > div {
    color: #fff;
    font-size: 20px;
    margin-bottom: 10px;
    margin-left: 10px;
}
</style>
