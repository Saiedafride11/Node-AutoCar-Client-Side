import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Button, Container, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import useData from '../../../hooks/useData';
import ManageProductsSummery from '../ManageProductsSummery/ManageProductsSummery';


const ManageProducts = () => {
    const [cars, setCars] = useData();

     // Delete
     const handleDeleteProducts = id => {
        const proceed = window.confirm('Are you sure, you want to delete?')
        if(proceed){
            const url = `https://polar-dusk-34230.herokuapp.com/cars/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then( data => {
                if(data.deletedCount > 0){
                    alert('Deleted Successfully');
                    const remaining = cars?.filter(car => car._id !== id);
                    setCars(remaining)
                }
            })
        }
    }
    return (
        <Box sx={{ flexGrow: 1, my:5}}>
            <Typography sx={{ fontWeight: 600, m: 5, textAlign: 'center' }} style={{color: '#1976d2'}} variant="h4" component="div">
                TOTAL FEATURED CAR: {cars.length}
            </Typography>

            <Container>
               { 
                    cars?.length === 0 ?
                        <h2 style={{ color: '#1976d2', margin: '50px 0', textAlign: 'center'}}>Loading...</h2>
                    :
                    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} sx={{ mb : 3 }}>
                        {
                            cars?.map(car => <ManageProductsSummery
                                car={car}
                                handleDeleteProducts={handleDeleteProducts}
                                key={car._id}
                                ></ManageProductsSummery>)
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

export default ManageProducts;