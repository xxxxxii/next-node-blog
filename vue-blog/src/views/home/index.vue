<template>
    <v-row class="flex main">
        <v-col cols="12" :sm="10">
            <v-row>
                <v-col cols="12" :sm="6" class="item-l">
                    <v-card>
                        <v-carousel
                            hide-delimiters
                            show-arrows="hover"
                            verticalDelimiters="right"
                            v-if="homeData?.banner"
                            progress="primary"
                            cycle
                            loop
                            style="height: 300px"
                        >
                            <v-carousel-item
                                v-for="item in homeData?.banner"
                                :key="item?.id"
                                :src="item.img_url"
                                cover
                            >
                                <div
                                    style="
                                        width: 100%;
                                        height: 100%;
                                        display: flex;
                                        justify-content: center;
                                        align-items: center;
                                        position: relative;
                                    "
                                >
                                    <a :href="item?.link_url" target="_blank" class="carousel-text">
                                        {{ item?.title }}
                                    </a>
                                </div>
                            </v-carousel-item>
                        </v-carousel>
                    </v-card>
                </v-col>
                <v-col cols="12" :sm="6" class="item-r">
                    <v-card :title="'最新文章'" style="height: 100%">
                        <v-card
                            @click="articleDetail(item)"
                            style="padding: 6px; margin: 10px 15px"
                            v-for="item in homeData?.topnews?.news"
                            :key="item.id"
                        >
                            <div class="d-flex" style="justify-content: space-between">
                                <div class="title t-els" style="flex: 1">{{ item?.title }}</div>
                                <div class="date" style="width: 50px; flex: none">
                                    {{ item?.createdAt }}
                                </div>
                            </div>
                        </v-card>
                    </v-card>
                </v-col>
            </v-row>
            <v-row>
                <v-col
                    cols="12"
                    :sm="6"
                    v-for="(item, index) in homeData?.article"
                    :key="index"
                    :class="{
                        'item-l': index % 2 === 0,
                        'item-r': index % 2 !== 0,
                    }"
                >
                    <v-card :title="item?.category?.name" style="height: 100%">
                        <template v-if="item?.list?.length > 0">
                            <div style="margin: 8px 15px" v-for="ic in item?.list" :key="ic?.id">
                                <v-card style="padding: 6px" @click="articleDetail(ic)">
                                    {{ ic?.title }}
                                </v-card>
                            </div>
                        </template>
                        <template v-else>
                            <NoData />
                        </template>
                    </v-card>
                </v-col>
            </v-row>
        </v-col>
        <v-col cols="12" :sm="2" class="item-l right-box">
            <v-card style="padding: 8px">
                <div style="font-size: 0.9rem; font-weight: 600">
                    <v-icon size="16" color="red" icon="mdi-tooltip-check-outline"></v-icon>
                    系统公告
                </div>
                <v-card
                    style="padding: 4px 8px; margin: 4px 0px"
                    v-html="fragList['sys-tip']"
                ></v-card>
            </v-card>
            <!--  推荐 -->
            <v-card style="padding: 8px; margin-top: 12px">
                <div style="font-size: 0.9rem; font-weight: 600">
                    <v-icon size="16" color="red" icon="mdi-receipt-send-outline"></v-icon>
                    推荐文章
                </div>

                <div>
                    <v-card
                        v-for="n in homeData?.recommend"
                        :key="n?.id"
                        style="margin: 8px 0; cursor: pointer"
                        @click="articleDetail(n)"
                    >
                        <v-list-item>
                            {{ n?.title }}
                        </v-list-item>
                    </v-card>
                </div>
                <!-- <div style="font-size: 0.9rem; font-weight: 600">
                    {{ homeData?.recommend[0]?.title }}
                </div>

                <div>
                    {{ homeData?.recommend[0]?.description }}
                </div> -->
            </v-card>
            <!--  tag -->
            <Tags />
            <!--  友链 -->
            <v-card style="padding: 8px; margin-top: 12px">
                <div style="font-size: 0.9rem; font-weight: 600">
                    <v-icon color="red" icon="mdi-link" />友链
                </div>

                <div>
                    <v-list lines="one">
                        <v-list-item
                            v-for="n in friendlinkList?.list"
                            :key="n?.id"
                            :title="n?.title"
                            :subtitle="n?.link"
                        >
                            <template v-slot:subtitle="{ subtitle }">
                                <a :href="n?.link" target="_blank" style="cursor: pointer">{{
                                    n?.link
                                }}</a>
                            </template>
                        </v-list-item>
                    </v-list>
                </div>
            </v-card>
        </v-col>
    </v-row>
</template>

<script setup lang="ts">
import { ref, onBeforeMount } from 'vue';
import { home, tags, frag, friendlink } from '@/request/api/open';
import NoData from '@/components/NoData/index.vue';
import Tags from '@/views/comp/tags.vue';
import { useArticle } from '@/utils/article';
import '../../styles/public.css';
const { articleDetail, tagDetail } = useArticle();
// import { useHead } from '@unhead/vue';

const homeData: any = ref(null);

async function homeApi() {
    const { code, data } = await home({ mode: 'api' });
    if (code === 200) {
        homeData.value = data;

        // homeData.value.banner.map((item) => {
        //     item['link_url'] = 'http://localhost:81';
        //     item['img_url'] = 'public/uploads/default/2024/03/08/1709902824673_source_1.png.png';
        // });
    }
}

const tagsList = ref(null);
async function tagsListApi() {
    const { code, data } = await tags({});
    if (code === 200) {
        tagsList.value = data;
    }
}
const fragList = ref({
    'chanyue-introduce': null,
});
async function fragApi() {
    const { code, data } = await frag({});
    if (code === 200) {
        fragList.value = data;
    }
}

const friendlinkList = ref(null);
async function friendlinkApi() {
    const { code, data } = await friendlink({});
    if (code === 200) {
        friendlinkList.value = data;
    }
}
onBeforeMount(() => {
    homeApi();
    tagsListApi();
    fragApi();
    friendlinkApi();
});
</script>

<style scoped>
::v-deep(.v-timeline-item__body) {
    padding: 8px !important;
}
/* .item-l,
.item-r {
    padding: 6px 0;
} */
.right-box {
    padding: 0 12px 0 12px;
}
/* @media (min-width: 600px) {
    .item-l {
        padding: 0 6px 12px 0;
    }
    .item-r {
        padding: 0 0 12px 6px;
    }
    .right-box {
        padding-top: 12px;
    }
} */
::v-deep(.mt-10) {
    margin-top: 10px !important;
}

.carousel-text {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    text-align: center;
    padding: 10px;
    background: rgba(0, 0, 0, 0.35);
    color: #fff;
}
.t-els {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
</style>
