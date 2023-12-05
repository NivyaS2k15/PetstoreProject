
import 'bootstrap/dist/css/bootstrap.min.css';
import shebacat from '../../assests/shebacat.webp';
import 'font-awesome/css/font-awesome.min.css';
//import {useNavigate} from "react-router-dom"



import  './productview.css';


const ProductView = () => {
   // const navigate = useNavigate();


    return (

<>
<section>





<div className="py-3 py-md-5 bg-light">
        <div className="container">
            <div className="row">
                <div className="col-md-5 mt-3">
                    <div className="bg-white border">
                        <img src={shebacat} className="w-100" alt="Img"/>
                    </div>
                </div>
                <div className="col-md-7 mt-3">
                    <div className="product-view">
                        <h4 className="product-name">
                        Sheba Kitten and Adult, Irresistible Dry Cat Food, Chicken Flavour, 400g Pack
                            <label className="label-stock bg-success">In Stock</label>
                        </h4>
                        
                        <p className="product-path">
                           
                        </p>
                        <div>
                            <span className="selling-price">₹375</span>
                            <span className="original-price">₹400</span>
                        </div>
                        <div className="mt-2">
                            <div className="input-group">
                                <span className="btn btn1"><i className="fa fa-minus"></i></span>
                                <input type="text" value="1" className="input-quantity" />
                                <span className="btn btn1"><i className="fa fa-plus"></i></span>
                            </div>
                        </div>
                        <div className="mt-2">
                            <a href="" className="btn btn1"> <i className="fa fa-shopping-cart"></i> Buy now</a>
                         
                        </div>
                        <div className="mt-3">
                            <h5 className="mb-0">Small Description</h5>
                            <p>
                            Brand	: Sheba<br/>Flavour	:Chicken<br/>  Diet Type	:Non Vegetarian<br/> Age Range: Adult
                           
                           <br/> Item :Form	Dry


                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12 mt-3">
                    <div className="card">
                        <div className="card-header bg-white">
                            <h4>Description</h4>
                        </div>
                        <div className="card-body">
                            <p>
                                   
                                   
                            Irresistibly Delicious: Sheba Kitten & Adult Dry Cat Food offers tasty combination of kibbles and cream filled pockets to satisfy your cat's taste buds with an exquisite texture that both adult cats and kitten enjoy.
<br/>Healthy Ingredients: Sheba Dry Cat Food is made with high-quality chicken, poultry liver, minerals, fish oil, vitamins, & amino acids which are highly beneficial to a cat's health.     
                   
      
                            </p>
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
export default ProductView;