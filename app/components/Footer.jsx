import Image from 'next/image'
import {assets} from '@/assets/assets'
import React from 'react'

const Footer = () => {
  return (
    <div className='mt-20'>
      <div className='text-center'>
        <Image src={assets.logo} alt='' className=' w-36 mx-auto mb-2' />

    <div className='w-max  flex items-center gap-2 mx-auto'>
    <Image src={assets.mail_icon} alt='' className=' w-6' />
    samshawon518@gmail.com
    </div>
      </div>


    
    <div className='text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6' >
         <p>
            &copy; 2025 Sam Shawon. All rights reserved.
        </p>

        <ul className='flex items-center gap-10 justify-center mt-4 sm:mt-0'>
            <li>Facebook</li>
            <li>Instagram</li>
            <li>Twitter</li>
            <li>LinkedIn</li>
            
        </ul>
    </div>

    </div>
  )
}

export default Footer
