import { ComapanyBar, Navbar } from "@/components/Export";
import Footer from "@/components/Footer/Footer";


export default function page() {
  return (
        <>
        <Navbar/>
        <ComapanyBar/>
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="max-w-xl sm:mx-auto lg:max-w-2xl">
              <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                
                <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
                  <span className="relative inline-block">
                    <svg
                      viewBox="0 0 52 24"
                      fill="currentColor"
                      className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                    >
                      <defs>
                        <pattern
                          id="70326c9b-4a0f-429b-9c76-792941e326d5"
                          x="0"
                          y="0"
                          width=".135"
                          height=".30"
                        >
                          <circle cx="1" cy="1" r=".7" />
                        </pattern>
                      </defs>
                      <rect
                        fill="url(#70326c9b-4a0f-429b-9c76-792941e326d5)"
                        width="52"
                        height="24"
                      />
                    </svg>
                    <span className="relative">The</span>
                  </span>{' '}
                  Privacy Policy
                </h2>
                <p className="text-base text-gray-700 md:text-lg">
                we are committed to protecting your personal information and your right to privacy. If you have any questions or concerns about our policy or our practices with regards to your personal information, please contact us.
                </p>
              </div>
            </div>
            <div className="max-w-screen-xl sm:mx-auto">
              <div className="grid grid-cols-1 gap-16 row-gap-8 lg:grid-cols-2">
                <div className="space-y-8">
                  <div>
                    <p className="mb-4 text-xl font-medium">
                    What Information Do We Collect?
                    </p>
                    <p className="text-gray-700">
                    We collect personal information that you provide to us such as name, address, contact information, passwords, and security data, as well as payment information. We collect personal information that you voluntarily provide to us when expressing an interest in obtaining information about us or our products and services when participating in activities on the Services, or otherwise contacting us.
                      <br />
                      <br />
                      The personal information that we collect depends on the context of your interactions with us and the Services, the choices you make, and the products and features you use.
                    </p>
                  </div>
                  <div>
                    <p className="mb-4 text-xl font-medium">
                    How Do We Use Your Information?
                    </p>
                    <p className="text-gray-700">
                    We use personal information collected via our Services for a variety of business purposes described below. We process your personal information for these purposes in reliance on our legitimate business interests ("Business Purposes"), in order to enter into or perform a contract with you ("Contractual"), with your consent ("Consent"), and/or for compliance with our legal obligations ("Legal Reasons"). 
                      
                    </p>
                  </div>
                  <div>
                    <p className="mb-4 text-xl font-medium">
                    Will Your Information Be Shared With Anyone?
                    </p>
                    <p className="text-gray-700">

Consent: We may process your data if you have given us specific consent to use your personal information for a specific purpose.
Performance of a Contract: Where we have entered into a contract with you, we may process your personal information to fulfill the terms of our contract.
Legal Obligations: We may disclose your information where we are legally required to do so to comply with applicable law, governmental requests, a judicial proceeding, court order, or legal processes, such as in response to a court order or a subpoena (including in response to public authorities to meet national security or law enforcement requirements.
                    </p>
                  </div>
                </div>
                <div className="space-y-8">
                  <div>
                    <p className="mb-4 text-xl font-medium">
                    How Do We Keep Your Information Safe?
                    </p>
                    <p className="text-gray-700">
                    We have implemented appropriate technical and organizational security measures designed to protect the security of any personal information we process. However, despite our safeguards and efforts to secure your information, no electronic transmission over the Internet or information storage technology can be guaranteed to be 100% secure.
                  
                    </p>
                  </div>
                  <div>
                    <p className="mb-4 text-xl font-medium">
                    How Long Do We Keep Your Information?
                    </p>
                    <p className="text-gray-700">
                    We will retain your personal information only for as long as is necessary for the purposes set out in this Privacy Policy. We will retain and use your information to the extent necessary to comply with our legal obligations, resolve disputes, enforce our policies, and protect our legal rights.
                
                    </p>
                  </div>
                  <div>
                    <p className="mb-4 text-xl font-medium">
                    Do We Use Cookies And Other Tracking Technologies?
                    </p>
                    <p className="text-gray-700">
                    We may use cookies and similar tracking technologies (like web beacons and pixels) to access or store information. Specific information about how we use such technologies and how you can refuse certain cookies is set out in our Cookie Policy.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
      <Footer/>
        </>
       
      
  )
}
