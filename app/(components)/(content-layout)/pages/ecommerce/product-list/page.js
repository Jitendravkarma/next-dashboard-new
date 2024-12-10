"use client"
import { ProductList } from "@/shared/data/pages/ecommerce/productlistdata";
import PageHeader from "@/shared/layout-components/page-header/pageheader";
import Seo from "@/shared/layout-components/seo/seo";
import Link from "next/link";
import React, { useState } from "react";

const Productlists = () => {

	const [allData, setAllData] = useState(ProductList);
	const [selectAllChecked, setSelectAllChecked] = useState(false);
	const [selectedItems, setSelectedItems] = useState([]);

	// Function to handle the "Select All" checkbox click event
	const handleSelectAllClick = () => {
		setSelectAllChecked(!selectAllChecked);

		// Update the state of individual checkboxes in the tbody
		if (selectAllChecked) {
			setSelectedItems([]);
		} else {
			const allIds = allData.map((item) => item.id);
			setSelectedItems(allIds);
		}
	};

	// Function to handle individual checkbox clicks
	const handleCheckboxClick = (id) => {
		if (selectedItems.includes(id)) {
			setSelectedItems(selectedItems.filter((item) => item !== id));
		} else {
			setSelectedItems([...selectedItems, id]);
		}

		// Check if all individual checkboxes are selected and update the "Select All" checkbox accordingly
		const allSelected = selectedItems.length === allData.length;
		setSelectAllChecked(allSelected);
	};

	// Function to handle removal of a product
	const handleRemove = (id) => {
		const newList = allData.filter((item) => item.id !== id);
		setAllData(newList);
	};

	return (
		<div>
			<Seo title={"Product List"} />
			<PageHeader currentpage="Product List" activepage="Pages" mainpage="Product List" />
			<div className="box">
				<div className="box-header lg:flex lg:justify-between">
					<h5 className="box-title my-auto">Products List</h5>
					<Link href="#!" className="ti-btn ti-btn-primary m-0 py-2"><i className="ri ri-add-line"></i>Add Product</Link>
				</div>
				<div className="box-body">
					<div className="table-bordered whitespace-nowrap rounded-sm overflow-auto">
						<table className="ti-custom-table ti-custom-table-head edit-table">
							<thead className="bg-gray-100 dark:bg-black/20">
								<tr className="">
									<th scope="col" className="dark:text-white/70">
										<div className="flex leading-[0] justify-center">
											<input type="checkbox" className="border-gray-500 ti-form-checkbox mt-0.5" onChange={handleSelectAllClick} checked={selectAllChecked}
												id="hs-default-checkbox" />
											<label htmlFor="hs-default-checkbox" className="text-sm text-gray-500 dark:text-white/70"></label>
										</div>
									</th>
									<th scope="col" className="dark:text-white/70">Product Id</th>
									<th scope="col" className="dark:text-white/70">Product</th>
									<th scope="col" className="dark:text-white/70">Category</th>
									<th scope="col" className="dark:text-white/70">Price</th>
									<th scope="col" className="dark:text-white/70">Stock</th>
									<th scope="col" className="dark:text-white/70">Status</th>
									<th scope="col" className="dark:text-white/70">Date</th>
									<th scope="col" className="!text-end dark:text-white/70">Action</th>
								</tr>
							</thead>
							<tbody>
								{allData.map((idx) => (
									<tr className="product-list" key={Math.random()}>
										<td className="">
											<div className="flex items-center h-5 product-checkbox justify-center">
												<input type="checkbox" className="border-gray-500 ti-form-checkbox" value=""
													aria-label="..."
													onChange={() => handleCheckboxClick(idx.id)}
													checked={selectedItems.includes(idx.id)} />
												<label className="sr-only">Checkbox</label>
											</div>
										</td>
										<td className="font-semibold">{idx.PdctID}</td>
										<td>
											<div className="flex space-x-3 rtl:space-x-reverse">
												<img className="avatar avatar-sm rounded-sm bg-gray-100 dark:bg-black/20 p-1"
													src={idx.pdctsrc} alt="Image Description" />
												<span
													className="block text-sm font-semibold text-gray-800 dark:text-white my-auto truncate lg:max-w-[100px]">
													{idx.PdctName}</span>
											</div>
										</td>
										<td>{idx.category}</td>
										<td>{idx.price}</td>
										<td>{idx.stock}</td>
										<td>{idx.status}</td>
										<td>{idx.date}</td>
										<td className="text-end font-medium">
											<Link aria-label="anchor" href="/pages/ecommerce/product-details" className="w-8 h-8 ti-btn rounded-full p-0 transition-none focus:outline-none ti-btn-soft-warning">
												<i className="ti ti-eye"></i>
											</Link>
											<Link aria-label="anchor" href="/pages/ecommerce/edit-product" className="w-8 h-8 ti-btn rounded-full p-0 transition-none focus:outline-none ti-btn-soft-secondary">
												<i className="ti ti-pencil"></i>
											</Link>
											<Link aria-label="anchor" href="#!" scroll={false} className="product-btn w-8 h-8 ti-btn rounded-full p-0 transition-none focus:outline-none ti-btn-soft-danger" onClick={() => handleRemove(idx.id)}>
												<i className="ti ti-trash"></i>
											</Link>
										</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
					<nav className="flex justify-end items-center space-x-2 rtl:space-x-reverse mt-5">
						<Link className="w-10 h-10 bg-transparent text-gray-500 hover:bg-primary hover:text-white p-2 inline-flex justify-center text-sm font-medium items-center gap-2 rounded-full"
							href="#!" scroll={false} >
							<span aria-hidden="true">«</span>
							<span className="sr-only">Previous</span>
						</Link>
						<Link className="w-10 h-10 bg-primary text-white p-2 inline-flex items-center justify-center text-sm font-medium rounded-full"
							href="#!" scroll={false} aria-current="page">1</Link>
						<Link className="w-10 h-10 bg-transparent text-gray-500 hover:bg-primary hover:text-white p-2 inline-flex justify-center items-center text-sm font-medium rounded-full"
							href="#!" scroll={false} >2</Link>
						<Link className="w-10 h-10 bg-transparent text-gray-500 hover:bg-primary hover:text-white p-2 inline-flex justify-center items-center text-sm font-medium rounded-full"
							href="#!" scroll={false} >3</Link>
						<Link className="w-10 h-10 bg-transparent text-gray-500 hover:bg-primary hover:text-white p-2 inline-flex justify-center text-sm font-medium items-center gap-2 rounded-full"
							href="#!" scroll={false} >
							<span className="sr-only">Next</span>
							<span aria-hidden="true">»</span>
						</Link>
					</nav>
				</div>
			</div>
		</div>
	);
};

export default Productlists;

