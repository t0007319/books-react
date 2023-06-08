import React, {useState, ChangeEvent, FormEvent} from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {Book} from "../Books/types";
import {Box, Checkbox, Container, InputLabel} from "@mui/material";
import Nav from "../Nav";
import {useNavigate} from "react-router-dom";
import {SubmitHandler, useForm} from "react-hook-form";
import createBooks from "../../hooks/createBooks";

export default () => {
    const {register, handleSubmit, watch, formState: {errors}} = useForm<Book>();
    const create = createBooks();
    const onSubmit: SubmitHandler<Book> = data => {
        create.mutate(data);
    };

    const navigate = useNavigate(); // Initialize useHistory

    return (
        <>
            <Nav/>
            <Container>
                <h2>Add Book</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <TextField
                        {...register("title")}
                        label="Title"
                        fullWidth
                        margin="normal"
                    />
                    <TextField
                        {...register("author")}
                        label="Author"
                        fullWidth
                        margin="normal"
                    />
                    <TextField
                        {...register("price")}
                        label="Price"
                        fullWidth
                        margin="normal"
                    />
                    <InputLabel>Is open public</InputLabel>
                    <Checkbox defaultChecked {...register("is_public")}/>
                    {/* Add other input fields for other book details */}
                    <Box paddingTop={1}>
                        <Button type="submit" variant="contained" color="primary">
                            Add Book
                        </Button>
                    </Box>
                </form>
            </Container>
        </>
    );
};

