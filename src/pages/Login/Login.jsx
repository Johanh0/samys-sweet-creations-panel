import React from 'react'
import logoImg from '../../assets/img/logo.png'

const Login = () => {
  return (
    <section className='flex justify-center items-center w-full h-screen'>
        <div className=' flex flex-col justify-center items-center w-1/4 min-w-fit h-fit text-center pt-16 pb-16 bg-pink-100 rounded-lg shadow-md relative'>

          <div className=' w-32 h-32 rounded-full bg-gray-50 absolute -top-16 shadow-md'>
            <img src={logoImg} alt="" className='rounded-full'/>
          </div>
          

          <form action="" className='flex flex-col w-1/2 min-w-full pl-14 pr-14'>
            <div className='flex flex-col items-start m-3'>
              <label htmlFor="login-name" className=' text-lg font-bold mb-1'>Usuario</label>
              <input id='login-name' type="text" className=' w-full h-8 rounded-md pl-3 outline-pink-300' />
            </div>

            <div className='flex flex-col items-start m-3'>
              <label htmlFor="login-password" className=' text-lg font-bold mb-1'>Contraseña</label>
              <input id='login-password' type="password" className=' w-full h-8 rounded-md pl-3 outline-pink-300' />
            </div>

            <div className='flex flex-col items-center m-3'>
              <input type="submit" value='Entrar' className=' text-xl font-bold text-gray-50 pt-2 pr-5 pb-2 pl-5 rounded-md bg-gray-800 hover:bg-gray-700 cursor-pointer'/>
            </div>
          </form>
        </div>
    </section>
  )
}

export default Login