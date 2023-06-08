import {useQuery} from "@tanstack/react-query";
import getBooks from "../services/getBooks";
import {API_BOOKS} from "../globals/constants";

export default () => {
    return useQuery({queryKey: [API_BOOKS.key], queryFn: getBooks});
};
