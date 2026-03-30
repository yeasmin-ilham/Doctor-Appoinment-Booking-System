import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext';
import { useNavigate } from 'react-router-dom'

const Doctors = () => {

  const navigate = useNavigate();
  const {DoctorInfo} = useContext(AppContext)
  
  return (
    <div className='flex flex-col items-center gap-4 my-12 text-gray-900 md:mx-10'>
        <h1 className='text-3xl font-medium'>Doctors Directory</h1> 
        <p className='sm:w-1/3 text-center text-sm '>Search and connect with trusted doctors based on your needs, specialty, and preferred schedule.</p>
              
          <div className='w-full grid grid-cols-2 sm:grid-cols-4 flex-wrap gap-4 pt-5 space-y-6 px-3 sm:px-0'>
               {DoctorInfo.map((data, index) =>(
             <div onClick={()=> navigate(`/appoinment/${data._id}`)} key={index} className='border border-blue-200 rounded-xl overflow-hidden cursor-pointer  hover:translate-y-[-15px] hover:bg-blue-200 transition-all duration-500 '>
                 <img src={data.image} className='w-[200px] bg-blue-50 rounded-lg '/>
             <div className='p-4'>
                <div className='flex items-center gap-2 text-green-500 text-sm text-center '>
                   <p className='w-2 h-2 bg-green-500 rounded-full'></p> 
                   <p >{data.active}</p>
                </div>
                <p className='text-gray-900 text-lg font-medium '>{data.name}</p>
                <p className='text-gray-600 text-sm'>{data.speciality}</p>
             </div>
            </div> 
            ))}
      
          </div>
    </div>
  )
}

export default Doctors