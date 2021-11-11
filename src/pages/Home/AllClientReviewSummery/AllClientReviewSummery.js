import React from 'react';
import './AllClientReviewSummery.css';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Rating } from '@mui/material';

const AllClientReviewSummery = (props) => {
    const {review, img, name, profession, star} = props.review;

    return (
        <Grid item xs={4} sm={4} md={4} className="img-scale-main">
         <Card sx={{ minWidth: 275, border: 0, boxShadow: 3}} className="img-scale">
            <CardMedia
                component="img"
                style={{width: '50%', height: '50%', margin: '0 auto'}}
                image={img}
                alt="Paella dish"
                className="AllClientReviewSummery mt-4"
             />
            <CardContent sx={{ textAlign: 'center' }}>
                <Typography variant="body2"  color="text.secondary" style={{color: '#6c757d'}}>
                    {review}
                </Typography>
                <Typography variant="body2"  color="text.secondary" style={{color: '#ffb400'}}>
                    <Rating name="read-only" value={star} readOnly />
                </Typography>
                <Typography variant="h6" gutterBottom component="div" style={{color: '#1976d2'}}>
                    {name}
                </Typography>
                <Typography variant="h6" gutterBottom component="div">
                    {profession}
                </Typography>
            </CardContent>
         </Card>
        </Grid>
    );
};

export default AllClientReviewSummery;