
"use client"
import Link from "next/link";
import React from "react";

const PageHeader = (props) => {

	return (
		<div className="block justify-between page-header md:flex">
			<div>
				<h3 className="text-gray-700 hover:text-gray-900 dark:text-white dark:hover:text-white text-2xl font-medium flex gap-3 items-center">
					<img src={props.img} className="w-8"/>
					{props.currentpage}
				</h3>
			</div>
			<ol className="mt-2 md:mt-0 flex items-center whitespace-nowrap min-w-0">
				<li className="text-sm">
					<Link className="flex items-center font-semibold text-primary hover:text-primary dark:text-primary truncate" href="#!" scroll={false} >{props.activepage}
						<i className="ti ti-chevrons-right flex-shrink-0 mx-3 overflow-visible text-gray-300 dark:text-gray-300 rtl:rotate-180"></i>
					</Link>
				</li>
				<li className="text-sm text-gray-500 hover:text-primary dark:text-white/70 " aria-current="page">{props.mainpage}</li>
			</ol>
		</div>
	);
};

export default PageHeader;
