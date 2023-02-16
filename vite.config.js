import { fileURLToPath, URL } from 'node:url';
import { createProxyMiddleware } from 'http-proxy-middleware';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

function serverProxy() {
    return {
        name: 'serverProxy',
        configureServer(server) {
            const filter = function (pathname, req) {
                return typeof req.headers['x-ajax'] != 'undefined';
            };
            server.middlewares.use(
                '/',
                createProxyMiddleware(filter, {
                    target: 'http://vrgo.app:3333/',
                    changeOrigin: true
                })
            );
        }
    };
}

export default defineConfig({
    plugins: [vue(), serverProxy()],
    define: {
        'process.env': {}
    },
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url))
        }
    }
});
