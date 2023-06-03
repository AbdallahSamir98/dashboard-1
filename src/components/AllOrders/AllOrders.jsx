import React from 'react';
import ReusableTable from '../ReusableTable/ReusableTable';
import { Link } from 'react-router-dom';

const AllOrders = () => {
// array for data of table header 
  const tableColumns = ['ID', 'Name', 'quantity', 'total cost', 'address', 'Date', 'status', 'action', 'show'];
  
  
  //btn for action on table 
  const viewBtn=<div className='btn btn-primary'><Link to='/vieworder'>view</Link></div>
 
  //btn for action on table 
  const delBtn=<div ><button className='btn btn-danger'>delete</button></div>
 
  // array of obj for data of table body
  const tableData = [
    {
      'ID': 1,
      'Name': 'John Doe',
      "quantity": '7890',
      'total cost': '1800',
      'address': 'Los Angeles',
      'Date': '2023-05-27',
      'status': 'cancelled',
      'action': delBtn, 
      'show': viewBtn,
    }
    
    
    // Add more objects as needed
  ];

  //the title of page 
const allOrderTitle = ['All Orders']

  return (
   <>
    
    <div className="">
      
      <ReusableTable title={allOrderTitle}  columns={tableColumns} data={tableData} />
    </div>
  
   </>
  );
};

export default AllOrders;
