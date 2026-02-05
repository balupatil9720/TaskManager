import React from 'react'
import {Link} from 'react-router-dom'
const Navbar = () => {
  return (
    <div>
      <div className='bg-violet-500 text-gray-700 flex flex-row-reverse gap-11 px-11 py-3'>
        
        <Link className='text-xl font-bold' to='/profile'>Profile</Link>
        <Link className='text-xl font-bold' to='/uploadTask'> Upload Tasks</Link>
        <Link className='text-xl font-bold' to='/taskList'>View Tasks</Link>
        <Link className='text-xl font-bold' to='/'>Home</Link>
      </div>
    </div>
  )
}

export default Navbar
