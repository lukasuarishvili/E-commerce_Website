import { useState, useEffect, useContext } from 'react'

import { Link } from 'react-router-dom';
// images
import down_arrow from '../../assets/down_arrow.png'

// components
import Item from '../Global/Item';

// context
import { productContext } from '../../App';


function Products() {

    let { filterItems, setChosenProduct } = useContext(productContext);



    return (
        <>
            <section className='w-full flex flex-col gap-7 '>

                <div className='w-full flex justify-between '>
                    <h2 className='text-[32px] font-bold '>Casual</h2>
                    <div className=' gap-1 items-center hidden lg:flex '>
                        <p className='text-gray-800'>Showing 1-10 of 100 Products Sort by: <em className='font-bold '> Most Popular</em> </p>
                        <img src={down_arrow} alt="down_arrow" className='w-4 h-4' />
                    </div>


                </div>

                <div className='w-fit flex flex-wrap gap-2'>
                    {filterItems &&
                        filterItems.map((productinfo, index) =>
                            <Link
                                to="/product"
                                key={index}
                                onClick={(e) => { 
                                    setChosenProduct(productinfo)
                                  
                                 }}
                            >
                                <Item item={productinfo} />
                            </Link>

                        )
                    }
                </div>

                <div className='w-full flex '>
                    <button>

                    </button>


                    <div>

                    </div>

                    <button>

                    </button>
                </div>
            </section>
        </>
    )
}

export default Products
