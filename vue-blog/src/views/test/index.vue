<template>
    <v-row style="background-color: #000616">
        <v-col cols="12" md="5" style="display: flex; align-items: center">
            <div style="width: 400px; height: 400px; position: relative">
                <DashboardChart type="1" :value="value" />
            </div>
        </v-col>
        <v-col cols="12" md="7" style="display: flex; align-items: center">
            <div style="width: 600px; height: 170px; overflow: hidden">
                <DashboardChart
                    id="chart2"
                    width="310px"
                    height="280px"
                    type="2"
                    :text-pos-style="{ marginTop: '9%' }"
                    :value="value"
                />
            </div>
        </v-col>
    </v-row>

    <v-row style="background-color: #000616">
        <v-col cols="12" md="6">
            <div style="width: 100%; height: 400px"><ThreePie refId="pie-3d" :data="data" /></div>
        </v-col>
        <v-col cols="12" md="6"><ThreePie2 /></v-col>
    </v-row>
</template>

<script setup lang="ts">
import DashboardChart from '@/components/DashboardChart/index.vue';
import { ref, reactive } from 'vue';
import ThreePie from '@/components/Echarts/ThreePie.vue';
import ThreePie2 from '@/components/Echarts/ThreePie2.vue';
const value = ref(0);
setTimeout(() => {
    value.value = 0.8;
}, 4000);

const data = ref([
    { name: '四五类桥梁数量', value: 80, bfb: '2.8%', itemStyle: { color: ' #4466FF' } },
    { name: '其他', value: 20, bfb: '2.8%', itemStyle: { color: '#05ABF5' } },
]);

const option = reactive({
    options: {},
});

function initChart() {}
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
</style>
