import React, { useState } from 'react';
import * as XLSX from 'xlsx';

const ProductForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    price: '',
    category: '',
    stock: '',
    image: '',
  });

  const [allProducts, setAllProducts] = useState([]);

  // Handle form data changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle image upload (Store image URL or filename)
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file); // Temporarily create a URL for the uploaded image
      setFormData({
        ...formData,
        image: imageUrl, // Store the URL
      });
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Add new product data to the list of all products
    setAllProducts((prevProducts) => [...prevProducts, formData]);

    // Clear the form after submission
    setFormData({
      title: '',
      description: '',
      price: '',
      category: '',
      stock: '',
      image: '',
    });
  };

  // Handle Excel file download
  const handleDownload = () => {
    const productData = allProducts.map(product => ({
      ...product,
      image: product.image ? product.image : 'No Image', // Include the image URL
    }));

    // Convert product data to Excel
    const worksheet = XLSX.utils.json_to_sheet(productData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Products');

    // Download the Excel file
    XLSX.writeFile(workbook, 'products.xlsx');
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-6 text-center">Product Form</h2>
      <form onSubmit={handleSubmit}>
        {/* Product Title */}
        <div className="mb-4">
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            placeholder="Product Title"
            required
          />
        </div>

        {/* Description */}
        <div className="mb-4">
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            placeholder="Product Description"
            required
          />
        </div>

        {/* Price */}
        <div className="mb-4">
          <input
            type="number"
            id="price"
            name="price"
            value={formData.price}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            placeholder="Price"
            required
          />
        </div>

        {/* Category */}
        <div className="mb-4">
          <input
            type="text"
            id="category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            placeholder="Category"
            required
          />
        </div>

        {/* Stock */}
        <div className="mb-4">
          <input
            type="number"
            id="stock"
            name="stock"
            value={formData.stock}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            placeholder="Stock Quantity"
            required
          />
        </div>

        {/* Image Upload */}
        <div className="mb-4">
          <input
            type="file"
            id="image"
            name="image"
            onChange={handleImageUpload}
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
        </div>

        {/* Submit Button */}
        <div className="text-center mb-4">
          <button
            type="submit"
            className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 transition duration-200"
          >
            Submit
          </button>
        </div>

        {/* Download Button */}
        <div className="text-center">
          <button
            type="button"
            onClick={handleDownload}
            className="bg-green-500 text-white font-bold py-2 px-4 rounded hover:bg-green-700 transition duration-200"
          >
            Download Excel
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProductForm;
