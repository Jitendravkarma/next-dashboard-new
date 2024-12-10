
import dynamic from "next/dynamic";
import { Component } from "react";
const ReactApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });

//Acceptance Ratio

export class ApplicationsOverview extends Component {
  constructor(props) {
    super(props);

    this.state = {

      series: [
        {
          name: "Total Candidates",
          type: "column",
          data: [20, 38, 38, 72, 55, 63, 43, 76, 55, 80, 40, 80],
        },
        {
          name: "Total Candidates",
          type: "area",
          data: [85, 65, 75, 38, 85, 35, 62, 40, 40, 64, 50, 89],
        },
        {
          name: "Shortlisted",
          type: "line",
          data: [25, 48, 48, 82, 65, 73, 53, 86, 65, 90, 50, 90],
        },
      ],
      options: {
        chart: {
          height: 240,
          type: "line",
          stacked: false,
          zoom: {
            enabled: false,
          },
          toolbar: {
            show: false,
          },
        },
        grid: {
          borderColor: "rgba(107 ,114 ,128,0.1)",
        },
        colors: ["rgba(var(--color-primary))", "rgba(203,213,225, 0.3)", "rgb(96, 165 ,250)"],
        legend: {
          show: false,
        },
        stroke: {
          width: [0, 0, 2],
          curve: "smooth",
        },
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: "20%",
            borderRadius: 5,
            borderRadiusApplication: 'end', // 'around', 'end'
            borderRadiusWhenStacked: 'last', // 'all', 'last'
          },
        },

        fill: {
          opacity: [0.85, 0.25, 0.1],
          gradient: {
            inverseColors: false,
            shade: "light",
            type: "vertical",
            opacityFrom: 0.85,
            opacityTo: 0.25,
            stops: [0, 100, 100, 100],
          },
        },
        markers: {
          size: 0,
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

  };

  render() {
    return (

      <div>
        <ReactApexChart className="px-4 sm:mt-0 mt-3" height={240} width={"100%"} options={this.state.options} series={this.state.series} type="line" />
      </div>

    );
  }
}

//Acceptance Ratio

export class AcceptanceRatio extends Component {
  constructor(props) {
    super(props);

    this.state = {

      series: [1754, 1234],
      labels: ["Accepted", "Rejected"],
      options: {
        chart: {
          height: 220,
          type: "donut",
          dropShadow: {
            enabled: true,
            enabledOnSeries: undefined,
            top: 5,
            left: 0,
            blur: 3,
            color: "#525050",
            opacity: 0.1,
          },
        },
        dataLabels: {
          enabled: false,
        },

        legend: {
          show: false,
        },
        stroke: {
          show: true,
          curve: "smooth",
          lineCap: "round",
          width: 0,
          dashArray: 0,
        },
        plotOptions: {
          pie: {
            expandOnClick: false,
            donut: {
              size: "90%",
              background: "transparent",
              labels: {
                show: true,
                name: {
                  show: true,
                  fontSize: "20px",
                  color: "#495057",
                  offsetY: -4,
                },
                value: {
                  show: true,
                  fontSize: "18px",
                  color: '#596478',
                  offsetY: 8,
                  formatter: function (val) {
                    return val + "%";
                  },
                },
                total: {
                  show: true,
                  showAlways: true,
                  label: "Total",
                  fontSize: "22px",
                  fontWeight: 600,
                  color: "#6b778c",
                },
              },
            },
          },
        },

        colors: ["rgba(var(--color-primary))", "#60a5fa"],
      },

    };

  };

  render() {
    return (

      <div>
        <ReactApexChart className="p-4  border-b border-dashed border-gray-200 dark:border-white/10" height={240} width={"100%"} options={this.state.options} series={this.state.series} type="donut" />
      </div>

    );
  }
}
