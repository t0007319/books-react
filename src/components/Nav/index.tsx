import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import {Avatar, Divider} from "@mui/material";
import {useNavigate} from "react-router-dom";

export default () => {
    const token: string | null = localStorage.getItem('token');
    const navigate = useNavigate(); // Initialize useHistory

    const handleLogout = async () => {
        localStorage.removeItem('token');
        navigate(0);
    }

    return <Box sx={{flexGrow: 1}}>
        <AppBar position="static">
            <Toolbar>
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{mr: 2}}
                >
                </IconButton>
                <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
                    Books App
                </Typography>
                {token ?
                    <>
                        <Button href={'/books/create'} color="inherit">Add a book</Button>
                        <Box paddingLeft={1} paddingRight={1}>
                            <Divider orientation={'vertical'}/>
                        </Box>
                        <Avatar>A</Avatar><Button color="inherit" onClick={handleLogout}>Logout</Button>
                    </> :
                    <Button href={'/login'} color="inherit">Login</Button>
                }
            </Toolbar>
        </AppBar>
    </Box>
};
