// ─────────────────────────────────────────────────────────────
// SEO metadata for all public pages (Next.js Metadata API)
// Positioning: "B2B Lead Generation Software" — frontend copy avoids
// the words scraper / extractor / data. URLs are unchanged.
// ─────────────────────────────────────────────────────────────

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://scrapegenius.com";
const SITE_NAME = "Scrape Genius";
const NO_INDEX = { index: false, follow: false };

const page = (path, title, description, extra = {}) => ({
    metadataBase: new URL(SITE_URL),
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
        title,
        description,
        url: path,
        siteName: SITE_NAME,
        type: "website",
        locale: "en_IN",
    },
    ...extra,
});

// ───────────── Core pages ─────────────

export const seo_home = page(
    "/",
    `B2B Lead Generation Software India | Scrape Genius`,
    `Find B2B leads from Google Maps, IndiaMART, JustDial & websites. Get phone numbers, emails & WhatsApp contacts with a built-in CRM. Start your free trial today.`
);

export const seo_pricing = page(
    "/pricing/",
    `Pricing Plans | B2B Lead Generation Software - Scrape Genius`,
    `Compare Scrape Genius plans for B2B lead generation. Free, Standard and Reseller plans with full access to Google Maps, IndiaMART and JustDial lead tools.`
);

export const seo_about = page(
    "/about/",
    `About Scrape Genius | B2B Lead Generation Software India`,
    `Scrape Genius is built by a DPIIT-recognized Indian startup to help sales teams find B2B leads from Google Maps, IndiaMART, JustDial and websites.`
);

export const seo_contact = page(
    "/contact/",
    `Contact Us | Scrape Genius Sales & Support`,
    `Talk to the Scrape Genius team for demos, pricing, reseller partnerships and support for our B2B lead generation software.`
);

export const seo_reseller = page(
    "/reseller/",
    `Reseller Program - Sell B2B Lead Generation Software | Scrape Genius`,
    `Become a Scrape Genius reseller. Sell white-label B2B lead generation software under your own brand with 200 licence keys and dedicated partner support.`
);

export const seo_faq = page(
    "/faq/",
    `FAQ | Scrape Genius Lead Generation Software`,
    `Answers to common questions about Scrape Genius: installation, licences, pricing, lead sources, CRM features and support.`
);

export const seo_docs = page(
    "/user-manual/",
    `User Manual | Scrape Genius`,
    `Step-by-step guide to installing and using Scrape Genius: lead finders, CRM tools, filters, exports and licence activation.`
);

export const seo_terms = page(
    "/legal-terms/",
    `Terms and Conditions | Scrape Genius`,
    `Read the terms and conditions for using Scrape Genius lead generation software, licences and related services.`
);

export const seo_privacy = page(
    "/legal-policy/",
    `Privacy Policy | Scrape Genius`,
    `Learn how Scrape Genius collects, uses and protects your personal information when you use our website and software.`
);

// ───────────── Account pages (not indexed, except sign up) ─────────────

export const seo_signup = page(
    "/signup/",
    `Start Your Free Trial | Scrape Genius`,
    `Create your free Scrape Genius account and start finding B2B leads from Google Maps, IndiaMART, JustDial and websites in minutes.`
);

export const seo_signin = page(
    "/signin/",
    `Sign In | Scrape Genius`,
    `Sign in to your Scrape Genius account.`,
    { robots: NO_INDEX }
);

export const seo_forget_password = page(
    "/forget-password/",
    `Reset Your Password | Scrape Genius`,
    `Reset your Scrape Genius account password.`,
    { robots: NO_INDEX }
);

export const seo_forget_password_email = page(
    "/forgot-password-email/",
    `Reset Your Password | Scrape Genius`,
    `Check your email for the password reset link.`,
    { robots: NO_INDEX }
);

export const seo_verify = page(
    "/verification/",
    `Email Verification | Scrape Genius`,
    `Your email has been verified. You can now use all Scrape Genius features.`,
    { robots: NO_INDEX }
);

export const seo_thanks = page(
    "/thanks/",
    `Thank You | Scrape Genius`,
    `Thank you for contacting Scrape Genius. Our team will get back to you shortly.`,
    { robots: NO_INDEX }
);

export const seo_not_found = {
    title: `Page Not Found | Scrape Genius`,
    description: `This page is not available on Scrape Genius.`,
    robots: NO_INDEX,
};

// ───────────── CRM tools (priority keywords: IndiaMART / JustDial leads) ─────────────

export const seo_indiaMartCrm = page(
    "/services/indiaMart-CRM/",
    `IndiaMART CRM - Auto Import IndiaMART Leads to Excel | Scrape Genius`,
    `Automatically import IndiaMART enquiries into one CRM with no API needed. Export IndiaMART leads to Excel, follow up on call and WhatsApp, and never miss a buyer.`
);

export const seo_justdialCrm = page(
    "/services/justdial-CRM/",
    `JustDial CRM - Auto Download JustDial Leads | Scrape Genius`,
    `Automatically download JustDial enquiries into one CRM in real time with no API needed. Track, follow up and export your JustDial leads to Excel.`
);

export const seo_googleAdsCrm = page(
    "/services/googleAdsCrm/",
    `Google Ads Lead CRM - Manage Ad & Form Leads | Scrape Genius`,
    `Bring leads from your Google Ads and website forms into one CRM through Google Sheets. Track follow-ups, measure campaigns and export leads to Excel.`
);

export const seo_meta_ads = page(
    "/services/meta-Ads-CRM/",
    `Meta Ads CRM - Facebook & Instagram Lead Forms | Scrape Genius`,
    `Collect leads from Facebook and Instagram Instant Forms automatically using Google Sheets or app tokens. Manage follow-ups and export leads in one click.`
);

export const seo_custom_lead_upload = page(
    "/services/custom-lead-upload/",
    `Custom Lead Upload CRM - Import Leads from CSV | Scrape Genius`,
    `Upload your own lead lists from CSV files, validate contacts automatically and manage follow-ups, calls and WhatsApp messages from one CRM.`
);

// ───────────── Lead finders: Indian B2B portals ─────────────

export const seo_indiamart_scraper = page(
    "/services/indiamart-scraper/",
    `IndiaMART Lead Finder - Suppliers & Manufacturers | Scrape Genius`,
    `Find suppliers and manufacturers on IndiaMART with company names, contact numbers, products and prices. Build targeted B2B lead lists in minutes.`
);

export const seo_justdial_scraper = page(
    "/services/justdial-scraper/",
    `JustDial Lead Finder - Local Business Leads | Scrape Genius`,
    `Find local businesses on JustDial by city and category with phone numbers, addresses and ratings. Export leads to Excel or CSV. Free trial available.`
);

export const seo_sulekha_scraper = page(
    "/services/sulekha-scraper/",
    `Sulekha Lead Finder - Service Provider Leads | Scrape Genius`,
    `Find service providers on Sulekha by city and service type with phone numbers and ratings. Build local lead lists in minutes.`
);

export const seo_tradeindia_scraper = page(
    "/services/tradeindia-scraper/",
    `TradeIndia Lead Finder - Exporters & Suppliers | Scrape Genius`,
    `Find exporters and suppliers on TradeIndia with company details, products and contact numbers for sourcing and B2B outreach.`
);

export const seo_exportersindia_scraper = page(
    "/services/exportersindia-scraper/",
    `ExportersIndia Lead Finder - Manufacturers | Scrape Genius`,
    `Find manufacturers and suppliers on ExportersIndia with company profiles, products and contact details for B2B sales and sourcing.`
);

// ───────────── Lead finders: maps & search engines ─────────────

export const seo_google_map = page(
    "/services/google-map-scraper/",
    `Google Maps Lead Finder - Local Business Leads | Scrape Genius`,
    `Find local businesses on Google Maps by category and city. Get phone numbers, emails, websites, addresses and ratings, ready to export to Excel.`
);

export const seo_google_search = page(
    "/services/google-search-scraper/",
    `Google Search Lead Finder - Business Leads by Keyword | Scrape Genius`,
    `Turn any keyword into a list of relevant businesses with websites, emails and phone numbers from Google search results. Export to Excel in one click.`
);

export const seo_bing = page(
    "/services/bing-search-scraper/",
    `Bing Lead Finder - Business Leads from Bing | Scrape Genius`,
    `Find businesses from Bing search results using your target keywords. Get websites, emails and phone numbers and export them to Excel instantly.`
);

export const seo_yahoo = page(
    "/services/yahoo-search-scraper/",
    `Yahoo Lead Finder - Business Leads from Yahoo | Scrape Genius`,
    `Find businesses from Yahoo search results by keyword and get their websites, emails and phone numbers, ready to export to Excel or CSV.`
);

export const seo_duck = page(
    "/services/duckduckgo-search-scraper/",
    `DuckDuckGo Lead Finder - Business Leads by Keyword | Scrape Genius`,
    `Find businesses from DuckDuckGo search results using your keywords and collect their websites, emails and phone numbers for outreach.`
);

// ───────────── Lead finders: contacts & social ─────────────

export const seo_email_scraper = page(
    "/services/email-scraper/",
    `Email Finder - Find Business Emails in Bulk | Scrape Genius`,
    `Find business email addresses from websites, contact pages and directories in bulk. Export to Excel or CSV for your email campaigns. Try it free.`
);

export const seo_phone_scraper = page(
    "/services/phone-scraper/",
    `Phone Number Finder - Business Mobile Numbers | Scrape Genius`,
    `Find mobile and landline numbers of businesses from websites and online listings, ready for your calling and WhatsApp campaigns.`
);

export const seo_facebook = page(
    "/services/facebook-scraper/",
    `Facebook Lead Finder - Business Pages & Contacts | Scrape Genius`,
    `Find business pages on Facebook by keyword with followers, ratings, websites, emails and phone numbers. Build social lead lists for outreach.`
);

export const seo_youtube = page(
    "/services/youtube-scraper/",
    `YouTube Channel Finder - Creators & Influencers | Scrape Genius`,
    `Find YouTube channels by keyword with subscriber, video and view counts. Discover creators and influencers for collaborations and outreach.`
);

// ───────────── Websites, documents & domains ─────────────

export const seo_website_scraper = page(
    "/services/website-data-scraper/",
    `Website Contact Finder - Emails & Phone Numbers | Scrape Genius`,
    `Find emails, phone numbers and social links of websites in your target country and industry. Build B2B contact lists without manual research.`
);

export const seo_live_scraping = page(
    "/services/live-website-scraping/",
    `Live Website Leads - Real-Time Business Contacts | Scrape Genius`,
    `Find businesses from millions of live websites in your chosen country and get phone numbers, emails and social media links in real time.`
);

export const seo_live_data = page(
    "/services/live-website-data/",
    `Website Intelligence - Instant Business Contacts | Scrape Genius`,
    `Get website details, contact numbers and emails of businesses in seconds from our ready-made business index. Filter by country and keyword.`
);

export const seo_directory_scraper = page(
    "/services/business-directory-scraper/",
    `Business Directory Lead Finder | Scrape Genius`,
    `Paste any business directory URL and get the listed companies with phone numbers, emails and addresses. Export to Excel or CSV. Free trial available.`
);

export const seo_document_scraper = page(
    "/services/document-data-scraper/",
    `Document Contact Finder - Contacts from Files | Scrape Genius`,
    `Pull phone numbers and email addresses out of PDF, Word, Excel, CSV and TXT files instantly. Turn old documents into ready-to-use lead lists.`
);

export const seo_image_scraper = page(
    "/services/image-data-scraper/",
    `Image to Text - Visiting Card & Brochure Reader | Scrape Genius`,
    `Upload visiting cards, brochures or screenshots and turn them into editable text and contact details. Save hours of manual typing.`
);

export const seo_whois_data = page(
    "/services/whois-database/",
    `Whois Domain Lookup - 8+ Years of Records | Scrape Genius`,
    `Search 8+ years of domain registration records by year and keyword. Find newly registered businesses and their contact details for outreach.`
);
