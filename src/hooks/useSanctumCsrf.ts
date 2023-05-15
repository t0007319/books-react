import {useQuery} from "@tanstack/react-query";
import {API_CSRF} from "../globals/constants";
import getSanctumCsrf from "../services/getSanctumCsrf";

export default () => {
    return useQuery({queryKey: [API_CSRF.key], queryFn: getSanctumCsrf});
};
