import Link from 'next/link';
import React from 'react'

const Content = ({ layout = true, title, image, description }) => {
    return (
        <div className="container mx-auto">
            {layout ? (
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-6 mb-20">
                    <div className="py-4 px-6">
                        <h3 className="text-2xl font-bold mb-4 flex items-center space-x-3">
                            <i className="ri-price-tag-3-fill text-blue-500" />
                            <span>{title}</span>
                        </h3>
                        <p className="text-lg text-gray-700 leading-relaxed">{description}</p>
                    </div>
                    <div className="p-4">
                        <img
                            src={image}
                            alt={title}
                            className="rounded-md shadow-md transform transition-transform duration-300 hover:scale-105"
                        />
                    </div>
                </div>
            ) : (
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-6 my-20">
                    <div className="p-4">
                        <img
                            src={image}
                            alt={title}
                            className="rounded-md shadow-md transform transition-transform duration-300 hover:scale-105"
                        />
                    </div>
                    <div className="py-4 px-6">
                        <h3 className="text-2xl font-bold mb-4 flex items-center space-x-3">
                            <i className="ri-price-tag-3-fill text-blue-500" />
                            <span>{title}</span>
                        </h3>
                        <p className="text-lg text-gray-700 leading-relaxed">{description}</p>
                    </div>
                </div>
            )}
        </div>
    );
};

const Reseller = () => {
    const contentData = [
        // {
        //     layout: true,
        //     image: "https://img.freepik.com/free-vector/gradient-abstract-technology-landing-page_23-2149069933.jpg?semt=ais_hybrid",
        //     title: "White Label Website",
        //     description: "Effortlessly launch a professional white-label website equipped with a robust admin panel for seamless management and branding customization."
        // },
        {
            layout: false,
            image: "https://img.freepik.com/free-vector/flat-design-reseller-illustration_23-2149486212.jpg?t=st=1733736192~exp=1733739792~hmac=4eb2901b6226b54557e7dbc1dacb7845c8d1b0f595053fa2b1c7458a9b491eae&w=1060",
            title: "Sign Up Resellers",
            description: "Build and empower your reseller network, enabling recurring revenue streams from daily, weekly, or monthly orders with minimal effort."
        },
        {
            layout: true,
            image: "/assets/img/access.png",
            title: "100+ Access codes",
            description: "Get a reseller plan with 100+ access codes, allowing you to sell our premium product to upto 100 or more customers. Start earning profits today with zero hassle!"
        },
        {
            layout: false,
            image: "https://img.freepik.com/free-vector/modern-comparison-price-plan-table-template-presentation_1017-55056.jpg?semt=ais_hybrid",
            title: "Manage Pricing",
            description: "Set your own selling price as a reseller and maximize profits with complete pricing flexibility. Sell at any cost you choose!"
        },
        {
            layout: true,
            image: "https://img.freepik.com/free-vector/setup-concept-illustration_114360-5023.jpg?semt=ais_hybrid",
            title: "Quick Website Setup",
            description: "Go live within 24 hours! Simply point your domain to our provided IP, and we’ll handle the rest for a hassle-free setup experience."
        },
        // {
        //     layout: false,
        //     image: "https://img.freepik.com/free-vector/subscriber-concept-illustration_114360-3895.jpg?semt=ais_hybrid",
        //     title: "Subscription Feature",
        //     description: "Offer flexible subscription options to your customers, ensuring they can easily access your services on a recurring basis."
        // },
        {
            layout: false,
            image: "https://img.freepik.com/free-vector/flat-design-illustration-customer-support_23-2148887720.jpg?t=st=1742450757~exp=1742454357~hmac=3f296e9a6ac80455ee1bbc7a29b29cb978ebac56728195184ec208ba0115947d&w=826",
            title: "Chat Support",
            description: 
            <span>
                Get 24/7 chat support for instant assistance anytime. Our team is always available to help you with any queries! <br/>
                <Link href={"/contact"} className='inline-block bg-blue-500 hover:bg-blue-600 text-sm text-white font-medium py-3 px-4 rounded-md mt-2'>
                    <i className='ri-phone-fill text-base'/>{" "}
                    24/7 Support
                </Link>
            </span>
        }
    ];
  return (
    <>
        {/* Section: Top Header Section Begin */}
        <header className='py-14 lg:pt-28 lg:pb-20 bg-gray-100'>
          <div className='w-full text-center px-4 lg:px-16'>
            <h1 className='text-3xl lg:text-[64px] font-semibold mb-4 lg:mb-12 text-black-800 w-full'>Reseller Plan</h1>
            <h3 className='text-xl font-medium text-gray-600'>Last updated December 24, 2024</h3>
          </div>
        </header>
        {/* Section: Top Header Section End */}

        <div className='bg-white py-20'>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="space-y-6">
                    <section className='mb-20 p-4'>
                        <h1 className="text-3xl font-bold mb-10 text-center text-blue-600">What You'll Receive</h1>
                        <ul className="list-disc list-inside space-y-2">
                            <li>Sell licenses at any price you choose</li>
                            <li>Upload your branding details such as logo, contact information, and address</li>
                        </ul>
                    </section>

                    <section className='my-20'>
                        <h1 className="text-3xl font-bold text-center mb-10 text-blue-600">Check Out the Features</h1>
                            
                        {
                            contentData.map(({layout, title, description, image}, ind)=>(
                                <Content layout={layout} key={ind} title={title} image={image} description={description}/>
                            ))
                        }

                    </section>
                </div>
            </div>
        </div>
    </>
  )
}

export default Reseller