import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css' 
import SignUp from './SignUp'
import Login from './Login'
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import Button from './Button'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Button/>
        <Routes>
          <Route path='/register' element={<SignUp />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
