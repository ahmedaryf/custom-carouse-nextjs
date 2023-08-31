import React from "react";
import {
  FaKickstarterK,
  FaFacebookSquare,
  FaInstagramSquare,
  FaTwitterSquare,
} from "react-icons/fa";
import { CgMenuRound } from "react-icons/cg";
import { IoIosHome, IoLogoYoutube } from "react-icons/io";
import { MdHotel, MdKitesurfing } from "react-icons/md";
import { GiMeal, GiSailboat } from "react-icons/gi";
import { HiInformationCircle } from "react-icons/hi";

const navItems = [
  {
    name: "Home",
    url: "/",
    icon: <IoIosHome />,
  },
  {
    name: "Guesthouses",
    url: "/guesthouses",
    icon: <MdHotel />,
  },
  {
    name: "Activities",
    url: "/activities",
    icon: <MdKitesurfing />,
  },
  {
    name: "Cafe'",
    url: "/cafe",
    icon: <GiMeal />,
  },
  {
    name: "Transfers",
    url: "/transfers",
    icon: <GiSailboat />,
  },
  {
    name: "About us",
    url: "/aboutUs",
    icon: <HiInformationCircle />,
  },
];

export default function Navbar() {
  return (
    <nav className=' px-6 py-4 bg-slate-200'>
      <div className='flex justify-between'>
        <FaKickstarterK size={48} />
        <CgMenuRound size={48} color='gray' />
      </div>
      <div className='bg-green-50 md:p-5 w-full h-[90vh] mt-5 rounded-lg flex flex-col'>
        <div className='grid grid-cols-2 md:grid-cols-3'>
          {navItems.map((item, index) => {
            return (
              <div
                key={index}
                className='cursor-pointer hover:bg-gray-100 md:p-6 bg-white m-3 h-20 md:h-40 flex flex-col items-center justify-center rounded-md md:rounded-xl shadow-xl'>
                <div className='text-2xl md:text-6xl text-gray-500'>
                  {item.icon}
                </div>
                <h5 className='text-gray-500 md:text-4xl text-center font-bold [text-shadow:_4px_1px_2px_rgb(0_0_0_/_30%)]'>
                  {item.name}
                </h5>
              </div>
            );
          })}
        </div>
        <div className='bg-red-200 md:flex justify-between items-center md:p-5 mt-auto rounded-md text-center'>
          <div className='flex justify-between px-3 pt-6 md:pt-0 text-2xl md:text-3xl'>
            <div className='m-2'>
              <FaFacebookSquare />
            </div>
            <div className='m-2'>
              <FaInstagramSquare />
            </div>
            <div className='m-2'>
              <IoLogoYoutube />
            </div>
            <div className='m-2'>
              <FaTwitterSquare />
            </div>
          </div>
          <div>
            <h5 className='mt-6 md:mt-0 pb-6 md:pb-0'>
              info@visitkeyodhoo.com
            </h5>
          </div>
        </div>
      </div>
    </nav>
  );
}
