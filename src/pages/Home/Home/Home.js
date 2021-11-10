import React from 'react';
import Review from '../../Review/Review';
import Cars from '../Cars/Cars';
import Newsletter from '../Newsletter/Newsletter';

const Home = () => {
    document.title = 'Autocar Home Page';
    return (
        <div>
            <Cars></Cars>
            <Review></Review>
            <Newsletter></Newsletter>
        </div>
    );
};

export default Home;