// @ts-nocheck
'use client'

import React from 'react'
import { CartType, useStore } from '@/Store/CartSlice'
import { Button } from './ui/button'
import { useToast } from "@/components/ui/use-toast"
import { Toaster } from './ui/toaster'
import { ShoppingBag } from 'lucide-react'

export default function AddtoCart({image,price,title,id,company,modelNumber}:CartType):React.JSX.Element {
    const AddCart:any = useStore((state) => state.AddCart)
    const { toast } = useToast()
    const handleAddToCart = () => {
      const item = { image:image, price:price, title:title , id,company ,modelNumber}; 
      AddCart(item); 
      toast({
        className:"shadow-sm",
        description: "Added to Cart",
      })
      
    };
    
    return (
    <div>
        <Button variant={'outline'} onClick={handleAddToCart} ><ShoppingBag/></Button>
        <Toaster />

    </div>
  )
}
