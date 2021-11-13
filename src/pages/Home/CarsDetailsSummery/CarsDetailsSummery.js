import React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTools, faGasPump, faRoad, faCar, faPalette, faCalendarWeek, faStar, faMoneyBill } from '@fortawesome/free-solid-svg-icons'
import './CarsDetailsSummery.css';
import { useForm } from "react-hook-form";
import useAuth from '../../../hooks/useAuth';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import Fade from 'react-reveal/Fade';

const CarsDetailsSummery = (props) => {
    const {user} = useAuth();
    const {title, petrol, km, manual, type, color, publish, ratting, price, offer, img} = props.car;
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        data.status = "Pending"
        fetch('https://polar-dusk-34230.herokuapp.com/orders', {
            method: 'POST',
            headers: { 'content-type': 'application/json'},
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(result => {
            if(result.insertedId){
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Successfully Submitted Order',
                    showConfirmButton: false,
                    timer: 2000
                })
                reset();
            }
        })
    };
    return (
        <>
            <Grid item xs={6} sm={6} md={5}>
                <Card sx={{ minWidth: 275, border: 0, boxShadow: 3}}>
                    <Fade left>
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
                                <Typography variant="h6" gutterBottom component="div" sx={{ mr: 3 }}>
                                    <FontAwesomeIcon icon={faMoneyBill} style={{color: '#1976d2'}}/> <strong>{price}</strong>
                                </Typography>
                                <Typography variant="h6" gutterBottom component="div" sx={{ mr: 3 }} className="offer">
                                    <FontAwesomeIcon icon={faMoneyBill} style={{color: '#1976d2'}}/> <strong><span>{offer}</span></strong>
                                </Typography>
                            </Box>

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
                    </Fade> 
                </Card>
            </Grid>
                            
                 
            <Grid item xs={6} sm={6} md={7}>
                <Card sx={{ minWidth: 275, border: 0, boxShadow: 3}}>
                    <Fade right> 
                        <Box className="confirm-order my-auto">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <input defaultValue={title} {...register("title")} style={{textTransform: "capitalize"}}required/>
                                <input defaultValue={user?.displayName} {...register("name")} style={{textTransform: "capitalize"}}required/>
                                <input defaultValue={user?.email} {...register("email")} readOnly/>
                                <input placeholder="Please Type Your Number....." {...register("phone")} type="number" required/>
                                <select defaultValue="Type" {...register("type", { required: true, maxLength: 20 })}>
                                    <option value="No Select">Please Select Types.....</option>
                                    <option value="SPORTS CAR">SPORTS CAR</option>
                                    <option value="COUPE">COUPE</option>
                                    <option value="SEDAN">SEDAN</option>
                                    <option value="STATION WAGON">STATION WAGON</option>
                                    <option value="HATCHBACK">HATCHBACK</option>
                                    <option value="CONVERTIBLE">CONVERTIBLE</option>
                                    <option value="MINIVAN">MINIVAN</option>
                                </select>
                                <input defaultValue="Date" type="date" {...register("date")} />
                                <textarea {...register("description")} placeholder="Please Type Your Message....." style={{height: '80px'}} required/>
                                <input type="submit" className="btn text-white"  style={{backgroundColor: '#1976d2'}}/>
                            </form>
                        </Box>
                    </Fade> 
                </Card>
            </Grid>
        </>
    );
};

export default CarsDetailsSummery;