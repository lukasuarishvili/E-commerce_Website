import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';

// images
import star from '../../assets/star.png'
import HalfStar from '../../assets/star-half48.png'

function Item({ item }) {

    if (!item) return null;
    const { title, imgList, price, discount, rate } = item;



    const stars = [];


    for (let i = 1; i <= Math.floor(rate); i++) {
        stars.push(<img key={i} src={star} alt="star" className='w-6 h-6' />);
    }


    if (rate % 1 >= 0.5) {
        stars.push(<img key={rate} src={HalfStar} alt="halfstar" className='w-6 h-6' />);
    }



    return (
        <div className='min-w-max flex flex-col  px-1 py-1 gap-1'>
            <div className='max-w[295px] h-[298px]'>
                <img src={imgList[0]} alt="item image" className="  lg:w-[295px] h-full w-full rounded-[20px] object-cover" />
            </div>

            <h5 className='text-xl font-bold'>{title}</h5>
            <div className='flex justify-start items-center gap-2'>
                {stars}
                <p className='text-gray-500 text-sm'>{rate}/5</p>
            </div>

            {/* add discount to the card  */}
            <p className='font-bold text-xl'>${price}</p>


        </div >

    )
}

export default Item