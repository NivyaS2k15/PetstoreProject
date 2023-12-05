import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface Category {
  categoryId: string;
  categoryname: string;
}

interface Product {
  title: string;
  price: number;
  category: string;
  images: string[];
  deleted: boolean;
}

const AdminPanel: React.FC = () => {
  const [addProductItem, setAddProduct] = useState<Product>({
    title: '',
    price: 0,
    category: '',
    images: [],
    deleted: false,
  });

  const [categories, setCategories] = useState<Category[]>([]);
  const [imageFiles, setImageFiles] = useState<FileList | null>(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('http://localhost:4561/api/category/get', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setCategories(response.data);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    fetchCategories();
  }, []);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setAddProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  const handleCategoryChange = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const selectedCategory = e.target.value;
    setAddProduct((prevProduct) => ({
      ...prevProduct,
      category: selectedCategory,
    }));
  };

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event?.target?.files;
    if (files) {
      setImageFiles(files);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');

      // Using FormData to handle multiple file uploads
      const formData = new FormData();
      formData.append('title', addProductItem.title);
      formData.append('price', String(addProductItem.price));
      formData.append('category', addProductItem.category);
      formData.append('deleted', String(addProductItem.deleted));

      // Append each file to FormData
      if (imageFiles) {
        for (let i = 0; i < imageFiles.length; i++) {
          formData.append('images', imageFiles[i]);
        }
      }

      const response = await axios.post(
        'http://localhost:4561/api/product',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.status === 200) {
        console.log('Product submitted successfully');
        setAddProduct({
          title: '',
          price: 0,
          category: '',
          images: [],
          deleted: false,
        });
        setImageFiles(null);
      } else {
        console.error('Product submission failed');
      }
    } catch (error) {
      console.error('Error submitting product:', error);
    }
  };

  return (
    <div style={{ margin: 'auto', textAlign: 'left' }}>
      <h2>Add Product</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="title">Product Title:</label>
          <br />
          <input
            type="text"
            id="title"
            name="title"
            value={addProductItem.title}
            onChange={handleInputChange}
            required
          />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="price">Price:</label>
          <br />
          <input
            type="number"
            id="price"
            name="price"
            value={addProductItem.price}
            onChange={handleInputChange}
            required
          />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="category">Category:</label>
          <br />
          <select
            id="category"
            name="category"
            value={addProductItem.category}
            onChange={handleCategoryChange}
            required
          >
            <option value="" disabled>
              Select a category
            </option>
            {categories.map((category) => (
              <option key={category.categoryId} value={category.categoryId}>
                {category.categoryname}
              </option>
            ))}
          </select>
        </div>
        {/* <div style={{ marginBottom: '15px' }}>
          <label htmlFor="images">Image Upload:</label>
          <br />
          <input
            type="file"
            name="images"
            multiple
            onChange={handleImageUpload}
          />
          <br />
        </div> */}



<div className="formbold-mb-5 formbold-pt-3">
            <label className="formbold-form-label formbold-form-label-2">Image Details</label>
            <div className="flex flex-wrap formbold--mx-3">
              <div className="w-full sm:w-half formbold-px-3">
                <div className="formbold-mb-5">
                  <input
                    type="file"
                    name="image"
                    id="image"
                    placeholder="Enter first image"
                    className="formbold-form-input"
                  />
                </div>
              </div>
              <div className="w-full sm:w-half formbold-px-3">
                <div className="formbold-mb-5">
                  <input
                    type="file"
                    name="image"
                    id="image"
                    placeholder="Enter second image"
                    className="formbold-form-input"
                  />
                </div>
              </div>
     
            </div>
          </div>
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
};

export default AdminPanel;
