import { Outlet } from "react-router-dom";
//import 'bootstrap/dist/css/bootstrap.min.css';
import './layout.module.css';
//import 'font-awesome/css/font-awesome.min.css';
import {useNavigate} from "react-router-dom"




const Layout = () => {
    const navigate = useNavigate();

   
    const  singnout =() =>{
        localStorage.removeItem('token');
        localStorage.removeItem('User_id');
        navigate('/');
       
        
        
        
        };
    return (
        <>
            
            <div className="main-navbar shadow-sm sticky-top" style={{ backgroundColor: '#be3b3b' }}>
        <div className="top-navbar">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-2 my-auto d-none d-sm-none d-md-block d-lg-block">
                        <h5 className="brand-name">Admin panel</h5>
                    </div>
                    <div className="col-md-5 my-auto">
                        <form role="search">
                            {/* <div className="input-group" style={{ backgroundColor: '#ffffff' }} >

                                <button className="btn bg-white" type="submit">
                                    <i className="fa fa-search"></i>
                                </button>
                            </div> */}
                        </form>
                    </div>
                    <div className="col-md-5 my-auto">
                        <ul className="nav justify-content-end">
                           
                        <li className="nav-item">
                            <a className="nav-link" onClick={singnout} href="#">Signout</a>
                        </li> 

                            
                            
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <a className="navbar-brand d-block d-sm-block d-md-none d-lg-none" href="#">
                    Funda Ecom
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" style={{ backgroundColor: '#be3b3b' }} id="navbarSupportedContent" >
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        
                        
                       
                        
                        <li className="nav-item">
                            <a className="nav-link"  onClick={()=>navigate("/signin")}   href="#">Signin</a>
                        </li>
                        
                        <li className="nav-item">
                            <a className="nav-link"  onClick={()=>navigate("/category")} href="#">Category</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" onClick={()=>navigate("/product")} href="#">product</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#"    onClick={()=>navigate("/listorder")}  >orderlist</a>
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