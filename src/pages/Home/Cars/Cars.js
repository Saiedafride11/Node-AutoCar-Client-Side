import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Button, Container, Typography } from '@mui/material';
import CarSummery from '../CarSummery/CarSummery';
import { Link } from 'react-router-dom';
import useData from '../../../hooks/useData';
import Fade from 'react-reveal/Fade';


const Cars = () => {
    const [cars] = useData();

    return (
        <Box sx={{ flexGrow: 1, my:5 }}>
            <Fade top>
                <Typography sx={{ fontWeight: 600, m: 5, textAlign: 'center' }} style={{color: '#1976d2'}} variant="h4" component="div">
                    FEATURED CAR
                </Typography>
            </Fade>

            <Fade left>
                <Container>
                { 
                        cars?.length === 0 ?
                            <h2 style={{ color: '#1976d2', margin: '50px 0', textAlign: 'center'}}>Loading...</h2>
                        :
                        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} sx={{ mb : 3 }}>
                            {
                                cars?.slice(0, 6).map(car => <CarSummery car={car} key={car._id}></CarSummery>)
                            }
                        </Grid>
                    }
                </Container>
            </Fade>

            <Box sx={{ textAlign: 'center' }}>
                <Link to="/cars" >
                    <Button variant="contained" sx={{ width: 300 }}>View ALL Cars</Button>
                </Link>
            </Box>
        </Box>
    );
};

export default Cars;