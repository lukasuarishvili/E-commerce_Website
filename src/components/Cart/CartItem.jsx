import React, { useContext, useState } from 'react'

// images
import tshirt from '../../assets/tshirt.png'
import pantt from '../../assets/CLOTH1.png'
import pantts from '../../assets/CLOTH2.png'
import trash from '../../assets/trash.png'
import plus from '../../assets/plus.png'
import minus from '../../assets/minus.png'
import promo from '../../assets/promo.png'

import { productContext } from '../../App'

export default function CartItem({ item, index }) {

    let { cartItems, setCartitems } = useContext(productContext);

    let { productsCount, usersDesign, Userssize, imgList, price, title, sizeList, colorList } = item

    let [cartproductsCount, setcartproductsCount] = useState(productsCount);



    return (
        <div className="flex flex-row gap-8 p-3  w-full  border-t-[1px] border-gray-300  border-none  lg:max-w-[667px]" >
            <div className={`flex flex-row gap-3 `}>
                <div className='w-[124px] h-[124px]'>
                    {
                        usersDesign ?
                            <img src={imgList[usersDesign]} alt="tshirt" className='w-full h-full' />
                            :
                            <img src={imgList[0]} alt="tshirt" className='w-full h-full' />

                    }

                </div>
                <div className='flex flex-col'>
                    <h6 className='text-[20px] font-bold'>{title}</h6>
                    <p className='text-black text-[14px]'>Size:<em className='text-gray-500'>
                        {Userssize ? Userssize : sizeList[0]}</em></p>
                    <p className='text-black text-[14px]'>Color:
                        <em className='text-gray-500' >
                            {
                                usersDesign ? colorList[usersDesign] : colorList[0]
                            }
                        </em>
                    </p>
                    <h5 className='text-[24px] font-bold'>${price * cartproductsCount}</h5>
                </div>

            </div>
            <div className='max-w-full flex flex-col justify-between items-end '>
                <div className='w-6 h-6'>
                    <button
                        onClick={() => {
                            setCartitems(cartItems.splice(index+1)
                            )
                        }}>
                    <img src={trash} alt="trash" className='w-full h-full' />
                </button>

            </div>

            <div className='flex gap-5 items-center rounded-3xl bg-gray-200 px-3.5 py-2.5'>
                <button
                    className='w-5 h-5'
                    onClick={() => { setcartproductsCount(cartproductsCount - 1) }}>
                    <img src={minus} alt="plus" className='w-full h-full' />
                </button>
                <h4>{cartproductsCount}</h4>

                <button
                    className='w-5 h-5'
                    onClick={() => { setcartproductsCount(cartproductsCount + 1) }}>
                    <img src={plus} alt="minus" className='w-full h-full' />
                </button>
            </div>
        </div>
        </div >
    )
}
