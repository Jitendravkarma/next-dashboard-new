"use client"
import React, { useState } from "react";
import PageHeader from "@/shared/layout-components/page-header/pageheader";
import Seo from "@/shared/layout-components/seo/seo";

const Settings = () => {
	return (
		<div>
			<Seo title='Settings' />
			<PageHeader currentpage="Settings" img="/assets/img/users/settings.png" activepage="Reseller" mainpage="Settings" />
		</div>
	);
};


export default Settings;
