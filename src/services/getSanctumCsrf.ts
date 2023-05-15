import api from "./api";
import {API_CSRF} from "../globals/constants";
export default async () => {
    return await api.get(API_CSRF.endpoint).then(
        (res) => {
            return true;
        }
    );
};
