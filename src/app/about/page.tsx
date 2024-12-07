import React from 'react'
import Image from 'next/image'
import { SiHomeassistantcommunitystore } from "react-icons/si";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { IoBagHandle } from "react-icons/io5";
import { TbMoneybag } from "react-icons/tb";


const page = () => {
  return (
    <div className='max-w-[1440px] w-full'>
        <div className='ml-[150px] pt-[70px]'>
            <ul className='flex gap-2 w-[114px] h-[24px]  '>
                <li className='w-[42px] h-[21px] font-poppins font-normal text-[14px] opacity-[50%]'>Home</li>
                <p>/</p>
                <li  className='w-[42px] h-[21px] font-poppins font-normal text-[14px] '>About</li>
            </ul>
            </div>
            <div className='flex max-w-[1440px] ml-24'>
                <div className='w-[525px] h-[336px] mt-[50px]  pl-[15px] gap-[40px]'>
                <h2 className='font-inter font-semibold text-[54px] text-left  h-[64px] w-[277px] mb-6'>Our Story</h2>
                 <p>Launced in 2015, Exclusive is South Asia’s premier online shopping makterplace with an active presense in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across the region. </p>
                  <br />
                 <p>Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assotment in categories ranging  from consumer.</p>
                </div>
                <div>
<Image src="/images/about.png" alt="about" width={1000} height={1000} className='rounded-[4px] ml-[40px] w-[600px] h-[400px] '/>
                </div>
            </div>
            <About1/>
    </div>
  )
}

export default page

export const About1 = ()=>{
    return(
        <div>
            <div className='ml-[150px]'>
                <div className='w-[1050px] flex h-[230px] mt-6 gap-[30px]'>
                    <div className='border-2 rounded-[4px] space-y-3 border-[#d6d5d5f5] w-[230px] h-[200px]'>
                        <button className='rounded-full border-4 ml-[36%] mt-10  w-[55px] h-[55px] p-3 border-gray-300'><SiHomeassistantcommunitystore size="28px" className='mb-1 bg-[#FAFAFAFA] text-[#000000] mr-[10px]'/> </button>
                        <h2 className='font-inter font-bold w-[92px] h-[32px] ml-[32%] text-[32px] 4%'>10.5k </h2>
                 <p className='font-poppins font-normal ml-[18%] text-[16px] w-[169px] h-24px] text-center'>Sallers active our site</p>

                    </div>
                    <div className='border-2 bg-[#DB4444] rounded-[4px] space-y-3 border-[#d6d5d5f5] w-[230px] h-[200px]'>
                        <button className='rounded-full border-4 ml-[36%] mt-10  w-[55px] h-[55px] p-3 border-gray-300'><AiOutlineDollarCircle size="28px" className='mb-1 bg-[#FAFAFAFA] text-[#000000] mr-[10px]'/> </button>
                        <h2 className='font-inter font-bold w-[92px] h-[32px] ml-[32%] text-[32px] 4%'>33k </h2>
                 <p className='font-poppins font-normal ml-[18%] text-[16px] w-[169px] h-24px] text-center'>Mopnthly Produduct Sale</p>

                    </div>
                    <div className='border-2 rounded-[4px] space-y-3 border-[#d6d5d5f5] w-[230px] h-[200px]'>
                        <button className='rounded-full border-4 ml-[36%] mt-10  w-[55px] h-[55px] p-3 border-gray-300'><IoBagHandle size="28px" className='mb-1 bg-[#FAFAFAFA] text-[#000000] mr-[10px]'/> </button>
                        <h2 className='font-inter font-bold w-[92px] h-[32px] ml-[32%] text-[32px] 4%'>10.5k </h2>
                 <p className='font-poppins font-normal ml-[18%] text-[16px] w-[169px] h-24px] text-center'>Sallers active our site</p>

                    </div>
                    <div className='border-2 rounded-[4px] space-y-3 border-[#d6d5d5f5] w-[230px] h-[200px]'>
                        <button className='rounded-full border-4 ml-[36%] mt-10  w-[55px] h-[55px] p-3 border-gray-300'><TbMoneybag size="28px" className='mb-1 bg-[#FAFAFAFA] text-[#000000] mr-[10px]'/> </button>
                        <h2 className='font-inter font-bold w-[92px] h-[32px] ml-[32%] text-[32px] 4%'>10.5k </h2>
                 <p className='font-poppins font-normal ml-[18%] text-[16px] w-[169px] h-24px] text-center'>Sallers active our site</p>

                    </div>
                </div>

            </div>
        </div>
    )
}