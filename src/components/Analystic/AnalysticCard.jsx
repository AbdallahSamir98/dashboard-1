import React from 'react'
import {Link} from 'react-router-dom'
const AnalysticCard = ({number , text , icon , to}) => {
  return (
    <div className="col-xl-3 my-2 ">
    <div className="dashboardContent1 text-white  rounded">
       <div className='d-flex justify-content-between mx-3 py-3'>
       <div className="total">
        <h4 className=''>{number}</h4>
        <p className='fs-5 '>{text}(s)</p>
        </div>
        <div className="totalLogo  ">
          {icon}
          </div>
       </div>
       <Link className='w-100 ' to={to}>
        {/* <div className="w-100 moreInfo1 text-center">
        {text}<i className="fa-solid fa-arrow-right fs-2xs"></i>
       </div>  */}
       </Link>
    </div>
    
</div>
  )
}

export default AnalysticCard