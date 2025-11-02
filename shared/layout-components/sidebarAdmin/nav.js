const ResellerDash = <i className="ri-home-4-line side-menu__icon"></i>;

const Analytics = <i className="ri-user-line side-menu__icon"></i>;

const Renewal = <i className="ri-refresh-line side-menu__icon"></i>;

const Credit = <i className="ri-money-dollar-circle-line side-menu__icon"></i>;

const Licence = <i className="ri-magic-line side-menu__icon"></i>;

const Profile = <i className="ri-user-line side-menu__icon"></i>;

const SMTP = <i className="ri-mail-send-line side-menu__icon"></i>;

const Logout = <i className="ri-logout-box-line"></i>;

export const MENUITEMS = [
	{
		menutitle: "Admin Panel",
	},

	{ path: "/admin/dashboard", icon: ResellerDash, title: "Admin Dashboard", type: "link", active: false, selected: false },

	{ path: "/admin/resllerApprove", icon: Analytics, title: "Reseller Approve", type: "link", active: false, selected: false },

	{ path: "/admin/resellerList", icon: Analytics, title: "Resller List", type: "link", active: false, selected: false },

	{ path: "/admin/resellerKey", icon: Licence, title: "Reseller License Key", type: "link", active: false, selected: false },
	
	{ path: "/admin/resellerValidity", icon: Renewal, title: "Reseller Validity", type: "link", active: false, selected: false },

	{ path: "/admin/resellerCredits", icon: Credit, title: "Reseller Credits", type: "link", active: false, selected: false },
	
	// {
	// 	menutitle: "Settings",
	// },

	// { path: "/reseller/profile", icon: Profile, title: "Profile", type: "link", active: false, selected: false },
	
	// { path: "/reseller/smtp", icon: SMTP, title: "SMTP", type: "link", active: false, selected: false },
	
	// { path: "/", icon: Logout, title: "Log Out", type: "link", active: false, selected: false },
];
export default MENUITEMS;
