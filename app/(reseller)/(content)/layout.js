
"use client"
import React from "react";
import { connect } from "react-redux";
import Sidebar from "@/shared/layout-components/sidebar/sidebar";
import Header from "@/shared/layout-components/header/header";
import Footer from "@/shared/layout-components/footer/footer";
import Backtotop from "@/shared/layout-components/back-to-top/backtotop";
import { ThemeChanger } from "@/shared/redux/action"
import { useUserContext } from "@/shared/userContext/userContext";
import Cookies from "js-cookie";
import { redirect } from "next/navigation";

const Contentlayout = ({ children }) => {
	const { user } = useUserContext()
	const token = Cookies.get("authToken");
	if(!token){
		redirect("/signin")
	}
	else{
		if(token && !user.reseller){
			redirect('/downloads')
		}
		else
		return (
			<>
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
				<Backtotop />
			</>
		);
	}
};

const mapStateToProps = (state) => ({
	local_varaiable: state
});

export default connect(mapStateToProps, { ThemeChanger })(Contentlayout);

