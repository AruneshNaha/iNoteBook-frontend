import React from 'react'
import { Link } from 'react-router-dom'

export const Logout = () => {
  return (
    <div className='text-center' style={{ margin: "35px 0px", marginTop: "100px" }}>
        <h1>You have successfully been logged out</h1>
        <Link to="/login">Login here</Link><br/>
        <Link to="/signup">Create new account here here</Link>
    </div>
  )
}
