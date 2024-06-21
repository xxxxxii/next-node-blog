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
import { articleDetail, tagList } from '@/request/api/open';
import { onBeforeMount, ref, reactive } from 'vue';
import dayjs from 'dayjs';
import { MdEditor, MdPreview, MdCatalog } from 'md-editor-v3';
import 'md-editor-v3/lib/style.css';
import { useHead } from '@unhead/vue';

import { useMainStore } from '@/stores/useMainStore';
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
    const { code, data } = await articleDetail({ id: id });
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
</style>
