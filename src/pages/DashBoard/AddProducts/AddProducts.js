import React from 'react';
import './AddProducts.css';
import { useForm } from 'react-hook-form';

const AddProducts = () => {
    const { register, handleSubmit, reset } = useForm();
    document.title = 'Add Service';

    const onSubmit = data => {
        fetch('https://cryptic-mountain-31100.herokuapp.com/tours', {
            method: 'POST',
            headers: { 'content-type': 'application/json'},
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(result => {
            if(result.insertedId){
               alert('Added successfully')
                reset();
            }
        })
    };
    return (
        <div className="container py-5">
            <h2 className="py-3 text-center" style={{color: '#1976d2'}}>Add New Products</h2>
            <div className="add-products">
                <form onSubmit={handleSubmit(onSubmit)} className="text-center">
                    <input placeholder="Please Type Title" {...register("title")} required/>
                    <input placeholder="Please Type Price" {...register("price")} required/>
                    <input placeholder="Please Type Ratting" {...register("ratting")} required/>
                    <input placeholder="Please Type Day" {...register("day")} required/>
                    <input placeholder="Please Type Person" {...register("person")} required/>
                    <input placeholder="Please Type Location" {...register("location")} required/>
                    <input placeholder="Please Type Image Link" {...register("img")} required/>
                    <input type="submit" className="btn w-75 text-white"  style={{backgroundColor: '#1976d2'}}/>
                </form>
            </div>
        </div>
    );
};

export default AddProducts;