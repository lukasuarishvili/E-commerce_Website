import React, { useState, useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'

// images
import star from '../../assets/star.png'
import HalfStar from '../../assets/star-half48.png'
import Yes from '../../assets/y.png'
import plus from '../../assets/plus.png'
import minus from '../../assets/minus.png'

// components
import ReviewSection from './ReviewSection'


// context
import { productContext } from '../../App'


function ProductInfo({ productData }) {

    // destructuring productData / this data is not changable by user
    let { price, desc, imgList, title, colorList, rate, reviews, sizeList } = productData;

    // State for keeping which img is pressed/vieued
    const [selectedColorIndex, setSelectedColorIndex] = useState(0);
    const [selectedSize, setSelectedSize] = useState(null);
    let [productCount, setproductCount] = useState(1);




    //  states for adding the data to the contexts
    let { cartItems, setCartitems, chosenProduct, setChosenProduct } = useContext(productContext);


    function ChangeColor(index) {
        setSelectedColorIndex(index);

    };

    function ChangeDesign(index) {
        setSelectedColorIndex(index);
    };

    // the finished object that will be added to the cart

    let usersProduct = {
        ...productData,
        Userssize: selectedSize,
        productsCount: productCount,
        usersDesign: selectedColorIndex
    }


    // stars logic
    rate = parseFloat(rate);
    const stars = [];

    for (let i = 1; i <= Math.floor(rate); i++) {
        stars.push(<img src={star} alt="star" className='w-7 h-7' key={i} />);
    };

    if (rate % 1 >= 0.5) {
        stars.push(<img src={HalfStar} alt="halfstar" className='w-7 h-7' key="half" />);

    };

    return (
        <>

            <section className=' w-full flex flex-col justify-center items-center px-12'>
                <div className='w-fit border-t-2 border-gray-500 flex flex-col gap-5  '>
                    <h5>{"Home>Shop>Men>T-shirts"}</h5>

                    <div className='flex flex-col md:flex-row lg:flex-row justify-center items-center gap-7 px-1'>


                        {/* three smalll images */}
                        <div className='flex flex-row md:flex-col lg:flex-col gap-3 max-w-fit'>

                            {
                                imgList.map((img, index) =>

                                    img ?
                                        <button key={index} onClick={() => {
                                            ChangeDesign(index)
                                        }
                                        }>
                                            <img

                                                src={img}
                                                className="w-[111px] h-[106px] md:w-[152px] md:h-[167px]  rounded-[20px]"
                                            />
                                        </button> : null

                                )
                            }

                        </div>

                        {/* main big image */}
                        <div className=' h-auto '>
                            <img src={imgList[selectedColorIndex]} alt="main images" className='max-w-[410px] max-h-[510px]  min-w-full min-h-autp    rounded-[20px]' />
                        </div>

                        {/* products info */}
                        <div className=' flex flex-col gap-1  '>

                            <h1 className=' md:text-[40px] lg:text-[40px] font-bold'>{title}</h1>

                            {/* stars */}
                            <div className='flex flex-row gap-2 items-center'>
                                <div className='flex'>
                                    {stars}
                                </div>
                                <p className='text-gray-500 text-lg'>{rate}</p>
                            </div>

                            <h3 className='text-[32px] font-bold'>{price}</h3>

                            <p className='text-gray-500 text-[16px] mb-2'>{desc}</p>

                            {/*selecting  colors */}
                            <div className='flex flex-col border-t-[1px] border-gray-300 py-2.5 gap-3'>
                                <h4 className='text-gray-500'>Select Colors</h4>
                                <div className='flex gap-2 '>
                                    {
                                        colorList.map((ColorElement, index) =>
                                            <button
                                                key={index}
                                                className='p-2 text-white rounded-[50%] bg-green-200 border border-gray-700'
                                                onClick={() => ChangeColor(index)}
                                                style={{ backgroundColor: ColorElement }} >
                                                {
                                                    index == selectedColorIndex ?
                                                        <img src={Yes} alt="yes" className='w-4 h-4' />
                                                        :
                                                        <div className='w-4 h-4'></div>

                                                }
                                            </button>

                                        )
                                    }


                                </div>

                            </div>

                            {/*selecting  sizes */}
                            <div className='flex flex-col border-t-[1px] border-gray-300 py-2.5 gap-3 '>
                                <h4 className='text-gray-500'>Choose Size</h4>
                                <div className='flex gap-[12px] '>

                                    {
                                        sizeList.map((size, index) =>
                                            selectedSize == size ?
                                                <button
                                                    className='px-[24px] py-[12px] rounded-[62px]   bg-gray-900 opacity-60 hover:bg-gray-900 text-white'
                                                    key={index}
                                                    onClick={() => { setSelectedSize(size) }}>
                                                    {size}
                                                </button>
                                                :
                                                <button
                                                    className='px-[24px] py-[12px] rounded-[62px]   bg-[#b4b4b4] opacity-60 hover:bg-gray-900 hover:text-white'
                                                    key={index}
                                                    onClick={() => { setSelectedSize(size) }}>
                                                    {size}
                                                </button>


                                        )
                                    }
                                </div>

                            </div>

                            <div className='flex flex-col border-t-[1px] border-gray-300 py-2.5'>

                                <div className='flex gap-5 min-w-max '>

                                    <div className='min-w-fit flex py-4 px-5 gap-6 items-center  bg-[#b4b4b4] opacity-60 rounded-[62px]'>

                                        <button onClick={() => { setproductCount(Math.max(1, productCount - 1)) }}>
                                            <img src={minus} alt="decrement" className='w-5 h-5' />
                                        </button>

                                        <p className='text-l'>{productCount}</p>


                                        <button onClick={() => { setproductCount(productCount + 1) }}>
                                            <img src={plus} alt="increment" className='w-5 h-5' />
                                        </button>
                                    </div>
                                    <Link to="/Cart">
                                        <button className='bg-black text-white py-4 px-[54px] rounded-[62px] w-full hover:bg-gray-700 '
                                            onClick={() => {
                                                setCartitems([...cartItems, usersProduct]);
                                            }}>
                                            Add to Cart
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section >

            <ReviewSection reviews={reviews} />
        </>
    )
}

export default ProductInfo
