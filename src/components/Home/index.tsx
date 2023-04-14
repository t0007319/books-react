import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {Book} from "./types";
import {books as bookEndpoint} from "../../globals/endpoints";
import Nav from "../Nav";
import {Container, Grid} from "@mui/material";
import Books from "../Books";

const HomePage: React.FC = () => {
    const [books, setBooks] = useState<Book[]>([]); // Specify the type of books as Book[]
    const axiosConfig: any = {};
    const token: string | null = localStorage.getItem('token');

    useEffect(() => {
        // set token if exists
        if (token) {
            axiosConfig.headers = {
                Authorization: `Bearer ${token}`,
                Accept: 'application/json',
                withCredentials: true
            }
        }

        // Fetch books from API on component mount
        const fetchBooks = async () => {
            try {
                const response = await axios.get<Book[]>(bookEndpoint, axiosConfig);
                setBooks(response.data.data);
            } catch (error) {
                console.error('Failed to fetch books:', error);
            }
        };
        fetchBooks();
    }, [token]);

    return (
        <div>
            <Nav/>
            <Container>
                <h1>Books</h1>
                <Grid spacing={2}>
                    {books.map(book => (
                        <Books key={book.id} id={book.id} author={book.author} price={book.price} title={book.title}/>
                    ))}
                </Grid>
            </Container>
        </div>
    );
};

export default HomePage;
