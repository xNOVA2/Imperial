import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { ProductProps } from "@/Types/type";

export default function ProductCard({ title, image1, image2, description, }: ProductProps) {
  return (
    <section>
      {/* Container for product details */}
      <div className="max-w-screen-xl px-4 py-8 mx-auto sm:py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:items-stretch">
          {/* Product information */}
          <div className="grid p-6 bg-gray-100 rounded place-content-center sm:p-8">
            <div className="max-w-md mx-auto text-center lg:text-left">
              <header>
                {/* Product title */}
                <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">{title}</h2>

                {/* Product description */}
                <p className="mt-4 text-gray-500">
                  {description}
                </p>
              </header>

              {/* Link to view all products */}
              <Link href={'/Products/' + title}>
                <Button className="mt-5">View All</Button>
              </Link>
            </div>
          </div>

          {/* Product images */}
          <div className="lg:col-span-2 lg:py-8">
            <ul className="grid grid-cols-2 gap-4">
              {/* First product image */}
              <li>
                <Link href={'/Products/' + title}>


                  <Image
                    src={image1}
                    alt=""
                    priority={false}
                    width={400}
                    height={300}
                    className="object-cover w-full rounded aspect-square"
                  />

                  {/* Product details */}


                </Link>
              </li>

              {/* Second product image */}
              <li>
                <Link href={'/Products/' + title}>

                  <Image
                    src={image2}
                    alt=""
                    width={400}
                    height={300}
                    priority={false}
                    className="object-cover w-full rounded aspect-square"
                  />

                  {/* Product details */}

                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
