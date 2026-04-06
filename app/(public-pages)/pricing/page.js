import React from "react";
import { seo_pricing } from "@/shared/data/seo-content/content";
import Link from "next/link";
import PriceCards from "@/shared/layout-components/public-comp/PriceCards";
import PriceTable from "@/shared/layout-components/public-comp/PriceTable";

export const metadata = seo_pricing

const PricingPage = () => {
  const benefits = [
    { icon: "🏷️", title: "White-Label Reselling", color: "bg-blue-50", des: "Sell our products under your own brand name. Your clients will never know the source — 100% your identity." },
    { icon: "🔑", title: "Hundreds of License Keys", color: "bg-yellow-50", des: "Get up to 5,000 license keys to distribute to your clients and scale your reseller network effortlessly." },
    { icon: "📊", title: "Massive Database Access", color: "bg-green-50", des: "Access up to 100+ million records to power your clients' data needs across industries and geographies." },
    { icon: "👥", title: "Customer Leads Support", color: "bg-purple-50", des: "We help you get leads so you can focus on closing deals and growing your reseller business faster." },
    { icon: "💰", title: "Chargeable Reseller Activation", color: "bg-orange-50", des: "Activate sub-resellers under your account and charge them your own rate — 100% profit stays with you." },
    { icon: "🎯", title: "Dedicated Support", color: "bg-blue-50", des: "Get direct contact support and a dedicated account manager (Platinum) to help you at every step." },
  ];
  
  const items = [
    "Onboard your clients professionally and introduce them to our platform's full capabilities",
    "Maintain brand guidelines while reselling under your own white-label identity",
    "Provide first-level support to your clients before escalating to our team",
    "Actively promote and grow your reseller network to maximize your earning potential",
    "Follow ethical reselling practices and maintain client confidentiality at all times",
    "Renew your plan annually to keep your reseller account and all client licenses active",
  ];

  return (
    <>
      <section className="relative bg-gradient-to-br from-indigo-50 via-blue-50 to-purple-50 py-20 px-6 text-center overflow-hidden">
        {/* Optional subtle background blur */}
        <div className="absolute inset-0 opacity-30 blur-3xl bg-gradient-to-r from-blue-200 via-purple-200 to-indigo-200"></div>

        <div className="relative max-w-4xl mx-auto">
          <h1 className="font-poppins text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-800 mb-5 leading-tight">
            Reseller{" "}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Partner
            </span>{" "}
            Program
          </h1>

          <p className="text-base sm:text-lg text-gray-600 font-medium mb-10 max-w-2xl mx-auto leading-relaxed">
            Grow your business with our powerful reseller plans — your brand, your profit
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="#reseller-plan" className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
              View Reseller Plans
            </a>

            <a href="#whatsapp-contact" className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-xl font-semibold hover:bg-blue-600 hover:text-white hover:scale-105 transition-all duration-300">
              Contact on WhatsApp
            </a>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-poppins font-extrabold text-gray-800 mb-3">
            Why Become Our{" "}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Reseller Partner?
            </span>
          </h2>

          <p className="text-gray-600 text-base sm:text-lg mb-12">
            Everything you need to build and grow your reselling business
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((item, i) => (
            <div
              key={i}
              className="group relative bg-white/70 backdrop-blur-lg border border-gray-200 rounded-md p-7 text-center shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500"
            >
              {/* Icon Box */}
              <div
                className={`w-16 h-16 ${item.color} rounded-md flex items-center justify-center text-2xl mx-auto mb-5 shadow-md transition`}
              >
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="font-semibold text-lg text-gray-800 mb-2">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-gray-600 leading-relaxed">
                {item.des}
              </p>

              {/* Subtle hover glow */}
              <div className="absolute inset-0 rounded-md bg-gradient-to-r from-blue-500/0 to-indigo-500/0 transition"></div>
            </div>
          ))}
        </div>
      </section>

      <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 py-20 px-6 overflow-hidden">
        {/* Background glow */}
        <div className="absolute inset-0 opacity-30 blur-3xl bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500"></div>

        <div className="relative max-w-5xl mx-auto text-white">
          <div className="max-w-2xl">
            <h2 className="text-3xl sm:text-4xl font-poppins font-extrabold mb-3 leading-tight">
              Partner Commitment
            </h2>

            <p className="text-sm sm:text-base text-white/70 mb-10 leading-relaxed">
              As a ScrapeGenius Reseller Partner, you commit to:
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            {items.map((text, i) => (
              <div
                key={i}
                className="group flex items-start gap-4 bg-white/10 backdrop-blur-md border border-white/20 p-5 rounded-xl shadow-sm hover:shadow-lg hover:bg-white/15 transition-all duration-300"
              >              

                {/* Text */}
                <p className="text-sm sm:text-base text-white/90 leading-relaxed">
                  ✅ {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 max-w-7xl mx-auto" id="reseller-plan">
        <PriceCards/>
      </section>

      <section className="py-20 px-6 bg-gray-50">
        <PriceTable/>
      </section>

      <section className="relative py-24 px-6 bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#1e293b] text-center overflow-hidden" id="whatsapp-contact">
  
        {/* Glow background */}
        <div className="absolute inset-0 flex justify-center">
          <div className="w-[500px] h-[500px] bg-blue-600/20 blur-[120px] rounded-full"></div>
        </div>

        <div className="relative max-w-3xl mx-auto">
          
          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            Interested in Our Reseller Program?
          </h2>

          {/* Subtext */}
          <p className="text-gray-300 text-base sm:text-lg mb-10">
            Talk to our team directly on WhatsApp — we’ll help you choose the right plan
          </p>

          {/* CTA Button */}
          <a
            href="https://wa.me/917987887047"
            target="_blank"
            className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-xl text-lg font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            <span className="text-xl">💬</span>
            Contact Us on WhatsApp
          </a>

          {/* Footer Note */}
          <p className="text-gray-400 text-sm mt-6">
            Usually responds within a few minutes · Mon–Sat, 10am–6pm IST
          </p>
        </div>
      </section>
    </>
  );
};

export default PricingPage;
