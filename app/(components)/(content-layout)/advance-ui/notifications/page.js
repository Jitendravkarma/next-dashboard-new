"use client"
import PageHeader from "@/shared/layout-components/page-header/pageheader";
import Seo from "@/shared/layout-components/seo/seo";
import Link from "next/link";
import React from "react";
import { ToastContainer, ToastPosition, toast } from 'react-toastify';

const Notifications = () => {

	const DefaultToastify = () => {
		toast.success(
			<h6 className="text-white tx-16 mb-0">Success: Well done! Details Submitted Successfully</h6>,
			{
				position: 'top-right',
				hideProgressBar: true,
				autoClose: 2000,
				closeButton: false,
				theme: 'colored'
			}
		);
	};
	const DangerToastify = () => {
		toast.error(
			<h6 className="text-white tx-16 mb-0">This is an example of error</h6>,
			{
				position: 'top-left',
				hideProgressBar: true,
				autoClose: 2000,
				closeButton: false,
				theme: 'colored'
			}
		);
	};
	const WarnToastify = () => {
		toast.warn(
			<h6 className="text-white tx-16 mb-0">This is an Example of warning</h6>,
			{
				position: 'top-right',
				hideProgressBar: true,
				autoClose: 2000,
				closeButton: false,
				theme: 'colored'

			}
		);
	};

	const InfoToastify = () => {
		toast.info(
			<h6 className="text-white tx-16 mb-0">This is an Example of Info</h6>,
			{
				position: 'top-right',
				hideProgressBar: true,
				autoClose: 2000,
				closeButton: false,
				theme: 'colored'

			}
		);
	};
	const BottomToastify = () => {
		toast.info(
			<h6 className="text-dark tx-16 mb-0">This is an Example of Bottom Notification</h6>,
			{
				position: 'bottom-center',
				hideProgressBar: true,
				autoClose: 2000,
				closeButton: false,

			}
		);
	};
	const topToastify = () => {
		toast.info(
			<h6 className="text-dark tx-16 mb-0">This is an Example of top Notification</h6>,
			{
				position: 'top-center',
				hideProgressBar: true,
				autoClose: 2000,
				closeButton: false,

			}
		);
	};
	const leftToastify = () => {
		toast.info(
			<h6 className="text-dark tx-16 mb-0">This is an Example of left Notification</h6>,
			{
				position: 'top-left',
				hideProgressBar: true,
				autoClose: 2000,
				closeButton: false,

			}
		);
	};
	const notify = () => toast("This is an example of tip");

	return (
		<div>
			<Seo title={"Notification"} />
			<PageHeader currentpage="Notification" activepage="Advanced Ui" mainpage="Notification" />
			<div className="grid grid-cols-12 gap-x-5">
				<div className="col-span-12 lg:col-span-4">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">Top-Left</h5>
						</div>
						<div className="box-body text-center">
							<Link href='#' scroll={false} className="ti-btn ti-btn-primary" onClick={() => leftToastify()}>Basic Notification</Link>
						</div>
					</div>
				</div>
				<div className="col-span-12 lg:col-span-4">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">Top-Center</h5>
						</div>
						<div className="box-body text-center">
							<Link href='#' scroll={false} className="ti-btn ti-btn-primary" onClick={() => topToastify()}>Basic Notification</Link>
						</div>
					</div>
				</div>
				<div className="col-span-12 lg:col-span-4">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">Top-Right</h5>
						</div>
						<div className="box-body text-center">
							<Link href='#' scroll={false} className="ti-btn ti-btn-primary" onClick={notify}>Basic Notification</Link>
						</div>
					</div>
				</div>
				<ToastContainer />
			</div>
			<div className="grid grid-cols-12 gap-x-5">
				<div className="col-span-12 lg:col-span-4">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">Success Notification</h5>
						</div>
						<div className="box-body text-center">
							<button type="button" className="ti-btn  ti-btn-success" id="success" onClick={() => DefaultToastify()}>Success Notification</button>
						</div>
					</div>
				</div>
				<div className="col-span-12 lg:col-span-4">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title"> Error Notification</h5>
						</div>
						<div className="box-body text-center">
							<button type="button" className="ti-btn ti-btn-danger" id="error" onClick={() => DangerToastify()}>Error Notification</button>
						</div>
					</div>
				</div>
				<div className="col-span-12 lg:col-span-4">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title"> Warning Notification</h5>
						</div>
						<div className="box-body text-center">
							<button type="button" className="ti-btn ti-btn-warning" id="warning" onClick={() => WarnToastify()}>Warning Notification</button>
						</div>
					</div>
				</div>
			</div>

			<div className="grid grid-cols-12 gap-x-5">

				<div className="col-span-12 lg:col-span-6">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">Info Notification</h5>
						</div>
						<div className="box-body text-center">
							<Link href='#' scroll={false} className="ti-btn ti-btn-info" onClick={() => InfoToastify()}>Basic Notification</Link>
						</div>
					</div>
				</div>
				<div className="col-span-12 lg:col-span-6">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">Bottom-Center</h5>
						</div>
						<div className="box-body text-center">
							<Link href='#' scroll={false} className="ti-btn ti-btn-primary" onClick={() => BottomToastify()}>Basic Notification</Link>
						</div>
					</div>
				</div>
			</div>

		</div>
	);
};

export default Notifications;
