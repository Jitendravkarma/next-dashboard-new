"use client"
import { useEffect, memo, useState, useRef } from 'react';
import countryList from './Country';
import { useUserContext } from '@/shared/userContext/userContext';
import Link from 'next/link';
import { Download } from './DownloadBtn';
import DatePicker from 'react-datepicker';
import axios from 'axios';

const Logo = ()=>{
  return(
    <p>
      <img src={"/uploads/dark.png"} className='mx-auto'/>
    </p>
  )
}

const HowtoUse = ()=>{
  return(
      <div className='hidden md:block'>
          <p className="text-red-400 text-xs -mt-2 mb-5">
              <span className="font-semibold">Note:</span> Link your phone device to your PC to manage calls & text msg.
          </p>
          <div className="mt-4">
              <h3 className="text-sm text-gray-700 text-center italic">How to link device?</h3>
              <div className="flex justify-center gap-4 mt-4">
                  <Link 
                      href={"https://www.youtube.com/watch?v=8qe_olpV0KI"}
                      target='_blank'
                      className="px-3 py-2 text-sm text-center inline-flex items-center text-red-500 rounded-md hover:bg-red-600 hover:text-white gap-2 transition-all duration-300 ease-in-out" 
                      title="Watch video tutorial"
                  >
                      <i className="ri-youtube-fill"></i>
                      Watch video
                      <i className="ri-arrow-right-s-line"></i>
                  </Link>
                  <div className="border-r-2 border-red-200"/>
                  <Link 
                      href={"https://www.microsoft.com/en-in/windows/sync-across-your-devices?msockid=2236564d1dbd68f81f7b43791cae69e5"}
                      target='_blank'
                      className="px-3 py-2 text-sm text-center inline-flex items-center border border-transparent hover:border-gray-700 rounded-md gap-2 transition-all duration-300 ease-in-out" 
                      title="Read the official docs"
                  >
                      <i className="ri-file-text-line"></i>
                      Read Docs
                      <i className="ri-arrow-right-s-line"></i>
                  </Link>
              </div>
          </div>
      </div>
  )
}

const validatePhoneNum = (number, url, countryCode, message)=>{
  if(!countryCode){
      alert(`Please select country!`);
  }
  else {
      const filterCountry = countryList.find(cnt=>cnt.countryCode === countryCode);
      if(filterCountry.diffReg){
          const validatePhone = number.match(filterCountry.diffReg)
          if(validatePhone && validatePhone[1]){
              let a = document.createElement("a");
              a.href = `${url}${url === "sms:" ? "" : countryCode}${validatePhone[1]}${url === "sms:" ? "" : `?text=${encodeURIComponent(message)}`}`;
              document.body.appendChild(a);
              a.target="_blank"
              a.click();
              document.body.removeChild(a);
          }
          else {
              alert(`This is not a valid phone number for the ${filterCountry.cnt} country.`)
          }
      }
  }
}


const sections = [
  {
    title: `1. Introduction, Parties and Acceptance`,
    content: `
This Reseller Partner Agreement is between Neuralnetics Technologies Pvt. Ltd. (the "Company") and the individual, firm or organization (the "Reseller") that fills in its details in the table at the end of this agreement and signs or accepts it. Under it, the Reseller becomes a reseller partner for the Company's ScrapeGenius software.

Before becoming a reseller partner, buying a partner plan or starting to sell ScrapeGenius, the Reseller must read this entire agreement carefully. Signing it, accepting it online or starting to use the partner program means the Reseller has accepted all its terms.
`
  },
  {
    title: `2. Definitions`,
    content: `
• Company: Neuralnetics Technologies Pvt. Ltd., Indore, Madhya Pradesh, India.

• Software: The ScrapeGenius Windows desktop application, its updates and related services.

• Reseller: The partner approved by the Company who sells or refers the Software under this agreement.

• Customer: The individual, firm or organization that buys a license for the Software through the Reseller.

• Partner Plan: The reseller plans set by the Company (Silver, Gold and Platinum), the details of which are given on the Company's website or in written notice.

• End User Agreement: The Company's ScrapeGenius license agreement, which every Customer must accept before the Software is activated.

• Commission: The referral commission payable to the Reseller under this agreement.

• Brand Materials: The ScrapeGenius name, logo, demos, presentations and other marketing material.
`
  },
  {
    title: `3. Appointment and Relationship`,
    content: `
• The Company grants the Reseller a non-exclusive, non-transferable and revocable permission to sell and refer the Software in line with the selected Partner Plan.

• The Reseller has no exclusive right over any territory, city or customer segment unless the Company has given it in writing.

• The Reseller is an independent business. This agreement does not create a partnership, employment, agency or joint venture between the Company and the Reseller. The Reseller cannot enter into any contract on the Company's behalf or bind the Company to any obligation.

• The Reseller will bear its own costs, staff and marketing expenses.
`
  },
  {
    title: `4. Partner Plans and Tiers`,
    content: `
• The Company offers three Reseller Partner Plans: Silver, Gold and Platinum. The price, benefits and terms of each plan are given on the Company's website (scrapegenius.com) or in the Company's written notice.

• The Reseller's Partner Plan determines its commission rate and benefits. To change the plan (upgrade or downgrade), the Reseller must contact the Company's support team.

• The Partner Plan fee must be paid in full in advance, and applicable GST is payable separately. When the Partner Plan ends, the Reseller must renew it; the renewal price will be the new price in effect at that time.

• The Company may change Partner Plan prices and terms for new sales; this does not affect the current period of plans already paid for.
`
  },
  {
    title: `5. Commission and Payment`,
    content: `
• If a Customer comes through the Reseller and buys a Single User plan or a Reseller plan, the Reseller may be eligible for a referral commission as per the following table.

• Commission on the Single User plan is up to 10%; the exact rate will be set and communicated by the Company.

• Commission is calculated on the plan amount actually received by the Company from the Customer, excluding GST.

• Commission becomes payable only after the Company has received the Customer's full payment and the Customer has accepted the End User Agreement.

• If a refund is given to the Customer or the payment is reversed through a chargeback, the commission paid or payable on it will be cancelled or adjusted against future commission.

• Which Customer a commission is payable on will be decided from the Company's records. The Reseller must give the Customer's details to the Company before the purchase.

• The timing and method of commission payment will be communicated by the Company in writing. The Reseller must provide bills and documents, including GST documents if registered. Applicable TDS will be deducted as per law. The Reseller is responsible for its own taxes.

• Commission on renewals is payable only if the Company has clearly stated it in the Partner Plan or in a written notice.

Referral Commission Rates:

| Plan | Referral Commission |
|---|---|
| Single User Plan | Up to 10% |
| Reseller Partner Plan – Silver | 15% |
| Reseller Partner Plan – Gold | 20% |
| Reseller Partner Plan – Platinum | 25% |
`
  },
  {
    title: `6. Reseller Obligations`,
    content: `
• Before selling the Software to any Customer, the Reseller must inform them of the End User Agreement and ensure that the Customer accepts it before activation.

• The Reseller will give only accurate and Company-approved information about the Software. It will not make any promise to a Customer that is not in the End User Agreement, such as a lifetime license, a guarantee of leads or sales, or a guarantee that public data is 100% accurate.

• The Reseller will tell Customers that the Software is a B2B lead generation tool that extracts publicly available data.

• The Reseller will sell only at the Company's price list. Discounts may be given only if the Company has permitted them in writing.

• Giving Customers first-level help, such as information and demos, is the Reseller's responsibility. Technical issues will be passed to the Company's support team.

• The Reseller will comply with all applicable laws, including TRAI/NDNC (DND) rules and consumer and advertising laws.

• The Reseller will keep its registered contact details, including phone, email and WhatsApp, up to date.
`
  },
  {
    title: `7. Prohibited Conduct`,
    content: `
The Reseller shall not:

• Sell or share one license among several Customers or PCs, or use or distribute cracks, patches or unauthorized keys.

• Mislead Customers, make false claims, or present itself as the Company's representative beyond the permission given in this agreement.

• Promote the Software through spam, illegal calls or messages, or any unlawful marketing.

• Modify, repackage or sell the Software under its own name without the Company's written permission.

• Collect payment from Customers on the Company's behalf unless the Company has permitted this in writing.

• Create names, domains or social media accounts similar to ScrapeGenius without the Company's written permission.

• Use abusive language or foul words towards the Company, its support team or staff.
`
  },
  {
    title: `8. Customers, Support, Renewals and Refunds`,
    content: `
• The Software license is directly between the Customer and the Company. The End User Agreement applies to the Customer, and the Company's contract with the Customer cannot be changed through the Reseller.

• The Company may contact Customers directly, including for renewal notices by WhatsApp, phone call, email and Software pop-up, technical support and account-related messages.

• The Customer's renewal will follow the Company's renewal policy. When the license period ends, the Software stops working, and renewal is only at the new price then in effect.

• Refunds will follow the refund policy in the End User Agreement entirely. The Reseller will not make any refund promise to a Customer that differs from that policy.

• The Company's decision on matters of payment, invoices and refunds will be final, unless this agreement says otherwise.
`
  },
  {
    title: `9. Intellectual Property and Brand Use`,
    content: `
The ScrapeGenius name, logo, software code, design and all related intellectual property belong to the Company.

The Reseller has a limited, non-transferable permission to use Brand Materials only to promote and sell the Software under this agreement, in the form provided by the Company. The Reseller may not alter Brand Materials or use them in a misleading way.

All goodwill arising from the use of the brand will belong to the Company. When this agreement ends, the Reseller must stop using Brand Materials.
`
  },
  {
    title: `10. Data and Confidentiality`,
    content: `
• The Reseller will keep the Company's confidential information, such as partner terms, prices, rates, demo access and support processes, confidential and use it only for the purposes of this agreement. This obligation continues after the agreement ends.

• Any personal information of Customers that comes to the Reseller will be used only for sales and support, and handled in line with applicable laws.

• The Reseller acknowledges that, as per the End User Agreement, the Company may keep a copy of the data scraped by a Customer and use or share it on the terms stated there.

• The Company will keep limited information about the Reseller, such as name, phone, email and GSTIN, for license verification, commission and support, and will use it only for those purposes.
`
  },
  {
    title: `11. Term and Termination`,
    content: `
• This agreement starts on the date of acceptance and runs for the period of the Reseller's Partner Plan. If the Partner Plan is renewed, the agreement continues. If it is not renewed, partner status ends automatically.

• Either party may end this agreement by giving 30 days' written notice.

• The Company may suspend or terminate this agreement without prior notice if the Reseller breaches any term, misleads Customers, engages in fraud or unlawful marketing, sells unauthorized keys, misuses the brand, or behaves abusively.

• After termination, the Reseller will stop new sales and stop using Brand Materials. Commission on payments actually received by the Company, and not reversed, before termination will be paid; no commission is payable on sales made after termination.

• The Partner Plan fee is normally non-refundable unless the Company has said otherwise in writing. No refund will be given where the agreement is terminated for breach.

• Existing Customers' licenses continue directly with the Company after termination. The Company may handle their support and renewals itself, or migrate them to the Company or another partner. The Reseller will cooperate in this.

• Sections 5, 7, 9, 10, 12 and 13 continue to apply after termination.
`
  },
  {
    title: `12. Disclaimer, Liability and Indemnity`,
    content: `
• The Software is provided "as is." The Company does not guarantee that the Software will run without errors, extract data from every website, or that data will be complete and accurate. There is no guarantee of the Reseller's sales, earnings or commission.

• To the maximum extent permitted by law, the Company is not liable for any indirect or consequential loss, such as loss of business or profit.

• In no event will the Company's total liability exceed the amount the Reseller actually paid for the Partner Plan concerned.

• The Reseller will indemnify and hold the Company harmless against any claim, loss or expense, including legal fees, arising from breach of this agreement, incorrect information or promises given to Customers, or unlawful marketing.
`
  },
  {
    title: `13. Governing Law and General`,
    content: `
• Governing Law: This agreement is governed by the laws of India. Any dispute will first be attempted to be resolved through mutual discussion. If it is not resolved within 30 days, only the courts at Indore, Madhya Pradesh, will have exclusive jurisdiction.

• Entire Agreement: This agreement is the complete understanding between the Company and the Reseller and overrides all earlier emails, WhatsApp messages or verbal promises.

• Changes to this Agreement: The Company may change this agreement. Notice of a change will be given by email or WhatsApp, and continuing to use the partner program after that means the Reseller has accepted the new agreement.

• Assignment: The Reseller may not transfer this agreement or its rights to anyone else without the Company's written permission.

• Force Majeure and Severability: The Company is not responsible for delay or disruption caused by events beyond its control, such as natural disasters or major internet or server outages. If any part of this agreement is held invalid by a court, the rest of the agreement remains valid as before.

• Language: This agreement is provided in both Hindi and English. If there is any difference between the two versions, the English version will prevail.
`
  },
  {
    title: `14. Contact Details and Signatures`,
    content: `
For any question about this agreement, contact the Company:

Company: Neuralnetics Technologies Pvt. Ltd.

Address: 271, Avantika Nagar, Scheme No. 51, Indore, Madhya Pradesh

Phone / WhatsApp: +91 7987887047, 0731-4001313

Email: [Add support email here]

Website: scrapegenius.com

Reseller Declaration:

I have read and understood this Reseller Partner Agreement in full. I agree to all its terms and will sell ScrapeGenius in accordance with them.

Reseller Details:

• Reseller Name / Firm: ______________________________

• GSTIN (if any): ____________________________________

• Address: __________________________________________

• Phone / Email: _____________________________________

• Partner Plan (Silver / Gold / Platinum): ______________

Signatures:

Company: Neuralnetics Technologies Pvt. Ltd.

• Name: _____________________________________________

• Designation: _______________________________________

• Signature: _________________________________________

• Date: _____________________________________________

Reseller:

• Name: _____________________________________________

• Designation: _______________________________________

• Signature: _________________________________________

• Date: _____________________________________________
`
  }
];

function Icon({ name, className = "" }) {
  return (
    <i
      className={`ri-${name} ${className}`}
      aria-hidden="true"
    />
  );
}

export function UserAgreement({
  open = true,
  isUpdating,
  onAccept = () => {},
  onClose = () => {},
}) {
  const contentRef = useRef(null);
  const [progress, setProgress] = useState(0);
  const [hasScrolledToEnd, setHasScrolledToEnd] = useState(false);
  const [agreed, setAgreed] = useState(false);

  useEffect(() => {
    if (!open) return;

    const element = contentRef.current;
    if (!element) return;

    const updateProgress = () => {
      const maxScroll =
        element.scrollHeight - element.clientHeight;

      const percentage =
        maxScroll <= 1
          ? 100
          : Math.min(
              100,
              Math.round((element.scrollTop / maxScroll) * 100)
            );

      setProgress(percentage);

      if (
        maxScroll <= 1 ||
        element.scrollTop + element.clientHeight >=
          element.scrollHeight - 8
      ) {
        setHasScrolledToEnd(true);
      }
    };

    updateProgress();

    element.addEventListener("scroll", updateProgress, {
      passive: true,
    });

    return () => {
      element.removeEventListener("scroll", updateProgress);
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    const handleKeyDown = (event) => {
      if (event.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open, onClose]);

  if (!open) return null;

  const canAccept = hasScrolledToEnd && agreed;

  const handleAccept = () => {
    if (!canAccept) {
      onClose();
      return
    }
    
    onAccept();
  };

  return (
    
  
<div
  className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 p-2 sm:p-4"
  onMouseDown={(event) => {
    if (event.target === event.currentTarget) onClose();
  }}
>
  <section
    role="dialog"
    aria-modal="true"
    aria-labelledby="agreement-title"
    className="flex max-h-[82dvh] min-h-0 w-full max-w-lg flex-col overflow-hidden rounded-md border border-slate-300 bg-white shadow-lg"
  >
    {/* Header */}
    <header className="shrink-0 border-b border-indigo-500 bg-indigo-500 px-3 py-2.5 text-white sm:px-4 sm:py-3">
      <div className="flex items-start justify-between gap-2">
        <div className="flex min-w-0 items-center gap-2">
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md border border-white bg-white text-indigo-500">
            <Icon name="shield-check-line" className="text-lg" />
          </div>

          <div className="min-w-0">
            <div className="mb-0.5 flex items-center gap-1.5">
              <span className="text-[9px] font-bold uppercase tracking-wider text-slate-200">
                Reseller Terms &amp; Conditions
              </span>
            </div>

            <h2
              id="agreement-title"
              className="text-base font-bold leading-tight tracking-tight"
            >
              Reseller Partner Agreement
            </h2>
          </div>
        </div>

        <button
          type="button"
          onClick={onClose}
          aria-label="Close agreement"
          className="shrink-0 rounded-md p-1 transition hover:bg-slate-300 hover:text-black focus:outline-none focus:ring-2 focus:ring-white"
        >
          <Icon name="close-line" className="text-lg" />
        </button>
      </div>

      <div className="mt-2 flex items-center justify-between gap-2 text-[10px] font-medium">
        <span className="flex items-center gap-1">
          <Icon name="file-list-3-line" className="text-xs" />
          Reseller agreement document
        </span>

        <span className="shrink-0" aria-live="polite">
          {hasScrolledToEnd ? "Review complete" : `${progress}% reviewed`}
        </span>
      </div>

      <div
        className="relative mt-1 h-1 overflow-hidden rounded-full bg-slate-600"
        role="progressbar"
        aria-label="Agreement reading progress"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={progress}
      >
        <div
          className="h-full rounded-full bg-white transition-all duration-200"
          style={{ width: `${progress}%` }}
        />
      </div>
    </header>

    {/* Scrollable Agreement Content */}
    <main
      ref={contentRef}
      tabIndex={0}
      className="min-h-0 flex-1 overflow-x-hidden overflow-y-auto overscroll-contain px-3 py-3 text-xs focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-blue-600 sm:px-4"
    >
      {/* Information Notice */}
      <div className="mb-4 flex items-start gap-2 rounded-md border border-blue-200 bg-blue-50 p-2.5">
        <Icon
          name="information-line"
          className="mt-0.5 shrink-0 text-base text-blue-700"
        />

        <div className="min-w-0">
          <h3 className="text-xs font-semibold text-slate-900">
            Before becoming a reseller partner
          </h3>

          <p className="mt-1 text-xs leading-5 text-slate-700">
            Please review the complete Reseller Partner Agreement, including
            partner plan fees, commission rates, reseller responsibilities,
            customer support, refund policies, and termination terms.
            By accepting, you agree to follow these terms when promoting
            and selling ScrapeGenius.
          </p>
        </div>
      </div>

      {/* Agreement Sections */}
      <div className="space-y-4">
        {sections.map((section, index) => (
          <article
            key={section.title}
            className="group flex min-w-0 items-start gap-2.5"
          >
            <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md border border-slate-200 bg-slate-100 text-[10px] font-semibold text-slate-600 group-hover:bg-indigo-500 group-hover:text-white">
              {String(index + 1).padStart(2, "0")}
            </div>

            <div className="min-w-0 flex-1">
              <h3 className="break-words text-xs font-semibold leading-5 tracking-tight text-slate-900">
                {section.title}
              </h3>

              <p className="mt-1 whitespace-pre-line break-words text-xs leading-5 text-slate-600">
                {section.content}
              </p>
            </div>
          </article>
        ))}
      </div>

      {/* Scroll Reminder */}
      {!hasScrolledToEnd && (
        <div className="mt-4 flex items-center justify-center gap-1.5 text-center text-[10px] text-slate-400">
          <Icon name="arrow-down-line" className="animate-bounce text-sm" />
          Scroll down to review all reseller agreement terms
        </div>
      )}

      {/* End-of-Document Confirmation */}
      {hasScrolledToEnd && (
        <div className="mt-4 flex items-start gap-2 rounded-md border border-emerald-200 bg-emerald-50 p-2.5">
          <Icon
            name="checkbox-circle-line"
            className="shrink-0 text-lg text-emerald-600"
          />

          <div>
            <p className="text-xs font-semibold text-emerald-900">
              You have reached the end
            </p>

            <p className="mt-1 text-xs leading-4 text-emerald-800">
              Confirm your acceptance of the Reseller Partner Agreement below
              to continue.
            </p>
          </div>
        </div>
      )}
    </main>

    {/* Footer */}
    <footer className="shrink-0 border-t border-slate-300 bg-slate-50 px-3 py-2">
      {/* Consent Checkbox */}
      <label
        className={`flex items-start gap-2 rounded-md p-1.5 transition ${
          hasScrolledToEnd
            ? "cursor-pointer hover:bg-white"
            : "cursor-not-allowed opacity-60"
        }`}
      >
        <input
          type="checkbox"
          checked={agreed}
          disabled={!hasScrolledToEnd}
          onChange={(event) => setAgreed(event.target.checked)}
          className="mt-0.5 h-3.5 w-3.5 shrink-0 accent-blue-700 focus:ring-2 focus:ring-blue-600 disabled:cursor-not-allowed"
        />

        <span className="text-xs leading-4 text-slate-600">
          I have read, understood, and agree to the{" "}
          <span className="font-semibold text-slate-900">
            Reseller Partner Agreement
          </span>
          , including its commission terms, responsibilities, restrictions,
          and termination conditions.
        </span>
      </label>

      {!hasScrolledToEnd && (
        <p className="px-1.5 text-[10px] leading-4 text-slate-400">
          Scroll to the bottom to enable the consent checkbox.
        </p>
      )}

      {/* Action Buttons */}
      <div className="mt-2 flex gap-2">
        <button
          type="button"
          onClick={onClose}
          className="inline-flex min-h-8 flex-1 items-center justify-center gap-1.5 rounded-md border border-slate-300 bg-white px-3 py-1.5 text-xs font-semibold text-slate-700 transition hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-slate-400"
        >
          <Icon name="close-line" className="text-sm" />
          Decline
        </button>

        <button
          type="button"
          onClick={handleAccept}
          disabled={!canAccept || isUpdating}
          className="inline-flex min-h-8 flex-1 items-center justify-center gap-1.5 rounded-md bg-indigo-500 px-3 py-1.5 text-xs font-semibold text-white shadow-sm transition hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 disabled:cursor-not-allowed disabled:bg-slate-800 disabled:opacity-40"
        >
          {isUpdating ? (
            <span className="inline-flex items-center gap-1.5">
              Processing...
              <i className="ri-loader-4-line inline-block animate-spin" />
            </span>
          ) : (
            <span className="inline-flex items-center gap-1.5">
              Accept &amp; Continue
              <Icon name="arrow-right-line" className="text-sm" />
            </span>
          )}
        </button>
      </div>

      {/* Security Note */}
      <p className="mt-1.5 flex items-center justify-center gap-1 text-center text-[10px] text-slate-400">
        <Icon name="lock-line" className="text-xs" />
        Your reseller agreement acceptance will be recorded securely.
      </p>
    </footer>
  </section>
</div>



  );
}

const ContactBox = memo(({number, code=""}) => {
    const [countryCode, setCountryCode] = useState(code);
    const { contactNum, handleContactNumber } = useUserContext()
    const closeWhatsAppBox = ()=>{
        handleContactNumber("")
    }
    const checkCountryCode = ()=>{
        if(!countryCode){
            alert(`Please select country!`)
        }
    }
    // Close the popup when ESC key is pressed
    useEffect(() => {
      const handleKeyDown = (event) => {
        if (event.key === 'Escape') {
          handleContactNumber("");
        }
      };
  
      window.addEventListener('keydown', handleKeyDown);
  
      return () => {
        window.removeEventListener('keydown', handleKeyDown);
      };
    }, []);
  
    const handleOutsideClick = (e) => {
      if (e.target.id === 'popup-container') {
        handleContactNumber("");
      }
    };
  
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div
            id="popup-container"
            onClick={handleOutsideClick}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
        >
          <div className="bg-white rounded-md shadow-lg p-6 max-w-md w-full relative">
            <div className="relative px-4 py-10">
                <div className="max-w-lg mx-auto">
                    <div className="flex items-center space-x-3">
                        <div className="h-14 w-14 bg-blue-100 rounded-full flex flex-shrink-0 justify-center items-center  text-blue-500 text-2xl font-mono shadow-md hover:shadow-inner">
                          <i className="ri-phone-line"></i>
                        </div>
                        <div className="block pl-2 font-semibold text-xl self-start text-gray-700">
                            <h2 className="leading-relaxed text-blue-500">Contact Now!</h2>
                            <p className="text-sm text-gray-500 font-normal leading-relaxed">Make Direct Calls and Boost Your Business.</p>
                        </div>
                    </div>
                    <div className="divide-y divide-gray-200">
                        <div className="py-5 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                            <div className="flex flex-col">
                                <label className="leading-loose text-sm">Call To:</label>
                                <span className='text-xs flex gap-0 item-center border rounded-md overflow-hidden'>
                                    <select name="country" id="country" value={countryCode} className='text-xs focus:border-none focus:outline-none px-2 w-32' onChange={(e)=>setCountryCode(e.target.value)}>
                                        <option value="">Select Country</option>
                                        {
                                            countryList.map(({cnt, shortCode, countryCode}, ind)=>(
                                                <option key={ind} value={countryCode} title={cnt}>{shortCode} (+{countryCode})</option>
                                            ))
                                        }
                                    </select>
                                    <input type="text" className="px-4 py-2 focus:ring-gray-500 focus:border-gray-900 w-full text-sm border-gray-300 focus:outline-none text-gray-600" 
                                    value={`${countryCode ? `+${countryCode}-` : "+??-"}${number}`} disabled={true}/>
                                </span>
                            </div>
                            <HowtoUse/>
                        </div>
                        <div className="pt-4 flex items-center space-x-4">
                            <button className="flex justify-center border border-transparent items-center gap-1 hover:gap-3 w-full hover:border hover:border-red-600 duration-200 text-gray-900 px-4 py-3 rounded-md focus:outline-none" onClick={closeWhatsAppBox}>
                              <i className="ri-close-line"></i> Cancel
                            </button>
                            {
                                !countryCode ? 
                                <button onClick={checkCountryCode} className="bg-gradient-to-r from-blue-300 to-blue-500 flex justify-center gap-1 hover:gap-3 duration-200 items-center w-full text-white px-4 py-3 rounded-md focus:outline-none cursor-pointer">
                                    Call <i className="ri-arrow-right-line"></i>
                                </button>
                                :
                                <Link href={`tel:+${countryCode}${contactNum}`} target='_blank' className="bg-gradient-to-r from-blue-300 to-blue-500 flex justify-center gap-1 hover:gap-3 duration-200 items-center w-full text-white px-4 py-3 rounded-md focus:outline-none">
                                    Call <i className="ri-arrow-right-line"></i>
                                </Link>
                            }
                        </div>
                    </div>                            
                </div>
            </div>
          </div>
        </div>
      </div>
    );
})

const SmsBox = memo(({number, code=""}) => {
  const [countryCode, setCountryCode] = useState(code);
  const { handleSmsNumber } = useUserContext()
  const closeWhatsAppBox = ()=>{
      handleSmsNumber("")
  }
  const checkCountryCode = (e)=>{
      e.preventDefault();
      validatePhoneNum(number, "sms:", countryCode)
  }
  // Close the popup when ESC key is pressed
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        handleSmsNumber("");
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const handleOutsideClick = (e) => {
    if (e.target.id === 'popup-container') {
      handleSmsNumber("");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div
          id="popup-container"
          onClick={handleOutsideClick}
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      >
        <div className="bg-white rounded-md shadow-lg p-6 max-w-md w-full relative">
          <div className="relative px-4 py-10">
              <div className="max-w-lg mx-auto">
                  <div className="flex items-center space-x-3">
                      <div className="h-14 w-14 bg-slate-400 rounded-full flex flex-shrink-0 justify-center items-center text-white text-2xl font-mono shadow-md hover:shadow-inner">
                        <i className="ri-mail-line"></i>
                      </div>
                      <div className="block pl-2 font-semibold text-xl self-start text-gray-700">
                          <h2 className="leading-relaxed text-slate-400">Send SMS!</h2>
                          <p className="text-sm text-gray-500 font-normal leading-relaxed">Send instant messages and grow your bussiness.</p>
                      </div>
                  </div>
                  <div className="divide-y divide-gray-200">
                    <div className="py-5 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                          <div className="flex flex-col">
                              <label className="leading-loose text-sm">Send To:</label>
                              <span className='text-xs flex gap-0 item-center border rounded-md overflow-hidden'>
                                  <select name="country" id="country" value={countryCode} className='text-xs focus:border-none focus:outline-none px-2 w-32' onChange={(e)=>setCountryCode(e.target.value)}>
                                      <option value="">Select Country</option>
                                      {
                                          countryList.map(({cnt, shortCode, countryCode}, ind)=>(
                                              <option key={ind} value={countryCode} title={cnt}>{shortCode} (+{countryCode})</option>
                                          ))
                                      }
                                  </select>
                                  <input type="text" className="px-4 py-2 focus:ring-gray-500 focus:border-gray-900 w-full text-sm border-gray-300 focus:outline-none text-gray-600" 
                                  value={`${countryCode ? `+${countryCode}-` : "+??-"}${number}`} disabled={true}/>
                              </span>
                          </div>
                          <HowtoUse/>
                      </div>
                      <div className="pt-4 flex items-center space-x-4">
                          <button className="flex justify-center border border-transparent items-center gap-1 hover:gap-3 w-full hover:border hover:border-red-600 duration-200 text-gray-900 px-4 py-3 rounded-md focus:outline-none" onClick={closeWhatsAppBox}>
                            <i className="ri-close-line"></i> Cancel
                          </button>
                          <button onClick={checkCountryCode} target='_blank' className="bg-gradient-to-r from-slate-400 to-slate-400 flex justify-center gap-1 hover:gap-3 duration-200 items-center w-full text-white px-4 py-3 rounded-md focus:outline-none">
                              Send <i className="ri-arrow-right-line"></i>
                          </button>
                      </div>
                  </div>                            
              </div>
          </div>
        </div>
      </div>
    </div>
  );
})

const WhatsappBox = memo(({closePop, code="", message}) => {
    const [number, setNumber] = useState("");
    const [whatsAppMsg, setWhatsAppMsg] = useState(message);
    const [countryCode, setCountryCode] = useState(code);
    const { handleWhatsAppNumber } = useUserContext()
    const closeWhatsAppBox = ()=>{
        handleWhatsAppNumber("")
    }
    const checkCountryCode = (e)=>{
        e.preventDefault();
        validatePhoneNum(number, "https://wa.me/", countryCode, whatsAppMsg)
    }
  // Close the popup when ESC key is pressed
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        handleWhatsAppNumber("");
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const handleOutsideClick = (e) => {
    if (e.target.id === 'popup-container') {
      handleWhatsAppNumber("");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div
          id="popup-container"
          onClick={handleOutsideClick}
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      >
        <div className="bg-white rounded-md shadow-lg p-6 max-w-md w-full relative">
          <div className="relative px-4 py-10">
              <div className="max-w-lg mx-auto">
                  <div className="flex items-center space-x-3">
                      <div className="h-14 w-14 bg-green-100 rounded-full flex flex-shrink-0 justify-center items-center text-green-600 text-2xl font-mono shadow-md hover:shadow-inner">
                        <i className="ri-whatsapp-fill"></i>
                      </div>
                      <div className="block pl-2 font-semibold text-xl self-start text-gray-700">
                          <h2 className="leading-relaxed text-green-600">WhatsApp Now!</h2>
                          <p className="text-sm text-gray-500 font-normal leading-relaxed">Send sms on whatsapp and grow your bussiness.</p>
                      </div>
                  </div>
                  <div className="divide-y divide-gray-200">
                      <div className="py-5 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                          <div className="flex flex-col">
                              <label className="leading-loose text-sm">Send To:</label>
                              <span className='text-xs flex gap-0 item-center border rounded-md overflow-hidden'>
                                  <select name="country" id="country" value={countryCode} className='text-xs focus:border-none focus:outline-none px-2 w-32' onChange={(e)=>setCountryCode(e.target.value)}>
                                      <option value="">Select Country</option>
                                      {
                                          countryList.map(({cnt, shortCode, countryCode}, ind)=>(
                                              <option key={ind} value={countryCode} title={cnt}>{shortCode} (+{countryCode})</option>
                                          ))
                                      }
                                  </select>
                                  <div className='relative'>
                                    <span className='absolute top-2 text-sm left-2'>{countryCode ? `+${countryCode}-` : "+??-"}</span>
                                    <input type="text" className="pl-10 pr-4 py-2 focus:ring-gray-500 focus:border-gray-900 w-full text-sm border-gray-300 focus:outline-none text-gray-600" 
                                    value={number} onChange={(e)=>setNumber(e.target.value)}/>
                                  </div>
                              </span>
                          </div>
                          
                          <div className="flex flex-col">
                              <label className="leading-loose text-sm">Your Message:</label>
                              <div className="relative focus-within:text-gray-600 text-gray-400">
                              <textarea type="text" value={whatsAppMsg} rows={5} onChange={(e)=>setWhatsAppMsg(e.target.value)} className="px-2 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full text-sm border-gray-300 rounded-md focus:outline-none text-gray-600" placeholder="Type your message"/>
                              </div>
                              <p className='text-red-500 text-xs mt-1'>Please log in to <Link href={"https://web.whatsapp.com/"} target='_blank' className='font-bold underline hover:italic' title={`Click for WhatsApp login`}>Web WhatsApp</Link> before sending messages.</p>
                          </div>
                      </div>
                      <div className="pt-4 flex items-center space-x-4">
                          <button className="flex justify-center border border-transparent items-center gap-1 hover:gap-3 w-full hover:border hover:border-red-600 duration-200 text-gray-900 px-4 py-3 rounded-md focus:outline-none" onClick={closeWhatsAppBox}>
                            <i className="ri-close-line"></i> Cancel
                          </button>
                          <button onClick={checkCountryCode} target='_blank' className="bg-gradient-to-r from-green-300 to-green-500 flex justify-center gap-1 hover:gap-3 duration-200 items-center w-full text-white px-4 py-3 rounded-md focus:outline-none">
                              Send <i className="ri-arrow-right-line"></i>
                          </button>
                      </div>
                  </div>                            
              </div>
          </div>
        </div>
      </div>
    </div>
  );
})

const LimitReachedBox = memo(({message="You have reached the limits of the free plan. Please upgrade your plan to continue using this service."}) => {
  const { handleLimitErr } = useUserContext()
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        handleLimitErr("");
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const handleOutsideClick = (e) => {
    if (e.target.id === 'popup-container') {
      handleLimitErr("");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div
          id="popup-container"
          onClick={handleOutsideClick}
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      >
        <div className="bg-white rounded-md shadow-lg px-6 py-10 max-w-xl w-full relative">
              <button
                  type="button"
                  onClick={()=>handleLimitErr("")}
                  className="absolute top-4 right-2 text-gray-400 bg-transparent hover-bg-gray-200 hover-text-gray-900 rounded-md text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark-hover-bg-gray-600 dark-hover-text-white"
                  data-modal-hide="defaultModal"
              >
                  <svg
                      className="w-3 h-3"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 14"
                  >
                      <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                      />
                  </svg>
                  <span className="sr-only">Close modal</span>
              </button>
              {/* Modal Body */}
              <div className="modal-body pt-4">
                  <div className="flex flex-col items-center justify-center px-6 py-4  pt:mt-0 ">
                      <div className="w-full max-w-xl">
                          <Logo/>
                          
                          <h2 className="text-xl mt-4 text-center font-bold text-gray-900">
                              "{message}"
                          </h2>

                          <div className="text-center mt-5">
                              <Link
                                  target="_blank"
                                  href="https://codecanyon.net/item/google-map-scraper-pro/25283251"
                                  className="shadow-md hover:shadow-lg px-5 py-2 text-md text-center inline-flex items-center text-white bg-secondary rounded-sm hover:bg-secondary"
                              >
                                  Upgrade Now
                              </Link>
                          </div>
                      </div>
                  </div>
              </div>
        </div>
      </div>
    </div>
  );
})

const ValidityBox = memo(({ id, closeModel }) => {
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") closeModel("");
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [closeModel]);

  const handleOutsideClick = (e) => {
    if (e.target.id === "popup-container") closeModel("");
  };

  const [selectedRange, setSelectedRange] = useState(null);

  const handleDynamicDate = (label) => {
    const baseDate = new Date(); // Use provided start date
    let futureDate = new Date(baseDate); // Clone it

    if (label === "Three Months") {
      futureDate.setMonth(futureDate.getMonth() + 3);
    } else if (label === "Six Months") {
      futureDate.setMonth(futureDate.getMonth() + 6);
    } else if (label === "One Year") {
      futureDate.setFullYear(futureDate.getFullYear() + 1);
    }

    const formatDate = (date) => {
      const day = String(date.getDate()).padStart(2, "0");
      const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
      const month = monthNames[date.getMonth()];
      const year = date.getFullYear();
      return `${day} ${month} ${year}`;
    };

    setSelectedRange({
      label,
      from: formatDate(baseDate),
      to: formatDate(futureDate),
    });
  };

  const handleDate = () => {
    console.log(selectedRange)
    alert(`Validity set for: ${selectedRange?.label || "No period selected"} and email :${id}`);
    setTimeout(()=>{
      closeModel("")
    }, [1000])
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div
        id="popup-container"
        onClick={handleOutsideClick}
        className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      >
        <div className="bg-white rounded-md shadow-lg px-8 py-6 max-w-lg w-full relative">
          <button
            type="button"
            onClick={() => closeModel("")}
            className="absolute top-4 right-4 text-gray-600 focus:outline-none hover:bg-gray-200 hover:text-gray-900 p-2 rounded-full"
          >
            <svg
              className="w-5 h-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
            <span className="sr-only">Close</span>
          </button>

          {/* <div className="text-center">
            <h2 className="mt-4 text-2xl font-bold text-gray-800">Add / Edit Validity</h2>
          </div> */}

          <div className="mt-10 space-y-8 text-center">
            {/* Title */}
            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-800">Choose Your Validity</h2>
              {/* <h2 className="mt-4 text-2xl font-bold text-gray-800">Add / Edit Validity</h2> */}
              <p className="text-sm mt-2 text-gray-600">Select a time period to set account validity.</p>
            </div>

            {/* Quick Select Buttons */}
            <div className="flex justify-center gap-4 flex-wrap">
              {["Three Months", "Six Months", "One Year"].map((label) => (
                <button
                  key={label}
                  onClick={() => handleDynamicDate(label)}
                  className={`py-2 px-5 rounded-full transition-all duration-300 font-medium shadow-lg ${
                    selectedRange?.label === label
                      ? "bg-gradient-to-r from-blue-400 to-blue-500 scale-105 text-white"
                      : "bg-gray-100 hover:scale-105 text-gray-800 hover:bg-gray-200 hover:shadow-md"
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>

            {/* Selected Date Range Display */}
            {selectedRange && (
              <div className="mt-4 bg-gray-100 text-gray-700 rounded-lg p-4 inline-block shadow-md">
                <p className="font-semibold">
                  <span className="text-blue-600">{selectedRange.label}</span> selected
                </p>
                <p className="text-sm">
                  From: <strong>{selectedRange.from}</strong> to{" "}
                  <strong>{selectedRange.to}</strong>
                </p>
              </div>
            )}

            {/* Set Validity Button */}
            <div className="">
              <button
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-2 rounded-full shadow-md transition-transform duration-300 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed"
                onClick={handleDate}
                disabled={!selectedRange}
              >
                Set Validity
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});


const UpgradePlanPopup = memo(({ closeModel }) => {
  const [selectedPlan, setSelectedPlan] = useState('Premium');
  const [alertMsg, setAlertMsg] = useState('');
  const [offers, setOffers] = useState([
    "20% Off on Gold Plan for a limited time!",
    "Get 3 months free with the Premium Plan!",
    "Exclusive access to new features with Basic Plan."
  ]);

  const handleUpgrade = () => {
    if (selectedPlan === 'Premium') {
      setAlertMsg("You are already on the Premium plan. Click Renew to extend your plan.");
    } else {
      setAlertMsg(`${selectedPlan} plan selected successfully!`);
    }

    setTimeout(() => {
      closeModel();
    }, 2000);
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        closeModel();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const handleOutsideClick = (e) => {
    if (e.target.id === 'popup-container') {
      closeModel();
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div
        id="popup-container"
        onClick={handleOutsideClick}
        className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      >
        <div className="bg-white rounded-md shadow-xl p-10 max-w-lg w-full relative transition-all transform scale-95">
          <div className="modal-body">
            <div className="text-center">
              <Logo />
              <h2 className="text-2xl font-bold text-gray-800 mt-4">Renew / Upgrade Plan</h2>
              <p className="text-gray-600 mt-2">Choose the plan that suits you best. Your current plan is <strong>{selectedPlan}</strong>.</p>
            </div>

            <div className="mt-6 space-y-4">
              {/* Plan Options */}
              <div className="grid grid-cols-12 space-x-4">
              <div
                  onClick={() => setSelectedPlan('Premium')}
                  className={`relative col-span-4 shadow overflow-hidden cursor-pointer text-center p-4 rounded-md transition duration-300 ${selectedPlan === 'Premium' ? 'bg-secondary/10' : 'hover:bg-secondary/10'}`}
                >
                  {/* Ribbon */}
                  <div
                    className="absolute top-10 w-20 bg-danger text-white text-xs px-4 py-1 transform rotate-45 origin-top-right"
                    style={{ transformOrigin: 'top right', right: "-17px" }}
                  >
                    Best
                  </div>
                  
                  <i className="ri-vip-crown-line text-4xl text-secondary mx-auto"></i>
                  <p className="text-center text-gray-700 mt-2">
                    Premium Plan <i className="ri-question-line" title="You can make 500 clients"></i>
                  </p>
                  <p className="text-center text-gray-700 mt-2">Rs25000/-</p>
                </div>
                <div
                  onClick={() => setSelectedPlan('Gold')}
                  className={`col-span-4 shadow cursor-pointer text-center p-4 rounded-md transition duration-300 ${selectedPlan === 'Gold' ? 'bg-warning/10' : 'hover:bg-warning/10'}`}
                >
                  <i className={`ri-medal-line text-4xl text-warning mx-auto`}></i>
                  <p className="text-center text-gray-700 mt-2">Gold Plan <i className="ri-question-line" title='You can make 300 clients'></i></p>
                  <p className="text-center text-gray-700 mt-2">Rs15000/-</p>
                </div>
                <div
                  onClick={() => setSelectedPlan('Basic')}
                  className={`col-span-4 shadow cursor-pointer text-center p-4 rounded-md transition duration-300 ${selectedPlan === 'Basic' ? 'bg-info/10' : 'hover:bg-info/10'}`}
                >
                  <i className="ri-bard-line text-4xl text-info mx-auto"></i>
                  <p className="text-center text-gray-700 mt-2">Basic Plan <i className="ri-question-line" title='You can make 100 clients'></i></p>
                  <p className="text-center text-gray-700 mt-2">Rs5000/-</p>
                </div>
              </div>

              {/* Offers */}
              <div className="mt-6 text-center">
                <h3 className="text-lg font-semibold text-gray-800">Special Offers</h3>
                <ul className="mt-4 space-y-2">
                  {offers.map((offer, index) => (
                    <li key={index} className="text-gray-600">{offer}</li>
                  ))}
                </ul>
              </div>

              {/* Action Buttons */}
              <div className="mt-6 flex justify-center space-x-4">
                <button
                  onClick={handleUpgrade}
                  className="bg-blue-600 text-white px-6 py-2 rounded-md transition duration-300 hover:bg-blue-700"
                >
                  {selectedPlan === 'Premium' ? 'Renew Plan' : 'Upgrade Plan'}
                </button>
                <button
                  onClick={() => closeModel()}
                  className="bg-gray-200 text-gray-700 px-6 py-2 rounded-md transition duration-300 hover:bg-gray-300"
                >
                  Cancel
                </button>
              </div>

              {/* Alert Message */}
              {alertMsg && (
                <div className="mt-4 text-center text-gray-700">
                  <span className="inline-block bg-green-200 text-green-800 px-4 py-2 rounded-md">{alertMsg}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

const DownloadBox = memo(({csvHeaders, data, fileName, closeModel}) => {
  const [ freeData, setFreeData ] = useState(data)
  useEffect(() => {
    const filterData = data.slice(0, 50);
    setFreeData(filterData)
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        closeModel();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const handleOutsideClick = (e) => {
    if (e.target.id === 'popup-container') {
      closeModel();
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div
          id="popup-container"
          onClick={handleOutsideClick}
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      >
        <div className="bg-white rounded-md shadow-lg p-6 py-10 max-w-xl w-full relative">
          <button
              onClick={closeModel}
              type="button"
              className="absolute top-4 right-2 text-gray-400 bg-transparent hover-bg-gray-200 hover-text-gray-900 rounded-md text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark-hover-bg-gray-600 dark-hover-text-white"
              data-modal-hide="defaultModal"
          >
              <svg
                  className="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
              >
                  <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
              </svg>
              <span className="sr-only">Close modal</span>
          </button>
          {/* Modal Body */}
          <div className="modal-body py-4">
              <div className="flex flex-col items-center justify-center">
                  <div className="w-full max-w-xl">
                      <Logo/>

                      <h2 className="text-xl mt-8 text-center font-bold text-gray-900">
                      Your free trial lets you download 50 records, <br /> Upgrade for more. {" "}
                      </h2>

                      <div className="flex gap-5 justify-center items-center mt-6">                                    
                          <Download button_name={"Download Free"} data={freeData} csvHeaders={csvHeaders} fileName={fileName} customCls={"shadow-md hover:shadow-lg px-5 py-3 text-md font-bold text-center gap-2 inline-flex items-center text-white bg-blue-600 rounded-sm hover:bg-blue-800"}/>

                          <Link
                              target="_blank"
                              href="https://codecanyon.net/item/google-map-scraper-pro/25283251"
                              className="shadow-md hover:shadow-lg px-5 py-3 text-md font-bold text-center inline-flex gap-2 items-center text-white bg-blue-600 rounded-sm hover:bg-blue-800"
                          >
                              Download Pro 
                              <i className="ri-sparkling-fill"></i>
                          </Link>
                      </div>
                  </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
})

const AllocateKey = memo(({ id,type, closeModel }) => {
  // Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") closeModel("");
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [closeModel]);

  // Close modal when clicking outside
  const handleOutsideClick = (e) => {
    if (e.target.id === "popup-container") closeModel("");
  };

  // Store numeric input value
  const [validityNumber, setValidityNumber] = useState("");

  // Handle setting the value
  const handleAllocate = () => {
    if (!validityNumber) return;
    if(type ==="Truecaller Credits")
    {
      alert(`Allocated ${validityNumber} Truecaller credits to email: ${id}`);
    }
    else if( type ==="B2C Credits")
    {
      alert(`Allocated ${validityNumber} B2C credits to email: ${id}`);
    }
    else if( type ==="License")
    {
      alert(`Allocated ${validityNumber} License to email: ${id}`);
    }
    setTimeout(() => {
      closeModel("");
    }, 1000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div
        id="popup-container"
        onClick={handleOutsideClick}
        className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      >
        <div className="bg-white rounded-md shadow-lg px-8 py-6 max-w-lg w-full relative">
          {/* Close button */}
          <button
            type="button"
            onClick={() => closeModel("")}
            className="absolute top-4 right-4 text-gray-600 focus:outline-none hover:bg-gray-200 hover:text-gray-900 p-2 rounded-full"
          >
            <svg
              className="w-5 h-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
            <span className="sr-only">Close</span>
          </button>

          {/* Modal content */}
          <div className="mt-10 space-y-8 text-center">
            <div>
              <h2 className="text-2xl font-bold text-gray-800"> {type}</h2>
              {/* <p className="text-sm mt-2 text-gray-600">Enter the number of {type} for the allocation.</p> */}
            </div>

            {/* Number Input */}
            <div className="flex justify-center">
              <input
                type="number"
                min="1"
                placeholder={type === `License`? `License`:`Credits`}
                value={validityNumber}
                onChange={(e) => setValidityNumber(e.target.value)}
                className="border border-black-500 rounded-md p-2 w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Display chosen value */}
            {validityNumber && (
              <p className="text-gray-700 mt-2">
                Number of {type} <strong>{validityNumber}</strong> Allocating
              </p>
            )}

            {/* Submit Button */}
            <div>
              <button
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-2 rounded-full shadow-md transition-transform duration-300 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed"
                onClick={handleAllocate}
                disabled={!validityNumber}
              >
                Add {type === `License`? `License`:`Credits`}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

const UserAccess = memo(({ email, closePop, initialSelected = [] }) => {
  const [ availableTools, setAvailableTools] = useState([
    { id: "tool_analytics", name: "Search Engine Scraper", description: "View reports & charts" }
  ]);
  
  const [query, setQuery] = useState("");
  const [validity, setValidity] = useState("");
  const [respMsg, setRespMsg] = useState("");
  const [selectedSet, setSelectedSet] = useState(new Set(initialSelected));
  const [saving, setSaving] = useState(false);
  const containerRef = useRef(null);

  const MENUITEMS = [
    { path: "/dashboard/home", title: "Dashboard" },

    { path: "/dashboard/followup-history", title: "Follow Up History" },

    {
      title: "CRM Sources",
      children: [
        { path: "/dashboard/custom-leads", title: "Custom Leads" },
        { path: "/dashboard/justdial-enquiry-scraper", title: "JustDial Enquiries" },
        { path: "/dashboard/indiamart-enquiry-scraper", title: "IndiaMart Enquiries" },
        { path: "/dashboard/google-ad-leads", title: "Google Ads" },
        { path: "/dashboard/meta-ad-leads", title: "Meta Ads" },
      ],
    },

    {
      path: "/dashboard/smart-leads",
      title: (
        <span>
          Smart Leads <span className="text-yellow-600 animate-pulse font-bold">Pro</span>
        </span>
      ),
    },

    { path: "/dashboard/search-engine-scraper", title: "Search Engines" },

    { path: "/dashboard/google-map-scraper", title: "Google Maps" },

    { path: "/dashboard/social-media-scraper", title: "Social Media" },

    { path: "/dashboard/facebook-ad-library-scraper", title: "Ad Library" },

    { path: "/dashboard/ecommerce-scraper", title: "Ecommerce Platforms" },

    { path: "/dashboard/job-portal-scraper", title: "Job Portals" },

    { path: "/dashboard/global-directory-scraper", title: "Global Directories" },

    {
      path: "/dashboard/whatsapp-group-scraper",
      title: <span>WA Group Scraper</span>,
    },

    {
      path: "/dashboard/real-estate-scraper",
      title: (
        <span>
          Real Estate Scraper <span className="text-red-500 animate-pulse font-bold">New</span>
        </span>
      ),
    },

    {
      title: "Indian Directories",
      children: [
        { path: "/dashboard/mlmdiary-scraper", title: "MLMDiary Scraper" },
        { path: "/dashboard/indiamart-scraper", title: "Indiamart Scraper" },
        { path: "/dashboard/justdial-scraper", title: "JustDial Scraper" },
        { path: "/dashboard/sulekha-scraper", title: "Sulekha Scraper" },
        { path: "/dashboard/tradeindia-scraper", title: "TradeIndia Scraper" },
        { path: "/dashboard/exportersindia-scraper", title: "ExportersIndia Scraper" },
      ],
    },

    {
      title: "Corporate Registries",
      children: [
        { path: "/dashboard/msme-company", title: "MSME Company" },
        {
          path: "/dashboard/company-contact-scraper",
          title: (
            <span>
              Company Scraper <span className="text-red-500 animate-pulse font-bold">New</span>
            </span>
          ),
        },
        { path: "/dashboard/pvt-ltd-scraper", title: "Pvt. Ltd. Scraper" },
        { path: "/dashboard/gst-no-scraper", title: "GST No. Scraper" },
      ],
    },

    {
      title: "Bulk Contacts",
      children: [
        { path: "/dashboard/email-scraper", title: "Email Scraper" },
        { path: "/dashboard/phone-no-scraper", title: "Phone No. Scraper" },
        { path: "/dashboard/whatsapp-number-scraper", title: "Whatsapp No. Scraper" },
      ],
    },

    {
      title: "Web Crawler",
      children: [
        { path: "/dashboard/website-data-scraper", title: "Website Data Scraper" },
        { path: "/dashboard/live-website-data", title: "Live Website Data" },
        { path: "/dashboard/business-directory-scraper", title: "Business Directory" },
      ],
    },

    {
      title: "File Uploads",
      children: [
        { path: "/dashboard/document-data-scraper", title: "Document Data Scraper" },
        { path: "/dashboard/image-data-scraper", title: "Image Data Scraper" },
      ],
    },

    {
      title: "Website Analyzer",
      children: [
        { path: "/dashboard/live-website-scraping", title: "Live Website Scraper" },
        { path: "/dashboard/live-website-data", title: "Live Website Data" },
        { path: "/dashboard/live-website-checker", title: "Live Website Checker" },
      ],
    },

    {
      title: "Domain Tools",
      children: [
        { path: "/dashboard/whois-domains", title: "WHOIS Domain Lookup" },
        {
          path: "/dashboard/verified-domains",
          title: (
            <span>
              Verified Domains{" "}
              <span className="text-yellow-500 italic font-bold animate-pulse">
                Pro
              </span>
            </span>
          ),
        },
      ],
    },

    { path: "/dashboard/phone-verifier", title: "Phone Numbers" },

    { path: "/dashboard/email-verifier", title: "Email Addresses" },

    { path: "/dashboard/whatsapp-verifier", title: "WhatsApp Numbers" },
  ];

  // outside click to close (keeps your existing id check but safer using ref)
  const handleOutsideClick = (e) => {
    if (e.target.id === "popup-container" || e.target === containerRef.current) {
      closePop();
    }
  };

  // const fetchLimitedAccessUser = async()=>{
  //   try {
  //     //dashboard_999
  //     const fetch_data = await axios.post('/api/logs', { email, fileName: true })
  //     const resp_data = fetch_data.data;
  //     // console.log('api obj')
  //     if(resp_data){
  //       if(resp_data?.tools?.length){
  //         alert(`Modules updated successfully!`);
  //       }
  //     }
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }

  // filtered tools by query
  const filtered = availableTools.filter((t) =>
    (t.name + (t.description || "")).toLowerCase().includes(query.toLowerCase())
  );

  function toggleTool(id) {
    setSelectedSet((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }

  function handleAllTool (){
    const filterTools = availableTools.map(item=>item.name).filter(item=>item);
    setSelectedSet(new Set(filterTools))
  }

  function clearSelection() {
    setSelectedSet(new Set());
  }

  async function handleSave() {
    if(selectedSet.size < 6){
      const tools = Array.from(selectedSet);
      console.log(validity);
      if(!validity) {
        alert(`Missing validity!`);
        return;
      }
      try {
        setSaving(true);
        const user_object = {reseller_email: "support@designcollection.in", email, tools, valid_until: validity}
        await axios.post('/api/logs', { user_object });
        // await fetchLimitedAccessUser(email);
        setRespMsg(`Access updated successfully!`);
      } catch (err) {
        console.log(err);
        setRespMsg(`Failed to update access!`);
      } finally {
        setSaving(false);
      }
    }
    else {
      setRespMsg(`Alert! Only five tools are allowed to be selected.`);
    }
  }

  useEffect(() => {
    const allTools = [];
    MENUITEMS.forEach(item=>{
      if("path" in item){
        if(item.title !== "Dashboard" && item.title !== "Follow Up History"){
          allTools.push(item)
        }
      }
      const children = item?.children;
      if(children && children.length){
        children.forEach(child=>{
          if("path" in child){
            allTools.push(child)
          }
        })
      }
    })
    const converted_tools = allTools.map(item=>{
      const trimmedUrl = item.path.replace(/\/$/, "");
      const segments = trimmedUrl.split('/');
      const lastSegment = segments[segments.length - 1];
      const readableName = lastSegment.replace(/-/g, ' ');
      return {
        name: readableName,
        id: readableName
      }
    })
    setAvailableTools(converted_tools)
    const handleKeyDown = (event) => {
      if (event.key === "Escape") closePop();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(()=>{
    if(selectedSet.size === 5) setRespMsg(`Alert! Only five tools are allowed to be selected.`);
    else {
      if(respMsg){
        setTimeout(()=>{
          if(selectedSet.size < 5) setRespMsg(``);
        }, 2000)
      }
    }
  }, [selectedSet.size])

  return (
    <div
      id="popup-container"
      ref={containerRef}
      onClick={handleOutsideClick}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm px-4"
    >
      <div className="bg-gradient-to-br from-white via-gray-50 to-blue-50 rounded-xl shadow-2xl p-6 max-w-2xl w-full transform transition-all duration-300 scale-100 relative">
        {/* Close */}
        <button
          type="button"
          onClick={() => closePop()}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 rounded-full p-2 bg-gray-100 hover:bg-gray-200 shadow-sm"
        >
          <svg className="w-4 h-4" aria-hidden xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
          </svg>
          <span className="sr-only">Close modal</span>
        </button>

        {/* Heading */}
        <h1 className="font-bold mb-1 text-gray-800 flex items-center justify-center gap-2">
          <span className='text-lg text-center'>
            <i className="ri-user-fill text-blue-500" />
            User Email
            <br/> <b>{email}</b>
          </span>
        </h1>
        <p className="text-gray-600 mb-4 text-sm text-center">Edit which tools this user may access.</p>

        {/* Controls */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Left: available list */}
          <div>
            <label className="text-xs font-medium text-gray-700">Search Tool</label>
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Ex. Search Engine Scraper"
              className="mt-2 mb-3 w-full rounded-md border px-3 py-2 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-200"
            />

            <label className="text-xs font-medium text-gray-700">Validity Date</label>
            <input
              type='date'
              value={validity}
              onChange={(e) => setValidity(e.target.value)}
              placeholder="Ex. Search Engine Scraper"
              className="mt-2 mb-3 w-full rounded-md border px-3 py-2 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-200"
            />

            <div className="flex justify-between items-center gap-2 text-xs">
              <div className="text-slate-500">{filtered.length} Tools</div>
              <button className='hover:underline' onClick={handleAllTool}>Select All</button>
            </div>

            <ul className="max-h-48 overflow-auto divide-y rounded-md border">
              {filtered.map((tool, idx) => (
                <li key={idx} className="flex items-center gap-3 p-3">
                  <input
                    type="checkbox"
                    checked={selectedSet.has(tool.id)}
                    onChange={() => toggleTool(tool.id)}
                    disabled={selectedSet.size === 5}
                    className="h-4 w-4 rounded border-slate-300"
                  />
                  <div className="font-medium text-sm capitalize">{tool.name}</div>
                </li>
              ))}
              {filtered.length === 0 && <li className="p-3 text-sm text-slate-500">No tools match your search.</li>}
            </ul>
          </div>

          {/* Right: selected */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <div className="text-sm font-medium">Selected tools</div>
              <div className="text-xs text-slate-500">{selectedSet.size} selected</div>
            </div>

            <div className="min-h-[140px] max-h-[215px] overflow-auto rounded-md border p-3 bg-white">
              {selectedSet.size === 0 ? (
                <div className="text-sm text-slate-500">No tools selected yet.</div>
              ) : (
                Array.from(selectedSet).map((id) => {
                  const tool = availableTools.find((t) => t.id === id);
                  return (
                    <div key={id} className="flex items-center justify-between gap-3 rounded-md border border-gray-200 bg-slate-50 p-2 mb-2">
                      <div>
                        <div className="text-sm font-medium">{tool?.name ?? id}</div>
                        {tool?.description && <div className="text-xs text-slate-500">{tool.description}</div>}
                      </div>
                      <div className="flex items-center gap-2">
                        <button onClick={() => setSelectedSet((s) => { const n = new Set(s); n.delete(id); return n; })} className="text-xs px-2 py-1 rounded hover:text-red-400 hover:underline">Remove</button>
                      </div>
                    </div>
                  );
                })
              )}
            </div>

            <div className="mt-3 flex items-center gap-2">
              <div className="flex gap-2">
                <button onClick={clearSelection} className="px-3 py-1 rounded-full border text-sm bg-white hover:bg-gray-200 disabled:opacity-60">Clear</button>
              </div>
              <button
                onClick={handleSave}
                disabled={saving}
                className="ml-auto rounded-full bg-blue-600 text-white px-4 py-1 text-sm font-medium shadow hover:bg-blue-700 disabled:opacity-60"
              >
                {saving ? "Saving..." : `Save & Apply (${selectedSet.size})`}
              </button>
            </div>
            {
              respMsg &&
              <p className={`my-2 ${(respMsg.includes("Failed") || respMsg.includes("Alert")) ? "text-danger" : "text-success"} font-bold italic`}>{respMsg}</p>
            }
          </div>
        </div>

        {/* Small footer note */}
        <div className="mt-4 text-xs text-slate-500 text-center">
          Tip: Use the search to find a tool.
        </div>
      </div>
    </div>
  );
});

const ResellerComission = ()=>{
  const { closeRates } = useUserContext();
  const plans = [
    {
      name: "Silver",
      icon: "🥈",
      price: "₹24,999",
      commission: "15%",
      earns: "₹3,750.00",
      color: "from-slate-400 to-gray-500",
    },
    {
      name: "Gold",
      icon: "🥇",
      price: "₹74,999",
      commission: "20%",
      earns: "₹15,000.00",
      color: "from-yellow-400 to-amber-500",
    },
    {
      name: "Platinum",
      icon: "💎",
      price: "₹1,49,999",
      commission: "25%",
      earns: "₹37,500.00",
      color: "from-cyan-500 to-indigo-600",
    },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div className="w-full max-w-xl overflow-hidden rounded-xl bg-white shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between bg-gradient-to-r from-indigo-600 to-purple-600 px-5 py-4 text-white">
          <div>
            <h2 className="text-lg font-bold">
              Reseller Partner Referral Commission
            </h2>
            <p className="text-xs text-indigo-100">
              Earn one time commission on every successful referral.
            </p>
          </div>

          <button
            onClick={closeRates}
            className="rounded-full py-1 px-3 text-lg hover:bg-white/20"
          >
            ✕
          </button>
        </div>

        {/* Table */}
        <div className="p-5">
          <div className="overflow-hidden rounded-xl border border-gray-200">
            <table className="w-full text-sm">
              <thead className="bg-gray-100 text-gray-700">
                <tr>
                  <th className="px-4 py-3 text-left">Plan</th>
                  <th className="px-4 py-3 text-center">Price</th>
                  <th className="px-4 py-3 text-center">Commission</th>
                  <th className="px-4 py-3 text-right">Earns</th>
                </tr>
              </thead>

              <tbody>
                {plans.map((plan) => (
                  <tr
                    key={plan.name}
                    className="border-t hover:bg-indigo-50 transition"
                  >
                    <td className="px-4 py-3 font-semibold">
                      {plan.icon} {plan.name}
                    </td>

                    <td className="px-4 py-3 text-center">
                      {plan.price}
                    </td>

                    <td className="px-4 py-3 text-center">
                      <span className="rounded-full bg-green-100 px-2 py-1 text-xs font-semibold text-green-700">
                        {plan.commission}
                      </span>
                    </td>

                    <td className="px-4 py-3 text-right font-bold text-indigo-600">
                      {plan.earns}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Footer */}
          {/* <div className="mt-4 rounded-md bg-indigo-50 p-3 text-center text-sm text-gray-700">
            💰 <span className="font-semibold">Higher plans = Higher commissions.</span>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export { ContactBox, SmsBox, WhatsappBox, LimitReachedBox, DownloadBox, ValidityBox, UpgradePlanPopup, AllocateKey, UserAccess, ResellerComission }