import React from 'react';
import Pagination from '../Pagination/Pagination';

const ReusableTable = ({ title ,columns, data }) => {
  return (
  <>
  {/* for title head */}
  <div style={{ width:"88%"}} className='container my-3'>
  
          {title.map((title, index) => (
            <h4 key={index}>{title}</h4>
          ))}
  </div>
  
  {/* for table */}
  <div className="table-responsive">
  <table style={{ width:"85%"}}
      className="table table-bordered  text-center  bg-white table-hover  m-auto  ">
      <thead className=' table-primary  '>
        <tr>
          {columns.map((column, index) => (
            <th key={index}>{column}</th>
          ))}
        </tr>
      </thead>
      <tbody className=''>
        {data.map((item, index) => (
          <tr key={index}>
            {columns.map((column, columnIndex) => (
              <td key={columnIndex}>{item[column]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>

{/* for pagination */}
    <div className="mt-5 container ms-">
    <Pagination/>
    </div>
  </>
  );
};

export default ReusableTable;
