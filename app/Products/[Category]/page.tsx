import { ComapanyBar, Navbar } from "@/components/Export"
import Footer from "@/components/Footer/Footer"
import Link from "next/link"
import FilterSheet from "@/components/FilterSheet/FilterSheet";
import Image from "next/image";
import { FetchProductsType } from "@/Types/type";
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

  const data = await fetch(`http://localhost:3000/api/productsByCategory/${Category}?${queryString}`, { next: { revalidate: 3600 } })


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


  const CompanyUniqueName = [...new Set(data.data.map((obj: FetchProductsType) => obj.CompanyName))];
  const SeriesUniqueName = [...new Set(data.data.map((obj: FetchProductsType) => obj.Series))];


  return (
    <>
      <Navbar />
      <ComapanyBar />
      <div className="px-4 py-16 mx-auto max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 flex justify-center">
        <div className="max-w-screen-sm sm:text-center sm:mx-auto">

          <h2 className="mb-4 font-sans text-3xl font-bold tracking-tight text-gray-900  leading-none">
            {Category}
          </h2>

          <hr className="w-full my-8 border-gray-300" />
        </div>
      </div>
      <div className="flex justify-between m-2 items-center">

        <FilterSheet CompanyName={CompanyUniqueName} SeriesName={SeriesUniqueName} />
        <div>
          <p className=" font-bold">Total Products  <span className="text-red-400">{data.data?.length}</span></p>

        </div>
      </div>
      <hr />
      {/* // header Component */}
      <div className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-24">

          <div className="mt-6 grid  grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
            {data.data?.map((product: FetchProductsType) => (
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
                  <h3 className="text-gray-900 text-lg font-semibold">{product.ModelNo}</h3>
                  <p className="mt-2 text-gray-500 text-sm">{product.ItemType}</p>
                  <div className="mt-4 flex justify-between items-center">
                    <p className="text-gray-900">PKR:{product.Price}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>



      <Footer />
    </>
  )
}
