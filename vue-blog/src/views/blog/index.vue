<template>
    <div>
        <v-row>
            <v-col
                cols="12"
                md="4"
                v-for="item in arcListData"
                :key="item?.id"
                style="padding: 8px"
            >
                <v-card style="height: 100%" @click="articleDes(item)">
                    <template v-slot:title> {{ item?.title }} </template>

                    <template v-slot:subtitle>
                        <div class="flex items-center" style="display: flex">
                            <div class="flex items-center mr-2">
                                <v-icon size="14" color="red" icon="mdi-clock-time-eight-outline" />
                                <span>{{ dayjs(item?.createdAt).format('YYYY/MM/DD HH:mm') }}</span>
                            </div>
                            <div class="flex items-center">
                                <v-icon size="16" color="red" icon="mdi-read" />
                                <span>{{ item?.pv }}</span>
                            </div>
                        </div>
                    </template>

                    <template v-slot:text>
                        {{ item?.description }}
                    </template>
                </v-card>

                <!-- <div class="text-center text-caption">Using Slots Only</div> -->
            </v-col>
        </v-row>
    </div>
</template>

<script setup lang="ts">
import { arcList, arcTongJi } from '@/request/api/open';
import { ref, onBeforeMount } from 'vue';
import dayjs from 'dayjs';
import { useArticle } from '@/utils/article';

const { articleDetail } = useArticle();

const arcListData = ref(null);
async function arcListApi() {
    const { code, data } = await arcList();
    if (code === 200) {
        arcListData.value = data?.list;
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
