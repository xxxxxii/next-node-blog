<template>
    <div style="width: 100%; height: 100%">
        <div :ref="refId" style="width: 100%; height: 100%"></div>
    </div>
</template>
<script>
import * as echarts from 'echarts';
import 'echarts-gl';
export default {
    props: { data: Object, refId: String },
    data() {
        return {
            // data: [
            //   { name: "水路", value: 50, itemStyle: { color: "#7A4BF4" } },
            //   { name: "民航", value: 18, itemStyle: { color: "#D53DF3" } },
            //   { name: "铁路", value: 22, itemStyle: { color: "#6DCDE6" } },
            //   { name: "公路", value: 15, itemStyle: { color: "#385CF3" } },
            // ],
        };
    },
    mounted() {
        this.$nextTick(() => {
            this.echartsPie();
        });
    },
    methods: {
        echartsPie() {
            const color = ['#65E4E9', '#6FA8FF', '#3A74C9', '#9F74DD', '#C7CB42'];
            let hoveredIndex = '';
            let chartDom = this.$refs[this.refId];
            let myChart = echarts.init(chartDom);
            const getPie3D = (pieData, internalDiameterRatio) => {
                //internalDiameterRatio:透明的空心占比
                let series = [];
                let sumValue = 0;
                let startValue = 0;
                let endValue = 0;
                let k = 1;
                pieData.sort((a, b) => {
                    return b.value - a.value;
                });
                // 为每一个饼图数据，生成一个 series-surface 配置
                for (let i = 0; i < pieData.length; i++) {
                    sumValue += pieData[i].value;
                    let seriesItem = {
                        name:
                            typeof pieData[i].name === 'undefined' ? `series${i}` : pieData[i].name,
                        type: 'surface',
                        parametric: true,
                        wireframe: {
                            show: false,
                        },
                        pieData: pieData[i],
                        pieStatus: {
                            selected: false,
                            hovered: false,
                            k: k,
                        },
                        radius: '50%',
                        center: ['10%', '10%'],
                    };

                    if (typeof pieData[i].itemStyle != 'undefined') {
                        let itemStyle = {};
                        typeof pieData[i].itemStyle.color != 'undefined'
                            ? (itemStyle.color = pieData[i].itemStyle.color)
                            : null;
                        typeof pieData[i].itemStyle.opacity != 'undefined'
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
                    series[i].parametricEquation = getParametricEquation(
                        series[i].pieData.startRatio,
                        series[i].pieData.endRatio,
                        false,
                        false,
                        k,
                        series[i].pieData.value
                    );
                    startValue = endValue;
                }
                let boxHeight = getHeight3D(series, 15); //通过传参设定3d饼/环的高度，26代表26px
                // 准备待返回的配置项，把准备好的 legendData、series 传入。
                let option = {
                    backgroundColor: 'rgba(1,1,1,0)',
                    tooltip: {
                        backgroundColor: 'rgba(1,1,1,0)',
                        formatter: (params) => {
                            if (
                                params.seriesName !== 'mouseoutSeries' &&
                                params.seriesName !== 'pie3d'
                            ) {
                                let bfb = (
                                    (option.series[params.seriesIndex].pieData.endRatio -
                                        option.series[params.seriesIndex].pieData.startRatio) *
                                    100
                                ).toFixed(2);
                                return (
                                    `${params.seriesName}<br/>` +
                                    `<span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:${params.color};"></span>` +
                                    `${bfb}%`
                                );
                            }
                        },
                    },
                    legend: {
                        show: false,
                        // bottom: "3%",
                        // itemGap: 20,
                        // icon: "path://M0,12L12,12C12,5.37258,6.62742,0,0,0L0,12Z",
                    },
                    title: {
                        // text: "课程总课时：68",
                        // left: "left",
                        // top: "2%",
                        // textStyle: {
                        //   fontWeight: 500,
                        //   fontSize: 16,
                        //   color: "#3D3D3D",
                        // },
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
                        boxHeight: boxHeight, //圆环的高度
                        left: 0,
                        top: 0, //3d饼图的位置
                        viewControl: {
                            //3d效果可以放大、旋转等，请自己去查看官方配置
                            alpha: 25, //角度
                            distance: 350, //调整视角到主体的距离，类似调整zoom
                            rotateSensitivity: 0, //设置为0无法旋转
                            zoomSensitivity: 0, //设置为0无法缩放
                            panSensitivity: 0, //设置为0无法平移
                            autoRotate: false, //自动旋转
                        },
                    },
                    series: series,
                };
                return option;
            };

            //获取3d丙图的最高扇区的高度
            const getHeight3D = (series, height) => {
                series.sort((a, b) => {
                    return b.pieData.value - a.pieData.value;
                });
                return (height * 40) / series[0].pieData.value;
            };

            // 生成扇形的曲面参数方程，用于 series-surface.parametricEquation
            const getParametricEquation = (startRatio, endRatio, isSelected, isHovered, k, h) => {
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
                let offsetX = isSelected ? Math.cos(midRadian) * 0.4 : 0;
                let offsetY = isSelected ? Math.sin(midRadian) * 0.4 : 0;
                // 计算高亮效果的放大比例（未高亮，则比例为 1）
                let hoverRate = isHovered ? 1.05 : 1;
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
                        step: Math.PI / 20,
                    },
                    x: function (u, v) {
                        if (u < startRadian) {
                            return (
                                offsetX + Math.cos(startRadian) * (1 + Math.cos(v) * k) * hoverRate
                            );
                        }
                        if (u > endRadian) {
                            return (
                                offsetX + Math.cos(endRadian) * (1 + Math.cos(v) * k) * hoverRate
                            );
                        }
                        return offsetX + Math.cos(u) * (1 + Math.cos(v) * k) * hoverRate;
                    },
                    y: function (u, v) {
                        if (u < startRadian) {
                            return (
                                offsetY + Math.sin(startRadian) * (1 + Math.cos(v) * k) * hoverRate
                            );
                        }
                        if (u > endRadian) {
                            return (
                                offsetY + Math.sin(endRadian) * (1 + Math.cos(v) * k) * hoverRate
                            );
                        }
                        return offsetY + Math.sin(u) * (1 + Math.cos(v) * k) * hoverRate;
                    },
                    z: function (u, v) {
                        if (u < -Math.PI * 0.5) {
                            return Math.sin(u);
                        }
                        if (u > Math.PI * 2.5) {
                            return Math.sin(u) * h * 0.1;
                        }
                        return Math.sin(v) > 0 ? 1 * h * 0.1 : -1;
                    },
                };
            };

            let option = getPie3D(this.data, 1);
            //是否需要label指引线，如果要就添加一个透明的2d饼状图并调整角度使得labelLine和3d的饼状图对齐，并再次setOption
            option.series.push({
                // name: "pie3d",
                type: 'pie',
                startAngle: 10,

                // startAngle: 25, //起始角度，支持范围[0, 360]。
                clockwise: true, //饼图的扇区是否是顺时针排布。上述这两项配置主要是为了对齐3d的样式
                radius: ['40%', '40%'],
                center: ['55%', '48%'], //指示线的位置
            });
            option && myChart.setOption(option);

            myChart.on('mouseover', function (params) {
                // 准备重新渲染扇形所需的参数
                let isSelected;
                let isHovered;
                let startRatio;
                let endRatio;
                let k;
                let i;

                // 如果触发 mouseover 的扇形当前已高亮，则不做操作
                if (hoveredIndex === params.seriesIndex) {
                    return;

                    // 否则进行高亮及必要的取消高亮操作
                } else {
                    // 如果当前有高亮的扇形，取消其高亮状态（对 option 更新）
                    if (hoveredIndex !== '') {
                        // 从 option.series 中读取重新渲染扇形所需的参数，将是否高亮设置为 false。
                        isSelected = option.series[hoveredIndex].pieStatus.selected;
                        isHovered = false;
                        startRatio = option.series[hoveredIndex].pieData.startRatio;
                        endRatio = option.series[hoveredIndex].pieData.endRatio;
                        k = option.series[hoveredIndex].pieStatus.k;
                        i =
                            option.series[hoveredIndex].pieData.value ===
                            option.series[0].pieData.value
                                ? 35
                                : 10;
                        // 对当前点击的扇形，执行取消高亮操作（对 option 更新）
                        option.series[hoveredIndex].parametricEquation = getParametricEquation(
                            startRatio,
                            endRatio,
                            isSelected,
                            isHovered,
                            k,
                            i
                        );
                        option.series[hoveredIndex].pieStatus.hovered = isHovered;

                        // 将此前记录的上次选中的扇形对应的系列号 seriesIndex 清空
                        hoveredIndex = '';
                    }

                    // 如果触发 mouseover 的扇形不是透明圆环，将其高亮（对 option 更新）
                    if (
                        params.seriesName !== 'mouseoutSeries' &&
                        option.series[params.seriesIndex].pieStatus
                    ) {
                        // 从 option.series 中读取重新渲染扇形所需的参数，将是否高亮设置为 true。
                        isSelected = option.series[params.seriesIndex].pieStatus.selected;
                        isHovered = true;
                        startRatio = option.series[params.seriesIndex].pieData.startRatio;
                        endRatio = option.series[params.seriesIndex].pieData.endRatio;
                        k = option.series[params.seriesIndex].pieStatus.k;

                        // 对当前点击的扇形，执行高亮操作（对 option 更新）
                        option.series[params.seriesIndex].parametricEquation =
                            getParametricEquation(
                                startRatio,
                                endRatio,
                                isSelected,
                                isHovered,
                                k,
                                option.series[params.seriesIndex].pieData.value + 5
                            );
                        option.series[params.seriesIndex].pieStatus.hovered = isHovered;

                        // 记录上次高亮的扇形对应的系列号 seriesIndex
                        hoveredIndex = params.seriesIndex;
                    }

                    // 使用更新后的 option，渲染图表
                    myChart.setOption(option);
                }
            });
        },
    },
};
</script>
