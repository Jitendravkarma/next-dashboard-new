const ResellerDash = <i className="ri-home-4-line side-menu__icon"></i>;

const Analytics = <i className="ri-user-line side-menu__icon"></i>;

const Renewal = <i className="ri-refresh-line side-menu__icon"></i>;

const Licence = <i className="ri-magic-line side-menu__icon"></i>;

const Profile = <i className="ri-user-line side-menu__icon"></i>;

const SMTP = <i className="ri-mail-send-line side-menu__icon"></i>;

const Logout = <i className="ri-logout-box-line"></i>;

export const MENUITEMS = [
	{
		menutitle: "reseller",
	},

	{ path: "/reseller/dashboard", icon: ResellerDash, title: "Dashboard", type: "link", active: false, selected: false },

	{ path: "/reseller/user-analytics", icon: Analytics, title: "User Analytics", type: "link", active: false, selected: false },

	{ path: "/reseller/generate-licence", icon: Licence, title: "Generate Licence", type: "link", active: false, selected: false },
	
	{ path: "/reseller/plan-renewal", icon: Renewal, title: "Plan Renewal", type: "link", active: false, selected: false },
	
	{
		menutitle: "Settings",
	},

	{ path: "/reseller/profile", icon: Profile, title: "Profile", type: "link", active: false, selected: false },
	
	{ path: "/reseller/smtp", icon: SMTP, title: "SMTP", type: "link", active: false, selected: false },
	
	{ path: "/", icon: Logout, title: "Log Out", type: "link", active: false, selected: false },
];
export default MENUITEMS;
