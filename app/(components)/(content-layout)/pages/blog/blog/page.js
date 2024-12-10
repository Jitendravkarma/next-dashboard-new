"use client"
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import PageHeader from "@/shared/layout-components/page-header/pageheader";
import Link from "next/link";
import { Categories, blogdata } from "@/shared/data/pages/blogs/blogsdata";
import Seo from "@/shared/layout-components/seo/seo";

const Blog = () => {

	return (
		<div>
			<Seo title={"Blog"} />
			<PageHeader currentpage="Blog" activepage="Pages" mainpage="Blog" />
			<div className="grid grid-cols-12 gap-x-6">
				<div className="col-span-12 xxl:col-span-9">
					<div className="grid grid-cols-12 gap-x-6">
						<div className="col-span-12 xxxl:col-span-8">
							<div className="box">
								<div className="p-6">
									<img className="w-full h-auto rounded-sm" src={"../../../assets/img/gallery/8.jpg"} alt="Image Description" />
									<div className="box-body px-0 pb-0">
										<Link href="#!" scroll={false} className="text-sm leading-[0] text-success font-semibold">Music</Link>
										<h5 className="font-semibold mb-0 text-lg leading-none">Lorem ipsum dolor sit amet consectetur
											adipisicing elit.</h5>
										<p className="mt-3 mb-3 text-gray-500 dark:text-white/70 text-sm">
											Some quick example text to build on the card title and make up the bulk of the
											{` card's`} content.Some quick example text to build on the card title and make up the bulk of the
											{` card's`} content.
										</p>
										<Link className="p-0 font-semibold text-primary text-sm flex" href={"/pages/blog/blog-details"}>
											Read More<i className="ri ri-arrow-right-line ltr:ml-3 rtl:mr-3 leading-none my-auto rtl:rotate-180"></i>
										</Link>
									</div>
								</div>
								<div className="box-footer bg-transparent">
									<div className="sm:sm:flex items-center justify-between space-y-2 sm:space-y-0 ">
										<div className="flex items-center space-x-3 rtl:space-x-reverse">
											<div className="flex">
												<img className="avatar avatar-sm ring-0 rounded-full" src={"../../../assets/img/users/1.jpg"} alt="avatar" />
											</div>
											<div>
												<p className="text-slate-700 font-semibold text-sm dark:text-white">
													Json Taylor
												</p>
												<p className="text-xs text-gray-500 dark:text-white/70">
													20 min ago
												</p>
											</div>
										</div>
										<div className="space-x-1 rtl:space-x-reverse">
											<Link href="#!" scroll={false}
												className="text-xs leading-[0] text-gray-500 inline-flex items-center dark:text-white/70 space-x-2 rtl:space-x-reverse rounded-full bg-gray-100 px-3 py-1 font-normal hover:bg-gray-300 focus:bg-gary-800 dark:bg-black/20 dark:hover:bg-bgdark"><i
													className="text-xs ri ri-heart-line"></i><span>30</span></Link>
											<Link href="#!" scroll={false}
												className="text-xs leading-[0] text-gray-500 inline-flex items-center dark:text-white/70 space-x-2 rtl:space-x-reverse rounded-full bg-gray-100 px-3 py-1 font-normal hover:bg-gray-300 focus:bg-gary-800 dark:bg-black/20 dark:hover:bg-bgdark"><i
													className="text-xs ri ri-thumb-up-line"></i><span>25k</span></Link>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="col-span-12 xxxl:col-span-4">
							<div className="box">
								<div className="p-6">
									<img className="w-full rounded-sm" src={"../../../assets/img/gallery/3.jpg"} alt="Image Description" />
									<div className="box-body px-0 pb-0">
										<Link href="#!" scroll={false} className="text-sm leading-[0] text-danger font-semibold">Marketing</Link>
										<h5 className="font-semibold mb-0 text-lg leading-none">Lorem ipsum dolor sit amet consectetur
											adipisicing elit.</h5>
										<p className="mt-3 mb-3 text-gray-500 dark:text-white/70 text-sm">
											Some quick example text to build on the card title and make up the bulk of the
											{` card's`} content.
										</p>
										<Link className="p-0 font-semibold text-primary text-sm flex" href={"/pages/blog/blog-details"}>
											Read More<i className="ri ri-arrow-right-line ltr:ml-3 rtl:mr-3 leading-none my-auto rtl:rotate-180"></i>
										</Link>
									</div>
								</div>
								<div className="box-footer bg-transparent">
									<div className="sm:flex items-center justify-between space-y-2 sm:space-y-0">
										<div className="flex items-center space-x-3 rtl:space-x-reverse">
											<div className="flex">
												<img className="avatar avatar-sm ring-0 rounded-full" src={"../../../assets/img/users/1.jpg"} alt="avatar" />
											</div>
											<div>
												<p className="text-slate-700 font-semibold text-sm dark:text-white">
													Json Taylor
												</p>
												<p className="text-xs text-gray-500 dark:text-white/70">
													20 min ago
												</p>
											</div>
										</div>
										<div className="space-x-1 rtl:space-x-reverse">
											<Link href="#!" scroll={false}
												className="text-xs leading-[0] text-gray-500 inline-flex items-center dark:text-white/70 space-x-2 rtl:space-x-reverse rounded-full bg-gray-100 px-3 py-1 font-normal hover:bg-gray-300 focus:bg-gary-800 dark:bg-black/20 dark:hover:bg-bgdark"><i
													className="text-xs ri ri-heart-line"></i><span>30</span></Link>
											<Link href="#!" scroll={false}
												className="text-xs leading-[0] text-gray-500 inline-flex items-center dark:text-white/70 space-x-2 rtl:space-x-reverse rounded-full bg-gray-100 px-3 py-1 font-normal hover:bg-gray-300 focus:bg-gary-800 dark:bg-black/20 dark:hover:bg-bgdark"><i
													className="text-xs ri ri-thumb-up-line"></i><span>25k</span></Link>
										</div>
									</div>
								</div>
							</div>
							<div className="box">
								<div className="p-6">
									<div className="box-body p-0">
										<Link href="#!" scroll={false} className="text-sm leading-[0] text-info font-semibold">Bussiness</Link>
										<h5 className="font-semibold mb-0 text-lg leading-none">Lorem ipsum dolor sit amet consectetur
											adipisicing elit.</h5>
										<p className="mt-3 mb-3 text-gray-500 dark:text-white/70 text-sm">
											Some quick example text to build on the card title and make up the bulk of the
											{` card's`} content.Some quick title and make up the bulk of the
											{` card's`} content.
										</p>
										<Link className="p-0 font-semibold text-primary text-sm flex" href={"/pages/blog/blog-details"}>
											Read More<i className="ri ri-arrow-right-line ltr:ml-3 rtl:mr-3 leading-none my-auto rtl:rotate-180"></i>
										</Link>
									</div>
								</div>
							</div>
						</div>
						<div className="col-span-12 xxxl:col-span-6">
							<div className="box p-5">
								<div className="sm:flex sm:flex-row">
									<img className="sm:w-1/4 rounded-sm" src={"../../../assets/img/gallery/9.jpg"} alt="Image Description" />
									<div className="box-body ltr:sm:pl-5 rtl:sm:pr-5 px-0 sm:pt-0 pb-0 my-auto">
										<Link href="#!" scroll={false} className="text-sm leading-[0] text-warning font-semibold">Tourism</Link>
										<h5 className="font-semibold mb-0 text-lg leading-none">Lorem ipsum dolor sit amet consectetur
											adipisicing.</h5>
										<p className="mt-3 mb-3 text-gray-500 dark:text-white/70 text-sm">
											Some quick example text to build on the card title and make up the bulk of the
											{` card's`} content.
										</p>
										<Link className="p-0 font-semibold text-primary text-sm flex" href={"/pages/blog/blog-details"}>
											Read More<i className="ri ri-arrow-right-line ltr:ml-3 rtl:mr-3 leading-none my-auto rtl:rotate-180"></i>
										</Link>
									</div>
								</div>
							</div>
						</div>
						<div className="col-span-12 xxxl:col-span-6">
							<div className="box p-5">
								<div className="sm:flex flex-row">
									<div className="box-body px-0 ltr:sm:pr-5 rtl:sm:pl-5 sm:pb-0 pt-0 my-auto">
										<Link href="#!" scroll={false} className="text-sm leading-[0] text-secondary font-semibold">Trucking</Link>
										<h5 className="font-semibold mb-0 text-lg leading-none">Lorem ipsum dolor sit amet consectetur
											adipisicing.</h5>
										<p className="mt-3 mb-3 text-gray-500 dark:text-white/70 text-sm">
											Some quick example text to build on the card title and make up the bulk of the
											{` card's`} content.
										</p>
										<Link className="p-0 font-semibold text-primary text-sm flex" href={"/pages/blog/blog-details"}>
											Read More<i className="ri ri-arrow-right-line ltr:ml-3 rtl:mr-3 leading-none my-auto rtl:rotate-180"></i>
										</Link>
									</div>
									<img className="sm:w-1/4 rounded-sm" src={"../../../assets/img/gallery/7.jpg"} alt="Image Description" />
								</div>
							</div>
						</div>
						<div className="col-span-12 xxxl:col-span-4">
							<div className="box">
								<div className="p-6">
									<img className="w-full rounded-sm" src={"../../../assets/img/gallery/3.jpg"} alt="Image Description" />
									<div className="box-body px-0 pb-0">
										<Link href="#!" scroll={false} className="text-sm leading-[0] text-danger font-semibold">Technology</Link>
										<h5 className="font-semibold mb-0 text-lg leading-none">Lorem ipsum dolor sit amet consectetur
											adipisicing elit.</h5>
										<p className="mt-3 mb-3 text-gray-500 dark:text-white/70 text-sm">
											Some quick example text to build on the card title and make up the bulk of the
											{` card's`} content.
										</p>
										<Link className="p-0 font-semibold text-primary text-sm flex" href={"/pages/blog/blog-details"}>
											Read More<i className="ri ri-arrow-right-line ltr:ml-3 rtl:mr-3 leading-none my-auto rtl:rotate-180"></i>
										</Link>
									</div>
								</div>
								<div className="box-footer bg-transparent">
									<div className="sm:flex items-center justify-between space-y-2 sm:space-y-0">
										<div className="flex items-center space-x-3 rtl:space-x-reverse">
											<div className="flex">
												<img className="avatar avatar-sm ring-0 rounded-full" src={"../../../assets/img/users/1.jpg"} alt="avatar" />
											</div>
											<div>
												<p className="text-slate-700 font-semibold text-sm dark:text-white">
													Json Taylor
												</p>
												<p className="text-xs text-gray-500 dark:text-white/70">
													20 min ago
												</p>
											</div>
										</div>
										<div className="space-x-1 rtl:space-x-reverse">
											<Link href="#!" scroll={false}
												className="text-xs leading-[0] text-gray-500 inline-flex items-center dark:text-white/70 space-x-2 rtl:space-x-reverse rounded-full bg-gray-100 px-3 py-1 font-normal hover:bg-gray-300 focus:bg-gary-800 dark:bg-black/20 dark:hover:bg-bgdark"><i
													className="text-xs ri ri-heart-line"></i><span>30</span></Link>
											<Link href="#!" scroll={false}
												className="text-xs leading-[0] text-gray-500 inline-flex items-center dark:text-white/70 space-x-2 rtl:space-x-reverse rounded-full bg-gray-100 px-3 py-1 font-normal hover:bg-gray-300 focus:bg-gary-800 dark:bg-black/20 dark:hover:bg-bgdark"><i
													className="text-xs ri ri-thumb-up-line"></i><span>25k</span></Link>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="col-span-12 xxxl:col-span-4">
							<div className="box">
								<div className="p-6">
									<img className="w-full rounded-sm" src={"../../../assets/img/gallery/2.jpg"} alt="Image Description" />
									<div className="box-body px-0 pb-0">
										<Link href="#!" scroll={false} className="text-sm leading-[0] text-secondary font-semibold">Nature</Link>
										<h5 className="font-semibold mb-0 text-lg leading-none">Lorem ipsum dolor sit amet consectetur
											adipisicing elit.</h5>
										<p className="mt-3 mb-3 text-gray-500 dark:text-white/70 text-sm">
											Some quick example text to build on the card title and make up the bulk of the
											{` card's`} content.
										</p>
										<Link className="p-0 font-semibold text-primary text-sm flex" href={"/pages/blog/blog-details"}>
											Read More<i className="ri ri-arrow-right-line ltr:ml-3 rtl:mr-3 leading-none my-auto rtl:rotate-180"></i>
										</Link>
									</div>
								</div>
								<div className="box-footer bg-transparent">
									<div className="sm:flex items-center justify-between space-y-2 sm:space-y-0">
										<div className="flex items-center space-x-3 rtl:space-x-reverse">
											<div className="flex">
												<img className="avatar avatar-sm ring-0 rounded-full" src={"../../../assets/img/users/1.jpg"} alt="avatar" />
											</div>
											<div>
												<p className="text-slate-700 font-semibold text-sm dark:text-white">
													Json Taylor
												</p>
												<p className="text-xs text-gray-500 dark:text-white/70">
													20 min ago
												</p>
											</div>
										</div>
										<div className="space-x-1 rtl:space-x-reverse">
											<Link href="#!" scroll={false}
												className="text-xs leading-[0] text-gray-500 inline-flex items-center dark:text-white/70 space-x-2 rtl:space-x-reverse rounded-full bg-gray-100 px-3 py-1 font-normal hover:bg-gray-300 focus:bg-gary-800 dark:bg-black/20 dark:hover:bg-bgdark"><i
													className="text-xs ri ri-heart-line"></i><span>30</span></Link>
											<Link href="#!" scroll={false}
												className="text-xs leading-[0] text-gray-500 inline-flex items-center dark:text-white/70 space-x-2 rtl:space-x-reverse rounded-full bg-gray-100 px-3 py-1 font-normal hover:bg-gray-300 focus:bg-gary-800 dark:bg-black/20 dark:hover:bg-bgdark"><i
													className="text-xs ri ri-thumb-up-line"></i><span>25k</span></Link>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="col-span-12 xxxl:col-span-4">
							<div className="box">
								<div className="p-6">
									<img className="w-full rounded-sm" src={"../../../assets/img/gallery/1.jpg"} alt="Image Description" />
									<div className="box-body px-0 pb-0">
										<Link href="#!" scroll={false} className="text-xs leading-[0] text-warning font-semibold">Travel</Link>
										<h5 className="font-semibold mb-0 text-lg leading-none">Lorem ipsum dolor sit amet consectetur
											adipisicing elit.</h5>
										<p className="mt-3 mb-3 text-gray-500 dark:text-white/70 text-sm">
											Some quick example text to build on the card title and make up the bulk of the
											{` card's`} content.
										</p>
										<Link className="p-0 font-semibold text-primary text-sm flex" href={"/pages/blog/blog-details"}>
											Read More<i className="ri ri-arrow-right-line ltr:ml-3 rtl:mr-3 leading-none my-auto rtl:rotate-180"></i>
										</Link>
									</div>
								</div>
								<div className="box-footer bg-transparent">
									<div className="sm:flex items-center justify-between space-y-2 sm:space-y-0">
										<div className="flex items-center space-x-3 rtl:space-x-reverse">
											<div className="flex">
												<img className="avatar avatar-sm ring-0 rounded-full" src={"../../../assets/img/users/1.jpg"} alt="avatar" />
											</div>
											<div>
												<p className="text-slate-700 font-semibold text-sm dark:text-white">
													Json Taylor
												</p>
												<p className="text-xs text-gray-500 dark:text-white/70">
													20 min ago
												</p>
											</div>
										</div>
										<div className="space-x-1 rtl:space-x-reverse">
											<Link href="#!" scroll={false}
												className="text-xs leading-[0] text-gray-500 inline-flex items-center dark:text-white/70 space-x-2 rtl:space-x-reverse rounded-full bg-gray-100 px-3 py-1 font-normal hover:bg-gray-300 focus:bg-gary-800 dark:bg-black/20 dark:hover:bg-bgdark"><i
													className="text-xs ri ri-heart-line"></i><span>30</span></Link>
											<Link href="#!" scroll={false}
												className="text-xs leading-[0] text-gray-500 inline-flex items-center dark:text-white/70 space-x-2 rtl:space-x-reverse rounded-full bg-gray-100 px-3 py-1 font-normal hover:bg-gray-300 focus:bg-gary-800 dark:bg-black/20 dark:hover:bg-bgdark"><i
													className="text-xs ri ri-thumb-up-line"></i><span>25k</span></Link>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="col-span-12 xxl:col-span-3">
					<div className="box">
						<div className="box-body p-0">
							<Swiper spaceBetween={30} centeredSlides={true} autoplay={{ delay: 2500, disableOnInteraction: false }} modules={[Autoplay]} className="mySwiper8" >
								<SwiperSlide>
									<div className="rtl:dir-rtl">
										<img src={"../../../assets/img/gallery/4.jpg"} alt="image" />
										<div className="blog-caption text-start">
											<p className="mb-2 text-xs">The agency has a diverse workforce of just under 18,000 civil servants, and works with many more U.S.</p>
											<h6 className="text-base font-semibold mb-2">N.A.S.A</h6>
											<div className="flex items-center">
												<img src={"../../../assets/img/users/15.jpg"} alt="" className="shadow-none ring-transparent avatar avatar-sm !rounded-full ltr:mr-2 rtl:ml-2" />
												<div className="font-semibold">Json Taylor - <span className="text-xs opacity-70 font-normal">12,Dec 2022 - 04:34PM</span></div>
											</div>
										</div>
									</div>
								</SwiperSlide>
								<SwiperSlide><div className="rtl:dir-rtl">
									<img src={"../../../assets/img/gallery/5.jpg"} alt="image" />
									<div className="blog-caption text-start">
										<p className="mb-2 text-xs">The agency has a diverse workforce of just under 18,000 civil servants, and works with many more U.S.</p>
										<h6 className="text-base font-semibold mb-2">N.A.S.A</h6>
										<div className="flex items-center">
											<img src={"../../../assets/img/users/15.jpg"} alt="" className="shadow-none ring-transparent avatar avatar-sm !rounded-full ltr:mr-2 rtl:ml-2" />
											<div className="font-semibold">Json Taylor - <span className="text-xs opacity-70 font-normal">12,Dec 2022 - 04:34PM</span></div>
										</div>
									</div>
								</div></SwiperSlide>
								<SwiperSlide><div className="rtl:dir-rtl">
									<img src={"../../../assets/img/gallery/6.jpg"} alt="image" />
									<div className="blog-caption text-start">
										<p className="mb-2 text-xs">The agency has a diverse workforce of just under 18,000 civil servants, and works with many more U.S.</p>
										<h6 className="text-base font-semibold mb-2">N.A.S.A</h6>
										<div className="flex items-center">
											<img src={"../../../assets/img/users/15.jpg"} alt="" className="shadow-none ring-transparent avatar avatar-sm !rounded-full ltr:mr-2 rtl:ml-2" />
											<div className="font-semibold">Json Taylor - <span className="text-xs opacity-70 font-normal">12,Dec 2022 - 04:34PM</span></div>
										</div>
									</div>
								</div></SwiperSlide>
							</Swiper>
						</div>
					</div>

					<div className="box">
						<div className="box-header">
							<h5 className="box-title">Recent Blogs</h5>
						</div>
						<div className="box-body">
							<ul className="flex flex-col popular-blog-list">
								{blogdata.map((idx) => (
									<li className="ti-list-group pt-0 px-0 pb-6 border-0 text-gray-800 dark:text-white" key={Math.random()}>
										<Link href="#!" scroll={false} className="space-x-3 flex rtl:space-x-reverse">
											<img src={idx.src} className="avatar avatar-lg rounded-sm ring-0" alt="Image Description" />
											<div className="space-y-1 my-auto">
												<h3 className="font-semibold text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
												<p className="flex space-x-2 rtl:space-x-reverse text-gray-500 dark:text-white/70 text-xs"><i
													className={`ri ri-${idx.icon} text-xs`}></i><span>{idx.data}</span></p>
											</div>
										</Link>
									</li>
								))}
							</ul>
						</div>
					</div>

					<div className="box">
						<div className="box-header">
							<h5 className="box-title">Categories</h5>
						</div>
						<div className="box-body">
							{Categories.map((idx) => (
								<span key={Math.random()} className="badge bg-gray-100 text-gray-800 dark:bg-black/20 dark:text-gray-200 me-1">
									{idx.class}
								</span>
							))}

						</div>
					</div>

					<div className="box">
						<div className="box-body">
							<h3 className="font-semibold text-base mb-5 text-primary">Subscribe For More {`Blog's`}</h3>
							<input type="email" id="input-label" className="ti-form-input" placeholder="you@site.com" />
							<button type="button" className="py-2 px-3 w-full ti-btn ti-btn-primary !mt-2">
								subscribe
							</button>
						</div>
					</div>

				</div>
			</div>
		</div>
	);
};

export default Blog;
