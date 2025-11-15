import React from 'react'
import { useContext } from 'react';
import { createContext } from 'react';

// components
import Ad from '../components/Global/Ad'
import Header from "../components/Global/Header";
import Hero from "../components/Homepage/Hero";
import Banner from "../components/Homepage/Banner";
import Suggestion from '../components/Global/Suggestion';
import DressStyle from "../components/Homepage/DressStyle";
import HappyCustomers from '../components/Homepage/HappyCustomers';
import Footer from '../components/Global/Footer';
import Email from '../components/Global/Email';



function HomePage() {
    return (

        <>
            <Ad></Ad>

            <Header></Header>

            <Hero></Hero>

            <Banner></Banner>

            <Suggestion title="NEW ARRIVALS" borderTop={false} />

            <Suggestion title="TOP SELLING" borderTop={true} />


            <DressStyle></DressStyle>

            {/* <HappyCustomers></HappyCustomers> */}

            <Email></Email>

            <Footer></Footer>


        </>

    );
}

export default HomePage