"use client"
import { BasicTable, ResponsiveDataTable } from "@/shared/data/basic-ui/tables/datatable";
import PageHeader from "@/shared/layout-components/page-header/pageheader";
import Seo from "@/shared/layout-components/seo/seo";
import React, { useState } from "react";

const Datatables = () => {

	return (
		<div>
			<Seo title={"Data-Table"} />
			<PageHeader currentpage="Data Table" activepage="Basic Ui" mainpage="Data Table" />
			<div className="grid grid-cols-12 gap-6">
				<div className="col-span-12">
					<div className="box basic-data-table">
						<div className="box-header">
							<h5 className="box-title">Basic DataTable</h5>
						</div>
						<div className="box-body overflow-auto">
							<div className="table-bordered p-3 overflow-auto">
								<BasicTable />
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="grid grid-cols-12 gap-6">
				<div className="col-span-12">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">Responsive DataTable</h5>
						</div>
						<div className="box-body space-y-3 overflow-auto">
							<div className="">
								<div id="reactivity-table" className="ti-custom-table ti-striped-table ti-custom-table-hover">
									<ResponsiveDataTable />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Datatables;
