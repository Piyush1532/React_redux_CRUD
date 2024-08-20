import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom'
import { updateUser } from '../Redux/userSlice';

const Update = () => {
 const {id} =useParams()
 const users = useSelector((state) => state.users);
    const existingUser=users.filter(filteruser=>filteruser.id == id)
    const {name ,email}=existingUser[0]

    const [updatename,setName]=useState(name);

    const [updateemail,setEmail]=useState(email);
    
    const dispatch=useDispatch()
 const navigate =useNavigate()

 const  handleUpdate=(evt)=>{
evt.preventDefault()
dispatch(updateUser({
    id:id,
    name:updatename,
    email:updateemail
}))
navigate("/")
 }
  return (
    <div className='d-flex w-100 vh-100 justify-content-center align-items-center'>
    <div className="w-50 border bg-secondary text-white p-5">
      <h3>Update User</h3>
<form onSubmit={handleUpdate} >
  <div>
      <label htmlFor="name">Name</label>
      <input type="text" name='name'  className='form-control ' placeholder='Enter your Name' value={updatename} onChange={(e)=>setName(e.target.value)}/>
  </div>
  <div>
      <label htmlFor="email">Email</label>
      <input type="email" name="email" className='form-control'  placeholder='Enter your email' value={updateemail} onChange={(e)=>setEmail(e.target.value)} />
  </div><br />
  <button className='btn btn-info'>Update</button>
</form>
    </div>
  </div>
  )
}

export default Update
