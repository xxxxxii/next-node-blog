<template>
    <v-card v-skeleton="loading">
        <v-row>
            <v-col cols="12" :sm="10">
                <article class="article-box">
                    <h1
                        style="
                            font-size: 34px;
                            font-weight: bold;
                            width: 100%;
                            text-align: center;
                            flex: none;
                        "
                        v-skeleton-item
                    >
                        {{ article?.title || '-' }}
                    </h1>
                    <div
                        class="class d-flex sub-title"
                        style="
                            align-items: center;
                            flex-wrap: wrap;
                            justify-content: center;
                            flex: none;
                        "
                    >
                        <div class="d-flex" style="align-items: center">
                            <v-icon color="red" icon="mdi-calendar-range"></v-icon>
                            <div v-skeleton-item>
                                {{ dayjs(article?.createdAt).format('YYYY-MM-DD HH:mm') || '-' }}
                            </div>
                        </div>
                        <div class="d-flex" style="align-items: center">
                            <v-icon color="red" icon="mdi-update"></v-icon>
                            <div v-skeleton-item>
                                {{ dayjs(article?.updatedAt).format('YYYY-MM-DD HH:mm') || '-' }}
                            </div>
                        </div>
                        <div class="d-flex" style="align-items: center">
                            <v-icon color="red" icon="mdi-format-list-group"></v-icon>
                            <div v-skeleton-item>{{ article?.category?.name || '-' }}</div>
                        </div>
                        <div class="d-flex" style="align-items: center">
                            <v-icon color="red" icon="mdi-tag-multiple-outline"></v-icon>
                            <v-chip
                                style="margin: 4px; cursor: pointer"
                                v-for="item in tagData"
                                :key="item?.id"
                                color="primary"
                                size="x-small"
                                v-skeleton-item
                            >
                                {{ item?.name || '-' }}
                            </v-chip>
                        </div>
                    </div>
                    <div style="width: 100%; flex: 1; display: flex">
                        <MdPreview
                            v-skeleton-item
                            style="flex: 1; margin: 8px 0"
                            :editorId="state.id"
                            v-model="content"
                            :theme="getTheme() as any"
                        />
                    </div>
                </article>

                <div class="article-footer">
                    <div>
                        <div class="prev">
                            <v-card v-skeleton-item>
                                <RouterLink
                                    class="link"
                                    v-if="prevData?.id"
                                    :to="{ path: '/article/' + prevData?.id }"
                                >
                                    {{ prevData?.title || '没有了' }}
                                </RouterLink>
                                <template v-else>
                                    <div style="cursor: no-drop">{{ '没有了' }}</div>
                                </template>
                            </v-card>
                        </div>
                        <div class="next">
                            <v-card v-skeleton-item>
                                <RouterLink
                                    class="link"
                                    v-if="nextData?.id"
                                    :to="{ path: '/article/' + nextData?.id }"
                                >
                                    {{ nextData?.title || '没有了' }}
                                </RouterLink>
                                <template v-else>
                                    {{ '没有了' }}
                                </template>
                            </v-card>
                        </div>
                    </div>
                </div>
            </v-col>
            <v-col cols="12" sm="2" v-skeleton-item>
                <v-card style="position: fixed; width: 200px; right: 30px">
                    <MdCatalog
                        :editorId="state.id"
                        :scrollElement="scrollElement"
                        :theme="getTheme() as any"
                        @click="catalogClick"
                        @active="catalogActive as any"
                    />
                </v-card>
            </v-col>
        </v-row>
    </v-card>
</template>

<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router';
import { articleDetail as artDetail, tagList, pvAdd, next, prev } from '@/request/api/open';
import { onBeforeMount, ref, reactive } from 'vue';
import dayjs from 'dayjs';
import { MdEditor, MdPreview, MdCatalog } from 'md-editor-v3';
import 'md-editor-v3/lib/style.css';
import { useHead } from '@unhead/vue';
// import { useArticle } from '@/utils/article';
import { useMainStore } from '@/stores/useMainStore';

const loading = ref(true);

const state = reactive({
    id: 'my-editor',
});

const scrollElement = document.documentElement;

const { theme, getTheme } = useMainStore();
const route = useRoute();
const router = useRouter();
const id = ref(route.params?.id);

const article: any = ref(null);
const content = ref('');
async function articleDetailApi() {
    const { code, data } = await artDetail({ id: id.value });
    if (code === 200) {
        article.value = data;
        content.value = data?.content;

        useHead({
            title: data?.seo_title || data?.title,
            meta: [
                {
                    name: 'description',
                    content: data?.seo_description || data?.description,
                },
                {
                    name: 'keywords',
                    content: data?.seo_keywords,
                },
            ],
        });
        tagListApi();

        prevApi(data?.id, data?.cid);
        nextApi(data?.id, data?.cid);
        // 阅读量+1
        pvAdd({ id: id });

        loading.value = false;
    }
}

const prevData = ref({});
async function prevApi(id: number, cid: number) {
    const { code, data } = await prev({ id, cid });

    if (code === 200 && data?.length > 0) {
        prevData.value = data[0];
    }
}
const nextData = ref({});
async function nextApi(id: number, cid: number) {
    const { code, data } = await next({ id, cid });
    if (code === 200 && data?.length >= 0) {
        nextData.value = data[0];
    }
}

const tagData: any = ref([]);
async function tagListApi() {
    const { code, data } = await tagList({});
    if (code === 200) {
        let tabIds = article.value?.tag_id.split(',');
        tabIds.map((id) => {
            const obj: object = data.find((item) => {
                return item?.id === Number(id);
            });
            tagData.value.push(obj);
        });
    }
}

function catalogClick(e: MouseEvent, t: any) {
    const fDom = e?.target?.parentNode;
    document
        .querySelector('.md-editor-catalog-active')
        ?.classList.remove('md-editor-catalog-active');

    fDom.classList.add('md-editor-catalog-active');
    // md-editor-catalog-active
    (document.getElementById(t?.text) as HTMLElement)?.scrollIntoView();
}

function catalogActive(heading: Array<any> | undefined) {
    console.log(heading);
}

function detail(row: object) {
    if (!row?.id) return;
    let url = '/article/' + row?.id;
    console.log(row, url, 'row');
    id.value = row?.id;

    router.push({ path: url, key: new Date() });
}

onBeforeMount(() => {
    articleDetailApi();
});
</script>

<style scoped lang="scss">
.article-box {
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    min-height: 100vh;
    .sub-title {
        & > div {
            margin-right: 8px;
        }
    }
}
::v-deep(.md-editor-catalog-active > span) {
    color: #0184ff !important;
}
::v-deep(.md-editor-catalog-link span:hover) {
    color: #4ba8fe !important;
}
.article-footer {
    > div {
        display: flex;
        justify-content: space-between;
        .next,
        .prev {
            flex: 1;
            > .v-card {
                padding: 8px;
                margin: 8px;
                cursor: pointer;
            }
        }
    }
}
</style>
