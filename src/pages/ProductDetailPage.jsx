import React from 'react'
import { useContext } from 'react'
import { productContext } from '../App'

// components
import Ad from '../components/Global/Ad'
import Header from "../components/Global/Header";
import ProductInfo from '../components/Detailpage/ProductInfo';
import ReviewSection from '../components/Detailpage/ReviewSection'
import Suggestion from '../components/Global/Suggestion'
import Footer from '../components/Global/Footer'
import Email from '../components/Global/Email'



function ProductDetailPage() {

    let { chosenProduct } = useContext(productContext);

    return (
        <>
            <Ad />

            <Header />

            <ProductInfo productData={chosenProduct} />

            <Suggestion title="You might also like" borderTop={false} />

            <Email />

            <Footer />
        </>
    )
}

export default ProductDetailPage