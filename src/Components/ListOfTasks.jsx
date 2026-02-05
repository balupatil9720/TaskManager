import React, { useState } from 'react'
import Tasks from './Tasks'
import { Link } from 'react-router-dom'

const ListOfTasks = ({tasks,setTask}) => {

    const[editIndex,setEditIndex]=useState(null)
    const[editTitle,setEditTitle]=useState('')
    const[editDetails,setEditDetails]=useState('')


    const startEdit=(task,index)=>{
        setEditIndex(index)
        setEditTitle(task.title)
        setEditDetails(task.details)
        
    }


    const saveEdit=(index)=>{
        const updatedTasks=[...tasks]
        updatedTasks[index]={
            title:editTitle,
            details:editDetails
        }
        setTask(updatedTasks)
        setEditIndex(null)
    }



      const DeleteTask=(index)=>{
      const Filtered=tasks.filter((_,i)=>i!=index)
      setTask(Filtered)
    }


  return (

    <div className='bg-violet-300 min-h-screen flex justify-center items-baseline'>
      <div>
        <h1 className='text-4xl text-gray-600 font-bold mt-3 mx-10 text-center mb-5'>Tasks</h1>
         {tasks.length===0 ? (
           <div className="">
             <h2 className='text-blue-600 ml-3 font-bold text-center text-2xl mt-10 mb-4'>No tasks to do</h2>
            <Link className='mt-4 ml-10 px-3 py-2 bg-blue-400 text-gray-700 font-semibold rounded-lg 'to='/uploadTask'> Upload Task</Link>
           </div>
         )
       :(
         <div className="grid  grid-cols-4 gap-4">
            {tasks.map((t,i)=>(
             <div key={i} 
             className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 p-5 flex flex-col justify-between ">
            {editIndex===i?(
                <div className="mb-1 flex flex-col justify-center">
                     <input type="text" value={editTitle}
                onChange={(e)=>{
               setEditTitle(e.target.value )
                }}
                className='h-10 w-64 border-2 mt-2 border-gray-600'
                />

                <textarea   value={editDetails} 
                onChange={(e)=>{
                    setEditDetails(e.target.value)
                }}
                className='h-30 w-66 border-2 border-gray-400 mt-2'></textarea>

             <button
             onClick={()=>{
                saveEdit(i)
             }}
             className='mt-4 bg-green-500 hover:bg-green-600 text-white text-sm font-semibold py-2 px-3 rounded-lg transition-colors'
             >Save</button>
                </div>
            ):(
                <>
                <h3 className='font-semibold text-lg text-gray-800 text-center mb-2'>
                {t.title}</h3>
            <p className='text-gray-500 text-sm text-center'>{t.details}</p>

            <div className='flex flex-row gap-4 justify-center'>
                <button 
            onClick={()=>{
              DeleteTask(i)
            }}
            className='mt-4 bg-red-500 hover:bg-red-600 text-white text-sm font-semibold py-2 rounded-lg transition-colors px-2'>Delete Task</button>
            
            <button onClick={()=>{
                startEdit(t,i)
            }}
             className='mt-4 bg-blue-500 hover:bg-blue-600 text-white text-sm font-semibold py-2 px-2 rounded-lg transition-colors'>Update Task</button>
            </div>

                </>
            )}
           </div>
        ))}
        </div>
       )}
      </div>
    </div>
  )
}

export default ListOfTasks
