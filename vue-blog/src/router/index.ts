import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router';
import Layout from '@/layout/index.vue';

import { checkVersion } from '@/plugins/pwa';

const router = createRouter({
    history: createWebHistory(),
    scrollBehavior() {
        return { top: 0 };
    },
    routes: [
        {
            path: '/',
            name: 'home',
            meta: {
                visible: true,
                title: 'home',
                icon: 'mdi-home-minus-outline',
                isOne: true, // 一级菜单
            },
            // redirect: '/home',
            component: Layout,
            children: [
                {
                    path: '/',
                    name: 'home',
                    meta: {
                        title: 'yulinZ blogs',
                        icon: 'mdi-alpha-t',
                        keepAlive: true,
                        visible: false,
                    },
                    component: () => import('@/views/home/index.vue'),
                },
            ],
        },
        {
            path: '/test',
            name: 'test',
            meta: {
                visible: false,
                title: 'test',
                icon: 'mdi-home-minus-outline',
                isOne: true, // 一级菜单
            },
            // redirect: '/home',
            component: Layout,
            children: [
                {
                    path: '/test',
                    name: 'test',
                    meta: {
                        title: 'yulinZ blogs',
                        icon: 'mdi-alpha-t',
                        keepAlive: true,
                        visible: false,
                    },
                    component: () => import('@/views/test/index.vue'),
                },
            ],
        },
        {
            path: '/blog',
            name: 'blog',
            meta: {
                visible: true,
                title: 'blog',
                icon: 'mdi-post-outline',
                isOne: true, // 一级菜单
            },
            component: Layout,
            children: [
                {
                    path: '/index',
                    name: 'blog home',
                    meta: {
                        title: 'yulinZ blogs',
                        icon: 'mdi-alpha-t',
                        keepAlive: true,
                        visible: false,
                    },
                    component: () => import('@/views/blog/index.vue'),
                },
            ],
        },
        {
            path: '/60s',
            name: '60s',
            meta: {
                visible: true,
                title: 'news',
                icon: 'mdi-newspaper-variant-multiple',
                isOne: true, // 一级菜单
            },
            component: Layout,
            children: [
                {
                    path: '/60s',
                    name: '60s home',
                    meta: {
                        title: '60秒读懂世界',
                        icon: 'mdi-alpha-t',
                        keepAlive: false,
                        visible: false,
                    },
                    component: () => import('@/views/dashboard/60s.vue'),
                },
            ],
        },
        // {
        //     path: '/dashboard',
        //     // redirect: '/dashboard/smart-house',
        //     name: 'Dashboard',
        //     meta: {
        //         visible: true,
        //         title: 'Dashboard',
        //         icon: 'mdi-gauge',
        //     },
        //     component: Layout,
        //     children: [
        //         {
        //             path: '/dashboard/tesla-model-s',
        //             name: 'teslaModelS',
        //             meta: {
        //                 title: 'Tesla Model S',
        //                 icon: 'mdi-alpha-t',
        //                 keepAlive: false,
        //                 visible: true,
        //             },
        //             component: () => import('@/views/dashboard/teslaModelS.vue'),
        //             children: [],
        //         },
        //         {
        //             path: '/dashboard/smart-house',
        //             name: 'smartHouse',
        //             meta: {
        //                 title: 'Smart House',
        //                 icon: 'mdi-alpha-s',
        //                 keepAlive: false,
        //                 visible: true,
        //             },
        //             component: () => import('@/views/dashboard/smartHouse.vue'),
        //             children: [],
        //         },
        //     ],
        // },
        // {
        //     path: '/componets',
        //     name: 'componets',
        //     meta: {
        //         visible: true,
        //         title: 'Componets',
        //         icon: 'mdi-cube-scan',
        //     },
        //     component: Layout,
        //     children: [
        //         {
        //             path: 'samples',
        //             name: 'Samples',
        //             meta: {
        //                 title: 'Samples',
        //                 icon: 'mdi-alpha-s',
        //                 keepAlive: false,
        //                 visible: true,
        //             },
        //             component: () => import('@/views/componets/sample.vue'),
        //             children: [],
        //         },
        //         {
        //             path: 'table',
        //             name: 'table',
        //             meta: {
        //                 title: 'Table',
        //                 icon: 'mdi-alpha-t',
        //                 keepAlive: false,
        //                 visible: true,
        //             },
        //             component: () => import('@/views/componets/table.vue'),
        //             children: [],
        //         },
        //         {
        //             path: 'calendar',
        //             name: 'calendar',
        //             meta: {
        //                 title: 'Calendar',
        //                 icon: 'mdi-alpha-c',
        //                 keepAlive: false,
        //                 visible: true,
        //             },
        //             component: () => import('@/views/componets/calendar.vue'),
        //             children: [],
        //         },
        //     ],
        // },
        // {
        //     path: '/graphics',
        //     name: 'graphics',
        //     meta: {
        //         visible: true,
        //         title: 'Graphics',
        //         icon: 'mdi-image',
        //     },
        //     component: Layout,
        //     children: [
        //         {
        //             path: 'three-js',
        //             name: 'three.js',
        //             meta: {
        //                 keepAlive: false,
        //                 title: 'Three.js',
        //                 icon: 'mdi-alpha-t',
        //                 visible: true,
        //             },
        //             component: () => import('@/views/graphics/threeJs.vue'),
        //         },
        //         {
        //             path: 'babylonjs',
        //             name: 'Babylon.js',
        //             meta: {
        //                 keepAlive: false,
        //                 title: 'Babylon.js',
        //                 icon: 'mdi-alpha-b',
        //                 visible: true,
        //             },
        //             component: () => import('@/views/babylonjs/babylonjs.vue'),
        //         },
        //         {
        //             path: 'pixijs',
        //             name: 'Pixi.js',
        //             meta: {
        //                 keepAlive: false,
        //                 title: 'Pixi.js',
        //                 icon: 'mdi-alpha-p',
        //                 visible: true,
        //             },
        //             component: () => import('@/views/graphics/pixiJs.vue'),
        //         },
        //     ],
        // },
        // {
        //     path: '/editor',
        //     name: 'Editor',
        //     meta: {
        //         visible: true,
        //         title: 'Editor',
        //         icon: 'mdi-view-module',
        //     },
        //     component: Layout,
        //     children: [
        //         {
        //             path: 'oreom-editor',
        //             name: 'oreom',
        //             meta: {
        //                 title: 'Oreom Editor',
        //                 icon: 'mdi-alpha-o',
        //                 keepAlive: false,
        //                 visible: true,
        //             },
        //             component: () => import('@/views/oreom-editor/index.vue'),
        //             children: [],
        //         },
        //     ],
        // },
        {
            path: '/login',
            name: 'login',
            meta: {
                title: 'Login',
                icon: 'mdi-shield-account',
                visible: false,
            },
            component: () => import('@/views/login/login.vue'),
        },
        { path: '/:pathMatch(.*)', name: 'Match', meta: { keepAlive: false }, redirect: '/404' },
        {
            path: '/404',
            name: '404',
            meta: { keepAlive: false, title: 'Not found', icon: 'mdi-paw-off', visible: false },
            component: Layout,
            children: [
                {
                    path: '',
                    name: 'd404',
                    meta: {
                        title: 'Not found',
                        visible: false,
                    },
                    component: () => import('@/views/feedback/no.vue'),
                    children: [],
                },
            ],
        },
        {
            path: '/article/:id',
            name: 'articleDetail',
            meta: { keepAlive: false, title: '文章详情', icon: 'mdi-paw-off', visible: false },
            component: Layout,
            children: [
                {
                    path: '',
                    name: 'articleDetail',
                    meta: {
                        title: '文章详情',
                        visible: false,
                    },
                    component: () => import('@/views/blog/articleDetail.vue'),
                    children: [],
                },
            ],
        },
        {
            path: '/tags/:name',
            name: 'tags',
            meta: { keepAlive: false, title: '标签分类', icon: 'mdi-paw-off', visible: false },
            component: Layout,
            children: [
                {
                    path: '',
                    name: 'tags',
                    meta: {
                        title: '标签',
                        visible: false,
                    },
                    component: () => import('@/views/blog/tags.vue'),
                    children: [],
                },
            ],
        },
    ],
});

router.beforeEach(async (to, _from, next) => {
    next();
});

router.afterEach(() => {
    checkVersion();
});
export default router;
