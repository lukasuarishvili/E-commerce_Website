import React, { useState, useEffect, useContext } from 'react'
import { productContext } from '../../App'



// images
import toggle from '../../assets/toggle.png'
import down_arrow from '../../assets/down_arrow.png'
import Detelthis from '../../assets/Testinput.png'
import Check from '../../assets/y.png'


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

    let [showingColor, setShowingColor] = useState(true);
    let [showingSize, setShowingSize] = useState(true);

    function getEveryColor() {
        let copyFilter = [];
        let finishedFilter = [];

        data.forEach((el) => {
            if (Array.isArray(el.colorList)) copyFilter.push(...el.colorList);
        });

        for (let i of copyFilter) {
            if (!finishedFilter.includes(i)) {
                finishedFilter.push(i);
            }
        }
        return finishedFilter;
    }


    function getEverySize() {
        let copyFilter = [];
        let finishedFilter = [];

        data.forEach((el, ind) => {
            copyFilter.push(...el.sizeList);
        });

        for (let i of copyFilter) {
            if (!finishedFilter.includes(i)) {
                finishedFilter.push(i);
            }
        }

        return finishedFilter;
    }


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

    console.log(filters)

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
                    {clothstype.map(
                        (el, ind) =>
                            <li className='w-full flex items-center justify-between py-2' key={ind} >
                                <div
                                    className={`cursor-pointer duration-200 hover:text-[#000000be]

                                         ${filters.clothesType === el ? "text-black font-semibold " : "text-[#00000099]"}`}

                                    onClick={() => {
                                        setFilters({
                                            ...filters,
                                            clothesType: filters.clothesType === el ? "" : el,
                                        })
                                    }}>
                                    {el}
                                </div>
                                <div>
                                    <img src={down_arrow} alt="down_arrow" className='w-4 h-4 cursor-pointer' />
                                </div>
                            </li>
                    )}
                </ul>
            </div >

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

                    <button onClick={() => setShowingColor(!showingColor)}>
                        <img src={down_arrow} alt="down_arrow" className={`w-4 h-4 cursor-pointer duration-300 transform ${showingColor ? "rotate-180" : "rotate-0"}`} />
                    </button>
                </div>

                <div className={`flex gap-2 flex-wrap overflow-y-hidden ${!showingColor ? "max-h-[80px]" : "max-h-[350px]"} duration-300`}>
                    {
                        getEveryColor().map((el, index) =>
                            <div
                                key={index}
                                style={{ backgroundColor: el }}
                                onClick={() =>
                                    setFilters({
                                        ...filters,
                                        colorList: filters.colorList.includes(el)
                                            ? filters.colorList.filter(c => c !== el)
                                            : [...filters.colorList, el],
                                    })
                                }
                                className='min-h-9 min-w-9 border border-gray-500 hover:grayscale-25 rounded-[50%] cursor-pointer flex items-center justify-center'
                            >

                                <img src={Check} alt="check" className={` w-4 h-5 ${filters.colorList.includes(el) ? "opacity-100" : "opacity-0"}`} />
                            </div>
                        )
                    }
                </div>
            </div>

            {/* clothssizes */}
            <div className='w-full flex flex-col gap-2 py-2  border-b border-b-gray-400'>
                <div className='w-full flex items-center justify-between py-2'>
                    <h4 className='text-[20px] font-bold '>Size</h4>

                    <button onClick={() => setShowingSize(!showingSize)}>
                        <img src={down_arrow} alt="down_arrow" className={`w-4 h-4 cursor-pointer duration-300 transform ${showingSize ? "rotate-180" : "rotate-0"}`} />
                    </button>
                </div>

               <div className={`flex gap-2 flex-wrap overflow-y-hidden ${!showingSize ? "max-h-[80px]" : "max-h-[350px]"} duration-300`}>
                    
                    {
                        getEverySize().map((el, index) =>
                            <div
                                key={index}
                                className={`w-fit font-semibold rounded-[62px] ${el == filters.size ? "bg-gray-700 text-gray-200" : "bg-gray-300"}  px-7 py-1.5 hover:bg-gray-400 cursor-pointer`}
                                onClick={() =>
                                    setFilters({
                                        ...filters,
                                        size: filters.size === el ? "" : el
                                    })
                                }
                            >
                                {el}
                            </div>
                        )
                    }
                </div>
            </div>
        </div >
    )
}

export default Filter