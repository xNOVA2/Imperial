import { FetchProductsType } from "@/Types/type";
import Link from "next/link";
import Image from "next/image";

export default function FetchCard({ ProductUrl,Price,id,Series,ItemType }: FetchProductsType) {
  return (
    <Link href={'/SingleProduct/'+id} className="block group">
    <img
      src={ProductUrl}
      alt="Error"
      className="h-[350px] w-full object-cover sm:h-[450px]"
    />
  
    <div className="mt-1.5">
      <p className="text-xs text-gray-500">Space Grey</p>
  
     
  
      <div className="flex justify-between mt-3 text-sm">
        <h3
          className="text-gray-900 group-hover:underline group-hover:underline-offset-4"
        >
          {ItemType}
        </h3>
  
        <p className="text-gray-900">Rs:{Price}</p>
      </div>
    </div>
  </Link>
  )
}
