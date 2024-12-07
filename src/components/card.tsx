import React from 'react'
import Image from 'next/image';
interface propstype{
    img:string;
    title:string;
    price:string;
    rate:string
}
const Card:React.FC<propstype>= ({img,title,price,rate}) => {
  return (
    <div>
        <div className='border-2 border-gray-300 p-4'>
            <div><Image src={img} alt="card" width={500} height={500} className='w-[200px] h-[150px] bg-[#F5F5F5] P-2' /></div>
            <h2>{title}</h2>
            <p>{price}</p>
            <p>{rate}</p>
        </div>
      
    </div>
  )
}

export default Card