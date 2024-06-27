<template>
    <div style="width: 100%; height: 100%">
        <div class="pie" id="3dpie"></div>
    </div>
</template>
<script>
import * as echarts from 'echarts';
import 'echarts-gl';
export default {
    data() {
        return {
            myChart: null,
        };
    },
    created() {},
    computed: {},
    mounted() {
        this.$nextTick(() => {
            this.echartsPie();
        });
    },
    methods: {
        // 生成扇形的曲面参数方程，用于 series-surface.parametricEquation
        getParametricEquation(startRatio, endRatio, isSelected, isHovered, k, h, i) {
            // 计算
            let midRatio = (startRatio + endRatio) / 2;

            let startRadian = startRatio * Math.PI * 2;
            let endRadian = endRatio * Math.PI * 2;
            let midRadian = midRatio * Math.PI * 2;

            // 如果只有一个扇形，则不实现选中效果。
            if (startRatio === 0 && endRatio === 1) {
                isSelected = false;
            }

            // 通过扇形内径/外径的值，换算出辅助参数 k（默认值 1/3）
            k = typeof k !== 'undefined' ? k : 1 / 3;

            // 计算选中效果分别在 x 轴、y 轴方向上的位移（未选中，则位移均为 0）
            let offsetX = isSelected ? Math.cos(midRadian) * 0.15 : 0;
            let offsetY = isSelected ? Math.sin(midRadian) * 0.1 : 0;
            let offsetZ = i == 1 ? 2 : 0;
            console.log('offsetX', i, offsetX, offsetY);
            // 计算高亮效果的放大比例（未高亮，则比例为 1）
            let hoverRate = isHovered ? 1.1 : 1;

            // 返回曲面参数方程
            return {
                u: {
                    min: -Math.PI,
                    max: Math.PI * 3,
                    step: Math.PI / 32,
                },

                v: {
                    min: 0,
                    max: Math.PI * 2,
                    step: Math.PI / 32,
                },

                x: function (u, v) {
                    if (u < startRadian) {
                        return offsetX + Math.cos(startRadian) * (1 + Math.cos(v) * k) * hoverRate;
                    }
                    if (u > endRadian) {
                        return offsetX + Math.cos(endRadian) * (1 + Math.cos(v) * k) * hoverRate;
                    }
                    return offsetX + Math.cos(u) * (1 + Math.cos(v) * k) * hoverRate;
                },

                y: function (u, v) {
                    if (u < startRadian) {
                        return offsetY + Math.sin(startRadian) * (1 + Math.cos(v) * k) * hoverRate;
                    }
                    if (u > endRadian) {
                        return offsetY + Math.sin(endRadian) * (1 + Math.cos(v) * k) * hoverRate;
                    }
                    return offsetY + Math.sin(u) * (1 + Math.cos(v) * k) * hoverRate;
                },

                z: function (u, v) {
                    if (u < -Math.PI * 0.5) {
                        return offsetZ + Math.sin(u);
                    }
                    if (u > Math.PI * 2.5) {
                        return offsetZ + Math.sin(u);
                    }
                    // 调整扇形高度
                    return offsetZ + (Math.sin(v) > 0 ? 0.1 * h : -1);
                },
            };
        },
        // 生成模拟 3D 饼图的配置项
        getPie3D(pieData, internalDiameterRatio) {
            let series = [];
            let sumValue = 0;
            let startValue = 0;
            let endValue = 0;
            let legendData = [];
            let fakeData = 10;
            let linesSeries = []; // line3D模拟label指示线
            let k =
                typeof internalDiameterRatio !== 'undefined'
                    ? (1 - internalDiameterRatio) / (1 + internalDiameterRatio)
                    : 1 / 3;

            // 为每一个饼图数据，生成一个 series-surface 配置
            for (let i = 0; i < pieData.length; i++) {
                sumValue += pieData[i].value;

                let seriesItem = {
                    name: typeof pieData[i].name === 'undefined' ? `series${i}` : pieData[i].name,
                    type: 'surface',
                    parametric: true,
                    wireframe: {
                        show: false,
                    },
                    pieData: pieData[i],
                    pieStatus: {
                        selected: false,
                        hovered: false,
                        k: 1 / 10,
                    },
                };

                if (typeof pieData[i].itemStyle !== 'undefined') {
                    let itemStyle = {};

                    typeof pieData[i].itemStyle.color !== 'undefined'
                        ? (itemStyle.color = pieData[i].itemStyle.color)
                        : null;
                    typeof pieData[i].itemStyle.opacity !== 'undefined'
                        ? (itemStyle.opacity = pieData[i].itemStyle.opacity)
                        : null;

                    seriesItem.itemStyle = itemStyle;
                }
                series.push(seriesItem);
            }

            // 使用上一次遍历时，计算出的数据和 sumValue，调用 getParametricEquation 函数，
            // 向每个 series-surface 传入不同的参数方程 series-surface.parametricEquation，也就是实现每一个扇形。
            for (let i = 0; i < series.length; i++) {
                endValue = startValue + series[i].pieData.value;

                series[i].pieData.startRatio = startValue / sumValue;
                series[i].pieData.endRatio = endValue / sumValue;
                series[i].parametricEquation = this.getParametricEquation(
                    series[i].pieData.startRatio,
                    series[i].pieData.endRatio,
                    true,
                    false,
                    k,
                    // 调整扇形高度
                    i === 0 ? 10 : 10,
                    i
                );

                startValue = endValue;
                // 计算label指示线的起始和终点位置
                let midRadian =
                    (series[i].pieData.endRatio + series[i].pieData.startRatio) * Math.PI;
                let posX = Math.cos(midRadian) * (1.5 + Math.cos(Math.PI / 2));
                let posY = Math.sin(midRadian) * (1 + Math.cos(Math.PI / 2));
                let posZ = Math.log(Math.abs(fakeData + 200)) * 0.1;
                let flag =
                    (midRadian >= 0 && midRadian <= Math.PI / 2) ||
                    (midRadian >= (3 * Math.PI) / 2 && midRadian <= Math.PI * 2)
                        ? 1
                        : -1;
                let color = pieData[i].itemStyle.color;
                let turningPosArr = [
                    posX * 1.8 + i * 0.1 * flag + (flag < 0 ? -0.5 : 0),
                    posY * 1.8 + i * 0.1 * flag + (flag < 0 ? -0.5 : 0),
                    posZ * 2,
                ];
                let endPosArr = [
                    posX * 1.9 + i * 0.1 * flag + (flag < 0 ? -0.5 : 0),
                    posY * 1.9 + i * 0.1 * flag + (flag < 0 ? -0.5 : 0),
                    posZ * 6,
                ];
                linesSeries.push(
                    {
                        type: 'line3D',
                        lineStyle: {
                            color: color,
                            opacity: pieData[i].itemStyle.opacity === 1 ? 1 : 0,
                        },
                        data: [[posX, posY, posZ], turningPosArr, endPosArr],
                    },
                    {
                        type: 'scatter3D',
                        label: {
                            show: pieData[i].itemStyle.opacity === 1 ? true : false,
                            distance: -10,
                            position: 'center',
                            textStyle: {
                                color: '#fff',
                                // backgroundColor: color,
                                borderWidth: 2,
                                fontSize: 16,
                                padding: 8,
                                borderRadius: 4,
                            },
                            // formatter:
                            formatter: function (dyx) {
                                console.log(dyx);
                                return dyx.data.item.name + '\n' + dyx.data.val + '座';
                            },
                            labelLine: {
                                length: 30,
                                length2: 100,
                                show: true,
                                color: '#00ffff',
                            },
                        },
                        symbolSize: 0,
                        data: [
                            {
                                name: series[i].name + '\n' + series[i].pieData.value,
                                item: series[i],
                                val: series[i].pieData.value,
                                value: endPosArr,
                            },
                        ],
                    }
                );

                legendData.push(series[i].name);
            }
            series = series.concat(linesSeries);

            //补充一个透明的圆环，用于支撑高亮功能的近似实现。
            series.push({
                name: 'mouseoutSeries',
                type: 'surface',
                parametric: true,
                wireframe: {
                    show: false,
                },
                itemStyle: {
                    opacity: 0.5,
                    color: '#77daf7',
                },
                parametricEquation: {
                    u: {
                        min: 0,
                        max: Math.PI * 2,
                        step: Math.PI / 20,
                    },
                    v: {
                        min: 0,
                        max: Math.PI * 2,
                        step: Math.PI / 20,
                    },
                    x: function (u, v) {
                        return ((Math.sin(v) * Math.sin(u) + Math.sin(u)) / Math.PI) * 3.5;
                    },
                    y: function (u, v) {
                        return ((Math.sin(v) * Math.cos(u) + Math.cos(u)) / Math.PI) * 3.5;
                    },
                    z: function (u, v) {
                        return Math.cos(v) > 0 ? -2 : -1;
                    },
                },
            });
            // 准备待返回的配置项，把准备好的 legendData、series 传入。
            const option = {
                animation: false,

                legend: {
                    show: false,
                    //右侧标签
                    orient: 'vertical',
                    data: legendData,
                    textStyle: {
                        color: '#000',
                        fontSize: 16,
                    },
                    itemWidth: 15,
                    itemHeight: 15,
                    icon: 'circle', //数据图形样式
                    left: 'right', //居右显示
                    top: '30%',
                },
                tooltip: {
                    //内部标签
                    formatter: (params) => {
                        if (params.seriesName !== 'mouseoutSeries') {
                            return '';
                            //                 return `${params.seriesName}<br/>
                            // <span style="
                            // display:inline-block;
                            // margin-right:5px;
                            // border-radius:10px;
                            // width:10px;
                            // height:10px;
                            // background-color:${params.color};">
                            // </span>${option.series[params.seriesIndex].pieData.value}`;
                        }
                    },
                },

                xAxis3D: {
                    min: -1,
                    max: 1,
                },
                yAxis3D: {
                    min: -1,
                    max: 1,
                },
                zAxis3D: {
                    min: -1,
                    max: 1,
                },
                grid3D: {
                    show: false,
                    boxHeight: 14,
                    left: '0',
                    top: '-20%',
                    viewControl: {
                        alpha: 15, // 视觉角度
                        beta: 140, //绘制开始角度
                        rotateSensitivity: 2, //扒拉灵敏度
                        zoomSensitivity: 0, //缩放灵敏度
                        panSensitivity: 1,
                        autoRotate: false, //自动旋转开关
                        distance: 300, //视觉距离
                        autoRotateSpeed: 10, //自动旋转速度
                    },
                },
                series: series,
            };
            return option;
        },
        echartsPie() {
            // 3d饼图
            const cg = echarts.init(document.getElementById('3dpie'));

            // 传入数据生成 option
            const option = this.getPie3D(
                [
                    {
                        name: '四五类桥梁比例',
                        value: 80,
                        itemStyle: {
                            opacity: 1,
                            color: '#4466FF',
                        },
                    },
                    {
                        name: '',
                        value: 20,
                        itemStyle: {
                            opacity: 0,
                            color: '#ffbb00',
                        },
                    },
                ],
                0
            );
            cg.setOption(option);
        },
    },
};
</script>
<style scoped>
.pie {
    width: 100% !important;
    height: 100% !important;
}
</style>
