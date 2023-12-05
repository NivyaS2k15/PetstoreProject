import React, { useState ,useEffect} from 'react';
//import 'font-awesome/css/font-awesome.min.css'; 

//import 'font-awesome/css/all.min.css';
import DogBreed from '../../assests/DogBreeds.jpg';
import one from '../../assests/one.jpg';
import dogone from '../../assests/dogone.jpg';
import './home.css';
import royalcanin from '../../assests/royalcanin.jpg';
import himalaya from '../../assests/himalaya.jpg';
import DroolAbsolute from '../../assests/DroolAbsolute .webp'
import catfirst from '../../assests/catfirst.webp';
import NootieWet from '../../assests/NootieWet .jpg';
import banner from '../../assests/banner.webp';
import food from '../../assests/food.jpg';

import shebacat from '../../assests/shebacat.webp';

const Home: React.FC = () => {
  // const [activeSlide, setActiveSlide] = useState(0);

  // const handlePrevSlide = () => {
  //   setActiveSlide(activeSlide === 0 ? 2 : activeSlide - 1);
  // };

  // const handleNextSlide = () => {
  //   setActiveSlide(activeSlide === 2 ? 0 : activeSlide + 1);
  // };

  const [activeSlide, setActiveSlide] = useState(0);

  const handlePrevSlide = () => {
    setActiveSlide(activeSlide === 0 ? 2 : activeSlide - 1);
  };

  const handleNextSlide = () => {
    setActiveSlide(activeSlide === 2 ? 0 : activeSlide + 1);
  };

  // Function to automatically advance to the next slide
  const autoAdvanceSlide = () => {
    setActiveSlide((activeSlide + 1) % 3);
  };

  useEffect(() => {
    // Set up an interval to automatically advance the slide every 5 seconds (5000 milliseconds)
    const intervalId = setInterval(autoAdvanceSlide, 5000);

    // Clear the interval when the component unmounts to prevent memory leaks
    return () => clearInterval(intervalId);
  }, [activeSlide]);


  

  return (
    <>
    <div id="carouselExampleIndicators" className="carousel">
      <ol className="carousel-indicators">
        <li
          data-target="#carouselExampleIndicators"
          data-slide-to="0"
          className={activeSlide === 0 ? "active" : ""}
        ></li>
        <li
          data-target="#carouselExampleIndicators"
          data-slide-to="1"
          className={activeSlide === 1 ? "active" : ""}
        ></li>
        <li
          data-target="#carouselExampleIndicators"
          data-slide-to="2"
          className={activeSlide === 2 ? "active" : ""}
        ></li>
      </ol>
      <div className="carousel-inner" style={{height:'75 hv'}} >
        <div className={`carousel-item ${activeSlide === 0 ? "active" : ""}`}>
          <img className="d-block w-100 "style={{backgroundImage:""}} src={banner} alt="First slide "  />
          
        </div>
        <div className={`carousel-item ${activeSlide === 1 ? "active" : ""}`}>
          <img className="d-block w-100 h-67"  src={one} alt="Second slide " />
        </div>
        <div className={`carousel-item ${activeSlide === 2 ? "active" : ""}`}>
          <img className="d-block w-100 h-67" src={food} alt="Third slide " />
        </div>
      </div>
      <a className="carousel-control-prev" href="#" role="button" onClick={handlePrevSlide}>
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a className="carousel-control-next" href="#" role="button" onClick={handleNextSlide}>
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>



            


{/* ===============================featured product======================================= */}





    {/* <div className="card" style={{ width: '18rem' }}>
      <img className="card-img-top" src={dogone} alt="Card image cap" />
      <div className="card-body">
        <p className="card-text">Some quick example text to build on the card title and make up the bu</p>
      </div>
    </div> */}






 <section   >
<div className="container my-5"  id='section1' >
  <header className="mb-4" color='red'>
    <h3>Featureproducts </h3> 
   </header> 

  <div className="row"  > 
    {/* Repeat this block for each product */}
     <div className="col-lg-3 col-md-6 col-sm-6 hover_effect" >
      <div className="card my-2 shadow-0">
        <a href="#" className="">
          <div className="mask"   style={{ height: '50px', }}>
            <div className="d-flex justify-content-start align-items-start h-100 m-2">
              <h6><span className="badge bg-danger pt-1">New</span></h6>
            </div>
          </div>
          <img
            src={royalcanin}
            className="card-img-top rounded-2"
            style={{ aspectRatio: '1 / 1' }}
          />
        </a>
        <div className="card-body p-0 pt-3">
          <a href="#!" className="btn btn-light border px-2 pt-2 float-end icon-hover">
            <i className="fas fa-heart fa-lg px-1 text-secondary"></i>
          </a>
          <h5 className="card-title">₹985</h5>
          <p className="card-text mb-0"><b>royal canin maxi puppy dry dog food</b> </p>
          <p className="text-muted"><b></b></p>
        </div>
      </div>
    </div> 
    {/* End of product block */}
    




  
    {/* Repeat this block for each product */}
    * <div className="col-lg-3 col-md-6 col-sm-6 w-5 h-6 hover_effect">
      <div className="card my-2 shadow-0">
        <a href="#" className="">
          <div className="mask" style={{ height: '50px' }}>
            <div className="d-flex justify-content-start align-items-start h-100 m-2">
              <h6><span className="badge bg-danger pt-1">New</span></h6>
            </div>
          </div>
          <img
            src={himalaya}
            className="card-img-top rounded-2"
            style={{ aspectRatio: '1 / 1' }}
          />
        </a>
        <div className="card-body p-0 pt-3">
          <a href="#!" className="btn btn-light border px-2 pt-2 float-end icon-hover">
            <i className="fas fa-heart fa-lg px-1 text-secondary"></i>
          </a>
          <h5 className="card-title">₹1,234</h5>
          <p className="card-text mb-0"><b>Himalaya Healthy PET Puppy</b> </p>
          <p className="text-muted"><b></b> </p>
        </div>
      </div>
    </div> 













   {/* Repeat this block for each product */}
   * <div className="col-lg-3 col-md-6 col-sm-6 w-5 h-6 hover_effect">
  <div className="card my-2 shadow-0">
    <a href="#" className="">
      <div className="mask" style={{ height: '50px' }}>
        <div className="d-flex justify-content-start align-items-start h-100 m-2">
          <h6><span className="badge bg-danger pt-1">New</span></h6>
        </div>
      </div>
      <img
        src={DroolAbsolute}
        className="card-img-top rounded-2"
        style={{ aspectRatio: '1 / 1' }}
      />
    </a>
    <div className="card-body p-0 pt-3">
      <a href="#!" className="btn btn-light border px-2 pt-2 float-end icon-hover">
        <i className="fas fa-heart fa-lg px-1 text-secondary"></i>
      </a>
      <h5 className="card-title">₹169</h5>
      <p className="card-text mb-0"><b> Drools Absolute Calcium Bone Pouch</b></p>
      <p className="text-muted"><b></b></p>
    </div>
  </div>
</div>









    
   {/* Repeat this block for each product */}
   * <div className="col-lg-3 col-md-6 col-sm-6 w-5 h-6 hover_effect">
      <div className="card my-2 shadow-0">
        <a href="#" className="">
          <div className="mask" style={{ height: '50px' }}>
            <div className="d-flex justify-content-start align-items-start h-100 m-2">
              <h6><span className="badge bg-danger pt-1">New</span></h6>
            </div>
          </div>
          <img
            src={catfirst}
            className="card-img-top rounded-2"
            style={{ aspectRatio: '1 / 1' }}
          />
        </a>
        <div className="card-body p-0 pt-3">
          <a href="#!" className="btn btn-light border px-2 pt-2 float-end icon-hover">
            <i className="fas fa-heart fa-lg px-1 text-secondary"></i>
          </a>
          <h5 className="card-title">₹169</h5>
          <p className="card-text mb-0"><b>Purepet Ocean Fish</b></p>
          <p className="text-muted"><b> </b></p>
        </div>
      </div>
    </div> 


     


  




{/* Repeat this block for each product */}
* <div className="col-lg-3 col-md-6 col-sm-6 w-10 h-10  hover_effect">
      <div className="card my-2 shadow-0">
        <a href="#" className="">
          <div className="mask" style={{ height: '50px' }}>
            <div className="d-flex justify-content-start align-items-start h-100 m-2">
              <h6><span className="badge bg-danger pt-1">New</span></h6>
            </div>
          </div>
          <img
            src={ NootieWet}
            className="card-img-top rounded-2"
            style={{ aspectRatio: '1 / 1' }}
          />
        </a>
        <div className="card-body p-0 pt-3">
          <a href="#!" className="btn btn-light border px-2 pt-2 float-end icon-hover">
            <i className="fas fa-heart fa-lg px-1 text-secondary"></i>
          </a>
          <h5 className="card-title">₹284</h5>
          <p className="card-text mb-0"><b>Nootie Wet Cat Food </b></p>
          <p className="text-muted"><b>  </b></p>
        </div>
      </div>
    </div> 



{/* Repeat this block for each product */}
* <div className="col-lg-3 col-md-6 col-sm-6  w-10 h-10 hover_effect">
      <div className="card my-2 shadow-0">
        <a href="#" className="">
          <div className="mask" style={{ height: '50px' }}>
            <div className="d-flex justify-content-start align-items-start h-100 m-2">
              <h6><span className="badge bg-danger pt-1">New</span></h6>
            </div>
          </div>
          <img
            src={shebacat}
            className="card-img-top rounded-2"
            style={{ aspectRatio: '1 / 1' }}
          />
        </a>
        <div className="card-body p-0 pt-3">
          <a href="#!" className="btn btn-light border px-2 pt-2 float-end icon-hover">
            <i className="fas fa-heart fa-lg px-1 text-secondary"></i>
          </a>
          <h5 className="card-title">₹284</h5>
          <p className="card-text mb-0">Sheba Kitten and Adult,  </p>
          <p className="text-muted"></p>
        </div>
      </div>
    </div> 

{/* End of product block  */}
</div>










 

























 </div>
</section>






















{/* ========================================aboutus================================ */}
            
     
   


    


<section className="py-3 py-md-5">
      <div className="container">
        <div className="row gy-3 gy-md-4 gy-lg-0 align-items-lg-center">
          <div className="col-12 col-lg-6 col-xl-5">
            <img className="img-fluid rounded" loading="lazy" src={dogone} alt="About 1" />
          </div>
          <div className="col-12 col-lg-6 col-xl-7">
            <div className="row justify-content-xl-center">
              <div className="col-12 col-xl-11">
                <h2 className="mb-3">Who Are We?</h2>
                <p className="lead fs-4 text-secondary mb-3">We help people to build incredible brands and superior products. Our perspective is to furnish outstanding captivating services.</p>
                <p className="mb-5">We are a fast-growing company, but we have never lost sight of our core values. We believe in collaboration, innovation, and customer satisfaction. We are always looking for new ways to improve our products and services.</p>
                <div className="row gy-4 gy-md-0 gx-xxl-5X">
                  <div className="col-12 col-md-6">
                    <div className="d-flex">
                      <div className="me-4 text-primary">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-gear-fill" viewBox="0 0 16 16">
                          <path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413-1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z" />
                        </svg>
                      </div>
                      <div>
                        <h2 className="h4 mb-3">Versatile Brand</h2>
                        <p className="text-secondary mb-0">We are crafting a digital method that subsists life across all mediums.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-md-6">
                    <div className="d-flex">
                      <div className="me-4 text-primary">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-fire" viewBox="0 0 16 16">
                          <path d="M8 16c3.314 0 6-2 6-5.5 0-1.5-.5-4-2.5-6 .25 1.5-1.25 2-1.25 2C11 4 9 .5 6 0c.357 2 .5 4-2 6-1.25 1-2 2.729-2 4.5C2 14 4.686 16 8 16Zm0-1c-1.657 0-3-1-3-2.75 0-.75.25-2 1.25-3C6.125 10 7 10.5 7 10.5c-.375-1.25.5-3.25 2-3.5-.179 1-.25 2 1 3 .625.5 1 1.364 1 2.25C11 14 9.657 15 8 15Z" />
                        </svg>
                      </div>
                      <div>
                        <h2 className="h4 mb-3">Digital Agency</h2>
                        <p className="text-secondary mb-0">We believe in innovation by merging primary with elaborate ideas.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>







   

{/* ==============footer=================== */}

<section className="p-4"   style={{background:"rgba(0, 0, 0,0.05) "}}>
    <div className="container">
      <div className="row d-flex">
        {/* <!-- Left --> */}
        <div className="col-md-6 col-sm-12 mb-2 mb-md-0 d-flex justify-content-center justify-content-md-start">
          <div className="">
            <div className="input-group" style={{ width: '400px'}}>
              <input type="email" className="form-control border" placeholder="Email" aria-label="Email" aria-describedby="button-addon2" />
              <button className="btn btn-light border" type="button" id="button-addon2" data-mdb-ripple-color="dark">
                Subscribe
              </button>
            </div>
          </div>
        </div>
       
        <div className="col-md-6 col-sm-12 float-center">
        <ul>
<a href="#"><li><i className="fa fa-linkedin"></i></li></a>    
<a href="#"><li><i className="fa fa-twitter"></i></li></a>     
  
</ul>
         
        </div>
     </div>
    </div>
  </section>














    <div>
      <div className="footer-area">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <h4 className="footer-heading">Pearl E-Commerce</h4>
              <div className="footer-underline"></div>
              <p>
              Our Dream

Rainforests are Earths oldest living ecosystems, which can be dates back to 70 million years. They are even termed as the lungs of the planet as they are considered as the major oxygen suppliers. Beyond all these definitions there is an underlying value that the rainforest teaches us. The value of which necessarily supports growth of an individual entity as well as the lives, which sustains its existence. A close knit intertwining of lives which grow together and flourish and nourish each other.
              </p>
            </div>
            <div className="col-md-3">
              <h4 className="footer-heading">Quick Links</h4>
              <div className="footer-underline"></div>
              <div className="mb-2"><a href="" className="text-white">Home</a></div>
              <div className="mb-2"><a href="" className="text-white">About Us</a></div>
              <div className="mb-2"><a href="" className="text-white">Contact Us</a></div>
              <div className="mb-2"><a href="" className="text-white">Blogs</a></div>
              <div className="mb-2"><a href="" className="text-white">Sitemaps</a></div>
            </div>
            <div className="col-md-3">
              <h4 className="footer-heading">Shop Now</h4>
              <div className="footer-underline"></div>
              <div className="mb-2"><a href="" className="text-white">Collections</a></div>
              <div className="mb-2"><a href="" className="text-white">Trending Products</a></div>
              <div className="mb-2"><a href="" className="text-white">New Arrivals Products</a></div>
              <div className="mb-2"><a href="" className="text-white">Featured Products</a></div>
              <div className="mb-2"><a href="" className="text-white">Cart</a></div>
            </div>
            <div className="col-md-3">
              <h4 className="footer-heading">Reach Us</h4>
              <div className="footer-underline"></div>
              <div className="mb-2">
                <p>
                  <i className="fa fa-map-marker"></i> #444, some main road, some area, some street, bangalore, india - 560077
                </p>
              </div>
              <div className="mb-2">
                <a href="" className="text-white">
                  <i className="fa fa-phone"></i> +91 888-XXX-XXXX
                </a>
              </div>
              <div className="mb-2">
                <a href="" className="text-white">
                  <i className="fa fa-envelope"></i> fundaofwebit@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright-area">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <p className=""> &copy; 2022 - Funda of Web IT - Ecommerce. All rights reserved.</p>
            </div>
            <div className="col-md-4">
              <div className="social-media">
                Get Connected:
                <a href=""><i className="fa fa-facebook"></i></a>
                <a href=""><i className="fa fa-twitter"></i></a>
                <a href=""><i className="fa fa-instagram"></i></a>
                <a href=""><i className="fa fa-youtube"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
















        
              





</>



  );
};

export default Home;
