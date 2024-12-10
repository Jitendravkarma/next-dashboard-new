"use client"
import { BasicTreeviewexample1, BasicTreeviewexample2, BasicTreeviewexample3, BasicTreeviewexample4, FileSystemNavigator1, FileSystemNavigator2 } from "@/shared/data/advance-ui/treeviewdata";
import PageHeader from "@/shared/layout-components/page-header/pageheader";
import Seo from "@/shared/layout-components/seo/seo";
import React from "react";

const Treeview = () => {
	return (
		<div>
			<Seo title={"Treeview"} />
			<PageHeader currentpage="Treeview" activepage="Advanaced Ui" mainpage="Treeview" />
			<div className="grid grid-cols-12 gap-6">
				<div className="col-span-12">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">Basic Treeview-1</h5>
						</div>
						<div className="box-body">
							<div className="text-base font-semibold text-gray-600 dark:text-white/70">

								<FileSystemNavigator1 />
								<FileSystemNavigator2 />

							</div>

						</div>
					</div>
				</div>

				<div className="col-span-12">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">Basic Treeview-2</h5>
						</div>
						<div className="box-body">
							<div className="text-base font-semibold text-gray-600 dark:text-white/70">

								<BasicTreeviewexample1 />
								<BasicTreeviewexample2 />
								<BasicTreeviewexample3 />
								<BasicTreeviewexample4 />
							</div>

						</div>
					</div>
				</div>

			</div>

		</div>
	);
};

export default Treeview;
