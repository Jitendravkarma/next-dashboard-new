"use client"
import PageHeader from "@/shared/layout-components/page-header/pageheader";
import Seo from "@/shared/layout-components/seo/seo";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { addToCheckout, addToWishlist, removeFromCart, updateCartQuantity } from '@/shared/redux/action';
import { useDispatch, useSelector } from "react-redux";
import { MasterData } from "@/shared/data/pages/ecommerce/productsdata";

const Cart = () => {

	const dispatch = useDispatch();
	const reduxCart = useSelector((state) => state.cart);
	const [localCart, setLocalCart] = useState(MasterData);
	const card = [...localCart, ...reduxCart];

	useEffect(() => {
		setLocalCart(localCart.filter(item => !reduxCart.some((reduxItem) => reduxItem.id === item.id)));
	}, [reduxCart]);


	const handleDelete = (id) => {
		setLocalCart(localCart.filter(item => item.id !== id));
		dispatch(removeFromCart(id));
	};

	const handleAddToWishlist = (item) => {
		dispatch(addToWishlist(item));
	};

	const handleCheckout = () => {
		const combinedItems = [...localCart, ...reduxCart];
		dispatch(addToCheckout(combinedItems));
	};

	function dec(el) {
		let unit = el.currentTarget.parentElement.querySelector("input").value;

		if (Number(unit) === 0) {
			return false;
		} else {
			el.currentTarget.parentElement.querySelector("input").value--;
		}
	}
	function inc(el) {
		el.currentTarget.parentElement.querySelector("input").value++;
	}

	const isEmpty = card.length === 0;

	return (
		<div>
			<Seo title={"Cart"} />
			<PageHeader currentpage="Cart" activepage="Pages" mainpage="Cart" />
			<div className="grid grid-cols-12 gap-x-6">
				<div className="col-span-12 xxl:!col-span-9">

					<div className="box cart-full overflow-hidden">

						<div className="box-body p-0">

							<div className="overflow-auto">
								{isEmpty ? (
									<div className="text-center">
										<img src="../../../assets/images/ecommerce/13.jpg" alt='' />
										<h6>Your Shopping Cart is Empty</h6>
										<p>Add Some items to make me happy 😃</p>
									</div>
								) : (
									<table className="ti-custom-table ti-custom-table-head">
										<thead className="">
											<tr>
												<th scope="col" className="!text-sm !p-4 !text-gray-800 dark:!text-white">Product</th>
												<th scope="col" className="!text-sm !p-4 !text-gray-800 dark:!text-white">Price (Each) </th>
												<th scope="col" className="!text-sm !p-4 !text-gray-800 dark:!text-white">QNTY</th>
												<th scope="col" className="!text-sm !p-4 !text-gray-800 dark:!text-white">Discount</th>
												<th scope="col" className="!text-sm !p-4 !text-gray-800 dark:!text-white">Total</th>
												<th scope="col" className="!text-end !text-sm !p-4 !text-gray-800 dark:!text-white">Action</th>
											</tr>
										</thead>
										<tbody>
											{card.map((idx) => (
												<tr className="cart-box" key={Math.random()}>
													<td className="flex">
														<img className="avatar avatar-lg rounded-sm bg-gray-100 dark:bg-black/20 p-1" src={idx.productpicture} alt="Image Description" />
														<div className="ltr:ml-3 rtl:mr-3">
															<span className="block text-sm font-semibold text-gray-800 dark:text-white max-w-[200px] truncate">{idx.title}</span>
															<span className="block text-sm text-gray-600 dark:text-white/70">{idx.color} Color</span>
															<span className="block text-sm text-gray-600 dark:text-white/70">Size : {idx.size}</span>
														</div>
													</td>
													<td>{idx.price}</td>
													<td>
														<div className="flex rounded-sm">
															<button aria-label="button" type="button" onClick={dec} className="product-quantity-minus inline-flex flex-shrink-0 justify-center items-center h-8 w-8 ltr:rounded-l-sm rtl:rounded-r-sm border border-transparent font-semibold ti-btn-soft-light transition-all text-sm">
																<i className="ti ti-minus"></i>
															</button>
															<input type="text" name="product-quantity" className="product-quantity p-0 ti-form-input w-20 rounded-none focus:z-10 text-center"
																placeholder="0" />
															<button aria-label="button" type="button" onClick={inc} className="product-quantity-plus inline-flex flex-shrink-0 justify-center items-center h-8 w-8 ltr:rounded-r-sm rtl:rounded-l-sm border border-transparent font-semibold ti-btn-soft-light transition-all text-sm">
																<i className="ti ti-plus"></i>
															</button>
														</div>
													</td>
													<td>{idx.discount1}</td>
													<td>{idx.discount}</td>
													<td className="text-end font-medium">
														<div className="hs-tooltip ti-main-tooltip">
															<Link href={"/pages/ecommerce/wishlist"} onClick={() => handleAddToWishlist(idx)} className="hs-tooltip-toggle w-10 h-10 ti-btn  !rounded-full p-0 transition-none focus:outline-none ti-btn-soft-primary">
																<i className="ti ti-heart"></i>
																<span className="hs-tooltip-content ti-main-tooltip-content py-1 px-2 bg-gray-900 text-xs font-medium text-white shadow-sm dark:bg-slate-700" role="tooltip"> Save To Whislist</span>
															</Link>
														</div>
														<div className="hs-tooltip ti-main-tooltip">
															<Link href="#!" onClick={() => handleDelete(idx.id)} scroll={false} className="cart-btn hs-tooltip-toggle w-10 h-10 ti-btn !m-1  !rounded-full p-0 transition-none focus:outline-none ti-btn-soft-danger">
																<i className="ti ti-trash"></i>
																<span className="hs-tooltip-content ti-main-tooltip-content py-1 px-2 bg-gray-900 text-xs font-medium text-white shadow-sm dark:bg-slate-700" role="tooltip"> Delete </span>
															</Link>
														</div>
													</td>
												</tr>
											))}
										</tbody>
									</table>
								)}
							</div>
						</div>
					</div>
					<div className="box hidden cart-empty">
						<div className="box-body">
							<div className="justify-center text-center">
								<img src={"../../../assets/img/ecommerce/1.png"} className="mx-auto w-1/2 h-1/2" alt="Image Description" />
								<h3 className="font-semibold mb-1">Your Cart is Empty</h3>
								<h5 className="mb-3">Add Some items to make me happy 😀</h5>
								<Link href={"/pages/ecommerce/products"} className="ti-btn ti-btn-primary"><i className="ri ri-arrow-right-line ltr:mr-1 rtl:ml-1"></i>continue shopping </Link>
							</div>
						</div>
					</div>
				</div>
				<div className="col-span-12 xxl:!col-span-3">
					<div className="box">
						<div className="box-body">
							<div className="relative">
								<div className="flex rounded-sm space-x-3 rtl:space-x-reverse">
									<input type="text" className="p-2 ti-form-input" placeholder="Enter Coupon Number" />
									<Link href="#!" scroll={false} className="ltr:ml-3 rtl:mr-3 m-0 ti-btn p-2 ti-btn-primary">Apply</Link>
								</div>
							</div>
						</div>
					</div>
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">Product Totals</h5>
						</div>
						<div className="box-body p-0">
							<div className="overflow-auto">
								<table className="ti-custom-table ti-custom-table-head">
									<tbody>
										<tr>
											<td>
												<span className="text-sm text-gray-600 dark:text-white/70">Sub Total</span>
											</td>
											<td className="font-medium text-end">
												<span className="text-sm text-gray-600 dark:text-white/70">3,458</span>
											</td>
										</tr>
										<tr>
											<td>
												<span className="text-sm text-gray-600 dark:text-white/70">Over All Discount</span>
											</td>
											<td className="font-medium text-end">
												<span className="text-sm text-gray-600 dark:text-white/70">- 15%</span>
											</td>
										</tr>
										<tr>
											<td>
												<span className="text-sm text-gray-600 dark:text-white/70">Shipping Charges</span>
											</td>
											<td className="font-medium text-end">
												<span className="text-sm text-gray-600 dark:text-white/70">0 (Free)</span>
											</td>
										</tr>
										<tr>
											<td>
												<span className="text-sm text-gray-600 dark:text-white/70">Vatt</span>
											</td>
											<td className="font-medium text-end">
												<span className="text-sm text-gray-600 dark:text-white/70">+25%</span>
											</td>
										</tr>
										<tr>
											<td>
												<span className="text-sm text-gray-600 dark:text-white/70">Gst</span>
											</td>
											<td className="font-medium text-end">
												<span className="text-sm text-gray-600 dark:text-white/70">+20%</span>
											</td>
										</tr>
										<tr>
											<td>
												<span className="text-sm font-semibold text-gray-800 dark:text-white">Total</span>
											</td>
											<td className="font-medium text-end">
												<span className="text-sm font-semibold text-gray-800 dark:text-white">$40,020</span>
											</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
						<div className="box-footer">
							<Link href={"/pages/ecommerce/checkout"} className="w-full ti-btn p-2 ti-btn-primary">
								<i className="ti ti-arrow-right"></i>Check Out
							</Link>
							<Link href={"/pages/ecommerce/products"} className="ti-btn p-2 ti-btn-secondary w-full"><i className="ti ti-arrow-left rtl:rotate-180"></i>Continue Shopping
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Cart;
