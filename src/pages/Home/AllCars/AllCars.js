import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Button, Container, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import AllCarsSummery from '../AllCarsSummery/AllCarsSummery';
import useData from '../../../hooks/useData';

const AllCars = () => {
    const [cars] = useData();
    return (
        <Box sx={{ flexGrow: 1, my:5 }}>
        <Typography sx={{ fontWeight: 600, m: 5, textAlign: 'center' }} style={{color: '#1976d2'}} variant="h4" component="div">
            FEATURED CAR
        </Typography>

        <Container>
            { 
                cars?.length === 0 ?
                    <h2 style={{ color: '#1976d2', margin: '50px 0', textAlign: 'center'}}>Loading...</h2>
                :
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} sx={{ mb : 3 }}>
                    {
                        cars?.map(car => <AllCarsSummery car={car} key={car._id}></AllCarsSummery>)
                    }
                </Grid>
            }
        </Container>

        <Box sx={{ textAlign: 'center' }}>
            <Link to="/home" >
                <Button variant="contained" sx={{ width: 300 }}>Back Home</Button>
            </Link>
        </Box>
    </Box>
    );
};

export default AllCars;