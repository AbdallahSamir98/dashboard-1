import React from 'react'
import ReusableViewData from '../ReusableViewData/ReusableViewData'

const ManageOrdersView = () => {
 
 // array for data of table header 
const tableColumns = ['ID', 'Name', 'email', 'Phone', 'address', 'status'];
  
//btn for action on table 

// array for data of table body 
const tableData = ['1 ', 'abdallah', 'abdalla@gamfn.com', '01032290344', 'cairo', 'active']

const orderTitle =["Order View"]
 const image = ["images/data.png"]
    return (
    <div>
        

        <ReusableViewData images={image} titles={orderTitle} columns={tableColumns} data={tableData} />

    </div>
  )
}

export default ManageOrdersView