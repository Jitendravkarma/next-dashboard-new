"use client"
import { MasterData } from "@/shared/data/pages/ecommerce/productsdata";
import PageHeader from "@/shared/layout-components/page-header/pageheader";
import Seo from "@/shared/layout-components/seo/seo";
import { addToCart, addToWishlist, setSelectedItem } from "@/shared/redux/action";
import Link from "next/link";
import React, { useState } from "react";
import { connect, useDispatch, useSelector } from "react-redux";

const Products = () => {

	const Filterdata = [
		{ id: 1, class: "Smart phone" },
		{ id: 2, class: "50% off" },
		{ id: 3, class: "Diam" },
		{ id: 4, class: "₹10,000 - ₹20,000" },
		{ id: 5, class: "128GB" },
		{ id: 6, class: "6.5" },
		{ id: 7, class: "Black" },
		{ id: 8, class: "4000 mAh" },
		{ id: 9, class: "Dual Sim" },
	];

	const dispatch = useDispatch();
	const cart = useSelector((state) => state.cart);
	const products = useSelector((state) => state.products);


	const handleItemClick = (item) => {
		dispatch(setSelectedItem(item));
	};

	const handleAddToWishlist = (item) => {
		dispatch(addToWishlist(item));
	};

	const allIds = [...cart.map((item) => item.id), ...products.map((item) => item.id)];
	const nextId = allIds.length ? Math.max(...allIds) + 1 : 1;

	const handleAddToCart = (item) => {
		dispatch(addToCart({ ...item, id: nextId }));
	};


	const [searchTerm, setSearchTerm] = useState('');
	const [allData, setallData] = useState(products);

	return (
		<div>
			<Seo title={"Products"} />
			<PageHeader currentpage="Products" activepage="Pages" mainpage="Products" />
			<div className="grid grid-cols-12 gap-x-5">
				<div className="col-span-12 xl:col-span-3">
					<div className="box">
						<div className="box-body">
							<div className="relative">
								<label htmlFor="hs-table-search" className="sr-only">Search</label>
								<div className="absolute inset-y-0 ltr:right-0 rtl:left-0 flex items-center ltr:pr-4 rtl:pl-4">
									<svg className="h-3.5 w-3.5 text-gray-400" xmlns="http://www.w3.org/2000/svg" width="16" height="16"
										fill="currentColor" viewBox="0 0 16 16">
										<path
											d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z">
										</path>
									</svg>
								</div><input type="text" name="hs-table-search" id="hs-table-search" className="p-3 ltr:pr-10 rtl:pl-10 ti-form-input"
									placeholder="Search for items" />
							</div>
						</div>
					</div>
					<div className="box">
						<div className="box-header">
							<div className="flex justify-between">
								<h5 className="box-title my-auto">Filters</h5>
								<button type="button" className="ti-btn py-1 px-3 ti-btn-primary m-0">Clear all</button>
							</div>
						</div>
						<div className="box-body">
							{Filterdata.map((idx) => (
								<span className="badge bg-gray-100 dark:bg-black/20 dark:text-white text-gray-800 me-1" key={Math.random()}>
									{idx.class}
									<button type="button" className="flex-shrink-0 h-4 w-4 inline-flex items-center justify-center rounded-full text-gray-500 dark:text-white/70 hover:bg-gray-200 hover:text-gray-500 dark:hover:bg-black/20 dark:hover:text-white focus:outline-none focus:bg-gray-200 focus:text-gray-500">
										<span className="sr-only">Remove badge</span>
										<i className="ti ti-x"></i>
									</button>
								</span>
							))}
						</div>
					</div>
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">Colors</h5>
						</div>
						<div className="box-body">
							<button aria-label="button" type="button" className="ti-btn !p-3 !mb-0 ti-btn-secondary"></button>
							<button aria-label="button" type="button" className="ti-btn !p-3 !mb-0 ti-btn-info"></button>
							<button aria-label="button" type="button" className="ti-btn !p-3 !mb-0 bg-red-500 text-white hover:bg-red-600 focus:ring-red-500 dark:focus:ring-offset-white/10"></button>
							<button aria-label="button" type="button" className="ti-btn !p-3 !mb-0 bg-yellow-500 text-white hover:bg-yellow-600 focus:ring-yellow-500 dark:focus:ring-offset-white/10"></button>
							<button aria-label="button" type="button" className="ti-btn !p-3 !mb-0 bg-green-500 text-white hover:bg-green-600 focus:ring-green-500 dark:focus:ring-offset-white/10"></button>
							<button aria-label="button" type="button" className="ti-btn !p-3 !mb-0 ti-btn-primary"></button>
							<button aria-label="button" type="button" className="ti-btn !p-3 !mb-0 bg-indigo-500 text-white hover:bg-indigo-600 focus:ring-indigo-500 dark:focus:ring-offset-white/10"></button>
							<button aria-label="button" type="button" className="ti-btn !p-3 !mb-0 bg-purple-500 text-white hover:bg-purple-600 focus:ring-purple-500 dark:focus:ring-offset-white/10"></button>
							<button aria-label="button" type="button" className="ti-btn !p-3 !mb-0 bg-pink-500 text-white hover:bg-pink-600 focus:ring-pink-500 dark:focus:ring-offset-white/10"></button>
						</div>
					</div>
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">Categories</h5>
						</div>
						<div className="box-body" id="categories">
							<div className="space-y-2">
								<div className="flex">
									<input type="checkbox" className="ti-form-checkbox mt-0.5" id="category-1" defaultChecked />
									<label htmlFor="category-1" className="text-sm text-gray-500 ltr:ml-3 rtl:mr-3 dark:text-white/70">Electronics</label>
									<span className="text-sm text-gray-500 ltr:ml-auto rtl:mr-auto dark:text-white/70">(1,937)</span>
								</div>
								<div className="flex">
									<input type="checkbox" className="ti-form-checkbox mt-0.5" id="category-2" />
									<label htmlFor="category-2" className="text-sm text-gray-500 ltr:ml-3 rtl:mr-3 dark:text-white/70">Mobiles</label>
									<span className="text-sm text-gray-500 ltr:ml-auto rtl:mr-auto dark:text-white/70">(1,251)</span>
								</div>
								<div className="flex">
									<input type="checkbox" className="ti-form-checkbox mt-0.5" id="category-3" />
									<label htmlFor="category-3" className="text-sm text-gray-500 ltr:ml-3 rtl:mr-3 dark:text-white/70">Dress</label>
									<span className="text-sm text-gray-500 ltr:ml-auto rtl:mr-auto dark:text-white/70">(1,9037)</span>
								</div>
								<div className="flex">
									<input type="checkbox" className="ti-form-checkbox mt-0.5" id="category-4" />
									<label htmlFor="category-4" className="text-sm text-gray-500 ltr:ml-3 rtl:mr-3 dark:text-white/70">Smart Phones</label>
									<span className="text-sm text-gray-500 ltr:ml-auto rtl:mr-auto dark:text-white/70">(2,937)</span>
								</div>
								<div className="flex">
									<input type="checkbox" className="ti-form-checkbox mt-0.5" id="category-5" />
									<label htmlFor="category-5" className="text-sm text-gray-500 ltr:ml-3 rtl:mr-3 dark:text-white/70">Bags &amp; Purses</label>
									<span className="text-sm text-gray-500 ltr:ml-auto rtl:mr-auto dark:text-white/70">(1,252)</span>
								</div>
								<div className="flex">
									<input type="checkbox" className="ti-form-checkbox mt-0.5" id="category-6" />
									<label htmlFor="category-6" className="text-sm text-gray-500 ltr:ml-3 rtl:mr-3 dark:text-white/70">Coat &amp; Jacket</label>
									<span className="text-sm text-gray-500 ltr:ml-auto rtl:mr-auto dark:text-white/70">(1,251)</span>
								</div>
								<div className="flex">
									<input type="checkbox" className="ti-form-checkbox mt-0.5" id="category-7" />
									<label htmlFor="category-7" className="text-sm text-gray-500 ltr:ml-3 rtl:mr-3 dark:text-white/70">Beauty</label>
									<span className="text-sm text-gray-500 ltr:ml-auto rtl:mr-auto dark:text-white/70">(1,563)</span>
								</div>
								<div className="flex">
									<input type="checkbox" className="ti-form-checkbox mt-0.5" id="category-8" />
									<label htmlFor="category-8" className="text-sm text-gray-500 ltr:ml-3 rtl:mr-3 dark:text-white/70">Jeans</label>
									<span className="text-sm text-gray-500 ltr:ml-auto rtl:mr-auto dark:text-white/70">(1,284)</span>
								</div>
								<div id="category-collapse" className="hs-collapse hidden w-full transition-[height] duration-100" aria-labelledby="hs-category-collapse">
									<div className="mb-5">
										<div className="space-y-2">
											<div className="flex">
												<input type="checkbox" className="ti-form-checkbox mt-0.5" id="category-9" />
												<label htmlFor="category-9" className="text-sm text-gray-500 ltr:ml-3 rtl:mr-3 dark:text-white/70">Jewellery</label>
												<span className="text-sm text-gray-500 ltr:ml-auto rtl:mr-auto dark:text-white/70">(937)</span>
											</div>
											<div className="flex">
												<input type="checkbox" className="ti-form-checkbox mt-0.5" id="category-10" />
												<label htmlFor="category-10" className="text-sm text-gray-500 ltr:ml-3 rtl:mr-3 dark:text-white/70">Sports</label>
												<span className="text-sm text-gray-500 ltr:ml-auto rtl:mr-auto dark:text-white/70">(22,255)</span>
											</div>
											<div className="flex">
												<input type="checkbox" className="ti-form-checkbox mt-0.5" id="category-11" />
												<label htmlFor="category-11" className="text-sm text-gray-500 ltr:ml-3 rtl:mr-3 dark:text-white/70">Technology</label>
												<span className="text-sm text-gray-500 ltr:ml-auto rtl:mr-auto dark:text-white/70">(22,251)</span>
											</div>
											<div className="flex">
												<input type="checkbox" className="ti-form-checkbox mt-0.5" id="category-12" />
												<label htmlFor="category-12" className="text-sm text-gray-500 ltr:ml-3 rtl:mr-3 dark:text-white/70">Watches</label>
												<span className="text-sm text-gray-500 ltr:ml-auto rtl:mr-auto dark:text-white/70">(22,564)</span>
											</div>
											<div className="flex">
												<input type="checkbox" className="ti-form-checkbox mt-0.5" id="category-13" />
												<label htmlFor="category-13" className="text-sm text-gray-500 ltr:ml-3 rtl:mr-3 dark:text-white/70">Accessories</label>
												<span className="text-sm text-gray-500 ltr:ml-auto rtl:mr-auto dark:text-white/70">(22,255)</span>
											</div>
										</div>
									</div>
								</div>
								<button type="button" className="hs-collapse-toggle w-full py-2 px-4 inline-flex justify-center items-center gap-2 rounded-sm border border-transparent font-semibold bg-primary text-white hover:bg-primary focus:outline-none focus:ring-0 focus:ring-primary focus:ring-offset-0 transition-all text-sm dark:focus:ring-offset-white/10"
									id="hs-category-collapse" data-hs-collapse="#category-collapse">
									Show more
								</button>
							</div>
						</div>
					</div>
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">Gender</h5>
						</div>
						<div className="box-body" id="gender">
							<div className="space-y-2">
								<div className="flex">
									<input type="checkbox" className="ti-form-checkbox mt-0.5" id="gender-1" defaultChecked />
									<label htmlFor="gender-1" className="text-sm text-gray-500 ltr:ml-3 rtl:mr-3 dark:text-white/70">Female</label>
								</div>
								<div className="flex">
									<input type="checkbox" className="ti-form-checkbox mt-0.5" id="gender-2" />
									<label htmlFor="gender-2" className="text-sm text-gray-500 ltr:ml-3 rtl:mr-3 dark:text-white/70">Male</label>
								</div>
								<div className="flex">
									<input type="checkbox" className="ti-form-checkbox mt-0.5" id="gender-3" />
									<label htmlFor="gender-3" className="text-sm text-gray-500 ltr:ml-3 rtl:mr-3 dark:text-white/70">Kids</label>
								</div>
								<div className="flex">
									<input type="checkbox" className="ti-form-checkbox mt-0.5" id="gender-4" />
									<label htmlFor="gender-4" className="text-sm text-gray-500 ltr:ml-3 rtl:mr-3 dark:text-white/70">Others</label>
								</div>
							</div>
						</div>
					</div>
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">Brands</h5>
						</div>
						<div className="box-body" id="brands">
							<div className="space-y-2">
								<div className="flex">
									<input type="checkbox" className="ti-form-checkbox mt-0.5" id="brand-1" defaultChecked />
									<label htmlFor="brand-1" className="text-sm text-gray-500 ltr:ml-3 rtl:mr-3 dark:text-white/70">Et EosInvidunt</label>
								</div>
								<div className="flex">
									<input type="checkbox" className="ti-form-checkbox mt-0.5" id="brand-2" />
									<label htmlFor="brand-2" className="text-sm text-gray-500 ltr:ml-3 rtl:mr-3 dark:text-white/70">Diam</label>
								</div>
								<div className="flex">
									<input type="checkbox" className="ti-form-checkbox mt-0.5" id="brand-3" />
									<label htmlFor="brand-3" className="text-sm text-gray-500 ltr:ml-3 rtl:mr-3 dark:text-white/70">Sit Dolor</label>
								</div>
								<div className="flex">
									<input type="checkbox" className="ti-form-checkbox mt-0.5" id="brand-4" />
									<label htmlFor="brand-4" className="text-sm text-gray-500 ltr:ml-3 rtl:mr-3 dark:text-white/70">Dolore Eos</label>
								</div>
								<div className="flex">
									<input type="checkbox" className="ti-form-checkbox mt-0.5" id="brand-5" />
									<label htmlFor="brand-5" className="text-sm text-gray-500 ltr:ml-3 rtl:mr-3 dark:text-white/70">Diam</label>
								</div>
								<div className="flex">
									<input type="checkbox" className="ti-form-checkbox mt-0.5" id="brand-6" />
									<label htmlFor="brand-6" className="text-sm text-gray-500 ltr:ml-3 rtl:mr-3 dark:text-white/70">Eos Labore</label>
								</div>
								<div className="flex">
									<input type="checkbox" className="ti-form-checkbox mt-0.5" id="brand-7" />
									<label htmlFor="brand-7" className="text-sm text-gray-500 ltr:ml-3 rtl:mr-3 dark:text-white/70">Duo Rebum</label>
								</div>
								<div className="flex">
									<input type="checkbox" className="ti-form-checkbox mt-0.5" id="brand-8" />
									<label htmlFor="brand-8" className="text-sm text-gray-500 ltr:ml-3 rtl:mr-3 dark:text-white/70">Dolor</label>
								</div>
								<div id="brand-collapse" className="hs-collapse hidden w-full transition-[height] duration-100"
									aria-labelledby="hs-brand-collapse">
									<div className="mb-5">
										<div className="space-y-2">
											<div className="flex">
												<input type="checkbox" className="ti-form-checkbox mt-0.5" id="brand-9" />
												<label htmlFor="brand-9" className="text-sm text-gray-500 ltr:ml-3 rtl:mr-3 dark:text-white/70">Diam</label>
											</div>
											<div className="flex">
												<input type="checkbox" className="ti-form-checkbox mt-0.5" id="brand-10" />
												<label htmlFor="brand-10" className="text-sm text-gray-500 ltr:ml-3 rtl:mr-3 dark:text-white/70">Dolor</label>
											</div>
											<div className="flex">
												<input type="checkbox" className="ti-form-checkbox mt-0.5" id="brand-11" />
												<label htmlFor="brand-11" className="text-sm text-gray-500 ltr:ml-3 rtl:mr-3 dark:text-white/70">Duo
													Rebum</label>
											</div>
											<div className="flex">
												<input type="checkbox" className="ti-form-checkbox mt-0.5" id="brand-12" />
												<label htmlFor="brand-12" className="text-sm text-gray-500 ltr:ml-3 rtl:mr-3 dark:text-white/70">Eos
													Labore</label>
											</div>
											<div className="flex">
												<input type="checkbox" className="ti-form-checkbox mt-0.5" id="brand-13" />
												<label htmlFor="brand-13" className="text-sm text-gray-500 ltr:ml-3 rtl:mr-3 dark:text-white/70">Diam</label>
											</div>
										</div>
									</div>
								</div>
								<button type="button"
									className="hs-collapse-toggle w-full py-2 px-4 inline-flex justify-center items-center gap-2 rounded-sm border border-transparent font-semibold bg-primary text-white hover:bg-primary focus:outline-none focus:ring-0 focus:ring-primary focus:ring-offset-0 transition-all text-sm dark:focus:ring-offset-white/10"
									id="hs-brand-collapse" data-hs-collapse="#brand-collapse">
									Show more
								</button>
							</div>
						</div>
					</div>
				</div>
				<div className="col-span-12 xl:col-span-9">
					<div className="box">
						<div className="box-body">
							<div className="">
								<div className="hs-dropdown ti-dropdown rtl:[--placement:bottom-right] ltr:[--placement:bottom-left]">
									<button id="product-feature" type="button" className="hs-dropdown-toggle ti-dropdown-toggle"> Features
										<svg className="hs-dropdown-open:rotate-180 ti-dropdown-caret" width="16" height="16" viewBox="0 0 16 16" fill="none"
											xmlns="http://www.w3.org/2000/svg">
											<path d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
										</svg>
									</button>
									<div className="hs-dropdown-menu w-72 hidden z-10">
										<div className="hs-dropdown-open:ease-in hs-dropdown-open:opacity-100 hs-dropdown-open:scale-100 transition ease-out scale-95 duration-200 origin-top-left ti-dropdown-menu block"
											aria-labelledby="product-feature" data-hs-transition>
											<Link className="ti-dropdown-item" href="#!" scroll={false} > Featured </Link>
											<Link className="ti-dropdown-item" href="#!" scroll={false} > Newest Items </Link>
											<Link className="ti-dropdown-item" href="#!" scroll={false} > Low To High </Link>
											<Link className="ti-dropdown-item" href="#!" scroll={false} > High To Low </Link>
											<Link className="ti-dropdown-item" href="#!" scroll={false} > Relevant </Link>
										</div>
									</div>
								</div>
								<Link href={"/pages/ecommerce/add-product"} className="ti-btn ti-btn-primary ltr:float-right rtl:float-left"><i className="ti ti-plus"></i>Add Prdouct</Link>
							</div>
						</div>
					</div>
					{allData.length === 0 ? (
						<tr>
							<td className="text-center">No data</td>
						</tr>
					) : (
						<div className="grid grid-cols-12 gap-x-6">

							{allData.map((idx, index) => (
								<div className="col-span-12 md:col-span-6 xxl:!col-span-4" key={Math.random()}>
									<div className="box product-box">
										<div className="box-body space-y-3">
											<div className="product-image">
												<Link href={`/pages/ecommerce/product-details?id=${idx.id}`} onClick={() => handleItemClick(idx)} className="image">
													<img className="mx-auto rounded-sm" src={idx.productpicture} alt="img" />
												</Link>
												<div className="product-icons">
													<Link aria-label="anchor" href={"/pages/ecommerce/wishlist/"} onClick={() => handleAddToWishlist(idx)} className="z-9 absolute top-2 ltr:right-2 rtl:left-2 block bg-white dark:bg-bgdark p-2 leading-none rounded-full text-gray-500 dark:text-white text-base"><i className="ri ri-heart-line"></i></Link>
													<Link aria-label="anchor" href={"/pages/ecommerce/cart"} onClick={() => handleAddToCart(idx)} className="z-9 absolute top-12 ltr:right-2 rtl:left-2 block bg-white dark:bg-bgdark p-2 leading-none rounded-full text-gray-500 dark:text-white text-base"><i className="ri ri-shopping-cart-2-line"></i></Link>
													<Link aria-label="anchor" href={`/pages/ecommerce/product-details?id=${idx.id}`} onClick={() => handleItemClick(idx)} className="z-9 absolute top-[5.5rem] ltr:right-2 rtl:left-2 block bg-white dark:bg-bgdark p-2 leading-[0] rounded-full text-gray-500 dark:text-white text-base"><i className="ri ri-eye-line leading-none"></i></Link>
												</div>
												<Link href={`/pages/ecommerce/product-details?id=${idx.id}`} onClick={() => handleItemClick(idx)} className={`bg-${idx.class} z-9 absolute bottom-2 ltr:left-2 rtl:right-2 block p-1 leading-none rounded-sm text-white text-xs`}>{idx.status}</Link>
											</div>
											<div className="product-details space-y-1">
												<h5 className="text-lg font-semibold">{idx.title}</h5>
												<div className="flex space-x-2 rtl:space-x-reverse">
													<div className="product-rating space-x-1 rtl:space-x-reverse">
														<i className="ri ri-star-fill text-yellow-500 text-base"></i>
														<i className="ri ri-star-fill text-yellow-500 text-base"></i>
														<i className="ri ri-star-fill text-yellow-500 text-base"></i>
														<i className="ri ri-star-fill text-yellow-500 text-base"></i>
														<i className="ri ri-star-fill text-gray-200 text-base"></i>
													</div>
													<p className=" my-auto text-gray-500  dark:text-white/70 text-sm space-x-2 rtl:space-x-reverse">{idx.rating} ({idx.views} views)</p>
												</div>
												<div className="flex space-x-2 rtl:space-x-reverse">
													<h5 className="text-lg font-semibold">{idx.price}</h5>
													<span className="my-auto line-through  font-semibold text-base text-gray-500 dark:text-white/70">{idx.discount}</span>
												</div>
											</div>
										</div>
									</div>
								</div>
							))}

						</div>
					)}
					<nav className="flex justify-end items-center space-x-2 rtl:space-x-reverse mb-5">
						<Link className="w-10 h-10 bg-gray-100 text-gray-500 dark:text-white/70 dark:bg-black/20 hover:bg-primary hover:text-white p-2 inline-flex justify-center text-sm font-medium items-center gap-2 rounded-full" href="#!" scroll={false} >
							<span aria-hidden="true">«</span>
							<span className="sr-only">Previous</span>
						</Link>
						<Link className="w-10 h-10 bg-primary text-white p-2 inline-flex items-center justify-center text-sm font-medium rounded-full" href="#!" scroll={false} aria-current="page">1</Link>
						<Link className="w-10 h-10 bg-gray-100 text-gray-500 dark:text-white/70 dark:bg-black/20 hover:bg-primary hover:text-white p-2 inline-flex justify-center items-center text-sm font-medium rounded-full" href="#!" scroll={false} >2</Link>
						<Link className="w-10 h-10 bg-gray-100 text-gray-500 dark:text-white/70 dark:bg-black/20 hover:bg-primary hover:text-white p-2 inline-flex justify-center items-center text-sm font-medium rounded-full" href="#!" scroll={false} >3</Link>
						<Link className="w-10 h-10 bg-gray-100 text-gray-500 dark:text-white/70 dark:bg-black/20 hover:bg-primary hover:text-white p-2 inline-flex justify-center text-sm font-medium items-center gap-2 rounded-full" href="#!" scroll={false} >
							<span className="sr-only">Next</span>
							<span aria-hidden="true">»</span>
						</Link>
					</nav>
				</div>
			</div>

		</div>
	);
};

export default Products;
