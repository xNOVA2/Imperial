import { ComapanyBar, Navbar } from "../Export";
import Footer from "../Footer/Footer";
import Image from "next/image";
import emptyCart from "../../public/EmptyCart.svg";

export default function EmptyCart() {
  return (
    <>
      <Navbar />
      <ComapanyBar />
      <div className="flex flex-col justify-center items-center w-full min-h-screen">
        <h1 className="font-bold text-3xl mb-4 text-center">Cart is Empty</h1>
        <div className="relative w-4/5 md:w-3/5 lg:w-2/5">
          <Image
            src={emptyCart}
            layout="responsive"
            width={600}
            height={200}
            alt="Empty Cart"
          />
        </div>
      </div>
      <Footer />
    </>
  );
}
