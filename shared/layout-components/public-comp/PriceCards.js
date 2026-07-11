"use client";
import { useUserContext } from "@/shared/userContext/userContext";
import axios from "axios";
// Importing necessary libraries and hooks
import Link from "next/link"; // For navigation links
import { useState } from "react"; // React hook for state management
const PriceCards = () => {
  const { priceObj, isUSDPrice, setIsUSDPrice, silverPlans, selectedSilverPlan, setSelectedSilverPlan } = useUserContext();
  
  const [isConverting, setIsConverting] = useState(false);
  
  // async function loadPrice() {
  //   console.log(prices)
  //   let newPriceList = [];
  //   let originalPriceList = [];
  //   setIsConverting(true);
  //   for(let item of dummyRealPrice){
  //     const basePrice = item.price;
  //     console.log(basePrice)
  //     try {
  //       let currency = localStorage.getItem("currency");
  //       // Get user currency
  //       if(!currency){
  //           const locRes = await axios.post("/api/price_convert/location", { });
  //           const locData = await locRes.data;
  //           currency = locData.currency || "INR";
  //           console.log(locData.currency)

  //           localStorage.setItem("currency", currency);

  //       }
  //       // Get exchange rates
  //       console.log(currency);
  //       const rateRes = await axios.post("/api/price_convert/convert", { });
  //       const rateData = await rateRes.data;

  //       console.log(rateData.rates[currency]);

  //       console.log(basePrice)
  //       // Convert price
  //       const rate = rateData.rates[currency] || 1;
  //       const converted = basePrice * rate;

  //       console.log(converted)

  //       // Format with correct symbol
  //       const formatted = new Intl.NumberFormat("en", {
  //           style: "currency",
  //           currency,
  //       }).format(converted);

  //       const filteredNum = formatted.replace(/[^0-9.]/g, "");
  //       const filterSign = formatted.replace(/[0-9.,\s]/g, "");
  //       console.log(filteredNum)
  //       console.log(filterSign)
  //       newPriceList.push({ "plan": item.plan, priceTag: filterSign, price: filteredNum });
  //     } catch (error) {
  //       // setPrice(basePrice);
  //       console.log(error);
  //       newPriceList.push({ "plan": item.plan, priceTag:"₹", price: [item.price] });
  //     } finally {
  //       setIsConverting(false);
  //     }
  //   }
  //   for(let item of dummyActualPrice){
  //     const basePrice = item.price;
  //     console.log(basePrice)
  //     try {
  //       let currency = localStorage.getItem("currency");
  //       // Get user currency
  //       if(!currency){
  //           const locRes = await axios.post("/api/price_convert/location", { });
  //           const locData = await locRes.data;
  //           currency = locData.currency || "INR";
  //           console.log(locData.currency)

  //           localStorage.setItem("currency", currency);

  //       }
  //       // Get exchange rates
  //       console.log(currency);
  //       const rateRes = await axios.post("/api/price_convert/convert", { });
  //       const rateData = await rateRes.data;

  //       console.log(rateData.rates[currency]);

  //       console.log(basePrice)
  //       // Convert price
  //       const rate = rateData.rates[currency] || 1;
  //       const converted = basePrice * rate;

  //       console.log(converted)

  //       // Format with correct symbol
  //       const formatted = new Intl.NumberFormat("en", {
  //           style: "currency",
  //           currency,
  //       }).format(converted);

  //       const filteredNum = formatted.replace(/[^0-9.]/g, "");
  //       const filterSign = formatted.replace(/[0-9.,\s]/g, "");
  //       console.log(filteredNum)
  //       console.log(filterSign)
  //       originalPriceList.push({ "plan": item.plan, priceTag: filterSign, price: filteredNum });
  //     } catch (error) {
  //       // setPrice(basePrice);
  //       console.log(error);
  //       originalPriceList.push({ "plan": item.plan, priceTag:"₹", price: [item.price] });
  //     } finally {
  //       setIsConverting(false);
  //     }
  //   }
  //   handleCurrentPrice(newPriceList);
  //   handleActualPrice(originalPriceList);
  // }

  const loadPrice = ()=>{
    setIsUSDPrice(!isUSDPrice);
  }

  return (
    <div>
      {/* Heading */}
      <h2 className="text-center text-3xl sm:text-4xl font-extrabold text-blue-600 mb-14">
        Choose Your Reseller Plan
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        
        {/* SILVER */}
        <div className="bg-gray-50 hover:shadow-xl hover:scale-105 duration-300 border border-gray-200 rounded-md p-7">
          <span className="inline-flex items-center gap-2 bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm mb-4">
            <span className="w-2 h-2 bg-gray-500 rounded-full"></span>
            Silver
          </span>

          <h3 className="flex justify-between items-center gap-2 bg-gray-100 p-2 mb-2 rounded-full">
            {
              silverPlans.map((item, idx)=>(
                <button key={idx} className={`py-1 px-3 rounded-full capitalize ${item.plan_name === selectedSilverPlan.plan_name ? 'bg-blue-500 text-white' : 'text-blue-500 hover:bg-white'}`} onClick={()=>setSelectedSilverPlan(item)}>{item.plan_name}</button>
              ))
            }
          </h3>
          <p className="text-sm text-gray-500 mb-4">
            {selectedSilverPlan.sub_title}
          </p>

          <div className="flex items-center gap-2 mb-1">
            <p className="line-through text-sm text-gray-400">{priceObj.priceTag}{selectedSilverPlan.old_price}/year</p>
            <span className="bg-red-100 text-red-500 text-xs px-2 py-0.5 rounded-full">
              20% Off
            </span>
          </div>

          <div className="flex items-center justify-between mb-5">
            <p className="text-3xl font-extrabold text-gray-900">
              {priceObj.priceTag}{selectedSilverPlan.price} 
              <span className="text-sm font-medium text-gray-500">/year</span>
            </p>

            <button className="flex items-center gap-1 text-xs text-indigo-600 bg-indigo-100 hover:bg-indigo-200 px-3 py-1 rounded-md" onClick={loadPrice} title={isUSDPrice ? "Switch to INR" : "Switch to USD"}>
              <i className={`ri-exchange-dollar-line inline-block ${isConverting ? "animate-spin" : ""} text-lg`}></i>
              {isUSDPrice ? "Convert to INR" : "Convert to USD"}
            </button>
          </div>

          <div className="bg-gray-200 text-gray-700 text-sm rounded-md px-4 py-3 mb-4">
            • Up to 10 million database access
          </div>

          <Link href={selectedSilverPlan.price_link} target="_blank" className="block text-center w-full bg-gray-200 hover:bg-gray-300 text-gray-800 py-3 rounded-md font-semibold mb-6 transition">
            Buy Silver Plan ↗
          </Link>

          <p className="text-xs text-gray-400 mb-3 uppercase tracking-wide">
            Built for white-label reselling:
          </p>

          <ul className="space-y-2 text-sm text-gray-700">
            {[
              ...selectedSilverPlan.plan_features,
              `Renewal Fee: ${priceObj.priceTag}${priceObj.silverRenewal} per year will be applicable`,
              "Access to all premium features",
              "Full access panel",
              "Direct contact support",
              "Unlimited downloads",
              "Priority support",
              "White-label reselling",
              "30% margin for new reseller partners",
              "Google & Meta Advertising Campaign Setup",
            ].map((item, i) => (
              <li key={i} className="flex gap-2">
                <span>✔</span> {item}
              </li>
            ))}
          </ul>

          <p className="text-xs text-gray-400 mt-6 text-center">
            Annual billing
          </p>
        </div>

        {/* GOLD (FEATURED) */}
        <div className="relative bg-gray-50 hover:shadow-xl hover:scale-105 duration-300 border-2 border-orange-400 rounded-md p-7 shadow-lg">
          {/* Badge */}
          <div className="absolute -top-3 right-4 bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full">
            MOST POPULAR
          </div>

          <span className="inline-flex items-center gap-2 bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-sm mb-4">
            <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
            Gold
          </span>

          <h3 className="text-xl font-bold text-blue-600 mb-1">Gold Plan</h3>
          <p className="text-sm text-gray-500 mb-4">
            Best for growing reseller businesses
          </p>

          <div className="flex items-center gap-2 mb-1">
            <p className="line-through text-sm text-gray-400">{priceObj.priceTag}{priceObj.goldOld}/year</p>
            <span className="bg-red-100 text-red-500 text-xs px-2 py-0.5 rounded-full">
              20% Off
            </span>
          </div>

          <p className="text-3xl font-extrabold text-gray-900 mb-5">
            {priceObj.priceTag}{priceObj.gold}  <span className="text-sm font-medium text-gray-500">/year</span>
          </p>

          <div className="bg-gray-200 text-gray-700 text-sm rounded-md px-4 py-3 mb-4">
            • Up to 50 million database access
          </div>

          <Link href={priceObj.goldLink} target="_blank" className="block text-center w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-md font-semibold mb-6 transition">
            Buy Gold Plan ↗
          </Link>

          <p className="text-xs text-gray-400 mb-3 uppercase tracking-wide">
            Best for growing resellers:
          </p>

          <ul className="space-y-2 text-sm text-gray-700">
            {[
              "Access to all premium features",
              "1,000 License Keys",
              `Renewal Fee: ${priceObj.priceTag}${priceObj.goldRenewal} per year will be applicable`,
              "Full access panel",
              "Direct contact support",
              "Unlimited downloads",
              "High priority support",
              "White-label reselling",
              "50% margin for new reseller partners",
              "Priority onboarding",
              "Google & Meta Advertising Campaign Setup",
              "Customer Support",
            ].map((item, i) => (
              <li key={i} className="flex gap-2">
                <span className="text-orange-500">✔</span> {item}
              </li>
            ))}
          </ul>

          <p className="text-xs text-gray-400 mt-6 text-center">
            Annual billing
          </p>
        </div>

        {/* PLATINUM */}
        <div className="bg-gray-50 hover:shadow-xl hover:scale-105 duration-300 border border-gray-200 rounded-md p-7">
          <span className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm mb-4">
            <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
            Platinum
          </span>

          <h3 className="text-xl font-bold text-blue-600 mb-1">
            Platinum Plan
          </h3>
          <p className="text-sm text-gray-500 mb-4">
            Ultimate reseller package
          </p>

          <div className="flex items-center gap-2 mb-1">
            <p className="line-through text-sm text-gray-400">{priceObj.priceTag}{priceObj.platinumOld}/year</p>
            <span className="bg-red-100 text-red-500 text-xs px-2 py-0.5 rounded-full">
              25% Off
            </span>
          </div>

          <p className="text-3xl font-extrabold text-gray-900 mb-5">
            {priceObj.priceTag}{priceObj.platinum}  <span className="text-sm font-medium text-gray-500">/year</span>
          </p>

          <div className="bg-gray-200 text-gray-700 text-sm rounded-md px-4 py-3 mb-4">
            • Up to 100+ million database access
          </div>

          <Link href={priceObj.platinumLink} target="_blank" className="block text-center w-full bg-gray-200 hover:bg-gray-300 text-gray-800 py-3 rounded-md font-semibold mb-6 transition">
            Buy Platinum Plan ↗
          </Link>

          <p className="text-xs text-gray-400 mb-3 uppercase tracking-wide">
            Ultimate reseller package:
          </p>

          <ul className="space-y-2 text-sm text-gray-700">
            {[
              "Access to all premium features",
              "5,000 License Keys",
              `Renewal Fee: Not applicable`,
              "12 Free Sub-reseller Account",
              "Full access panel",
              "Direct contact support",
              "Unlimited downloads",
              "Dedicated account manager",
              "White-label reselling",
              "Early access to new features",
              "Google & Meta Advertising Campaign Setup",
              "Customer Support",
            ].map((item, i) => (
              <li key={i} className="flex gap-2">
                <span className="text-purple-500">✔</span> {item}
              </li>
            ))}
          </ul>

          <p className="text-xs text-gray-400 mt-6 text-center">
            Annual billing
          </p>
        </div>
      </div>

      {/* Footer Note */}
      {/* <p className="text-center text-sm text-gray-500 mt-10">
            📌 Note: Monthly subscription plans are also available. Contact on WhatsApp for details.
      </p> */}
    </div>
  );
};
export default PriceCards;
