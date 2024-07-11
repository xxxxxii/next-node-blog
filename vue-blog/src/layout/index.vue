<template>
    <v-responsive class="border rounded" max-height="100vh">
        <v-app style="display: flex;flex-direction: column;">
            <Navigation ref="nav" v-model:value="navState.menuVisible" :rail="navState.rail"
                :routes="navState.routes" />
            <v-app-bar style="position: relative;">
                <Header style="
                        display: flex;
                        align-items: center;
                        justify-content: space-between;
                        width: 100%;
                        flex: none;
                    " v-model:rail="navState.rail" v-model:mini="navState.isMini"
                    v-model:visible="navState.menuVisible" />
            </v-app-bar>
            <div style="flex:1;overflow-y: auto; min-height: 100vh;"
                :style="{ 'margin-left': navState.menuVisible ? '77px' : '0' }">
                <div class="main">
                    <RouterView :key="route.fullPath" />
                </div>
                <Footer />
            </div>
        </v-app>
    </v-responsive>
</template>
<script setup lang="ts">
import { RouterView, useRouter, useRoute } from 'vue-router';
import Navigation from './wigets/Navigation.vue';
import Header from './wigets/Header.vue';
import Footer from './wigets/Footer.vue';
import { reactive, computed, watch, ref } from 'vue';
import { useMainStore } from '@/stores/useMainStore';

const nav = ref(null);

const mainStore = useMainStore();
const router = useRouter();
const route = useRoute();
const navState = reactive({
    menuVisible: true,
    rail: !mainStore.isMobile,
    isMini: !mainStore.isMobile,
    routes: router.options.routes,
});
const device = computed(() => mainStore.isMobile);
watch(device, (val) => {
    console.log(val, 'val-------------');
    if (val) {
        navState.rail = true;
        // navState.menuVisible = false
    }
});


function onScroll(val: any) {
    console.log(val, 'val')
}
</script>
<style scoped lang="scss">
::v-deep(.v-row) {
    margin: 0;
}

::v-deep(.v-col) {
    padding: 0 !important;
}
</style>
