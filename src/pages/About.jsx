// import React from 'react'

// const About = () => {
//   return (
//     <div>About</div>
//   )
// }

// export default About











import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext';



const Doctors = () => {

  const {speciality} = useParams();
  const [filterdoc, setfilterdoc] = useState([])

   const {DoctorInfo} = useContext(AppContext)
   const navigate = useNavigate()

   const applyFilter = () => {
    if(speciality){
      setfilterdoc(DoctorInfo.filter(doc => doc.speciality === speciality))
    }else {
      setfilterdoc(DoctorInfo)
    }
   }

   useEffect(() => {
    applyFilter()
   // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [DoctorInfo, speciality])
  return (
    <div>
      <p>Browse through the doctors specialist.</p>
      <div>
        <div>
          <P>General physician</P>
          <P>Gynecologist</P>
          <P>Dermatologist</P>
          <P>Pediatricians</P>
          <P>Neurologist</P>
          <P>Gastroenterologist</P>
        </div>
        <div className='w-full grid grid-cols-auto gap-4 gap-y-6'>
          {
            filterdoc.map((data, index) =>(
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
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Doctors