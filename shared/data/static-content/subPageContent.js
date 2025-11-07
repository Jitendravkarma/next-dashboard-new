export const LiveScrapingProps = {
  title: (
    <>
    Live <span className="hero-title">Website</span> Scraping
    </>
  ),
  description:
    "Our Live Website Scraping tool fetches real-time data directly from live websites, including keywords, contact details, and Google Maps information (if available). It automates data collection for analysis and tailored applications. Whether you're a business, researcher, or marketer, our service ensures accurate, up-to-date insights to support your data-driven goals.",
  buttonText: "Try For Free",
  buttonLink: "/signup",
  leftImg: "/assets/img/slider-images/livescrapingscreen.png",
  rightImg: "/assets/img/slider-images/gscreen2.png",
};

// Define the properties as an object
export const GooglesearchscraperProps = {
  title: (
    <>
    Google <span className="hero-title">Search</span> Scraper
    </>
  ),
  description:
    "Our Google Search Scraper extracts data like keywords, contact details, and Google Maps results efficiently. It automates data collection for analytics and custom applications. Ideal for businesses, researchers, and marketers, it delivers accurate, reliable insights for diverse data-driven needs.",
  buttonText: "Try For Free",
  buttonLink: "/signup",
  leftImg: "/assets/img/slider-images/gscreen.png",
  rightImg: "/assets/img/slider-images/gscreen2.png",
};

// Define the properties as an object
export const BingsearchscraperProps = {
  title: (
    <>
    Bing <span className="hero-title">Search</span> Scraper
    </>
  ),
  description:
    "Our Bing Search Scraper efficiently extracts valuable data from Bing search results, including keywords, contact information, and even Google Maps links when available. it automates the data collection process for analytics, lead generation, and custom applications. Perfect for businesses, researchers, and marketers, it provides precise, dependable insights to power your data-driven strategies.",
  buttonText: "Try For Free",
  buttonLink: "/signup",
  leftImg: "/assets/img/slider-images/bingscreen.png",
  rightImg: "/assets/img/slider-images/gscreen2.png",
};

// Define the properties as an object
export const DucksearchscraperProps = {
  title: (
    <>
    DuckDuckGo <span className="hero-title">Search</span> Scraper
    </>
  ),
  description:
    "Our DuckDuckGo Search Scraper captures key data from DuckDuckGo search results, including keywords, contact details, and location-related links—while respecting user privacy-focused platforms. It simplifies the data collection process for use in analytics, lead generation, and customized solutions. Ideal for privacy-conscious businesses, researchers, and digital marketers seeking clean, reliable, and real-time insights.",
  buttonText: "Try For Free",
  buttonLink: "/signup",
  leftImg: "/assets/img/slider-images/duckscreen.png",
  rightImg: "/assets/img/slider-images/gscreen2.png",
};

// Define the properties as an object
export const FacebookscraperProps = {
  title: (
    <>
    Facebook Scraper
    </>
  ),
  description:
    "Our Facebook Scraper collects publicly available data like profile names, followers, likes, phone numbers, emails, and more. It’s perfect for marketers and researchers seeking quick, structured insights from Facebook pages and profiles.",
  buttonText: "Try For Free",
  buttonLink: "/signup",
  leftImg: "/assets/img/slider-images/fbscreen.png",
  rightImg: "/assets/img/slider-images/fbscreen2.png",
};

// Define the properties as an object
export const YoutubescraperProps = {
  title: (
    <>
    YouTube Scraper
    </>
  ),
  description:
    "Our YouTube Scraper collects public data like channel names, subscriber counts, video titles, views, likes, and descriptions. It's perfect for content research, competitor analysis, and tracking YouTube performance with ease.",
  buttonText: "Try For Free",
  buttonLink: "/signup",
  leftImg: "/assets/img/slider-images/ytscreen.png",
  rightImg: "/assets/img/slider-images/ytscreen2.png",
};

// Define the properties as an object
export const YahoosearchscraperProps = {
  title: (
    <>
    Yahoo <span className="hero-title">Search</span> Scraper
    </>
  ),
  description:
    "Our Yahoo Search Scraper is designed to pull essential data directly from Yahoo search results—including keywords, business contact information, and location-based links. It streamlines data extraction for analytics, marketing insights, and custom tools. Whether you're in business, research, or digital marketing, this scraper delivers trustworthy and timely data to support your strategic decisions.",
  buttonText: "Try For Free",
  buttonLink: "/signup",
  leftImg: "/assets/img/slider-images/yahooscreen.png",
  rightImg: "/assets/img/slider-images/gscreen2.png",
};

export const googlesearchscraperstatus = [
  { icon: <i className="ri-clipboard-line"></i>, value: "15M+", label: "Total Records" },
  { icon: <i className="ri-global-line"></i>, value: "20M+", label: "Total Website" },
  { icon: <i className="ri-mail-line"></i>, value: "35M+", label: "Total Email" },
  { icon: <i className="ri-phone-line"></i>, value: "43M+", label: "Total Phone" },
];

export const facebookscraperstatus = [
  { icon: <i className="ri-clipboard-line"></i>, value: "15M+", label: "Total Records" },
  { icon: <i className="ri-group-line"></i>, value: "20M+", label: "Total Followers" },
  { icon: <i className="ri-mail-line"></i>, value: "35M+", label: "Total Email" },
  { icon: <i className="ri-phone-line"></i>, value: "43M+", label: "Total Phone" },
];

export const youtubescraperstatus = [
  { icon: <i className="ri-clipboard-line"></i>, value: "15M+", label: "Total Records" },
  { icon: <i className="ri-group-line"></i>, value: "20M+", label: "Total Subscribers" },
  { icon: <i className="ri-video-line"></i>, value: "35M+", label: "Total Videos" },
  { icon: <i className="ri-eye-line"></i>, value: "43M+", label: "Total Views" },
];

export const livescraperdataget = [
  { tooltips: 'The official website address of the place or service', keywords: 'Website' },
  { tooltips: 'The name or title of a place or service.', keywords: 'Title' },
  { tooltips: 'The phone number to contact the place or service.', keywords: 'Phone Number' },
  { tooltips: 'The email address associated with the place or service', keywords: 'Email' },
  { tooltips: 'A brief description providing details about the place or service.', keywords: 'Description' },
  { tooltips: 'The keyword or query term used for searching in Google Search.', keywords: 'Keywords' },
  { tooltips: 'Get the all social media links for searched results', keywords: 'Social Links' },
  { tooltips: 'The specific keyword or query term used during the search process.', keywords: 'Searched Keyword' }
];

export const facebookscraperdataget = [
  { tooltips: 'The name or title of a place or service.', keywords: 'Profile Name' },
  { tooltips: 'Get the number of followers.', keywords: 'Followers' },
  { tooltips: 'Get the number of post likes', keywords: 'Likes' },
  { tooltips: 'Know the rating of Accounts', keywords: 'Ratings' },
  { tooltips: 'The official website address of the place or service', keywords: 'Website' },
  { tooltips: 'The phone number to contact the place or service.', keywords: 'Phone Number' },
  { tooltips: 'The email address associated with the place or service', keywords: 'Email' },
  { tooltips: 'The specific keyword or query term used during the search process.', keywords: 'Searched Keyword' }
];

export const youtubescraperdataget = [
  { tooltips: 'The name of the YouTube channel', keywords: 'Channel Name' },
  { tooltips: 'The name of the YouTube profile name', keywords: 'Profile Name' },
  { tooltips: 'The image of the YouTube Profile', keywords: 'Profile Image' },
  { tooltips: 'Get the number of subscribers.', keywords: 'Subscribers' },
  { tooltips: 'Get the number of total videos', keywords: 'Videos' },
  { tooltips: 'Get the number of total views', keywords: 'Views' },
  { tooltips: 'The specific keyword or query term used during the search process.', keywords: 'Searched Keyword' }
];

export const googlesearchscraperdataget = [
  { tooltips: 'The name or title of a place or service.', keywords: 'Title' },
  { tooltips: 'The email address associated with the place or service', keywords: 'Email' },
  { tooltips: 'The phone number to contact the place or service.', keywords: 'Phone Number' },
  { tooltips: 'The official website address of the place or service', keywords: 'Website' },
  { tooltips: 'A brief description providing details about the place or service.', keywords: 'Description' },
  { tooltips: 'The keyword or query term used for searching in Google Search.', keywords: 'Keywords' },
  { tooltips: 'The full address of the place, including street, city, and zip code.', keywords: 'Address' },
  { tooltips: 'The specific keyword or query term used during the search process.', keywords: 'Searched Keyword' }
];

export const bingsearchscraperdataget = [
  { tooltips: 'The official website address of the place or service', keywords: 'Website' },
  { tooltips: 'The name or title of a place or service.', keywords: 'Title' },
  { tooltips: 'The phone number to contact the place or service.', keywords: 'Phone Number' },
  { tooltips: 'The email address associated with the place or service', keywords: 'Email' },
  { tooltips: 'A brief description providing details about the place or service.', keywords: 'Description' },
  { tooltips: 'The keyword or query term used for searching in Google Search.', keywords: 'Keywords' },
  { tooltips: 'The full address of the place, including street, city, and zip code.', keywords: 'Address' },
  { tooltips: 'The specific keyword or query term used during the search process.', keywords: 'Searched Keyword' }
];

export const yahoosearchscraperdataget = [
  { tooltips: 'The official website address of the place or service', keywords: 'Website' },
  { tooltips: 'The name or title of a place or service.', keywords: 'Title' },
  { tooltips: 'The email address associated with the place or service', keywords: 'Email' },
  { tooltips: 'The phone number to contact the place or service.', keywords: 'Phone Number' },
  { tooltips: 'Get the all social media links for searched results.', keywords: 'Social Links' },
  { tooltips: 'A brief description providing details about the place or service.', keywords: 'Description' },
  { tooltips: 'The keyword or query term used for searching in Google Search.', keywords: 'Keywords' },
  { tooltips: 'The full address of the place, including street, city, and zip code.', keywords: 'Address' },
  { tooltips: 'The specific keyword or query term used during the search process.', keywords: 'Searched Keyword' }
];

export const HowitworksGooglesearchscraper = {
  mainheading: "<span className='text-blue-500'>How It </span>Works?",
  scrapers: [
    {
      subheading: "Google Search Scraper (Scrape By Query)",
      paragraph: "Start by typing in the specific search term you’re interested in. For example, you might search for 'schools in London contact details.' This search query will guide our Google Search Scraper to provide precise results by scraping Google search results.",
      description: "Start by typing in the specific search term you’re interested in. For example, you might search for 'schools in London contact details.' This search query will guide our Google Search Scraper to provide precise results by scraping Google search results.",
      imageSrc: "/assets/iconfonts/dashboard-icon/google.png",
      sectionHeading: "Scrape By Query", // Dynamic section heading
      link: "/signup",
      buttonText: "Try Now",
      pretitle: "Search Engine",
      presubtitle: "Lead Generation",
    },
    {
      subheading: "Google Search Scraper (Initiate the Extraction)",
      paragraph: "Once you’ve entered your query, simply click the search button to start the extraction process. Our tool will begin web scraping Google search results based on your input, utilizing advanced Google search scraper APIs and Python-based extraction techniques.",
      description: "Once you’ve entered your query, simply click the search button to start the extraction process. Our tool will begin web scraping Google search results based on your input, utilizing advanced Google search scraper APIs and Python-based extraction techniques.",
      imageSrc: "/assets/iconfonts/dashboard-icon/google.png",
      sectionHeading: "Initiate the Extraction", // Dynamic section heading
      link: "/signup",
      buttonText: "Try Now",
      pretitle: "Search Engine",
      presubtitle: "Lead Generation",
    },
    {
      subheading: "Google Search Scraper (Data Extraction)",
      paragraph: "Once the extraction is complete, you’ll receive an organized list of all emails found. Our web scraping service provides clear results, allowing you to quickly review and utilize the website data scraper output for your needs",
      description: "Once the extraction is complete, you’ll receive an organized list of all emails found. Our web scraping service provides clear results, allowing you to quickly review and utilize the website data scraper output for your needs",
      imageSrc: "/assets/iconfonts/dashboard-icon/google.png",
      sectionHeading: "Data Extraction", // Dynamic section heading
      link: "/signup",
      buttonText: "Try Now",
      pretitle: "Search Engine",
      presubtitle: "Lead Generation",
    },
    {
      subheading: "Google Search Scraper (Review the Results)",
      paragraph: "Once the extraction is complete, you’ll receive a detailed list of results. Review the information, which is presented in an easy-to-read format. This Google search scraper tool lets you quickly use and analyze the data, making it valuable for various applications",
      description: "Once the extraction is complete, you’ll receive a detailed list of results. Review the information, which is presented in an easy-to-read format. This Google search scraper tool lets you quickly use and analyze the data, making it valuable for various applications",
      imageSrc: "/assets/iconfonts/dashboard-icon/google.png",
      sectionHeading: "Review the Results", // Dynamic section heading
      link: "/signup",
      buttonText: "Try Now",
      pretitle: "Search Engine",
      presubtitle: "Lead Generation",
    },
    {
      subheading: "Google Search Scraper (Download or Export Data)",
      paragraph: "Finally, you have the option to download or export the data in CSV format, ready for further use. Whether for research, lead generation, or contacting businesses.",
      description: "Finally, you have the option to download or export the data in CSV format, ready for further use. Whether for research, lead generation, or contacting businesses.",
      imageSrc: "/assets/iconfonts/dashboard-icon/google.png",
      sectionHeading: "Download or Export Data", // Dynamic section heading
      link: "/signup",
      buttonText: "Try Now",
      pretitle: "Search Engine",
      presubtitle: "Lead Generation",
    },
  ],
};

export const HowitworksBingsearchscraper = {
  mainheading: "<span className='text-blue-500'>How It </span>Works?",
  scrapers: [
    {
      subheading: "Bing Search Scraper (Scrape By Keyword)",
      paragraph: "Start by typing in the specific search term you’re interested in. For example, you might search for 'schools in London contact details.' This search Keyword will guide our Bing Search Scraper to provide precise results by scraping Bing search results.",
      description: "Start by typing in the specific search term you’re interested in. For example, you might search for 'schools in London contact details.' This search Keyword will guide our Bing Search Scraper to provide precise results by scraping Bing search results.",
      imageSrc: "/assets/iconfonts/dashboard-icon/bing.png",
      sectionHeading: "Scrape By Keyword", // Dynamic section heading
      link: "/signup",
      buttonText: "Try Now",
      pretitle: "Search Engine",
      presubtitle: "Lead Generation",
    },
    {
      subheading: "Bing Search Scraper (Initiate the Extraction)",
      paragraph: "Once you enter your query, simply click the search button to initiate the extraction process. Our tool will begin scraping Bing search results based on your input, leveraging advanced Bing search scraper APIs.",
      description: "Once you enter your query, simply click the search button to initiate the extraction process. Our tool will begin scraping Bing search results based on your input, leveraging advanced Bing search scraper APIs.",
      imageSrc: "/assets/iconfonts/dashboard-icon/bing.png",
      sectionHeading: "Initiate the Extraction", // Dynamic section heading
      link: "/signup",
      buttonText: "Try Now",
      pretitle: "Search Engine",
      presubtitle: "Lead Generation",
    },
    {
      subheading: "Bing Search Scraper (Data Extraction)",
      paragraph: "Once the extraction is complete, you’ll receive a neatly organized list of all the emails found. Our web scraping service delivers clear results, enabling you to quickly review and utilize the website data scraper output as needed.",
      description: "Once the extraction is complete, you’ll receive a neatly organized list of all the emails found. Our web scraping service delivers clear results, enabling you to quickly review and utilize the website data scraper output as needed.",
      imageSrc: "/assets/iconfonts/dashboard-icon/bing.png",
      sectionHeading: "Data Extraction", // Dynamic section heading
      link: "/signup",
      buttonText: "Try Now",
      pretitle: "Search Engine",
      presubtitle: "Lead Generation",
    },
    {
      subheading: "Bing Search Scraper (Review the Results)",
      paragraph: "Once the extraction is complete, you’ll receive a detailed list of results, presented in an easy-to-read format. This Bing search scraper tool allows you to quickly review, use, and analyze the data, making it valuable for a wide range of applications.",
      description: "Once the extraction is complete, you’ll receive a detailed list of results, presented in an easy-to-read format. This Bing search scraper tool allows you to quickly review, use, and analyze the data, making it valuable for a wide range of applications.",
      imageSrc: "/assets/iconfonts/dashboard-icon/bing.png",
      sectionHeading: "Review the Results", // Dynamic section heading
      link: "/signup",
      buttonText: "Try Now",
      pretitle: "Search Engine",
      presubtitle: "Lead Generation",
    },
    {
      subheading: "Bing Search Scraper (Download or Export Data)",
      paragraph: "Finally, you have the option to download or export the data in CSV format, ready for further use. Whether for research, lead generation, or contacting businesses.",
      description: "Finally, you have the option to download or export the data in CSV format, ready for further use. Whether for research, lead generation, or contacting businesses.",
      imageSrc: "/assets/iconfonts/dashboard-icon/bing.png",
      sectionHeading: "Download or Export Data", // Dynamic section heading
      link: "/signup",
      buttonText: "Try Now",
      pretitle: "Search Engine",
      presubtitle: "Lead Generation",
    },
  ],
};

export const HowitworksYahoosearchscraper = {
  mainheading: "<span className='text-blue-500'>How It </span>Works?",
  scrapers: [
    {
      subheading: "Yahoo Search Scraper (Scrape By Keywords)",
      paragraph: "Start by typing the specific search term you're interested in. For example, you could search for 'schools in London contact details.' These search keywords will guide our Yahoo Search Scraper to deliver precise results by scraping Yahoo search results.",
      description: "Start by typing the specific search term you're interested in. For example, you could search for 'schools in London contact details.' These search keywords will guide our Yahoo Search Scraper to deliver precise results by scraping Yahoo search results.",
      imageSrc: "/assets/iconfonts/dashboard-icon/yahoo.png",
      sectionHeading: "Scrape By Keywords", // Dynamic section heading
      link: "/signup",
      buttonText: "Try Now",
      pretitle: "Search Engine",
      presubtitle: "Lead Generation",
    },
    {
      subheading: "Yahoo Search Scraper (Initiate the Extraction)",
      paragraph: "Once you enter your query, simply click the search button to begin the extraction process. Our tool will start scraping Yahoo search results based on your input, utilizing advanced Yahoo search scraper APIs.",
      description: "Once you enter your query, simply click the search button to begin the extraction process. Our tool will start scraping Yahoo search results based on your input, utilizing advanced Yahoo search scraper APIs.",
      imageSrc: "/assets/iconfonts/dashboard-icon/yahoo.png",
      sectionHeading: "Initiate the Extraction", // Dynamic section heading
      link: "/signup",
      buttonText: "Try Now",
      pretitle: "Search Engine",
      presubtitle: "Lead Generation",
    },
    {
      subheading: "Yahoo Search Scraper (Data Extraction)",
      paragraph: "Once the extraction is complete, you’ll receive an organized list of all the emails found. Our web scraping service delivers clear results, enabling you to quickly review and utilize the scraped data for your needs.",
      description: "Once the extraction is complete, you’ll receive an organized list of all the emails found. Our web scraping service delivers clear results, enabling you to quickly review and utilize the scraped data for your needs.",
      imageSrc: "/assets/iconfonts/dashboard-icon/yahoo.png",
      sectionHeading: "Data Extraction", // Dynamic section heading
      link: "/signup",
      buttonText: "Try Now",
      pretitle: "Search Engine",
      presubtitle: "Lead Generation",
    },
    {
      subheading: "Yahoo Search Scraper (Review the Results)",
      paragraph: "Once the extraction is complete, you’ll receive a detailed list of results, presented in an easy-to-read format. This Yahoo search scraper tool allows you to quickly use and analyze the data, making it valuable for a variety of applications.",
      description: "Once the extraction is complete, you’ll receive a detailed list of results, presented in an easy-to-read format. This Yahoo search scraper tool allows you to quickly use and analyze the data, making it valuable for a variety of applications.",
      imageSrc: "/assets/iconfonts/dashboard-icon/yahoo.png",
      sectionHeading: "Review the Results", // Dynamic section heading
      link: "/signup",
      buttonText: "Try Now",
      pretitle: "Search Engine",
      presubtitle: "Lead Generation",
    },
    {
      subheading: "Yahoo Search Scraper (Download or Export Data)",
      paragraph: "Finally, you have the option to download or export the data in CSV format, ready for further use. Whether for research, lead generation, or contacting businesses.",
      description: "Finally, you have the option to download or export the data in CSV format, ready for further use. Whether for research, lead generation, or contacting businesses.",
      imageSrc: "/assets/iconfonts/dashboard-icon/yahoo.png",
      sectionHeading: "Download or Export Data", // Dynamic section heading
      link: "/signup",
      buttonText: "Try Now",
      pretitle: "Search Engine",
      presubtitle: "Lead Generation",
    },
  ],
};

export const HowitworksDucksearchscraper = {
  mainheading: "<span className='text-blue-500'>How It </span>Works?",
  scrapers: [
    {
      subheading: "DuckDuckGo Search Scraper (Scrape By Query)",
      paragraph: "Begin by entering the specific search term you’re interested in. For instance, you could search for 'schools in London contact details.' This query will direct our DuckDuckGo Search Scraper to deliver precise results by extracting relevant data from DuckDuckGo search results.",
      description: "Begin by entering the specific search term you’re interested in. For instance, you could search for 'schools in London contact details.' This query will direct our DuckDuckGo Search Scraper to deliver precise results by extracting relevant data from DuckDuckGo search results.",
      imageSrc: "/assets/iconfonts/dashboard-icon/duckduckgo.png",
      sectionHeading: "Scrape By Query", // Dynamic section heading
      link: "/signup",
      buttonText: "Try Now",
      pretitle: "Search Engine",
      presubtitle: "Lead Generation",
    },
    {
      subheading: "DuckDuckGo Search Scraper (Initiate the Extraction)",
      paragraph: "After entering your query, click the search button to begin the extraction process. Our tool will efficiently scrape DuckDuckGo search results based on your input, utilizing sophisticated search scraper APIs to ensure precise and accurate data retrieval.",
      description: "After entering your query, click the search button to begin the extraction process. Our tool will efficiently scrape DuckDuckGo search results based on your input, utilizing sophisticated search scraper APIs to ensure precise and accurate data retrieval.",
      imageSrc: "/assets/iconfonts/dashboard-icon/duckduckgo.png",
      sectionHeading: "Initiate the Extraction", // Dynamic section heading
      link: "/signup",
      buttonText: "Try Now",
      pretitle: "Search Engine",
      presubtitle: "Lead Generation",
    },
    {
      subheading: "DuckDuckGo Search Scraper (Data Extraction)",
      paragraph: "Upon completion of the extraction, you’ll receive a well-organized list of all the emails identified. Our web scraping service delivers clear, actionable results, enabling you to efficiently review and utilize the data for your specific needs.",
      description: "Upon completion of the extraction, you’ll receive a well-organized list of all the emails identified. Our web scraping service delivers clear, actionable results, enabling you to efficiently review and utilize the data for your specific needs.",
      imageSrc: "/assets/iconfonts/dashboard-icon/duckduckgo.png",
      sectionHeading: "Data Extraction", // Dynamic section heading
      link: "/signup",
      buttonText: "Try Now",
      pretitle: "Search Engine",
      presubtitle: "Lead Generation",
    },
    {
      subheading: "DuckDuckGo Search Scraper (Review the Results)",
      paragraph: "Once the extraction is complete, you’ll receive a comprehensive list of results, presented in a clear and user-friendly format. This DuckDuckGo search scraper tool enables you to quickly analyze and utilize the data, making it highly valuable for a wide range of applications.",
      description: "Once the extraction is complete, you’ll receive a comprehensive list of results, presented in a clear and user-friendly format. This DuckDuckGo search scraper tool enables you to quickly analyze and utilize the data, making it highly valuable for a wide range of applications.",
      imageSrc: "/assets/iconfonts/dashboard-icon/duckduckgo.png",
      sectionHeading: "Review the Results", // Dynamic section heading
      link: "/signup",
      buttonText: "Try Now",
      pretitle: "Search Engine",
      presubtitle: "Lead Generation",
    },
    {
      subheading: "DuckDuckGo Search Scraper (Download or Export Data)",
      paragraph: "Finally, you have the option to download or export the data in CSV format, ready for further use. Whether for research, lead generation, or contacting businesses.",
      description: "Finally, you have the option to download or export the data in CSV format, ready for further use. Whether for research, lead generation, or contacting businesses.",
      imageSrc: "/assets/iconfonts/dashboard-icon/duckduckgo.png",
      sectionHeading: "Download or Export Data", // Dynamic section heading
      link: "/signup",
      buttonText: "Try Now",
      pretitle: "Search Engine",
      presubtitle: "Lead Generation",
    },
  ],
};

export const HowitworksFacebookscraper = {
  mainheading: "<span className='text-blue-500'>How It </span>Works?",
  scrapers: [
    {
      subheading: "Facebook Scraper (Scrape By Query)",
      paragraph: "Begin by entering the specific search term you’re interested in. For example, you might search for 'schools contact number in London.' This query will direct our Facebook Scraper to retrieve precise results by extracting data from public Facebook profiles, including phone numbers, profile names, addresses, followers, and more.",
      description: "Begin by entering the specific search term you’re interested in. For example, you might search for 'schools contact number in London.' This query will direct our Facebook Scraper to retrieve precise results by extracting data from public Facebook profiles, including phone numbers, profile names, addresses, followers, and more.",
      imageSrc: "/assets/iconfonts/dashboard-icon/facebook.png",
      sectionHeading: "Scrape By Query", // Dynamic section heading
      link: "/signup",
      buttonText: "Try Now",
      pretitle: "Social Media",
      presubtitle: "Lead Generation",
    },
    {
      subheading: "Facebook Scraper (Initiate the Extraction)",
      paragraph: "Once you’ve entered your query, click the search button to initiate the extraction process. Our tool will begin collecting data from public Facebook profiles based on your input.",
      description: "Once you’ve entered your query, click the search button to initiate the extraction process. Our tool will begin collecting data from public Facebook profiles based on your input.",
      imageSrc: "/assets/iconfonts/dashboard-icon/facebook.png",
      sectionHeading: "Initiate the Extraction", // Dynamic section heading
      link: "/signup",
      buttonText: "Try Now",
      pretitle: "Social Media",
      presubtitle: "Lead Generation",
    },
    {
      subheading: "Facebook Scraper (Data Extraction)",
      paragraph: "Once the extraction is complete, you’ll receive an organized list of all profiles found on Facebook. This service delivers clear, actionable results, enabling you to efficiently review and utilize the data for your specific needs.",
      description: "Once the extraction is complete, you’ll receive an organized list of all profiles found on Facebook. This service delivers clear, actionable results, enabling you to efficiently review and utilize the data for your specific needs.",
      imageSrc: "/assets/iconfonts/dashboard-icon/facebook.png",
      sectionHeading: "Data Extraction", // Dynamic section heading
      link: "/signup",
      buttonText: "Try Now",
      pretitle: "Social Media",
      presubtitle: "Lead Generation",
    },
    {
      subheading: "Facebook Scraper (Review the Results)",
      paragraph: "Once the extraction is complete, you’ll receive a detailed list of results, presented in a clear and easy-to-read format. This tool allows you to quickly analyze and utilize the data, making it highly valuable for a variety of applications.",
      description: "Once the extraction is complete, you’ll receive a detailed list of results, presented in a clear and easy-to-read format. This tool allows you to quickly analyze and utilize the data, making it highly valuable for a variety of applications.",
      imageSrc: "/assets/iconfonts/dashboard-icon/facebook.png",
      sectionHeading: "Review the Results", // Dynamic section heading
      link: "/signup",
      buttonText: "Try Now",
      pretitle: "Social Media",
      presubtitle: "Lead Generation",
    },
    {
      subheading: "Facebook Scraper (Download or Export Data)",
      paragraph: "Finally, you have the option to download or export the data in CSV format, ready for further use. Whether for research, lead generation, or contacting businesses.",
      description: "Finally, you have the option to download or export the data in CSV format, ready for further use. Whether for research, lead generation, or contacting businesses.",
      imageSrc: "/assets/iconfonts/dashboard-icon/facebook.png",
      sectionHeading: "Download or Export Data", // Dynamic section heading
      link: "/signup",
      buttonText: "Try Now",
      pretitle: "Social Media",
      presubtitle: "Lead Generation",
    },
  ],
};

export const HowitworksYoutubescraper = {
  mainheading: "<span className='text-blue-500'>How It </span>Works?",
  scrapers: [
    {
      subheading: "YouTube Scraper (Scrape By Query)",
      paragraph: "Begin by entering the specific search term you're interested in. For example, you might search for 'schools YouTube details in London.' This query will guide our YouTube Scraper to retrieve precise results, including channel details such as subscribers, videos, views, and more.",
      description: "Begin by entering the specific search term you're interested in. For example, you might search for 'schools YouTube details in London.' This query will guide our YouTube Scraper to retrieve precise results, including channel details such as subscribers, videos, views, and more.",
      imageSrc: "/assets/iconfonts/dashboard-icon/youtube.png",
      sectionHeading: "Scrape By Query", // Dynamic section heading
      link: "/signup",
      buttonText: "Try Now",
      pretitle: "Social Media",
      presubtitle: "Lead Generation",
    },
    {
      subheading: "YouTube Scraper (Initiate the Extraction)",
      paragraph: "Once you’ve entered your query, click the search button to initiate the extraction process. Our tool will begin collecting results based on your input or selected keywords.",
      description: "Once you’ve entered your query, click the search button to initiate the extraction process. Our tool will begin collecting results based on your input or selected keywords.",
      imageSrc: "/assets/iconfonts/dashboard-icon/youtube.png",
      sectionHeading: "Initiate the Extraction", // Dynamic section heading
      link: "/signup",
      buttonText: "Try Now",
      pretitle: "Social Media",
      presubtitle: "Lead Generation",
    },
    {
      subheading: "YouTube Scraper (Data Extraction)",
      paragraph: "Once the extraction is complete, you’ll receive an organized list of YouTube channel details. Our tool delivers clear results, allowing you to efficiently review and utilize the data for your specific needs.",
      description: "Once the extraction is complete, you’ll receive an organized list of YouTube channel details. Our tool delivers clear results, allowing you to efficiently review and utilize the data for your specific needs.",
      imageSrc: "/assets/iconfonts/dashboard-icon/youtube.png",
      sectionHeading: "Data Extraction", // Dynamic section heading
      link: "/signup",
      buttonText: "Try Now",
      pretitle: "Social Media",
      presubtitle: "Lead Generation",
    },
    {
      subheading: "YouTube Scraper (Review the Results)",
      paragraph: "Once the extraction is complete, you’ll receive a detailed list of results of YouTube profiles. Review the information, which is presented in an easy-to-read format. This tool lets you quickly use and analyze the data, making it valuable for various applications",
      description: "Once the extraction is complete, you’ll receive a detailed list of results of YouTube profiles. Review the information, which is presented in an easy-to-read format. This tool lets you quickly use and analyze the data, making it valuable for various applications",
      imageSrc: "/assets/iconfonts/dashboard-icon/youtube.png",
      sectionHeading: "Review the Results", // Dynamic section heading
      link: "/signup",
      buttonText: "Try Now",
      pretitle: "Social Media",
      presubtitle: "Lead Generation",
    },
    {
      subheading: "YouTube Scraper (Download or Export Data)",
      paragraph: "Finally, you have the option to download or export the data in CSV format, ready for further use. Whether for research, lead generation, or contacting businesses.",
      description: "Finally, you have the option to download or export the data in CSV format, ready for further use. Whether for research, lead generation, or contacting businesses.",
      imageSrc: "/assets/iconfonts/dashboard-icon/youtube.png",
      sectionHeading: "Download or Export Data", // Dynamic section heading
      link: "/signup",
      buttonText: "Try Now",
      pretitle: "Social Media",
      presubtitle: "Lead Generation",
    },
  ],
};

export const HowitworksLiveScraping = {
  mainheading: "<span className='text-blue-500'>How It </span>Works?",
  scrapers: [
    {
      subheading: "Live Website Scraping (Scrape By Country Selection)",
      paragraph: "Start scraping by simply selecting a country and clicking the Start button. Instantly begin collecting efficient, targeted data tailored to your selected region—quick, easy, and hassle-free!",
      description: "Start scraping by simply selecting a country and clicking the Start button. Instantly begin collecting efficient, targeted data tailored to your selected region—quick, easy, and hassle-free!",
      imageSrc: "/assets/iconfonts/dashboard-icon/live.png",
      sectionHeading: "Scrape By Country Name", // Dynamic section heading
      link: "/signup",
      buttonText: "Try Now",
      pretitle: "Live Website Scraping",
      presubtitle: "Lead Generation",
    },
    {
      subheading: "Live Website Scraping (Initiate the Extraction)",
      paragraph: "Once you’ve select the country, simply click on the start button to start the extraction process. Our tool will begin web scraping and start data collection from live websites",
      description: "Once you’ve select the country, simply click the start button to start the extraction process. Our tool will begin web scraping and start data collection from live websites",
      imageSrc: "/assets/iconfonts/dashboard-icon/live.png",
      sectionHeading: "Initiate the Extraction", // Dynamic section heading
      link: "/signup",
      buttonText: "Try Now",
      pretitle: "Live Website Scraping",
      presubtitle: "Lead Generation",
    },
    {
      subheading: "Live Website Scraping (Data Extraction)",
      paragraph: "Once the extraction is complete, you’ll receive an organized list of collected data from websites. Our Lice website scraping service provides clear results, allowing you to quickly review and utilize the searched records easily.",
      description: "Once the extraction is complete, you’ll receive an organized list of collected data from websites. Our Lice website scraping service provides clear results, allowing you to quickly review and utilize the searched records easily.",
      imageSrc: "/assets/iconfonts/dashboard-icon/live.png",
      sectionHeading: "Data Extraction", // Dynamic section heading
      link: "/signup",
      buttonText: "Try Now",
      pretitle: "Live Website Scraping",
      presubtitle: "Lead Generation",
    },
    {
      subheading: "Live Website Scraping (Review the Results)",
      paragraph: "Once the extraction is complete, you’ll receive a detailed list of results. Review the information, which is presented in an easy-to-read format. This tool lets you quickly use and analyze the data, making it valuable for various applications",
      description: "Once the extraction is complete, you’ll receive a detailed list of results. Review the information, which is presented in an easy-to-read format. This tool lets you quickly use and analyze the data, making it valuable for various applications",
      imageSrc: "/assets/iconfonts/dashboard-icon/live.png",
      sectionHeading: "Review the Results", // Dynamic section heading
      link: "/signup",
      buttonText: "Try Now",
      pretitle: "Live Website Scraping",
      presubtitle: "Lead Generation",
    },
    {
      subheading: "Live Website Scraping (Download or Export Data)",
      paragraph: "Finally, you have the option to download or export the data in CSV format, ready for further use. Whether for research, lead generation, or contacting businesses.",
      description: "Finally, you have the option to download or export the data in CSV format, ready for further use. Whether for research, lead generation, or contacting businesses.",
      imageSrc: "/assets/iconfonts/dashboard-icon/live.png",
      sectionHeading: "Download or Export Data", // Dynamic section heading
      link: "/signup",
      buttonText: "Try Now",
      pretitle: "Live Website Scraping",
      presubtitle: "Lead Generation",
    },
  ],
};

export const LiveScraperVideo = {
  heading: "<span className='text-blue-500'>Watch a</span>Demo",
  videoUrl: "XjvB_8ytM58?si=SsPUdkdZ3SrB15cL",
  buttonText: "Get Started",
  buttonLink: "/signup",
};

export const LiveDataVideo = {
  heading: "<span className='text-blue-500'>Watch a</span>Demo",
  videoUrl: "ml-Jwi1ktlY?si=M40qSyirGaHz7Fx_",
  buttonText: "Get Started",
  buttonLink: "/signup",
};

export const DuckScraperVideo = {
  heading: "<span className='text-blue-500'>Watch a</span>Demo",
  videoUrl: "dERJQhBtSd0?si=Loh6icLPQdttUsfU",
  buttonText: "Get Started",
  buttonLink: "/signup",
};

export const FacebookScraperVideo = {
  heading: "<span className='text-blue-500'>Watch a</span>Demo",
  videoUrl: "S9xClhXFAu0?si=NvpNRjnf63QZ4gur",
  buttonText: "Get Started",
  buttonLink: "/signup",
};

export const YoutubeScraperVideo = {
  heading: "<span className='text-blue-500'>Watch a</span>Demo",
  videoUrl: "6S46UhmaSwg?si=U0RJGj_DL2ekJFCD",
  buttonText: "Get Started",
  buttonLink: "/signup",
};

export const GooglesearchscraperVideo = {
  heading: "<span className='text-blue-500'>Watch a</span>Demo",
  videoUrl: "t_ziUplJMjc?si=NQ75yw6_Q6z7jPPE",
  buttonText: "Get Started",
  buttonLink: "/signup",
};

export const BingsearchscraperVideo = {
  heading: "<span className='text-blue-500'>Watch a</span>Demo",
  videoUrl: "FzhB9wRwZlA?si=BHbQJ6if3r1aMsOM",
  buttonText: "Get Started",
  buttonLink: "/signup",
};

export const YahoosearchscraperVideo = {
  heading: "<span className='text-blue-500'>Watch a</span>Demo",
  videoUrl: "w15iPuDbtBo?si=cQjcZkk8wgI6GjHx",
  buttonText: "Get Started",
  buttonLink: "/signup",
};

// Google map Scraper

// Define the properties as an object
export const GooglesmapscraperProps = {
  title: (
    <>
    Google <span className="hero-title">Map</span> Scraper
    </>
  ),
  description:
    "Our Google Map Extractor extracts structured data like businesses, addresses, phone numbers, and reviews from Google Maps. Perfect for marketers and researchers, it streamlines geographic data collection, providing essential details for campaigns and analysis. A reliable tool for quick, accurate information from Google Maps.",
  buttonText: "Try For Free",
  buttonLink: "/signup",
  leftImg: "/assets/img/slider-images/mscreen.png",
  rightImg: "/assets/img/slider-images/mscreen2.png",
};

export const googlemapscraperstatus = [
  { icon: <i className="ri-file-text-line"></i>, value: "15M+", label: "Total Records" },
  { icon: <i className="ri-global-line"></i>, value: "20M+", label: "Total Website" },
  { icon: <i className="ri-mail-line"></i>, value: "35M+", label: "Total Email" },
  { icon: <i className="ri-phone-line"></i>, value: "43M+", label: "Total Phone" },
];

export const googlemapscraperdataget = [

  { tooltips: 'The name or title of a place or service.', keywords: 'Title' },
  { tooltips: 'The email address associated with the place or service', keywords: 'Email' },
  { tooltips: 'The phone number to contact the place or service.', keywords: 'Phone Number' },
  { tooltips: 'The official website address of the place or service', keywords: 'Website' },
  { tooltips: 'The map link or URL for the location of the place.', keywords: 'Map URL' },
  { tooltips: 'A brief description providing details about the place or service.', keywords: 'Description' },
  { tooltips: 'The keyword or query term used for searching in Google Search.', keywords: 'Keywords' },
  { tooltips: 'The full address of the place, including street, city, and zip code.', keywords: 'Address' },
  { tooltips: 'The average rating of the place, ranging from 1.0 to 5.0, based on user reviews.', keywords: 'Rating' },
  { tooltips: 'User-generated reviews and feedback about the place.', keywords: 'Review' },
  { tooltips: 'The geographical latitude coordinate in decimal degrees.', keywords: 'Latitude' },
  { tooltips: 'The geographical longitude coordinate in decimal degrees.', keywords: 'Longitude' },

];

export const HowitworksGooglesmapscraper = {
  mainheading: "<span className='text-blue-500'>How It </span>Works?",
  scrapers: [
    {
      subheading: "Google Map Scraper (Scrape By Keyword)",
      paragraph: "After entering the Keyword, click the extract button to start the process. Our website data scraper software will scan the website for email addresses and other relevant data, utilizing efficient web scraper technology to ensure comprehensive extraction",
      description: "After entering the URL, click the extract button to start the process. Our website data scraper software will scan the website for email addresses and other relevant data, utilizing efficient web scraper technology to ensure comprehensive extraction",
      imageSrc: "/assets/iconfonts/dashboard-icon/gmapIcon.png",
      sectionHeading: "Initiate the Scraping Process", // Dynamic section heading
      link: "/signup",
      buttonText: "Try Now",
      pretitle: "Map Search Engine",
      presubtitle: "Lead Generation",
    },
    {
      subheading: "Google Map Scraper (Extract Emails)",
      paragraph: "The web scraper identifies and extracts all available email addresses on the website, including those found on contact pages, footers, or other areas. Our data scraping tools make this process seamless, gathering information with precision",
      description: "The web scraper identifies and extracts all available email addresses on the website, including those found on contact pages, footers, or other areas. Our data scraping tools make this process seamless, gathering information with precision",
      imageSrc: "/assets/iconfonts/dashboard-icon/gmapIcon.png",
      sectionHeading: "Extract Emails", // Dynamic section heading
      link: "/signup",
      buttonText: "Try Now",
      pretitle: "Map Search Engine",
      presubtitle: "Lead Generation",
    },
    {
      subheading: "Google Map Scraper (Review the Results)",
      paragraph: "Once the extraction is complete, you’ll receive an organized list of all emails found. Our web scraping service provides clear results, allowing you to quickly review and utilize the website data scraper output for your needs",
      description: "Once the extraction is complete, you’ll receive an organized list of all emails found. Our web scraping service provides clear results, allowing you to quickly review and utilize the website data scraper output for your needs",
      imageSrc: "/assets/iconfonts/dashboard-icon/gmapIcon.png",
      sectionHeading: "Review the Results", // Dynamic section heading
      link: "/signup",
      buttonText: "Try Now",
      pretitle: "Map Search Engine",
      presubtitle: "Lead Generation",
    },
    {
      subheading: "Google Map Scraper (Analyze the Results)",
      paragraph: "Review the extracted data in an organized format to identify the most relevant information. Our web scraping tools are designed for easy analysis, making it simple to leverage the data for lead generation or research purposes.",
      description: "Review the extracted data in an organized format to identify the most relevant information. Our web scraping tools are designed for easy analysis, making it simple to leverage the data for lead generation or research purposes.",
      imageSrc: "/assets/iconfonts/dashboard-icon/gmapIcon.png",
      sectionHeading: "Analyze the Results", // Dynamic section heading
      link: "/signup",
      buttonText: "Try Now",
      pretitle: "Map Search Engine",
      presubtitle: "Lead Generation",
    },
    {
      subheading: "Google Map Scraper (Download or Export Data)",
      paragraph: "Finally, you have the option to download or export the data in CSV format, ready for further use. Whether for research, lead generation, or contacting businesses.",
      description: "Finally, you have the option to download or export the data in CSV format, ready for further use. Whether for research, lead generation, or contacting businesses.",
      imageSrc: "/assets/iconfonts/dashboard-icon/gmapIcon.png",
      sectionHeading: "Download or Export Data", // Dynamic section heading
      link: "/signup",
      buttonText: "Try Now",
      pretitle: "Map Search Engine",
      presubtitle: "Lead Generation",
    },
  ],
};

export const GooglesmapscraperVideo = {
  heading: "<span className='text-blue-500'>Watch a</span>Demo",
  videoUrl: "IHf_YM-Voqk?si=kjmj9UYR_qxD-EWx",
  buttonText: "Try Free Trial",
  buttonLink: "/signup",
};


// Website Data Scraper

// Define the properties as an object
export const websitedatascraperProps = {
  title: (
    <>
    Website <span className="hero-title">Data</span> Scraper
    </>
  ),
  description:
    "Our Website Data Scraper helps extract essential details like emails, phone numbers, titles, descriptions, and keywords from any website URL. Perfect for lead generation, research, and contact info collection, it’s fast and efficient. Supports Python and Chrome, ideal for free or advanced web scraping to boost productivity effortlessly.",
  buttonText: "Try For Free",
  buttonLink: "/signup",
  leftImg: "/assets/img/slider-images/webscreen.png",
  rightImg: "/assets/img/slider-images/webscreen2.jpg",
};

export const websitedatascraperstatus = [
  { icon: <i className="ri-file-text-line"></i>, value: "15M+", label: "Total Records" },
  { icon: <i className="ri-mail-line"></i>, value: "35M+", label: "Total Email" },
  { icon: <i className="ri-phone-line"></i>, value: "43M+", label: "Total Phone" },
];

export const websitedatascraperdataget = [

  { tooltips: 'The official website address of the place or service.', keywords: 'Website' },
  { tooltips: 'The email address associated with the place or service.', keywords: 'Email' },
  { tooltips: 'The phone number to contact the place or service.', keywords: 'Phone Number' },
  { tooltips: 'The name or title of the place or service.', keywords: 'Title' },
  { tooltips: 'A brief description of the place or service, suitable for SEO.', keywords: 'Meta Description' },
  { tooltips: 'Relevant keywords associated with the place or service, used for SEO.', keywords: 'Meta Keywords' },

];

export const Howitworkswebsitedatascraper = {
  mainheading: "<span className='text-blue-500'>How It </span>Works?",
  scrapers: [
    {
      subheading: "Website Data Scraper (Enter the Website URL)",
      paragraph: "Start by entering the URL of the website you want to scrape. Our Website Data Scraper allows you to extract email addresses from any website URL, whether it's the homepage or a specific page. This website scraping process makes data collection easy and fast.",
      description: "Start by entering the URL of the website you want to scrape. Our Website Data Scraper allows you to extract email addresses from any website URL, whether it's the homepage or a specific page. This website scraping process makes data collection easy and fast.",
      imageSrc: "/assets/iconfonts/dashboard-icon/website.png",
      sectionHeading: "Enter the Website URL", // Dynamic section heading
      link: "/signup",
      buttonText: "Try Now",
      pretitle: "Web Scraper",
      presubtitle: "Lead Generation",
    },
    {
      subheading: "Website Data Scraper (Initiate the Scraping Process)",
      paragraph: "After entering the URL, click the extract button to start the process. Our website data scraper software will scan the website for email addresses and other relevant data, utilizing efficient web scraper technology to ensure comprehensive extraction.",
      description: "After entering the URL, click the extract button to start the process. Our website data scraper software will scan the website for email addresses and other relevant data, utilizing efficient web scraper technology to ensure comprehensive extraction.",
      imageSrc: "/assets/iconfonts/dashboard-icon/website.png",
      sectionHeading: "Initiate the Scraping Process", // Dynamic section heading
      link: "/signup",
      buttonText: "Try Now",
      pretitle: "Web Scraper",
      presubtitle: "Lead Generation",
    },
    {
      subheading: "Website Data Scraper (Extract Emails)",
      paragraph: "The web scraper identifies and extracts all available email addresses on the website, including those found on contact pages, footers, or other areas. Our data scraping tools make this process seamless, gathering information with precision.",
      description: "The web scraper identifies and extracts all available email addresses on the website, including those found on contact pages, footers, or other areas. Our data scraping tools make this process seamless, gathering information with precision.",
      imageSrc: "/assets/iconfonts/dashboard-icon/website.png",
      sectionHeading: "Extract Emails", // Dynamic section heading
      link: "/signup",
      buttonText: "Try Now",
      pretitle: "Web Scraper",
      presubtitle: "Lead Generation",
    },
    {
      subheading: "Website Data Scraper (Review the Results)",
      paragraph: "Once the extraction is complete, you’ll receive an organized list of all emails found. Our web scraping service provides clear results, allowing you to quickly review and utilize the website data scraper output for your needs.",
      description: "Once the extraction is complete, you’ll receive an organized list of all emails found. Our web scraping service provides clear results, allowing you to quickly review and utilize the website data scraper output for your needs.",
      imageSrc: "/assets/iconfonts/dashboard-icon/website.png",
      sectionHeading: "Review the Results", // Dynamic section heading
      link: "/signup",
      buttonText: "Try Now",
      pretitle: "Web Scraper",
      presubtitle: "Lead Generation",
    },
    {
      subheading: "Website Data Scraper (Analyze the Results)",
      paragraph: "Review the extracted data in an organized format to identify the most relevant information. Our web scraping tools are designed for easy analysis, making it simple to leverage the data for lead generation or research purposes.",
      description: "Review the extracted data in an organized format to identify the most relevant information. Our web scraping tools are designed for easy analysis, making it simple to leverage the data for lead generation or research purposes.",
      imageSrc: "/assets/iconfonts/dashboard-icon/website.png",
      sectionHeading: "Analyze the Results", // Dynamic section heading
      link: "/signup",
      buttonText: "Try Now",
      pretitle: "Web Scraper",
      presubtitle: "Lead Generation",
    },
    {
      subheading: "Website Data Scraper (Download or Export Data)",
      paragraph: "Finally, you have the option to download or export the data in CSV format, ready for further use. Whether for research, lead generation, or contacting businesses.",
      description: "Finally, you have the option to download or export the data in CSV format, ready for further use. Whether for research, lead generation, or contacting businesses.",
      imageSrc: "/assets/iconfonts/dashboard-icon/website.png",
      sectionHeading: "Download or Export Data", // Dynamic section heading
      link: "/signup",
      buttonText: "Try Now",
      pretitle: "Web Scraper",
      presubtitle: "Lead Generation",
    },
  ],
};

export const websitedatascraperVideo = {
  heading: "<span className='text-blue-500'>Watch a</span>Demo",
  videoUrl: "FvonHQhouGI?si=VG8jDgiwpcqLsYsI",
  buttonText: "Try Free Trial",
  buttonLink: "/signup",
};

// Documnet Data Scraper

// Define the properties as an object
export const documentdatascraperProps = {
  title: (
    <>
    Document <span className="hero-title">Data</span> Scraper
    </>
  ),
  description:
    "Our Document Data Scraper extracts contact details like emails and phone numbers from .txt, .html, and .json files. It supports Python and Chrome, making it perfect for lead generation, research, or outreach. Simplify data extraction with our reliable, efficient, and versatile web scraping tool.",
  buttonText: "Try For Free",
  buttonLink: "/signup",
  leftImg: "/assets/img/slider-images/docscreen.png",
  rightImg: "/assets/img/slider-images/docscreen2.jpg",
};

export const documentdatascraperstatus = [
  { icon: <i className="ri-mail-line"></i>, value: "35M+", label: "Total Email" },
  { icon: <i className="ri-phone-line"></i>, value: "43M+", label: "Total Phone" },
];

export const documentdatascraperdataget = [

  { tooltips: 'The email address associated with the place or service.', keywords: 'Email' },
  { tooltips: 'The phone number to contact the place or service.', keywords: 'Phone Number' },
  { tooltips: 'Additional details or features associated with the service', keywords: 'More' },

];

export const Howitworksdocumentdatascraper = {
  mainheading: "<span className='text-blue-500'>How It </span>Works?",
  scrapers: [
    {
      subheading: "Document Data Scraper (Upload Your Document)",
      paragraph: "Start by uploading your document in one of the supported formats, such as .txt, .html, .json, and more. Our website data scraper and web scraping service accept a wide range of file types to accommodate various data extraction needs.",
      description: "Start by uploading your document in one of the supported formats, such as .txt, .html, .json, and more. Our website data scraper and web scraping service accept a wide range of file types to accommodate various data extraction needs.",
      imageSrc: "/assets/iconfonts/dashboard-icon/docIcon.png",
      sectionHeading: "Upload Your Document", // Dynamic section heading
      link: "/signup",
      buttonText: "Try Now",
      pretitle: "File Scraper",
      presubtitle: "Lead Generation",
    },
    {
      subheading: "Document Data Scraper (Initiate the Scraping Process)",
      paragraph: "Once your document is uploaded, click the extract button to begin the website scraping process. This web scraper will automatically start analyzing the content of your document to identify relevant data.",
      description: "Once your document is uploaded, click the extract button to begin the website scraping process. This web scraper will automatically start analyzing the content of your document to identify relevant data.",
      imageSrc: "/assets/iconfonts/dashboard-icon/docIcon.png",
      sectionHeading: "Initiate the Scraping Process", // Dynamic section heading
      link: "/signup",
      buttonText: "Try Now",
      pretitle: "File Scraper",
      presubtitle: "Lead Generation",
    },
    {
      subheading: "Document Data Scraper (Extract Contact Information)",
      paragraph: "The data scraping tool will search through the document and extract all available email addresses and phone numbers from any country. This webscraper provides accurate and quick contact extraction for all your professional needs.",
      description: "The data scraping tool will search through the document and extract all available email addresses and phone numbers from any country. This webscraper provides accurate and quick contact extraction for all your professional needs.",
      imageSrc: "/assets/iconfonts/dashboard-icon/docIcon.png",
      sectionHeading: "Extract Contact Information", // Dynamic section heading
      link: "/signup",
      buttonText: "Try Now",
      pretitle: "File Scraper",
      presubtitle: "Lead Generation",
    },
    {
      subheading: "Document Data Scraper (Review the Results)",
      paragraph: "After extraction, the web scraping tool will display the collected data, including email addresses and phone numbers. The information is organized in a way that makes it easy to review and use immediately.",
      description: "After extraction, the web scraping tool will display the collected data, including email addresses and phone numbers. The information is organized in a way that makes it easy to review and use immediately.",
      imageSrc: "/assets/iconfonts/dashboard-icon/docIcon.png",
      sectionHeading: "Review the Results", // Dynamic section heading
      link: "/signup",
      buttonText: "Try Now",
      pretitle: "File Scraper",
      presubtitle: "Lead Generation",
    },
    {
      subheading: "Document Data Scraper (Analyze the Results)",
      paragraph: "Once the scraping is complete, review the extracted data presented in a clear, organized format. This helps you quickly identify and leverage the most relevant information, using a reliable website scraper Python setup or web scraper Chrome extension.",
      description: "Once the scraping is complete, review the extracted data presented in a clear, organized format. This helps you quickly identify and leverage the most relevant information, using a reliable website scraper Python setup or web scraper Chrome extension.",
      imageSrc: "/assets/iconfonts/dashboard-icon/docIcon.png",
      sectionHeading: "Analyze the Results", // Dynamic section heading
      link: "/signup",
      buttonText: "Try Now",
      pretitle: "File Scraper",
      presubtitle: "Lead Generation",
    },
    {
      subheading: "Document Data Scraper (Download or Export Data)",
      paragraph: "Finally, you have the option to download or export the data in CSV format, ready for further use. Whether for research, lead generation, or contacting businesses.",
      description: "Finally, you have the option to download or export the data in CSV format, ready for further use. Whether for research, lead generation, or contacting businesses.",
      imageSrc: "/assets/iconfonts/dashboard-icon/docIcon.png",
      sectionHeading: "Download or Export Data", // Dynamic section heading
      link: "/signup",
      buttonText: "Try Now",
      pretitle: "File Scraper",
      presubtitle: "Lead Generation",
    },
  ],
};

export const documentdatascraperVideo = {
  heading: "<span className='text-blue-500'>Watch a</span>Demo",
  videoUrl: "1TrNt8Szv7Y?si=CxoPG9wLYOoFYd3a",
  buttonText: "Try Free Trial",
  buttonLink: "/signup",
};

// Image Data Scraper

// Documnet Data Scraper

// Define the properties as an object
export const imageDataScraperProps = {
  title: (
    <>
    Image <span className="hero-title">Data</span> Scraper
    </>
  ),
  description:
    "Our Image Data Scraper extracts images and embedded contact details like emails and phone numbers from websites. Supporting formats like .jpg, .png, and .webp, it’s a hassle-free solution for professionals seeking fast and efficient image scraping for contact information and essential data extraction.",
  buttonText: "Try For Free",
  buttonLink: "/signup",
  leftImg: "/assets/img/slider-images/imgscreen.png",
  rightImg: "/assets/img/slider-images/imgscreen2.jpg",
};

export const imageDataScraperstatus = [
  { icon: <i className="ri-mail-line"></i>, value: "35M+", label: "Total Email" },
  { icon: <i className="ri-phone-line"></i>, value: "43M+", label: "Total Phone" },
];

export const imageDataScraperdataget = [

  { tooltips: 'The email address associated with the place or service.', keywords: 'Email' },
  { tooltips: 'The phone number to contact the place or service.', keywords: 'Phone Number' },
  { tooltips: 'Additional details or features associated with the service', keywords: 'More' },

];

export const HowitworksimageDataScraper = {
  mainheading: "<span className='text-blue-500'>How It </span>Works?",
  scrapers: [
    {
      subheading: "Image Data Scraper (Upload Your Images)",
      paragraph: "Start by uploading one or multiple image files in the supported formats, such as .jpg, .png, or .webp. This image scraper tool allows both single and bulk uploads, making it easy to scrape images from websites with flexibility for your data extraction needs.",
      description: "Start by uploading one or multiple image files in the supported formats, such as .jpg, .png, or .webp. This image scraper tool allows both single and bulk uploads, making it easy to scrape images from websites with flexibility for your data extraction needs.",
      imageSrc: "/assets/iconfonts/dashboard-icon/imageIcon.png",
      sectionHeading: "Upload Your Images", // Dynamic section heading
      link: "/signup",
      buttonText: "Try Now",
      pretitle: "File Scraper",
      presubtitle: "Lead Generation",
    },
    {
      subheading: "Image Data Scraper (Initiate the Scraping Process)",
      paragraph: "Once the images are uploaded, the web scraper for images will automatically extract the text content from each image and display it in a textarea element, allowing you to scrape all images from a website for easy review.",
      description: "Once the images are uploaded, the web scraper for images will automatically extract the text content from each image and display it in a textarea element, allowing you to scrape all images from a website for easy review.",
      imageSrc: "/assets/iconfonts/dashboard-icon/imageIcon.png",
      sectionHeading: "Initiate the Scraping Process", // Dynamic section heading
      link: "/signup",
      buttonText: "Try Now",
      pretitle: "File Scraper",
      presubtitle: "Lead Generation",
    },
    {
      subheading: "Image Data Scraper (Extract Specific Information)",
      paragraph: " With the extracted text in the textarea, you have two options: click on the Extract Emails button to find and extract any email addresses within the text, or use the Extract Phone button to locate and pull out phone numbers. This feature is especially useful for those wanting to scrape images from websites free",
      description: "With the extracted text in the textarea, you have two options: click on the Extract Emails button to find and extract any email addresses within the text, or use the Extract Phone button to locate and pull out phone numbers. This feature is especially useful for those wanting to scrape images from websites free",
      imageSrc: "/assets/iconfonts/dashboard-icon/imageIcon.png",
      sectionHeading: "Extract Specific Information", // Dynamic section heading
      link: "/signup",
      buttonText: "Try Now",
      pretitle: "File Scraper",
      presubtitle: "Lead Generation",
    },
    {
      subheading: "Image Data Scraper (Review the Results)",
      paragraph: "After clicking the desired button, the extracted information is presented in an organized manner, allowing you to easily review and use the data obtained from the image data scraper.",
      description: "After clicking the desired button, the extracted information is presented in an organized manner, allowing you to easily review and use the data obtained from the image data scraper.",
      imageSrc: "/assets/iconfonts/dashboard-icon/imageIcon.png",
      sectionHeading: "Review the Results", // Dynamic section heading
      link: "/signup",
      buttonText: "Try Now",
      pretitle: "File Scraper",
      presubtitle: "Lead Generation",
    },
    {
      subheading: "Image Data Scraper (Analyze the Results)",
      paragraph: "Once the scraping is complete, review the extracted data in an organized format. This helps you easily identify and use the information most relevant to your needs, whether for contact management or other purposes.",
      description: "Once the scraping is complete, review the extracted data in an organized format. This helps you easily identify and use the information most relevant to your needs, whether for contact management or other purposes.",
      imageSrc: "/assets/iconfonts/dashboard-icon/imageIcon.png",
      sectionHeading: "Analyze the Results", // Dynamic section heading
      link: "/signup",
      buttonText: "Try Now",
      pretitle: "File Scraper",
      presubtitle: "Lead Generation",
    },
    {
      subheading: "Image Data Scraper (Download or Export Data)",
      paragraph: "Finally, you have the option to download or export the data in CSV format, ready for further use. Whether for research, lead generation, or contacting businesses.",
      description: "Finally, you have the option to download or export the data in CSV format, ready for further use. Whether for research, lead generation, or contacting businesses.",
      imageSrc: "/assets/iconfonts/dashboard-icon/imageIcon.png",
      sectionHeading: "Download or Export Data", // Dynamic section heading
      link: "/signup",
      buttonText: "Try Now",
      pretitle: "File Scraper",
      presubtitle: "Lead Generation",
    },
  ],
};

export const imageDataScraperVideo = {
  heading: "<span className='text-blue-500'>Watch a</span>Demo",
  videoUrl: "uGlkLHHHXSw?si=NOv7vA68g2DoocIG",
  buttonText: "Try Free Trial",
  buttonLink: "/signup",
};


// Business Data Scraper

// Define the properties as an object
export const businessdirectoryscraperProps = {
  title: (
    <>
    Business <span className="hero-title">Directory</span> Scraper
    </>
  ),
  description:
    "Our Business Directory Scraper efficiently extracts valuable contact details like emails and phone numbers from directories like Yellow Pages. Supporting various formats, it provides structured data extraction. Features include Yellow Pages email extractor and web scraper tools, offering free and flexible options for seamless data scraping and lead generation.",
  buttonText: "Try For Free",
  buttonLink: "/signup",
  leftImg: "/assets/img/slider-images/dirscreen.png",
  rightImg: "/assets/img/slider-images/dirscreen2.jpg"
};

export const businessdirectoryscraperstatus = [
  { icon: <i className="ri-clipboard-line"></i>, value: "50M+", label: "Total Records" },
  { icon: <i className="ri-mail-line"></i>, value: "35M+", label: "Total Email" },
  { icon: <i className="ri-phone-line"></i>, value: "43M+", label: "Total Phone" },
];

export const businessdirectoryscraperdataget = [
  { tooltips: 'The name or title of the place or service.', keywords: 'Title' },
  { tooltips: 'The email address associated with the place or service.', keywords: 'Email' },
  { tooltips: 'The phone number to contact the place or service.', keywords: 'Phone Number' },
];

export const Howitworksbusinessdirectoryscraper = {
  mainheading: "<span className='text-blue-500'>How It </span>Works?",
  scrapers: [
    {
      subheading: "Business Directory Scraper (Effortless Data Extraction)",
      paragraph: "Simplify the process of pulling contact details from large directories with the Business Directory Scraper. This Yellow Pages scraper and Yellow Pages data extractor saves time and reduces manual effort, making data collection more efficient.",
      description: "Simplify the process of pulling contact details from large directories with the Business Directory Scraper. This Yellow Pages scraper and Yellow Pages data extractor saves time and reduces manual effort, making data collection more efficient.",
      imageSrc: "/assets/iconfonts/dashboard-icon/directoryIcon.png",
      sectionHeading: "Effortless Data Extraction", // Dynamic section heading
      link: "/signup",
      buttonText: "Try Now",
      pretitle: "Web Scraper",
      presubtitle: "Lead Generation",
    },
    {
      subheading: "Business Directory Scraper (Targeted Contact Information)",
      paragraph: "Extract phone numbers and emails specific to key regions with our Yellow Pages email extractor and Yellow Pages web scraper, ensuring your contact lists are precise and actionable. This tool makes web scraping Yellow Pages highly targeted.",
      description: "Extract phone numbers and emails specific to key regions with our Yellow Pages email extractor and Yellow Pages web scraper, ensuring your contact lists are precise and actionable. This tool makes web scraping Yellow Pages highly targeted.",
      imageSrc: "/assets/iconfonts/dashboard-icon/directoryIcon.png",
      sectionHeading: "Targeted Contact Information", // Dynamic section heading
      link: "/signup",
      buttonText: "Try Now",
      pretitle: "Web Scraper",
      presubtitle: "Lead Generation",
    },
    {
      subheading: "Business Directory Scraper (Flexible Data Handling)",
      paragraph: "With support for multiple file formats like CSV and Excel, the Yellow Pages scraper allows you to work with various directory types without compatibility concerns. This Yellow Pages scraper software free download option is perfect for handling diverse data sources.",
      description: "With support for multiple file formats like CSV and Excel, the Yellow Pages scraper allows you to work with various directory types without compatibility concerns. This Yellow Pages scraper software free download option is perfect for handling diverse data sources.",
      imageSrc: "/assets/iconfonts/dashboard-icon/directoryIcon.png",
      sectionHeading: "Flexible Data Handling", // Dynamic section heading
      link: "/signup",
      buttonText: "Try Now",
      pretitle: "Web Scraper",
      presubtitle: "Lead Generation",
    },
    {
      subheading: "Business Directory Scraper (Intuitive and Accessible)",
      paragraph: "Designed with a user-friendly interface, the Reoon Yellow Pages scraper makes data extraction straightforward, even for users with minimal experience. This Yellow Pages scraper free tool is accessible and easy to use for all.",
      description: "Designed with a user-friendly interface, the Reoon Yellow Pages scraper makes data extraction straightforward, even for users with minimal experience. This Yellow Pages scraper free tool is accessible and easy to use for all.",
      imageSrc: "/assets/iconfonts/dashboard-icon/directoryIcon.png",
      sectionHeading: "Intuitive and Accessible", // Dynamic section heading
      link: "/signup",
      buttonText: "Try Now",
      pretitle: "Web Scraper",
      presubtitle: "Lead Generation",
    }
  ],
};

export const businessdirectoryscraperVideo = {
  heading: "<span className='text-blue-500'>Watch a</span>Demo",
  videoUrl: "6GR_rHwR-r0?si=Z2yMBc4z-mT6qwio",
  buttonText: "Try Free Trial",
  buttonLink: "/signup",
};

// Whois DetaDownload

// Define the properties as an object
export const whoisdetadownloadProps = {
  title: (
    <>
    Whois <span className="hero-title">Database</span> Download
    </>
  ),
  description:
    "Our Whois Database Download service offers easy access to detailed Whois domain information, including ownership, IP data, and more. Download comprehensive Whois data in a convenient zip file format, ideal for Whois searches, domain lookups, and managing digital assets, including ICANN and IP queries.",
  buttonText: "Try For Free",
  buttonLink: "/signup",
  leftImg: "/assets/img/slider-images/whoisscreen.png",
  rightImg: "/assets/img/slider-images/whoisscreen2.jpg",
};

export const whoisdetadownloadstatus = [
  { icon: <i className="ri-calendar-2-line"></i>, value: "Select Year", label: "8 Years Available" },
  { icon: <i className="ri-calendar-event-line"></i>, value: "Months per Year", label: "12 Months Available" },
  { icon: <i className="ri-file-download-line"></i>, value: "Download File", label: "Varies by Month" },
];

export const whoisdetadownloaddataget = [
  { tooltips: 'The unique identifier or number associated with the entry.', keywords: 'Num' },
  { tooltips: 'The name of the domain being queried.', keywords: 'Domain Name' },
  { tooltips: 'The timestamp of when the domain was queried.', keywords: 'Query Time' },
  { tooltips: 'The date when the domain was originally created.', keywords: 'Create Date' },
  { tooltips: 'The date when the domain information was last updated.', keywords: 'Update Date' },
  { tooltips: 'The expiration date of the domain registration.', keywords: 'Expiry Date' },
  { tooltips: 'The unique identifier of the domain registrar.', keywords: 'Domain Registrar ID' },
  { tooltips: 'The name of the registrar managing the domain.', keywords: 'Domain Registrar Name' },
  { tooltips: 'The Whois server provided by the registrar.', keywords: 'Domain Registrar Whois' },
  { tooltips: 'The URL of the registrar managing the domain.', keywords: 'Domain Registrar URL' },
  { tooltips: 'The name of the person or organization who registered the domain.', keywords: 'Registrant Name' },
  { tooltips: 'The company associated with the domain registrant.', keywords: 'Registrant Company' },
  { tooltips: 'The physical address of the domain registrant.', keywords: 'Registrant Address' },
  { tooltips: 'The city of the domain registrant.', keywords: 'Registrant City' },
  { tooltips: 'The state or region of the domain registrant.', keywords: 'Registrant State' },
  { tooltips: 'The postal code of the domain registrant.', keywords: 'Registrant Zip' },
  { tooltips: 'The country of the domain registrant.', keywords: 'Registrant Country' },
  { tooltips: 'The email address of the domain registrant.', keywords: 'Registrant Email' },
  { tooltips: 'The phone number of the domain registrant.', keywords: 'Registrant Phone' },
  { tooltips: 'The fax number of the domain registrant.', keywords: 'Registrant Fax' },
  { tooltips: 'The name of the administrative contact for the domain.', keywords: 'Administrative Name' },
  { tooltips: 'The company of the administrative contact for the domain.', keywords: 'Administrative Company' },
  { tooltips: 'The address of the administrative contact for the domain.', keywords: 'Administrative Address' },
  { tooltips: 'The city of the administrative contact for the domain.', keywords: 'Administrative City' },
  { tooltips: 'The state of the administrative contact for the domain.', keywords: 'Administrative State' },
  { tooltips: 'The postal code of the administrative contact for the domain.', keywords: 'Administrative Zip' },
  { tooltips: 'The country of the administrative contact for the domain.', keywords: 'Administrative Country' },
  { tooltips: 'The email address of the administrative contact for the domain.', keywords: 'Administrative Email' },
  { tooltips: 'The phone number of the administrative contact for the domain.', keywords: 'Administrative Phone' },
  { tooltips: 'The fax number of the administrative contact for the domain.', keywords: 'Administrative Fax' },
  { tooltips: 'The name of the technical contact for the domain.', keywords: 'Technical Name' },
  { tooltips: 'The company of the technical contact for the domain.', keywords: 'Technical Company' },
  { tooltips: 'The address of the technical contact for the domain.', keywords: 'Technical Address' },
  { tooltips: 'The city of the technical contact for the domain.', keywords: 'Technical City' },
  { tooltips: 'The state of the technical contact for the domain.', keywords: 'Technical State' },
  { tooltips: 'The postal code of the technical contact for the domain.', keywords: 'Technical Zip' },
  { tooltips: 'The country of the technical contact for the domain.', keywords: 'Technical Country' },
  { tooltips: 'The email address of the technical contact for the domain.', keywords: 'Technical Email' },
  { tooltips: 'The phone number of the technical contact for the domain.', keywords: 'Technical Phone' },
  { tooltips: 'The fax number of the technical contact for the domain.', keywords: 'Technical Fax' },
  { tooltips: 'The name of the billing contact for the domain.', keywords: 'Billing Name' },
  { tooltips: 'The company of the billing contact for the domain.', keywords: 'Billing Company' },
  { tooltips: 'The address of the billing contact for the domain.', keywords: 'Billing Address' },
  { tooltips: 'The city of the billing contact for the domain.', keywords: 'Billing City' },
  { tooltips: 'The state of the billing contact for the domain.', keywords: 'Billing State' },
  { tooltips: 'The postal code of the billing contact for the domain.', keywords: 'Billing Zip' },
  { tooltips: 'The country of the billing contact for the domain.', keywords: 'Billing Country' },
  { tooltips: 'The email address of the billing contact for the domain.', keywords: 'Billing Email' },
  { tooltips: 'The phone number of the billing contact for the domain.', keywords: 'Billing Phone' },
  { tooltips: 'The fax number of the billing contact for the domain.', keywords: 'Billing Fax' },
  { tooltips: 'The first name server for the domain.', keywords: 'Name Server 1' },
  { tooltips: 'The second name server for the domain.', keywords: 'Name Server 2' },
  { tooltips: 'The third name server for the domain.', keywords: 'Name Server 3' },
  { tooltips: 'The fourth name server for the domain.', keywords: 'Name Server 4' },
  { tooltips: 'The first status of the domain (e.g., active, inactive).', keywords: 'Domain Status 1' },
  { tooltips: 'The second status of the domain.', keywords: 'Domain Status 2' },
  { tooltips: 'The third status of the domain.', keywords: 'Domain Status 3' },
  { tooltips: 'The fourth status of the domain.', keywords: 'Domain Status 4' },


];

export const Howitworkswhoisdetadownload = {
  mainheading: "<span className='text-blue-500'>How It </span>Works?",
  scrapers: [
    {
      subheading: "Whois Data Download (Select Year and Month)",
      paragraph: "Start by choosing the year and month for which you want to download whois database domain data. This step allows you to target specific registration periods that are relevant to your needs, ensuring precise whois database lookup.",
      description: "Start by choosing the year and month for which you want to download whois database domain data. This step allows you to target specific registration periods that are relevant to your needs, ensuring precise whois database lookup.",
      imageSrc: "/assets/iconfonts/dashboard-icon/domain.png",
      sectionHeading: "Select Year and Month", // Dynamic section heading
      link: "/signup",
      buttonText: "Try Now",
      pretitle: "Whois Data Download",
      presubtitle: "Lead Generation",
    },
    {
      subheading: "Whois Data Scraper (Initiate the Download)",
      paragraph: "Once youve selected the desired timeframe, click the download button. The whois database provider service will compile all relevant whois domain information registered within the specified period, including whois IP and whois domain owner details.",
      description: "Once youve selected the desired timeframe, click the download button. The whois database provider service will compile all relevant whois domain information registered within the specified period, including whois IP and whois domain owner details.",
      imageSrc: "/assets/iconfonts/dashboard-icon/domain.png",
      sectionHeading: "Initiate the Download", // Dynamic section heading
      link: "/signup",
      buttonText: "Try Now",
      pretitle: "Whois Data Download",
      presubtitle: "Lead Generation",
    },
    {
      subheading: "Whois Data Scraper (Download the Zip File)",
      paragraph: "The compiled whois database data, including domain names, owner’s details, purchase dates, and more, will be packaged into a single zip file. You can download this file for easy access and storage, ideal for icann whois queries and whois IP lookup needs.",
      description: "The compiled whois database data, including domain names, owner’s details, purchase dates, and more, will be packaged into a single zip file. You can download this file for easy access and storage, ideal for icann whois queries and whois IP lookup needs.",
      imageSrc: "/assets/iconfonts/dashboard-icon/domain.png",
      sectionHeading: "Download the Zip File", // Dynamic section heading
      link: "/signup",
      buttonText: "Try Now",
      pretitle: "Whois Data Download",
      presubtitle: "Lead Generation",
    },
    {
      subheading: "Whois Data Scraper (Extract and Review)",
      paragraph: "After downloading, extract the zip file to view all the whois domain data. The information is organized for easy review, making it perfect for whois search, domain search whois functions, or managing whois com domain assets.",
      description: "After downloading, extract the zip file to view all the whois domain data. The information is organized for easy review, making it perfect for whois search, domain search whois functions, or managing whois com domain assets.",
      imageSrc: "/assets/iconfonts/dashboard-icon/domain.png",
      sectionHeading: "Extract and Review", // Dynamic section heading
      link: "/signup",
      buttonText: "Try Now",
      pretitle: "Whois Data Download",
      presubtitle: "Lead Generation",
    }
  ],
};

export const whoisdetadownloadVideo = {
  heading: "<span className='text-blue-500'>Watch a</span>Demo",
  videoUrl: "4hmndvMq1rQ?si=yu4yTzlMWbMzObK3",
  buttonText: "Try Free Trial",
  buttonLink: "/signup",
};

// website detacenter


// Whois DetaDownload

// Define the properties as an object
export const websitedetacenterProps = {
  title: (
    <>
    Live <span className="hero-title">Website</span> Data
    </>
  ),
  description:
    "The Live Website Data is a powerful tool for extracting website data efficiently. It provides detailed results, including URLs, titles, emails, and phone numbers, Chrome extensions, and Excel exports. Ideal for research or LinkedIn scraping, its your all-in-one web scraping solution.",
  buttonText: "Try For Free",
  buttonLink: "/signup",
  leftImg: "/assets/img/slider-images/websiteDataCenter.png",
  rightImg: "/assets/img/slider-images/webscreen2.jpg",
};

export const websitedetacenterstatus = [
  { icon: <i className="ri-clipboard-line"></i>, value: "15M+", label: "Total Records" },
  { icon: <i className="ri-mail-line"></i>, value: "35M+", label: "Total Email" },
  { icon: <i className="ri-phone-line"></i>, value: "43M+", label: "Total Phone" },
  { icon: <i className="ri-global-line"></i>, value: "43M+", label: "Total Website" },
];

export const websitedetacenterdataget = [
  { tooltips: 'The website URL or address associated with the entry.', keywords: 'Website' },
  { tooltips: 'The email address extracted from the website.', keywords: 'Email' },
  { tooltips: 'The phone number extracted from the website.', keywords: 'Phone' },
  { tooltips: 'The title or headline of the website page.', keywords: 'Title' },
  { tooltips: 'You can get the social media links such as Facebook, Twitter and more.', keywords: 'Social Media Links' },
  { tooltips: 'The description or summary of the website page content.', keywords: 'Description' },
  { tooltips: 'The keywords or tags associated with the website page.', keywords: 'Keywords' },

];

export const Howitworkswebsitedetacenter = {
  mainheading: "<span className='text-blue-500'>How It </span>Works?",
  scrapers: [
    {
      subheading: "Live Website Data (Select Country)",
      paragraph: "Start by selecting the country you want to focus your search on to ensure more targeted results. This step is essential for refining your search in our website data scraper, helping you get precise information from specific regions.",
      description: "Start by selecting the country you want to focus your search on to ensure more targeted results. This step is essential for refining your search in our website data scraper, helping you get precise information from specific regions.",
      imageSrc: "/assets/iconfonts/dashboard-icon/websiteIcon.png",
      sectionHeading: "Select Country", // Dynamic section heading
      link: "/signup",
      buttonText: "Try Now",
      pretitle: "Live Website data",
      presubtitle: "Lead Generation",
    },
    {
      subheading: "Live Website Data (Enter Your Keywords)",
      paragraph: "After selecting the country, enter the keyword or phrase you want to search for in the Live Website Data's search bar. This web scraper and web scraping service enables efficient data retrieval based on your Keywords, simplifying website scraping for exact matches.",
      description: "After selecting the country, enter the keyword or phrase you want to search for in the Live Website Data's search bar. This web scraper and web scraping service enables efficient data retrieval based on your Keywords, simplifying website scraping for exact matches.",
      imageSrc: "/assets/iconfonts/dashboard-icon/websiteIcon.png",
      sectionHeading: "Enter Your Keywords", // Dynamic section heading
      link: "/signup",
      buttonText: "Try Now",
      pretitle: "Live Website data",
      presubtitle: "Lead Generation",
    },
    {
      subheading: "Live Website Data (Automated Scanning)",
      paragraph: "The system then scans for relevant information, including website URLs, titles, descriptions, keywords, emails, and phone numbers related to your query. With data scraping tools and web scraper Chrome integration, this website data scraper software automates the entire process, making extracting data from websites seamless.",
      description: "The system then scans for relevant information, including website URLs, titles, descriptions, keywords, emails, and phone numbers related to your query. With data scraping tools and web scraper Chrome integration, this website data scraper software automates the entire process, making extracting data from websites seamless.",
      imageSrc: "/assets/iconfonts/dashboard-icon/websiteIcon.png",
      sectionHeading: "Automated Scanning", // Dynamic section heading
      link: "/signup",
      buttonText: "Try Now",
      pretitle: "Live Website data",
      presubtitle: "Lead Generation",
    },
    {
      subheading: "Live Website Data (Receive Detailed Results)",
      paragraph: "Once a match is found, the tool presents you with detailed information in an organized manner for easy review. This feature is perfect for scraping LinkedIn or other platforms and is compatible with website scraper Python setups and web scraping tools free options for further data processing.",
      description: "Once a match is found, the tool presents you with detailed information in an organized manner for easy review. This feature is perfect for scraping LinkedIn or other platforms and is compatible with website scraper Python setups and web scraping tools free options for further data processing.",
      imageSrc: "/assets/iconfonts/dashboard-icon/websiteIcon.png",
      sectionHeading: "Receive Detailed Results", // Dynamic section heading
      link: "/signup",
      buttonText: "Try Now",
      pretitle: "Live Website data",
      presubtitle: "Lead Generation",
    }
  ],
};
// JustDail Scraper

// Define the properties as an object
export const justdialscraperProps = {
  title: (
    <>
    Just<span className="hero-title">Dial</span> Scraper
    </>
  ),
  description:
    "Our JustDial Scraper extracts structured data like businesses, addresses, phone numbers, and reviews from Google Maps. Perfect for marketers and researchers, it streamlines geographic data collection, providing essential details for campaigns and analysis. A reliable tool for quick, accurate information from Google Maps.",
  buttonText: "Try For Free",
  buttonLink: "/signup",
  leftImg: "/assets/img/slider-images/justdialscreen.png",
  rightImg: "/assets/img/slider-images/justdialscreen2.png",
};

export const justdialscraperstatus = [
  { icon: <i className="ri-file-text-line"></i>, value: "25M+", label: "Total Records" },
  { icon: <i className="ri-global-line"></i>, value: "10M+", label: "Total Website" },
  { icon: <i className="ri-mail-line"></i>, value: "15M+", label: "Total Email" },
  { icon: <i className="ri-phone-line"></i>, value: "21M+", label: "Total Phone" },
];

export const justdialscraperdataget = [

  { tooltips: 'The name or title of a place or service.', keywords: 'Title' },
  { tooltips: 'The email address associated with the place or service', keywords: 'Email' },
  { tooltips: 'The phone actual number to contact the place or service.', keywords: 'Phone Number' },
  { tooltips: 'The official website address of the place or service', keywords: 'Website' },
  { tooltips: 'The number that is present on Justdial website', keywords: 'Justdial Phone' },
  { tooltips: 'The Company Establishment Year.', keywords: 'Company Establishment' },
  { tooltips: 'The Company GST number', keywords: 'GST' },
  { tooltips: 'Number of Enquiry ', keywords: 'Enquiry' },
  { tooltips: 'The Company Status', keywords: 'Company Status' },
  { tooltips: 'The full address of the place, including street, city, and zip code.', keywords: 'Address' },
  { tooltips: 'The specific keyword or query term used during the search process.', keywords: 'Searched Keyword' }

];

export const Howitworksjustdialscraper = {
  mainheading: "<span className='text-blue-500'>How It </span>Works?",
  scrapers: [
  {
    subheading: "Justdial Scraper (Scrape By Keyword)",
    paragraph: "Start by entering the city and the business category you're targeting. For instance, search for 'Plumbers in Mumbai' or 'Cafes in Bangalore.' This helps the Justdial Scraper narrow down results to provide highly relevant business listings.",
    description: "Start by entering the city and the business category you're targeting. For instance, search for 'Plumbers in Mumbai' or 'Cafes in Bangalore.' This helps the Justdial Scraper narrow down results to provide highly relevant business listings.",
    imageSrc: "/assets/iconfonts/dashboard-icon/jdIcon.png",
    sectionHeading: "Scrape By Keyword",
    link: "/signup",
    buttonText: "Try Now",
    pretitle: "B2B Directory Scraper",
    presubtitle: "Lead Generation",
  },
  {
    subheading: "Justdial Scraper (Initiate Scraping Process)",
    paragraph: "Once you’ve entered your search query, click the Start button to begin the data extraction. The tool connects to Justdial and fetches the listings based on your inputs in real-time.",
    description: "Once you’ve entered your search query, click the Start button to begin the data extraction. The tool connects to Justdial and fetches the listings based on your inputs in real-time.",
    imageSrc: "/assets/iconfonts/dashboard-icon/jdIcon.png",
    sectionHeading: "Initiate Scraping Process",
    link: "/signup",
    buttonText: "Try Now",
    pretitle: "B2B Directory Scraper",
    presubtitle: "Lead Generation",
  },
  {
    subheading: "Justdial Scraper (Extract Business Data)",
    paragraph: "The scraper collects key business information such as name, phone number, address, and service details. All relevant data is compiled and structured for easy access and filtering.",
    description: "The scraper collects key business information such as name, phone number, address, and service details. All relevant data is compiled and structured for easy access and filtering.",
    imageSrc: "/assets/iconfonts/dashboard-icon/jdIcon.png",
    sectionHeading: "Extract Business Data",
    link: "/signup",
    buttonText: "Try Now",
    pretitle: "B2B Directory Scraper",
    presubtitle: "Lead Generation",
  },
  {
    subheading: "Justdial Scraper (Deep Extractor)",
    paragraph: "Dive deeper into each business listing to extract additional hidden data such as verified phone numbers and GST numbers. Our Deep Extractor module ensures you retrieve enriched contact and compliance details for stronger lead qualification.",
    description: "Dive deeper into each business listing to extract additional hidden data such as verified phone numbers and GST numbers. Our Deep Extractor module ensures you retrieve enriched contact and compliance details for stronger lead qualification.",
    imageSrc: "/assets/iconfonts/dashboard-icon/jdIcon.png",
    sectionHeading: "Deep Extractor",
    link: "/signup",
    buttonText: "Try Now",
    pretitle: "B2B Directory Scraper",
    presubtitle: "Lead Generation",
  },
  {
    subheading: "Justdial Scraper (Review Extracted Listings)",
    paragraph: "Once the data is extracted, you can review the business listings in a clear, organized format. This lets you validate the results and decide on your next steps for outreach or marketing.",
    description: "Once the data is extracted, you can review the business listings in a clear, organized format. This lets you validate the results and decide on your next steps for outreach or marketing.",
    imageSrc: "/assets/iconfonts/dashboard-icon/jdIcon.png",
    sectionHeading: "Review Extracted Listings",
    link: "/signup",
    buttonText: "Try Now",
    pretitle: "B2B Directory Scraper",
    presubtitle: "Lead Generation",
  },
  {
    subheading: "Justdial Scraper (Export to CSV)",
    paragraph: "Finally, you have the option to download or export the data in CSV format, ready for further use. Whether for research, lead generation, or contacting businesses.",
    description: "Finally, you have the option to download or export the data in CSV format, ready for further use. Whether for research, lead generation, or contacting businesses.",
    imageSrc: "/assets/iconfonts/dashboard-icon/jdIcon.png",
    sectionHeading: "Export to CSV",
    link: "/signup",
    buttonText: "Try Now",
    pretitle: "B2B Directory Scraper",
    presubtitle: "Lead Generation",
  },
],
};

export const justdialscraperVideo = {
  heading: "<span className='text-blue-500'>Watch a</span>Demo",
  videoUrl: "OKzkToxybdc?si=JSTJsUPW9a3d9m8E",
  buttonText: "Try Free Trial",
  buttonLink: "/signup",
};
// IndiaMart Scraper

// Define the properties as an object
export const indiamartscraperProps = {
  title: (
    <>
    India<span className="hero-title">Mart</span> Scraper
    </>
  ),
  description:
    "Our IndiaMart Extractor extracts structured data like businesses, addresses, phone numbers, and reviews from IndiaMarts. Perfect for marketers and researchers, it streamlines geographic data collection, providing essential details for campaigns and analysis. A reliable tool for quick, accurate information from IndiaMarts.",
  buttonText: "Try For Free",
  buttonLink: "/signup",
  leftImg: "/assets/img/slider-images/indiamartscreen.png",
  rightImg: "/assets/img/slider-images/indiamartscreen2.png",
};

export const indiamartscraperstatus = [
  { icon: <i className="ri-file-text-line"></i>, value: "20M+", label: "Total Records" },
  { icon: <i className="ri-global-line"></i>, value: "15M+", label: "Total Website" },
  { icon: <i className="ri-mail-line"></i>, value: "18M+", label: "Total Email" },
  { icon: <i className="ri-phone-line"></i>, value: "16M+", label: "Total Phone" },
];

export const indiamartscraperdataget = [

  { tooltips: 'The name or title of a place or service.', keywords: 'Title' },
  { tooltips: 'The email address associated with the place or service', keywords: 'Email' },
  { tooltips: 'The phone actual number to contact the place or service.', keywords: 'Phone Number' },
  { tooltips: 'The official website address of the place or service', keywords: 'Website' },
  { tooltips: 'The number that is present on indiaMart website', keywords: 'IndiaMart Phone' },
  { tooltips: 'The Name of the Compnany.', keywords: 'Company Name' },
  { tooltips: 'The Company GST number', keywords: 'GST' },
  { tooltips: 'The full address of the place, including street, city, and zip code.', keywords: 'Address' },
  { tooltips: 'The specific keyword or query term used during the search process.', keywords: 'Searched Keyword' }

];

export const justdialCrmProps = {
  title: (
    <>
    JustDial <span className="hero-title">CRM</span>
    </>
  ),
  description:
    "Our Justdial CRM helps you automatically collect, centralize, and manage customer enquiries from your Justdial account — without any API integration. It captures leads in real time directly from your Justdial dashboard and organizes them into a unified CRM panel. Perfect for sales teams and businesses that rely on Justdial for inbound leads, this tool ensures that no customer enquiry is ever missed.",
  buttonText: "Try For Free",
  buttonLink: "/signup",
  leftImg: "/assets/img/slider-images/justdialscreen.png",
  rightImg: "/assets/img/slider-images/gscreen2.png",
};

export const indiaMartCrmProps = {
  title: (
    <>
    IndiaMart <span className="hero-title">CRM</span> 
    </>
  ),
  description:
    "Our IndiaMART CRM is built to simplify lead management by automatically fetching and centralizing your IndiaMART enquiries — completely API-free. Once connected, the system continuously monitors your IndiaMART seller account to collect leads, customer messages, and contact details into one streamlined dashboard. Designed for businesses that depend on IndiaMART for B2B growth, this CRM keeps all your buyer interactions organized and actionable.",
  buttonText: "Try For Free",
  buttonLink: "/signup",
  leftImg: "/assets/img/slider-images/indiamartscreen.png",
  rightImg: "/assets/img/slider-images/gscreen2.png",
};

export const googleAdsCrmProps = {
  title: (
    <>
    GoogleAds <span className="hero-title">CRM</span> 
    </>
  ),
  description:
    "Our Yahoo Search Scraper is designed to pull essential data directly from Yahoo search results—including keywords, business contact information, and location-based links. It streamlines data extraction for analytics, marketing insights, and custom tools. Whether you're in business, research, or digital marketing, this scraper delivers trustworthy and timely data to support your strategic decisions.",
  buttonText: "Try For Free",
  buttonLink: "/signup",
  leftImg: "/assets/img/slider-images/gscreen.png",
  rightImg: "/assets/img/slider-images/gscreen2.png",
};

export const justdialCrmstatus = [
  { icon: <i className="ri-clipboard-line"></i>, value: "15M+", label: "Total Records" },
  { icon: <i className="ri-group-line"></i>, value: "20M+", label: "Total Subscribers" },
  { icon: <i className="ri-video-line"></i>, value: "35M+", label: "Total Videos" },
  { icon: <i className="ri-eye-line"></i>, value: "43M+", label: "Total Views" },
];

export const googleAdsCrmstatus = [
  { icon: <i className="ri-clipboard-line"></i>, value: "15M+", label: "Total Records" },
  { icon: <i className="ri-group-line"></i>, value: "20M+", label: "Total Subscribers" },
  { icon: <i className="ri-video-line"></i>, value: "35M+", label: "Total Videos" },
  { icon: <i className="ri-eye-line"></i>, value: "43M+", label: "Total Views" },
];

export const indiaMartCrmstatus = [
  { icon: <i className="ri-clipboard-line"></i>, value: "15M+", label: "Total Records" },
  { icon: <i className="ri-group-line"></i>, value: "20M+", label: "Total Subscribers" },
  { icon: <i className="ri-video-line"></i>, value: "35M+", label: "Total Videos" },
  { icon: <i className="ri-eye-line"></i>, value: "43M+", label: "Total Views" },
];

export const indiaMartCrmdataget = [
  { tooltips: 'The Date of the Enquiry made .', keywords: 'Enquiry Date' },
  { tooltips: 'The name of the custome .', keywords: 'Customer Name' },
  { tooltips: 'The phone number of the Lead.', keywords: 'Phone Number' },
  { tooltips: 'Source of the lead like .', keywords: 'Enquiry Source' },
  { tooltips: 'The location including city.', keywords: 'Location' },
  { tooltips: 'time at which last seen .', keywords: 'Last Seen' }
];

export const justdialCrmdataget = [
  { tooltips: 'The Date of the Enquiry made .', keywords: 'Enquiry Date' },
  { tooltips: 'The name of the custome .', keywords: 'Customer Name' },
  { tooltips: 'The email address associated with the place or service', keywords: 'Email' },
  { tooltips: 'The phone number of the Lead.', keywords: 'Phone Number' },
  { tooltips: 'Source of the lead like .', keywords: 'Enquiry Source' },
  { tooltips: 'The location including city.', keywords: 'Location' },
  { tooltips: 'Form which state the lead is .', keywords: 'State' }
];

export const googleAdsCrmdataget = [
  { tooltips: 'The official website address of the place or service', keywords: 'Website' },
  { tooltips: 'The name or title of a place or service.', keywords: 'Title' },
  { tooltips: 'The email address associated with the place or service', keywords: 'Email' },
  { tooltips: 'The phone number to contact the place or service.', keywords: 'Phone Number' },
  { tooltips: 'Get the all social media links for searched results.', keywords: 'Social Links' },
  { tooltips: 'A brief description providing details about the place or service.', keywords: 'Description' },
  { tooltips: 'The keyword or query term used for searching in Google Search.', keywords: 'Keywords' },
  { tooltips: 'The full address of the place, including street, city, and zip code.', keywords: 'Address' },
  { tooltips: 'The specific keyword or query term used during the search process.', keywords: 'Searched Keyword' }
];

export const HowitworksIndiamartCrm = {
  mainheading: "<span className='text-blue-500'>How It </span>Works?",
  scrapers: [
    {
      subheading: "Welcome to Scrape Genius IndiaMART CRM",
      paragraph:
        "Our IndiaMART Enquiry Scraper is designed to simplify your lead collection process by automatically fetching customer enquiries from your IndiaMART seller account — no API required.",
      description:
        "Our IndiaMART Enquiry Scraper is designed to simplify your lead collection process by automatically fetching customer enquiries from your IndiaMART seller account — no API required.",
      imageSrc: "/assets/iconfonts/dashboard-icon/indiamartIcon.png",
      sectionHeading: "Introduction",
      link: "/signup",
      buttonText: "Try Now",
      pretitle: "B2B Marketplace",
      presubtitle: "Lead Management",
    },
    {
      subheading: "Step 1: Select the Current Month Date",
      paragraph:
        "Begin by selecting the current month’s date in the tool. This defines the time range for collecting leads from your IndiaMART account.",
      description:
        "Begin by selecting the current month’s date in the tool. This defines the time range for collecting leads from your IndiaMART account.",
      imageSrc: "/assets/iconfonts/dashboard-icon/indiamartIcon.png",
      sectionHeading: "Set Date Range",
      link: "/signup",
      buttonText: "Try Now",
      pretitle: "B2B Marketplace",
      presubtitle: "Lead Management",
    },
    {
      subheading: "Step 2: Click on Fetch Leads",
      paragraph:
        "Next, click the 'Fetch Leads' button. A new browser window will open automatically and redirect you to IndiaMART’s login page. Simply log in and enter your OTP to continue.",
      description:
        "Next, click the 'Fetch Leads' button. A new browser window will open automatically and redirect you to IndiaMART’s login page. Simply log in and enter your OTP to continue.",
      imageSrc: "/assets/iconfonts/dashboard-icon/indiamartIcon.png",
      sectionHeading: "Login and Authenticate",
      link: "/signup",
      buttonText: "Try Now",
      pretitle: "B2B Marketplace",
      presubtitle: "Lead Management",
    },
    {
      subheading: "Step 3: Start Lead Extraction",
      paragraph:
        "Once logged in and your dashboard opens, return to the tool and click 'Fetch Leads' again. The scraper will begin collecting your enquiries in real time.",
      description:
        "Once logged in and your dashboard opens, return to the tool and click 'Fetch Leads' again. The scraper will begin collecting your enquiries in real time.",
      imageSrc: "/assets/iconfonts/dashboard-icon/indiamartIcon.png",
      sectionHeading: "Fetch Enquiries",
      link: "/signup",
      buttonText: "Try Now",
      pretitle: "B2B Marketplace",
      presubtitle: "Lead Management",
    },
    {
      subheading: "Step 4: View and Manage Your Leads",
      paragraph:
        "Within a few minutes, leads will start appearing in your panel. Review and manage them easily from the dashboard — all your IndiaMART enquiries in one place.",
      description:
        "Within a few minutes, leads will start appearing in your panel. Review and manage them easily from the dashboard — all your IndiaMART enquiries in one place.",
      imageSrc: "/assets/iconfonts/dashboard-icon/indiamartIcon.png",
      sectionHeading: "View Collected Leads",
      link: "/signup",
      buttonText: "Try Now",
      pretitle: "B2B Marketplace",
      presubtitle: "Lead Management",
    },
    {
      subheading: "Step 5: Retrieve Older Leads",
      paragraph:
        "You can also select an older date to fetch past leads. Simply change the date and click 'Fetch Leads' again — the tool will collect and append older leads to your list.",
      description:
        "You can also select an older date to fetch past leads. Simply change the date and click 'Fetch Leads' again — the tool will collect and append older leads to your list.",
      imageSrc: "/assets/iconfonts/dashboard-icon/indiamartIcon.png",
      sectionHeading: "Retrieve Old Leads",
      link: "/signup",
      buttonText: "Try Now",
      pretitle: "B2B Marketplace",
      presubtitle: "Lead Management",
    },
    {
      subheading: "Step 6: Follow Up with Customers",
      paragraph:
        "After fetching your leads, you can directly connect with your customers through calls, WhatsApp, or messages — all from your central CRM dashboard.",
      description:
        "After fetching your leads, you can directly connect with your customers through calls, WhatsApp, or messages — all from your central CRM dashboard.",
      imageSrc: "/assets/iconfonts/dashboard-icon/indiamartIcon.png",
      sectionHeading: "Engage with Customers",
      link: "/signup",
      buttonText: "Try Now",
      pretitle: "B2B Marketplace",
      presubtitle: "Lead Management",
    },
  ],
};


export const indiaMartCrmVideo = {
  heading: "<span className='text-blue-500'>Watch a</span>Demo",
  videoUrl: "OKzkToxybdc?si=JSTJsUPW9a3d9m8E",
  buttonText: "Try Free Trial",
  buttonLink: "/signup",
};

export const HowitworksJustdialCrm = {
  mainheading: "<span className='text-blue-500'>How It </span>Works?",
  scrapers: [
    
    {
      subheading: "Step 1: Enter Login Page URL",
      paragraph:
        "Begin by entering the Justdial login page URL into the tool. Then, specify your target date and time. The scraper will automatically collect all leads up to the selected date and time.",
      description:
        "Begin by entering the Justdial login page URL into the tool. Then, specify your target date and time. The scraper will automatically collect all leads up to the selected date and time.",
      imageSrc: "/assets/iconfonts/dashboard-icon/jdIcon.png",
      sectionHeading: "Enter Login Details",
      link: "/signup",
      buttonText: "Try Now",
      pretitle: "Lead Automation",
      presubtitle: "Justdial CRM",
    },
    {
      subheading: "Step 2: Start Fetching Leads",
      paragraph:
        "Click the ‘Fetch Leads’ button to start the process. A new browser window will open and automatically redirect you to Justdial’s login page. Log in to your account and verify the OTP.",
      description:
        "Click the ‘Fetch Leads’ button to start the process. A new browser window will open and automatically redirect you to Justdial’s login page. Log in to your account and verify the OTP.",
      imageSrc: "/assets/iconfonts/dashboard-icon/jdIcon.png",
      sectionHeading: "Fetch Leads",
      link: "/signup",
      buttonText: "Try Now",
      pretitle: "Lead Automation",
      presubtitle: "Justdial CRM",
    },
    {
      subheading: "Step 3: Navigate to Leads Section",
      paragraph:
        "Once the Justdial dashboard opens, click the ‘Leads’ button to view your leads. Scroll down and click on any displayed lead to open its details page.",
      description:
        "Once the Justdial dashboard opens, click the ‘Leads’ button to view your leads. Scroll down and click on any displayed lead to open its details page.",
      imageSrc: "/assets/iconfonts/dashboard-icon/jdIcon.png",
      sectionHeading: "View Leads",
      link: "/signup",
      buttonText: "Try Now",
      pretitle: "Lead Automation",
      presubtitle: "Justdial CRM",
    },
    {
      subheading: "Step 4: Copy and Paste Enquiry Panel URL",
      paragraph:
        "Copy the URL from the browser’s address bar and paste it into the tool’s ‘Enquiry Panel URL’ input field. You can also select an older date to retrieve historical leads.",
      description:
        "Copy the URL from the browser’s address bar and paste it into the tool’s ‘Enquiry Panel URL’ input field. You can also select an older date to retrieve historical leads.",
      imageSrc: "/assets/iconfonts/dashboard-icon/jdIcon.png",
      sectionHeading: "Paste Enquiry URL",
      link: "/signup",
      buttonText: "Try Now",
      pretitle: "Lead Automation",
      presubtitle: "Justdial CRM",
    },
    {
      subheading: "Step 5: Fetch and Review Results",
      paragraph:
        "Click ‘Fetch Leads’ again. Within a few minutes, your leads will appear in the dashboard table. Once the process completes, review your extracted leads directly in the panel.",
      description:
        "Click ‘Fetch Leads’ again. Within a few minutes, your leads will appear in the dashboard table. Once the process completes, review your extracted leads directly in the panel.",
      imageSrc: "/assets/iconfonts/dashboard-icon/jdIcon.png",
      sectionHeading: "Review Extracted Leads",
      link: "/signup",
      buttonText: "Try Now",
      pretitle: "Lead Automation",
      presubtitle: "Justdial CRM",
    },
    {
      subheading: "Step 6: Retrieve Older Leads",
      paragraph:
        "To collect older leads, simply change the date and time, then click the ‘Fetch Leads’ button again. The older leads will automatically be appended to your existing data.",
      description:
        "To collect older leads, simply change the date and time, then click the ‘Fetch Leads’ button again. The older leads will automatically be appended to your existing data.",
      imageSrc: "/assets/iconfonts/dashboard-icon/jdIcon.png",
      sectionHeading: "Retrieve Old Leads",
      link: "/signup",
      buttonText: "Try Now",
      pretitle: "Lead Automation",
      presubtitle: "Justdial CRM",
    },
    {
      subheading: "Step 7: Process Complete",
      paragraph:
        "Once all steps are complete, your lead data is ready for export or review. Thank you for using Scrape Genius to simplify your Justdial lead management process.",
      description:
        "Once all steps are complete, your lead data is ready for export or review. Thank you for using Scrape Genius to simplify your Justdial lead management process.",
      imageSrc: "/assets/iconfonts/dashboard-icon/jdIcon.png",
      sectionHeading: "Process Complete",
      link: "/signup",
      buttonText: "Try Now",
      pretitle: "Lead Automation",
      presubtitle: "Justdial CRM",
    },
  ],
};


export const justdialCrmVideo = {
  heading: "<span className='text-blue-500'>Watch a</span>Demo",
  videoUrl: "UHZ7LEqncZE?si=Vicp05EHbd4moWiz",
  buttonText: "Try Free Trial",
  buttonLink: "/signup",
};

export const HowitworksGoogleAdsCrm = {
  mainheading: "<span className='text-blue-500'>How It </span>Works?",
  scrapers: [
    {
      subheading: "Google Search Scraper (Scrape By Query)",
      paragraph: "Start by typing in the specific search term you’re interested in. For example, you might search for 'schools in London contact details.' This search query will guide our Google Search Scraper to provide precise results by scraping Google search results.",
      description: "Start by typing in the specific search term you’re interested in. For example, you might search for 'schools in London contact details.' This search query will guide our Google Search Scraper to provide precise results by scraping Google search results.",
      imageSrc: "/assets/iconfonts/dashboard-icon/google.png",
      sectionHeading: "Scrape By Query", // Dynamic section heading
      link: "/signup",
      buttonText: "Try Now",
      pretitle: "Search Engine",
      presubtitle: "Lead Generation",
    },
    {
      subheading: "Google Search Scraper (Initiate the Extraction)",
      paragraph: "Once you’ve entered your query, simply click the search button to start the extraction process. Our tool will begin web scraping Google search results based on your input, utilizing advanced Google search scraper APIs and Python-based extraction techniques.",
      description: "Once you’ve entered your query, simply click the search button to start the extraction process. Our tool will begin web scraping Google search results based on your input, utilizing advanced Google search scraper APIs and Python-based extraction techniques.",
      imageSrc: "/assets/iconfonts/dashboard-icon/google.png",
      sectionHeading: "Initiate the Extraction", // Dynamic section heading
      link: "/signup",
      buttonText: "Try Now",
      pretitle: "Search Engine",
      presubtitle: "Lead Generation",
    },
    {
      subheading: "Google Search Scraper (Data Extraction)",
      paragraph: "Once the extraction is complete, you’ll receive an organized list of all emails found. Our web scraping service provides clear results, allowing you to quickly review and utilize the website data scraper output for your needs",
      description: "Once the extraction is complete, you’ll receive an organized list of all emails found. Our web scraping service provides clear results, allowing you to quickly review and utilize the website data scraper output for your needs",
      imageSrc: "/assets/iconfonts/dashboard-icon/google.png",
      sectionHeading: "Data Extraction", // Dynamic section heading
      link: "/signup",
      buttonText: "Try Now",
      pretitle: "Search Engine",
      presubtitle: "Lead Generation",
    },
    {
      subheading: "Google Search Scraper (Review the Results)",
      paragraph: "Once the extraction is complete, you’ll receive a detailed list of results. Review the information, which is presented in an easy-to-read format. This Google search scraper tool lets you quickly use and analyze the data, making it valuable for various applications",
      description: "Once the extraction is complete, you’ll receive a detailed list of results. Review the information, which is presented in an easy-to-read format. This Google search scraper tool lets you quickly use and analyze the data, making it valuable for various applications",
      imageSrc: "/assets/iconfonts/dashboard-icon/google.png",
      sectionHeading: "Review the Results", // Dynamic section heading
      link: "/signup",
      buttonText: "Try Now",
      pretitle: "Search Engine",
      presubtitle: "Lead Generation",
    },
    {
      subheading: "Google Search Scraper (Download or Export Data)",
      paragraph: "Finally, you have the option to download or export the data in CSV format, ready for further use. Whether for research, lead generation, or contacting businesses.",
      description: "Finally, you have the option to download or export the data in CSV format, ready for further use. Whether for research, lead generation, or contacting businesses.",
      imageSrc: "/assets/iconfonts/dashboard-icon/google.png",
      sectionHeading: "Download or Export Data", // Dynamic section heading
      link: "/signup",
      buttonText: "Try Now",
      pretitle: "Search Engine",
      presubtitle: "Lead Generation",
    },
  ],
};

export const googleAdsCrmVideo = {
  heading: "<span className='text-blue-500'>Watch a</span>Demo",
  videoUrl: "OKzkToxybdc?si=JSTJsUPW9a3d9m8E",
  buttonText: "Try Free Trial",
  buttonLink: "/signup",
};

export const Howitworksindiamartscraper = {
  mainheading: "<span className='text-blue-500'>How It </span>Works?",
  scrapers: [
  {
    subheading: "IndiaMart Scraper (Scrape By Keyword)",
    paragraph: "Start by entering the city and the business category you're targeting. For instance, search for 'Digital Marketing Agency in Pune'. This helps the IndiaMart Scraper narrow down results to provide highly relevant business listings.",
    description: "Start by entering the city and the business category you're targeting. For instance, search for 'Digital Marketing Agency in Pune'. This helps the IndiaMart Scraper narrow down results to provide highly relevant business listings.",
    imageSrc: "/assets/iconfonts/dashboard-icon/indiamartIcon.png",
    sectionHeading: "Scrape By Keyword",
    link: "/signup",
    buttonText: "Try Now",
    pretitle: "B2B Directory Scraper",
    presubtitle: "Lead Generation",
  },
  {
    subheading: "IndiaMart Scraper (Initiate Scraping Process)",
    paragraph: "Once you’ve entered your search query, click the scrape button to begin the data extraction. The tool connects to IndiaMart and fetches the listings based on your inputs in real-time.",
    description: "Once you’ve entered your search query, click the scrape button to begin the data extraction. The tool connects to IndiaMart and fetches the listings based on your inputs in real-time.",
    imageSrc: "/assets/iconfonts/dashboard-icon/indiamartIcon.png",
    sectionHeading: "Initiate Scraping Process",
    link: "/signup",
    buttonText: "Try Now",
    pretitle: "B2B Directory Scraper",
    presubtitle: "Lead Generation",
  },
  {
    subheading: "IndiaMart Scraper (Extract Business Data)",
    paragraph: "The scraper collects key business information such as name, phone number, address, and service details. All relevant data is compiled and structured for easy access and filtering.",
    description: "The scraper collects key business information such as name, phone number, address, and service details. All relevant data is compiled and structured for easy access and filtering.",
    imageSrc: "/assets/iconfonts/dashboard-icon/indiamartIcon.png",
    sectionHeading: "Extract Business Data",
    link: "/signup",
    buttonText: "Try Now",
    pretitle: "B2B Directory Scraper",
    presubtitle: "Lead Generation",
  },
  {
    subheading: "IndiaMart Scraper (Deep Extractor)",
    paragraph: "Dive deeper into each business listing to extract additional hidden data such as verified phone numbers and GST numbers. Our Deep Extractor module ensures you retrieve enriched contact and compliance details for stronger lead qualification.",
    description: "Dive deeper into each business listing to extract additional hidden data such as verified phone numbers and GST numbers. Our Deep Extractor module ensures you retrieve enriched contact and compliance details for stronger lead qualification.",
    imageSrc: "/assets/iconfonts/dashboard-icon/indiamartIcon.png",
    sectionHeading: "Deep Extractor",
    link: "/signup",
    buttonText: "Try Now",
    pretitle: "B2B Directory Scraper",
    presubtitle: "Lead Generation",
  },
  {
    subheading: "IndiaMart Scraper (Review Extracted Listings)",
    paragraph: "Once the data is extracted, you can review the business listings in a clear, organized format. This lets you validate the results and decide on your next steps for outreach or marketing.",
    description: "Once the data is extracted, you can review the business listings in a clear, organized format. This lets you validate the results and decide on your next steps for outreach or marketing.",
    imageSrc: "/assets/iconfonts/dashboard-icon/indiamartIcon.png",
    sectionHeading: "Review Extracted Listings",
    link: "/signup",
    buttonText: "Try Now",
    pretitle: "B2B Directory Scraper",
    presubtitle: "Lead Generation",
  },
  {
    subheading: "IndiaMart Scraper (Export to CSV)",
    paragraph: "Finally, you have the option to download or export the data in CSV format, ready for further use. Whether for research, lead generation, or contacting businesses.",
    description: "Finally, you have the option to download or export the data in CSV format, ready for further use. Whether for research, lead generation, or contacting businesses.",
    imageSrc: "/assets/iconfonts/dashboard-icon/indiamartIcon.png",
    sectionHeading: "Export to CSV",
    link: "/signup",
    buttonText: "Try Now",
    pretitle: "B2B Directory Scraper",
    presubtitle: "Lead Generation",
  },
],
};

export const indiamartscraperVideo = {
  heading: "<span className='text-blue-500'>Watch a</span>Demo",
  videoUrl: "P7tQPPMeE5M?si=pe1PHj9xiJI7K_q1",
  buttonText: "Try Free Trial",
  buttonLink: "/signup",
};
// Sulekhs Scraper

// Define the properties as an object
export const sulekhascraperProps = {
  title: (
    <>
     <span className="hero-title">Sulekha</span> Scraper
    </>
  ),
  description:
    "Our Sulekha Extractor extracts structured data like businesses, addresses, phone numbers, and reviews from Sulekha. Perfect for marketers and researchers, it streamlines geographic data collection, providing essential details for campaigns and analysis. A reliable tool for quick, accurate information from Sulekhas.",
  buttonText: "Try For Free",
  buttonLink: "/signup",
  leftImg: "/assets/img/slider-images/sulekhascreen.png",
  rightImg: "/assets/img/slider-images/sulekhascreen2.png",
};

export const sulekhascraperstatus = [
  { icon: <i className="ri-file-text-line"></i>, value: "15M+", label: "Total Records" },
  { icon: <i className="ri-global-line"></i>, value: "12M+", label: "Total Website" },
  { icon: <i className="ri-mail-line"></i>, value: "5M+", label: "Total Email" },
  { icon: <i className="ri-phone-line"></i>, value: "13M+", label: "Total Phone" },
];

export const sulekhascraperdataget = [

  { tooltips: 'The name or title of a place or service.', keywords: 'Title' },
  { tooltips: 'The email address associated with the place or service', keywords: 'Email' },
  { tooltips: 'The phone actual number to contact the place or service.', keywords: 'Phone Number' },
  { tooltips: 'The official website address of the place or service', keywords: 'Website' },
  { tooltips: 'The number that is present on Sulekha website', keywords: 'Sulekha Phone' },
  { tooltips: 'The link to the Product page.', keywords: 'Product URL' },
  { tooltips: 'The Name of the Compnany.', keywords: 'Company Name' },
  { tooltips: 'Type of Business like manufacture,etc', keywords: 'Business Type' },
  { tooltips: 'The city of the Company.', keywords: 'Location' },
  { tooltips: 'The specific keyword or query term used during the search process.', keywords: 'Searched Keyword' }
];

export const Howitworkssulekhascraper = {
  mainheading: "<span className='text-blue-500'>How It </span>Works?",
  scrapers: [
  {
    subheading: "Sulekha Scraper (Scrape By Keyword Or URL)",
    paragraph: "Start by entering the city and the business category you're targeting. For instance, search for 'CBSE Schools in Pune' . This helps the Sulekha Scraper narrow down results to provide highly relevant business listings.",
    description: "Start by entering the city and the business category you're targeting. For instance, search for 'CBSE Schools in Pune' . This helps the Sulekha Scraper narrow down results to provide highly relevant business listings.",
    imageSrc: "/assets/iconfonts/dashboard-icon/sulekha.png",
    sectionHeading: "Scrape By Keyword or URL",
    link: "/signup",
    buttonText: "Try Now",
    pretitle: "B2B Directory Scraper",
    presubtitle: "Lead Generation",
  },
  {
    subheading: "Sulekha Scraper (Initiate Scraping Process)",
    paragraph: "Once you’ve entered your search query, click the scrape button to begin the data extraction. The tool connects to Sulekha and fetches the listings based on your inputs in real-time.",
    description: "Once you’ve entered your search query, click the scrape button to begin the data extraction. The tool connects to Sulekha and fetches the listings based on your inputs in real-time.",
    imageSrc: "/assets/iconfonts/dashboard-icon/sulekha.png",
    sectionHeading: "Initiate Scraping Process",
    link: "/signup",
    buttonText: "Try Now",
    pretitle: "B2B Directory Scraper",
    presubtitle: "Lead Generation",
  },
  {
    subheading: "Sulekha Scraper (Extract Business Data)",
    paragraph: "The scraper collects key business information such as name, phone number, address, and service details. All relevant data is compiled and structured for easy access and filtering.",
    description: "The scraper collects key business information such as name, phone number, address, and service details. All relevant data is compiled and structured for easy access and filtering.",
    imageSrc: "/assets/iconfonts/dashboard-icon/sulekha.png",
    sectionHeading: "Extract Business Data",
    link: "/signup",
    buttonText: "Try Now",
    pretitle: "B2B Directory Scraper",
    presubtitle: "Lead Generation",
  },
  {
    subheading: "Sulekha Scraper (Deep Extractor)",
    paragraph: "Dive deeper into each business listing to extract additional hidden data such as verified phone numbers and GST numbers. Our Deep Extractor module ensures you retrieve enriched contact and compliance details for stronger lead qualification.",
    description: "Dive deeper into each business listing to extract additional hidden data such as verified phone numbers and GST numbers. Our Deep Extractor module ensures you retrieve enriched contact and compliance details for stronger lead qualification.",
    imageSrc: "/assets/iconfonts/dashboard-icon/sulekha.png",
    sectionHeading: "Deep Extractor",
    link: "/signup",
    buttonText: "Try Now",
    pretitle: "B2B Directory Scraper",
    presubtitle: "Lead Generation",
  },
  {
    subheading: "Sulekha Scraper (Review Extracted Listings)",
    paragraph: "Once the data is extracted, you can review the business listings in a clear, organized format. This lets you validate the results and decide on your next steps for outreach or marketing.",
    description: "Once the data is extracted, you can review the business listings in a clear, organized format. This lets you validate the results and decide on your next steps for outreach or marketing.",
    imageSrc: "/assets/iconfonts/dashboard-icon/sulekha.png",
    sectionHeading: "Review Extracted Listings",
    link: "/signup",
    buttonText: "Try Now",
    pretitle: "B2B Directory Scraper",
    presubtitle: "Lead Generation",
  },
  {
    subheading: "Sulekha Scraper (Export to CSV)",
    paragraph: "Finally, you have the option to download or export the data in CSV format, ready for further use. Whether for research, lead generation, or contacting businesses.",
    description: "Finally, you have the option to download or export the data in CSV format, ready for further use. Whether for research, lead generation, or contacting businesses.",
    imageSrc: "/assets/iconfonts/dashboard-icon/sulekha.png",
    sectionHeading: "Export to CSV",
    link: "/signup",
    buttonText: "Try Now",
    pretitle: "B2B Directory Scraper",
    presubtitle: "Lead Generation",
  },
],
};

export const sulekhascraperVideo = {
  heading: "<span className='text-blue-500'>Watch a</span>Demo",
  videoUrl: "iYIHs4DE3hE?si=tC9PcLigMuK4KN-M",
  buttonText: "Try Free Trial",
  buttonLink: "/signup",
};
// Trade India Scraper

// Define the properties as an object
export const tradeindiascraperProps = {
  title: (
    <>
    Trade<span className="hero-title">India</span> Scraper
    </>
  ),
  description:
    "Our TradeIndia Scraper automates the extraction of business profiles, product data, and contact details from TradeIndia. It helps exporters, importers, and B2B marketers connect with verified suppliers and clients.",
  buttonText: "Try For Free",
  buttonLink: "/signup",
  leftImg: "/assets/img/slider-images/tradeindiascreen.png",
  rightImg: "/assets/img/slider-images/tradeindiascreen2.png",
};

export const tradeindiascraperstatus = [
  { icon: <i className="ri-file-text-line"></i>, value: "15M+", label: "Total Records" },
  { icon: <i className="ri-global-line"></i>, value: "20M+", label: "Total Website" },
  { icon: <i className="ri-mail-line"></i>, value: "13M+", label: "Total Email" },
  { icon: <i className="ri-phone-line"></i>, value: "14M+", label: "Total Phone" },
];

export const tradeindiascraperdataget = [

  { tooltips: 'The name or title of a place or service.', keywords: 'Title' },
  { tooltips: 'The email address associated with the place or service', keywords: 'Email' },
  { tooltips: 'The phone actual number to contact the place or service.', keywords: 'Phone Number' },
  { tooltips: 'The official website address of the place or service', keywords: 'Website' },
  { tooltips: 'The number that is present on Tradeindia website', keywords: 'Tradeindia Phone' },
  { tooltips: 'The link to the Product page.', keywords: 'Product URL' },
  { tooltips: 'The Name of the Compnany.', keywords: 'Company Name' },
  { tooltips: 'Type of Business like manufacture,etc', keywords: 'Business Type' },
  { tooltips: 'The Link of the portfolio on TradeIndia .', keywords: 'Compnay Portfolio' },
  { tooltips: 'The city of the Company.', keywords: 'Location' },
  { tooltips: 'The specific keyword or query term used during the search process.', keywords: 'Searched Keyword' }

];

export const Howitworkstradeindiascraper = {
  mainheading: "<span className='text-blue-500'>How It </span>Works?",
  scrapers: [
  {
    subheading: "Trade India Scraper (Scrape By Keyword)",
    paragraph: "Start by entering the city and the business category you're targeting. For instance, search for 'agricultural equipment in Nodia' . This helps the Trade India Scraper narrow down results to provide highly relevant business listings.",
    description: "Start by entering the city and the business category you're targeting. For instance, search for 'agricultural equipment in Nodia' . This helps the Trade India Scraper narrow down results to provide highly relevant business listings.",
    imageSrc: "/assets/iconfonts/dashboard-icon/tradeindia.png",
    sectionHeading: "Scrape By Keyword",
    link: "/signup",
    buttonText: "Try Now",
    pretitle: "B2B Directory Scraper",
    presubtitle: "Lead Generation",
  },
  {
    subheading: "Trade India Scraper (Initiate Scraping Process)",
    paragraph: "Once you’ve entered your search query, click the scrape button to begin the data extraction. The tool connects to Trade India and fetches the listings based on your inputs in real-time.",
    description: "Once you’ve entered your search query, click the scrape button to begin the data extraction. The tool connects to Trade India and fetches the listings based on your inputs in real-time.",
    imageSrc: "/assets/iconfonts/dashboard-icon/tradeindia.png",
    sectionHeading: "Initiate Scraping Process",
    link: "/signup",
    buttonText: "Try Now",
    pretitle: "B2B Directory Scraper",
    presubtitle: "Lead Generation",
  },
  {
    subheading: "Trade India Scraper (Extract Business Data)",
    paragraph: "The scraper collects key business information such as name, phone number, address, and service details. All relevant data is compiled and structured for easy access and filtering.",
    description: "The scraper collects key business information such as name, phone number, address, and service details. All relevant data is compiled and structured for easy access and filtering.",
    imageSrc: "/assets/iconfonts/dashboard-icon/tradeindia.png",
    sectionHeading: "Extract Business Data",
    link: "/signup",
    buttonText: "Try Now",
    pretitle: "B2B Directory Scraper",
    presubtitle: "Lead Generation",
  },
  {
    subheading: "Trade India Scraper (Deep Extractor)",
    paragraph: "Dive deeper into each business listing to extract additional hidden data such as verified phone numbers and GST numbers. Our Deep Extractor module ensures you retrieve enriched contact and compliance details for stronger lead qualification.",
    description: "Dive deeper into each business listing to extract additional hidden data such as verified phone numbers and GST numbers. Our Deep Extractor module ensures you retrieve enriched contact and compliance details for stronger lead qualification.",
    imageSrc: "/assets/iconfonts/dashboard-icon/tradeindia.png",
    sectionHeading: "Deep Extractor",
    link: "/signup",
    buttonText: "Try Now",
    pretitle: "B2B Directory Scraper",
    presubtitle: "Lead Generation",
  },
  {
    subheading: "Trade India Scraper (Review Extracted Listings)",
    paragraph: "Once the data is extracted, you can review the business listings in a clear, organized format. This lets you validate the results and decide on your next steps for outreach or marketing.",
    description: "Once the data is extracted, you can review the business listings in a clear, organized format. This lets you validate the results and decide on your next steps for outreach or marketing.",
    imageSrc: "/assets/iconfonts/dashboard-icon/tradeindia.png",
    sectionHeading: "Review Extracted Listings",
    link: "/signup",
    buttonText: "Try Now",
    pretitle: "B2B Directory Scraper",
    presubtitle: "Lead Generation",
  },
  {
    subheading: "Trade India Scraper (Export to CSV)",
    paragraph: "Finally, you have the option to download or export the data in CSV format, ready for further use. Whether for research, lead generation, or contacting businesses.",
    description: "Finally, you have the option to download or export the data in CSV format, ready for further use. Whether for research, lead generation, or contacting businesses.",
    imageSrc: "/assets/iconfonts/dashboard-icon/tradeindia.png",
    sectionHeading: "Export to CSV",
    link: "/signup",
    buttonText: "Try Now",
    pretitle: "B2B Directory Scraper",
    presubtitle: "Lead Generation",
  },
],
};

export const tradeindiascraperVideo = {
  heading: "<span className='text-blue-500'>Watch a</span>Demo",
  videoUrl: "qc7_yiUhtCc?si=3M6Nq78MVcEQpJzP",
  buttonText: "Try Free Trial",
  buttonLink: "/signup",
};
// ExportersIndia Scraper

// Define the properties as an object
export const exportersindiascraperProps = {
  title: (
    <>
    Exporters<span className="hero-title">India</span> Scraper
    </>
  ),
  description:
    "Our ExportersIndia Scraper helps you collect data like business listings, contact details, product info, and company profiles from ExportersIndia.com. It's great for finding leads, doing market research, or building a business database.",
  buttonText: "Try For Free",
  buttonLink: "/signup",
  leftImg: "/assets/img/slider-images/exportersscreen.png",
  rightImg: "/assets/img/slider-images/exportersscreen2.png",
};

export const exportersindiascraperstatus = [
  { icon: <i className="ri-file-text-line"></i>, value: "25M+", label: "Total Records" },
  { icon: <i className="ri-global-line"></i>, value: "18M+", label: "Total Website" },
  { icon: <i className="ri-mail-line"></i>, value: "21M+", label: "Total Email" },
  { icon: <i className="ri-phone-line"></i>, value: "19M+", label: "Total Phone" },
];

export const exportersindiascraperdataget = [

  { tooltips: 'The name or title of a place or service.', keywords: 'Title' },
  { tooltips: 'The email address associated with the place or service', keywords: 'Email' },
  { tooltips: 'The phone actual number to contact the place or service.', keywords: 'Phone Number' },
  { tooltips: 'The official website address of the place or service', keywords: 'Website' },
  { tooltips: 'The number that is present on ExportersIndia website', keywords: 'ExportersIndia Phone' },
  { tooltips: 'The link to the Product page.', keywords: 'Product URL' },
  { tooltips: 'The Name of the Compnany.', keywords: 'Company Name' },
  { tooltips: 'The Company GST number', keywords: 'GST' },
  { tooltips: 'The full address of the place, including street, city, and zip code.', keywords: 'Address' },
  { tooltips: 'The specific URl or query term used during the search process.', keywords: 'Searched URL' }

];

export const Howitworksexportersindiascraper = {
  mainheading: "<span className='text-blue-500'>How It </span>Works?",
  scrapers: [
    {
      subheading: "Exporters India Scraper (Scrape By URL)",
      paragraph: "After entering the URL, click the extract button to start the process. Our data scraper software will scan the website for email addresses and other relevant data, utilizing efficient web scraper technology to ensure comprehensive extraction",
      description: "After entering the URL, click the extract button to start the process. Our website data scraper software will scan the website for email addresses and other relevant data, utilizing efficient web scraper technology to ensure comprehensive extraction",
      imageSrc: "/assets/iconfonts/dashboard-icon/exporters.png",
      sectionHeading: "Initiate the Scraping Process", // Dynamic section heading
      link: "/signup",
      buttonText: "Try Now",
      pretitle: "B2B Directory Scraper",
      presubtitle: "Lead Generation",
    },
  {
    subheading: "Exporters India Scraper (Extract Business Data)",
    paragraph: "The scraper collects key business information such as name, phone number, address, and service details. All relevant data is compiled and structured for easy access and filtering.",
    description: "The scraper collects key business information such as name, phone number, address, and service details. All relevant data is compiled and structured for easy access and filtering.",
    imageSrc: "/assets/iconfonts/dashboard-icon/exporters.png",
    sectionHeading: "Extract Business Data",
    link: "/signup",
    buttonText: "Try Now",
    pretitle: "B2B Directory Scraper",
    presubtitle: "Lead Generation",
  },
  {
    subheading: "Exporters India Scraper (Deep Extractor)",
    paragraph: "Dive deeper into each business listing to extract additional hidden data such as verified phone numbers and GST numbers. Our Deep Extractor module ensures you retrieve enriched contact and compliance details for stronger lead qualification.",
    description: "Dive deeper into each business listing to extract additional hidden data such as verified phone numbers and GST numbers. Our Deep Extractor module ensures you retrieve enriched contact and compliance details for stronger lead qualification.",
    imageSrc: "/assets/iconfonts/dashboard-icon/exporters.png",
    sectionHeading: "Deep Extractor",
    link: "/signup",
    buttonText: "Try Now",
    pretitle: "B2B Directory Scraper",
    presubtitle: "Lead Generation",
  },
  {
    subheading: "Exporters India Scraper (Review Extracted Listings)",
    paragraph: "Once the data is extracted, you can review the business listings in a clear, organized format. This lets you validate the results and decide on your next steps for outreach or marketing.",
    description: "Once the data is extracted, you can review the business listings in a clear, organized format. This lets you validate the results and decide on your next steps for outreach or marketing.",
    imageSrc: "/assets/iconfonts/dashboard-icon/exporters.png",
    sectionHeading: "Review Extracted Listings",
    link: "/signup",
    buttonText: "Try Now",
    pretitle: "B2B Directory Scraper",
    presubtitle: "Lead Generation",
  },
  {
    subheading: "Exporters India Scraper (Export to CSV)",
    paragraph: "Finally, you have the option to download or export the data in CSV format, ready for further use. Whether for research, lead generation, or contacting businesses.",
    description: "Finally, you have the option to download or export the data in CSV format, ready for further use. Whether for research, lead generation, or contacting businesses.",
    imageSrc: "/assets/iconfonts/dashboard-icon/exporters.png",
    sectionHeading: "Export to CSV",
    link: "/signup",
    buttonText: "Try Now",
    pretitle: "B2B Directory Scraper",
    presubtitle: "Lead Generation",
  },
],
};

export const exportersindiascraperVideo = {
  heading: "<span className='text-blue-500'>Watch a</span>Demo",
  videoUrl: "rLrtvQ9TkKc?si=5ftwlWawyaJT-fpP",
  buttonText: "Try Free Trial",
  buttonLink: "/signup",
};
// Email Scraper

// Define the properties as an object
export const emailscraperProps = {
  title: (
    <>
    <span className="hero-title">Email</span> Scraper
    </>
  ),
  description:
    "Our Bulk Email Scraper efficiently extracts email addresses from websites, search engine results, or custom sources. Designed for marketers, researchers, and lead generation professionals, it automates the process of gathering valid email data at scale.",
  buttonText: "Try For Free",
  buttonLink: "/signup",
  leftImg: "/assets/img/slider-images/emailscreen.png",
  rightImg: "/assets/img/slider-images/emailscreen2.png",
};

export const emailscraperstatus = [

  { icon: <i className="ri-file-text-line"></i>, value: "20M+", label: "Total Records" },
  { icon: <i className="ri-global-line"></i>, value: "16M+", label: "Total Website" },
  { icon: <i className="ri-mail-line"></i>, value: "15M+", label: "Total Email" },

];

export const emailscraperdataget = [

  { tooltips: 'The email address associated with the place or service', keywords: 'Email' },
  { tooltips: 'The official website address of the place or service', keywords: 'Website' },
  { tooltips: 'The keyword or query term used for searching in Search.', keywords: 'Keywords' },

];

export const Howitworksemailscraper = {
  mainheading: "<span className='text-blue-500'>How It </span>Works?",
  scrapers: [
    {
      subheading: "Email Scraper (Scrape By Keyword)",
      paragraph: "After entering the Keyword, click the extract button to start the process. Our scraper software will scan the website for email addresses , utilizing efficient web scraper technology to ensure comprehensive extraction",
      description: "After entering the Keyword, click the extract button to start the process. Our scraper software will scan the website for email addresses , utilizing efficient web scraper technology to ensure comprehensive extraction",
      imageSrc: "/assets/iconfonts/dashboard-icon/email.png",
      sectionHeading: "Initiate the Scraping Process", // Dynamic section heading
      link: "/signup",
      buttonText: "Try Now",
      pretitle: "Bulk Email Scraper",
      presubtitle: "Lead Generation",
    },
    {
      subheading: "Email Scraper (Extract Emails)",
      paragraph: "The web scraper identifies and extracts all available email addresses on the website, including those found on contact pages, footers, or other areas. Our data scraping tools make this process seamless, gathering information with precision",
      description: "The web scraper identifies and extracts all available email addresses on the website, including those found on contact pages, footers, or other areas. Our data scraping tools make this process seamless, gathering information with precision",
      imageSrc: "/assets/iconfonts/dashboard-icon/email.png",
      sectionHeading: "Extract Emails", // Dynamic section heading
      link: "/signup",
      buttonText: "Try Now",
      pretitle: "Bulk Email Scraper",
      presubtitle: "Lead Generation",
    },
    {
      subheading: "Email Scraper (Review the Results)",
      paragraph: "Once the extraction is complete, you’ll receive an organized list of all emails found. Our web scraping service provides clear results, allowing you to quickly review and utilize the website data scraper output for your needs",
      description: "Once the extraction is complete, you’ll receive an organized list of all emails found. Our web scraping service provides clear results, allowing you to quickly review and utilize the website data scraper output for your needs",
      imageSrc: "/assets/iconfonts/dashboard-icon/email.png",
      sectionHeading: "Review the Results", // Dynamic section heading
      link: "/signup",
      buttonText: "Try Now",
      pretitle: "Bulk Email Scraper",
      presubtitle: "Lead Generation",
    },
    {
      subheading: "Email Scraper (Analyze the Results)",
      paragraph: "Review the extracted data in an organized format to identify the most relevant information. Our web scraping tools are designed for easy analysis, making it simple to leverage the data for lead generation or research purposes.",
      description: "Review the extracted data in an organized format to identify the most relevant information. Our web scraping tools are designed for easy analysis, making it simple to leverage the data for lead generation or research purposes.",
      imageSrc: "/assets/iconfonts/dashboard-icon/email.png",
      sectionHeading: "Analyze the Results", // Dynamic section heading
      link: "/signup",
      buttonText: "Try Now",
      pretitle: "Bulk Email Scraper",
      presubtitle: "Lead Generation",
    },
    {
      subheading: "Email Scraper (Download or Export Data)",
      paragraph: "Finally, you have the option to download or export the data in CSV format, ready for further use. Whether for research, lead generation, or contacting businesses.",
      description: "Finally, you have the option to download or export the data in CSV format, ready for further use. Whether for research, lead generation, or contacting businesses.",
      imageSrc: "/assets/iconfonts/dashboard-icon/email.png",
      sectionHeading: "Download or Export Data", // Dynamic section heading
      link: "/signup",
      buttonText: "Try Now",
      pretitle: "Bulk Email Scraper",
      presubtitle: "Lead Generation",
    },
  ],
};

export const emailscraperVideo = {
  heading: "<span className='text-blue-500'>Watch a</span>Demo",
  videoUrl: "lYoNYTFTTE8",
  buttonText: "Try Free Trial",
  buttonLink: "/signup",
};
// Phone Scraper

// Define the properties as an object
export const phonescraperProps = {
  title: (
    <>
    <span className="hero-title">Phone</span> Scraper
    </>
  ),
  description:
    "Our Bulk Phone Number Scraper automates the extraction of phone numbers from websites, online directories, and search results. It’s ideal for businesses, sales teams, and data researchers needing large volumes of contact numbers.",
  buttonText: "Try For Free",
  buttonLink: "/signup",
  leftImg: "/assets/img/slider-images/phonescreen.png",
  rightImg: "/assets/img/slider-images/phonescreen2.png",
};

export const phonescraperstatus = [
  { icon: <i className="ri-file-text-line"></i>, value: "25M+", label: "Total Records" },
  { icon: <i className="ri-global-line"></i>, value: "20M+", label: "Total Website" },
  { icon: <i className="ri-phone-line"></i>, value: "21M+", label: "Total Phone" },
];

export const phonescraperdataget = [

  { tooltips: 'The phone number to contact the place or service.', keywords: 'Phone Number' },
  { tooltips: 'The official website address of the place or service', keywords: 'Website' },
  { tooltips: 'The keyword or query term used for searching in Search.', keywords: 'Keywords' },

];

export const Howitworksphonescraper = {
  mainheading: "<span className='text-blue-500'>How It </span>Works?",
  scrapers: [
    {
      subheading: "Phone Scraper (Scrape By URL)",
      paragraph: "After entering the URL, click the extract button to start the process. Our website data scraper software will scan the website for email addresses and other relevant data, utilizing efficient web scraper technology to ensure comprehensive extraction",
      description: "After entering the URL, click the extract button to start the process. Our website data scraper software will scan the website for email addresses and other relevant data, utilizing efficient web scraper technology to ensure comprehensive extraction",
      imageSrc: "/assets/iconfonts/dashboard-icon/phone.png",
      sectionHeading: "Initiate the Scraping Process", // Dynamic section heading
      link: "/signup",
      buttonText: "Try Now",
      pretitle: "Bulk Phone Scraper",
      presubtitle: "Lead Generation",
    },
    {
      subheading: "Phone Scraper (Extract Phone)",
      paragraph: "The web scraper identifies and extracts all available phone on the website, including those found on contact pages, footers, or other areas. Our data scraping tools make this process seamless, gathering information with precision",
      description: "The web scraper identifies and extracts all available phone on the website, including those found on contact pages, footers, or other areas. Our data scraping tools make this process seamless, gathering information with precision",
      imageSrc: "/assets/iconfonts/dashboard-icon/phone.png",
      sectionHeading: "Extract Phone", // Dynamic section heading
      link: "/signup",
      buttonText: "Try Now",
      pretitle: "Bulk Phone Scraper",
      presubtitle: "Lead Generation",
    },
    {
      subheading: "Phone Scraper (Review the Results)",
      paragraph: "Once the extraction is complete, you’ll receive an organized list of all Phone Numbers found. Our web scraping service provides clear results, allowing you to quickly review and utilize the website data scraper output for your needs",
      description: "Once the extraction is complete, you’ll receive an organized list of all Phone Numbers found. Our web scraping service provides clear results, allowing you to quickly review and utilize the website data scraper output for your needs",
      imageSrc: "/assets/iconfonts/dashboard-icon/phone.png",
      sectionHeading: "Review the Results", // Dynamic section heading
      link: "/signup",
      buttonText: "Try Now",
      pretitle: "Bulk Phone Scraper",
      presubtitle: "Lead Generation",
    },
    {
      subheading: "Phone Scraper (Analyze the Results)",
      paragraph: "Review the extracted data in an organized format to identify the most relevant information. Our web scraping tools are designed for easy analysis, making it simple to leverage the data for lead generation or research purposes.",
      description: "Review the extracted data in an organized format to identify the most relevant information. Our web scraping tools are designed for easy analysis, making it simple to leverage the data for lead generation or research purposes.",
      imageSrc: "/assets/iconfonts/dashboard-icon/phone.png",
      sectionHeading: "Analyze the Results", // Dynamic section heading
      link: "/signup",
      buttonText: "Try Now",
      pretitle: "Bulk Phone Scraper",
      presubtitle: "Lead Generation",
    },
    {
      subheading: "Phone Scraper (Download or Export Data)",
      paragraph: "Finally, you have the option to download or export the data in CSV format, ready for further use. Whether for research, lead generation, or contacting businesses.",
      description: "Finally, you have the option to download or export the data in CSV format, ready for further use. Whether for research, lead generation, or contacting businesses.",
      imageSrc: "/assets/iconfonts/dashboard-icon/phone.png",
      sectionHeading: "Download or Export Data", // Dynamic section heading
      link: "/signup",
      buttonText: "Try Now",
      pretitle: "Bulk Phone Scraper",
      presubtitle: "Lead Generation",
    },
  ],
};

export const phonescraperVideo = {
  heading: "<span className='text-blue-500'>Watch a</span>Demo",
  videoUrl: "Tyhmu_RS-eU?si=ILmsLFyfavSNCEaK",

  buttonText: "Try Free Trial",
  buttonLink: "/signup",
};
// Dynamic data arrays
export const aboutuswhowearecontent = [
  "Scrape Genius, specializes in management software, including our business directory scraper and yellow pages extractor. With over 75 products, we offer tools for data scraping, such as Document scraper and image scraping tools. Our solutions streamline data collection for users worldwide.",
  "Our mission is to make data collection as easy as possible. We offer an automated process that lets you quickly and easily grab data from the Internet, all in one convenient place.",
];

export const aboutuswebcontent = [
  "The Scrape Genius is a powerful data scraping tool designed to simplify data extraction for business professionals and enthusiasts. This versatile tool acts as a business directory scraper, yellow pages scraper, and yellow pages data extractor, enabling users to effortlessly gather essential information such as yellow pages email extractor details, contact numbers, and domain names. With capabilities to scrape data from websites, scrape images from websites, and scrape CSV files, it is invaluable for various data collection tasks.",
  "Why struggle with complex tools when you can harness the simplicity and efficiency of the Scrape Genius? It streamlines the process of web scraping yellow pages and supports document scraping for Excel and other formats. Whether you’re conducting a whois search or utilizing a website data scraper, this tool ensures that all necessary data, including whois domain information and whois database lookup, is at your fingertips, turning minutes into moments of discovery.",
];

export const buttons = [
  { text: "Buy Now", class: "bg-blue-500 hover:bg-blue-400 text-white" },
  { text: "Start a Free Trial", class: "bg-transparent border hover:bg-slate-200 hover:text-black text-black" },
];


