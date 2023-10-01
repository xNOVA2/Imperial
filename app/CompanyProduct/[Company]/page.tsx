import { products5 } from "@/Common/Products";
import { FetchProductsType } from "@/Types/type";
import SearchBox from "@/components/CompanySearch/SearchBox";
import { ComapanyBar, Navbar } from "@/components/Export";
import Footer from "@/components/Footer/Footer";
import Image from "next/image";
import Link from "next/link";

export default  async function page({params,searchParams}:{params:{Company:string},searchParams:{Search:string}}) {
  const Company = params.Company.replace(/-/g, ' ')
    const {Search} = searchParams
    const queryParams:any = {};

  if(Search){
    queryParams.Search = Search
  }
  const queryString = new URLSearchParams(queryParams as any).toString();
  const data = await fetch(`http://localhost:3000/api/productsByCompany/${Company}?${queryString}`,{next:{revalidate:1}})
  const result = await data.json();
  return (
    <>
    <Navbar/>
    <ComapanyBar/>
    <div className="px-4 py-16 mx-auto max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 flex justify-center">
      <div className="max-w-screen-sm sm:text-center sm:mx-auto">
        
        <h2 className="mb-4 font-sans text-3xl font-bold tracking-tight text-gray-900  leading-none">
          {Company}
        </h2>
       
        <hr className="w-full my-8 border-gray-300" />
      </div>
      </div>
      <div className="text-center">
  <div className="w-12/5 mx-7 lg:w-1/2 xl:w-medium lg:mx-auto pb-5">
    <SearchBox />
  </div>
</div>

      <hr className="px-5"/>
      <hr  className="px-5"/>
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="sr-only">Products</h2>
  
          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {result.data?.map((product: FetchProductsType) => (
              <div className="bg-white border rounded-lg shadow-lg" key={product.id}>
                <Link href={`/SingleProduct/${product.id}`} className="group">
                  <div className="relative aspect-w-4 aspect-h-3">
                    <Image
                      src={product.ProductUrl}
                      alt={String(product.id)}
                      width={500}
                      height={300}
                      className="w-36 lg:w-full h-full lg:p-14 px-7 mt-5"
                    />
                  </div>
                </Link>
                <div className="p-4">
                  <h3 className="text-gray-900 text-lg font-semibold">{product.ItemType}</h3>
                  <p className="mt-2 text-gray-500 text-sm">{product.ModelNo}</p>
                  <p className="mt-2 text-gray-500 text-sm">{product.id}</p>
                  <div className="mt-4 flex justify-between items-center">
                    <p className="text-gray-900">Rs: {product.Price}</p>
                  </div>
                </div>
              </div>
            ))}
         
          </div>
        </div>
      </div>
   
    <Footer/>
    </>
  )
}
