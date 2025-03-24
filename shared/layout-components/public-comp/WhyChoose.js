import React from "react";

const WhyChooseUs = () => {
  const features = [
    {
      title: "Advanced Scraping Technology",
      description:
        "Effortlessly scrape data from Google Maps, websites, and directories with precision.",
      icon: <i className="ri-tools-line text-blue-400 lg:text-4xl text-3xl" />,
    },
    {
      title: "Secure & Reliable",
      description:
        "We ensure top-tier data privacy and protection for all your scraping projects.",
      icon: <i className="ri-lock-line text-blue-400 lg:text-4xl text-3xl" />,
    },
    {
      title: "24/7 Customer Support",
      description:
        "Our global team is always ready to assist you with any query or concern.",
      icon: <i className="ri-customer-service-line text-blue-400 lg:text-4xl text-3xl" />,
    },
    {
      title: "Built-in Proxy Integration",
      description:
        "Avoid IP blocks and CAPTCHAs with built-in advanced anti-scraping technology.",
      icon: <i className="ri-shield-line text-blue-400 lg:text-4xl text-3xl" />,
    },
    {
      title: "Easy-to-Use Interface",
      description:
        "Start scraping instantly with a simple and intuitive user interface.",
      icon: <i className="ri-clipboard-line text-blue-400 lg:text-4xl text-3xl" />,
    },
    {
      title: "Cloud-Based Platform",
      description:
        "Access your tools and scraped data anywhere, anytime, with seamless cloud support.",
      icon: <i className="ri-cloud-line text-blue-400 lg:text-4xl text-3xl" />,
    },
  ];

  return (
    <section className="py-14 lg:py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl lg:text-3xl font-bold text-center mb-16">
          <span className="text-blue-500">Why 30,000</span>+ Customers Choose Us
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-md shadow-md hover:shadow-[0_0_24px_0_rgba(48,90,191,0.14)] transition-shadow duration-300 lg:h-[174px] p-[26px_30px] flex flex-col justify-between"
            >
              {/* Container for Title and Icon */}
              <div className="flex items-center justify-between space-x-4">
                <h3 className="lg:text-xl text-lg font-semibold text-gray-800">
                  {feature.title}
                </h3>
                <div className="shrink-0">{feature.icon}</div>
              </div>
              {/* Description Text Below Icon and Title */}
              <p className="text-gray-500 mt-2 lg:text-base text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
