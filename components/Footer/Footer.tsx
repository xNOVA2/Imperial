import { ChevronRight, Home, Mail, Phone } from 'lucide-react'
import Image from 'next/image'
import Logo from '../../public/ImperialElectronics.png'
import Link from 'next/link'
export default function Footer() {
  return (
    <>
    <hr />
      <hr />
      <footer className="w-full mt-4">
      
      <div className="mx-auto flex max-w-6xl flex-col items-start space-x-8 md:flex-row">
        <div className="w-full px-4 md:w-1/2 lg:px-0">
          <h1 className="max-w-sm text-3xl font-bold">Subscribe to our Newsletter</h1>
          <form action="" className="mt-4 inline-flex w-full items-center md:w-3/4">
            <input
              className="flex h-10 w-full rounded-md border border-black/20 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
              type="email"
              placeholder="Email"
            ></input>
            <button
              type="button"
              className="ml-4 rounded-full bg-blue-400 px-3 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </form>
        </div>
        <div className="mt-8 grid grid-cols-2 gap-6 md:mt-0 lg:w-3/4 lg:grid-cols-3">
        
            <div  className="mb-8 lg:mb-0">
              <p className="mb-6 text-lg font-semibold text-gray-700 ">Contact</p>
              <ul className="flex flex-col space-y-4 text-[14px] font-medium text-gray-500">
                <li><Home/> Shop No 13, Abdullah Haroon Rd, Regal Chowk, Saddar  Town,</li>
                <li><Phone/> 03339777206</li>
                <li><Mail/> imperialelectronic101@gmail.com</li>
             
       
              </ul>
            </div>

            <div  className="mb-8 lg:mb-0">
              <p className="mb-6 text-lg font-semibold text-gray-700 ">Infomation</p>
              <ul className="flex flex-col space-y-4 text-[14px] font-medium text-gray-500">
                <li className='cursor-pointer'><Link href={'/AboutUs'}>About us</Link></li>
                <li className='cursor-pointer'><Link href={'/ContactUs'}>Contact  us</Link></li>
                <li className='cursor-pointer'><Link href={'/Exchange&Refund'}>Exchange /Refund Policy</Link></li>
                <li className='cursor-pointer'><Link href={'/PolicyPrivate'}>Privacy Policy</Link></li>

       
              </ul>
            </div>
      
        </div>
      </div>
      <hr className="my-4" />
      <div className="mx-auto max-w-6xl items-center justify-between px-4 md:flex lg:px-0">
        <div className="inline-flex items-center">

        <Image  
          src={Logo} 
          alt='Logo' 
          width={200} 
          height={100}
          />

          <span className="ml-4  font-bold font-sans text-xl">Imperial Electronic</span>
        </div>
        <div className="mt-4 md:mt-0">
          <p className="text-sm font-medium text-gray-500">© 2023 Imperial Electronic. All rights reserved. || Made by Ali Osaid</p>
        </div>
      </div>
    </footer>
    </>
   
  )
}
