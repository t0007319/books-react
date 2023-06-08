import api from "./api";
import {API_BOOKS} from "../globals/constants";
import {Book} from "../components/Books/types";
export default async (book: Book) => {
    return await api.post(
        API_BOOKS.endpoint,
        book,
        {
            headers: {'Content-Type': 'application/json'}
        }).then(
        (res) => <Book[]>res.data
    );
};
