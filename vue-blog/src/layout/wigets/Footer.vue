<template>
    <v-card style="padding: 18px 0; width: 100%">
        <div class="d-flex" style="text-align: center; align-items: start">
            <div class="flex-1-1" v-html="fragList['footer-fe']"></div>
            <div class="flex-1-1" v-html="fragList['footer-nodejs']"></div>
            <div class="flex-1-1" v-html="fragList['footer-chanyue']"></div>
            <div class="flex-1-1" v-html="fragList['footer-guanyu']"></div>
        </div>
        <div>
            <p style="text-align: center" class="mt-30 text-c f-14">
                ©copyright {{ siteData?.name }} {{ siteData?.json?.siteSubtitle }}
                {{ siteData?.icp }}
            </p>
            <p style="text-align: center" v-html="fragList?.copyright"></p>
        </div>
    </v-card>

    <!-- 返回顶部 -->
    <span class="backtop none" @click="scrollToTop()">
        <svg
            data-v-2a8a074a=""
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class=""
        >
            <path
                data-v-2a8a074a=""
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M5.00806 3.0625C4.70158 3.0625 4.45312 3.31095 4.45312 3.61743C4.45312 3.92391 4.70158 4.17236 5.00806 4.17236H14.9968C15.3033 4.17236 15.5518 3.92391 15.5518 3.61743C15.5518 3.31095 15.3033 3.0625 14.9968 3.0625H5.00806ZM10.3948 5.9997C10.1781 5.78297 9.82676 5.78297 9.61005 5.9997L6.07849 9.53126C5.86176 9.74797 5.86176 10.0993 6.07849 10.316C6.2952 10.5328 6.64656 10.5328 6.86327 10.316L9.44751 7.73182V17.3809C9.44751 17.6873 9.69596 17.9358 10.0024 17.9358C10.3089 17.9358 10.5574 17.6873 10.5574 17.3809V7.73182L13.1416 10.316C13.3583 10.5328 13.7097 10.5328 13.9264 10.316C14.1431 10.0993 14.1431 9.74797 13.9264 9.53126L10.3948 5.9997Z"
                fill="#515767"
                stroke="#515767"
                stroke-width="0.5"
            ></path>
        </svg>
    </span>
</template>

<script setup lang="ts">
import { defineProps, onBeforeMount, ref } from 'vue';
import { frag, site } from '@/request/api/open';
import { useHead } from '@unhead/vue';
const props = defineProps({
    data: { type: Array },
});

const fragList = ref({
    'chanyue-introduce': null,
});
async function fragApi() {
    const { code, data } = await frag({});
    if (code === 200) {
        fragList.value = data;
    }
}
const siteData = ref(null);
async function siteApi() {
    const { code, data } = await site({});
    if (code === 200) {
        siteData.value = data;
        console.log(fragList.value);
        return;
        useHead({
            title: siteData.value?.title,
            meta: [
                {
                    name: 'description',
                    content: siteData.value?.description,
                },
                {
                    name: 'keywords',
                    content: siteData.value?.keywords,
                },
            ],
        });
    }
}

onBeforeMount(() => {
    fragApi();
    siteApi();
});

function scrollToTop() {
    console.log(document.querySelector('.v-main'));
    (document.querySelector('.v-main > .main') as HTMLDivElement)?.scrollIntoView({
        top: -100,
        behavior: 'smooth',
    });
}
</script>

<style scoped>
.backtop {
    position: fixed;
    bottom: 73px;
    right: 20px;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    box-shadow: 2px 2px 2px #ddd;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(255, 255, 255, 0.6);
    backdrop-filter: blur(8px);
    transition: all 0.3s ease-in-out;
    cursor: pointer;
}
.f-15 {
    font-size: 15px;
}

::v-deep(.pb-10) {
    padding-bottom: 10px !important;
}
::v-deep(.f-13) {
    font-size: 13px !important;
}

::v-deep(.pb-3) {
    padding-bottom: 3px !important;
}
::v-deep(.pt-3) {
    padding-top: 3px !important;
}
</style>
