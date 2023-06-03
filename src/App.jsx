import React, { useEffect, useState } from 'react'
import Home from './components/Home/Home'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import MapView from './components/MapView/MapView'

import CommissionSettings from './components/CommissionSettings/CommissionSettings'


import MainNavigation from './pages/MainNavigation'
import Loading from './components/Loading/Loading'
import LoginPage from './pages/LoginPage'
import AllOrders from './components/AllOrders/AllOrders'
import AllCustomers from './components/AllCustomers/AllCustomers'
import AllDrivers from './components/AllDrivers/AllDrivers'
import ManageOrdersView from './components/ManageOrdersView/ManageOrdersView'
import ManageDriversView from './components/ManageDriversView/ManageDriversView'
import ManageCustomerView from './components/ManageCustomerView/ManageCustomerView'
import NotFound from './components/NotFound/NotFound'
 function App() {
  

  const [isLoading, setIsLoading] = useState(true);

  // Simulate loading delay
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);


  const routers = createBrowserRouter(
   
   
   [
    {
      path:'',element:<MainNavigation/>
        ,children:[
        {path:'',element:<Home/>},
        {path:'/home',element:<Home/>},
        {path:'/mapview',element:<MapView/>},
        {path:'/commissionsettings',element:<CommissionSettings/>},
        {path:'/login',element:<LoginPage/>},
        {path:'/allorders',element:<AllOrders/>},
        {path:'/allcustomers',element:<AllCustomers/>},
        {path:'/alldrivers',element:<AllDrivers/>},
        {path:'/vieworder',element:<ManageOrdersView/>},
        {path:'/viewdriver',element:<ManageDriversView/>},
        {path:'/viewcustomer',element:<ManageCustomerView/>},
        
      ]
     

    },
    {path:'*',element:<NotFound/>}
   ]
  )
  
  return (
   
    <>
    {isLoading ?  <div  className="loading bg-black">   <Loading /> </div> : <div >   <RouterProvider router={routers} /> </div>}
    
    </>

  )
}
export default App