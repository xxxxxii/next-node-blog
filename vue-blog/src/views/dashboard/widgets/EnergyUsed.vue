<template>
    <v-card class="energy_used" title="Energy Used">
        <ECharts :height="`calc(${props?.height} - 52px)`" :full-options="options" />
        <!-- <VueApexCharts :height="'100%'" type="area" :options="chartOptions" :series="series" /> -->
    </v-card>
</template>
<script setup lang="ts">
// import VueApexCharts from 'vue3-apexcharts';
import { ref, computed, onMounted, reactive } from 'vue';
import { useMainStore } from '@/stores/useMainStore';
import ECharts from '@/components/Echarts/index.vue';
import { chartOption } from '@/components/Echarts/options';

const props = withDefaults(
    defineProps<{
        height?: string | number;
    }>(),
    {
        height: 308,
    }
);
const mainStore = useMainStore();
const chartOptions = computed(() => {
    return {
        chart: {
            id: 'vuechart-example',
            height: 310,
            // sparkline: {
            //     enabled: true,
            // },
            type: 'area',
            toolbar: {
                show: false,
            },
        },
        grid: {
            borderColor: '#efefef',
        },
        theme: {
            mode: mainStore.theme, // light
        },
        dataLabels: {
            enabled: false,
        },
        stroke: {
            curve: 'smooth',
        },
        xaxis: {
            type: 'string',
            categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        },
        tooltip: {
            x: {
                // format: 'dd/MM/yy HH:mm',
                show: false,
            },
            marker: {
                show: false,
            },
        },
        colors: [mainStore.settings.primary],
    };
});
const series = ref([
    {
        name: 'Kwh',
        data: [31, 40, 28, 51, 42, 109, 100],
    },
]);

onMounted(() => {
    initChart();
});

const options = reactive({
    options: {},
});

function initChart() {
    const xData = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    const sData = [31, 40, 28, 51, 42, 109, 100];
    const option = chartOption.barLineOption(xData, sData);
    option.yAxis['name'] = 'Kwh';
    option.series.type = 'line';
    options.options = option;
}
</script>
<style lang="scss">
.energy_used {
    height: 100%;
    .apexcharts-svg {
        width: 100% !important;
        height: 310px;
    }
}
</style>
@/stores/useMainStore
