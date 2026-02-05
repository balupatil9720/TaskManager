import React, { useState } from 'react'
import Home from './Components/Home'
import Tasks from './Components/Tasks'
import Navbar from './Components/Navbar'
import { Route, Routes } from 'react-router-dom'
import ListOfTasks from './Components/ListOfTasks'
import UserProfile from './Components/UserProfile'

const App = () => {
  const[tasks,setTask]=useState([])

  return (
    <div >
   <div>
     <Navbar/>

     <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/uploadTask' element={<Tasks tasks={tasks} setTask={setTask} />}/>
    <Route path='/taskList' element={<ListOfTasks tasks={tasks}  setTask={setTask}/>} />
    <Route path='/profile' element={<UserProfile />} />
     </Routes>
     
   </div>
    </div>
  )
}

export default App
