import React, { useEffect, useState } from 'react'

const UserProfile = () => {

     const[profile,setProfile]=useState(null)
     const[isEditing,setIsEditing]=useState(false)
     const[form,setForm]=useState({
        name:'',
        email:'',
        bio:'',
        image:''
     })
      

     useEffect(()=>{
        const savedProfile=localStorage.getItem('profile')
        if(savedProfile){
            setProfile(JSON.parse(savedProfile))
        } 
     },[])


    const HandleChange=(e)=>{
      setForm({...form,[e.target.name]:e.target.value})
    }
    

    const HandleImage=(e)=>{
        const file=e.target.files[0]
        if(file){
            setForm({...form,image:URL.createObjectURL(file)})
        }
    }


      const HandleSubmit= e  =>{
        e.preventDefault()
        setProfile(form)
        localStorage.setItem('profile',JSON.stringify(form))
        setIsEditing(false)
      }

      const HandleEdit=e=>{
        setForm(profile)
        setIsEditing(true)
      }

  return (
    <div className="bg-violet-300 h-screen flex justify-center items-baseline " >
     {!profile ||isEditing ?(
        <form onSubmit={HandleSubmit} className="bg-white p-6 rounded shadow w-80">
            <h2 className="text-xl font-bold mb-4 mt-1 ml-16 ">
                {profile?'Edit Profile':'Create Profile'}
            </h2>

            <input 
            type="text"
            value={form.name}
            placeholder='Name'
            name='name'
            className="w-full border p-2 mb-3"
            onChange={HandleChange}
            required
             />

             <input 
            type="text"
            value={form.email}
            placeholder='email'
            name='email'
            className="w-full border p-2 mb-3"
            onChange={HandleChange}
             />

             <textarea 
             type="text"
            value={form.bio}
            placeholder='Bio'
            name='bio'
            className="w-full border p-2 mb-3"
            onChange={HandleChange}>
            </textarea>

          <p className='font-semibold text-gray-600 mb-1'>Upload Image</p>
            <input 
            type="file" 
            accept='image/*'
            className=' file:font-bold file:text-gray-600 file:px-3
                        file:py-2 file:border file:border-gray-400
                        file:rounded file:bg-gray-200  text-sm
                         text-gray-600'
            onChange={HandleImage}
             />

             {form.image &&(
                <img src={form.image}
                 alt="preview" 
                  className="w-24 h-24 rounded-full mx-auto mb-3"
                  />
             )}

             <button className='mt-4 ml-28 bg-green-500 hover:bg-green-600 text-white text-medium font-semibold py-2 px-4 rounded-lg transition-colors'>Save</button>

        </form>
     ):(
    <div className="bg-white p-6 rounded shadow w-80 text-center">
        <img 
        src={profile.image}
         alt="profileImage"
          className="w-24 h-24 rounded-full mx-auto mb-3" />
          <h2 className='text-xl font-bold'>{profile.name}</h2>
          <p className='text-gray-600'>{profile.email}</p>
          <p className='mt-2'>{profile.bio}</p>

          <button className='mt-4 bg-green-500 hover:bg-green-600 text-white text-sm font-semibold py-2 px-3 rounded-lg transition-colors'
          onClick={HandleEdit}
          >Edit Profile</button>
          <button
           className='mt-4 ml-2 bg-red-500 hover:bg-red-600 text-white text-sm font-semibold py-2 px-2 rounded-lg transition-colors'
           onClick={()=>{
            localStorage.removeItem('profile')
            setProfile(null)
           }}
          >Delete Profile</button>
    </div>

     )}
       
      </div>
   
  )
}

export default UserProfile
