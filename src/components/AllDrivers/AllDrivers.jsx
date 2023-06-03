import React from 'react';
import ReusableTable from '../ReusableTable/ReusableTable';
import { Link } from 'react-router-dom';

const AllDrivers = () => {
// array for data of table header 
  const tableColumns = ['ID', 'Name', 'email', 'phone', 'address', 'Date','action', 'vehicle'];
  
  
  //btn for action on table 
  const viewBtn=<div className='btn btn-primary'><Link to='/viewdriver'>view</Link></div>

   //btn for action on table 
  const delBtn=<div ><button className='btn btn-danger'>delete</button></div>
  // array of obj for data of table body
  const tableData = [
    {
      "ID": 1,
      "Name": 'John Doe',
      "email": 'aaaa@gsnnd.com',
      'phone': '010021800',
      'address': 'Los Angeles',
      "Date": '2023-05-27',
      "vehicle": viewBtn,
       'action': delBtn, 
    },
    
    
    
    // Add more objects as needed
  ];

  //the title of page 
const allDriversTitle = ['All Drivers']

  return (
   <>
    
    <div className="">
      
      <ReusableTable title={allDriversTitle}  columns={tableColumns} data={tableData} />
    </div>
  
   </>
  );
};

export default AllDrivers;
