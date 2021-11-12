import { Container, Grid } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import useData from '../../../hooks/useData';
import CarsDetailsSummery from '../CarsDetailsSummery/CarsDetailsSummery';

const CarsDetails = () => {
    const {carId} = useParams();
    const [cars] = useData();
    const [carts, setCart] = useState();

    document.title = "Car Order";

    useEffect(() => {
        const car = cars?.filter((car) => car._id === carId);
        setCart(car);
      }, [cars]);

    return (
        <Box sx={{ flexGrow: 1, my:5 }}>
            <Container>
               { 
                    carts?.length === 0 ?
                        <h2 style={{ color: '#1976d2', margin: '50px 0', textAlign: 'center'}}>Loading...</h2>
                    :
                    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} sx={{ mb : 3 }}>
                        {
                            carts?.map(cart => <CarsDetailsSummery car={cart} key={cart._id}></CarsDetailsSummery>)
                        }
                    </Grid>
                }
            </Container>
        </Box>
    );
};

export default CarsDetails;