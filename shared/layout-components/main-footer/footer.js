"use client"
import Link from 'next/link'
import React, { useState } from 'react'

const Footer = () => {
    const [ category, setCategory ] = useState("arts & crafts")
    const [ allCate, setAllCate ] = useState(["Arts & Crafts", "Beauty", "Books", "Clothing", "Electronics", "Food & Restaurants", "Furniture", "Health & Wellness", "Education", "Technology", "Sports & Games"])
    const [ subCategory, setSubCategory ] = useState([
        {
            "cat_name": "Arts & Crafts",
            "sub_cats": [
                "Painting", "Drawing", "Sculpture", "Pottery", "Ceramics", "Knitting", "Crochet", "Embroidery", 
                "Needlework", "Sewing", "Quilting", "Textile Arts", "Calligraphy", "Paper Craft", "Origami", 
                "Woodworking", "Metalworking", "Glass Art", "Jewelry Making", "Beadwork", "Mosaic Art", "Weaving", 
                "Basketry", "Leathercraft", "Stained Glass", "Candle Making", "Soap Making", "Card Making", 
                "Scrapbooking", "Stamping", "Decoupage", "Collage Art", "Wall Art", "Upcycling", "Recycling Crafts", 
                "Miniatures", "Model Building", "Tattoo Art", "Art for Kids", "Art Supplies", "Painting Techniques", 
                "Acrylic Painting", "Oil Painting", "Watercolor", "Pastel Art", "Airbrushing", "Digital Art", 
                "Photography", "Clay Art", "Art Exhibitions", "Crafting Tools", "DIY Projects", "Craft Workshops"
            ]
        },
        {
            "cat_name": "Beauty",
            "sub_cats": [
                "Skincare", "Hair Care", "Makeup", "Fragrances", "Nail Care", "Men's Grooming", "Beauty Tools", 
                "Body Care", "Anti-aging Products", "Sunscreens", "Face Masks", "Shampoo", "Conditioner", "Hair Color", 
                "Hair Styling", "Facial Cleansers", "Moisturizers", "Eye Care", "Lip Care", "Perfumes", "Deodorants", 
                "Bath & Shower", "Hair Treatment", "Lipstick", "Foundation", "Mascara", "Eyeliner", "Nail Polish", 
                "Nail Art", "Shaving Cream", "Aftershave", "Exfoliators", "Serums", "Facial Oils", "Cleansing Wipes", 
                "Face Toner", "Body Lotions", "Hair Brushes", "Hairsprays", "Hair Gel", "Facial Scrubs", "Face Creams", 
                "Hand Creams", "Men's Shaving Kits", "Sunless Tanners", "Shower Gels", "Anti-wrinkle Cream", 
                "Hair Masks", "Foot Care", "Beard Care", "Shampoos for Oily Hair", "Shampoos for Dry Hair", 
                "Conditioners for Frizzy Hair"
            ]
        },
        {
            "cat_name": "Books",
            "sub_cats": [
                "Book Resellers", "Stationery Shops", "Schools", "Book Publishers", "Book Rental Services", "Online Bookstores", "Libraries", "Textbook Shops", "Used Book Stores", "E-Book Platforms", "Academic Bookstores", "Comic Book Shops", "Children's Book Shops", "Library Suppliers", "Printing Services", "Bookbinding Services", "Stationery Wholesalers", "Gift Shops", "Art Supplies Stores", "Notebooks and Journals", "Self-Publishing Services", "Digital Book Retailers", "Book Distributors", "Literary Agents", "Book Reviews and Blogs", "School Book Suppliers", "Antique Book Shops", "Textbook Rental Services", "E-Reader Suppliers", "Audiobook Platforms", "Academic Publishers", "Book Fair Organizers", "Writer's Resources", "Book Designers", "Book Clubs", "Library Services", "Nonprofit Bookstores", "Children's Reading Programs", "Poetry Bookstores", "Cookbook Stores", "Fiction Bookshops", "Business Bookstores", "Rare Book Shops", "Online Reading Communities", "Book Restoration Services", "Storytelling Events", "School Book Fairs", "Book Subscription Boxes", "Book Discussion Groups"
            ]
        },
        {
            "cat_name": "Clothing",
            "sub_cats": [
                "Branded Cloth Shops", "Cloth Dealers", "Clothing Boutiques", "Sportswear Shops", "Fashion Retailers", "Department Stores", "Secondhand Clothing Stores", "Vintage Clothing Shops", "Children's Clothing Stores", "Men's Clothing Shops", "Women's Clothing Shops", "Footwear Stores", "Accessories Stores", "Jewelry Stores", "Custom Clothing Stores", "Tailors", "Clothing Manufacturers", "Textile Suppliers", "Uniform Dealers", "Laundry Services", "Workwear Retailers", "Luxury Fashion Boutiques", "Swimwear Stores", "Lingerie Shops", "Athleisure Stores", "Hats and Caps Stores", "Shoe Repair Shops", "Clothing Rental Services", "Upcycled Clothing Stores", "Leather Goods Shops", "Sunglasses Shops", "Winter Wear Shops", "Maternity Wear Stores", "T-shirt Printing Shops", "Online Clothing Retailers", "Clothing Wholesale Suppliers", "Costume Stores", "Clothing Alteration Services", "Dry Cleaners", "Shoe Stores (Sports/Running)", "Clothing Design Studios", "Fashion Stylists", "Personal Shoppers", "Clothing Auctions", "Bags and Purses Shops", "Footwear Repair Services", "Leather Jacket Stores", "Clothing Accessories Manufacturers"
            ]
        },
        {
            "cat_name": "Electronics",
            "sub_cats": [
                "Smartphones", "Laptops", "Tablets", "Headphones", "Smartwatches", "Cameras", "Gaming Consoles", 
                "TVs", "Home Appliances", "Speakers", "Kitchen Appliances", "Smart Home Devices", "Chargers", "Power Banks", 
                "Projectors", "Printers", "Monitors", "Keyboards", "Mice", "External Hard Drives", "Memory Cards", 
                "Game Accessories", "Bluetooth Devices", "Drones", "Virtual Reality Headsets", "Fitness Gadgets", 
                "Home Security Cameras", "Car Electronics", "Wearable Technology", "Smart Home Lighting", "Smart Thermostats", 
                "Smart Locks", "Electric Toothbrushes", "Hair Dryers", "Electric Kettles", "Coffee Machines", "Electric Fans", 
                "Humidifiers", "Air Purifiers", "Robot Vacuums", "Electric Scooters", "Electric Bikes", "Food Processors", 
                "Blenders", "Microwaves", "Dishwashers", "Refrigerators", "Washing Machines", "Electric Shavers"
            ]
        },
        {
            "cat_name": "Food & Restaurants",
            "sub_cats": [
                "Restaurants", "Hotels", "Cafes", "Food Dealers", "Food Suppliers", "Supermarkets", "Organic Food Stores", "Street Food Vendors", "Food Delivery Services", "Fast Food Chains", "Health Food Stores", "Butcher Shops", "Fishmongers", "Bakeries", "Ice Cream Parlors", "Vegetable Markets", "Fruit Stalls", "Grocery Stores", "Catering Services", "Food Packaging Companies", "Juice Bars", "Coffee Shops", "Food Trucks", "Wine Stores", "Spice Dealers", "Organic Meat Suppliers", "Cheese Shops", "Patisseries", "Candy Shops", "Tea Shops", "Herb and Spice Stores", "Dried Food Sellers", "Nut and Dry Fruit Shops", "Meal Kit Services", "Farmers' Markets", "Gluten-Free Food Stores", "Frozen Food Suppliers", "Diet Food Shops", "Ethnic Food Stores", "Cooking Equipment Shops", "Vegan Food Stores", "Halal Food Stores", "Kosher Food Stores", "Food Exporters", "Beverage Distributors", "Food Packaging Solutions", "Farm-to-Table Services"
            ],
        },
        {
            "cat_name": "Furniture",
            "sub_cats": [
                "carpenter", "Living Room Furniture", "Bedroom Furniture", "Dining Room Furniture", "Office Furniture", 
                "Kitchen Furniture", "Bathroom Furniture", "Storage Solutions", "Outdoor Furniture", "Sofa Sets", 
                "Chairs", "Tables", "Bookshelves", "Wardrobes", "Beds", "Couches", "Cabinets", "Drawers", "Dressers", 
                "Desks", "Nightstands", "Coffee Tables", "Side Tables", "TV Stands", "Recliners", "Bean Bags", "Ottomans", 
                "Vanities", "Bathroom Cabinets", "Bar Stools", "Dining Tables", "Lamps", "Mirrors", "Rugs", "Curtains", 
                "Wall Art", "Filing Cabinets", "Lounge Chairs", "Office Chairs", "Bookcases", "Bunk Beds", "Cribs", 
                "Mattresses", "Sofas", "Coffee Tables", "Armchairs", "Dining Chairs", "Patio Furniture", "Patio Chairs", 
                "Outdoor Tables", "Kitchen Storage", "Entryway Furniture"
            ]
        },
        {
            "cat_name": "Health & Wellness",
            "sub_cats": [
                "Vitamins", "Supplements", "Fitness Equipment", "Exercise Accessories", "Yoga", "Pilates", "Aerobics", 
                "Running Gear", "Sports Nutrition", "Personal Care", "Oral Care", "Skincare Products", "Haircare", 
                "Men's Health", "Women's Health", "Children's Health", "Mental Health", "Weight Loss", "Nutrition", 
                "Dieting", "Meal Plans", "Chiropractic Services", "Physical Therapy", "Health Insurance", "Medical Supplies", 
                "First Aid Kits", "Medical Equipment", "Over-the-counter Medication", "Prescription Medication", "Fitness Programs", 
                "Health Clinics", "Dentists", "Optometrists", "Podiatrists", "General Physicians", "Alternative Medicine", 
                "Acupuncture", "Herbal Remedies", "Massage Therapy", "Aromatherapy", "Physical Fitness", "Sports Medicine", 
                "Therapeutic Treatments", "Mental Health Counseling", "Sleep Aids", "Stress Relief", "Detox Products", "Spa Treatments"
            ]
        },
        {
            "cat_name": "Education",
            "sub_cats": [
                "Boarding Schools", "CBSE Schools", "Govt Schools", "Private Schools", "Coaching Classes", "Private Classes", 
                "Online Education", "Tutoring Centers", "International Schools", "Pre-schools", "High Schools", 
                "Elementary Schools", "College Prep Programs", "Distance Learning", "Adult Education", "Vocational Training", 
                "Homeschooling Resources", "University Courses", "Study Abroad Programs", "Language Schools", "Test Prep", 
                "Academic Camps", "Literacy Programs", "Science Programs", "Math Competitions", "Computer Science Classes", 
                "Music Lessons", "Sports Coaching", "Art Schools", "Technical Institutes", "Medical Schools", "Engineering Programs", 
                "Fashion Design Schools", "Public Speaking Classes", "PhD Programs", "Research Institutions", "Entrepreneurship Programs", 
                "Internships", "Scholarship Programs", "Special Needs Education", "Online Tutoring", "Summer Programs", 
                "Law School", "Business Schools", "Nursing Programs", "Vocational Schools", "Acting Classes", "Film Schools", 
                "Culinary Schools", "Hospitality Programs", "Pilots Training", "Military Academies"
            ]
        },
        {
            "cat_name": "Technology",
            "sub_cats": [
                "Smartphones", "Laptops", "Tablets", "Desktop Computers", "Software", "Operating Systems", "Applications", 
                "Web Development", "Mobile Development", "Data Science", "Artificial Intelligence", "Virtual Reality", 
                "Augmented Reality", "Cybersecurity", "Cloud Computing", "Blockchain", "Networking", "E-commerce Solutions", 
                "Electronics", "3D Printing", "Gadgets", "Wearable Tech", "Drones", "Tech Accessories", "Video Games", 
                "Game Consoles", "PC Gaming", "Mobile Gaming", "Tech News", "Reviews", "Tech Startups", "Internet of Things", 
                "Smart Home Devices", "Robotics", "Quantum Computing", "Digital Marketing", "Machine Learning", 
                "Big Data", "Analytics", "Online Security", "Digital Transformation", "Web Hosting", "Website Design", 
                "SEO", "App Development", "Cloud Storage", "Automation Tools", "Tech Education", "Software as a Service", 
                "Fintech", "Edtech", "Healthtech", "Proptech"
            ]
        },
        {
            "cat_name": "Sports & Games",
            "sub_cats": [
                "Sports Equipment Stores", "Sports Apparel Shops", "Sports Clubs", "Fitness Centers", "Sports Coaching Centers", "Gym Equipment Dealers", "Sports Goods Suppliers", "Outdoor Sports Stores", "Indoor Sports Venues", "Sports Training Academies", "Sports Resellers", "E-Sports Platforms", "Gaming Consoles Shops", "Board Game Shops", "Video Game Retailers", "Sports Tournaments", "Sports Associations", "Sports Bars", "Athletic Wear Retailers", "Shoe Stores (Sports/Running)", "Sporting Goods Manufacturers", "Sports Memorabilia Stores", "Sports Sponsorship Agencies", "Fitness Apparel Brands", "Sports Nutrition Stores", "Running Shoe Stores", "Yoga Gear Stores", "Cycling Gear Shops", "Golf Stores", "Swimming Equipment Stores", "Hiking and Camping Gear Stores", "Ski and Snowboard Equipment Shops", "Tennis Equipment Shops", "Racket Sports Retailers", "Fitness Equipment Rental", "Personal Trainers", "Martial Arts Studios", "Dance Studios", "Physical Therapy Clinics", "Cheerleading Supplies", "Sporting Events Ticketing", "Extreme Sports Equipment", "E-Sports Tournaments", "Virtual Reality Gaming Centers", "Golf Course Equipment", "Sports Photography", "Adventure Sports Guides", "Sports Science Institutes", "Sports Recovery Services", "Tennis Courts and Centers", "Climbing Gear Shops", "Game Development Studios", "Sports Journalism"
            ]
        }
    ])

    const [ trendingSearches, setTrendingSearches ] = useState([
        "Real Estate Agents near me","Best Work From Home Jobs 2025","Freelance job opportunities","Online job tutorials for beginners","Dance classes for kids and adults","Best dance studios for hip hop","Ballet dance training centers","Affordable railway ticket booking","Train ticket reservation services","Bus and rail travel booking platforms","Simcard dealers in my area","Best mobile plans and simcard offers","International simcard providers","Army training centers for civilians","Military training schools","Army preparation coaching institutes","Firefighting training programs","Yoga and meditation classes near me","Online learning platforms for coding","Web development tutorials for beginners","Best online cooking classes","Online teaching resources for educators","Online tutorial classes for kids","Self-defense training centers","Music production classes","Personal finance courses and tutorials","Photography and videography studios","IT certification programs","Network marketing tutorials","Fitness certifications for trainers","Freelance design work tutorials","Leadership and management courses","Handyman services and tutorials","Travel agent services and tutorials"
    ])

    const [ ourCollection, setOurCollection ] = useState([
        "Real Estate Agencies", "Freelance Opportunities", "Online Learning Platforms", "Dance Schools and Studios", "Fitness and Wellness Centers", "Photography and Videography Studios", "Graphic Design Agencies", "Interior Design Firms", "Web Development and Design Companies", "Digital Marketing Agencies", "SEO Services Providers", "E-Commerce Consulting Firms", "Mobile App Development Companies", "Technical Support Services", "Photography Equipment Rentals", "Automobile Sales and Repair Services", "Health and Wellness Retreats"
    ])

    const [ links, setLinks ] = useState([
        {
            link_type: "social_links",
            links: [
                {
                    title: "facebook",
                    url: "/next-dash"
                },
                {
                    title: "instagram",
                    url: "/next-dash"
                },
                {
                    title: "youtube",
                    url: "/next-dash"
                },
                {
                    title: "twitter",
                    url: "/next-dash"
                }
            ]
        },
        {
            link_type: "quick_links",
            links: [
                {
                    title: "about us",
                    url: "/next-dash"
                },
                {
                    title: "contact us",
                    url: "/next-dash"
                },
                {
                    title: "our services",
                    url: "/next-dash"
                },
                {
                    title: "free listing",
                    url: "/next-dash"
                },
                {
                    title: "sign up",
                    url: "/next-dash"
                },
                {
                    title: "sign in",
                    url: "/next-dash"
                },
                {
                    title: "pricing",
                    url: "/next-dash"
                },
                {
                    title: "FAQ",
                    url: "/next-dash"
                },
                {
                    title: "help/support",
                    url: "/next-dash"
                },
            ]
        },
        {
            link_type: "important_links",
            links: [
                {
                    title: "Astrologers",
                    url: "/next-dash"
                },
                {
                    title: "B2B",
                    url: "/next-dash"
                },
                {
                    title: "Doctors",
                    url: "/next-dash"
                },
                {
                    title: "electronics",
                    url: "/next-dash"
                },
                {
                    title: "Finance",
                    url: "/next-dash"
                },
                {
                    title: "hospitals",
                    url: "/next-dash"
                },
                {
                    title: "schools",
                    url: "/next-dash"
                },
                {
                    title: "Teachers",
                    url: "/next-dash"
                },
                {
                    title: "Travel",
                    url: "/next-dash"
                },
                {
                    title: "Venders",
                    url: "/next-dash"
                },
                {
                    title: "wholesale",
                    url: "/next-dash"
                }
            ]
        }
    ])

    const footer_cards = [
        {
            icon: "ri-shake-hands-line",
            title: "B2B",
            description: "Our service extends from providing address and contact details of business establishments around the country, to making orders and reservations for leisure, medical, financial, travel and domestic purposes. We enlist business information across varied sectors like Hotels, Restaurants, Auto Care, Home Decor, Personal and Pet Care, Fitness, Insurance, Real Estate, Sports, Schools, etc. from all over the country. Holding information right from major cities like Mumbai, Delhi, Bangalore, Hyderabad, Chennai, Ahmedabad and Pune our reach stretches out to other smaller cities across the country too."
        },
        {
            icon: "ri-pin-distance-line",
            title: "All India",
            description: "medical, financial, travel and domestic purposes. We enlist business information across varied sectors like Hotels, Restaurants, Auto Care, Home Decor, Personal and Pet Care, Fitness, Insurance, Real Estate, Sports, Schools, etc. from all over the country. Holding information right from major cities like Mumbai, Delhi, Bangalore, Hyderabad, Chennai, Ahmedabad and Pune our reach stretches out to other smaller cities across the country too."
        },
        {
            icon: "ri-inbox-unarchive-line",
            title: "Packers and movers",
            description: "What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        },
        {
            icon: "ri-restaurant-line",
            title: "restaurants",
            description: "Our 'Free Listing' feature gives a platform to showcase varied specialities. We then furnish you with the information via phone, SMS, web, App and WAP as well as, create a space for you to share your experiences through our 'Rate & Review' feature. Through the 'Best Deals', 'Last Minute Deals' and 'Live Quotes', we make sure that you are offered the best bargains in the market."
        },
        {
            icon: "ri-vidicon-line",
            title: "movies",
            description: "Our 'Free Listing' feature gives a platform to showcase varied specialities. We then furnish you with the information via phone, SMS, web, App and WAP as well as, create a space for you to share your experiences through our 'Rate & Review' feature. Through the 'Best Deals', 'Last Minute Deals' and 'Live Quotes', we make sure that you are offered the best bargains in the market."
        },
        {
            icon: "ri-tools-line",
            title: "repairing",
            description: "Our 'Free Listing' feature gives a platform to showcase varied specialities. We then furnish you with the information via phone, SMS, web, App and WAP as well as, create a space for you to share your experiences through our 'Rate & Review' feature. Through the 'Best Deals', 'Last Minute Deals' and 'Live Quotes', we make sure that you are offered the best bargains in the market."
        },
        {
            icon: "ri-building-line",
            title: "real estate",
            description: "Our 'Free Listing' feature gives a platform to showcase varied specialities. We then furnish you with the information via phone, SMS, web, App and WAP as well as, create a space for you to share your experiences through our 'Rate & Review' feature. Through the 'Best Deals', 'Last Minute Deals' and 'Live Quotes', we make sure that you are offered the best bargains in the market."
        },
        {
            icon: "ri-taxi-line",
            title: "taxies",
            description: "Our 'Free Listing' feature gives a platform to showcase varied specialities. We then furnish you with the information via phone, SMS, web, App and WAP as well as, create a space for you to share your experiences through our 'Rate & Review' feature. Through the 'Best Deals', 'Last Minute Deals' and 'Live Quotes', we make sure that you are offered the best bargains in the market."
        },
    ]

  return (
    <div className='mt-10 flex flex-col gap-12'>
        <div className='footer-description'>
            <h3 className='text-lg mb-5 font-semibold'>One-Stop for All Local Businesses, Services, & Stores Nearby Across India</h3>
            <p className='text-xs text-gray-500'>
                Welcome to Justdial, your 'one stop shop' where you are assisted with day-to-day and exclusive planning and purchasing activities. We take pride in our iconic customer support number, 8888888888 and the fact that we own a strong hold on local business information pan India.
                <br/>
                <br/>
                Our service extends from providing address and contact details of business establishments around the country, to making orders and reservations for leisure, medical, financial, travel and domestic purposes. We enlist business information across varied sectors like Hotels, Restaurants, Auto Care, Home Decor, Personal and Pet Care, Fitness, Insurance, Real Estate, Sports, Schools, etc. from all over the country. Holding information right from major cities like Mumbai, Delhi, Bangalore, Hyderabad, Chennai, Ahmedabad and Pune our reach stretches out to other smaller cities across the country too.
                <br/>
                <br/>
                Our 'Free Listing' feature gives a platform to showcase varied specialities. We then furnish you with the information via phone, SMS, web, App and WAP as well as, create a space for you to share your experiences through our 'Rate & Review' feature. Through the 'Best Deals', 'Last Minute Deals' and 'Live Quotes', we make sure that you are offered the best bargains in the market.
            </p>
        </div>

        <div className='footer-cards'>
            <h3 className='text-lg mb-5 font-semibold'>Some of our services that will prove useful to you on a day-to-day basis are :</h3>
            <div className='flex flex-wrap'>
                {
                    footer_cards.map(({icon, title, description}, ind)=>(
                        <div className='w-1/4 flex flex-col gap-3 pt-5 pr-10 pb-10' key={ind}>
                            <h3 className='flex gap-2 items-center capitalize'>
                                <i className={`${icon} text-2xl`}></i>
                                <span className='text-base'>{title}</span>
                            </h3>
                            <p className='capitalize text-xs text-gray-500'>
                                {description}
                            </p>
                        </div>
                    ))
                }
            </div>
        </div>

        <div className='footer-bottom'>
            <div className='footer-nav'>
                <h3 className='text-lg mb-5 font-semibold'>Popular Categories</h3>
                <ul className='flex items-center justify-between'>
                    {
                        allCate.map((cat, ind)=>(
                            <li key={ind}>
                                <button onClick={()=>setCategory(cat)} className={`capitalize ${cat.toLowerCase() === category.toLowerCase() ? "bg-gray-100 shadow" : "hover:bg-gray-100 hover:shadow"} border border-gray-300 font-medium rounded-sm py-3 px-3`}>
                                    {cat}
                                </button>
                            </li>
                        ))
                    }
                </ul>
                <p className='mt-5 text-xs leading-5'>
                    {
                        subCategory.map(({cat_name, sub_cats}, ind)=>(
                            <span key={ind}>
                                {
                                    (cat_name.toLowerCase() === category.toLowerCase()) &&
                                    <span>
                                        {
                                            sub_cats.map((cat, ind)=>(
                                                <Link key={ind} href={""} title={cat} className='inline-flex gap-1 text-gray-500 hover:text-gray-800 hover:underline'>
                                                    <span className='tracking-wide capitalize'>{cat}</span>
                                                    <span className='pr-1'>|</span>
                                                </Link>
                                            ))
                                        }
                                    </span>
                                }
                            </span>
                        ))
                    }
                </p>

                <div className='mt-10'>
                    <h4 className='font-bold mb-3'>Trending Searches</h4>
                    <p className='text-xs leading-5'>
                        {
                            trendingSearches.map((cat, ind)=>(
                                <Link key={ind} href={""} title={cat} className='inline-flex gap-1 text-gray-500 hover:text-gray-800 hover:underline'>
                                    <span className='tracking-wide capitalize'>{cat}</span>
                                    <span className='pr-1'>|</span>
                                </Link>
                            ))
                        }
                    </p>
                </div>
                <div className='mt-10'>
                    <h4 className='font-bold mb-3'>Explore Our Collection</h4>
                    <p className='text-xs leading-5'>
                        {
                            ourCollection.map((cat, ind)=>(
                                <Link key={ind} href={""} title={cat} className='inline-flex gap-1 text-gray-500 hover:text-gray-800 hover:underline'>
                                    <span className='tracking-wide capitalize'>{cat}</span>
                                    <span className='pr-1'>|</span>
                                </Link>
                            ))
                        }
                    </p>
                </div>
                <div className='mt-10 grid grid-cols-12'>
                    <div className='col-span-4 pr-8 group'>
                        <h3 className='text-lg font-semibold py-2 group-hover:text-black duration-200 border-b border-gray-300'>Quick Links</h3>
                        <ul className='flex flex-wrap justify-between mt-5'>
                            {
                                links[1].links.map(({title, url}, ind)=>(
                                    <li key={ind} className='w-1/2 leading-8'>
                                        <Link href={url} title={title} className='capitalize inline-flex gap-1 text-xs text-gray-500 hover:text-gray-800 hover:underline'>
                                            {title}
                                        </Link>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                    <div className='col-span-8 group'>
                        <h3 className='text-lg font-semibold py-2 group-hover:text-black duration-200 border-b border-gray-300'>Important Links</h3>
                        <ul className='flex flex-wrap justify-between mt-5'>
                            {
                                links[2].links.map(({title, url}, ind)=>(
                                    <li key={ind} className='w-[30%] leading-8'>
                                        <Link href={url} title={title} className='capitalize inline-flex gap-1 text-xs text-gray-500 hover:text-gray-800 hover:underline'>
                                            {title}
                                        </Link>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>

            </div>
        </div>

        <div className='footer-head py-10 border-b border-t border-gray-300'>
            <div className='flex flex-col gap-3 items-center'>
                <div className='flex gap-2 items-center flex-col'>
                    <h3 className='text-lg font-semibold capitalize'>Follow us on</h3>
                    <div className='flex gap-2 items-center'>
                        {
                            links[0].links.map(({title, url}, ind)=>(
                                <Link href={url} key={ind} className={`py-1 px-2 ${
                                    title === "facebook" ? "bg-blue-600" : 
                                    title === "instagram" ? "bg-gradient-to-r from-[#F58529] via-[#DD2A7B] to-[#8134AF]" :  
                                    title === "youtube" ? "bg-red-500" : 
                                    title === "twitter" ? "bg-black" : 
                                    title === "telegram" ? "bg-[#0088cc]" :
                                    title === "linkedin" ? "bg-[#0077b5]" :
                                    title === "pinterest" ? "bg-[#E60023]" :
                                    title === "reddit" ? "bg-[#FF4500]" : "bg-gray-100"
                                } opacity-75 hover:opacity-100 duration-200 text-white rounded-full`}>
                                    <i className={`text-lg ${
                                        title === "facebook" ? "ri-facebook-fill" : 
                                        title === "instagram" ? "ri-instagram-fill" :  
                                        title === "youtube" ? "ri-youtube-fill" : 
                                        title === "twitter" ? "ri-twitter-x-fill" : 
                                        title === "telegram" ? "ri-telegram-fill" :
                                        title === "linkedin" ? "ri-linkedin-fill" :
                                        title === "pinterest" ? "ri-pinterest-fill" :
                                        title === "reddit" ? "ri-reddit-fill" : "ri-question-mark"
                                    }`}></i>
                                </Link>
                            ))
                        }
                    </div>
                </div>
                <div className='flex items-center flex-col gap-1 text-sm text-gray-500 hover:text-gray-800'>
                    <p>
                        &copy; <Link href={""} className='italic text-gray-800 hover:underline font-medium'>Design Collection Pvt Ltd.</Link> 2025-30. All rights reservered.
                    </p>
                    <div className='flex gap-1 text-xs'>
                        <Link href={"/next-dash"} title={"Terms & Conditions"} className='capitalize inline-flex gap-1 hover:underline'>
                            Terms & Conditions
                        </Link>
                        <span>|</span>
                        <Link href={"/next-dash"} title={"Privacy Policy"} className='capitalize inline-flex gap-1 hover:underline'>
                            Privacy Policy
                        </Link>
                    </div>
                </div>
            </div>
        </div>

        {/* <div className='footer-head py-10 border-b border-t border-gray-300'>
            <div className='flex justify-between items-center'>
                <div className='flex gap-5 items-center'>
                    <h3 className='text-lg font-semibold'>Follow us on</h3>
                    <div className='flex gap-2 items-center'>
                        {
                            links[0].links.map(({title, url}, ind)=>(
                                <Link href={url} key={ind} className={`py-1 px-2 ${
                                    title === "facebook" ? "bg-blue-600" : 
                                    title === "instagram" ? "bg-gradient-to-r from-[#F58529] via-[#DD2A7B] to-[#8134AF]" :  
                                    title === "youtube" ? "bg-red-500" : 
                                    title === "twitter" ? "bg-black" : 
                                    title === "telegram" ? "bg-[#0088cc]" :
                                    title === "linkedin" ? "bg-[#0077b5]" :
                                    title === "pinterest" ? "bg-[#E60023]" :
                                    title === "reddit" ? "bg-[#FF4500]" : "bg-gray-100"
                                } opacity-75 hover:opacity-100 duration-200 text-white rounded-full`}>
                                    <i className={`text-lg ${
                                        title === "facebook" ? "ri-facebook-fill" : 
                                        title === "instagram" ? "ri-instagram-fill" :  
                                        title === "youtube" ? "ri-youtube-fill" : 
                                        title === "twitter" ? "ri-twitter-x-fill" : 
                                        title === "telegram" ? "ri-telegram-fill" :
                                        title === "linkedin" ? "ri-linkedin-fill" :
                                        title === "pinterest" ? "ri-pinterest-fill" :
                                        title === "reddit" ? "ri-reddit-fill" : "ri-question-mark"
                                    }`}></i>
                                </Link>
                            ))
                        }
                    </div>
                </div>
                <div className='flex items-center gap-2 text-sm text-gray-500 hover:text-gray-800'>
                    <p>
                        &copy; <Link href={""} className='italic text-gray-800 hover:underline font-medium'>Design Collection Pvt Ltd.</Link> 2025-30. All rights reservered.
                    </p>
                    <div className='flex gap-1'>
                        <Link href={"/next-dash"} title={"Terms & Conditions"} className='capitalize inline-flex gap-1 hover:underline'>
                            Terms & Conditions
                        </Link>
                        <span>|</span>
                        <Link href={"/next-dash"} title={"Privacy Policy"} className='capitalize inline-flex gap-1 hover:underline'>
                            Privacy Policy
                        </Link>
                    </div>
                </div>
            </div>
        </div> */}
    </div>
  )
}

export default Footer