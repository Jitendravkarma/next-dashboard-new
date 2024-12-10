
"use client"
import React, { Fragment, useEffect } from "react";
import { connect } from "react-redux";
import Switcher from "@/shared/layout-components/switcher/switcher";
import Sidebar from "@/shared/layout-components/sidebar/sidebar";
import Header from "@/shared/layout-components/header/header";
import Footer from "@/shared/layout-components/footer/footer";
import Backtotop from "@/shared/layout-components/back-to-top/backtotop";
import PrelineScript from "@/app/PrelineScript";
import { ThemeChanger } from "@/shared/redux/action"

const Contentlayout = ({ children }) => {

	const Add = () => {
		document.querySelector("body")?.classList.remove("error-1");
		document.querySelector("body")?.classList.remove("authentication-page");
		document.querySelector("body")?.classList.remove("landing-body");
	};

	useEffect(() => {
		Add();
	});

	const Bodyclick = () => {
		if (localStorage.getItem("Syntoverticalstyles") == "icontext") {
		}
	};

	return (
		<Fragment>
			<Switcher />
			<div className="page">
				<Header />
				<Sidebar />
				<div className="content">
					<div className="main-content" onClick={Bodyclick}>
						{children}
					</div>
				</div>
				<Footer />
			</div>
			<Backtotop />
			<PrelineScript />
		</Fragment>
	);
};

const mapStateToProps = (state) => ({
	local_varaiable: state
});

export default connect(mapStateToProps, { ThemeChanger })(Contentlayout);

