import React from 'react'
import { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { productContext } from '../../App';

// compmeonets
import Item from './Item';


function Suggestion({ title, borderTop }) {

    let { setChosenProduct } = useContext(productContext);

    let [products, setproducts] = useState([]);
    let [cardInfos, setCardInfos] = useState([])

    // thsi gets the data and stores it in products state
    useEffect(() => {

        async function getData() {
            let res = await fetch("/data.json");
            let data = await res.json()
            setproducts(data)
        };

        getData();
    }, []);

    // when products state changes it should add right info cards to the cards\
    useEffect(() => {
        let info = addCardInfo()
        setCardInfos(info)
    }, [products])

    function randomNums() {
        let nums = []
        let res = []

        while (nums.length < 19) {
            nums.push(Math.floor(Math.random() * products.length))

        };

        const set = new Set(nums).values();

        set.forEach((number) => {
            res.push(number)

        });
        return res
    };


    function addCardInfo() {
        let cardIndexses = randomNums()
        let cardinfos = [];

        for (let i = 0; i < 4; i++) {
            cardinfos.push(products[cardIndexses[i]])
        }
        return cardinfos
    }



    return (
        <section className={`flex flex-col gap-10 mt-12 mx-auto max-w-fit px-2 py-3   ${borderTop ? "border-t-[2px] border-gray-400 " : 'border-none'} `}>
            <h3 className='text-center font-extrabold text-5xl'>{title}</h3>
            <div className='w-full flex justify-center '>
                <div className='text-start flex flex-row gap-3 w-fit justify-start items-center overflow-x-auto  scroll-smooth'>

                    {
                        cardInfos.map((cardinfo, index) =>
                            <Link
                                to="/product"
                                key={index}
                                onClick={()=>{setChosenProduct(cardinfo)}}
                            >
                                <Item item={cardinfo} />
                            </Link>

                        )
                    }

                </div>
            </div>
            <div className='w-full mt-4 flex  justify-center items-center px-4 '>
                <button className='w-full max-w-2xs md:w-fit lg:w-fitt px-[60px] py-[12px] font-medium text-center border-solid border-gray-500 border-2 rounded-full hover:bg-gray-200 ease-in-out '>
                    View All
                </button>

            </div>

        </section >

    )
}

export default Suggestion