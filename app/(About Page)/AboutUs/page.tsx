import { ComapanyBar, Navbar } from "@/components/Export";
import Footer from "@/components/Footer/Footer";
import Image from "next/image";
import Link from "next/link";

export default function AboutUs() {
  return (
    <>
      <Navbar />
      <ComapanyBar />
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="flex flex-col justify-center md:pr-8 xl:pr-0 lg:max-w-lg">
            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-teal-accent-400">
              <svg className="text-teal-900 w-7 h-7" viewBox="0 0 24 24">
                <polyline
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeMiterlimit="10"
                  points=" 8,5 8,1 16,1 16,5"
                  strokeLinejoin="round"
                />
                <polyline
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeMiterlimit="10"
                  points="9,15 1,15 1,5 23,5 23,15 15,15"
                  strokeLinejoin="round"
                />
                <polyline
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeMiterlimit="10"
                  points="22,18 22,23 2,23 2,18"
                  strokeLinejoin="round"
                />
                <rect
                  x="9"
                  y="13"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeMiterlimit="10"
                  width="6"
                  height="4"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="max-w-xl mb-6">
              <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                Let us handle  {'  '}
                <br className="hidden md:block" />
                your next{'  '}
                <span className="inline-block text-deep-purple-accent-400">
                  electronic endeavor.
                </span>
              </h2>
              <p className="text-base text-gray-700 md:text-lg">

                "Let us guide your electronic journey. Choose Imperial Electronics for top-quality products and unmatched service."
              </p>
            </div>
            <div>
              <Link
                href={''}
                className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
              >
                Shop now
                <svg
                  className="inline-block w-3 ml-2"
                  fill="currentColor"
                  viewBox="0 0 12 12"
                >
                  <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
                </svg>
              </ Link>
            </div>
          </div>
          <div className="flex items-center justify-center -mx-4 lg:pl-8">
            <div className="flex flex-col items-end px-3">
              <Image
                width={200}
                height={200}
                className="object-cover mb-6 rounded shadow-lg h-28 sm:h-48 xl:h-56 w-28 sm:w-48 xl:w-56"
                alt="Delivery Pic"
                src={'https://images.unsplash.com/photo-1620455800201-7f00aeef12ed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fERlbGl2ZXJ5fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'}
              />
              <Image
                width={200}
                height={100}
                className="object-cover w-20 h-20 rounded shadow-lg sm:h-32 xl:h-40 sm:w-32 xl:w-40"
                src={'https://images.unsplash.com/photo-1612630741022-b29ec17d013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDV8fERlbGl2ZXJ5fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'}
                alt=""
              />
            </div>
            <div className="px-3">
              <Image
                width={200}
                height={100}
                className="object-cover w-40 h-40 rounded shadow-lg sm:h-64 xl:h-80 sm:w-64 xl:w-80"
                src={'https://images.unsplash.com/photo-1624137527136-66e631bdaa0e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fERlbGl2ZXJ5fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="p-8 rounded shadow-xl sm:p-16">
          <div className="flex flex-col lg:flex-row">
            <div className="mb-6 lg:mb-0 lg:w-1/2 lg:pr-5">
              <h2 className="font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                The Journey of
                <br />
                <span className="text-blue-400">Imperial Electronic</span>

              </h2>
            </div>
            <div className="lg:w-1/2">
              <p className="mb-4 text-base text-gray-700">
                "At Imperial Electronic, our journey began with a vision to revolutionize the world of electronics. Established with a passion for innovation and a commitment to excellence, we embarked on a mission to provide cutting-edge electronic solutions that enhance lives and empower businesses. With years of dedication and expertise, we have grown into a trusted name in the industry. Our story is a testament to the relentless pursuit of quality, the relentless pursuit of quality, and the unwavering dedication of our team. As we continue to push boundaries, explore new horizons, and embrace the latest technologies, our journey is far from over. Join us on this exciting expedition, and together, we'll shape the future of electronics."
              </p>
            
            </div>
          </div>
        </div>
      </div>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <div>
            <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
              Brand new
            </p>
          </div>
          <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-blue-400 sm:text-4xl md:mx-auto">
            <span className="relative inline-block">
              <svg
                viewBox="0 0 52 24"
                fill="currentColor"
                className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
              >
                <defs>
                  <pattern
                    id="d5589eeb-3fca-4f01-ac3e-983224745704"
                    x="0"
                    y="0"
                    width=".135"
                    height=".30"
                  >
                    <circle cx="1" cy="1" r=".7" />
                  </pattern>
                </defs>
                <rect
                  fill="url(#d5589eeb-3fca-4f01-ac3e-983224745704)"
                  width="52"
                  height="24"
                />
              </svg>
              <span className="relative">Our{' '}</span>
            </span>
            Customer Satisfaction Rate
          </h2>
          <p className="text-base text-gray-700 md:text-lg">
            "At Imperial Electronics, customer satisfaction is at the core of everything we do. We're delighted to share that our customers' happiness is our top priority, and it shows in our exceptional satisfaction rate. Your trust in our products and services drives us to keep innovating and delivering the best. Thank you for being a part of the Imperial Electronics family."
          </p>
        </div>
        <div className="relative w-full p-px mx-auto mb-4 overflow-hidden transition-shadow duration-300 border rounded lg:mb-8 lg:max-w-4xl group hover:shadow-xl">
          <div className="absolute bottom-0 left-0 w-full h-1 duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
          <div className="absolute bottom-0 left-0 w-1 h-full duration-300 origin-bottom transform scale-y-0 bg-deep-purple-accent-400 group-hover:scale-y-100" />
          <div className="absolute top-0 left-0 w-full h-1 duration-300 origin-right transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
          <div className="absolute bottom-0 right-0 w-1 h-full duration-300 origin-top transform scale-y-0 bg-deep-purple-accent-400 group-hover:scale-y-100" />
          <div className="relative flex flex-col items-center h-full py-10 duration-300 bg-white rounded-sm transition-color sm:items-stretch sm:flex-row">
            <div className="px-12 py-8 text-center">
              <h6 className="text-4xl font-bold text-deep-purple-accent-400 sm:text-5xl">
                96.2%
              </h6>
              <p className="text-center md:text-base">

                "Imperial Electronics exceeded my expectations in every way!"
              </p>
            </div>
            <div className="w-56 h-1 transition duration-300 transform bg-gray-300 rounded-full group-hover:bg-deep-purple-accent-400 group-hover:scale-110 sm:h-auto sm:w-1" />
            <div className="px-12 py-8 text-center">
              <h6 className="text-4xl font-bold text-deep-purple-accent-400 sm:text-5xl">
                11k
              </h6>
              <p className="text-center md:text-base">

                "We take pride in successfully fulfilling thousands of orders to date."





              </p>
            </div>
          </div>
        </div>
        <p className="mx-auto mb-4 text-gray-600 sm:text-center lg:max-w-2xl lg:mb-6 md:px-16">
          "These genuine reviews, sourced from Google and Google Analytics, stand as a true representation of our customers' satisfaction and trust in our brand."
        </p>
      </div>
      <Footer />
    </>

  );
};