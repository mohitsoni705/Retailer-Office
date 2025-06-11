import React from 'react'
import LeftNav from './LeftNav'
import Header from './Header'
import Dashboard from '../components/Pages/Dashboard'
import { Outlet } from 'react-router-dom'

const AppLayout = () => {
  return (
    <div className='flex flex-row  bg-[#F3F4F6]'>
      <div className='bg-white rounded'>
      <LeftNav className="flex-none w-[250px] h-screen" />
      </div>
      <div className="flex flex-col flex-1">
      <div className=' bg-white rounded'>
      <Header />
      </div>
      <div className='flex-1'>
      <Outlet/>
      </div>
      </div>
    </div>
  )
}

export default AppLayout
