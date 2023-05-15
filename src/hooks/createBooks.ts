import {useMutation, useQueryClient} from "@tanstack/react-query";
import postBook from "../services/postBook";
import {useNavigate} from 'react-router-dom';

export default () => {
    const queryClient = useQueryClient()
    const navigate = useNavigate();

    return useMutation(postBook, {
        onSuccess: data => {
            alert('success!');
            navigate('/')
        },
        onError: () => {
            alert("there was an error")
        },
        onSettled: () => {
            queryClient.invalidateQueries('create')
        }
    });
}
