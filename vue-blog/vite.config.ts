import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vuetify from 'vite-plugin-vuetify';
import viteCompression from 'vite-plugin-compression';
import compression from 'vite-plugin-compression';
// import vueJsx from '@vitejs/plugin-vue-jsx'

// https://vitejs.dev/config/
export default defineConfig({
    base: '/',
    // base: '/vue-material-admin',
    plugins: [
        vue(),
        // vueJsx(), 都用Vue还用什么JSX
        viteCompression(),
        vuetify(),
        compression({
            verbose: true,
            disable: false,
            threshold: 10240, // 压缩阈值，小于这个值的文件将不会被压缩（单位为字节）这里就是大于 10kb 菜压缩
            algorithm: 'gzip', // 压缩算法
            ext: '.gz', // 压缩文件后缀名
        }),
    ],
    server: {
        open: true,
        host: '0.0.0.0',
        port: 8088,
        hmr: true,
        proxy: {
            // 选项写法
            '/api': {
                target: 'http://localhost:81',
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/api/, ''),
            },
        },
    },
    optimizeDeps: {
        exclude: ['@babylonjs/havok'],
    },
    assetsInclude: ['**/*.gltf', '**/*.glb'],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url)),
        },
    },

    build: {
        outDir: 'blog',
        manifest: false, // 当设置为 true，构建后将会生成 manifest.json 文件
        ssrManifest: true, // 构建不生成 SSR 的 manifest 文件
        ssr: undefined, // 生成面向 SSR 的构建
        assetsInlineLimit: '4096', // 小于此阈值的导入或引用资源将内联为 base64 编码
        cssCodeSplit: true, // 启用 CSS 代码拆分
        minify: 'terser', // 必须启用：terserOptions配置才会有效
        terserOptions: {
            compress: {
                drop_console: true,
                drop_debugger: true,
            },
        },
        rollupOptions: {
            output: {
                // 最小化拆分包
                manualChunks(id) {
                    if (id.includes('node_modules')) {
                        return id.toString().split('node_modules/')[1].split('/')[0].toString();
                    }
                },
                // 用于从入口点创建的块的打包输出格式[name]表示文件名,[hash]表示该文件内容hash值
                entryFileNames: 'js/[name].[hash].js',
                // 用于命名代码拆分时创建的共享块的输出命名
                // 　　chunkFileNames: 'js/[name].[hash].js',
                // 用于输出静态资源的命名，[ext]表示文件扩展名
                assetFileNames: '[ext]/[name].[hash].[ext]',
                // 拆分js到模块文件夹
                chunkFileNames: (chunkInfo) => {
                    const facadeModuleId = chunkInfo.facadeModuleId
                        ? chunkInfo.facadeModuleId.split('/')
                        : [];
                    const fileName = facadeModuleId[facadeModuleId.length - 2] || '[name]';
                    return `js/${fileName}/[name].[hash].js`;
                },
            },
        },
    },
});
