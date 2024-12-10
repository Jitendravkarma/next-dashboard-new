"use client"
import React, { Fragment, useEffect } from "react";
import { connect } from "react-redux";
import Switcher from "@/shared/layout-components/switcher/switcher";
import Sidebar from "@/shared/layout-components/sidebar/sidebar";
import Header from "@/shared/layout-components/header/header";
import Footer from "@/shared/layout-components/footer/footer";
import Backtotop from "@/shared/layout-components/back-to-top/backtotop";
import PrelineScript from "@/app/PrelineScript";
import {ThemeChanger} from "@/shared/redux/action"

const CustomLayout = ({ children,ThemeChanger }) => {

	return (
		<Fragment>
					<Switcher />
					<div className="page">
						<Sidebar />
						<Header />
						<div className="content relative">
								{children}
						</div>
						<Footer />
					</div>
					<Backtotop />
				<PrelineScript/>
		</Fragment>
	);
};

const mapStateToProps = (state) => ({
	local_varaiable: state
  });
  
  export default connect(mapStateToProps, { ThemeChanger})(CustomLayout);
  
