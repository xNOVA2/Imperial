'use client'
import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';

export default function ProductUpdateForm({ productId }:{productId:number}) {
    
    const fetchProductDetails = async () => {
        try {
          const data = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/SingleProduct/${productId}`);
          const result = await data.json();
          const productData = result.data; // Assuming this object contains the product details
    
          // Set the default form values based on the fetched product details
          setFormData({
            Price: productData.Price,
            Type: productData.Type,
            Series: productData.Series,
            Size: productData.Size,
            Color: productData.Color,
            CompanyName: productData.CompanyName,
            ItemDescription: productData.ItemDescription,
            ItemType: productData.ItemType,
            ModelNo: productData.ModelNo,
            ProductUrl: productData.ProductUrl,
          });
    
          // Set the product state for reference or further use if needed
          setProduct(productData);
        } catch (error) {
          console.error('Error fetching product details:', error);
        }
      };
    
      useEffect(() => {
        fetchProductDetails();
      }, [productId]);
    
    const [Product, setProduct] = useState({})
  const [formData, setFormData] = useState({
    Price: '',
    Type: '',
    Series: '',
    Size: '',
    Color: '',
    CompanyName: '',
    ItemDescription: '',
    ItemType: '',
    ModelNo: '',
    ProductUrl: '',
  });

  const handleChange = (e:any) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e:any) => {
    e.preventDefault();

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/updateProduct/${productId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data.message); // Log the response from the API
      } else {
        console.error('Failed to update product');
      }
    } catch (error) {
      console.error('An error occurred while updating the product', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-4 p-4 border border-gray-300 rounded-lg">
      <div className="mb-4">
        <label htmlFor="Price" className="block text-sm font-medium text-gray-700">
          Price:
        </label>
        <input
          type="text"
          id="Price"
          name="Price"
          value={formData.Price}
          onChange={handleChange}
          className="mt-1 p-2 w-full rounded-md border border-gray-300 focus:ring focus:ring-blue-200"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="Type" className="block text-sm font-medium text-gray-700">
          Type:
        </label>
        <input
          type="text"
          id="Type"
          name="Type"
          value={formData.Type}
          onChange={handleChange}
          className="mt-1 p-2 w-full rounded-md border border-gray-300 focus:ring focus:ring-blue-200"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="Series" className="block text-sm font-medium text-gray-700">
          Series:
        </label>
        <input
          type="text"
          id="Series"
          name="Series"
          value={formData.Series}
          onChange={handleChange}
          className="mt-1 p-2 w-full rounded-md border border-gray-300 focus:ring focus:ring-blue-200"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="Size" className="block text-sm font-medium text-gray-700">
          Size:
        </label>
        <input
          type="text"
          id="Size"
          name="Size"
          value={formData.Size}
          onChange={handleChange}
          className="mt-1 p-2 w-full rounded-md border border-gray-300 focus:ring focus:ring-blue-200"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="Color" className="block text-sm font-medium text-gray-700">
          Color:
        </label>
        <input
          type="text"
          id="Color"
          name="Color"
          value={formData.Color}
          onChange={handleChange}
          className="mt-1 p-2 w-full rounded-md border border-gray-300 focus:ring focus:ring-blue-200"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="CompanyName" className="block text-sm font-medium text-gray-700">
          Company Name:
        </label>
        <input
          type="text"
          id="CompanyName"
          name="CompanyName"
          value={formData.CompanyName}
          onChange={handleChange}
          className="mt-1 p-2 w-full rounded-md border border-gray-300 focus:ring focus:ring-blue-200"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="ItemDescription" className="block text-sm font-medium text-gray-700">
          Item Description:
        </label>
        <input
          type="text"
          id="ItemDescription"
          name="ItemDescription"
          value={formData.ItemDescription}
          onChange={handleChange}
          className="mt-1 p-2 w-full rounded-md border border-gray-300 focus:ring focus:ring-blue-200"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="ItemType" className="block text-sm font-medium text-gray-700">
          Item Type:
        </label>
        <input
          type="text"
          id="ItemType"
          name="ItemType"
          value={formData.ItemType}
          onChange={handleChange}
          className="mt-1 p-2 w-full rounded-md border border-gray-300 focus:ring focus:ring-blue-200"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="ModelNo" className="block text-sm font-medium text-gray-700">
          Model No:
        </label>
        <input
          type="text"
          id="ModelNo"
          name="ModelNo"
          value={formData.ModelNo}
          onChange={handleChange}
          className="mt-1 p-2 w-full rounded-md border border-gray-300 focus:ring focus:ring-blue-200"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="ProductUrl" className="block text-sm font-medium text-gray-700">
          Product URL:
        </label>
        <input
          type="text"
          id="ProductUrl"
          name="ProductUrl"
          value={formData.ProductUrl}
          onChange={handleChange}
          className="mt-1 p-2 w-full rounded-md border border-gray-300 focus:ring focus:ring-blue-200"
        />
      </div>
      <div>
        <Button type="submit" className="bg-blue-500 text-white hover:bg-blue-600 px-4 py-2 rounded-md">
          Update Product
        </Button>
      </div>
    </form>
  );
}
