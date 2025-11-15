import React, { useState } from 'react'

// images
import tshirt from '../../assets/tshirt.png'
import pantt from '../../assets/CLOTH1.png'
import pantts from '../../assets/CLOTH2.png'
import trash from '../../assets/trash.png'
import plus from '../../assets/plus.png'
import minus from '../../assets/minus.png'
import promo from '../../assets/promo.png'


export default function CartItem( { item, borderTop } ) {

    let [itemCount, setItemCount] = useState(1);


    return (
        <div className={`flex flex-row gap-8 p-3  w-full px-4   ${borderTop ? "border-t-[1px] border-gray-300" : "border-none"} `}>
            <div className={`flex flex-row gap-3 `}>
                <div className='w-[124px] h-[124px]'>
                    <img src={item.imgList[0]} alt="tshirt" className='w-full h-full' />
                </div>
                <div className='flex flex-col'>
                    <h6 className='text-[20px] font-bold'>{item.title}</h6>
                    <p className='text-black text-[14px]'>Size:<em className='text-gray-500'>Large</em></p>
                    <p className='text-black text-[14px]'>Color:<em className='text-gray-500' >White</em></p>
                    <h5 className='text-[24px] font-bold'>{item.price}</h5>
                </div>

            </div>
            <div className='max-w-full flex flex-col justify-between items-end '>
                <div className='w-6 h-6'>
                    <img src={trash} alt="trash" className='w-full h-full' />
                </div>

                <div className='flex gap-5 items-center rounded-3xl bg-gray-200 px-3.5 py-2.5'>
                    <button className='w-5 h-5' onClick={() => { setItemCount(itemCount - 1) }}>
                        <img src={plus} alt="plus" className='w-full h-full' />
                    </button>
                    <h4>{itemCount}</h4>

                    <button className='w-5 h-5' onClick={() => { setItemCount(itemCount + 1) }}>
                        <img src={minus} alt="minus" className='w-full h-full' />
                    </button>
                </div>
            </div>
        </div>
    )
}
