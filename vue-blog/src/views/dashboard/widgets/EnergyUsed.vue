<template>
    <v-card class="energy_used" title="Energy Used">
        <ECharts :height="`calc(${props?.height} - 52px)`" :full-options="options" />
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
