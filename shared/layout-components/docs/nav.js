import React from "react";

const Dashboardsvg = <i className="ri-home-8-line side-menu__icon"></i>;

const Started = <i className="ri-play-circle-line side-menu__icon"></i>;

const Features = <i className="ri-bard-line side-menu__icon"></i>;

const Logs = <i className="ri-refresh-line side-menu__icon"></i>;

const Setup = <i className="ri-settings-line side-menu__icon"></i>;

const Service = <i className="ri-apps-2-line side-menu__icon"></i>;

const Support = <i className="ri-customer-service-line side-menu__icon"></i>;

export const MENUITEMS = [
	{
		menutitle: "MAIN",
	},

	{ path: "#intro", icon: Dashboardsvg, title: "Introduction", type: "link", active: false, selected: false },
	{ path: "#started", icon: Started, title: "Getting Started", type: "link", active: false, selected: false, title: "Getting Started" },
	{ path: "#features", icon: Features, title: "Features", type: "link", active: false, selected: false, title: "Features" },
	{ path: "#logs", icon: Logs, title: "Change logs", type: "link", active: false, selected: false, title: "Change Logs" },
	{ path: "#services", icon: Service, title: "Services", type: "link", active: false, selected: false, title: "Services" },

	{
		icon: Setup, title: "Setup", type: "sub", active: false, children: [

			{ path: "#installation", type: "link", active: false, selected: false, title: "Installation" },
			{ path: "#prerequisites", type: "link", active: false, selected: false, title: "Prerequisites" },
			{ path: "#start-app", type: "link", active: false, selected: false, title: "Start Application" },
			{ path: "#quick-start", type: "link", active: false, selected: false, title: "Quick Start" },
			{ path: "#purchase-code", type: "link", active: false, selected: false, title: "Purchase Code" },
		],
	},

	{ path: "#support", icon: Support, title: "Thanks & Support", type: "link", active: false, selected: false }
];
export default MENUITEMS;
