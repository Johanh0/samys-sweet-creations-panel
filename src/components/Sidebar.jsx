import { useState } from 'react'
import {FaHome,FaAddressBook, FaReceipt, FaCalendar, FaPen, FaDoorOpen} from 'react-icons/fa'
import { Link, Outlet, useLocation } from 'react-router-dom'
import logo from '../assets/img/logo.png'

const Sidebar = () => {

    const location = useLocation();

  return (
    <>
        <div className=' fixed flex flex-col justify-between w-48 h-screen p-5 shadow-sm text-gray-900 bg-white'>
        <div className=' text-center'>
            <img src={logo} alt="Logo" />

            <hr className='mt-5 mb-5 bg-gray-300' />

            <ul className='flex flex-col items-center text-xl gap-5'>

                <li 
                    className={(location.pathname === '/home') ? 'bg-pink-100 p-3 rounded-xl cursor-pointer w-full' : 'hover:bg-pink-100 p-3 rounded-xl cursor-pointer w-full '}
                >
                    <Link to="/home" className='flex  justify-start items-center'><FaHome/> <span className=' text-base ml-5'>Menu</span></Link>
                </li>

                <li 
                    className={(location.pathname === '/clients') ? 'bg-pink-100 p-3 rounded-xl cursor-pointer w-full' : 'hover:bg-pink-100 p-3 rounded-xl cursor-pointer w-full '}
                >
                    <Link to="/clients" className='flex  justify-start items-center'><FaAddressBook/> <span className=' text-base ml-5'>Clientes</span></Link>
                </li>

                <li 
                    className={(location.pathname === '/orders') ? 'bg-pink-100 p-3 rounded-xl cursor-pointer w-full' : 'hover:bg-pink-100 p-3 rounded-xl cursor-pointer w-full '}
                >
                    <Link to="/orders" className='flex  justify-start items-center '><FaReceipt/> <span className=' text-base ml-5'>Ordenes</span></Link>
                </li>

                <li 
                    className={(location.pathname === '/calendar') ? 'bg-pink-100 p-3 rounded-xl cursor-pointer w-full' : 'hover:bg-pink-100 p-3 rounded-xl cursor-pointer w-full '}
                >
                    <Link to="/calendar" className='flex  justify-start items-center '><FaCalendar/> <span className=' text-base ml-5'>Calendario</span></Link>
                </li>

                <li 
                    className={(location.pathname === '/notes') ? 'bg-pink-100 p-3 rounded-xl cursor-pointer w-full' : 'hover:bg-pink-100 p-3 rounded-xl cursor-pointer w-full '}
                >
                    <Link to="/notes" className='flex  justify-start items-center '><FaPen/> <span className=' text-base ml-5'>Notas</span></Link>
                </li>
            </ul>
        </div>

        <div>
            <ul className='flex flex-col items-center text-xl gap-5'>
                <li 
                    className='hover:bg-pink-100 p-3 rounded-xl cursor-pointer w-full '
                >
                    <Link to="/login" className='flex  justify-start items-center '><FaDoorOpen/> <span className=' text-base ml-5'>Salir</span></Link>
                </li>
            </ul>
        </div>
    </div>

    <Outlet/>
    </>
  )
}

export default Sidebar