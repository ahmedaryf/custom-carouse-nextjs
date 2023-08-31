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

export default function Home() {
  const [current, setCurrent] = useState(0);
  const [isFocus, setIsFocus] = useState(false);

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
      <MotionConfig>
        <h1 className='text-4xl text-center font-bold mt-5'>
          Next js Carousel
        </h1>
        <div className='flex flex-col justify-between items-center p-4 md:p-24'>
          <div className='relative w-full max-w-[1000px] flex items-center overflow-hidden'>
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
              transition={{ duration: 2, ease: [0.32, 0.72, 0, 1] }}
              onHoverStart={() => setIsFocus(true)}
              onHoverEnd={() => setIsFocus(false)}
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
            <AnimatePresence>
              {isFocus && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 2, ease: [0.32, 0.72, 0, 1] }}
                  onHoverStart={() => setIsFocus(true)}
                  onHoverEnd={() => setIsFocus(false)}
                  className='absolute bottom-2 md:bottom-6 left-1/2 transform -translate-x-1/2'>
                  <div className='flex px-4 gap-3 py-2 rounded-lg bg-black/40 shadow-lg'>
                    {images.map((image, index) => {
                      return (
                        <button key={index} onClick={() => setCurrent(index)}>
                          <div className={`w-14 rounded relative shadow-lg`}>
                            {
                              <Image
                                src={image}
                                alt={image}
                                width={600}
                                height={600}
                                className={`rounded object-cover ${
                                  current === index
                                    ? "opacity-40 cursor-default"
                                    : "opacity-100"
                                }`}
                              />
                            }
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </MotionConfig>
    </main>
  );
}
