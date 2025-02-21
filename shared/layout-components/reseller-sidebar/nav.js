import React from "react";

//Svg icons of Dashboard

const Dashboardsvg = <i className="ri-home-8-line side-menu__icon"></i>;

const Users = <i className="ri-group-line side-menu__icon"></i>;

const Renewal = <i className="ri-loop-left-line side-menu__icon"></i>;

const Setting = <i className="ri-settings-4-line side-menu__icon"></i>;

const UserQuery = <i className="ri-customer-service-line side-menu__icon"></i>;

const Profile = <i className="ri-user-line side-menu__icon"></i>;

const Logout = <i className="ri-logout-box-line side-menu__icon"></i>;

export const MENUITEMS = [
	{
		menutitle: "MAIN",
	},

	{ path: "/reseller/home", icon: Dashboardsvg, title: "Dashboard", type: "link", active: false, selected: false },

	{ path: "/reseller/user-analytics", icon: Users, title: "User Analytics", type: "link", active: false, selected: false },
	
	{ path: "/reseller/users-inquiry", icon: UserQuery, title: "Users Inquiry", type: "link", active: false, selected: false },
	
	{ path: "/reseller/plan-renewal", icon: Renewal, title: "Plan Renewal", type: "link", active: false, selected: false },

	{ path: "/reseller/profile", icon: Profile, title: "Profile", type: "link", active: false, selected: false },

	{ path: "/reseller/settings", icon: Setting, title: "Settings", type: "link", active: false, selected: false },

	{ path: "", icon: Logout, title: "Log Out", type: "link", active: false, selected: false },

];
export default MENUITEMS;
