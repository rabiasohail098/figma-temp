import React from 'react'
import { IoIosSearch } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaRegUserCircle } from "react-icons/fa";
import Link from 'next/link';
const TopHeader = () => {
  return (
    <div className='w-[1270px] h-[48px] pt-3 gap-[231px] bg-[#000000] text-[#FAFAFA] flex'>
        <div className='w-[750px] h-[24px]'>
<p className='pl-[245px] text-center font-poppins text-sm w-[794px] h-[18px] font-normal'>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!<span className='ml-3 w-[68px] h-[24px] font-poppins font-semibold text-sm underline text-center'>ShopNow</span></p>
</div>
<select name="select" id="select" className='bg-[#000000] text-[#FAFAFA] text-center'>
    <option value="English">English</option>
</select>
    </div>
  )
}

export default TopHeader

export const Header = ()=>{
    return(
    
<div className='border-b-2 border-[#f5f5f5e8] '>
        <div className='flex w-[1170px] h-[38px] mb-4 ml-[135px]  mt-[88px] gap-[130px] '>
            <h2 className='h-[24px] w-[118px] text-[24px] font-inter font-[700] text-[#000000] 3%'>Exclusive</h2>
           <ul className='w-[370px] h-[24px] flex gap-[48px] text-[#000000]'>
            <li className='font-poppins text-[16px] text-center font-normal w-[48px] h-[24px]'><Link href="/">Home</Link></li>
            <li className='font-poppins text-[16px] text-center font-normal w-[66px] h-[24px]'><Link href="">Contact</Link></li>
            <li className='font-poppins text-[16px] text-center font-normal w-[48px] h-[24px]'><Link href="../about">About</Link></li>
            <li className='font-poppins text-[16px] text-center font-normal w-[61px] h-[24px]'><Link href="../singin">Sing Up</Link></li>
           </ul>
           <div className='flex gap-3'>
            <button className='flex border-2 border-[#F5F5F5]  pl-[20px] pt-[7px] pb-[7px] pr-[12px] bg-[#F5F5F5]  gap-[10px] rounded-[4px]'><input type="text" placeholder='What are you looking for?' className='w-[130pxx] h-[18px] text-[12px] font-poppins font-normal opacity-[50%] text-[#000000]'/><IoIosSearch className='w-[16px] h-[16px]'/></button>
            <FaRegHeart className='h-[28px] w-[28px]'/>
            <MdOutlineShoppingCart className='h-[28px] w-[28px]' />
            <FaRegUserCircle  className='h-[28px] w-[28px] '/>
           </div>
        </div>
        </div>
    )
}