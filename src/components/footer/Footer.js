import React from 'react'
import { logo3 } from "../../assests/index";

const Footer = () => {
  return (
    <div className='bg-gradient-to-b from-[#46443A] to-black flex items-center justify-center text-white text-center p-10 flex-col'>
      <img
            src={logo3}
            alt="Logo"
            className="lg:h-10 sm:h-22 md:h-36"
          />
          <p>vikaschelluru@gmail.com</p>
    </div>
  )
}

export default Footer
