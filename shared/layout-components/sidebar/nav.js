
const Dashboardsvg = <i className="ri-home-8-line side-menu__icon"></i>;

const Search = <i className="ri-search-line side-menu__icon"></i>;

const WebIcon = <i className="ri-html5-line side-menu__icon"></i>;

const AddIcon = <i className="ri-add-line side-menu__icon"></i>;

const Social = <i className="ri-megaphone-line text-lg"></i>;

const Domain = <i className="ri-global-line"></i>;

const ResellerDash = <i className="ri-home-4-line side-menu__icon"></i>;

const Analytics = <i className="ri-user-line side-menu__icon"></i>;

const Renewal = <i className="ri-refresh-line side-menu__icon"></i>;

const Profile = <i className="ri-user-line"></i>;

const Logout = <i className="ri-logout-box-line"></i>;

export const MENUITEMS = [
	{
		menutitle: "reseller",
	},

	{ path: "/reseller/dashboard", icon: ResellerDash, title: "Dashboard", type: "link", active: false, selected: false },

	{ path: "/reseller/user-analytics", icon: Analytics, title: "User Analytics", type: "link", active: false, selected: false },

	{ path: "/reseller/plan-renewal", icon: Renewal, title: "Plan Renewal", type: "link", active: false, selected: false },
	// {
	// 	menutitle: "MAIN",
	// },

	// { path: "/dashboard/home", icon: Dashboardsvg, title: "Dashboard", type: "link", active: false, selected: false },

	// {
	// 	icon: Search, title: "Search Engine Scraper", type: "sub", active: true, children: [

	// 		{ path: "/dashboard/bing-search-scraper", type: "link", active: false, selected: false, title: "Bing Search Scraper" },
	// 		{ path: "/dashboard/google-search-scraper", type: "link", active: false, selected: false, title: "Google Search Scraper" },
	// 		{ path: "/dashboard/yahoo-search-scraper", type: "link", active: false, selected: false, title: "Yahoo Search Scraper" },
	// 		{ path: "/dashboard/duckduckgo-search-scraper", type: "link", active: false, selected: false, title: "DuckDuckGo Scraper" },
	// 		{ path: "/dashboard/google-map-scraper", type: "link", active: false, selected: false, title: "Google Map Scraper" }
	// 	],
	// },

	// {
	// 	icon: Social, title: "Social Media Scraper", type: "sub", active: false, children: [
	// 		{ path: "/dashboard/facebook-scraper", type: "link", active: false, selected: false, title: "Facebook Scraper" },
	// 		{ path: "/dashboard/youtube-scraper", type: "link", active: false, selected: false, title: "YouTube Scraper" },
	// 		{ path: "/dashboard/linkedin-scraper", type: "link", active: false, selected: false, title: "Linkedin Scraper" },
	// 	],
	// },

	// {
	// 	icon: WebIcon, title: "Web Scrapers", type: "sub", active: false, children: [
	// 		{ path: "/dashboard/website-scraper", type: "link", active: false, selected: false, title: "Website Scraper" },
	// 		{ path: "/dashboard/website-data-center", type: "link", active: false, selected: false, title: "Website Data Center" },
	// 		{ path: "/dashboard/business-directory-scraper", type: "link", active: false, selected: false, title: "Business Directory" },
	// 	],
	// },
	
	// { path: "/dashboard/whois-domain-database", icon: Domain, title: "Whois Domain Download", type: "link", active: false, selected: false },
	
	// {
	// 	icon: AddIcon, title: "Additional Scrapers", type: "sub", active: false, children: [
	// 		{ path: "/dashboard/document-data-scraper", type: "link", active: false, selected: false, title: "Document Data Scraper" },
	// 		{ path: "/dashboard/image-data-scraper", type: "link", active: false, selected: false, title: "Image Data Scraper" },
	// 	],
	// },
	// {
	// 	icon: ElementsSvg, title: "Social Media", type: "sub", active: false, selected: false, children: [

	// 		{ path: "/dashboard/coming-soon", type: "link", active: false, selected: false, title: "Facebook Scraper" },
	// 		{ path: "/dashboard/coming-soon", type: "link", active: false, selected: false, title: "Instagram Scraper" },
	// 		{ path: "/dashboard/coming-soon", type: "link", active: false, selected: false, title: "Twitter Scraper" },
	// 		{ path: "/dashboard/coming-soon", type: "link", active: false, selected: false, title: "Linkedin Scraper" },
	// 		{ path: "/dashboard/coming-soon", type: "link", active: false, selected: false, title: "YouTube Scraper" },
	// 		{ path: "/dashboard/coming-soon", type: "link", active: false, selected: false, title: "Quara Scraper" },
	// 		{ path: "/dashboard/coming-soon", type: "link", active: false, selected: false, title: "Pinterest Scraper" },
	// 		// { path: "/elements/navbar", type: "link", active: false, selected: false, title: "Navbar" },
	// 		// { path: "/elements/mega-menu", type: "link", active: false, selected: false, title: "Mega Menu" },
	// 		// { path: "/elements/nav-tabs", type: "link", active: false, selected: false, title: "Nav & Tabs" },
	// 		// { path: "/elements/scrollspy", type: "link", active: false, selected: false, title: "Scrollspy" },
	// 		// { path: "/elements/breadcrumb", type: "link", active: false, selected: false, title: "BreadCrumb" },
	// 		// { path: "/elements/pagination", type: "link", active: false, selected: false, title: "Pagination" },
	// 		// { path: "/elements/grids", type: "link", active: false, selected: false, title: "Grids" },
	// 		// { path: "/elements/columns", type: "link", active: false, selected: false, title: "Columns" },
	// 		// { path: "/elements/typography", type: "link", active: false, selected: false, title: "Typography" },
	// 	]
	// },
	// {
	// 	icon: FormsSvg, title: "Real Estate", type: "sub", active: false, selected: false, children: [
	// 		{ path: "/forms/form-inputs", type: "link", active: false, selected: false, title: "Form Inputs" },
	// 		{ path: "/forms/advanced-forms", type: "link", active: false, selected: false, title: "Advanced Forms" },
	// 		{ path: "/forms/form-input-group", type: "link", active: false, selected: false, title: "Form-Input-Group" },
	// 		{ path: "/forms/file-uploads", type: "link", active: false, selected: false, title: "File Uploads" },
	// 		{ path: "/forms/form-checkbox", type: "link", active: false, selected: false, title: "Form-Checkbox" },
	// 		{ path: "/forms/form-radio", type: "link", active: false, selected: false, title: "Form-Radio" },
	// 		{ path: "/forms/form-switch", type: "link", active: false, selected: false, title: "Form-Switch" },
	// 		{ path: "/forms/form-wizard", type: "link", active: false, selected: false, title: "Form-Wizard" },
	// 		{ path: "/forms/form-select", type: "link", active: false, selected: false, title: "Form-Select" },
	// 		{ path: "/forms/form-layouts", type: "link", active: false, selected: false, title: "Form-Layouts" },
	// 		{ path: "/forms/form-validations", type: "link", active: false, selected: false, title: "Form-Validations" },
	// 		{ path: "/forms/form-editors", type: "link", active: false, selected: false, title: "Form-Editor" },
	// 		{
	// 			type: "sub", active: false, selected: false, title: "Form-Elements", children: [

	// 				{ path: "/forms/form-elements/advanced-select", type: "link", active: false, selected: false, title: "Advanced Select" },
	// 				{ path: "/forms/form-elements/input-number", type: "link", active: false, selected: false, title: "Input  Number" },
	// 				{ path: "/forms/form-elements/passwords", type: "link", active: false, selected: false, title: "Passwords" },
	// 				{ path: "/forms/form-elements/counters-markup", type: "link", active: false, selected: false, title: "Counters & Markup" },

	// 			]
	// 		}
	// 	]
	// },
	// {
	// 	icon: AdvancedUISvg, title: "Job Scraper", type: "sub", active: false, selected: false, children: [

	// 		{ path: "/advance-ui/rangeslider", type: "link", active: false, selected: false, title: "Range Slider" },
	// 		{ path: "/advance-ui/calendar", type: "link", active: false, selected: false, title: "Calender" },
	// 		{ path: "/advance-ui/carousel", type: "link", active: false, selected: false, title: "Carousel" },
	// 		{ path: "/advance-ui/gallery", type: "link", active: false, selected: false, title: "Gallery" },
	// 		{ path: "/advance-ui/sweetalert", type: "link", active: false, selected: false, title: "Sweet Alert" },
	// 		{ path: "/advance-ui/rating", type: "link", active: false, selected: false, title: "Rating" },
	// 		{ path: `/advance-ui/draggable-cards`, type: "link", active: false, selected: false, title: "Dragabble cards" },
	// 		{ path: "/advance-ui/notifications", type: "link", active: false, selected: false, title: "Notification" },
	// 		{ path: "/advance-ui/treeview", type: "link", active: false, selected: false, title: "Tree View" },
	// 		{
	// 			type: "sub", active: false, selected: false, title: "File-Manager", children: [

	// 				{ path: "/advance-ui/file-manager/file-manager", type: "link", active: false, selected: false, title: "File Manager" },
	// 				{ path: "/advance-ui/file-manager/file-manager-list", type: "link", active: false, selected: false, title: "File Manager List" },
	// 				{ path: "/advance-ui/file-manager/file-details", type: "link", active: false, selected: false, title: "File Details" },
	// 			]
	// 		}
	// 	]
	// },
	// {
	// 	icon: BasicUISvg, title: "Travel", type: "sub", active: false, selected: false, children: [

	// 		{ path: "/basic-ui/dropdown", type: "link", active: false, selected: false, title: "Dropdown" },
	// 		{ path: "/basic-ui/modals", type: "link", active: false, selected: false, title: "Modal" },
	// 		{ path: "/basic-ui/offcanvas", type: "link", active: false, selected: false, title: "Offcanvas" },
	// 		{ path: "/basic-ui/tooltips-popovers", type: "link", active: false, selected: false, title: "Tooltips & Popovers" },
	// 		{ path: "/basic-ui/stepper", type: "link", active: false, selected: false, title: "Stepper" },
	// 		{
	// 			type: "sub", active: false, selected: false, title: "Tables", children: [

	// 				{ path: "/basic-ui/tables/basic-tables", type: "link", active: false, selected: false, title: "Basic Tables" },
	// 				{ path: "/basic-ui/tables/data-tables", type: "link", active: false, selected: false, title: "Data Tables" },
	// 				{ path: "/basic-ui/tables/edit-tables", type: "link", active: false, selected: false, title: "Edit Tables" },

	// 			]
	// 		},
	// 		{ path: "/basic-ui/custom-scrollbar", type: "link", active: false, selected: false, title: "Custom Scrollbar" },
	// 	]
	// },
	{
		menutitle: "Settings",
	},
	{ path: "/reseller/profile", icon: Profile, title: "Profile", type: "link", active: false, selected: false },
	{ path: "/", icon: Logout, title: "Log Out", type: "link", active: false, selected: false },
	// {
	// 	icon: NestedSvg, title: "Nested Menu", type: "sub", active: false, selected: false, children: [

	// 		{ title: "Nested-1", path: "#!", type: "empty", active: false, selected: false },

	// 		{
	// 			title: "Nested-2", type: "sub", active: false, selected: false, children: [

	// 				{ type: "empty", path: "#!!", active: false, selected: false, title: "Nested-2-1" },
	// 				{ type: "empty", path: "#", active: false, selected: false, title: "Nested-2-2" },
	// 				{ type: "empty", path: "#", active: false, selected: false, title: "Nested-2-3" },

	// 			]
	// 		},
	// 	]
	// },
	// {
	// 	menutitle: "MAPS & CHARTS",
	// },
	// {
	// 	icon: MapsSvg, title: "Maps", type: "sub", active: false, selected: false, children: [

	// 		{ path: "/maps/leaflet-maps", type: "link", active: false, selected: false, title: "Leaflet Maps" },
	// 		{ path: "/maps/vector-maps", type: "link", active: false, selected: false, title: "Vector Maps" },

	// 	]
	// },
	// {
	// 	icon: ChartsSvg, title: "Charts", type: "sub", active: false, selected: false, children: [

	// 		{ path: "/charts/apex-charts", type: "link", active: false, selected: false, title: "Apex Chart" },
	// 		{ path: "/charts/chart-js", type: "link", active: false, selected: false, title: "Chart JS" },
	// 		{ path: "/charts/echart-js", type: "link", active: false, selected: false, title: "E-Chart" },

	// 	]
	// },
	// {
	// 	menutitle: "PAGES",
	// },
	// {
	// 	icon: PagesSvg, title: "Pages", type: "sub", active: false, selected: false, children: [
	// 		{
	// 			title: "Profile", type: "sub", active: false, selected: false, children: [

	// 				{ path: "/home", type: "link", active: false, selected: false, title: "Home" },
	// 				{ path: "/pages/profile/profile-settings", type: "link", active: false, selected: false, title: "Profile Settings" },

	// 			]
	// 		},
	// 		{
	// 			title: "Invoice", type: "sub", active: false, selected: false, children: [

	// 				{ path: "/pages/invoice/invoice-list", type: "link", active: false, selected: false, title: "Invoice List" },
	// 				{ path: "/pages/invoice/invoice-details", type: "link", active: false, selected: false, title: "Invoice Details" },

	// 			]
	// 		},
	// 		{
	// 			title: "Blog", type: "sub", active: false, selected: false, children: [

	// 				{ path: "/pages/blog/blog", type: "link", active: false, selected: false, title: "Blog" },
	// 				{ path: "/pages/blog/blog-details", type: "link", active: false, selected: false, title: "Blog Details" },
	// 				{ path: "/pages/blog/edit-blog", type: "link", active: false, selected: false, title: "Edit Blog" },

	// 			]
	// 		},
	// 		{
	// 			title: "Mail", type: "sub", active: false, selected: false, children: [

	// 				{ path: "/pages/mail/mail", type: "link", active: false, selected: false, title: "Mail" },
	// 				{ path: "/pages/mail/chat", type: "link", active: false, selected: false, title: "Chat" },
	// 				{ path: "/pages/mail/mail-settings", type: "link", active: false, selected: false, title: "Mail-settings" },

	// 			]
	// 		},
	// 		{
	// 			title: "E-Commerce", type: "sub", active: false, selected: false, children: [

	// 				{ path: "/pages/ecommerce/products", type: "link", active: false, selected: false, title: "Products" },
	// 				{ path: "/pages/ecommerce/product-list", type: "link", active: false, selected: false, title: "Product list" },
	// 				{ path: "/pages/ecommerce/add-product", type: "link", active: false, selected: false, title: "Add Product" },
	// 				{ path: "/pages/ecommerce/edit-product", type: "link", active: false, selected: false, title: "Edit Product" },
	// 				{ path: "/pages/ecommerce/product-details", type: "link", active: false, selected: false, title: "Products Details" },
	// 				{ path: "/pages/ecommerce/cart", type: "link", active: false, selected: false, title: "Cart" },
	// 				{ path: "/pages/ecommerce/checkout", type: "link", active: false, selected: false, title: "Check out" },
	// 				{ path: "/pages/ecommerce/orders", type: "link", active: false, selected: false, title: "Orders" },
	// 				{ path: "/pages/ecommerce/order-details", type: "link", active: false, selected: false, title: "Order Details" },
	// 				{ path: "/pages/ecommerce/wishlist", type: "link", active: false, selected: false, title: "Wishlist" },

	// 			]
	// 		},
	// 		{ path: "/about-us", title: "About Us", type: "link", active: false, selected: false },
	// 		{ path: "/pages/contacts", title: "Contacts", type: "link", active: false, selected: false },
	// 		{ path: "/pages/pricing-tables", title: "Pricing Tables", type: "link", active: false, selected: false },
	// 		{ path: "/pages/timeline", title: "Timeline", type: "link", active: false, selected: false },
	// 		{ path: "/pages/team", title: "Team", type: "link", active: false, selected: false },
	// 		{ path: "/landing", title: "Landing", type: "link", active: false, selected: false },
	// 		{ path: "/pages/todo-list", title: "To-do List", type: "link", active: false, selected: false },
	// 		{ path: "/pages/tasks", title: "Tasks", type: "link", active: false, selected: false },
	// 		{ path: "/pages/reviews", title: "Reviews", type: "link", active: false, selected: false },
	// 		{ path: "/faqs", title: "Faqs", type: "link", active: false, selected: false },
	// 		{ path: "/contact-us", title: "Contact Us", type: "link", active: false, selected: false },
	// 		{ path: "/terms-conditions", title: "Terms & Conditions", type: "link", active: false, selected: false },
	// 		{ path: "/pages/empty", title: "Empty Page", type: "link", active: false, selected: false },
	// 	]
	// },
	// {
	// 	icon: IconsSvg, title: "Icons", type: "sub", active: false, selected: false, children: [
	// 		{ path: "/icons/tabler-icons", type: "link", active: false, selected: false, title: "Tabler Icons" },
	// 		{ path: "/icons/remix-icons", type: "link", active: false, selected: false, title: "Remix Icons" },

	// 	]
	// },
	// {
	// 	icon: AuthenticationSvg, title: "Authentication", type: "sub", active: false, selected: false, children: [

	// 		{
	// 			type: "sub", active: false, selected: false, title: "Sign In", children: [

	// 				{ path: "/authentication/sign-in/basic", type: "link", active: false, selected: false, title: "Basic" },
	// 				{ path: "/authentication/sign-in/cover-1", type: "link", active: false, selected: false, title: "Cover-1" },
	// 				{ path: "/authentication/sign-in/cover-2", type: "link", active: false, selected: false, title: "Cover-2" },
	// 			]
	// 		},
	// 		{
	// 			type: "sub", active: false, selected: false, title: "Sign Up", children: [

	// 				{ path: "/authentication/sign-up/basic", type: "link", active: false, selected: false, title: "Basic" },
	// 				{ path: "/authentication/sign-up/cover-1", type: "link", active: false, selected: false, title: "Cover-1" },
	// 				{ path: "/authentication/sign-up/cover-2", type: "link", active: false, selected: false, title: "Cover-2" },
	// 			]
	// 		},
	// 		{
	// 			type: "sub", active: false, selected: false, title: "Create Password", children: [

	// 				{ path: "/authentication/create-password/basic", type: "link", active: false, selected: false, title: "Basic" },
	// 				{ path: "/authentication/create-password/cover-1", type: "link", active: false, selected: false, title: "Cover-1" },
	// 				{ path: "/authentication/create-password/cover-2", type: "link", active: false, selected: false, title: "Cover-2" },
	// 			]
	// 		},
	// 		{
	// 			type: "sub", active: false, selected: false, title: "Forget Password", children: [

	// 				{ path: "/authentication/forgot-password/basic", type: "link", active: false, selected: false, title: "Basic" },
	// 				{ path: "/authentication/forgot-password/cover-1", type: "link", active: false, selected: false, title: "Cover-1" },
	// 				{ path: "/authentication/forgot-password/cover-2", type: "link", active: false, selected: false, title: "Cover-2" },
	// 			]
	// 		},
	// 		{
	// 			type: "sub", active: false, selected: false, title: "Reset Password", children: [

	// 				{ path: "/authentication/reset-password/basic", type: "link", active: false, selected: false, title: "Basic" },
	// 				{ path: "/authentication/reset-password/cover-1", type: "link", active: false, selected: false, title: "Cover-1" },
	// 				{ path: "/authentication/reset-password/cover-2", type: "link", active: false, selected: false, title: "Cover-2" },
	// 			]
	// 		},
	// 		{
	// 			type: "sub", active: false, selected: false, title: "Lock Screen", children: [

	// 				{ path: "/authentication/lock-screen/basic", type: "link", active: false, selected: false, title: "Basic" },
	// 				{ path: "/authentication/lock-screen/cover-1", type: "link", active: false, selected: false, title: "Cover-1" },
	// 				{ path: "/authentication/lock-screen/cover-2", type: "link", active: false, selected: false, title: "Cover-2" },
	// 			]
	// 		},
	// 		{
	// 			type: "sub", active: false, selected: false, title: "Two-step-verification", children: [

	// 				{ path: "/authentication/two-step-verification/basic", type: "link", active: false, selected: false, title: "Basic" },
	// 				{ path: "/authentication/two-step-verification/cover-1", type: "link", active: false, selected: false, title: "Cover-1" },
	// 				{ path: "/authentication/two-step-verification/cover-2", type: "link", active: false, selected: false, title: "Cover-2" },
	// 			]
	// 		},
	// 		{ path: "/authentication/under-maintanance", type: "link", active: false, selected: false, title: "Under Maintainance" },
	// 		{ path: "/authentication/under-construction", type: "link", active: false, selected: false, title: "Under Construction" },
	// 		{ path: "/authentication/coming-soon", type: "link", active: false, selected: false, title: "Coming Soon" },

	// 		{
	// 			type: "sub", active: false, selected: false, title: "Error Pages", children: [

	// 				{ path: "/authentication/error-pages/404-error", type: "link", active: false, selected: false, title: "404 Error" },
	// 				{ path: "/authentication/error-pages/500-error", type: "link", active: false, selected: false, title: "500 Error" },
	// 			]
	// 		},
	// 	]
	// },

];
export default MENUITEMS;
