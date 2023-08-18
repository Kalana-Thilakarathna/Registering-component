import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
function signup() {
    const [name,setName] = useState()
    const [email,setEmail] = useState()
    const [password,setPassword] = useState()
    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:3001/register',{name, email, password})
        .then(result => console.log(result))
        .catch(err => console.log(err))
    }

  return (
    <div className="d-flex justify-content-center bg-warning-subtle align-items-center vh-100">
        <div className='bg-white w-25 rounded-2 p-5'>
            <h1>Register</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor='username' className='ms-2 col-sm-3'>
                        <strong>User Name</strong>
                        </label>
                    <input 
                    className=' col-form-label rounded-0 mb-3' 
                    type="text" 
                    placeholder="enter user name" 
                    autoComplete="off" id="username"
                    onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor='email' className='ms-2 col-sm-3'>
                        <strong>
                            E-mail
                        </strong>
                    </label>
                    <input 
                    className='col-form-label rounded-0 mb-3' 
                    type="text" 
                    placeholder="enter email" 
                    autoComplete="off" 
                    id="email"
                    onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor='password' className='ms-2 col-sm-3'>
                        <strong>
                            Password
                        </strong>
                    </label>
                    <input 
                    className="col-form-label rounded-0 mb-3" 
                    type="password" 
                    placeholder="enter password" 
                    autoComplete="off" 
                    id="password"
                    onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div className='d-grid col-6 mx-auto mb-2'>
                    <button type='submit' className="btn btn-primary">Register</button>
                </div> 
            </form>
            <div className='d-grid col-6 mx-auto mb-2 mt-0'>
                <p>if you already sign-in</p>
                <Link to = "/login" className='btn btn-primary'>Login</Link>
            </div>
            
        </div>
        
    </div>

  )
}

export default signup