import { Button, Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { Link } from 'react-router-dom';
import useReview from '../../../hooks/useReview';
import ClientReviewSummery from '../ClientReviewSummery/ClientReviewSummery';
import Fade from 'react-reveal/Fade';

const ClientReview = () => {
    const [reviews] = useReview();
    return (
        <Box sx={{ flexGrow: 1, my:5 }}>
            <Fade top>
                <Typography sx={{ fontWeight: 600, my: 5, textAlign: 'center' }} style={{color: '#1976d2'}} variant="h4" component="div">
                    HAPPY CLIENTS SAYS
                </Typography>
            </Fade>

            <Fade left>
                <Container>
                     { 
                        reviews?.length === 0 ?
                            <h2 style={{ color: '#1976d2', margin: '50px 0', textAlign: 'center'}}>Loading...</h2>
                        :
                        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} sx={{ mb : 3 }}>
                            {
                                reviews?.slice(0, 3).map(review => <ClientReviewSummery review={review} key={review._id}></ClientReviewSummery>)
                            }
                        </Grid>
                    }
                </Container>
            </Fade>

            <Box sx={{ textAlign: 'center' }}>
                <Link to="/reviews" >
                    <Button variant="contained" sx={{ width: 300 }}>View ALL Reviews</Button>
                </Link>
            </Box>
        </Box>
    );
};

export default ClientReview;