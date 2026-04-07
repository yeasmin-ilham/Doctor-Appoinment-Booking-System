import React from 'react';
import rafiki from "../assets/rafiki.png"
import bro from "../assets/bro.png"

const About = () => {
  return (
    <section className='bg-primary min-h-screen max-w-7xl mx-auto px-4'>
      <div className=' px-6 md:px-12 lg:px-20 py-9'>
        <p className='text-yellow-400 text-xl font-medium'>~     WHO WE ARE</p>
        <p className='mt-12 text-white font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl tracking-tight'>We Help To Get You Well.</p>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-y-10 md:gap-y-0'>
          <div className='space-y-0 md:space-y-30'>
            <p className='text-white text-base sm:text-xl font-medium tracking-tight mt-9'>We are committed to providing compassionate and professional healthcare 
          services with the highest standards of medical excellence. 
          With years of experience and a patient-centered approach.
         </p>
         <div className='grid grid-cols-1 md:grid-cols-2 gap-9'>
        <div>
       <img src={bro} alt="hospital" className=' w-30 h-auto sm:w-50 object-cover'/>
        </div>
        <div className='flex items-center justify-center'>
          <p className='text-[9px] sm:text-[13px] text-white'>We are committed to providing clear, patient-friendly healthcare services with compassion and professionalism.
Our hospital ensures a comfortable environment where every patient feels informed, safe, and cared for.
We focus on quality treatment, modern facilities, and trusted medical expertise.
Your health and well-being are always our top priority.</p>
        </div>
         </div>

          </div>
          <div className='flex items-center justify-center'>
            <img src={rafiki} alt='image' className='w-50 h-auto sm:w-100 object-cover'/>
          </div>
      </div>
      </div>
    </section>
  );
};

export default About;












