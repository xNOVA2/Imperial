'use client'
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useState } from "react";

export default function AddProduct() {
  let data;

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
        setFormData((prevData:any) => ({
          ...prevData,
          [name]: value,
        }));
      };

      const handleSubmit = async (e:any) => {
        e.preventDefault();
      
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/AddProduct`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });
        if (response.ok) {
           data = await response.json();
           console.log(data);
           
        } else {
          console.error('Failed to add product');
        }
      } catch (error) {
        console.error('An error occurred while adding the product', error);
      }
    }    
  return (
    <div>
 <nav className="flex justify-between px-4   items-center">
            <h1 className="text-2xl font-bold"><Link href={'/AdminPanel/AyanDashboard'}>Admin Dashboard </Link> </h1>
        <ul className="flex justify-items-center m-3 gap-4">
            <li><Button variant={"link"} className="text-sm"><Link href={'/AdminPanel/AyanDashboard/Update&Delete'} > Update / Delete Products</Link></Button></li>
            <li><Button variant={"link"}><Link href={'/AdminPanel/AyanDashboard/AddProduct'}> Add new Product</Link></Button></li>
        </ul>
        </nav>



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
          Add Product
        </Button>
      </div>
    </form>
    <p>{data}</p>
    </div>
  )
}
