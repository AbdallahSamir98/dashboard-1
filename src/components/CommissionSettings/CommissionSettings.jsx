import React from 'react'
import { Link } from 'react-router-dom'

export default function CommissionSettings() {
  return (
    <>
       
       






       
<div className="container">
<h5 classNameName='mt-4 bg-danger'>Commission Settings</h5>
<p classNameName=' bg-danger'>This below commission settings will be applied for all business owners registered with Go4Food. To change commission amount for individual business please go to Manage Business  Edit (individual business)  Comission Info</p>

<div>
        <div className="row bg-white p-5 rounded">
  <div className="col-md-4">
    <div className="input-group">
      <input type="number" className="form-control rounded" placeholder="Commission Amount(%)"  required/>
      <i className="fa fa-question-circle ms-2 text-danger" data-toggle="tooltip" data-placement="left" title="Commission Amount in percentage."></i> 
    
    </div>
    
  </div>
  <div className="col-md-4">
  <select class="form-select" aria-label="Default select example">
  <option selected>Open this select menu</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</select>
  </div>

  <div className="col-md-4">
    <div>
      <div className="btn btn-primary">submit</div>
    </div>
  </div>
</div>
        </div>
</div>
 




    </>
  )
}
