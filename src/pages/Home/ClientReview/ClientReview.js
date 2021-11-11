import { Button, Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { Link } from 'react-router-dom';
import ClientReviewSummery from '../ClientReviewSummery/ClientReviewSummery';

const ClientReview = () => {

    const cars = [
        {
            "review": "Slate helps you see how many more days you need to work to reach your financial goal for the month and year.",
            "star": "4",
            "name": "kamal",
            "profession": "Banker",
            "img": "https://i.ibb.co/d0fNs8Q/car-1.jpg"
        },
        {
            "review": "Slate helps you see how many more days you need to work to reach your financial goal for the month and year.",
            "star": "4",
            "name": "kamal",
            "profession": "Banker",
            "img": "https://i.ibb.co/d0fNs8Q/car-1.jpg"
        },
        {
            "review": "Slate helps you see how many more days you need to work to reach your financial goal for the month and year.",
            "star": "4",
            "name": "kamal",
            "profession": "Banker",
            "img": "https://i.ibb.co/d0fNs8Q/car-1.jpg"
        }
    ]
    return (
        <Box sx={{ flexGrow: 1, my:5 }}>
        <Typography sx={{ fontWeight: 600, m: 5, textAlign: 'center' }} style={{color: '#1976d2'}} variant="h4" component="div">
            HAPPY CLIENTS SAYS
        </Typography>

        <Container>
           { 
                cars?.length === 0 ?
                    <h2 style={{ color: '#1976d2', margin: '50px 0', textAlign: 'center'}}>Loading...</h2>
                :
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} sx={{ mb : 3 }}>
                    {
                        cars?.slice(0, 6).map(car => <ClientReviewSummery car={car} key={car._id}></ClientReviewSummery>)
                    }
                </Grid>
            }
        </Container>

        <Box sx={{ textAlign: 'center' }}>
            <Link to="/reviews" >
                <Button variant="contained" sx={{ width: 300 }}>View ALL Review</Button>
            </Link>
        </Box>
    </Box>
    );
};

export default ClientReview;