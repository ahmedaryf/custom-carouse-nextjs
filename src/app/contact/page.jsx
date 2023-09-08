"use client";
import Image from "next/image";
import React, { useState } from "react";
import { motion } from "framer-motion";

const images = [
  "/images/image5.jpg",
  "/images/image6.jpg",
  "/images/image7.jpg",
  "/images/image4.jpg",
];

export default function Contact() {
  const [current, setCurrent] = useState(0);

  const onPrevClick = () => {
    if (current > 0) {
      setCurrent((prev) => prev - 1);
    }
  };
  const onClick = () => {
    if (current < images.length - 1) {
      setCurrent((prev) => prev + 1);
    }
  };
  return (
    <div className='w-screen flex flex-col items-center'>
      <h1 className='text-center text-red-900 font-bold mt-6 text-6xl'>
        Photo Carousel
      </h1>
      <div className='w-full max-w-[1000px] relative flex h-screen overflow-hidden'>
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
                width={1500}
                height={1000}
                className=' object-cover aspect-[16/9]'
              />
            );
          })}
        </motion.div>
      </div>
      <div className='px-6 py-2 rounded-full bg-green-400/80 absolute bottom-10 flex'>
        {images.map((_, index) => {
          return (
            <button onClick={() => setCurrent(index)} key={index}>
              <div
                className={`w-3 h-3 rounded-full mx-2 ${
                  index === current ? "bg-white" : "bg-green-600"
                }`}></div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
