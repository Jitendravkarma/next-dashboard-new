

import dynamic from "next/dynamic";
import { Component } from "react";
const ReactApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });

export class TotalAmount extends Component {
  constructor(props) {
    super(props);

    this.state = {

      series: [
        {
          data: [34, 55, 41, 67, 22, 43, 21],
        },
      ],
      options: {
        chart: {
          sparkline: {
            enabled: true,
          },
          dropShadow: {
            enabled: true,
            enabledOnSeries: undefined,
            opacity: 0.3,
          },
          type: "line",
          height: 50,
          width: 100,
        },
        tooltip: {
          x: {
            show: false,
          },
          y: {
            title: {
              formatter: function () {
                return "";
              },
            },
          },
          marker: {
            show: false,
          },
        },
        colors: ["#5a66f1"],
        stroke: {
          width: [1.2],
          curve: "smooth",
        },
        xaxis: {
          crosshairs: {
            show: false,
          },
        },
        fill: {
          type: "gradient",
          gradient: {
            opacityFrom: 0.9,
            opacityTo: 0.9,
            stops: [0, 98],
          },
        },
      }
    };
  }

  render() {
    return (

      <div>
        <ReactApexChart height={50} width={100} className="min-w-fit" options={this.state.options} series={this.state.series} type="line" />
      </div>
    );
  }
};

export class InvestmentNum extends Component {
  constructor(props) {
    super(props);

    this.state = {

      series: [
        {
          data: [34, 55, 41, 47, 32, 53, 31],
        },
      ],
      options: {
        chart: {
          sparkline: {
            enabled: true,
          },
          dropShadow: {
            enabled: true,
            enabledOnSeries: undefined,
            opacity: 0.3,
          },
          type: "line",
          height: 50,
          width: 100,
        },
        tooltip: {
          x: {
            show: false,
          },
          y: {
            title: {
              formatter: function () {
                return "";
              },
            },
          },
          marker: {
            show: false,
          },
        },
        colors: ["#60a5fa"],
        stroke: {
          width: [1.2],
          curve: ["smooth"],
        },
        xaxis: {
          crosshairs: {
            show: false,
          },
        },
        fill: {
          type: "gradient",
          gradient: {
            opacityFrom: 0.9,
            opacityTo: 0.9,
            stops: [0, 98],
          },
        },
      }
    };
  }

  render() {
    return (

      <div>
        <ReactApexChart height={50} width={100} className="min-w-fit" options={this.state.options} series={this.state.series} type="line" />
      </div>
    );
  }
};

export class PortfolioValue extends Component {
  constructor(props) {
    super(props);

    this.state = {

      series: [
        {
          data: [31, 53, 32, 47, 41, 55, 44],
        },
      ],
      options: {
        chart: {
          sparkline: {
            enabled: true,
          },
          dropShadow: {
            enabled: true,
            enabledOnSeries: undefined,
            opacity: 0.3,
          },
          type: "line",
          height: 50,
          width: 100,
        },
        tooltip: {
          x: {
            show: false,
          },
          y: {
            title: {
              formatter: function () {
                return "";
              },
            },
          },
          marker: {
            show: false,
          },
        },
        colors: ["#eab308"],
        stroke: {
          width: [1.2],
          curve: ["smooth"],
        },
        xaxis: {
          crosshairs: {
            show: false,
          },
        },
        fill: {
          type: "gradient",
          gradient: {
            opacityFrom: 0.9,
            opacityTo: 0.9,
            stops: [0, 98],
          },
        },
      },
    };
  }

  render() {
    return (

      <div>
        <ReactApexChart height={50} width={100} className="min-w-fit" options={this.state.options} series={this.state.series} type="line" />
      </div>
    );
  }
};

export class ReturnsRate extends Component {
  constructor(props) {
    super(props);

    this.state = {

      series: [
        {
          data: [21, 43, 22, 45, 35, 55, 34],
        },
      ],
      options: {
        chart: {
          sparkline: {
            enabled: true,
          },
          dropShadow: {
            enabled: true,
            enabledOnSeries: undefined,
            opacity: 0.3,
          },
          type: "line",
          height: 50,
          width: 100,
        },
        tooltip: {
          x: {
            show: false,
          },
          y: {
            title: {
              formatter: function () {
                return "";
              },
            },
          },
          marker: {
            show: false,
          },
        },
        colors: ["#f43f5e"],
        stroke: {
          width: [1.5],
          curve: ["smooth"],
        },
        xaxis: {
          crosshairs: {
            show: false,
          },
        },
        fill: {
          type: "gradient",
          gradient: {
            opacityFrom: 0.9,
            opacityTo: 0.9,
            stops: [0, 98],
          },
        },
      },
    };
  }

  render() {
    return (

      <div>
        <ReactApexChart height={50} width={100} className="min-w-fit" options={this.state.options} series={this.state.series} type="line" />
      </div>
    );
  }
};
//Total Investments

export class Investments extends Component {
  constructor(props) {
    super(props);

    this.state = {

      series: [
        {
          name: "Invested Value",
          type: "column",
          data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30],
        },
        {
          name: "Total Returns",
          type: "area",
          data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43],
        },],
      options: {
        chart: {
          height: 310,
          type: "area",
          stacked: false,
          zoom: {
            enabled: false,
          },
          toolbar: {
            show: false,
          },
        },
        stroke: {
          width: [0, 0],
          curve: "smooth",
        },
        grid: {
          borderColor: "rgba(107 ,114 ,128,0.1)",
        },
        colors: ["rgb(90,102,241)", "rgb(203,213,225)"],
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: "40%",
            // endingShape: "rounded",
            borderRadius: 5,
            borderRadiusApplication: 'end', // 'around', 'end'
            borderRadiusWhenStacked: 'last', // 'all', 'last'
          },
        },
        dataLabels: {
          enabled: false,
        },
        legend: {
          show: false,
        },
        fill: {
          opacity: [0.85, 0.25, 1],
          gradient: {
            inverseColors: false,
            // shade: ["dark", "light"],
            type: "vertical",
            opacityFrom: [1, 0.85],
            opacityTo: [1, 0.55],
            stops: [0, 100, 100, 100],
          },
        },
        yaxis: {
          title: {
            style: {
              color: "#adb5be",
              fontSize: "14px",
              fontFamily: "Inter, sans-serif",
              fontWeight: 600,
              cssClass: "apexcharts-yaxis-label",
            },
          },
          labels: {
            style: {
              colors: "rgb(107 ,114 ,128)",
              fontSize: "12px",
            },
            formatter: function (y) {
              return y.toFixed(0) + "";
            },
          },
        },
        xaxis: {
          // type: "month",
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
            // width: 6,
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

      <div className="box">
        <div className="box-header">
          <div className="sm:flex justify-between">
            <h5 className="box-title my-auto">Total Investments</h5>
            <div className="inline-flex rounded-md shadow-sm">
              <button type="button" className="ti-btn-group !text-xs !border-0 !py-2 !px-3 ti-btn-primary"> 1D </button>
              <button type="button" className="ti-btn-group !text-xs !border-0 !py-2 !px-3 ti-btn-soft-primary"> 1W </button>
              <button type="button" className="ti-btn-group !text-xs !border-0 !py-2 !px-3 ti-btn-soft-primary"> 1M </button>
              <button type="button" className="ti-btn-group !text-xs !border-0 !py-2 !px-3 ti-btn-soft-primary"> 3M </button>
              <button type="button" className="ti-btn-group !text-xs !border-0 !py-2 !px-3 ti-btn-soft-primary"> 6M </button>
              <button type="button" className="ti-btn-group !text-xs !border-0 !py-2 !px-3 ti-btn-soft-primary"> 1Y </button>
            </div>
          </div>
        </div>
        <div className="box-body">
          <div className="sm:flex justify-between items-center text-sm text-center mb-4">
            <div className="sm:flex items-center mb-4 sm:mb-0 space-y-4 sm:space-y-0">
              <div className="ltr:mr-6 rtl:ml-6">
                <span className="text-gray-500 dark:text-white/70">Invested Value</span>
                <p className="mt-1 mb-0">$1,290.94 <span className="ltr:ml-1 rtl:mr-1 text-success"><i className="ti ti-trending-up"></i> 1.22%</span></p>
              </div>
              <div className="ltr:mr-0 rtl:ml-0">
                <span className="text-gray-500 dark:text-white/70">Total Returns</span>
                <p className="mt-1 mb-0">$25,458.20 <span className="ltr:ml-1 rtl:mr-1 text-success"><i className="ti ti-trending-up"></i> 12.22%</span></p>
              </div>
            </div>
            <div className="sm:flex items-center space-y-4 sm:space-y-0">
              <div className="ltr:mr-6 rtl:ml-6">
                <span className="text-gray-500 dark:text-white/70">Today Change</span>
                <p className="mt-1 mb-0">$112.09</p>
              </div>
              <div className="ltr:mr-0 rtl:ml-0">
                <span className="text-gray-500 dark:text-white/70">Change In %</span>
                <p className="mt-1 mb-0">+0.01% <span className="ltr:ml-1 rtl:mr-1 text-success"><i className="ti ti-trending-up"></i> 0.03%</span></p>
              </div>
            </div>
          </div>
          <div>
            <ReactApexChart height={313} width={"100%"} options={this.state.options} series={this.state.series} type="area" />
          </div>
        </div>
      </div>
    );
  }
}
