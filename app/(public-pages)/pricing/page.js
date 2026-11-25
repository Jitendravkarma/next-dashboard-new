import React from "react";
import { seo_pricing } from "@/shared/data/seo-content/content";
import PriceCards from "@/shared/layout-components/public-comp/PriceCards";
import PriceTable from "@/shared/layout-components/public-comp/PriceTable";
import PriceCredits from "@/shared/layout-components/public-comp/PriceCredits";

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

  const features = [
    "Unlimited tool access",
    "Custom Customize",
    "Custom integrations",
    // "Dedicated account manager",
    "Priority 24/7 support",
    "API accesses",
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
        <div className="mt-10 w-full">
          <div className="relative overflow-hidden rounded-xl bg-slate-900 p-6 sm:p-8 shadow-xl">

            {/* Decorative background */}
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-blue-500/10 blur-3xl" />

            <div className="relative grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-center">

              {/* Left Content */}
              <div className="lg:col-span-5">
                <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-blue-400">
                  <span className="h-2 w-2 rounded-full bg-blue-400" />
                  Need Something Bigger?
                </div>

                <h2 className="text-3xl font-bold text-white sm:text-4xl">
                  Enterprise 
                  <span className="text-blue-500"> Solution</span>
                </h2>

                <p className="mt-3 max-w-md text-sm leading-6 text-slate-400">
                  Get a customized solution designed for your
                  organization's unique needs. Scale without limits
                  with our Enterprise plan.
                </p>

                <div className="mt-6">
                  <p className="text-sm text-slate-400">Enterprise Pricing</p>
                  <p className="mt-1 text-3xl font-bold text-white">
                    Custom Pricing
                  </p>
                </div>
              </div>

              {/* Features */}
              <div className="lg:col-span-4">
                <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-300">
                  Everything included
                </h3>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-1">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-400/10">
                        <svg
                          className="h-3 w-3 text-blue-400"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="3"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <span className="text-sm text-slate-300">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="lg:col-span-3">
                <div className="rounded-xl border border-slate-700 bg-slate-800/70 p-5 text-center">
                  <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-400/10">
                    <svg
                      className="h-6 w-6 text-blue-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="1.8"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 21h18M5 21V7l8-4v18m6 0V11l-6-4M9 9v.01M9 12v.01M9 15v.01M9 18v.01M15 14v.01M15 17v.01"
                      />
                    </svg>
                  </div>

                  <h3 className="text-lg font-bold text-white">
                    Let's Talk Business
                  </h3>

                  <p className="mt-2 text-xs leading-5 text-slate-400">
                    Contact our team to discuss a plan
                    that fits your requirements.
                  </p>

                  <a
                    href="/contact"
                    className="mt-5 block w-full rounded-lg bg-blue-500 px-5 py-3 text-center text-sm font-semibold text-white transition-all duration-300 hover:bg-blue-400 hover:shadow-lg hover:shadow-blue-500/20"
                  >
                    Contact Sales →
                  </a>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <PriceTable/>
        </div>
      </section>
      
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <PriceCredits/>
        </div>

        <div className="mt-4 flex items-center justify-center gap-2 text-xs text-gray-600">
          <span className="text-green-600">✓</span>
          <span>
            All prices and plans exclusive <strong className="text-gray-900">18% GST</strong>
          </span>
        </div>
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
