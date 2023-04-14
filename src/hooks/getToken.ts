import {useState} from "react";
import axios from "axios";
axios.defaults.withCredentials = true;

export default () => {
    // Add a request interceptor
    axios.interceptors.request.use(function (config) {
        const token: string | null = localStorage.getItem('token');

        if (token) {
            config.headers.Authorization = token;
        }

        return config;
    });
}
