"use client";
import { BiLogoFacebookCircle } from "react-icons/bi";

import FramerMagnetic from "../components/framer";

export default function Project() {
  return (
    <div className='flex flex-col items-center'>
      <h1 className='text-7xl text-red-800 mt-6 mb-6'>Project</h1>
      <FramerMagnetic>
        <div>
          <BiLogoFacebookCircle size={48} />
        </div>
      </FramerMagnetic>
    </div>
  );
}
