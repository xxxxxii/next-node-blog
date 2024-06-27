<template>
    <v-card>
        <v-row>
            <v-col cols="12" :sm="10">
                <article class="article-box">
                    <h1 style="font-size: 34px; font-weight: bold">{{ article?.title }}</h1>
                    <div
                        class="class d-flex sub-title"
                        style="align-items: center; flex-wrap: wrap; justify-content: center"
                    >
                        <div class="d-flex" style="align-items: center">
                            <v-icon color="red" icon="mdi-calendar-range"></v-icon
                            >{{ dayjs(article?.createdAt).format('YYYY-MM-DD HH:mm') }}
                        </div>
                        <div class="d-flex" style="align-items: center">
                            <v-icon color="red" icon="mdi-update"></v-icon
                            >{{ dayjs(article?.updatedAt).format('YYYY-MM-DD HH:mm') }}
                        </div>
                        <div class="d-flex" style="align-items: center">
                            <v-icon color="red" icon="mdi-format-list-group"></v-icon
                            >{{ article?.category?.name }}
                        </div>
                        <div class="d-flex" style="align-items: center">
                            <v-icon color="red" icon="mdi-tag-multiple-outline"></v-icon>
                            <v-chip
                                style="margin: 4px; cursor: pointer"
                                v-for="item in tagData"
                                :key="item?.id"
                                color="primary"
                                size="x-small"
                            >
                                {{ item?.name }}
                            </v-chip>
                        </div>
                    </div>
                    <div style="width: 100%">
                        <MdPreview :editorId="state.id" v-model="content" :theme="getTheme()" />
                    </div>
                </article>

                <div class="article-footer">
                    <div>
                        <div class="prev">
                            <v-card @click="prevData?.id && articleDetail(prevData)">
                                {{ prevData?.title || '没有了' }}
                            </v-card>
                        </div>
                        <div class="next">
                            <v-card @click="nextData?.id && articleDetail(nextData)">
                                {{ nextData?.title || '没有了' }}
                            </v-card>
                        </div>
                    </div>
                </div>
            </v-col>
            <v-col cols="12" sm="2">
                <v-card style="position: fixed; width: 200px; right: 30px">
                    <MdCatalog
                        :editorId="state.id"
                        :scrollElement="scrollElement"
                        :theme="getTheme()"
                        @click="catalogClick"
                        @active="catalogActive"
                    />
                </v-card>
            </v-col>
        </v-row>
    </v-card>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';
import { articleDetail as artDetail, tagList, pvAdd, next, prev } from '@/request/api/open';
import { onBeforeMount, ref, reactive } from 'vue';
import dayjs from 'dayjs';
import { MdEditor, MdPreview, MdCatalog } from 'md-editor-v3';
import 'md-editor-v3/lib/style.css';
import { useHead } from '@unhead/vue';
import { useArticle } from '@/utils/article';
import { useMainStore } from '@/stores/useMainStore';

const { articleDetail } = useArticle();

const state = reactive({
    id: 'my-editor',
});

const scrollElement = document.documentElement;

const { theme, getTheme } = useMainStore();
console.log(theme, 'theme');
const route = useRoute();
const id = route.params?.id;

const article: any = ref(null);
const content = ref('');
async function articleDetailApi() {
    const { code, data } = await artDetail({ id: id });
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
