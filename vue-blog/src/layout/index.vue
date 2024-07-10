<template>
    <v-responsive class="border rounded" max-height="100vh">
        <v-app>
            <Navigation
                v-model:value="navState.menuVisible"
                :rail="navState.rail"
                :routes="navState.routes"
            />

            <v-app-bar>
                <Header
                    style="
                        display: flex;
                        align-items: center;
                        justify-content: space-between;
                        width: 100%;
                    "
                    v-model:rail="navState.rail"
                    v-model:mini="navState.isMini"
                    v-model:visible="navState.menuVisible"
                />
            </v-app-bar>
            <v-main style="overflow-y: auto; overflow-x: hidden; height: 100%; width: 100%">
                <!-- <v-container style="width: 100%"> -->
                <div class="main">
                    <RouterView :key="route.fullPath" />
                </div>
                <!-- </v-container> -->
                <Footer />
            </v-main>
        </v-app>
    </v-responsive>
</template>
<script setup lang="ts">
import { RouterView, useRouter, useRoute } from 'vue-router';
import Navigation from './wigets/Navigation.vue';
import Header from './wigets/Header.vue';
import Footer from './wigets/Footer.vue';
import { reactive, computed, watch } from 'vue';
import { useMainStore } from '@/stores/useMainStore';

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
    console.log(val, 'val');
    if (val) {
        navState.rail = true;
    }
});
</script>
<style scoped lang="scss">
::v-deep(.v-row) {
    margin: 0;
}
::v-deep(.v-col) {
    padding: 0 !important;
}
</style>
