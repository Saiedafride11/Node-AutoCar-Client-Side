import { Button, Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { Link } from 'react-router-dom';
import useReview from '../../../hooks/useReview';
import AllClientReviewSummery from '../AllClientReviewSummery/AllClientReviewSummery';

const AllClientReview = () => {
    const [reviews] = useReview();
    return (
        <Box sx={{ flexGrow: 1, my:5 }}>
        <Typography sx={{ fontWeight: 600, m: 5, textAlign: 'center' }} style={{color: '#1976d2'}} variant="h4" component="div">
            TOTAL HAPPY CLIENTS: {reviews.length}
        </Typography>

        <Container>
           { 
                reviews?.length === 0 ?
                    <h2 style={{ color: '#1976d2', margin: '50px 0', textAlign: 'center'}}>Loading...</h2>
                :
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} sx={{ mb : 3 }}>
                    {
                        reviews?.map(review => <AllClientReviewSummery review={review} key={review._id}></AllClientReviewSummery>)
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

export default AllClientReview;