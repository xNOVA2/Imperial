import Image from "next/image";

import Link from "next/link"
import SheetProduct from "@/components/SheetProduct/SheetProduct";
const products = [
  {
    id: 1,
    title: ' REFRIGERATOR',
    image: 'https://i.shgcdn.com/ed5a01bd-3348-4a10-a043-c79e17c9dc8a/-/format/auto/-/preview/3000x3000/-/quality/lighter/',
    link:"/Products/REFRIGERATOR"
  },
  {
    id: 2,
    title: 'CERAMIC COOKERS ',
    image: 'https://www.westpoint.pk/cdn/shop/products/Untitleddesign_1024x1024.jpg?v=1681195305',
    link:"/Products/Kitchen-Appliances"
  },
  {
    id: 3,
    title: 'LED',
    image: 'https://modernelectronics.pk/wp-content/uploads/2021/10/W020191213643389102580_350-1-4.png',
    link:"/Products/LED"
  },
  {
    id: 4,
    title: 'MICROWAVE OVEN',
    image: 'https://www.dawlance.com.pk/media/resize/F11061008200_LO1_20230619_085421.png/265Wx265H/image.webp',
    link:"/Products/MICROWAVE-OVEN"
  },
  {
    id: 5,
    title: 'WASHING MACHINE',
    image: 'https://www.dawlance.com.pk/media/resize/F01000000149_LO1_20230811_081109.png/1000Wx1000H/image.webp',
    link:"/Products/WASHING-MACHINE"

  },
  {
    id: 6,
    title: 'Blender',
    image: 'https://www.shoppingjin.pk/wp-content/uploads/2022/06/westpoint-wf-8923-shoppingjin.pk.jpg',
    link:"/Products/Kitchen-Appliances"

  },
];

export default function FeatureProduct() {
  return (
    <div className="w-full">
      <div className='m-5'>
        <hr />
        <hr />
      </div>
      <div className="flex justify-center">
      <SheetProduct isChecked={true} Text="shop now"/>
      </div>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="flex flex-col w-full mb-6 lg:justify-between lg:flex-row md:mb-8">
        <div className="flex items-center mb-5 md:mb-6 group lg:max-w-xl">
          <a href="/" aria-label="Item" className="mr-3">
            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-indigo-50">
              <svg
                className="w-12 h-12 text-deep-purple-accent-400"
                stroke="currentColor"
                viewBox="0 0 52 52"
              >
                <polygon
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  points="29 13 14 29 25 29 23 39 38 23 27 23"
                />
              </svg>
            </div>
          </a>
          <h2 className="font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl">
            <span className="inline-block mb-2"> Best Selling Products</span>
            <div className="h-1 ml-auto duration-300 origin-left transform bg-deep-purple-accent-400 scale-x-30 group-hover:scale-x-100" />
          </h2>
        </div>
        <p className="w-full text-gray-700 lg:text-sm lg:max-w-md">
        "Explore our best-selling products, trusted and loved by countless customers. From innovative gadgets to timeless fashion, our top choices offer quality and performance you can rely on. Discover excellence in every purchase."
        </p>
      </div>
        {/* ... */}

        <div className="grid gap-4 row-gap-5 mb-8 lg:grid-cols-3 lg:row-gap-8 grid-cols-2">
          {products.map((product) => (
            <Link key={product.id} href={product.link}>
              <Image
              width={400}
              height={400}
                className="object-cover w-full h-56 mb-6 rounded shadow-lg md:h-64 xl:h-80"
                src={product.image}
                alt="Product Picture"
              />
              <p className="mb-2 text-xl font-bold leading-none sm:text-2xl">
                {product.title}
              </p>
            </Link>
          ))}
        </div>

        <div className="text-center">
          

          
            <SheetProduct Text="See more" isChecked={false}/>
           
         
        </div>
      </div>
      <div className='m-5'>
        <hr />
        <hr />
      </div>
    </div>
    </div>
  );
}
