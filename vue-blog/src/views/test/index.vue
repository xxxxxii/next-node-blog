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
</template>

<script setup lang="ts">
import DashboardChart from '@/components/DashboardChart/index.vue';
import { ref } from 'vue';

const value = ref(0);
setTimeout(() => {
    value.value = 0.8;
}, 4000);
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
