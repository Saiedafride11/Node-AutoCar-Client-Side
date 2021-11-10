import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import Banner from '../Banner/Banner';
import Cars from '../Cars/Cars';
import Newsletter from '../Newsletter/Newsletter';
import Review from '../Review/Review';

const Home = () => {
    document.title = 'Autocar Home Page';
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <Cars></Cars>
            <Review></Review>
            <Newsletter></Newsletter>
            <Footer></Footer>
        </div>
    );
};

export default Home;