import Image from "next/image";
import Link from "next/link";

import {logos} from '../../Common/Logos'
export default function Trust() {
  const logoSize = { width: 150, height: 80 }; // Define the size for all logos
  
  

  return (
    <>
    <div className="m-5">
    <hr />
    <hr />
    </div>
    <section className="p-6 dark:bg-gray-800 dark:text-gray-100">
      <div className="container p-4 mx-auto text-center">
        <h2 className="text-4xl font-bold">Trusted by the industry leaders</h2>
        <h1 className="text-2xl font-bold p-2">Shop By Brand</h1>
      </div>
      <div className="container flex flex-wrap justify-center mx-auto dark:text-gray-400">
        {logos.map((logo, index) => (
          <div key={index} className="flex justify-center w-1/2 p-6 align-middle md:w-1/3 xl:w-1/4">
            <Link href={logo.href} passHref>
                <Image src={logo.src} alt={logo.alt} {...logoSize}  />
              </Link>
          </div>
        ))}
      </div>
    </section>
    </>
  );
}
