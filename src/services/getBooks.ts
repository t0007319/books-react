import api from "./api";
import {API_BOOKS} from "../globals/constants";
import {Book} from "../components/Books/types";
import {ApiPagination} from "../globals/types";
export default async () => {
    return await api.get(API_BOOKS.endpoint).then(
        (res) => {
            return <ApiPagination<Book[]>>res.data;
        }
    );
};
