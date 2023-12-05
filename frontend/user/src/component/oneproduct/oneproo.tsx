import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import './onepro.css';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';

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

const SingleProduct: React.FC = () => {
  const [product, setProduct] = useState<Product | undefined>(); // Use undefined instead of null
  const { productId } = useParams<{ productId: string }>();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`http://localhost:4561/api/user/product/${productId}`);
        setProduct(response.data.getoneproduct);
      } catch (error) {
        console.error('Error fetching product:', error);
        // Handle the error, e.g., redirect to an error page or show an error message
      }
    };

    fetchProduct();
  }, [productId]); // Include productId in the dependency array

  // const handleBuyNow = () => {
  //   console.log('Buy Now button clicked');
  //   navigate('/buypage');
  // };

  const handleBuy = (productId: string) => {
    console.log(`View clicked for ${productId}`);
    navigate(`/buypage/${productId}`);
  };


  const  handlecart =() =>{
   
    navigate('/next');
    
    
    
    
    };

  const handleCategoryClick = (categoryId:string) => {
    // Navigate to the category page
    navigate(`/category/${categoryId}`);
  };
  return (
    <>
      <section>
        <div className="py-3 py-md-5 bg-light">
          <div className="container">
            {product && (
              <div className="row">
                <div className="col-md-5 mt-3">
                  <div className="bg-white border">
                    {product.image[0] && (
                      <img
                        className="image101"
                        src={`http://localhost:4561/uploads/${encodeURIComponent(product.image[0])}`}
                        alt="ProductImage"
                      />
                    )}
                  </div>
                </div>
                <div className="col-md-7 mt-3">
                  <div className="product-view">
                    <h4 className="product-name">
                      {product.title}
                      <label className="label-stock bg-success">In Stock</label>
                    </h4>
                    <p className="product-path"></p>
                    <div>
                      <span className="selling-price">₹{product.price}</span>
                    </div>
                    <div className="mt-2">
                      <div className="input-group">
                        <span className="btn btn1">
                          <i className="fa fa-minus"></i>
                        </span>
                        <input type="text" value="1" className="input-quantity" />
                        <span className="btn btn1">
                          <i className="fa fa-plus"></i>
                        </span>
                      </div>
                    </div>
                    <div className="mt-2">
                    <a href="" className="btn btn1" onClick={handlecart}  >   Add To Cart</a>
                      <a href="" className="btn btn1"  onClick={() => handleBuy(product._id)}  >
                     
                        <i className="fa fa-shopping-cart" ></i> Buy now
                      </a>

                      
                    </div>
                    <div className="mt-3">
                      <h4 className="mb-0">Description</h4>
                      <p>
                        Brand: {product.title}
                        <br />
                        Flavour: {product.categories[0]?.categoryname || 'N/A'}
                        <br />
                        Diet Type: Non Vegetarian
                        <br />
                        Age Range: Adult
                        <br />
                        Item Form: Dry
                       
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
            <div className="row">
              <div className="col-md-12 mt-3">
                <div className="card">
                  <div className="card-header bg-white">
                 
                  </div>
                  <div className="card-body">
                    {/* Uncomment the next line if you have a product description */}
                    {/* <p>{product?.description || 'Description not available'}</p> */}
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

export default SingleProduct;
