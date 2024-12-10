"use client"
import { indicator, legend } from "@/shared/data/components/indicatordata";
import PageHeader from "@/shared/layout-components/page-header/pageheader";
import Seo from "@/shared/layout-components/seo/seo";
import React from "react";

const Indicators = () => {
	return (
		<div>
			<Seo title={"Indicators"} />
			<PageHeader currentpage="Indicators" activepage="Components" mainpage="Indicators" />

			<div className="grid grid-cols-12 gap-x-6">
				<div className="col-span-12 lg:col-span-4">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">Basic Legend Indicator</h5>
						</div>
						<div className="box-body">
							<div className="inline-flex items-center">
								<span className="w-2 h-2 inline-block bg-gray-500 dark:bg-white/80 rounded-full ltr:mr-2 rtl:ml-2"></span>
								<span className="text-gray-600 dark:text-white/70">Legend indicator</span>
							</div>
						</div>
					</div>
				</div>
				<div className="col-span-12 lg:col-span-4">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">Color variations Legend Indicator</h5>
						</div>
						<div className="box-body">
							<div className="grid gap-y-2">
								{indicator.map((idx) => (
									<div className="inline-flex items-center" key={Math.random()}>
										<span className={`w-2 h-2 inline-block bg-${idx.color} rounded-full ltr:mr-2 rtl:ml-2`}></span>
										<span className="text-gray-600 dark:text-white/70">{idx.class}</span>
									</div>
								))}

							</div>
						</div>
					</div>
				</div>
				<div className="col-span-12 lg:col-span-4">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">Template Color variations Legend Indicator</h5>
						</div>
						<div className="box-body">
							<div className="grid gap-y-2">
								{legend.map((idx) => (
									<div className="inline-flex items-center" key={Math.random()}>

										<span className={`w-2 h-2 inline-block bg-${idx.color} rounded-full ltr:mr-2 rtl:ml-2`}></span>
										<span className="text-gray-600 dark:text-white/70">{idx.class}</span>
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>

		</div>
	);
};

export default Indicators;
