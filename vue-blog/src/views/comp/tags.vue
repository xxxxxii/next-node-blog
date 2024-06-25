<template>
    <v-card style="padding: 8px; margin-top: 12px">
        <div style="font-size: 0.9rem; font-weight: 600">🏷️ 标签</div>

        <div>
            <v-chip
                style="margin: 4px; cursor: pointer"
                v-for="item in tagsList"
                :key="item?.id"
                color="primary"
                size="small"
                @click="tagDetail(item, self)"
            >
                {{ item?.name }}
            </v-chip>
        </div>
    </v-card>
</template>

<script setup lang="ts">
import { tags } from '@/request/api/open';
import { ref, onBeforeMount, onUpdated, inject, provide } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const props = defineProps({
    self: Boolean,
});
const emit = defineEmits(['reload']);

const tagsList = ref(null);
async function tagsListApi() {
    const { code, data } = await tags({});
    if (code === 200) {
        tagsList.value = data;
    }
}
function tagDetail(obj: any, isSelf = false) {
    if (!isSelf) {
        router.push({ path: '/tags/' + obj?.name, query: obj });
    } else {
        emit('reload', obj);
    }
}
onBeforeMount(() => {
    tagsListApi();
});
onUpdated(() => {
    console.log(222);
});
</script>

<style lang="scss" scoped></style>
