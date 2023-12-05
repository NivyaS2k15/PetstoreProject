import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import './item.css';
//import axios from 'axios';
import {useNavigate} from "react-router-dom"
import React, { useEffect, useState } from 'react';
import Layout from '../layout/layout';
 
 
interface Category {
  categoryId: string;
  categoryname: string;
}
 
interface Product {
  _id: string;
  title: string;
  price: number;
  categories: Category[];
  image: string[];
  deleted: boolean;
}
 
function  ItemAll() {
  const [products, setProducts] = useState<Product[]>([]);
  const navigate = useNavigate();
  useEffect(() => {
    fetchProducts();
  }, []);
 
  const fetchProducts = async () => {
    try {
      const response = await fetch('http://localhost:4561/api/allproduct'); // Replace with your backend URL
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data: Product[] = await response.json();
      setProducts(data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };
 
 
 
 
 
  const handleViewProduct = (productId: string) => {
    console.log(`View product clicked for ${productId}`);
    navigate(`/oneproduct/${productId}`);
  };
  return (
 
 
    <section>
 <Layout/>
 
 <div className="py-3 py-md-5 bg-light">
        <div className="container">
            <div className="row">
                <div className="col-md-12 ">
                    <h4 className="mb-4">Our Products</h4>
                </div>
 
                {products.map((product) => (
 
 
                <div  key={product._id} className="col-md-3 hover_effect " >
                    <div className="productcard">
                        <div className="productcard-img">
                            <label className="stock bg-success">In Stock</label>
                            <img
                           className="image101"
                          src={'http://localhost:4561/uploads/' + encodeURIComponent(product.image[0])}
                         alt="Product Image"
                       />
                        </div>
                        <div className="productcard-body">
                           
                            <h5 className="product-name">
                               <a href="">
                               <h1>{product.title} </h1>
                               </a>
                               {/* <ul>
                      {product.categories.map((category) => (
                        <li key={category.categoryId}>
                         
                          <h1>{category.categoryname}</h1>
                        </li>
                      ))}
                    </ul> */}
 
 
                            </h5>
                            <div>
                                <span className="selling-price">  <p>Price:₹ {product.price}</p></span>
                               
                            </div>
                            <div className="mt-2">
                                <a href="" className="btn btn1 ">Add To Cart</a>
                                <a href="" className="btn btn1 "> <i className="fa fa-heart"></i> </a>
                                <a href="" className="btn btn1 " onClick={() => handleViewProduct(product._id)} >   View </a>
                                {/* onClick={()=>navigate("/view")} */}
                            </div>
                        </div>
                    </div>
                </div>
 
 
 
                ))}
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
</div>
</div>
</div>
 </section>
 
 
 
 
 
 
 
 
 
 
  );
}
 
 
 
 
 
 
 
 
 
 
 
 
 
export default ItemAll;