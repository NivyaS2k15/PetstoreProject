import { Outlet } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './layout.module.css';
import 'font-awesome/css/font-awesome.min.css';
import {useNavigate} from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';


const Layout = () => {
    const navigate = useNavigate();

    const scrollToTop = () => {
        scroll.scrollToTop();
      };

const  singnout =() =>{
localStorage.removeItem('token');
localStorage.removeItem('User_id');
navigate('/');
toast.success('signout successfully ', {
    position: 'bottom-center',
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'dark',
  });



};



const  handlecart =() =>{
   
    navigate('/next');
    
    
    
    
    };
      
    return (
        <>
            
            <div className="main-navbar shadow-sm sticky-top" style={{ backgroundColor: '#7fffd450' }}>
        <div className="top-navbar">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-2 my-auto d-none d-sm-none d-md-block d-lg-block">
                        <h5 className="brand-name">Pearl Pet-Store</h5>
                    </div>
                    <div className="col-md-5 my-auto">
                        <form role="search">
                            <div className="input-group" style={{ backgroundColor: '#ffffff' }} >

                                <input type="search" placeholder="Search your product" className="form-control" />
                                <button className="btn bg-white" type="submit">
                                    <i className="fa fa-search"></i>
                                </button>
                            </div>
                        </form>
                    </div>
                    <div className="col-md-5 my-auto">
                        <ul className="nav justify-content-end">
                            
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    <i className="fa fa-shopping-cart" onClick={handlecart} ></i> Cart (0)
                                </a>
                            </li>
                            
                            
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <a className="navbar-brand d-block d-sm-block d-md-none d-lg-none" href="#">
                     Ecom
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" style={{ backgroundColor: '#7fffd450' }} id="navbarSupportedContent" >
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link" href="/home">Home</a>
                        </li>
                        
                     






                        <ScrollLink to="section1" smooth={true} duration={500}>
          
        
                       <li className="nav-item">
                        
                            <a className="nav-link" href="#">Featureproducts</a>
                        </li>
                      




                        </ScrollLink>




                        <li className="nav-item">
                            <a className="nav-link" onClick={()=>navigate("/signup")} href="#">Signup</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link"  onClick={()=>navigate("/contact")} href="#">Contact</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" onClick={()=>navigate("/item")} href="#">Items</a>
                        </li>



   
                        <li className="nav-item">
                            <a className="nav-link" onClick={singnout} href="#">logout</a>
                        </li> 

             






                    </ul>
                </div>
            </div>
        </nav>
    </div>
            
            
                <Outlet />
            
            

        </>
    )
}

export default Layout;