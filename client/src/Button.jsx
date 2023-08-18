import React from 'react'
import { Link } from 'react-router-dom'

function Button() {
  return (
    <div className="justify-content-center align-items-center">
        <Link to = "/register" className="btn btn-primary">register</Link>
    </div>
  )
}

export default Button