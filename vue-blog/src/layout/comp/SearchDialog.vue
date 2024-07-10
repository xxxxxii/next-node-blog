<template>
    <v-dialog
        v-model="isActive"
        persistent
        transition="dialog-top-transition"
        width="90%"
        max-height="90vh"
        scrollable
    >
        <template v-slot:default="{ isActive }">
            <v-card>
                <v-toolbar :title="title"></v-toolbar>

                <v-card-text class="text-h5 pa-12">
                    <v-card
                        v-for="(item, index) in list"
                        :key="index"
                        style="
                            margin: 10px 0;
                            padding: 6px;
                            display: flex;
                            justify-content: space-between;
                        "
                    >
                        <div>{{ item?.title }}</div>
                        <div>{{ item?.createdAt || '-' }}</div>
                    </v-card>
                </v-card-text>

                <v-card-actions class="justify-end">
                    <slot name="footer"></slot>
                </v-card-actions>
            </v-card>
        </template>
    </v-dialog>
</template>

<script setup lang="ts">
import { ref, defineProps, watch } from 'vue';

const props = defineProps({
    modelValue: {
        type: Boolean,
        default: false,
    },
    title: String,
    list: {
        type: Array,
        default: () => {
            return [{ title: 'item1' }, { title: 'item3' }, { title: 'item4' }];
        },
    },
});

const isActive = ref(props.modelValue);

watch(
    () => props.modelValue,
    (newVal) => {
        isActive.value = newVal;
    }
);
</script>

<style scoped></style>
