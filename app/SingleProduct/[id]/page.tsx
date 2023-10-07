
import Link from 'next/link'
import Image from 'next/image'
import AddtoCart from '@/components/AddtoCart'
import Footer from '@/components/Footer/Footer'
import { Navbar } from '@/components/Export'
import { FetchProductsType } from '@/Types/type'
export default async function ProductOverviewOne({ params }: { params: { id: number } }) {

  const data = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/SingleProduct/${params.id}`)
  const result = await data.json()
  const Item: FetchProductsType = result.data

  return (
    <>
      <Navbar />
      <div className="mx-auto max-w-7xl px-4 md:px-8 2xl:px-16">
        <div className="pt-8">
          <div className="flex items-center">
            <ol className="flex w-full items-center overflow-hidden">
              <li className="text-body hover:text-heading px-2.5 text-sm transition duration-200 ease-in first:pl-0 last:pr-0">
                <Link href={'/'}>Home</Link>
              </li>
              <li className="text-body mt-0.5 text-base">/</li>
              <li className="text-body hover:text-heading px-2.5 text-sm transition duration-200 ease-in first:pl-0 last:pr-0">

                products

              </li>
              <li className="text-body mt-0.5 text-base">/</li>
              <li className="text-body hover:text-heading px-2.5 text-sm transition duration-200 ease-in first:pl-0 last:pr-0">

                {Item.ItemType}

              </li>
            </ol>
          </div>
        </div>
        <div className="block grid-cols-9 items-start gap-x-10 pb-10 pt-7 lg:grid lg:pb-14 xl:gap-x-14 2xl:pb-20">
          <div className="col-span-5 grid grid-cols-1 gap-2.5">

            <div className="col-span-1 transition duration-150 ease-in hover:opacity-90">
              <Image
                width={500}
                height={300}
                src={Item.ProductUrl}
                alt="Nike Air Max 95 By You--0"
                className="w-full object-cover"
              />
            </div>

          </div>
          <div className="col-span-4 pt-8 lg:pt-0">
            <div className="mb-7 border-b border-gray-300 pb-7">
              <h2 className="text-heading mb-3.5 text-lg font-bold md:text-xl lg:text-2xl 2xl:text-3xl">
                {Item.CompanyName}
                <br />
                {Item.Series}
              </h2>
              <p className="text-body text-sm leading-6  lg:text-base lg:leading-8">
                {Item.ItemDescription}
              </p>
              <hr />
              <br />
              <p className="text-body text-sm leading-6  lg:text-base lg:leading-8">
                {Item.ModelNo}
              </p>
              <hr />
              <br />

              <p className="text-body text-sm leading-6  lg:text-base lg:leading-8">
                {Item.Series}
              </p>
              <hr />
              <br />

              <p className="text-body text-sm leading-6  lg:text-base lg:leading-8">
                {Item.Type}
              </p>
              <hr />
              <br />

              <p className="text-body text-sm leading-6  lg:text-base lg:leading-8">
                {Item.Size}
              </p>
              <div className="mt-5 flex items-center ">
                <div className="text-heading pr-2 text-base font-bold md:pr-0 md:text-xl lg:pr-2 lg:text-2xl 2xl:pr-0 2xl:text-4xl">
                  PKR {Item.Price}
                </div>

              </div>
            </div>
            <div className="border-b border-gray-300 pb-3  ">
              <div className="mb-4">


              </div>
              <div className="mb-4 ">
                <h3 className="text-heading mb-2.5 text-base font-semibold capitalize md:text-lg">
                  color
                </h3>
                <ul className="colors -mr-3 flex flex-wrap">
                  {Item.Color}
                </ul>
              </div>
            </div>
            <div className="space-s-4 3xl:pr-48 flex items-center gap-2 border-b border-gray-300 py-8  md:pr-32 lg:pr-12 2xl:pr-32">

              Add to Cart<AddtoCart company={Item.CompanyName} id={Item.id} image={Item.ProductUrl} modelNumber={Item.ModelNo} price={Item.Price} title={Item.ItemType} />

            </div>
            <div className="py-6 ">
              <ul className="space-y-5 pb-1 text-sm">

                <li>
                  <span className="text-heading inline-block pr-2 font-semibold">Category:</span>
                  <Link className="hover:text-heading transition hover:underline" href={''}>
                    {Item.ItemType}
                  </Link>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
