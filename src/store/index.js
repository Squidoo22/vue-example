import { createStore } from 'vuex';
import auth from '@/store/modules/auth.js';

const debug = process.env.NODE_ENV !== 'production';

export const store = createStore({
    modules: {
        auth: {
            namespaced: true,
            ...auth
        }
    },
    strict: debug
});
