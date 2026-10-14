import React from "react";
import { seo_pricing } from "@/shared/data/seo-content/content";
import PriceCards from "@/shared/layout-components/public-comp/PriceCards";
import PriceTable from "@/shared/layout-components/public-comp/PriceTable";
import PriceCredits from "@/shared/layout-components/public-comp/PriceCredits";

export const metadata = seo_pricing

const PricingPage = () => {

  return (
    <>

      <section className="py-20 px-6 max-w-7xl mx-auto" id="reseller-plan">
        <PriceCards singleuser={true}/>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <PriceTable singleuser={true}/>
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
