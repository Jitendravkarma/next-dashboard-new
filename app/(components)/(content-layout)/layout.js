
"use client"
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import Switcher from "@/shared/layout-components/switcher/switcher";
import Sidebar from "@/shared/layout-components/sidebar/sidebar";
import ResellerSidebar from "@/shared/layout-components/reseller-sidebar/sidebar";
import Header from "@/shared/layout-components/header/header";
import Footer from "@/shared/layout-components/footer/footer";
import Backtotop from "@/shared/layout-components/back-to-top/backtotop";
import { ThemeChanger } from "@/shared/redux/action"
import Cookies from "js-cookie";
import { redirect } from "next/navigation";

const Contentlayout = ({ children }) => {

	const [ reseller, setReseller ] = useState(false)
	const token = Cookies.get("authToken");
	if(!token){
		redirect("/signin")
	}

	return (
		<>
			{
				reseller ?
				<div className="page">
					<Header />
					<ResellerSidebar/>
					<div className="content">
						<div className="main-content">
							{children}
						</div>
					</div>
					<Footer />
				</div>
				:
				<div className="page">
					<Header />
					<Sidebar />
					<div className="content">
						<div className="main-content">
							{children}
						</div>
					</div>
					<Footer />
				</div>
			}
			<Backtotop />
		</>
	);
};

const mapStateToProps = (state) => ({
	local_varaiable: state
});

export default connect(mapStateToProps, { ThemeChanger })(Contentlayout);

