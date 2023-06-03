import React from 'react'
import { Link } from 'react-router-dom'
import './NotFound.css'
const NotFound = () => {
  return (
    <>

        <div className=" error   text-center">
            <img src="images/error404.png" alt="" className='errorImage ' />
            <h5>OPPS...This page canot found back to <Link to='home' className='text-danger'>home</Link></h5>
        </div>


    </>
  )
}

export default NotFound