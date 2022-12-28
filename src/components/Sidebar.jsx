import React from 'react'
import {FaHome,FaAddressBook, FaReceipt, FaCalendar, FaPen, FaSlidersH} from 'react-icons/fa'
import { Link, Outlet } from 'react-router-dom'
import logo from '../assets/img/logo.png'

const Sidebar = () => {
  return (
    <>
        <div className=' fixed flex flex-col justify-between w-48 h-screen p-5 shadow-sm text-gray-900 bg-white'>
        <div className=' text-center'>
            <img src={logo} alt="" />

            <hr className='mt-5 mb-5 bg-gray-300' />

            <ul className='flex flex-col items-center text-2xl gap-5'>

                <li className=' hover:bg-pink-100 p-3 rounded-xl cursor-pointer w-full '>
                    <Link to="/home" className='flex  justify-between items-center'><FaHome/> <span className=' text-lg'>Menu</span></Link>
                </li>

                <li className=' hover:bg-pink-100 p-3 rounded-xl cursor-pointer w-full'>
                    <Link to="/clients" className='flex  justify-between items-center'><FaAddressBook/> <span className=' text-lg'>Clientes</span></Link>
                </li>

                <li className=' hover:bg-pink-100 p-3 rounded-xl cursor-pointer w-full'>
                    <Link to="/orders" className='flex  justify-between items-center '><FaReceipt/> <span className=' text-lg'>Ordenes</span></Link>
                </li>

                <li className=' hover:bg-pink-100 p-3 rounded-xl cursor-pointer w-full'>
                    <Link to="/calendar" className='flex  justify-between items-center '><FaCalendar/> <span className=' text-lg'>Calendario</span></Link>
                </li>

                <li className=' hover:bg-pink-100 p-3 rounded-xl cursor-pointer w-full'>
                    <Link to="/notes" className='flex  justify-between items-center '><FaPen/> <span className=' text-lg'>Notas</span></Link>
                </li>
            </ul>
        </div>

        <div className='flex justify-center text-2xl hover:bg-pink-200 p-3 rounded-xl'>
            <a href=""><FaSlidersH/></a>
        </div>
    </div>

    <Outlet/>
    </>
  )
}

export default Sidebar