import React, { useState } from 'react'

const Tasks = ({tasks,setTask}) => {

    
    const[title,setTitle]=useState("")
    const[details,setDetails]=useState("")
    const[message,setMessage]=useState("")

    const createTask=(e)=>{
        e.preventDefault()
         if(!(title.trim())) return
        const newtask={title,details}
         const updated=[...tasks,newtask]
        console.log(updated)
        setTask(updated)

        setMessage("Task Added Successfully...")

        setTimeout(()=>setMessage(""),1000)

        setTitle("")
        setDetails("")
    }

  
  return (
    <div className='bg-violet-300 min-h-screen'>
      <div className=' flex justify-center'>
        <form onSubmit={createTask} >
            <h2 className='text-2xl text-gray-600 font-bold mt-3 mx-10'>Create a Task</h2>
            
            <div className='flex  flex-col '>
                <input 
                className='h-10 w-64 border-2 mt-2 border-gray-600'
                type="text"
                 placeholder='Enter Title' 
                 value={title} onChange={(e)=>{
                    setTitle(e.target.value)
                 }} />

            <textarea 
            className='h-30 w-66 border-2 border-gray-400 mt-2'
             placeholder='Enter Details'
            value={details}
            onChange={(e)=>{
                setDetails(e.target.value)
            }}
              ></textarea>

            <button type='submit'
            className='  mt-3 px-3 py-3 w-26 mx-20 bg-blue-400 text-gray-600 font-bold rounded-lg'>
                Add</button>

                 {message && (
            <p className='text-green-700 font-bold text-xl text-center'>
              {message}
            </p>
          )}
            </div>
        </form>
      </div>
      
    </div>
  )
}

export default Tasks
