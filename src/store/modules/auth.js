import { axiosService } from '../../api/axiosService';

const state = () => ({
    user: null,
    token: null
});

const mutations = {
    SET_USER(state, payload) {
        state.user = payload;
    },
    SET_TOKEN(state, payload) {
        state.token = payload;
    }
};

const actions = {
    async signIn({ commit }, user) {
        await axiosService
            .post('auth/local/signin', {
                username: user.username,
                password: user.password
            })
            .then((response) => {
                localStorage.setItem('user', JSON.stringify(response.data));
                localStorage.setItem(
                    'token',
                    JSON.stringify(response.data?.api_token)
                );
                commit('setUser', response.data?.data);
                commit('setToken', response.data?.api_token);

                return response;
            })
            .catch((error) => console.log(error));
    }
};

const getters = {
    getUser: (state) => state.user || {},
    isAuthenticated: (state) => !!state.token,
    getToken: (state) => state.token
};

export default {
    state,
    getters,
    actions,
    mutations
};
