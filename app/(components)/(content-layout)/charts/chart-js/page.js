
"use client"
import PageHeader from "@/shared/layout-components/page-header/pageheader";
import Seo from "@/shared/layout-components/seo/seo";
import * as chartdata from "@/shared/data/charts/chartjsdata";
import React from "react";
import { Bar, Bubble, Doughnut, Line, Pie, PolarArea, Radar, Scatter } from "react-chartjs-2";

const Chartjs = () => {

	return (
		<div>
			<Seo title={"Chartjs"} />
			<PageHeader currentpage="ChartJS" activepage="Charts" mainpage="ChartJS" />
			<div className="grid grid-cols-12 gap-x-6">
				<div className="col-span-12 xl:col-span-6">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">
								Chartjs Line Chart
							</h5>
						</div>
						<div className="box-body">
							<Line width={741} height={300} options={chartdata.Option1} data={chartdata.Data1} />
						</div>
					</div>
				</div>
				<div className="col-span-12 xl:col-span-6">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">
								Chartjs Bar Chart
							</h5>
						</div>
						<div className="box-body">
							<Bar width={741} height={300} options={chartdata.Option2} data={chartdata.Data2} />
						</div>
					</div>
				</div>
				<div className="col-span-12 xl:col-span-6">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">
								Chartjs Radial Chart
							</h5>
						</div>
						<div className="box-body">
							<Radar width={741} height={300} options={chartdata.RadarOptions} data={chartdata.RadarData} />
						</div>
					</div>
				</div>
				<div className="col-span-12 xl:col-span-6">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">
								Chartjs Scatter Chart
							</h5>
						</div>
						<div className="box-body">
							<Scatter width={741} height={300} options={chartdata.ScatterOptions} data={chartdata.ScatterData} />
						</div>
					</div>
				</div>
				<div className="col-span-12 xl:col-span-6">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">
								Chartjs Mixed Chart
							</h5>
						</div>
						<div className="box-body">
							<Scatter width={741} height={300} options={chartdata.MixedChartOptions} data={chartdata.MixedChartData} />
						</div>
					</div>
				</div>
				<div className="col-span-12 xl:col-span-6">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">
								Chartjs Bubble Chart
							</h5>
						</div>
						<div className="box-body">
							<Bubble width={741} height={300} options={chartdata.BubbleOptions} data={chartdata.BubbleData} />
						</div>
					</div>
				</div>
				<div className="col-span-12 xl:col-span-4">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">
								Chartjs Pie Chart
							</h5>
						</div>
						<div className="box-body">
							<Pie width={741} height={300} options={chartdata.PieOptions} data={chartdata.PieData} />
						</div>
					</div>
				</div>
				<div className="col-span-12 xl:col-span-4">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">
								Chartjs Doughnut Chart
							</h5>
						</div>
						<div className="box-body">
							<Doughnut width={741} height={300} options={chartdata.DoughnutOptions} data={chartdata.DoughnutData} />
						</div>
					</div>
				</div>
				<div className="col-span-12 xl:col-span-4">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">
								Chartjs Polar Chart
							</h5>
						</div>
						<div className="box-body">
							<PolarArea width={741} height={300} options={chartdata.polarOptions} data={chartdata.polarData} />
						</div>
					</div>
				</div>
			</div>
		</div>
	);

};

export default Chartjs;
