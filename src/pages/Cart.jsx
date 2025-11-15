import React from 'react'
import { useContext } from 'react';


// components
import Ad from '../components/Global/Ad'
import Header from "../components/Global/Header";
import CartInfo from '../components/Cart/CartInfo';
import Email from '../components/Global/Email'
import Footer from '../components/Global/Footer'

// context
import { productContext } from '../App';

function Cart() {
    
    let {cartItems } = useContext(productContext);
    console.log(cartItems)
    return (
        <>
            <Ad />

            <Header />

            <CartInfo data={cartItems} />

            <Email />

            <Footer />
        </>
    )
}

export default Cart