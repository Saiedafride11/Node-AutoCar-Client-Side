import React from 'react';
import { Box } from '@mui/system';
import './Review.css';
import { useForm } from "react-hook-form";
import useAuth from '../../../hooks/useAuth';

const Review = () => {
    const {user} = useAuth();
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        data.status = "Pending"
        fetch('http://localhost:5000/orders', {
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
        <div className="container py-5">
            <h2 className="py-3 text-center" style={{color: '#1976d2'}}>Add Your Feedback</h2>
            <Box className="client-review">
                    <form onSubmit={handleSubmit(onSubmit)} className="text-center">
                        <input defaultValue={user?.photoURL} {...register("img")} readOnly/>
                        <input defaultValue={user?.displayName} {...register("name")} style={{textTransform: "capitalize"}} readOnly/>
                        <input defaultValue={user?.email} {...register("email")} readOnly/>
                        <input placeholder="Your Profession" {...register("profession")}/>
                        <select defaultValue="Star" {...register("star", { required: true, maxLength: 20 })}>
                            <option value="type">Please Select Your Review</option>
                            <option value="1">1</option>
                            <option value="1">1.5</option>
                            <option value="2">2</option>
                            <option value="2">2.5</option>
                            <option value="3">3</option>
                            <option value="3">3.5</option>
                            <option value="4">4</option>
                            <option value="4">4.5</option>
                            <option value="5">5</option>
                        </select>
                        <textarea {...register("review")} placeholder="Please Type Your Message....." style={{height: '80px'}} required/>
                        <input type="submit" className="btn text-white"  style={{backgroundColor: '#1976d2'}}/>
                    </form>
                </Box>
        </div>
    );
};

export default Review;