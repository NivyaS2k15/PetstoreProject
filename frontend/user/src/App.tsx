
import React from 'react';
import { BrowserRouter, Outlet, Route, Router, Routes } from "react-router-dom";
import './App.css';
import Usersignin from './component/singin/signin';
import SignUpForm from './component/singin/register'
import Layout from './component/layout/layout';
import { ToastContainer, toast } from 'react-toastify';

import HOME from './component/home/home';

import ContactUs from './component/contactus/contactus';
import ItemAll from './component/viewitem/item';
import SingleProduct from './component/oneproduct/oneproo';
import ViewCart from './component/cart/cart';
import BuyNow from './component/buynow/buynow';
import OrderNow from './component/order/order';

function App() {
  return (
   
     <>


  
             <BrowserRouter>
        <Routes>
           
        
       
        
             <Route path ="/" element ={<Layout/>}>
          
              <Route  index  element={<HOME/>}/>  
            <Route path="home" element={<HOME/>}/>
             <Route path="/signup" element ={<SignUpForm/>}/>
            
             <Route path="/api/user/login" element={<Usersignin/>} />
              <Route path="/oneproduct/:productId" element={<SingleProduct />} />
              <Route path="/home" element={<HOME/>}/>
          
                <Route path ="/contact" element={ <ContactUs/>} />

                <Route path = "/next" element={<ViewCart/>}/>
                
                <Route path ="/buypage/:productId" element ={<BuyNow/>}/>
                <Route path ="new" element={<OrderNow/>}/>
                 
              

                
              
              </Route> 
            
              <Route path ="/item" element ={<ItemAll/>}/>

            
              

          
       </Routes>
    </BrowserRouter >         
    <ToastContainer />   

   {/* <ItemCategory/> */}
    {/* <OrderDetail/> */}
   

       {/* <ProductCards/>       */}
 
  {/* <ProductView/>  */}
    


   {/* <SignUpForm/> */}

   {/* <Productlist/>   */}
  
    {/* <ContactUs/>  */}
{/* <ProductItem/>     */}
{/* <Search/> */}
    
  </>
  );
}

export default App;
