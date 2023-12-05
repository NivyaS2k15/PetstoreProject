import React, { useState } from 'react';
import axios, { AxiosError } from 'axios';

// Define the Category interface
interface Category {
  categoryId: string;
  categoryname: string;
}

const CategoryAdd = () => {
  const [inputValue, setInputValue] = useState('');
  const [error, setError] = useState<string>('');

  const handleSubmit = async () => {
    try {
      // Retrieve the token from your authentication system
      const token = localStorage.getItem('token');

      if (!token) {
        // Handle the case where there's no token (e.g., redirect to login)
        setError('User not authenticated. Please log in.');
        return;
      }

      // Make a POST request using Axios with the token in the headers
      const response = await axios.post<Category>(
        'http://localhost:4561/api/category',
        { categoryname: inputValue }, // Assuming 'categoryname' is the correct field name
        { headers: { Authorization: `Bearer ${token}` } }
      );

      console.log('Submitted value:', response.data);

      // Reset input field and clear any previous errors
      setInputValue('');
      setError('');
    } catch (error) {
      console.error('Error while submitting:', (error as AxiosError).response || (error as AxiosError).message || error);
      setError('Error while submitting. Please try again.');
    }
  };

  return (
    <div>
      {/* Input Box */}
      <input
        type="text"
        placeholder="add..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        style={{
          padding: '8px',
          border: '1px solid #ccc',
          borderRadius: '4px',
          marginRight: '10px',
        }}
      />
      {/* Button */}
      <button
        onClick={handleSubmit}
        style={{
          padding: '8px 16px',
          backgroundColor: '#90a7f0',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
        }}
      >
        Submit
      </button>
      {/* Display error message if there's an error */}
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default CategoryAdd;
