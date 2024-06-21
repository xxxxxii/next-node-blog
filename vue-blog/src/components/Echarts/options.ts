// 图表默认配置项
const defaultOption = {
    grid: {
        left: '3%',
        right: '2%',
        bottom: '15',
        containLabel: true,
    },
    legend: {
        show: false,
        top: 'bottom',
        textStyle: {
            color: '#999',
        },
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            //坐标轴指示器，坐标轴触发有效，
            type: 'shadow', //默认为line，line直线，cross十字准星，shadow阴影
            crossStyle: {
                color: '#fff',
            },
            label: {
                show: true,
                backgroundColor: '#333',
            },
        },
    },
};

// 所有用到的 echarts option 都在这里进行配置
export const chartOption = {
    // 饼图
    pieOption(data: any, dimensions = ['name', 'value'], isRose = false) {
        const option = {
            ...defaultOption,
            tooltip: {
                trigger: 'item',
                formatter: '{b} : {d}%',
            },
            dataset: {
                dimensions: dimensions,
                source: data ? data : [{ value: 0, name: '-' }],
            },
            series: {
                type: 'pie',
                radius: ['50%', '65%'],
                center: ['50%', '50%'],
                roseType: isRose ? 'area' : '', // 玫瑰图
                itemStyle: {
                    borderRadius: 1,
                    // color: function (params: any) {
                    //   //自定义颜色
                    //   const colorList = ['#409EFF', '#67C23A', '#E6A23C', '#F56C6C'];
                    //   return colorList[params.dataIndex];
                    // }
                },
                encode: {
                    itemName: dimensions[0],
                    value: dimensions[1],
                    tooltip: dimensions[1],
                },
            },
        };
        return option;
    },
    // 柱状图
    barLineOption(xData: any, sData: any, type = 'bar') {
        const option = {
            ...defaultOption,
            xAxis: {
                type: 'category',
                data: xData ? xData : ['-', '-', '-', '-', '-'],
                axisLabel: {
                    interval: 0, // 强制显示所有标签
                    textStyle: {
                        // color: '#fff',
                    },
                },
            },
            yAxis: {
                type: 'value',
                nameTextStyle: {
                    padding: [0, 20, 0, 0],
                },
                min: 0,
                minInterval: 1,
                axisLabel: {
                    interval: 0, // 强制显示所有标签
                    textStyle: {
                        color: '#8FADCC',
                    },
                },
                splitLine: {
                    show: true,
                    lineStyle: {
                        // 分割线的颜色
                        color: 'rgba(1,1,1,0.5)',
                        // 分割线的宽度
                        width: 1,
                        // 分割线的类型
                        type: 'solid',
                    },
                },
            },
            series: {
                type: type,
                itemStyle: {},
                smooth: true,
                data: sData ? sData : [0, 0, 0, 0, 0],
            },
        };
        return option;
    },
    // 柱状图
    barLineOption2(yData: any, sData: any, type = 'bar') {
        const option = {
            ...defaultOption,
            xAxis: {
                type: 'value',
                nameTextStyle: {
                    padding: [0, 20, 0, 0],
                },
                min: 0,
                max: function (value) {
                    return value.max + 20;
                },
            },
            yAxis: {
                type: 'category',
                splitLine: {
                    show: true,
                    lineStyle: {
                        // 分割线的颜色
                        color: '#ddd',
                        // 分割线的类型
                        type: 'dashed',
                    },
                },
                data: yData ? yData : ['-', '-', '-', '-', '-'],
            },
            series: {
                type: type,
                itemStyle: {},
                data: sData ? sData : [0, 0, 0, 0, 0],
            },
        };
        return option;
    },
};

// x轴方向 滚动条
export const dataZoom = [
    {
        type: 'slider',
        width: '80%',
        zoomLock: true, // 是否只平移不缩放
        moveOnMouseMove: true, // 鼠标移动能触发数据窗口平移
        zoomOnMouseWheel: false, // 鼠标移动能触发数据窗口缩放
        // start: 0,
        // end: 60,
        // startValue: 0,
        // endValue: 10,
        maxValueSpan: 9,
        minValueSpan: 9,
        showDataShadow: false,
        fillerColor: '#DADADA',
        borderRadius: '50%',
        moveHandleSize: 0,
        moveHandleStyle: {},
        left: '10%',
        right: '10%',
        bottom: 10,
        height: 10,
        handleSize: '80%', // 滑动条的 左右2个滑动条的大小
        handleIcon: 'path://M512,512m-448,0a448,448,0,1,0,896,0a448,448,0,1,0,-896,0Z',
        handleStyle: {
            borderWidth: 0, // 边框宽度
            color: '#DADADA',
        },
        brushSelect: false,
        textStyle: false,
    },
    {
        type: 'inside',
        zoomOnMouseWheel: false, // 关闭滚轮缩放
        moveOnMouseWheel: true, // 开启滚轮平移
        moveOnMouseMove: true, // 鼠标移动能触发数据窗口平移
        zoomLock: false,
        brushSelect: false,
    },
];

// y轴方向滚动条
export const dataZoomY = [
    {
        type: 'slider',
        zoomLock: true, // 是否只平移不缩放
        moveOnMouseMove: true, // 鼠标移动能触发数据窗口平移
        zoomOnMouseWheel: false, // 鼠标移动能触发数据窗口缩放
        start: 100,
        // end: 10,
        maxValueSpan: 5,
        minValueSpan: 5,
        showDataShadow: false,
        fillerColor: '#DADADA',
        borderRadius: '50%',
        yAxisIndex: 0,
        moveHandleSize: 0,
        moveHandleStyle: {},
        left: '10',
        right: '10',
        bottom: 20,
        top: 18,
        width: 10,
        handleSize: '80%', // 滑动条的 左右2个滑动条的大小
        handleIcon: 'path://M512,512m-448,0a448,448,0,1,0,896,0a448,448,0,1,0,-896,0Z',
        handleStyle: {
            borderWidth: 0, // 边框宽度
            color: '#DADADA',
        },
        brushSelect: false,
        textStyle: false,
    },
    {
        type: 'inside',
        zoomOnMouseWheel: true, // 关闭滚轮缩放
        moveOnMouseWheel: true, // 开启滚轮平移
        moveOnMouseMove: true, // 鼠标移动能触发数据窗口平移
        yAxisIndex: 0,
        zoomLock: false,
        brushSelect: false,
    },
];
