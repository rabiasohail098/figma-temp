import React from 'react';
import { FaAngleRight, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Image from 'next/image';
import Card from './card';

const Hero = () => {
  return (
    <div className="flex flex-col md:flex-row p-6 gap-6">
      <div className="flex flex-col md:flex-row items-center md:items-start">
        <div className="w-full md:w-[217px] h-auto gap-4 ml-0 md:ml-[150px]">
          {[
            "Woman’s Fashion",
            "Men’s Fashion",
            "Electronics",
            "Home & Lifestyle",
            "Medicine",
            "Sports & Outdoor",
            "Baby’s & Toys",
            "Groceries & Pets",
            "Health & Beauty",
          ].map((category, index) => (
            <span key={index} className="flex items-center gap-2">
              <p className="font-poppins text-[16px] text-left">{category}</p>
              <FaAngleRight />
            </span>
          ))}
        </div>

        <div className="hidden md:block w-[2px] h-[350px] bg-black opacity-30 mx-[50px]"></div>
      </div>

      <div className="flex justify-center md:justify-end">
        <Image
          src="/images/frame.png"
          alt="hero"
          width={1000}
          height={1000}
          className="w-full md:w-[696px] h-auto rounded-lg"
        />
      </div>
    </div>
  );
};

export const Hero1 = () => {
  return (
    <div className="flex flex-col gap-6 p-6">
      <div className="flex items-center gap-4">
        <div className="w-5 h-10 bg-[#DB4444] rounded"></div>
        <h2 className="text-[#DB4444] font-semibold text-lg">Today&apos;s</h2>
      </div>

      <div className="flex justify-between items-center">
        <h2 className="font-inter font-semibold text-4xl">Flash Sales</h2>
        <Image
          src="/images/time.png"
          alt="time"
          width={1000}
          height={1000}
          className="w-[302px] h-auto"
        />
        <div className="flex gap-2">
          <button className="bg-gray-200 p-4 rounded-full">
            <FaArrowLeft />
          </button>
          <button className="bg-gray-200 p-4 rounded-full">
            <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export const CardDetails = () => {
  const data = [
    {
      id: 1,
      img: "/images/2.png",
      title: "HAVIT HV-G92 Gamepad",
      price: "$120 $160",
      rate: "/images/star.png",
    },
    {
      id: 2,
      img: "/images/3.png",
      title: "AK-900 Wired Keyboard",
      price: "$960 $1160",
      rate: "/images/star.png",
    },
    {
      id: 3,
      img: "/images/4.png",
      title: "IPS LCD Gaming Monitor",
      price: "$370 $400",
      rate: "/images/star.png",
    },
    {
      id: 4,
      img: "/images/5.png",
      title: "Cart With Flat Discount ",
      price: "$375",
      rate: "/images/star.png",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
      {data.map((item) => (
        <Card
          key={item.id}
          img={item.img}
          title={item.title}
          price={item.price}
          rate={item.rate}
        />
      ))}
    </div>
  );
};

export const Hero3 = () => {
  return (
    <div className="flex flex-col gap-6">
      <Image
        src="/images/HERO2.png"
        alt="hero"
        width={1000}
        height={1000}
        className="w-full md:w-[1050px] h-auto mx-auto rounded-lg"
      />

      <div className="flex items-center gap-4">
        <div className="w-5 h-10 bg-[#DB4444] rounded"></div>
        <h2 className="text-[#DB4444] font-semibold text-lg">Our Products</h2>
      </div>

      <div className="flex justify-between items-center">
        <h2 className="font-inter font-semibold text-4xl">Explore Our Products</h2>
        <div className="flex gap-2">
          <button className="bg-gray-200 p-4 rounded-full">
            <FaArrowLeft />
          </button>
          <button className="bg-gray-200 p-4 rounded-full">
            <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
