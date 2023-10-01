import Image from 'next/image'
import FreeShippingPicture from '../../public/FreeShipping.png'
import SheetProduct from '../SheetProduct/SheetProduct'

export default function Delivery() {
  return (
    <div className="relative w-full bg-center bg-cover">
      <div className="flex items-center justify-center w-full h-full bg-blue-200">
        <div className="max-w-xl mx-auto p-4 text-center text-white">
          <Image src={FreeShippingPicture} alt="" width={600} height={400} />
          <h1 className="text-3xl font-semibold lg:text-4xl">
            Free Shipping in <span className="text-blue-600">Karachi</span>
            <br />
            <p className='text-xl mt-3'>Terms & Condition Apply</p>
          </h1>
         <div className=''>
         <SheetProduct isChecked={false} Text='Shop now'/>
         </div>
        
        </div>
      </div>
    </div>
  )
}
