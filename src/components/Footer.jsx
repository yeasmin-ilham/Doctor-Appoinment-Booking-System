import React from 'react'
import logo from "../assets/logo.png"
import { useNavigate } from 'react-router-dom'


const Footer = () => {
    const navigate = useNavigate()
  return (
    <div className='grid grid-cols-2 gap-14'>

        <div className='space-y-2'>
            <div className='flex items-center gap-2 text-xl italic font-bold'>
                  <img onClick={() => navigate('/')} src={logo} width={38} height={38} className='cursor-pointer'/>
                  <p className='cursor-pointer' onClick={() => navigate('/')}>Doctor's <span className='text-sky-500'>Point</span></p>
                </div>
        <p className='text-gray-500 text-sm max-w-sm'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500</p>
        </div>

        <div className='grid grid-cols-2 gap-14'>
        <div className='space-y-2'>
                   <p className='font-medium'>Company</p>
         <ul className='text-gray-500 text-sm max-w-sm' >
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
         </ul>
        </div>

               <div className='space-y-2' >
             <p className='font-medium'>Contact</p>
         <ul className='text-gray-500 text-sm max-w-sm'>
            <li>+358-857-45</li>
            <li>ilham@gmail.com</li>
         </ul>
        </div>
        </div>
        <hr/>
    </div>

    
  )
}

export default Footer