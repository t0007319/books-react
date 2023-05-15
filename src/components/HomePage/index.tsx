import React from 'react';
import Nav from "../Nav";
import {Container, Grid} from "@mui/material";
import Books from "../Books";
import useBooks from "../../hooks/useBooks";

const HomePage: React.FC = () => {
    const {data, isLoading, isError, error} = useBooks();

    if (isLoading) return (<div>Loading...</div>);

    return (
        <div>
            <Nav/>
            <Container>
                <h1>Books</h1>
                <Grid container spacing={1}>
                    {data && data.data.map(book => (
                        <Grid key={book.id} item xs={12} md={6} lg={12}>
                            <Books
                                key={book.id}
                                id={book.id}
                                author={book.author}
                                price={book.price}
                                title={book.title}
                            />
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </div>
    );
};

export default HomePage;
