import React from 'react';
import './App.css';
 import AdminPanel from '../src/AdminPanel';
//import ApplyCategory from '../src/component/category';
import CategoryAdd from '../src/component/category';
import { BrowserRouter, Outlet, Route, Router, Routes } from "react-router-dom";
import ContactCard from './component/viewdetails';
import Layout from './component/layout/layout';
import LoginPage from './component/signin';


function App() {
  return (
  
    <>


  
    <BrowserRouter>
<Routes>
  



    <Route path ="/" element ={<Layout/>}>
 
     
    <Route path="/category" element ={<CategoryAdd/>}/>
    <Route path ="/product" element={ <AdminPanel/>} /> 
    <Route path="/listorder" element={<ContactCard />}/>
    <Route path="/signin" element={< LoginPage/>}/>


    {/* <Route path="/api/user/login" element={<Usersignin/>} />
   
 
     <Route path="home" element={<HOME/>}/>
         */}
      
     
       
     
     </Route> 
   

   
     

 
</Routes>
</BrowserRouter >  
</>

  );
}

export default App;
