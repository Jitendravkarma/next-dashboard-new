"use client";
import PageHeader from "@/shared/layout-components/page-header/pageheader";
import Seo from "@/shared/layout-components/seo/seo";
import dynamic from "next/dynamic";
import React, { Fragment, useEffect, useRef } from "react";

const Dragabblecards = () => {

	const leftContainerRef = useRef(null);
	const rightContainerRef = useRef(null);
	const topContainerRef = useRef(null);

	useEffect(() => {
		// Check if window is defined (to prevent issues during server-side rendering)
		if (typeof window !== "undefined") {
			// Import the dragula library here (make sure it's installed first)
			const dragula = require("dragula");
			const windowElement = window;

			if (leftContainerRef.current && rightContainerRef.current && topContainerRef.current) {
				const containers = [
					leftContainerRef.current,
					rightContainerRef.current,
					topContainerRef.current,
				];

				// Initialize dragula on the containers
				const drake = dragula(containers);

				// Your other dragula-related logic here...

				if (document.querySelector(".firstdrag")?.classList.contains("task-Null")) {
					document.querySelector(".view-more-button")?.classList.add("d-none");
				}
			}

			OnDivChange();
		}
	}, []);

	const elementsToModify = [
		leftContainerRef,
		rightContainerRef,
		topContainerRef,
	];

	const OnDivChange = () => {
		elementsToModify.forEach((elementId) => {
			const element = elementId.current;
			if (element?.children.length <= 0) {
				element?.classList.add("task-Null");
				element?.parentNode.parentElement.parentElement.querySelector(".view-more-button")?.classList.add("d-none");
			} else {
				element?.classList.remove("task-Null");
				element?.parentNode.parentElement.parentElement.querySelector(".view-more-button")?.classList.remove("d-none");
			}
		});
	};
	return (
		<Fragment>
			<Seo title={"Draggable Cards"} />
			<PageHeader currentpage="Draggable Cards" activepage="Advanced Ui" mainpage="Draggable Cards" />
			<div className="grid grid-cols-12 gap-6">
				<div className="col-span-12 lg:col-span-4">
					<div className="box">
						<div className="box-body">
							<div className="gap-4 grid" id="drag-left" ref={leftContainerRef} onMouseEnter={OnDivChange}>
								<div className="box mb-0">
									<div className="blockquote box-body">
										Some quick example text to build on the card title and make up the bulk of the card's content.
									</div>
								</div>
								<div className="box mb-0 !bg-primary text-white">
									<div className="box-body">
										Some quick example text to build on the card title and make up the bulk of the card's content.
									</div>
								</div>
								<div className="box mb-0">
									<img className="w-full h-auto rounded-t-sm" src="../../assets/img/gallery/3.jpg" alt="Image Description" />
									<div className="p-4 md:p-5">
										<h3 className="text-lg font-bold text-gray-800 dark:text-white">
											Card title
										</h3>
										<p className="mt-1 text-gray-800 dark:text-white/70">
											Some quick example text to build on the card title and make up the bulk of the
											card's content.
										</p>
										<a className="mt-3 py-2 px-3 inline-flex justify-center items-center gap-2 rounded-sm border border-transparent font-semibold bg-primary text-white hover:bg-primary focus:outline-none focus:ring-0 focus:ring-primary focus:ring-offset-0 transition-all text-sm dark:focus:ring-offset-white/10" href="#!">
											Go somewhere
										</a>
									</div>
								</div>
								<div className="box mb-0 !bg-success text-white">
									<div className="box-body">
										Some quick example text to build on the card title and make up the bulk of the card's content.
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="col-span-12 lg:col-span-4"  >
					<div className="box">
						<div className="box-body">
							<div className="gap-4 grid" id="drag-center" ref={topContainerRef} onMouseEnter={OnDivChange}>
								<div className="box mb-0 !bg-primary text-white">
									<div className="box-body">
										Some quick example text to build on the card title and make up the bulk of the card's content.
									</div>
								</div>
								<div className="box mb-0">
									<div className="box-body">
										Some quick example text to build on the card title and make up the bulk of the card's content.
									</div>
								</div>
								<div className="box mb-0 !bg-warning text-white">
									<div className="box-body">
										Some quick example text to build on the card title and make up the bulk of the card's content.
									</div>
								</div>
								<div className="box mb-0">
									<img className="w-full h-auto rounded-t-sm" src="../../assets/img/gallery/3.jpg" alt="Image Description" />
									<div className="p-4 md:p-5">
										<h3 className="text-lg font-bold text-gray-800 dark:text-white">
											Card title
										</h3>
										<p className="mt-1 text-gray-800 dark:text-white/70">
											Some quick example text to build on the card title and make up the bulk of the
											card's content.
										</p>
										<a className="mt-3 py-2 px-3 inline-flex justify-center items-center gap-2 rounded-sm border border-transparent font-semibold bg-primary text-white hover:bg-primary focus:outline-none focus:ring-0 focus:ring-primary focus:ring-offset-0 transition-all text-sm dark:focus:ring-offset-white/10" href="#!">
											Go somewhere
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="col-span-12 lg:col-span-4" >
					<div className="box">
						<div className="box-body">
							<div className="gap-4 grid" id="drag-right" ref={rightContainerRef} onMouseEnter={OnDivChange}>
								<div className="box !bg-secondary text-white mb-0">
									<div className="box-body">
										Some quick example text to build on the card title and make up the bulk of the card's content.
									</div>
								</div>
								<div className="box mb-0 !bg-info text-white">
									<div className="box-body">
										Some quick example text to build on the card title and make up the bulk of the card's content.
									</div>
								</div>
								<div className="box mb-0 !bg-danger text-white">
									<div className="box-body">
										Some quick example text to build on the card title and make up the bulk of the card's content.
									</div>
								</div>
								<div className="box mb-0">
									<div className="p-4 md:p-5">
										<h3 className="text-lg font-bold text-gray-800 dark:text-white">
											Card title
										</h3>
										<p className="mt-1 text-gray-800 dark:text-white/70">
											Some quick example text to build on the card title and make up the bulk of the
											card's content.
										</p>
										<a className="mt-3 py-2 px-3 inline-flex justify-center items-center gap-2 rounded-sm border border-transparent font-semibold bg-primary text-white hover:bg-primary focus:outline-none focus:ring-0 focus:ring-primary focus:ring-offset-0 transition-all text-sm dark:focus:ring-offset-white/10" href="#!">
											Go somewhere
										</a>
									</div>
									<img className="w-full h-auto rounded-b-sm" src="../../assets/img/gallery/3.jpg" alt="Image Description" />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Fragment>
	);
};

export default Dragabblecards;
