import { products5 } from "@/Common/Products";
import { FetchProductsType } from "@/Types/type";
import AddtoCart from "@/components/AddtoCart";
import SearchBox from "@/components/CompanySearch/SearchBox";
import { ComapanyBar, Navbar } from "@/components/Export";
import Footer from "@/components/Footer/Footer";
import Image from "next/image";
import Link from "next/link";
import noData from '../../../public/noData.svg'

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
       {result.data?.length === 0 ? (
            <div className="flex items-center justify-center m-10">
            <div className="text-center">
              <Image src={noData} alt="undraw Picture" width={500} height={300} />
              <p className="text-2xl font-bold mt-5">No Result Found</p>
            </div>
          </div>
            ) : (<div className="mx-auto max-w-7xl px-6 py-24">
          <div className="mt-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
            
              {result.data?.map((product: FetchProductsType, index: number) => (
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
                    <h3 className="text-gray-900 text-lg font-semibold">{product.ModelNo}</h3>
                    <p className="mt-2 text-gray-500 text-sm">{product.ItemType}</p>
                    <p className="mt-2 text-gray-500 text-sm">{product.id}</p>
                    <div className="mt-2 flex justify-between items-center">
                      <p className="text-gray-900">PKR: {product.Price}</p>
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
    <Footer/>
    </>
  )
}
