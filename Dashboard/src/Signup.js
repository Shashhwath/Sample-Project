import React, { useState } from 'react'
import './index.css'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'

const Signup = () => {

   const [values,setValues] = useState({
    name:"",
    email:"",
    password:"",
    phone:""
   })
   
   const navigate = useNavigate()
   const HandleSubmit = (e) =>
    {
      e.preventDefault()
      axios.post('http://localhost:3005/data/userdata',values).then((result) =>
      {
        if(result.data.Status)
          {
            navigate('/dashboard')
          }
        else
        {
          alert(result.data.Error)
        }
      } ).catch((err) => console.log(err))
    }
  return (
    <div className='d-flex justify-content-center align-items-center vh-100 loginPage'>
      <div className='border rounded p-3 w-25  bg-light text-dark  loginForm'>
        <form onSubmit={HandleSubmit}>
          <h2 className='text-center'>Sign Up</h2>
          <div className='mb-3'>
            <label htmlFor='name'>Username</label>
            <input type='text' id='name' autoComplete='off' onChange={(e)=>setValues({...values,name:e.target.value})} placeholder='Enter the Username' className='form-control rounded-0' required></input>
          </div>
          <div className='mb-3'>
            <label htmlFor='email'>Email Id</label>
            <input type='email' id='email' onChange={(e)=>setValues({...values,email:e.target.value})} placeholder='Enter the Email Id' className='form-control rounded-0' required></input>
          </div>
          <div className='mb-3'>
            <label htmlFor='password'>Password</label>
            <input type='password' id='password' onChange={(e)=>setValues({...values,password:e.target.value})} placeholder='Enter the Password' className='form-control rounded-0' required></input>
          </div>
          <div className='mb-3'>
            <label htmlFor='phone'>Phone No</label>
            <input type='text' id='phone' onChange={(e)=>setValues({...values,phone:e.target.value})} placeholder='Enter the Phone Number' className='form-control rounded-0' required></input>
          </div>
          <button className="btn btn-success w-100" type='submit'>Sign Up</button>
          <Link className='btn btn-primary w-100 mt-3'to={'/Login'}>Login</Link>
         <div>
            <p className='mb-2'>Ensure given email and password are correct</p>
            <input type='checkbox' id='check' className='me-3'  required></input>
            <label htmlFor='check'>Agree above conditions</label>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Signup
