<template>

    <v-navigation-drawer expand-on-hover :rail="rail" class="layout_navigation" rail-width="77" v-model="val">
        <v-list class="py-4 mx-2 logo" nav>
            <v-list-item rounded :prepend-avatar="logo" class="mx-1" to="/">
                <v-list-item-title class="title">{{ title }}</v-list-item-title>
                <v-list-item-subtitle>{{ subTitle }}</v-list-item-subtitle>
            </v-list-item>
        </v-list>
        <v-divider></v-divider>

        <v-list nav class="mx-2" color="primary">
            <v-list-subheader>Dashboard</v-list-subheader>
            <template v-for="(item, key) in routes" :key="key">
                <v-list-item v-if="item.meta?.visible && item.meta?.isOne" :prepend-icon="item.meta?.icon as any"
                    :title="item.meta?.title as any" :to="{ name: item?.children[0]?.name }" class="mx-1"
                    active-class="nav_active" rounded="lg">
                </v-list-item>

                <v-list-group v-if="
                    item.meta?.visible &&
                    item.children &&
                    item.children.length > 0 &&
                    !item.meta?.isOne
                " class="mx-1">
                    <template v-slot:activator="{ props }">
                        <v-list-item v-bind="props" :prepend-icon="item.meta.icon as any"
                            :title="item.meta.title as any" active-class="nav_active" rounded="lg" />
                    </template>
                    <template v-for="(row, i) in item.children">
                        <v-list-item v-if="row.meta?.visible as any" :title="row.meta?.title as any"
                            :prepend-icon="rail ? (row.meta?.icon as any) : ''" :key="i" :to="{ name: row.name }"
                            rounded="lg" />
                    </template>
                </v-list-group>
                <v-list-subheader v-if="item.name === 'Dashboard'">Examples</v-list-subheader>
                <v-list-subheader v-if="item.name === 'Miscellaneous'">Other</v-list-subheader>
            </template>

            <v-list-item :prepend-icon="item?.meta?.icon" class="mx-1" rounded="lg" v-for="item in linkNav"
                :key="item?.name">
                <v-list-item-title><a target="_blank" :href="item?.meta?.link" class="link">{{
                    item?.meta?.title
                        }}</a></v-list-item-title>
            </v-list-item>
        </v-list>
    </v-navigation-drawer>
</template>
<script lang="ts" setup>
import logo from '@/assets/admin-logo.png';
import type { RouteRecordRaw } from 'vue-router';
import { defineEmits, computed, ref } from 'vue';

import { linkNav } from '@/router/linkNav';

const emit = defineEmits(['update:value']);

const title = import.meta.env.VITE_TITLE;
const subTitle = import.meta.env.VITE_SUB_TITLE;
const props = withDefaults(
    defineProps<{
        rail: boolean;
        value?: boolean;
        routes: readonly RouteRecordRaw[];
    }>(),
    {}
);

const showMenu = ref(false);

const val = computed({
    get() {
        console.log(props.value, 'props.value')
        return props.value;
    },
    set(val: boolean) {
        emit('update:value', val);
    },
});
</script>
@/stores/useMainStore
