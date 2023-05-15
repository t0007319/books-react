import {useMutation, useQueryClient} from "@tanstack/react-query";
import useSanctumCsrf from "./useSanctumCsrf";
import postLogin from "../services/postLogin";
import {useNavigate} from 'react-router-dom';

export default () => {
    const navigate = useNavigate(); // Initialize useHistory
    const queryClient = useQueryClient()
    const {data, isLoading, isSuccess} = useSanctumCsrf();

    return useMutation(postLogin, {
        onSuccess: data => {
            // Handle successful login
            if (data.token) {
                localStorage.setItem('token', data.token);
                navigate('/');
            }
        },
        onError: () => {
            alert("there was an error")
        },
        onSettled: () => {
            queryClient.invalidateQueries('create')
        }
    });
}
