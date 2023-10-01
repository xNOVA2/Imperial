// @ts-nocheck
'use client'

import React from 'react'
import { CartType, useStore } from '@/Store/CartSlice'
import { Button } from './ui/button'
import { useToast } from "@/components/ui/use-toast"
import { Toaster } from './ui/toaster'

export default function AddtoCart({image,price,title,id,Comapny,modelNumber}:CartType):React.JSX.Element {
    const AddCart:any = useStore((state) => state.AddCart)
    const { toast } = useToast()
    const handleAddToCart = () => {
      const item = { image:image, price:price, title:title , id,Comapny,modelNumber}; 
      AddCart(item); 
      toast({
        className:"bg-slate-600 text-white font-bold",
        description: "Added to Cart",
      })
      
    };
    
    return (
    <div>
          <Toaster/>
        <Button variant={'outline'} onClick={handleAddToCart}>Add to Cart</Button>
    </div>
  )
}
