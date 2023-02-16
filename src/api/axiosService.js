import axios from 'axios';
import { store } from '@/store/index.js';

const ROOT_API_URL = import.meta.env.VITE_API_URL;

const defaultAxiosOptions = {
    baseURL: ROOT_API_URL,
    responseType: 'json',
    headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
    }
};

const axiosService = axios.create(defaultAxiosOptions);

axiosService.interceptors.request.use((config) => {
    const token = store.getters['users/getToken'];

    if (!token) return config;

    return {
        ...config,
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        }
    };
});

export { axiosService };
