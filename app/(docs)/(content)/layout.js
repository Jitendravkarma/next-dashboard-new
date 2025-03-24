
"use client"
import React from "react";
import { connect } from "react-redux";
import Sidebar from "@/shared/layout-components/docs/Sidebar";
import Header from "@/shared/layout-components/docs/header";
import Footer from "@/shared/layout-components/footer/footer";
import Backtotop from "@/shared/layout-components/back-to-top/backtotop";
import { ThemeChanger } from "@/shared/redux/action"

const Contentlayout = ({ children }) => {

	return (
		<>
			<div className="page">
				<Header />
				<Sidebar />
				<div className="content">
					<div className="main-content bg-white">
						{children}
					</div>
				</div>
				<Footer />
			</div>
			<Backtotop />
		</>
	);
};

const mapStateToProps = (state) => ({
	local_varaiable: state
});

export default connect(mapStateToProps, { ThemeChanger })(Contentlayout);

