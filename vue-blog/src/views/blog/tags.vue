<template>
    <v-row>
        <v-col cols="12" sm="10" style="display: flex; flex-direction: column">
            <v-card style="flex: none"><v-breadcrumbs :items="breadcrumbs"></v-breadcrumbs></v-card>

            <v-card style="flex: 1">
                <v-card
                    v-if="arcList?.length > 0"
                    style="padding: 8px; margin: 6px"
                    v-for="item in arcList"
                    :key="item.id"
                    @click="articleDetail(item)"
                >
                    <div>{{ item?.title }}</div>
                    <div style="opacity: 0.3">
                        <div>
                            阅读{{ item?.pv }}
                            {{ dayjs(item?.createdAt).format('YYYY-MM-DD HH:mm') }}
                        </div>
                    </div>
                    <div style="opacity: 0.5">
                        {{ item?.description }}
                    </div>
                </v-card>
                <div v-else>
                    <NoData />
                </div>
            </v-card>
            <v-card>
                <div class="text-center" v-if="arcList?.length > 0">
                    <v-pagination
                        v-model="page.cur"
                        :length="page.count"
                        :total-visible="7"
                        @update:model-value="pageChange"
                    ></v-pagination>
                </div>
            </v-card>
        </v-col>
        <v-col cols="12" sm="2" class="item-l">
            <tags self @reload="reload" />
        </v-col>
    </v-row>
</template>

<script setup lang="ts">
import { ref, onBeforeMount } from 'vue';
import { useRoute } from 'vue-router';
import tags from '../comp/tags.vue';
import { articleByTid } from '@/request/api/open';
import NoData from '@/components/NoData/index';
import '../../styles/public.css';
import dayjs from 'dayjs';
import { useArticle } from '@/utils/article';
const { articleDetail, tagDetail } = useArticle();
const route = useRoute();
// const tagName = route.query?.tagName;
const tagName = route.query?.name;
const breadcrumbs: any = ref(['首页', 'tag标签', tagName]);

const page = ref({
    cur: 1,
    count: 0,
    pageSize: 10,
});

const paramsObj = ref({});

function pageChange(cPage: any) {
    page.value.cur = cPage;
    const params = { ...paramsObj.value, ...page.value };
    articleByTidApi(params);
}

const arcList = ref([]);
async function articleByTidApi(params: any) {
    let { code, data } = await articleByTid(params);
    if (code === 200) {
        arcList.value = data?.list;
        page.value.count = data?.total;
    }
}

function reload(obj: any) {
    breadcrumbs.value[2] = obj?.name;
    paramsObj.value = obj;
    const params = { ...obj, ...page.value };
    articleByTidApi(params);
}

onBeforeMount(() => {
    paramsObj.value = route.query;
    const params = { ...route.query, ...page.value };
    articleByTidApi(params);
});
</script>

<style scoped></style>
