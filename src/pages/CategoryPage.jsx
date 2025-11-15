import React from 'react'


// components
import Ad from '../components/Global/Ad'
import Header from "../components/Global/Header";
import CategoryHeader from '../components/Categorypage/CategoryHeader';
import Filter from '../components/Categorypage/Filter';
import Products from '../components/Categorypage/Products';
import Footer from '../components/Global/Footer';
import Email from '../components/Global/Email';


export default function
    () {
    return (
        <>
            <Ad />
            <Header />

            <CategoryHeader/>

            <section className='w-full h-full flex gap-15 px-20 items-start '>
                <Filter/>
                <Products />
            </section>

            <Footer/>
        </>
    )
}
