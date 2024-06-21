<template>
    <div class="smart_house pb-5">
        <v-row>
            <v-col cols="24">
                <v-card :title="curDayData?.date" style="width: 100%">
                    <v-row style="display: flex" v-if="curDayData != null">
                        <v-col cols="12" md="3">
                            <v-img
                                style="margin: 10px 0 10px 10px"
                                :src="curDayData?.head_image"
                            ></v-img>
                        </v-col>

                        <v-col cols="12" sm="9">
                            <div style="margin: 10px">
                                <h4>{{ curDayData?.weiyu }}</h4>
                                <div>
                                    <div>
                                        <div>
                                            工作日:星期{{ obj[curDayData?.date_info?.week_day] }}
                                        </div>
                                        <div>农历:{{ curDayData?.date_info?.lunar_calendar }}</div>
                                        <div>星座:{{ curDayData?.date_info?.constellation }}</div>
                                    </div>
                                    <!-- {{ curDayData?.date_info }} -->
                                </div>
                            </div>
                        </v-col>
                    </v-row>
                    <div v-else>服务器错误...</div>

                    <div>
                        <div v-for="item in curDayData?.news" :key="item" style="margin: 8px">
                            <v-tooltip :text="item" location="top">
                                <template v-slot:activator="{ props }">
                                    <v-btn
                                        v-bind="props"
                                        style="width: 100%; display: flex; justify-content: start"
                                        >{{ item }}</v-btn
                                    >
                                </template>
                            </v-tooltip>
                        </div>
                    </div>
                </v-card>
            </v-col>
        </v-row>
    </div>
</template>
<script setup lang="ts">
import { ref, onBeforeMount } from 'vue';

import { read60s } from '@/request/api/open';

const obj = {
    1: '一',
    2: '二',
    3: '三',
    4: '四',
    5: '五',
    6: '六',
    0: '日',
};

const curDayData = ref(null);
async function read60sData() {
    const { data, code } = await read60s({ mode: 'api' });
    if (code === 200) {
        curDayData.value = data?.data;
    }
}
onBeforeMount(() => {
    read60sData();
});
</script>
<style lang="scss">
.smart_house {
    .v-card {
        border-radius: 6px;
    }
    .camera_wrap {
        position: relative;
        border-radius: 6px;
        overflow: hidden;
        height: 365px;
        .label {
            line-height: 25px;
            padding: 0 6px;
            background: rgba(0, 0, 0, 0.2);
            position: absolute;
            left: 16px;
            top: 16px;
            color: rgba(255, 255, 255, 0.8);
            border-radius: 2px;
            span {
                display: inline-block;
                width: 10px;
                height: 10px;
                background: red;
                border-radius: 5px;
            }
        }
        .label.lk {
            left: auto;
            right: 16px;
        }
    }
}
.mobile {
    .px-sm-3 {
        padding-right: 12px !important;
        padding-left: 12px !important;
    }
    .py-sm-1 {
        padding-top: 4px !important;
        padding-bottom: 4px !important;
    }
    .py1_no {
        padding-top: 0 !important;
        padding-bottom: 0 !important;
    }
    .sm_item_ {
        padding: 16px 12px 0 12px !important;
    }
    .sm_pt_1 {
        padding-top: 4px !important;
    }
    .music_card {
        // padding: ;
        .music_wrap {
            display: block;
            .zjbg {
                width: 180px;
            }
            .slider {
                margin-left: 0;
            }
        }
    }
}
</style>
