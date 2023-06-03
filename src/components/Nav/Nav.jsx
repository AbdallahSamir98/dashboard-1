import React from 'react'
import { Link } from 'react-router-dom'
import './Nav.css'
export default function Nav() {
  return (
   <div className="container-fluid nav  py-3 fixed-top ">
     <div className='container '>
   <nav className="navbar  text-white navbar-dark text-capitalize navbar-expand-lg bg-body-tertiary  ">
  <div className="container-fluid ">
    <Link className="navbar-brand" to='/home'>Logo</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item ">
            
            <Link className="nav-link navlink ms-3  " aria-current="page" to='/home'>
            <i className="fa-solid fa-gauge " ></i>
            Dashboard
            </Link>
       
        </li>
        <li className="nav-item">
        <Link className="nav-link navlink ms-3 " aria-current="page" to='/mapview'>
        <i className="fa-solid fa-map-location-dot"></i>
            map view
            </Link>
        </li>
        <li className="nav-item dropdown">
    <Link className="nav-link navlink ms-3 dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">
    <i className="fa-solid fa-bars"></i>
         Mange Business</Link>
    <ul className="dropdown-menu  ">
      <li><Link className="dropdown-item" to="">add new business</Link></li>
      <li><Link className="dropdown-item" to="">mange business</Link></li>
      <li><Link className="dropdown-item" to="">business order</Link></li>
      <li><Link className="dropdown-item" to="">business report</Link></li>
      <li><Link className="dropdown-item" to="">business review</Link></li>
      
    </ul>
  </li>
  <li className="nav-item dropdown">
    <Link className="nav-link navlink ms-3 dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">
    <i className="fa-solid fa-car"></i>    mange drivers</Link>
    <ul className="dropdown-menu  ">
      <li><Link className="dropdown-item" to="">drive list</Link></li>
      
      
    </ul>
  </li>
  <li className="nav-item dropdown">
    <Link className="nav-link navlink ms-3 dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">
    <i className="fa-solid fa-users"></i>    mange customer</Link>
    <ul className="dropdown-menu  ">
      <li><Link className="dropdown-item" to="">customers</Link></li>
      
      
    </ul>
  </li>

            <li className="nav-item dropdown">
    <Link className="nav-link navlink ms-3 dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">
    <i className="fa-solid fa-gears"></i>
         setting</Link>
    <ul className="dropdown-menu  ">
      <li><Link className="dropdown-item" to="">website setting</Link></li>
      <li><Link className="dropdown-item" to="">driver commission</Link></li>
      <li><Link className="dropdown-item" to="">commission setting</Link></li>
      <li><Link className="dropdown-item" to="">mange sub admin</Link></li>
      <li><Link className="dropdown-item" to="">change password</Link></li>
      <li><Link className="dropdown-item" to="">application setting</Link></li>
      <li><Link className="dropdown-item" to="">application slider</Link></li>
      
    </ul>
  </li>  
       
       
      </ul>
    </div>
  </div>
</nav>
    </div>
   </div>
  )
}
