import React from 'react'
import {Link} from 'react-router-dom'
const Home = () => {

  
  return (
    <div className="bg-violet-300 h-screen flex justify-center items-baseline ">
      <div>
        <h1 className='text-5xl text-gray-950 font-bold mt-11'>Task Manager</h1>
        <h3 className='text-2xl text-gray-600 font-semibold mt-3'>Welcome to your Task Manager </h3>
        <div className='flex items-center justify-center'>
          
           <Link className='mt-3 px-3 py-2 bg-blue-400 text-gray-700 font-semibold rounded-lg' to='/taskList'>Go Ahead</Link>
        </div>
      </div>
    </div>
  )
}

export default Home
