"use client";
import { MotionConfig, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import {
  BiSolidChevronLeftCircle,
  BiSolidChevronRightCircle,
} from "react-icons/bi";

const images = [
  "/images/image5.jpg",
  "/images/image6.jpg",
  "/images/image7.jpg",
  "/images/image4.jpg",
];

export default function Home() {
  const [current, setCurrent] = useState(0);

  // Function to navigate to previous image
  const onPrevClick = () => {
    if (current > 0) {
      setCurrent(current - 1);
    }
  };

  // Function to navigate to next image
  const onClick = () => {
    if (current < images.length - 1) {
      setCurrent(current + 1);
    }
  };
  return (
    <main className='flex flex-col'>
      <MotionConfig transition={{ duration: 2, ease: [0.32, 0.72, 0, 1] }}>
        <h1 className='text-4xl text-center font-bold mt-5'>Home Page</h1>
        <div className='flex flex-col justify-between items-center p-24'>
          <div className='relative w-full max-w-[1000px] flex items-center overflow-hidden'>
            <div className='flex absolute items-center justify-between z-20 left-6 right-6'>
              <BiSolidChevronLeftCircle
                onClick={onPrevClick}
                className='text-3xl text-white cursor-pointer'
              />
              <BiSolidChevronRightCircle
                onClick={onClick}
                className='text-3xl text-white cursor-pointer'
              />
            </div>
            <motion.div
              animate={{ x: `calc(-${current * 100}% - ${current}rem)` }}
              className='flex flex-nowrap gap-4'>
              {images.map((image, index) => {
                return (
                  <Image
                    key={index}
                    src={image}
                    alt='image'
                    width={1500}
                    height={1000}
                    className='object-cover aspect-[16/9]'
                  />
                );
              })}
            </motion.div>
          </div>
          <div className='absolute bottom-10 left-1/2 transform -translate-x-1/2'>
            <div className='flex px-3 gap-3 py-2 rounded-full bg-slate-200'>
              {images.map((_, index) => {
                return (
                  <button key={index} onClick={() => setCurrent(index)}>
                    <div
                      className={`h-2 w-2 bg-slate-400 rounded-full ${
                        index === current ? "bg-orange-700" : "bg-slate-500"
                      }`}></div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </MotionConfig>
    </main>
  );
}
