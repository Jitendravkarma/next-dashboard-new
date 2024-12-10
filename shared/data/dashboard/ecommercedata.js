
import dynamic from "next/dynamic";
import { Component } from "react";
const ReactApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });

//Orders

const icon1 = <svg xmlns="http://www.w3.org/2000/svg" className="fill-white svg1" height="24px"
  viewBox="0 0 24 24" width="24px" fill="#000000">
  <path d="M0 0h24v24H0V0z" fill="none" />
  <path
    d="M15.55 13c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.37-.66-.11-1.48-.87-1.48H5.21l-.94-2H1v2h2l3.6 7.59-1.35 2.44C4.52 15.37 5.48 17 7 17h12v-2H7l1.1-2h7.45zM6.16 6h12.15l-2.76 5H8.53L6.16 6zM7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z" />
</svg>;

const icon2 = <svg xmlns="http://www.w3.org/2000/svg" className="fill-white svg2"
  enableBackground="new 0 0 24 24" height="24px" viewBox="0 0 24 24"
  width="24px" fill="#000000">
  <g><rect fill="none" height="24" width="24"></rect>
    <path d="M18,6h-2c0-2.21-1.79-4-4-4S8,3.79,8,6H6C4.9,6,4,6.9,4,8v12c0,1.1,0.9,2,2,2h12c1.1,0,2-0.9,2-2V8C20,6.9,19.1,6,18,6z M12,4c1.1,0,2,0.9,2,2h-4C10,4.9,10.9,4,12,4z M18,20H6V8h2v2c0,0.55,0.45,1,1,1s1-0.45,1-1V8h4v2c0,0.55,0.45,1,1,1s1-0.45,1-1V8 h2V20z">
    </path></g>
</svg>;

const icon3 = <svg xmlns="http://www.w3.org/2000/svg" className="fill-white svg3" height="24px"
  viewBox="0 0 24 24" width="24px" fill="#000000">
  <path d="M0 0h24v24H0V0z" fill="none" />
  <path
    d="M12 6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2m0 10c2.7 0 5.8 1.29 6 2H6c.23-.72 3.31-2 6-2m0-12C9.79 4 8 5.79 8 8s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 10c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
</svg>;

const icon4 = <svg xmlns="http://www.w3.org/2000/svg" className="fill-white svg4" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
  <path d="M0 0h24v24H0V0z" fill="none" />
  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.31-8.86c-1.77-.45-2.34-.94-2.34-1.67 0-.84.79-1.43 2.1-1.43 1.38 0 1.9.66 1.94 1.64h1.71c-.05-1.34-.87-2.57-2.49-2.97V5H10.9v1.69c-1.51.32-2.72 1.3-2.72 2.81 0 1.79 1.49 2.69 3.66 3.21 1.95.46 2.34 1.15 2.34 1.87 0 .53-.39 1.39-2.1 1.39-1.6 0-2.23-.72-2.32-1.64H8.04c.1 1.7 1.36 2.66 2.86 2.97V19h2.34v-1.67c1.52-.29 2.72-1.16 2.73-2.77-.01-2.2-1.9-2.96-3.66-3.42z" />
</svg>;

const icon5 = <svg xmlns="http://www.w3.org/2000/svg" className="fill-white svg5" enableBackground="new 0 0 24 24" height="24px" viewBox="0 0 24 24"
  width="24px" fill="#000000">
  <path d="M0,0h24v24H0V0z" fill="none" />
  <g>
    <path
      d="M19.5,3.5L18,2l-1.5,1.5L15,2l-1.5,1.5L12,2l-1.5,1.5L9,2L7.5,3.5L6,2v14H3v3c0,1.66,1.34,3,3,3h12c1.66,0,3-1.34,3-3V2 L19.5,3.5z M15,20H6c-0.55,0-1-0.45-1-1v-1h10V20z M19,19c0,0.55-0.45,1-1,1s-1-0.45-1-1v-3H8V5h11V19z" />
    <rect height="2" width="6" x="9" y="7" />
    <rect height="2" width="2" x="16" y="7" />
    <rect height="2" width="6" x="9" y="10" />
    <rect height="2" width="2" x="16" y="10" />
  </g>
</svg>;

const icon6 = <svg xmlns="http://www.w3.org/2000/svg" className="fill-white svg6" height="24px"
  viewBox="0 0 24 24" width="24px" fill="#000000">
  <path d="M0 0h24v24H0V0z" fill="none" />
  <path
    d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z" />
</svg>;

export const ecommerceorders = [

  { id: 1, icon: icon1, class: "Total Orders", text: "12,088", data: "Increased by", data1: "+12.2%", color: "primary/10", color1: "success" },
  { id: 2, icon: icon2, class: "Total Sales", text: "10,500", data: "Decreased by", data1: "-1.41%", color: "secondary/10", color1: "danger" },
  { id: 3, icon: icon3, class: "Total Visitors", text: "2,56,259", data: "Increased by", data1: "+2.5%", color: "danger/10", color1: "success" },
  { id: 4, icon: icon4, class: "Total Income", text: "$69,270", data: "Increased by", data1: "+2.58%", color: "warning/10", color1: "success" },
  { id: 5, icon: icon5, class: "Total Expenses", text: "$21,520", data: "Decreased by ", data1: "-14.9%", color: "info/10", color1: "danger" },
  { id: 6, icon: icon6, class: "Total Products", text: "45,280", data: "Increased by ", data1: "+1.31%", color: "success/10", color1: "success" },

];

//Order Vs Sales

export class OrderVsSales extends Component {
  constructor(props) {
    super(props);

    this.state = {

      series: [{
        name: "Orders",
        type: "bar",
        data: [23, 55, 22, 45, 20, 32, 22, 42, 21, 44, 22, 30],
      },
      {
        name: "Sales",
        type: "line",
        data: [40, 35, 66, 28, 38, 55, 45, 70, 55, 69, 46, 49],
      },],
      options: {
        chart: {
          height: 310,
          // type: "area",
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
          width: [5, 1],
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
      }
    };

  };

  render() {
    return (

      <div className="box">
        <div className="box-header">
          <div className="sm:flex justify-between">
            <h5 className="box-title my-auto">Order Vs Sales</h5>
            <div className="inline-flex rounded-md shadow-sm">
              <button type="button" className="ti-btn-group !text-xs !border-0 !py-2 !px-3 ti-btn-primary">1D</button>
              <button type="button" className="ti-btn-group !text-xs !border-0 !py-2 !px-3 ti-btn-soft-primary">1W</button>
              <button type="button" className="ti-btn-group !text-xs !border-0 !py-2 !px-3 ti-btn-soft-primary">1M</button>
              <button type="button" className="ti-btn-group !text-xs !border-0 !py-2 !px-3 ti-btn-soft-primary">3M</button>
              <button type="button" className="ti-btn-group !text-xs !border-0 !py-2 !px-3 ti-btn-soft-primary">6M</button>
              <button type="button" className="ti-btn-group !text-xs !border-0 !py-2 !px-3 ti-btn-soft-primary">1Y</button>
            </div>
          </div>
        </div>
        <div className="box-body">
          <div id="chart">
            <ReactApexChart height={310} options={this.state.options} series={this.state.series} width={"100%"} type="bar" />
          </div>
        </div>
      </div>

    );
  }
}
