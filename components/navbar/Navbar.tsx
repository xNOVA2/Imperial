'use client'
// Imports  
import React, { Suspense } from 'react';
import { UserButton, useAuth } from "@clerk/nextjs";
import Image from 'next/image';
import {  ShoppingCart } from 'lucide-react';
import { Search } from "./search/Search";
import { Button } from "../ui/button";
import Link from 'next/link';
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import SheetProduct from "../SheetProduct/SheetProduct";
import { useRouter } from "next/navigation";
import { useStore } from "@/Store/CartSlice";

// Create a functional component for the Navbar
export default function Navbar() {
  // Fetch the current user asynchronously
  let user = useAuth()

  const router = useRouter();

  const Cart = useStore((state) => state.Cart)
  return (
    <>
      {/* Navigation bar */}
      <div className="flex justify-between p-5 items-center">
        <div className=" md:hidden lg:hidden ">

          <SheetProduct Text={<HamburgerMenuIcon fontSize={34} />} isChecked />
        </div>
        {/* Logo */}
        <div>
          <Image className="cursor-pointer" src={'/AnimateLogo.gif'} alt="Logo" width={140} height={100} onClick={() => router.push('/')} />
        </div>

        {/* Search component */}
        <div className="hidden md:block lg:block ">
          <Search />
        </div>

        {/* User actions */}
        <div className="flex gap-3 items-center justify-center">
          {/* Shopping Bag icon */}
          <Link href={'/Checkout'} className="relative">
            <span className="text-white bg-red-500  absolute top-0 left-4 -mt-2 rounded-full px-2">
              {Cart.length}
            </span>
            <ShoppingCart size={30} className="cursor-pointer" />
          </Link>
          {/* Conditional rendering based on user */}
          {user.isSignedIn ? (
            // Display UserButton when a user is logged in
            <Suspense fallback={<div>Loading...</div>} >
            <UserButton afterSignOutUrl="/sign-in" />
            </Suspense>

          ) : (
            // Display a link to sign-up when no user is logged in
            <Link href={'/sign-up'} >
              <Button variant={"outline"} >Create Account</Button>
            </Link>
          )}
        </div>
      </div>

     
     
    </>
  );
}
