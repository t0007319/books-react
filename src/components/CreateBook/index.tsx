import React, {useState, ChangeEvent, FormEvent} from 'react';
import axios from 'axios';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {books as bookEndpoint} from "../../globals/endpoints";
import {Book} from "../Home/types";
import {Box, Checkbox, Container, InputLabel} from "@mui/material";
import Nav from "../Nav";
import {useNavigate} from "react-router-dom";

export default () => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [price, setPrice] = useState('');
    const [isPublic, setIsPublic] = useState(true);
    const token: string | null = localStorage.getItem('token');
    const axiosConfig: any = {};
    const navigate = useNavigate(); // Initialize useHistory

    const handleTitleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setTitle(event.target.value);
    };

    const handleAuthorChange = (event: ChangeEvent<HTMLInputElement>) => {
        setAuthor(event.target.value);
    };

    const handlePriceChange = (event: ChangeEvent<HTMLInputElement>) => {
        setPrice(event.target.value);
    };

    const handleIsPublicChange = (event: ChangeEvent<HTMLInputElement>) => {
        setIsPublic(event.target.value == '1');
    };

    const handleSubmit = async (event: FormEvent) => {
        event.preventDefault();

        // Create a new book object
        const newBook: Book = {
            title: title,
            author: author,
            price: price,
            isPublic: isPublic
        };

        // set token if exists
        if (token) {
            axiosConfig.headers = {
                Authorization: `Bearer ${token}`,
                Accept: 'application/json',
                withCredentials: true
            }
        }

        try {
            // Make API request to add new book
            await axios.post(bookEndpoint, newBook, axiosConfig); // Replace with your API endpoint
            // Optionally, you can update the local state with the newly added book
            // setBooks([...books, newBook]);
            navigate('/');
        } catch (error) {
            console.error('Failed to add book:', error);
        }
    };

    return (
        <>
        <Nav/>
        <Container>
            <h2>Add Book</h2>
            <form onSubmit={handleSubmit}>
                <TextField
                    label="Title"
                    value={title}
                    onChange={handleTitleChange}
                    fullWidth
                    margin="normal"
                />
                <TextField
                    label="Author"
                    value={author}
                    onChange={handleAuthorChange}
                    fullWidth
                    margin="normal"
                />
                <TextField
                    label="Price"
                    value={price}
                    onChange={handlePriceChange}
                    fullWidth
                    margin="normal"
                />
                <InputLabel>Is open public</InputLabel>
                <Checkbox defaultChecked onChange={handleIsPublicChange}/>
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
