import React from 'react'
import userImg from '../../../assets/img/user.png'

const Home = () => {
  return (
    <div className=' w-full h-screen bg-gray-100 pl-60 pt-10 pr-10 pb-10'>
      <div className='flex justify-between items-center mb-16 mt-5'>
        <div>
          <h1 className='text-5xl font-bold text-gray-900'>Hola Johan!</h1>
          <p className=' text-lg text-gray-600'>Samy's Sweet Creations</p>
        </div>
        <div>
          <img src={userImg} alt="Perfil" className=' w-12 rounded-full cursor-pointer'/>
        </div>
      </div>

      <div className='flex justify-between gap-10 w-full '>
        <div className=' w-2/3 h-10'>
          <h2 className=' mb-5 font-medium text-gray-700'>Ordenes</h2>
          <div className=' w-full h-60 bg-white rounded-lg'>

          </div>
        </div>

        <div className=' w-1/3 h-10'>
          <h2 className=' mb-5 font-medium text-gray-700'>Calendario</h2>
          <div className=' w-full h-60 bg-white rounded-xl shadow-sm'>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Home