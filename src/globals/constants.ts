import {ApiEndpoint} from "./types";

export const API_HOST: ApiEndpoint = {
    key: 'host',
    endpoint: 'http://localhost:80'
};
export const API_LOGIN: ApiEndpoint = {
    key: 'login',
    endpoint: '/api/login'
};
export const API_BOOKS: ApiEndpoint = {
    key: 'books',
    endpoint: '/api/v1/books'
}
export const API_CSRF: ApiEndpoint = {
    key: 'csrf',
    endpoint: '/sanctum/csrf-cookie'
}
