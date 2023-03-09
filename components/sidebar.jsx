"use client"
import React from 'react'
import Link from 'next/link'
import { BiCctv } from 'react-icons/bi'
import { HiOutlineEye, HiOutlineUserGroup, HiOutlinePresentationChartLine, HiArrowLeft, HiChevronLeft } from 'react-icons/hi'
const Sidebar = ({ toggle }) => {
    return (
        <div className='bg-gray-800 w-[200px] overflow-y-auto md:h-screen flex-col min-h-full fixed ml-2  text-white py-4 border-l-2 border-gray-200'>

            <div className='justify-center my-2 items-center justify-items-center w-full text-center'>
                <div className='h-[120px] w-[120px] bg-red-100 border-2 border-red-500 rounded-full relative mx-auto'></div>
                <h3>
                    هیوا نظری
                </h3>
            </div>
            <ul className='px-4 space-y-2  font-medium  sidemenu'>
                <li>
                    <Link href="/admin/main" className='flex space-x-2 justify-between hover:text-pink-700'>
                    <div className='flex align-middle'>  <HiOutlineEye className='mx-2'></HiOutlineEye>
                        <span>پخش زنده</span></div>  
                        <HiChevronLeft></HiChevronLeft>
                        </Link>
                </li>
                <li>
                    <Link href="/admin/report" className='flex space-x-2  hover:text-pink-700'>
                        <HiOutlinePresentationChartLine className='mx-2'></HiOutlinePresentationChartLine>
                        <span>گزارشات  </span></Link>
                </li>
                <li>
                    <Link href="/admin/main" className='flex space-x-2  hover:text-pink-700'>
                        <BiCctv className='mx-2'></BiCctv>
                        <span>تنظیمات دوربین </span></Link>
                </li>
                <li>
                    <Link href="/admin/main" className='flex space-x-2  hover:text-pink-700'>
                        <HiOutlineUserGroup className='mx-2'></HiOutlineUserGroup>
                        <span>مدیریت کاربران</span></Link>
                </li>
            </ul>
        </div>
    )
}

export default Sidebar