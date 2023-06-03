import React from 'react'

const ReusableViewData = ({ titles ,columns, data ,images}) => {
  return (
    <>
        <div className="container   ">
            <div className='my-3'>
            {titles.map((title, index) => (
            <h3  key={index}>{title}</h3>
          ))}
            </div>

            <div className="row justify-content-center bg-white rounded p-3 ">
                
                <div className="col-md-5  ">
                {images.map((image, index) => (
                   <img key={index} src={image} alt="" className='w-100' />
                      ))}
                </div>


                <div className="col-md-6  ">
                    <div className="data p-4 ">
                    
                    <table class="table  ">
                    <h5 className='my-3'>Data</h5>
  
                 <tbody className='table-group-divider py-5'>
   
    
                <tr>
                 <th className='' scope="row">
                 {columns.map((column, index) => (
                    <p  key={index}>{column}</p>
                      ))}
                 </th>

                  <td className=''>
                  {data.map((databody, index) => (
                    <p  key={index}>{databody}</p>
                      ))}
                  </td>
                    </tr>
      
     
    
   
  </tbody>
</table>
                    </div>
                </div>
            </div>
        </div>


    </>
  )
}

export default ReusableViewData