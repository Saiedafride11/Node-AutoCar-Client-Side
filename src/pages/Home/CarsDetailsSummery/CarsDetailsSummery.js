import React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTools, faGasPump, faRoad, faCar, faPalette, faCalendarWeek } from '@fortawesome/free-solid-svg-icons'


const CarsDetailsSummery = (props) => {
    const {title, petrol, km, manual, type, color, publish, ratting, sale, price, offer, img, key} = props.car;
    return (
        <Grid item xs={4} sm={4} md={6}>
            <Card sx={{ minWidth: 275, border: 0, boxShadow: 3}}>
                <CardMedia
                    component="img"
                    style={{width: '102%', margin: '0 auto'}}
                    image={img}
                    alt="Paella dish"
                />
                <CardContent sx={{ textAlign: 'left' }}>
                    <Typography variant="h6" gutterBottom component="div" style={{color: '#1976d2'}}>
                        {title}
                    </Typography>

                    <Box sx={{ display: 'flex', my : 2 }}>
                        <Typography variant="body2"  color="text.secondary" sx={{ mr: 3 }}>
                            <FontAwesomeIcon icon={faGasPump} style={{color: '#1976d2'}}/> {petrol}
                        </Typography>
                        <Typography variant="body2"  color="text.secondary" sx={{ mr: 3 }}>
                            <FontAwesomeIcon icon={faRoad} style={{color: '#1976d2'}}/> {km}
                        </Typography>
                        <Typography variant="body2"  color="text.secondary">
                            <FontAwesomeIcon icon={faTools} style={{color: '#1976d2'}}/> {manual}
                        </Typography>
                    </Box>

                    <Box sx={{ display: 'flex', mb : 2}}>
                        <Typography variant="body2"  color="text.secondary" sx={{ mr: 3 }}>
                            <FontAwesomeIcon icon={faCar} style={{color: '#1976d2'}}/> {type}
                        </Typography>
                        <Typography variant="body2"  color="text.secondary" sx={{ mr: 3 }}>
                            <FontAwesomeIcon icon={faPalette} style={{color: '#1976d2'}}/> {color}
                        </Typography>
                        <Typography variant="body2"  color="text.secondary">
                            <FontAwesomeIcon icon={faCalendarWeek} style={{color: '#1976d2'}}/> {publish}
                        </Typography>
                    </Box>
                </CardContent>
            </Card>

            <Box>
                <Typography variant="h6" gutterBottom component="div" style={{color: '#1976d2'}}>
                        {title}
                </Typography>
            </Box>
        </Grid>
    );
};

export default CarsDetailsSummery;