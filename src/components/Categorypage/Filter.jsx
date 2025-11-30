import React, { useState, useEffect, useContext } from 'react'
import { productContext } from '../../App'
// images
import toggle from '../../assets/toggle.png'
import down_arrow from '../../assets/down_arrow.png'
import Detelthis from '../../assets/Testinput.png'



function Filter() {

    const [data, setData] = useState([])

    const { filterItems, setFilterItems } = useContext(productContext);

    const [filters, setFilters] = useState({
        price: [0, 100000],
        dressStyle: [],
        clothesType: [],
        colorList: [],
        size: "",
    });

    // gives the data state its data
    useEffect(() => {
        async function getData() {
            let res = await fetch("/data.json");
            let data = await res.json();
            setData(data)

        }
        getData()
    }, [])




    const clothstype = ["T-shirts", "Shorts", "Shirts", "Hoodie", "Jeans"];
    const clothsColors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet', 'pink', "black", "white"];
    const clothssizes = ["XX-Small", "X-Small", "Small", "Medium", "Large", "X-Large", "XX-Large", "3X-Large", "4X-Large"]


    


    return (
        <div className=' w-full max-w-[295px] max-h-[1220px] p-3'>

            {/* header */}
            <div className='w-full flex items-center justify-between py-2 border-b border-b-gray-300'>
                <div className=''>
                    <h3 className='text-[20px] font-bold '>Filters</h3>
                </div>
                <div>
                    <img src={toggle} alt="toggle" className='w-6 h-6 cursor-pointer' />
                </div>
            </div>

            {/* claoths type */}
            <div className='w-full border-b border-b-gray-400 '>
                <ul className="flex flex-col ">
                    {
                        clothstype.map((el, ind) =>
                            <div className='w-full flex items-center justify-between py-2' key={ind}>
                                <div className={`cursor-pointer duration-200 hover:text-[#000000be]  "text-black font-[600]" : "text-[#00000099]"}`}>
                                    {el}
                                </div>
                                <div>
                                    <img src={down_arrow} alt="down_arrow" className='w-4 h-4 cursor-pointer' />
                                </div>
                            </div>
                        )
                    }
                </ul>
            </div>

            {/* Price input */}
            {/* for later */}
            <div className='w-full flex flex-col gap-2 py-2  border-b border-b-gray-400'>
                <div className='w-full flex items-center justify-between py-2'>
                    <h4 className='text-[20px] font-bold '>Price</h4>
                    <div>
                        <img src={down_arrow} alt="down_arrow" className='w-4 h-4 cursor-pointer' />
                    </div>
                </div>

                <div className='w-full'>
                    <img src={Detelthis} alt="DetelthisF" className='w-full' />
                </div>
            </div>

            {/* clothsColors */}
            <div className='w-full flex flex-col gap-2 py-2  border-b border-b-gray-400'>
                <div className='w-full flex items-center justify-between py-2'>
                    <h4 className='text-[20px] font-bold '>Colors</h4>
                    <div>
                        <img src={down_arrow} alt="down_arrow" className='w-4 h-4 cursor-pointer' />
                    </div>
                </div>

                <div className='w-full flex flex-wrap gap-2.5'>
                    {
                        clothsColors.map((color, index) =>

                            <div key={index} className='min-h-9 min-w-9 border border-gray-500 hover:grayscale-25 rounded-[50%] cursor-pointer' style={{ backgroundColor: color }}>

                            </div>
                        )
                    }
                </div>
            </div>

            {/* clothssizes */}
            <div className='w-full flex flex-col gap-2 py-2  border-b border-b-gray-400'>
                <div className='w-full flex items-center justify-between py-2'>
                    <h4 className='text-[20px] font-bold '>Size</h4>
                    <div>
                        <img src={down_arrow} alt="down_arrow" className='w-4 h-4 cursor-pointer' />
                    </div>
                </div>

                <div className='w-full flex flex-wrap gap-2.5'>
                    {
                        clothssizes.map((size, index) =>
                            <div key={index} className='w-fit bg-gray-300 rounded-[62px] p-3 hover:bg-gray-400 cursor-pointer' >
                                {size}
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default Filter