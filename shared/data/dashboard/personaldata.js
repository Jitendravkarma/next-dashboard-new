

import dynamic from "next/dynamic";
import { Component } from "react";
const ReactApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });

//Statistics

export class Statistic extends Component {
  constructor(props) {
    super(props);

    this.state = {

      series: [
        {
          name: "Income",
          data: [23, 55, 22, 45, 20, 32, 22, 42, 21, 44, 22, 30],
        },
        {
          name: "Expenses",
          data: [40, 35, 66, 28, 38, 55, 45, 70, 55, 69, 46, 49],
        },
      ],
      options: {
        chart: {
          height: 390,
          type: "bar",
          zoom: {
            enabled: false,
          },
          toolbar: {
            show: false,
          },
        },
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: "35%",
            borderRadius: 2,
            borderRadiusApplication: 'end', // 'around', 'end'
            borderRadiusWhenStacked: 'last', // 'all', 'last'
          },
        },
        dataLabels: {
          enabled: false,
        },
        legend: {
          position: "top",
          fontSize: "12px",
          fontFamily: "Inter, sans-serif",
          fontWeight: 600,
        },
        stroke: {
          curve: "smooth",
          width: [5, 5],
        },
        grid: {
          borderColor: "rgba(107 ,114 ,128,0.1)",
        },
        colors: ["rgba(var(--color-primary))", "rgb(203,213,225)"],
        yaxis: {
          title: {
            style: {
              color: "#adb5be",
              fontSize: "12px",
              fontFamily: "Inter, sans-serif",
              fontWeight: 500,
              cssClass: "apexcharts-yaxis-label",
            },
          },
          labels: {
            style: {
              colors: "rgb(107 ,114 ,128)",
              fontSize: "12px",
              fontFamily: "Inter, sans-serif",
              fontWeight: 500,
            },
            formatter: function (y) {
              return y.toFixed(0) + "";
            },
          },
        },
        xaxis: {
          categories: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
          ],
          axisBorder: {
            show: true,
            color: "rgba(119, 119, 142, 0.05)",
            offsetX: 0,
            offsetY: 0,
          },
          axisTicks: {
            show: true,
            borderType: "solid",
            color: "rgba(119, 119, 142, 0.05)",
            offsetX: 0,
            offsetY: 0,
          },
          labels: {
            rotate: -90,
            style: {
              colors: "rgb(107 ,114 ,128)",
              fontSize: "12px",
            },
          },
        },
      },

    };
  }

  render() {
    return (

      <div id="chart">
        <ReactApexChart height={390} width={"100%"} options={this.state.options} series={this.state.series} type="bar" />
      </div>
    );
  }
};
