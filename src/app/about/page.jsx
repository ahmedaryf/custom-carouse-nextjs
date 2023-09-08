"use client";
import { AnimatePresence, MotionConfig, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { BiSolidChevronLeft, BiSolidChevronRight } from "react-icons/bi";

const images = [
  "/images/image5.jpg",
  "/images/image6.jpg",
  "/images/image7.jpg",
  "/images/image4.jpg",
];

export default function About() {
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
    <div className='w-screen flex flex-col items-center'>
      <h1 className='text-center text-5xl font-bold mt-6 mb-9'>About Page</h1>
      <div className='relative w-full max-w-[1000px] h-screen flex items-center justify-center overflow-hidden'>
        <div className='flex absolute items-center justify-between z-20 left-2 right-2'>
          <BiSolidChevronLeft
            onClick={onPrevClick}
            className='text-3xl text-white cursor-pointer'
          />
          <BiSolidChevronRight
            onClick={onClick}
            className='text-3xl text-white cursor-pointer'
          />
        </div>
        <motion.div
          animate={{ x: `calc(-${current * 100}% - ${current}rem)` }}
          transition={{ duration: 1, ease: [0.32, 0.72, 0, 1] }}
          className='flex flex-nowrap gap-4 items-center'>
          {images.map((image, index) => {
            return (
              <Image
                key={index}
                src={image}
                alt='Image'
                width={1000}
                height={1000}
                className=' object-cover aspect-[16/9]'
              />
            );
          })}
        </motion.div>
      </div>
      <div className='absolute bg-slate-400/70 bottom-5 flex rounded-full'>
        {images.map((_, index) => {
          return (
            <button key={index} onClick={() => setCurrent(index)}>
              <div
                className={`relative w-4 h-4  m-2 rounded-full ${
                  current === index ? "bg-red-600" : "bg-white"
                }`}></div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
