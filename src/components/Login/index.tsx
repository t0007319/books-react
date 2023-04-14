import React, {useState} from 'react';
import axios from "axios";
import {Box, Button, Container, Grid, Paper, TextField, Typography} from "@mui/material";
import {FormErrors, LoginError} from "./types";
import {useNavigate} from 'react-router-dom';
import {login as loginEndpoint, csrf as csrfEndpoint} from "../../globals/endpoints";

const Login: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [generalError, setGeneralError] = useState('');
    const [formError, setFormError] = useState<FormErrors>({email: undefined, password: undefined});
    const navigate = useNavigate(); // Initialize useHistory

    // csrf required by Laravel sanctum as part of SPA
    const csrfLogin = async () => {
        axios.get(csrfEndpoint).then(response => {
            // Login...
            handleLogin()
        });
    }

    const handleLogin = async () => {
        try {
            // Make API request to Laravel backend for login
            const response = await axios.post(
                loginEndpoint,
                {email, password},
                {headers: {'Content-Type': 'application/json'}
                }
            );

            // Handle successful login
            if (response.data.token) {
                localStorage.setItem('token', response.data.token);
                navigate('/');
            }
        } catch (e: any|LoginError) {
            // Handle error response
            if (e.response.data.errors) {
                setFormError(e.response.data.errors);
            } else if (e.response.data.message) {
                setGeneralError(e.response.data.message);
            } else {
                setGeneralError('Unknown error occured');
            }
        }
    };

    return (
        <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
            style={{minHeight: '100vh'}}
        >

            <Grid item xs={3}>
                <Container maxWidth="lg" id={'login'}>
                    <Paper>
                        <Box p={3}>
                        <Typography variant="h4" align="center">Login</Typography>
                        <form>
                            <TextField
                                label="Email"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                fullWidth
                                margin="dense"
                                required
                                size="small"
                                variant="standard"
                                error={formError.email !== undefined}
                                helperText={formError.email !== undefined && formError.email}
                            />
                            <TextField
                                label="Password"
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                fullWidth
                                margin="dense"
                                required
                                size="small"
                                variant="standard"
                                error={formError.password !== undefined}
                                helperText={formError.password !== undefined && formError.password}
                            />
                            <Button sx={{marginTop: 2}} variant="contained" color="primary" fullWidth onClick={csrfLogin}>Login</Button>
                        </form>
                        {generalError && <Typography variant="body1" color="error" align="center">{generalError}</Typography>}
                        </Box>
                    </Paper>
                </Container>
            </Grid>
        </Grid>
    );
};

export default Login;
