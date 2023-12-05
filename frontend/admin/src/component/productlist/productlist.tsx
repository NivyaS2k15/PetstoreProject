
import 'bootstrap/dist/css/bootstrap.min.css';

import 'font-awesome/css/font-awesome.min.css';
//import {useNavigate} from "react-router-dom"
import Purepet from '../../assests/Purepet Ocean .jpg';
import himalaya from '../../assests/himalaya.jpg';
import shebacat from '../../assests/shebacat.webp';
import royalcanin from '../../assests/royalcanin.jpg';
import DroolAbsolute from '../../assests/DroolAbsolute .webp';
import NootieWet from '../../assests/NootieWet .jpg';
import whiskas from '../../assests/whiskas.jpg';
import GrainZero  from '../../assests/GrainZero.png'
import meo from '../../assests/MEO.jpg';
import kittyum from '../../assests/kittyyum.webp';
import orijen from '../../assests/orijen.jpg'
import pedigree from '../../assests/pedigree.jpg';
import { useNavigate } from 'react-router-dom';
import  './productlist.css';


const Productlist = () => {
    const navigate = useNavigate();

   
    return (

<>
<section>

<div className="py-3 py-md-5 bg-light">
        <div className="container">
            <div className="row">
                <div className="col-md-12 ">
                    <h4 className="mb-4">Our Products</h4>
                </div>
                <div className="col-md-3 hover_effect " >
                    <div className="productcard">
                        <div className="productcard-img">
                            <label className="stock bg-success">In Stock</label>
                            <img src={himalaya} alt="himalaya"/>
                        </div>
                        <div className="productcard-body">
                           
                            <h5 className="product-name">
                               <a href="">
                               Himalaya Healthy PET Puppy Dry Dog Food, Chicken & Milk Flavor 
                               </a>
                            </h5>
                            <div>
                                <span className="selling-price">₹1,100</span>
                                <span className="original-price"> ₹1,235</span>
                            </div>
                            <div className="mt-2">
                                <a href="" className="btn btn1">Add To Cart</a>
                                <a href="" className="btn btn1"> <i className="fa fa-heart"></i> </a>
                                <a href="" className="btn btn1"> View </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 hover_effect">
                    <div className="productcard">
                        <div className="productcard-img">
                            <label className="stock bg-success">In Stock</label>
                            <img src={Purepet}alt="Purepet Ocean"/>
                        </div>
                        <div className="productcard-body">
                          
                            <h5 className="product-name">
                               <a href="">
                               Purepet Ocean Fish Adult Dry Cat Food, 1 kg
                               </a>
                            </h5>
                            <div>
                                <span className="selling-price">₹125</span>
                                <span className="original-price"> ₹165</span>
                            </div>
                            <div className="mt-2">
                                <a href="" className="btn btn1">Add To Cart</a>
                                <a href="" className="btn btn1"> <i className="fa fa-heart"></i> </a>
                                <a href="" className="btn btn1" onClick={()=>navigate("/viewone")}> View </a> 
                            </div>
                        </div>
                    </div>
                </div>



                <div className="col-md-3 hover_effect"    >
                    <div className="productcard">
                        <div className="productcard-img">
                            <label className="stock bg-success">In Stock</label>
                            <img src={shebacat}alt="shebacat"/>
                        </div>
                        <div className="productcard-body">
                          
                            <h5 className="product-name">
                               <a href="">
                               Sheba Kitten and Adult, Irresistible Dry Cat Food, Chicken Flavour, 400g Pack
                               </a>
                            </h5>
                            <div>
                                <span className="selling-price">₹375</span>
                                <span className="original-price"> ₹400</span>
                            </div>
                            <div className="mt-2">
                                <a href="" className="btn btn1">Add To Cart</a>
                                <a href="" className="btn btn1"> <i className="fa fa-heart"></i> </a>
                                <a href="" className="btn btn1" onClick={()=>navigate("/view")}>  View </a>
                            </div>
                        </div>
                    </div>
                </div>






                <div className="col-md-3 hover_effect">
                    <div className="productcard">
                        <div className="productcard-img">
                            <label className="stock bg-success">In Stock</label>
                            <img src={royalcanin}alt="shebacat"/>
                        </div>
                        <div className="productcard-body">
                          
                            <h5 className="product-name">
                               <a href="">
                               royal canin maxi puppy dry dog food
                               </a>
                            </h5>
                            <div>
                                <span className="selling-price">₹950</span>
                                <span className="original-price"> ₹985</span>
                            </div>
                            <div className="mt-2">
                                <a href="" className="btn btn1">Add To Cart</a>
                                <a href="" className="btn btn1"> <i className="fa fa-heart"></i> </a>
                                <a href="" className="btn btn1"> View </a>
                            </div>
                        </div>
                    </div>
                </div>










                <div className="col-md-3 hover_effect">
                    <div className="productcard">
                        <div className="productcard-img">
                            <label className="stock bg-success">In Stock</label>
                            <img src={NootieWet}alt="Nootiewet"/>
                        </div>
                        <div className="productcard-body">
                          
                            <h5 className="product-name">
                               <a href="">
                               Nootie Wet Cat Food Chicken Flavour, Yummy Source of High Protien  284
                               </a>
                            </h5>
                            <div>
                                <span className="selling-price">₹258</span>
                                <span className="original-price"> ₹284</span>
                            </div>
                            <div className="mt-2">
                                <a href="" className="btn btn1">Add To Cart</a>
                                <a href="" className="btn btn1"> <i className="fa fa-heart"></i> </a>
                                <a href="" className="btn btn1"> View </a>
                            </div>
                        </div>
                    </div>
                </div>








                <div className="col-md-3 hover_effect">
                    <div className="productcard">
                        <div className="productcard-img">
                            <label className="stock bg-success">In Stock</label>
                            <img src={DroolAbsolute}alt="Nootiewet"/>
                        </div>
                        <div className="productcard-body">
                          
                            <h5 className="product-name">
                               <a href="">
                               Drools Absolute Calcium Bone Pouch                               </a>
                            </h5>
                            <div>
                                <span className="selling-price">₹150</span>
                                <span className="original-price"> ₹169</span>
                            </div>
                            <div className="mt-2">
                                <a href="" className="btn btn1">Add To Cart</a>
                                <a href="" className="btn btn1"> <i className="fa fa-heart"></i> </a>
                                <a href="" className="btn btn1"> View </a>
                            </div>
                        </div>
                    </div>
                </div>







                <div className="col-md-3 hover_effect">
                    <div className="productcard">
                        <div className="productcard-img">
                            <label className="stock bg-success">In Stock</label>
                            <img src={whiskas}alt="whiskas"/>
                        </div>
                        <div className="productcard-body">
                          
                            <h5 className="product-name">
                               <a href="">
                               Whiskas Kitten (2-12 months) Dry Cat Food Food, Ocean Fish                               </a>
                            </h5>
                            <div>
                                <span className="selling-price">₹366</span>
                                <span className="original-price"> ₹388</span>
                            </div>
                            <div className="mt-2">
                                <a href="" className="btn btn1">Add To Cart</a>
                                <a href="" className="btn btn1"> <i className="fa fa-heart"></i> </a>
                                <a href="" className="btn btn1"> View </a>
                            </div>
                        </div>
                    </div>
                </div>




                <div className="col-md-3 hover_effect">
                    <div className="productcard">
                        <div className="productcard-img">
                            <label className="stock bg-success">In Stock</label>
                            <img src={meo}alt="meo"/>
                        </div>
                        <div className="productcard-body">
                          
                            <h5 className="product-name">
                               <a href="">
                               ME-O Adult Dry CAT Food, Tuna Flavour, 3 KG                          </a>
                            </h5>
                            <div>
                                <span className="selling-price">₹926</span>
                                <span className="original-price"> ₹960</span>
                            </div>
                            <div className="mt-2">
                                <a href="" className="btn btn1">Add To Cart</a>
                                <a href="" className="btn btn1"> <i className="fa fa-heart"></i> </a>
                                <a href="" className="btn btn1"> View </a>
                            </div>
                        </div>
                    </div>
                </div>



              





                <div className="col-md-3 hover_effect">
                    <div className="productcard">
                        <div className="productcard-img">
                            <label className="stock bg-success">In Stock</label>
                            <img src={GrainZero} alt="GrainZero"/>
                        </div>
                        <div className="productcard-body">
                          
                            <h5 className="product-name">
                               <a href="">
                               Grain Zero Signature Persian And Long Coat Cat Dry Food - 1.2 Kg - Ocean Fish, Sardine And Mackeral                               </a>
                            </h5>
                            <div>
                                <span className="selling-price">₹366</span>
                                <span className="original-price"> ₹374</span>
                            </div>
                            <div className="mt-2">
                                <a href="" className="btn btn1">Add To Cart</a>
                                <a href="" className="btn btn1"> <i className="fa fa-heart"></i> </a>
                                <a href="" className="btn btn1"> View </a>
                            </div>
                        </div>
                    </div>
                </div>










                <div className="col-md-3 hover_effect">
                    <div className="productcard">
                        <div className="productcard-img">
                        <label className="stock bg-success">In Stock</label>
                            <img src= {kittyum} alt="kittiyum"/>
                        </div>
                        <div className="productcard-body">
                          
                            <h5 className="product-name">
                               <a href="">
                                     	
Kitty Yums Dry Persian Cat Food, Ocean Fish 1.2 kg                  </a>
                            </h5>
                            <div>
                                <span className="selling-price">₹446</span>
                                <span className="original-price"> ₹474</span>
                            </div>
                            <div className="mt-2">
                                <a href="" className="btn btn1">Add To Cart</a>
                                <a href="" className="btn btn1"> <i className="fa fa-heart"></i> </a>
                                <a href="" className="btn btn1"> View </a>
                            </div>
                        </div>
                    </div>
                </div>



















                <div className="col-md-3">
                    <div className="productcard">
                        <div className="productcard-img">
                            <label className="stock bg-success">In Stock</label>
                            <img src={orijen} alt="orijen"/>
                        </div>
                        <div className="productcard-body">
                          
                            <h5 className="product-name">
                               <a href="">
                               ORIJEN Original Dry Dog Food, Grain Free Dog Food for All Life Stages, Fresh or Raw Ingredients, 11.4 Kg                                                      </a>
                            </h5>
                            <div>
                                <span className="selling-price">₹11,250</span>
                                <span className="original-price"> ₹11,324</span>
                            </div>
                            <div className="mt-2">
                                <a href="" className="btn btn1">Add To Cart</a>
                                <a href="" className="btn btn1"> <i className="fa fa-heart"></i> </a>
                                <a href="" className="btn btn1"> View </a>
                            </div>
                        </div>
                    </div>
                </div>






                <div className="col-md-3">
                    <div className="productcard">
                        <div className="productcard-img">
                            <label className="stock bg-success">In Stock</label>
                            <img src={pedigree} alt="pedigree"/>
                        </div>
                        <div className="productcard-body">
                          
                            <h5 className="product-name">
                               <a href="">
                               Pedigree Puppy Dry Dog Food, Chicken & Milk, 1.2kg Pack                                              </a>
                            </h5>
                            <div>
                                <span className="selling-price">₹345</span>
                                <span className="original-price"> ₹378</span>
                            </div>
                            <div className="mt-2">
                                <a href="" className="btn btn1">Add To Cart</a>
                                <a href="" className="btn btn1"> <i className="fa fa-heart"></i> </a>
                                <a href="" className="btn btn1"> View </a>
                            </div>
                        </div>
                    </div>
                </div>








              
                
            </div>
        </div>
    </div>


    </section>


</>




    );

};
export default Productlist;