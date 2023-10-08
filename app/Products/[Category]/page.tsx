export const dynamic = "force-dynamic";

import { ComapanyBar, Navbar } from "@/components/Export"
import Footer from "@/components/Footer/Footer"
import Link from "next/link"
import FilterSheet from "@/components/FilterSheet/FilterSheet";
import Image from "next/image";
import { FetchProductsType } from "@/Types/type";
import AddtoCart from "@/components/AddtoCart";
import noData from '../../../public/noData.svg'
import { getBaseUrl } from "@/components/Categories";
import {headers} from 'next/headers'
interface QueryParams {
  Series?: string | undefined | null
  PriceRange?: string | undefined | null
  Brand?: string | undefined | null
}
async function getData(Category: string, PriceRange: string, Series: string, Brand: string) {
  const queryParams: QueryParams = {};

  if (Series) {
    queryParams.Series = Series
  }
  if (PriceRange) {
    queryParams.PriceRange = PriceRange
  }
  if (Brand) {
    queryParams.Brand = Brand
  }
  const queryString = new URLSearchParams(queryParams as any).toString();

const host = headers().get("host")

 const url = getBaseUrl();
  const data = await fetch(`${url}/api/productsByCategory/${Category}?${queryString}`)


  if (!data.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }

  return data.json()
}

export default async function page({ params, searchParams }: { params: { Category: string }; searchParams: { Series: string, Brand: string, PriceRange: string } }) {
  const Category = params.Category.replace(/-/g, ' ')



  const { Brand, Series, PriceRange } = searchParams
  console.log(Category);

  const data = await getData(Category, PriceRange, Series, Brand)
   




 const CompanyUniqueName =  [...new Set(data.data.map((obj: FetchProductsType) => obj.CompanyName))];
  const SeriesUniqueName = [...new Set(data.data.map((obj: FetchProductsType) => obj.Series))];

 
    
  
 
  const decodedCategory = decodeURIComponent(Category);
  return (
    <>
      <Navbar />
      <ComapanyBar />
      <div className="px-4 py-16 mx-auto max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 flex justify-center">
        <div className="max-w-screen-sm sm:text-center sm:mx-auto">

          <h2 className="mb-4 font-sans text-3xl font-bold tracking-tight text-gray-900  leading-none">
            {decodedCategory}
          </h2>

          <hr className="w-full my-8 border-gray-300" />
        </div>
      </div>
      <div className="flex justify-between m-2 items-center">

        <FilterSheet CompanyName={CompanyUniqueName!} SeriesName={SeriesUniqueName!} />
        <div>
          <p className=" font-bold">Total Products  <span className="text-red-400">{data.data?.length}</span></p>

        </div>
      </div>
      <hr />
      {/* // header Component */}
      <div className="bg-white">
      {data.data?.length === 0 ? (
            <div className="flex items-center justify-center m-10">
            <div className="text-center">
              <Image src={noData} alt="undraw Picture" width={500} height={300} />
              <p className="text-2xl font-bold mt-5">No Result Found</p>
            </div>
          </div>
            ) : (<div className="mx-auto max-w-7xl px-6 py-24">
          <div className="mt-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
            
              {data.data?.map((product: FetchProductsType, index: number) => (
                <div key={product.id}>
                  <div className="bg-white border rounded-lg shadow-lg">
                    <Link href={`/SingleProduct/${product.id}`} className="group">
                      <div className="mt-10 relative aspect-w-4 aspect-h-3">
                        <div
                          className="w-36 lg:w-full aspect-container"
                          style={{ paddingBottom: '75%' }} // 3:4 aspect ratio (300/400)
                        >
                          <Image
                            src={product.ProductUrl}
                            alt={String(product.id)}
                            fill
                            objectFit="cover"
                          />
                        </div>
                      </div>
                    </Link>
                  </div>
                  <div className="mt-4 p-4">
                  <h3 className=" text-lg font-semibold">{product.CompanyName}</h3>
                    <h3 className=" text-lg font-semibold">{product.ModelNo}</h3>
                    <p className="mt-2 text-gray-500 text-sm">{product.ItemType}</p>
                    <div className="mt-2 flex justify-between items-center">
                      <p className="">PKR: {product.Price}</p>
                      <AddtoCart
                        company={product.CompanyName}
                        modelNumber={product.ModelNo}
                        image={product.ProductUrl}
                        price={product.Price}
                        title={product.ItemType}
                        key={index}
                        id={product.id}
                      />
                    </div>
                  </div>
                </div>
                 ))}
                    </div>
                </div>
 )}      
          </div>
      <Footer />
    </>
  )
}
