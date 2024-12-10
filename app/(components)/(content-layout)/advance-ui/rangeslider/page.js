"use client"
import React from "react";
import Slider from "rc-slider";
import RangeSlider from "react-range-slider-input";
import { connect } from "react-redux";
import PageHeader from "@/shared/layout-components/page-header/pageheader";
import LabeledTwoThumbs, { Marks } from "@/shared/data/advance-ui/rangesliderdata";
import Seo from "@/shared/layout-components/seo/seo";
import { SliderThumb } from "@mui/material/Slider";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";

const Rangeslider = ({ local_varaiable }) => {

	function valuetext(value) {
		return `${value}°C`;
	}

	const AirbnbSlider = styled(Slider)(({ theme }) => ({
		color: "#3a8589",
		height: 3,
		padding: "13px 0",
		"& .MuiSlider-thumb": {
			height: 27,
			width: 27,
			backgroundColor: "#fff",
			border: "1px solid currentColor",
			"&:hover": {
				boxShadow: "0 0 0 8px rgba(58, 133, 137, 0.16)",
			},
			"& .airbnb-bar": {
				height: 9,
				width: 1,
				backgroundColor: "currentColor",
				marginLeft: 1,
				marginRight: 1,
			},
		},
		"& .MuiSlider-track": {
			height: 3,
		},
		"& .MuiSlider-rail": {
			color: theme.palette.mode === "dark" ? "#bfbfbf" : "#d8d8d8",
			opacity: theme.palette.mode === "dark" ? undefined : 1,
			height: 3,
		},
	}));

	function AirbnbThumbComponent(props) {
		const { children, ...other } = props;
		return (
			<SliderThumb {...other}>
				{children}
				<span className="airbnb-bar" />
				<span className="airbnb-bar" />
				<span className="airbnb-bar" />
			</SliderThumb>
		);
	}

	return (
		<div>
			<Seo title={"rangeslider"} />
			<PageHeader currentpage="Rangeslider" activepage="Advanced UI" mainpage="Rangeslider" />
			<div className="grid grid-cols-12 gap-x-5">
				<div className="col-span-12 lg:col-span-6">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title"> Basic Rangeslider Options with Html</h5>
						</div>
						<div className="box-body">
							<Slider min={0} max={20} defaultValue={3} />
						</div>
					</div>
				</div>
				<div className="col-span-12 lg:col-span-6">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title"> Basic Rangeslider With Reverse value </h5>
						</div>
						<div className="box-body">
							<Slider min={0} max={20} reverse defaultValue={3} />
						</div>
					</div>
				</div>
			</div>

			<div className="grid grid-cols-12 gap-x-5">
				<div className="col-span-12 lg:col-span-6">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title"> Multiple Rangesliders with fixed value</h5>
						</div>
						<div className="box-body">
							<Slider min={20} defaultValue={20} marks={{ 20: 20, 40: 40, 100: 100 }} step={null} />
						</div>
					</div>
				</div>
				<div className="col-span-12 lg:col-span-6">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">Basic </h5>
						</div>
						<div className="box-body">
							<RangeSlider />
						</div>
					</div>
				</div>
			</div>

			<div className="grid grid-cols-12 gap-x-5">

				<div className="col-span-12 md:col-span-6 xxl:col-span-4">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">Fit Handles</h5>
						</div>
						<div className="box-body">
							<RangeSlider />
						</div>
					</div>
				</div>
				<div className="col-span-12 md:col-span-6 xxl:col-span-4">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">Rounded Styling</h5>
						</div>
						<div className="box-body">
							<RangeSlider id="range-slider-yellow" />
						</div>
					</div>
				</div>
				<div className="col-span-12 md:col-span-6 xxl:col-span-4">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title"> Square Styling</h5>
						</div>
						<div className="box-body">
							<RangeSlider id="range-slider-ab" className="margin-lg" step={"any"} rangeSlideDisabled={true} />
						</div>
					</div>
				</div>
			</div>

			<div className="grid grid-cols-12 gap-x-5">
				<div className="col-span-12 lg:col-span-6">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">Labeled with Two thumbs</h5>
						</div>
						<div className="box-body rangeslider-two-thumb">
							<LabeledTwoThumbs rtl={local_varaiable.dir == "rtl"} />
						</div>
					</div>
				</div>
				<div className="col-span-12 lg:col-span-6">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">With Multiple Marks</h5>
						</div>
						<div className="box-body">
							<Marks rtl={local_varaiable.dir == "rtl"} />
						</div>
					</div>
				</div>

			</div>
			<h6 className="mb-3">noUiSlider Colors:</h6>
			<div className="grid grid-cols-12 gap-6">
				<div className="xl:col-span-4 col-span-12">
					<div className="box">
						<div className="box-header">
							<div className="box-title">
								Primary
							</div>
						</div>
						<div className="box-body">
							<div id="primary-colored-slider">
								<Slider
									aria-label="Temperature"
									defaultValue={30}
									getAriaValueText={valuetext}
									color="primary"
								/>
							</div>
						</div>
					</div>
				</div>
				<div className="xl:col-span-4 col-span-12">
					<div className="box">
						<div className="box-header">
							<div className="box-title">
								Secondary
							</div>
						</div>
						<div className="box-body">
							<div id="secondary-colored-slider">
								<Slider
									aria-label="Temperature"
									defaultValue={30}
									getAriaValueText={valuetext}
									color="secondary"
								/>
							</div>
						</div>
					</div>
				</div>
				<div className="xl:col-span-4 col-span-12">
					<div className="box">
						<div className="box-header">
							<div className="box-title">
								Warning
							</div>
						</div>
						<div className="box-body">
							<div id="warning-colored-slider">
								<Slider
									aria-label="Temperature"
									defaultValue={30}
									getAriaValueText={valuetext}
								/>
							</div>
						</div>
					</div>
				</div>
				<div className="xl:col-span-4 col-span-12">
					<div className="box">
						<div className="box-header">
							<div className="box-title">
								Info
							</div>
						</div>
						<div className="box-body">
							<div id="info-colored-slider">
								<Slider
									aria-label="Temperature"
									defaultValue={30}
									getAriaValueText={valuetext}
								/>
							</div>
						</div>
					</div>
				</div>
				<div className="xl:col-span-4 col-span-12">
					<div className="box">
						<div className="box-header">
							<div className="box-title">
								Success
							</div>
						</div>
						<div className="box-body">
							<div id="success-colored-slider">
								<Slider
									aria-label="Temperature"
									defaultValue={30}
									getAriaValueText={valuetext}
								/>
							</div>
						</div>
					</div>
				</div>
				<div className="xl:col-span-4 col-span-12">
					<div className="box">
						<div className="box-header">
							<div className="box-title">
								Danger
							</div>
						</div>
						<div className="box-body">
							<div id="danger-colored-slider">
								<Slider
									aria-label="Temperature"
									defaultValue={30}
									getAriaValueText={valuetext}
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>);

};

const mapStateToProps = (state) => ({
	local_varaiable: state
});

export default connect(mapStateToProps, {})(Rangeslider);
