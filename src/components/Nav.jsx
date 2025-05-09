import React, { useContext, useEffect } from 'react'
import { MdFastfood } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import { FaShoppingBag } from "react-icons/fa";
import { dataContext } from '../Context/UserContext';
import food_items from '../assets/food';
import { useSelector } from 'react-redux';

const Nav = () => {
  const {input , setInput , cat , setCat , showCart , setShowCart} = useContext(dataContext);

  useEffect(()=>{
    let newlist = food_items.filter((item) => (item.food_name.includes(input)) || (item.food_name.toLowerCase().includes(input.toLowerCase())));
    setCat(newlist)
  },[input])

  const items = useSelector(state => state.cart);

  
  return (
    <div className='w-full h-[100px] flex justify-between items-center px-7 md:px-5'>
        <div className='w-[60px] h-[60px] bg-white flex justify-center items-center rounded-md shadow-xl'>
        <MdFastfood  className='text-[30px] text-green-500'/>
        </div>
        <form className='flex items-center w-[55%] h-[60px] bg-white px-5 gap-4  rounded-md  shadow-md md:w-[70%] ' onSubmit={(e) => e.preventDefault()}>
        <FaSearch className='text-xl text-green-500'/>
        <input type="text" className='outline-none w-full text-[16px] md:text-[20px]' placeholder='Search Food..' onChange={(e)=> setInput(e.target.value)} value={input} />
        </form>
        <div className='w-[60px] h-[60px] bg-white flex justify-center items-center rounded-md shadow-xl relative cursor-pointer' onClick={() => setShowCart(true)}>
            <span className='absolute top-0 right-3  text-green-500 font-bold'>{items.length}</span>
        <FaShoppingBag className='text-[30px] text-green-500'/>
        </div>
    </div>
  )
}

export default Nav
