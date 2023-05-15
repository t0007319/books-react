import React, {useState} from 'react';
import axios from "axios";
import {Box, Button, Container, Grid, Paper, TextField, Typography} from "@mui/material";
import {SubmitHandler, useForm} from "react-hook-form";
import {Login as LoginForm} from "./types";
import useLogin from "../../hooks/useLogin";

const Login: React.FC = () => {
    const {register, handleSubmit, watch, formState: {errors}} = useForm<LoginForm>();
    const login = useLogin();

    const onSubmit: SubmitHandler<LoginForm> = data => {
        login.mutate(data);
    };

    return (
        <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"

        >

            <Grid item xs={3}>
                <Container maxWidth="lg" id={'login'}>
                    <Paper>
                        <Box p={3}>
                        <Typography variant="h4" align="center">Login</Typography>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <TextField
                                label="Email"
                                type="email"
                                {...register("email")}
                                fullWidth
                                margin="dense"
                                required
                                size="small"
                                variant="standard"
                                // error={formError.email !== undefined}
                                // helperText={formError.email !== undefined && formError.email}
                            />
                            <TextField
                                label="Password"
                                type="password"
                                {...register("password")}
                                fullWidth
                                margin="dense"
                                required
                                size="small"
                                variant="standard"
                                // error={formError.password !== undefined}
                                // helperText={formError.password !== undefined && formError.password}
                            />
                            <Button sx={{marginTop: 2}} variant="contained" color="primary" fullWidth type="submit">Login</Button>
                        </form>
                        {/*{generalError && <Typography variant="body1" color="error" align="center">{generalError}</Typography>}*/}
                        </Box>
                    </Paper>
                </Container>
            </Grid>
        </Grid>
    );
};

export default Login;
