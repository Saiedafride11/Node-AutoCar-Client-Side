import { Box } from '@mui/system';
import React from 'react';
import { useForm } from "react-hook-form";
import useAuth from '../../hooks/useAuth';
import './Contact.css';

const Contact = () => {
    const {user} = useAuth();
    const { register, handleSubmit, reset } = useForm();

    document.title = 'Contact Us';

    const onSubmit = data => {
        fetch('https://polar-dusk-34230.herokuapp.com/message', {
            method: 'POST',
            headers: { 'content-type': 'application/json'},
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(result => {
            if(result.insertedId){
                alert('Successfully Send Your Message')
                reset();
            }
        })
    };
    return (
            <div className="contact py-5">
                <div className="container">
                    <h2 className="text-center py-1" style={{color: '#1976d2'}}>Contact Us</h2>
                    <Box className="confirm-message text-center">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input defaultValue={user?.displayName} {...register("name")} style={{textTransform: "capitalize"}} required/>
                            <input defaultValue={user?.email} {...register("email")} required/>
                            <input placeholder="Please Type Your Number....." {...register("phone")} type="number" required/>
                            <textarea {...register("message")} placeholder="Please Type Your Message....." style={{height: '120px'}} required/>
                            <input type="submit" className="btn text-white w-50"  style={{backgroundColor: '#1976d2'}}/>
                        </form>
                    </Box>

                    <div className="contact-us text-center text-white p-3 my-5">
                        <div>
                            <h4>Address</h4>
                            <p>H3556 Beech Street, San Francisco, USA</p>
                        </div>
                        <div>
                            <h4>Phone</h4>
                            <p>+1 315 369 5943</p>
                        </div>
                        <div>
                            <h4>Email</h4>
                            <p>hello@tourx.com</p>
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default Contact;