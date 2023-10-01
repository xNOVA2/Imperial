import { CreditCard, Filter, MessagesSquare, ShieldCheck, ThumbsUp, Truck } from "lucide-react";

export default function Feature() {
    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="grid row-gap-8 sm:row-gap-0 sm:grid-cols-2 lg:grid-cols-3">
                <div className="p-8 border-b sm:border-r">
                    <div className="max-w-md text-center">
                        <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-16 sm:h-16">
                            <MessagesSquare size={40} />
                        </div>
                        <h6 className="mb-2 font-semibold leading-5">Chat Support 24/7</h6>
                        <p className="mb-3 text-sm text-gray-900">
                            Our dedicated 24-hour chat support team is here to assist you anytime, day or night.
                        </p>
                    </div>
                </div>
                <div className="p-8 border-b lg:border-r">
                    <div className="max-w-md text-center">
                        <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-16 sm:h-16">
                            <Truck size={40} />
                        </div>
                        <h6 className="mb-2 font-semibold leading-5">Fast Delivery</h6>
                        <p className="mb-3 text-sm text-gray-900">
                            "Enjoy lightning-fast delivery, because we know you can't wait to get your hands on your new favorites!"
                        </p>
                    </div>
                </div>
                <div className="p-8 border-b sm:border-r lg:border-r-0">
                    <div className="max-w-md text-center">
                        <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-16 sm:h-16">
                            <CreditCard size={40} />
                        </div>
                        <h6 className="mb-2 font-semibold leading-5">Secure Payment</h6>
                        <p className="mb-3 text-sm text-gray-900">
                        "Rest easy with our secure payment options, ensuring your transactions are protected every step of the way."
                        </p>
                    </div>
                </div>
                <div className="p-8 border-b lg:border-b-0 lg:border-r">
                    <div className="max-w-md text-center">
                        <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-16 sm:h-16">
                            <Filter size={40} />
                        </div>
                        <h6 className="mb-2 font-semibold leading-5">Filter Functionality </h6>
                        <p className="mb-3 text-sm text-gray-900">
                        Discover a seamless shopping experience with our advanced filter functionality, allowing you to easily refine your search and find products that match your preferences and budget.
                        </p>
                    </div>
                </div>
                <div className="p-8 border-b sm:border-b-0 sm:border-r">
                    <div className="max-w-md text-center">
                        <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-16 sm:h-16">
                            <ThumbsUp size={40} />
                        </div>
                        <h6 className="mb-2 font-semibold leading-5">Unbeatable Rates</h6>
                        <p className="mb-3 text-sm text-gray-900">
                        "Explore unbeatable rates on our products, providing you with incredible value for your purchases."
                        </p>
                    </div>
                </div>
                <div className="p-8">
                    <div className="max-w-md text-center">
                        <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-16 sm:h-16">
                            <ShieldCheck size={40} />
                        </div>
                        <h6 className="mb-2 font-semibold leading-5">Best Quality </h6>
                        <p className="mb-3 text-sm text-gray-900">
                        "Experience superior quality and value that sets us apart from other stores."
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};