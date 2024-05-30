import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
   
   const [value,setValue] = useState({
    email:"",
    password:""
   })

   const navigate = useNavigate()
   const HandleSubmit = (e) => {
    e.preventDefault()
    axios.post("http://localhost:3005/data/login",value).then((result) => 
    {
        if(result.data.Status)
        {
         navigate('/dashboard')
        }
        else
        {
          alert(result.data.Error)
        }
    }).catch((err) => console.log(err))
   }
  return (
    <div className='d-flex justify-content-center align-items-center vh-100 loginPage'>
      <div className='border rounded p-3 w-25  bg-light text-dark  loginForm'>
        <form onSubmit={HandleSubmit}>
          <h2 className='text-center'>Login</h2>
          <div className='mb-3'>
            <label htmlFor='email'>Email Id</label>
            <input type='email' id='email' onChange={(e)=>setValue({...value,email:e.target.value})} placeholder='Enter the Email Id' className='form-control rounded-0' required></input>
          </div>
          <div className='mb-3'>
            <label htmlFor='password'>Password</label>
            <input type='password' id='password' onChange={(e)=>setValue({...value,password:e.target.value})}  placeholder='Enter the Password' className='form-control rounded-0' required></input>
          </div>
          <button className='btn btn-success w-100 rounded-0 mb-2' type="submit">Login</button>
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

export default Login
