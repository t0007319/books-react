import * as React from 'react';
import {useTheme} from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import {Book} from "../Home/types";

export default (props: Book) => {
    const theme = useTheme();

    return (
        <Box padding={2}>
            <Card sx={{display: 'flex'}}>
                <CardMedia
                    component="img"
                    sx={{width: 100, height: 150}}
                    image={`https://picsum.photos/200/300?random=${props.id}`}
                    alt="Live from space album cover"
                />
                <Box sx={{display: 'flex', flexDirection: 'column'}}>
                    <CardContent sx={{flex: '1 0 auto'}}>
                        <Typography component="div" variant="h5">
                            {props.title}
                        </Typography>
                        <Typography variant="subtitle1" color="text.secondary" component="div">
                            {props.author}
                        </Typography>
                    </CardContent>
                    <Box sx={{display: 'flex', alignItems: 'center', pl: 1, pb: 1}}>
                        <Typography variant="subtitle1" color="text.secondary" component="div">
                            £{props.price}
                        </Typography>
                    </Box>
                </Box>
            </Card>
        </Box>
    );
}
