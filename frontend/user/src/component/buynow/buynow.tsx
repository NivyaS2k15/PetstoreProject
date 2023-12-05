import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import axios from 'axios';
import './buynow.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface Buy {
  _id: string;
  name: string;
  address: string;
  state: string;
  district: string;
  pin: string;
  deleted: boolean;
}

const BuyNow: React.FC = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    address: '',
    state: '',
    district: '',
    pin: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const token = localStorage.getItem('token');

    if (!token) {
      // Handle the case where there is no token (user is not authenticated)
      console.error('User not authenticated');
      return;
    }

    try {
      const response = await axios.post('http://localhost:4561/api/buynow', formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      console.log(response);

      toast.success('Order Placed Successfully', {
        position: 'bottom-center',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'colored',
      });
    } catch (error) {
      console.error('Error placing order:', error);
      toast.error('Error placing order', {
        position: 'bottom-center',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'colored',
      });
    }
  };

  return (
    <div style={{ maxWidth: '400px', margin: '0 auto' }}>
      <h2 style={{ textAlign: 'center' }}>Details</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ margin: '10px 0' }}>
          <label htmlFor="name" style={{ display: 'block', fontWeight: 'bold' }}>
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            style={{ width: '100%', padding: '8px', backgroundColor: 'rgb(167, 171, 240)' }}
          />
        </div>

        <div style={{ margin: '10px 0' }}>
          <label htmlFor="address" style={{ display: 'block', fontWeight: 'bold' }}>
            Address
          </label>
          <textarea
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
            style={{ width: '100%', padding: '8px', backgroundColor: 'rgb(167, 171, 240)', color: 'black' }}
          />
        </div>

        <div style={{ margin: '10px 0' }}>
          <label htmlFor="state" style={{ display: 'block', fontWeight: 'bold' }}>
            State
          </label>
          <input
            type="state"
            id="state"
            name="state"
            value={formData.state}
            onChange={handleChange}
            required
            style={{ width: '100%', padding: '8px', backgroundColor: 'rgb(167, 171, 240)', color: 'black' }}
          />
        </div>

        <div style={{ margin: '10px 0' }}>
          <label htmlFor="district" style={{ display: 'block', fontWeight: 'bold' }}>
            District
          </label>
          <input
            type="text"
            id="district"
            name="district"
            value={formData.district}
            onChange={handleChange}
            required
            style={{ width: '100%', padding: '8px', backgroundColor: 'rgb(167, 171, 240)', color: 'black' }}
          />
        </div>

        <div style={{ margin: '10px 0' }}>
          <label htmlFor="pin" style={{ display: 'block', fontWeight: 'bold' }}>
            Pin
          </label>
          <input
            type="text"
            id="pin"
            name="pin"
            value={formData.pin}
            onChange={handleChange}
            required
            style={{ width: '100%', padding: '8px', backgroundColor: 'rgb(167, 171, 240)', color: 'black' }}
          />
        </div>

        <div style={{ margin: '10px 0' }}>
          <button
            type="submit"
            style={{ backgroundColor: 'rgb(34, 110, 110)', color: '#fff', padding: '10px 20px', border: 'none' }}
          >
            Order-now
          </button>
        </div>
      </form>
    </div>
  );
};

export default BuyNow;
