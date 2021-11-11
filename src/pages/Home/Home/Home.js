import React from 'react';
import Banner from '../Banner/Banner';
import Cars from '../Cars/Cars';
import ClientReview from '../ClientReview/ClientReview';
import Newsletter from '../Newsletter/Newsletter';

const Home = () => {
    document.title = 'Autocar Home Page';
    return (
        <div>
            <Banner></Banner>
            <Cars></Cars>
            <ClientReview></ClientReview>
            <Newsletter></Newsletter>
        </div>
    );
};

export default Home;