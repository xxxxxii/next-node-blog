<template>
    <div class="main" v-skeleton.animated="show">
        <v-row>
            <v-col
                cols="12"
                md="4"
                v-for="item in arcListData"
                :key="item?.id"
                style="padding: 8px"
            >
                <v-card style="height: 100%" @click="articleDes(item)">
                    <template v-slot:title>
                        <div v-skeleton-item>{{ item?.title }}</div>
                    </template>

                    <template v-slot:subtitle>
                        <div class="flex items-center" style="display: flex; margin: 4px 0">
                            <div class="flex items-center mr-2">
                                <v-icon
                                    size="16"
                                    color="red"
                                    icon="mdi-clock-time-eight-outline"
                                    v-skeleton-item
                                />
                                <span v-skeleton-item>{{
                                    dayjs(item?.createdAt).format('YYYY/MM/DD HH:mm')
                                }}</span>
                            </div>
                            <div class="flex items-center">
                                <v-icon size="16" color="red" icon="mdi-read" v-skeleton-item />
                                <span v-skeleton-item>{{ item?.pv }}</span>
                            </div>
                        </div>
                    </template>

                    <template v-slot:text>
                        <div v-skeleton-item>{{ item?.description }}</div>
                    </template>
                </v-card>

                <!-- <div class="text-center text-caption">Using Slots Only</div> -->
            </v-col>
        </v-row>
        <v-card>
            <div class="text-center">
                <v-pagination
                    v-model="page.cur"
                    :length="page.count"
                    :total-visible="7"
                    @update:model-value="pageClick"
                ></v-pagination>
            </div>
        </v-card>
    </div>
</template>

<script setup lang="ts">
import { arcList, arcTongJi } from '@/request/api/open';
import { ref, onBeforeMount } from 'vue';
import dayjs from 'dayjs';
import { useArticle } from '@/utils/article';

const show = ref(true);

const { articleDetail } = useArticle();
const page = ref({
    cur: 1,
    count: 0,
    pageSize: 12,
});

function pageClick(cPage: any) {
    page.value.cur = cPage;
    arcListApi();
}

const arcListData = ref([{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}]);
async function arcListApi() {
    const { code, data } = await arcList(page.value);
    if (code === 200) {
        arcListData.value = data?.list;
        page.value.count = data?.total;
        show.value = false;
        // setTimeout(() => {

        // }, 3000);
    }
}

async function arcTongJiData() {
    const { code, data } = await arcTongJi();
    if (code === 200) {
        // arcListData.value = data?.list;
    }
}
function articleDes(obj: any) {
    articleDetail(obj);
}

onBeforeMount(() => {
    arcListApi();
    arcTongJiData();
});
</script>

<style scoped lang="scss"></style>
