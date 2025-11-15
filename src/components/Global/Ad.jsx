import React from 'react'
import { useState } from 'react'


// images 
import x from '../../assets/X.png'


function Ad() {


    // state for displaing/showing the add 
    let [showAdd, setShowAdd] = useState(true);

    if (!showAdd) return null


    return (
        <div className="w-full bg-black text-white flex justify-between items-center px-6 py-2 text-sm font-roboto">
            <div className=" flex-1  text-center  " >
                <p >Sign up and get 20% off your first order.
                    <a href="#" className=" underline ml-1 ">
                        Sign Up Now
                    </a>
                </p>
            </div >
            <button className="h-5 w-5 cursor-pointer hidden md:block lg:block" onClick={() => { setShowAdd(false) }}>
                <img src={x} alt="X" className="w-full h-full " />
            </button>
        </div >

    )
}

export default Ad