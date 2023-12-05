import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './cart.css';

interface ICategory {
  categoryId: {
    _id: string;
    categoryname: string;
  };
}

interface ProductDocument {
  productId: {
    _id: string;
    title: string;
    price: number;
    image: string[];
    deleted: boolean;
  };
  categories: ICategory[];
  quantity: number;
}

interface CartDocument {
  _id: string;
  products: ProductDocument[];
}

const ViewCart: React.FC = () => {
  const [cartData, setCartData] = useState<CartDocument[]>([]);
  const [totalAmount, setTotalAmount] = useState<number>(0);
  const navigate = useNavigate();

  const handleDelete = (id: string) => {
    const cartToDelete = cartData.find((cart) => cart._id === id);
    let totalToDelete = 0;
   
    if (cartToDelete) {
      cartToDelete.products.forEach((product) => {
        totalToDelete += product.productId.price * product.quantity;
      });
    }

    setCartData(cartData.filter((cart) => cart._id !== id));
    setTotalAmount(totalAmount - totalToDelete);
  };

  const handleBookNow = async () => {
    navigate('/new');
  };

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      console.error('Authorization token is missing.');
      return;
    }

    axios
      .get('http://localhost:4561/api/cart/viewcart', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response: any) => {
        setCartData(response.data);

        // Calculate total amount
        let total = 0;
        response.data.forEach((cart: CartDocument) => {
          cart.products.forEach((product) => {
            total += product.productId.price * product.quantity;
          });
        });
        setTotalAmount(total);
      })
      .catch((error) => {
        console.error('There was an error!', error);
      });
  }, []);

  return (
    <>
      <div style={{ padding: '20px' }}>
        <div style={{ border: '1px solid #ddd', padding: '20px', borderRadius: '5px', width: '80%', margin: '50px 130px' }}>
          <table style={{ width: '100%', marginTop: '20px' }}>
            <colgroup>
              <col style={{ width: '10%' }} />
              <col style={{ width: '20%' }} />
              <col style={{ width: '20%' }} />
              <col style={{ width: '20%' }} />
              <col style={{ width: '20%' }} />
              <col style={{ width: '10%' }} />
            </colgroup>
            <thead>
              <tr style={{ borderBottom: '2px solid #ddd' }}>
                <th style={{ padding: '10px', textAlign: 'left' }}>Index</th>
                <th style={{ padding: '20px', textAlign: 'left' }}>Image</th>
                <th style={{ padding: '10px', textAlign: 'left' }}>Product Name</th>
                <th style={{ padding: '10px', textAlign: 'left' }}>Price</th>
                <th style={{ padding: '10px', textAlign: 'left' }}>quantity</th>
                <th style={{ padding: '10px', textAlign: 'left' }}>Delete</th>
              </tr>
            </thead>
            <tbody>
              {cartData.map((cart, index) => (
                <React.Fragment key={index}>
                  <tr style={{ borderBottom: '1px solid #ddd' }}>
                    <td style={{ padding: '10px', textAlign: 'left' }}>{index + 1}</td>
                    {cart.products.map((product, productIndex) => (
                      <React.Fragment key={`product-${productIndex}`}>
                        <td style={{ padding: '10px', textAlign: 'left' }}>
                          <img
                            src={'http://localhost:4561/uploads/' + encodeURIComponent(product.productId.image[0])}
                            alt="Cart Item"
                            style={{ width: '100px', height: '100px' }}
                          />
                        </td>
                        <td style={{ padding: '10px', textAlign: 'left' }}>{product.productId.title}</td>
                        <td style={{ padding: '10px', textAlign: 'left' }}>₹{product.productId.price}</td>
                        <td style={{ padding: '20px', textAlign: 'left' }}> {product.quantity} </td>
                      </React.Fragment>
                    ))}
                    <td style={{ padding: '10px', textAlign: 'left' }}>
                      <a onClick={() => handleDelete(cart._id)}>
                        <FontAwesomeIcon icon={faTrash} />
                      </a>
                    </td>
                  </tr>
                </React.Fragment>
              ))}
            </tbody>
            <tfoot>
              <tr>
                <td colSpan={4} style={{ textAlign: 'right', fontWeight: 'bold' }}>
                  Total Amount:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </td>
                <td colSpan={2} style={{ border: '2px solid black', fontWeight: 'bold', height: '50px' }}>
                  &nbsp;&nbsp;&nbsp;₹{totalAmount}
                </td>
              </tr>
              <tr>
                <td colSpan={6} style={{ textAlign: 'right' }}>
                  <button
                     

                     onClick={handleBookNow}
                    style={{
                      padding: '10px',
                      fontSize: '16px',
                      backgroundColor: 'rgb(115, 39, 214)',
                      color: 'white',
                      border: 'none',
                      borderRadius: '5px',
                      cursor: 'pointer',
                      
                    }}
                  >
                    Order Now
                  </button>
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default ViewCart;
