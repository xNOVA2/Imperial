'use client'
import React, { useState } from 'react'; // Import useState
import { z } from 'zod'; // Import Zod
import EmptyCart from '@/components/EmptyCart/EmptyCart';
import { ComapanyBar, Navbar } from '@/components/Export';
import { useStore } from '@/Store/CartSlice';
import { Button } from '@/components/ui/button';
import { useAuth } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

interface OrderType {
  name:string
  email:string
  address:string 
  phone:string 
  postalCode:string 
  city:string
  totalPrice:number
  orderItems:orderCartType[]
}

interface orderCartType{
    company:string
    modelNumber:string
}
export default function CheckOut() {

  const user = useAuth()
  const router = useRouter()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    region: '',
    postalCode: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    region: '',
    postalCode: '',
  });

  const cart = useStore((state) => state.Cart);
  const RemoveItem = useStore((state) => state.RemoveAnItem);

  const calculateTotalPrice = (): number => {
    // Calculate the total price by summing up the prices of all items in the cart
    const totalPrice = cart.reduce((total, item) => total + item.price, 0);

    return totalPrice;
  };

  const totalPrice = calculateTotalPrice();

  const ContactInfoSchema = z.object({
    name: z.string().min(3, { message: 'Name is required' }),
    email: z.string().email({ message: 'Invalid email address' }),
    phone: z.string().min(8, { message: 'Phone number is required' }),
  });

  const ShippingAddressSchema = z.object({
    address: z.string().min(4, { message: 'Address is required' }),
    city: z.string().min(1, { message: 'City is required' }),
    region: z.string().min(1, { message: 'State/Province is required' }),
    postalCode: z.string().min(2, { message: 'Postal code is required' }),
  });

  const handleFormSubmit = async () => {
    if(!user.isSignedIn){
      router.push('/sign-up')
      return
    }
    const contactInfo = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
    };

    const addressInfo = {
      address: formData.address,
      city: formData.city,
      region: formData.region,
      postalCode: formData.postalCode,
    };

    try {
      ContactInfoSchema.parse(contactInfo);
      ShippingAddressSchema.parse(addressInfo);

      
      
      const apiUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/api/Order`;

      const orderData:OrderType = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        address: formData.address,
        city: formData.city,
        totalPrice: totalPrice,
        postalCode: formData.postalCode,
        orderItems: cart.map((cartItem) => ({
          company: cartItem.company,
          modelNumber: cartItem.modelNumber,
        })),
        
      };
      
      const requestOptions = {
        method: 'POST',
        body: JSON.stringify(orderData), // Convert the data to JSON format
      };
      
      try {
        // Make the POST request to the API
        const response = await fetch(apiUrl, requestOptions);
        console.log(response.json());
        
        if (!response.ok) {
          // Handle non-successful response (e.g., show an error message)
          console.error('Failed to place the order.');
        } else {
          // Handle the successful response (e.g., show a success message)
          console.log('Order placed successfully.');
        }
      } catch (error) {
        // Handle any network or fetch-related errors
        console.error('An error occurred while placing the order:', error);
      }
      // Handle successful form submission here
    } catch (error:any) {
      // Handle validation errors and update the errors state
      setErrors(error.formErrors.fieldErrors);
    }
  };
 
  
  return cart.length === 0 ? (
    <EmptyCart />
  ) : (
    <>
      <Navbar />
      <ComapanyBar />
      <div className="mx-auto my-4 max-w-4xl md:my-6">
        <div className="overflow-hidden  rounded-xl shadow">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Contact Info */}
            <div className="px-5 py-6 text-gray-900 md:px-8">
              <div className="flow-root">
                <div className="-my-6 divide-y divide-gray-200">
                  <div className="py-6">
                    <form>
                      <div className="mx-auto max-w-2xl px-4 lg:max-w-none lg:px-0">
                        <div>
                          <h3
                            id="contact-info-heading"
                            className="text-lg font-semibold text-gray-900"
                          >
                            Contact information
                          </h3>
                          <div className="mt-4 w-full">
                            <label
                              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                              htmlFor="name"
                            >
                              Full Name
                            </label>
                            <input
                              className={`flex h-10 w-full rounded-md border ${
                                errors.name ? 'border-red-500' : 'border-black/30'
                              } bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 ${
                                errors.name ? 'ring-red-500' : ''
                              } disabled:cursor-not-allowed disabled:opacity-50`}
                              type="text"
                              placeholder="Enter your name"
                              id="name"
                              onBlur={(e) => {
                                setFormData({ ...formData, name: e.target.value });
                              }}
                            />
                            {errors.name && (
                              <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                            )}
                          </div>
                          <div className="mt-4 w-full">
                            <label
                              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                              htmlFor="email"
                            >
                              Email Address
                            </label>
                            <input
                              className={`flex h-10 w-full rounded-md border ${
                                errors.email ? 'border-red-500' : 'border-black/30'
                              } bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 ${
                                errors.email ? 'ring-red-500' : ''
                              } disabled:cursor-not-allowed disabled:opacity-50`}
                              type="email"
                              placeholder="Enter your Email"
                              id="email"
                              onBlur={(e) => {
                                setFormData({ ...formData, email: e.target.value });
                              }}
                            />
                            {errors.email && (
                              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                            )}
                          </div>
                          <div className="mt-4 w-full">
                            <label
                              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                              htmlFor="phone"
                            >
                              Phone Number
                            </label>
                            <input
                              className={`flex h-10 w-full rounded-md border ${
                                errors.phone ? 'border-red-500' : 'border-black/30'
                              } bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 ${
                                errors.phone ? 'ring-red-500' : ''
                              } disabled:cursor-not-allowed disabled:opacity-50`}
                              type="email"
                              placeholder="Enter your Phone Number"
                              id="phone"
                              onBlur={(e) => {
                                setFormData({ ...formData, phone: e.target.value });
                              }}
                            />
                            {errors.phone && (
                              <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                            )}
                          </div>
                        </div>
                        <hr className="my-8" />
                      </div>
                      <div className="mt-10">
                        <h3 className="text-lg font-semibold text-gray-900">Shipping address</h3>
                        <div className="mt-6 grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-3">
                          <div className="sm:col-span-3">
                            <label
                              htmlFor="address"
                              className="block text-sm font-medium text-gray-700"
                            >
                              Address
                            </label>
                            <div className="mt-1">
                              <input
                                type="text"
                                id="address"
                                name="address"
                                autoComplete="street-address"
                                className={`flex h-10 w-full rounded-md border ${
                                  errors.address ? 'border-red-500' : 'border-black/30'
                                } bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 ${
                                  errors.address ? 'ring-red-500' : ''
                                } disabled:cursor-not-allowed disabled:opacity-50`}
                                onBlur={(e) => {
                                  setFormData({ ...formData, address: e.target.value });
                                }}
                              />
                              {errors.address && (
                                <p className="text-red-500 text-sm mt-1">{errors.address}</p>
                              )}
                            </div>
                          </div>
                          <div>
                            <label
                              htmlFor="city"
                              className="block text-sm font-medium text-gray-700"
                            >
                              City
                            </label>
                            <div className="mt-1">
                              <input
                                type="text"
                                id="city"
                                name="city"
                                autoComplete="address-level2"
                                className={`flex h-10 w-full rounded-md border ${
                                  errors.city ? 'border-red-500' : 'border-black/30'
                                } bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 ${
                                  errors.city ? 'ring-red-500' : ''
                                } disabled:cursor-not-allowed disabled:opacity-50`}
                                onBlur={(e) => {
                                  setFormData({ ...formData, city: e.target.value });
                                }}
                              />
                              {errors.city && (
                                <p className="text-red-500 text-sm mt-1">{errors.city}</p>
                              )}
                            </div>
                          </div>
                          <div>
                            <label
                              htmlFor="region"
                              className="block text-sm font-medium text-gray-700"
                            >
                              State / Province
                            </label>
                            <div className="mt-1">
                              <input
                                type="text"
                                id="region"
                                name="region"
                                autoComplete="address-level1"
                                className={`flex h-10 w-full rounded-md border ${
                                  errors.region ? 'border-red-500' : 'border-black/30'
                                } bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 ${
                                  errors.region ? 'ring-red-500' : ''
                                } disabled:cursor-not-allowed disabled:opacity-50`}
                                onBlur={(e) => {
                                  setFormData({ ...formData, region: e.target.value });
                                }}
                              />
                              {errors.region && (
                                <p className="text-red-500 text-sm mt-1">{errors.region}</p>
                              )}
                            </div>
                          </div>
                          <div>
                            <label
                              htmlFor="postal-code"
                              className="block text-sm font-medium text-gray-700"
                            >
                              Postal code
                            </label>
                            <div className="mt-1">
                              <input
                                type="text"
                                id="postal-code"
                                name="postal-code"
                                autoComplete="postal-code"
                                className={`flex h-10 w-full rounded-md border ${
                                  errors.postalCode ? 'border-red-500' : 'border-black/30'
                                } bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 ${
                                  errors.postalCode ? 'ring-red-500' : ''
                                } disabled:cursor-not-allowed disabled:opacity-50`}
                                onBlur={(e) => {
                                  setFormData({ ...formData, postalCode: e.target.value });
                                }}
                              />
                              {errors.postalCode && (
                                <p className="text-red-500 text-sm mt-1">{errors.postalCode}</p>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="mt-10 flex justify-end border-t border-gray-200 pt-6">
                        <button
                          type="button"
                          className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                          onClick={handleFormSubmit}
                        >
                          Check Out
                          
                        </button>
                       


                      </div>
              </form>

                    </div>

                </div>
              </div>
            </div>
            {/* Product List */}
            <div className="bg-gray-100 px-5 py-6 md:px-8">
              <div className="flow-root">
                <ul className="-my-7 divide-y divide-gray-200">
                  {cart.map((product) => (
                    <li key={product.id} className="flex items-stretch justify-between space-x-5 py-7">
                      <div className="flex flex-1 items-stretch">
                        <div className="flex-shrink-0">
                          <Image
                          width={300}
                          height={200}
                            className="h-20 w-20 rounded-lg border border-gray-200 bg-white object-contain"
                            src={product.image}
                            alt={''}
                          />
                        </div>
                        <div className="ml-5 flex flex-col justify-between">
                          <div className="flex-1">
                            <p className="text-sm font-bold">{product.title}</p>
                            <p className="mt-1.5 text-sm font-medium text-gray-500"></p>
                          </div>
                          <p className="mt-4 text-xs font-medium ">x 1</p>
                        </div>
                      </div>
                      <div className="ml-auto flex flex-col items-end justify-between">
                        <p className="text-right text-sm font-bold text-gray-900">PKR{product.price}</p>
                        <button
                          type="button"
                          className="-m-2 inline-flex rounded p-2 text-gray-400 transition-all duration-200 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2"
                        >
                          <Button variant={'destructive'} onClick={() => RemoveItem(product.id)}>
                            Remove
                          </Button>
                        </button>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <hr className="mt-6 border-gray-200" />
              <form action="#" className="mt-6">
                <div className="sm:flex sm:space-x-2.5 md:flex-col md:space-x-0 lg:flex-row lg:space-x-2.5">
                  <div className="flex-grow">
                    <input
                      className="flex w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="text"
                      placeholder="Enter coupon code"
                    />
                  </div>
                  <div className="mt-4 sm:mt-0 md:mt-4 lg:mt-0">
                    <button
                      type="button"
                      className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                    >
                      Apply Coupon
                    </button>
                  </div>
                </div>
              </form>
              <ul className="mt-6 space-y-3">
                <li className="flex items-center justify-between text-gray-900">
                  <p className="text-sm font-medium ">Total</p>
                  <p className="text-sm font-bold ">PKR {totalPrice}</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        </div>
    </>
  );
}
