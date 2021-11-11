import React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTools, faGasPump, faRoad, faCar, faPalette, faCalendarWeek, faStar } from '@fortawesome/free-solid-svg-icons'
import './CarsDetailsSummery.css';
import { useForm } from "react-hook-form";
import useAuth from '../../../hooks/useAuth';

const CarsDetailsSummery = (props) => {
    const {user} = useAuth();
    const {title, petrol, km, manual, type, color, publish, ratting, sale, price, offer, img, key} = props.car;
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
            data.status = "Pending"
        fetch('https://cryptic-mountain-31100.herokuapp.com/orders', {
            method: 'POST',
            headers: { 'content-type': 'application/json'},
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(result => {
            if(result.insertedId){
                alert('succesfull')
                reset();
            }
        })
    };
    return (
        <>
        <Grid item xs={6} sm={6} md={5}>
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
                    <Typography variant="body2"  color="text.secondary" sx={{ mr: 3 }}>
                        <FontAwesomeIcon icon={faCalendarWeek} style={{color: '#1976d2'}}/> {publish}
                    </Typography>
                    <Typography variant="body2"  color="text.secondary">
                        <FontAwesomeIcon icon={faStar} style={{color: '#ffb400'}}/> {ratting}
                    </Typography>
                </Box>
                </CardContent>
            </Card>
        </Grid>
        <Grid item xs={6} sm={6} md={7}>
            <Card sx={{ minWidth: 275, border: 0, boxShadow: 3}}>
                <Box className="confirm-order my-auto">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input defaultValue={title} {...register("title")} style={{textTransform: "capitalize"}}required/>
                        <input defaultValue={user?.displayName} {...register("name")} style={{textTransform: "capitalize"}}required/>
                        <input defaultValue={user?.email} {...register("email")} readOnly/>
                        <input placeholder="Please Type Your Number....." {...register("phone")} type="number" required/>
                        <select defaultValue="Tickets Type" {...register("ticket", { required: true, maxLength: 20 })}>
                            <option value="type">Please Select Types.....</option>
                            <option value="bus">SPORTS CAR</option>
                            <option value="ship">COUPE</option>
                            <option value="plane">SEDAN</option>
                            <option value="plane">STATION WAGON</option>
                            <option value="plane">HATCHBACK</option>
                            <option value="plane">CONVERTIBLE</option>
                            <option value="plane">MINIVAN</option>
                        </select>
                        <input defaultValue="Date" type="date" {...register("date")} />
                        <textarea {...register("description")} placeholder="Please Type Your Message....." style={{height: '80px'}} required/>
                        <input type="submit" className="btn text-white"  style={{backgroundColor: '#1976d2'}}/>
                    </form>
                </Box>
            </Card>
        </Grid>
        </>
    );
};

export default CarsDetailsSummery;