import React from 'react';
import Banner from '../Banner/Banner';
import Cars from '../Cars/Cars';
import Newsletter from '../Newsletter/Newsletter';
import Review from '../Review/Review';

const Home = () => {
    document.title = 'Autocar Home Page';
    return (
        <div>
            <Banner></Banner>
            <Cars></Cars>
            <Review></Review>
            <Newsletter></Newsletter>
        </div>
    );
};

export default Home;