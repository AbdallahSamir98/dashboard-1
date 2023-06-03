import React from 'react';
import ReusableTable from '../ReusableTable/ReusableTable';
import { Link } from 'react-router-dom';

const AllCustomers = () => {
// array for data of table header 
const tableColumns = ['ID', 'Name', 'email', 'Phone', 'address', 'status','action', 'cart'];
  
  //btn for action on table 
  const viewBtn=<div className='btn btn-primary'><Link to='/viewcustomer'>cart</Link></div>
  //btn for action on table 
  const delBtn=<div ><button className='btn btn-danger'>delete</button></div>
// array for data of table body 
  const tableData = [
    {
      "ID": 1,
      "Name": 'John Doe',
      "email": 'aaa@gmail.com',
      "Phone" : '0102201800',
      'address': 'Los Angeles',
      'status': 'cancelled',
      'action': delBtn, 
      "cart": viewBtn,
    },
    
    // Add more objects as needed
  ];

//the title of page 
const allCustomerTitle = ['All Customers']
  return (
   <>
    <div className="">
      
      <ReusableTable title={allCustomerTitle}  columns={tableColumns} data={tableData} />
    </div>
   </>
  );
};

export default AllCustomers;
