import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Button, Container, Typography } from '@mui/material';
import CarSummery from '../CarSummery/CarSummery';


const Cars = () => {
    const [cars, setCars] = useState([])

    useEffect(() => {
        fetch('./car.json')
        .then(res => res.json())
        .then(data => setCars(data))
    }, [])
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Typography sx={{ fontWeight: 600, m: 5, textAlign: 'center' }} style={{color: '#1976d2'}} variant="h4" component="div">
                FEATURED CAR
            </Typography>

            <Container>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} sx={{ mb : 3 }}>
                    {
                        cars?.slice(0, 6).map(car => <CarSummery car={car} key={car.key}></CarSummery>)
                    }
                </Grid>
            </Container>

            <Button variant="contained" sx={{ width: 300 }}>View ALL Car</Button>
        </Box>
    );
};

export default Cars;