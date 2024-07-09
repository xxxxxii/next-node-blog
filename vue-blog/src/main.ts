import { createApp } from 'vue';
import { createPinia } from 'pinia';
import './styles/index.scss';
import App from './App.vue';
import router from './router';
import { vuetify } from '@/plugins/vuetify';
import { createHead } from '@unhead/vue';

const head = createHead();
import '@/plugins/pwa';
import registeComponent from './components';

async function bootstrap() {
    const app = createApp(App);
    app.use(createPinia());
    app.use(vuetify);
    app.use(router);
    app.use(head);
    // 路由准备好再挂载
    await router.isReady();
    app.mount('#app').$nextTick(() => {
        const d = document.getElementById('_loading_');
        d?.setAttribute('class', 'loading_ hide');
    });
    // 注册 组件 /src/component 注册为全局组件
    registeComponent(app);
}
bootstrap();
