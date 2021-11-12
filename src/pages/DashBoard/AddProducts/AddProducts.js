import React from 'react';
import './AddProducts.css';
import { useForm } from 'react-hook-form';

const AddProducts = () => {
    const { register, handleSubmit, reset } = useForm();
    document.title = 'Add Cars';

    const onSubmit = data => {
        fetch('https://polar-dusk-34230.herokuapp.com/cars', {
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
            <h2 className="py-3 text-center" style={{color: '#1976d2'}}>Add New Cars</h2>
            <div className="add-products">
                <form onSubmit={handleSubmit(onSubmit)} className="text-center">
                    <input placeholder="Please Type Title" {...register("title")} required/>
                    <input placeholder="Please Type Price" {...register("price")} required/>
                    <input placeholder="Please Type Offer" {...register("offer")} required/>
                    <input placeholder="Please Type Petrol" {...register("petrol")} required/>
                    <input placeholder="Please Type Km" {...register("km")} required/>
                    <input placeholder="Please Type Manual" {...register("manual")} required/>
                    <input placeholder="Please Type Car-Type" {...register("type")} required/>
                    <input placeholder="Please Type Color" {...register("color")} required/>
                    <input placeholder="Please Type Publish" {...register("publish")} required/>
                    <input placeholder="Please Type Ratting" {...register("ratting")} required/>
                    <input placeholder="Please Type Sale" {...register("sale")} required/>
                    <input placeholder="Please Type Image Link" {...register("img")} required/>
                    <input type="submit" className="btn w-75 text-white"  style={{backgroundColor: '#1976d2'}}/>
                </form>
            </div>
        </div>
    );
};

export default AddProducts;