
import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Login() {
  const [username,setUsername] = useState()
  const [password,setPassword] = useState()
  const navigation = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post('http://localhost:3001/login', {username,password})
    .then(result => {
      console.log(result)
      if(result.data === "done"){
        navigation('/home')
      }
    })
    .catch(
      err => console.log(err)
    )
  }


  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-secondary-subtle">
      <div className='rounded-1 bg-white w-25 p-5'>
        <h1>loging</h1>
        <div>
          <form onSubmit={handleSubmit}>
            <div className="m-2">
              <input 
                className='form-control'
                type="text"
                autoComplete='off'
                placeholder='Enter User Name'
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className='m-2'>
              <input 
                className='form-control'
                type="password"
                autoComplete='off'
                placeholder='Enter your Password'
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="d-grid col-6 mt-3">
              <button type='submit' className="btn btn-info position-relative start-50">log-in</button>
            </div>
          </form>
        </div>
        
      </div>
    </div>
  )
}

export default Login