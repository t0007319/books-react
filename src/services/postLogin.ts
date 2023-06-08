import api from "./api";
import {API_LOGIN} from "../globals/constants";
import {ApiLogin, ApiLoginResponse} from "../globals/types";
export default async (login: ApiLogin) => {
    return await api.post(
        API_LOGIN.endpoint,
        login, {
        headers: {'Content-Type': 'application/json'}
    }).then(
        (res) => <ApiLoginResponse>res.data,
    );
};
