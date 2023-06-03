import React , {useState} from 'react'
import Imm from '../assets/images/blockchain.png'
import { Link } from "react-router-dom";
import "./leftNav.css";
import { Image } from 'react-bootstrap';
const LeftNav = ({isNotActive , setNotActive}) => {
  
  const [isDropdownActive, setDropdownActive] = useState("false");
  var barsIcon =  <i className="fas fa-bars"></i>
  var crossIcon =  <i className="fas fa-times-circle"></i>
  return (
    <div >
    <div className="wrapper  ">
      <nav  id="sidebar" className={isNotActive ? "active" : "" }>
       
 
       

        <ul className="list-unstyled components">
              
           <li className="main-list w-100 rounded ">
             <i className="fas fa-tachometer-alt fa-fw icon-color text-white" style={{fontSize : '1.5rem'}} ></i> 
             <Link to="/members" className='text-white' aria-current="true">Main dashboard</Link>
          </li>  

          
          <li className="list-item">
            <i className="fas fa-home  icon-color"></i>
            <Link to="/organizations">Manage Business</Link>
          </li>

          
          <li className="list-item">
            <i className="fas fa-user-alt icon-color"></i>
            <Link
              to="/portfolio"
              href="#homeSubmenu"
              data-toggle="collapse"
              aria-expanded="false"
              className="dropdown-toggle"
              onClick={() => setDropdownActive(!isDropdownActive)}
            >
              My Space
            </Link>
            <ul
              className={
                isDropdownActive ? "list-unstyled  collapse" : "list-unstyled"
              }
              id="homeSubmenu"
            >
              <li className="dropdown-item">
                <Link to="/portfolio">Portfolio</Link>
                <a href="#">Portfolio</a>
              </li>
              <li className="dropdown-item">
                <Link to="/personal-details">Personal Details</Link>
              </li>
              <li className="dropdown-item">
                <Link to="/additional-info">Additional Info</Link>
              </li>
              <li className="dropdown-item">
                <Link to="/personal-background">Personal Background</Link>
              </li>
            </ul>
          </li>
          <li className="list-item">
            <i className="fas fa-history icon-color"></i>
            <Link to="/request-history">Request History</Link>
          </li>
          <li className="list-item">
            <i className="fas fa-sitemap icon-color"></i>
            <Link to="/organization-profile">Organization</Link>
          </li>
        </ul>
      </nav>
    </div>
  </div>
  )
}

export default LeftNav