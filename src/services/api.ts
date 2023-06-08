import axios from "axios";
import {API_HOST} from "../globals/constants";

const client = axios.create({
    baseURL: API_HOST.endpoint
});

client.defaults.withCredentials = true;
client.defaults.headers.Accept = true;

// Add a request interceptor
client.interceptors.request.use(function (config) {
    const token: string | null = localStorage.getItem('token');

    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
        config.headers.Accept = 'application/json';
        config.withCredentials = true;
    }

    return config;
});

export default client;
