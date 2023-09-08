"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const images = [
  "/images/image5.jpg",
  "/images/image6.jpg",
  "/images/image7.jpg",
  "/images/image4.jpg",
];

export default function Product() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    let intervalId;

    if (current < images.length - 1) {
      intervalId = setInterval(() => {
        setCurrent((prev) => (prev < images.length - 1 ? prev + 1 : 0));
      }, 5000);

      return () => {
        if (intervalId) {
          clearInterval(intervalId);
        }
      };
    }
  }, []);

  return (
    <div className='flex flex-col items-center'>
      <h1 className='text-5xl text-center text-red-800 font-bold mt-6 mb-8'>
        Product Image Carousel
      </h1>
      <div className='flex justify-center overflow-hidden group'>
        <motion.div
          animate={{ x: `calc(-${current * 100}% - ${current}rem)` }}
          transition={{ duration: 1, ease: [0.5, 1, 0.6, 1] }}
          className='relative flex flex-nowrap gap-4 w-full max-w-[1000px]'>
          {images.map((image, index) => {
            return (
              <Image
                key={index}
                src={image}
                alt='Image'
                width={1000}
                height={800}
                className=' object-cover aspect-[16/9]'
              />
            );
          })}
        </motion.div>
        <div className='absolute px-6 py-2 rounded-full bg-red-300/10 group-hover:bg-red-300 duration-500 bottom-28 flex items-center justify-center'>
          {images.map((_, index) => {
            return (
              <button
                className=' '
                onClick={() => setCurrent(index)}
                key={index}>
                <div
                  className={`w-4 h-4 rounded-full mx-2 ${
                    index === current ? "bg-white" : "bg-red-600/50"
                  }`}></div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
