import React from 'react'
import Create from './Create'

const Dashboard = () => {
  return (
    <div className='flex flex-col  justify-center w-5/6 mx-auto mt-10 p-4 bg-gray-100 rounded-lg shadow-lg'>  
      <h1 className='font-bold text-xl border inline p-2 text-center hover:bg-gray-700 mt-3 hover:text-white hover:rounded-xl rounded'>Dashboard</h1>
      <Create/>
    </div>
  )
}

export default Dashboard
