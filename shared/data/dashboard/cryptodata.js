
import dynamic from "next/dynamic";
import { Component } from "react";
const ReactApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });


//Bitcons

const icon1 = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128">
  <path fill="#f89f36"
    d="M109.8 75.7c-.8-5.7-3.6-10.1-8.6-13-2.3-1.3-4.8-2.2-7.4-3.3.3-.2.5-.4.7-.5 12.5-6.4 11.4-25.7 2.3-32.3-3.7-2.7-7.8-4.4-12.1-5.4-3.1-.7-6.2-1.2-9.4-1.7 0-5.6.1-13.3.1-19.5H63.7c-.1 6.1-.1 13.6-.2 19.1h-9.4c0-5.5.1-13 .1-19.1H42.6c-.1 6.2-.1 13.9-.2 19.4-8-.1-15.7-.1-23.7-.2 0 4.3-.1 8.3-.1 12.5 1.7 0 3.2 0 4.6.1 1.5 0 3 0 4.4.1 4.1.3 6.2 2.6 6.2 6.6-.2 16.7-.4 33.5-.5 50.2 0 3.7-1.6 5.1-5.2 5.1h-7.8c-.8 4.7-1.6 9.2-2.4 13.9 7.9.1 15.7.2 23.7.3 0 6-.1 13.6-.1 19.9h11.7c.1-6.3.1-13.7.2-19.6 3.3.1 6.3.2 9.4.3 0 6-.1 13.3-.1 19.4h11.7c.1-6.3.1-13.7.2-19.5.4-.1.7-.1 1-.2 5.6-.9 11.3-1.4 16.7-2.7 7.1-1.8 12.7-5.9 15.7-12.9 2.1-5.4 2.6-11.1 1.8-17zM54.3 32.9c7.3 0 14.4-.6 21 2.4 4.4 1.9 6.6 5.5 6.3 9.8-.3 4.6-2.9 7.9-7.6 9.4-6.4 2.1-13.1 2-20 1.7.1-7.6.2-15.2.3-23.3zm25.5 58.4c-6.5 2.9-13.3 2.9-20.2 3-1.9 0-3.8-.1-5.9-.1l.3-25.9c8.9 0 17.7-.7 26 3 4.3 1.9 6.8 5.2 6.8 10.1-.1 4.9-2.7 8-7 9.9z" />
</svg>;

const icon2 = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128">
  <path fill="#1e75bc"
    d="M3 99.8C5 94 6.8 88.6 8.8 83.1c.2-.5 1.2-1 1.8-1 3.3-.1 6.6 0 9.9 0h64.6c1.7 0 2.5-.5 3-2.2 3.6-10.6 7.3-21.2 11-31.8.2-.6.3-1.1.6-2H21.4c2-5.9 3.9-11.4 5.9-16.9.2-.4 1-.8 1.5-.8 2-.1 3.9 0 5.9 0 26.5 0 53 .2 79.6-.1 7.9-.1 16.3 6 12.9 17.6-2.5 8.7-5.8 17.1-8.7 25.6-1 2.9-2 5.9-3 8.7-3.7 10.2-11.2 16.3-21.5 19.2-.9.3-1.9.3-2.9.3H5.2c-.6.1-1.3.1-2.2.1z" />
  <path fill="#1e75bc"
    d="M52.6 55.6c-2 5.6-3.9 10.9-5.9 16-.1.4-.9.7-1.4.7H.8c-.2 0-.4-.1-.8-.3 1.9-5.2 3.7-10.3 5.7-15.4.2-.5 1-1 1.5-1h45.4z" />
</svg>;

const icon3 = <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23"
  viewBox="0 0 39 64">
  <g fill="none" fillRule="nonzero">
    <path fill="#0C8312"
      d="M19.6 19.2V.8L39 29.5zM19.6 45.7v18.4L39 35.4zM19.6 34.2V22.5l19 10z" />
    <path fill="#034C03" d="M19.6 42.7v-8.5l19-1.7z" />
    <path fill="#3CB93C"
      d="M19.6 19.2V.8L.2 29.5zM19.6 45.7v18.4L.2 35.4zM19.6 34.2V22.5l-19 10z" />
    <path fill="#166816" d="M19.6 42.7v-8.5l-19-1.7z" />
  </g>
</svg>;

const icon4 = <svg xmlns="http://www.w3.org/2000/svg" id="golem" x="0" y="0"
  version="1.1" viewBox="0 0 128 128" xmlSpace="preserve">
  <path fill="#026990"
    d="M59.5 8.5c5-.1 9.6.8 13.7 3.6 1.8 1.2 3.3 1 4.8-.6C81.3 8 84.7 4.8 88.1 1.4 89.3 0 90.4-.7 92 1c1.4 1.5 1 2.6-.3 3.9-3.4 3.4-6.7 7-10.2 10.4-1.5 1.5-1.7 2.6-.6 4.5 7.7 13.9 3.9 30.2-11.5 37.6-1.5.7-3.1 1-4.7 1.4-1.8.4-2.6 1.4-2.5 3.3.1 4 .1 8 0 11.9-.1 2.1.6 3.1 2.8 3.6 8.3 2 14.1 7 17.8 14.6 3.5 7.4 2.6 20.6-5 28.5-6.4 6.5-17.7 9.3-26.1 5.9-10-4-16.2-12.8-16.3-23.4-.1-12.8 6.8-22 19.2-25.4 1.8-.5 2.9-1.4 2.9-3.4-.1-4.5 0-9.1-.2-13.6 0-.8-1.5-1.9-2.5-2.2-8-2.1-13.9-6.9-17.2-14.5-8-17.4 5.3-36.6 21.9-35.6zm20.3 93.9c0-10.5-9.2-20.2-19.4-20.2-10.7-.2-20.4 9.3-20.6 20-.1 10.6 9.8 20.8 20 20.7 10.8-.1 20.1-9.6 20-20.5zM40.1 33.2c0 11.5 8.9 20.8 20 20.8 10.3 0 19.8-9.6 19.7-20.2 0-10-7.4-20.3-19.7-20.1-11.1.3-19.9 8.6-20 19.5z">
  </path>
</svg>;

export const crypto = [
  { id: 1, icon: icon1, class: "Bitcoin", data: "BTC/USD", data1: "1.343434 BTC", text: "-0.52%", color: "danger", icon1: "ri-arrow-down-line" },
  { id: 2, icon: icon2, class: "Dash", data: "DASH/USD", data1: "1.343434 Dash", text: "+13.52%", color: "success", icon1: "ri-arrow-up-line" },
  { id: 3, icon: icon3, class: "Etherium", data: "ETH/USD", data1: "1.343434 ETH", text: "+13.52%", color: "success", icon1: "ri-arrow-up-line" },
  { id: 4, icon: icon4, class: "Etherium", data: "GLM/USD", data1: "2.253353 GLM", text: "-1.52%", color: "danger", icon1: "ri-arrow-down-line" },
];

//Top Traders 

export const traders = [
  { id: 1, src: "../../assets/img/users/11.jpg", class: "Json Taylor", class1: "Bought 0.008213 Bitcoin using ****9808", data: "0.09251821409", data2: "- BTC", data1: "$1,203.92", class2: "mb-4" },
  { id: 2, src: "../../assets/img/users/4.jpg", class: "Alicia Smith", class1: "Sold - 0.7902400 Litecoin", data: "0.2362333001", data2: "- LTC", data1: "$19,092.56", class2: "mb-4" },
  { id: 3, src: "../../assets/img/users/15.jpg", class: "Branco Eliga", class1: "Bought +12.9092 Euro coin", data: "0.009823487", data2: "- EUROC", data1: "$8,977.46", class2: "mb-4" },
  { id: 4, src: "../../assets/img/users/12.jpg", class: "Alec Carey", class1: "Bought 32.09472944 Dash using wallet", data: "8.88234590", data2: "- DASH", data1: "$9,772.46 ", class2: "mb-4" },
  { id: 5, src: "../../assets/img/users/5.jpg", class: "Sia Linda", class1: "Sent 0.00662 Bitcoin to Ravos Chan", data: "58.6225600", data2: "- BTC", data1: "$9,772.46", class2: "mb-4" },
  { id: 6, src: "../../assets/img/users/8.jpg", class: "Bella Siri", class1: "Sell 0.00662 Gollem to Karan Bhan", data: "62.25635852", data2: "- GLM", data1: "$9,772.46", class2: "mb-4" },
  { id: 7, src: "../../assets/img/users/10.jpg", class: "Ryan Ranolds", class1: "Bought 2.098123 Etherium", data: "190.0092773", data2: "- ETH", data1: "$18,283982.00", class2: "" },
];

//Market trend value

export class Bitcoin extends Component {
  constructor(props) {
    super(props);

    this.state = {

      series: [
        {
          name: "Value",
          data: [
            0, 45, 54, 38, 56, 24, 65, 31, 37, 39, 62, 51, 35, 41, 35, 27, 93, 53,
            61, 27, 54, 43, 19, 46,
          ],
        },
      ],
      options: {
        chart: {
          type: "line",
          height: 20,
          width: 120,
          sparkline: {
            enabled: true,
          },
          dropShadow: {
            enabled: true,
            enabledOnSeries: undefined,
            top: 0,
            left: 0,
            blur: 3,
            color: "#000",
            opacity: 0.1,
          },
        },
        stroke: {
          show: true,
          curve: "smooth",
          lineCap: "butt",
          colors: undefined,
          width: 1.5,
          dashArray: 0,
        },
        tooltip: {
          enabled: false,
        },

        xaxis: {
          axisBorder: {
            show: false,
          },
        },

        colors: ["#28d193"],
      },

    };
  }

  render() {
    return (
      <div>
        <ReactApexChart height={20} width={120} options={this.state.options} series={this.state.series} type="line" />
      </div>
    );
  }
};

export class Etherium extends Component {
  constructor(props) {
    super(props);

    this.state = {

      series: [
        {
          name: "Value",
          data: [
            0, 45, 54, 38, 56, 24, 65, 35, 27, 93, 53, 61, 27, 54, 43, 19, 46, 31,
            37, 39, 62, 51, 35, 41,
          ],
        },
      ],
      options: {
        chart: {
          type: "line",
          height: 20,
          width: 120,
          sparkline: {
            enabled: true,
          },
          dropShadow: {
            enabled: true,
            enabledOnSeries: undefined,
            top: 0,
            left: 0,
            blur: 3,
            color: "#000",
            opacity: 0.1,
          },
        },
        stroke: {
          show: true,
          curve: "smooth",
          lineCap: "butt",
          colors: undefined,
          width: 1.5,
          dashArray: 0,
        },
        tooltip: {
          enabled: false,
        },
        xaxis: {
          axisBorder: {
            show: false,
          },
        },

        colors: ["#ff534d"],
      }
    };
  }

  render() {
    return (

      <div>
        <ReactApexChart height={20} width={120} options={this.state.options} series={this.state.series} type="line" />
      </div>
    );
  }
};

export class Dash extends Component {
  constructor(props) {
    super(props);

    this.state = {

      series: [
        {
          name: "Value",
          data: [
            61, 27, 54, 43, 19, 46, 31, 37, 39, 0, 45, 54, 38, 56, 24, 65, 35, 27,
            93, 53, 62, 51, 35, 41,
          ],
        },
      ],
      options: {
        chart: {
          type: "line",
          height: 20,
          width: 120,
          sparkline: {
            enabled: true,
          },
          dropShadow: {
            enabled: true,
            enabledOnSeries: undefined,
            top: 0,
            left: 0,
            blur: 3,
            color: "#000",
            opacity: 0.1,
          },
        },
        stroke: {
          show: true,
          curve: "smooth",
          lineCap: "butt",
          colors: undefined,
          width: 1.5,
          dashArray: 0,
        },
        tooltip: {
          enabled: false,
        },
        xaxis: {
          axisBorder: {
            show: false,
          },
        },

        colors: ["#28d193"],
      }
    };
  }

  render() {
    return (

      <div>
        <ReactApexChart height={20} width={120} options={this.state.options} series={this.state.series} type="line" />
      </div>
    );
  }
};

export class Ripple extends Component {
  constructor(props) {
    super(props);

    this.state = {

      series: [
        {
          name: "Value",
          data: [
            61, 27, 54, 43, 19, 56, 24, 65, 35, 27, 93, 53, 46, 31, 37, 39, 0, 45,
            54, 38, 62, 51, 35, 41,
          ],
        },
      ],
      options: {
        chart: {
          type: "line",
          height: 20,
          width: 120,
          sparkline: {
            enabled: true,
          },
          dropShadow: {
            enabled: true,
            enabledOnSeries: undefined,
            top: 0,
            left: 0,
            blur: 3,
            color: "#000",
            opacity: 0.1,
          },
        },
        stroke: {
          show: true,
          curve: "smooth",
          lineCap: "butt",
          colors: undefined,
          width: 1.5,
          dashArray: 0,
        },
        tooltip: {
          enabled: false,
        },
        xaxis: {
          axisBorder: {
            show: false,
          },
        },

        colors: ["#28d193"],
      }
    };
  }

  render() {
    return (

      <div>
        <ReactApexChart height={20} width={120} options={this.state.options} series={this.state.series} type="line" />
      </div>
    );
  }
};

export class Iota extends Component {
  constructor(props) {
    super(props);

    this.state = {

      series: [
        {
          name: "Value",
          data: [
            61, 27, 54, 37, 39, 0, 45, 54, 38, 62, 51, 35, 41, 43, 19, 56, 24, 65,
            35, 27, 93, 53, 46, 31,
          ],
        },
      ],
      options: {
        chart: {
          type: "line",
          height: 20,
          width: 120,
          sparkline: {
            enabled: true,
          },
          dropShadow: {
            enabled: true,
            enabledOnSeries: undefined,
            top: 0,
            left: 0,
            blur: 3,
            color: "#000",
            opacity: 0.1,
          },
        },
        stroke: {
          show: true,
          curve: "smooth",
          lineCap: "butt",
          colors: undefined,
          width: 1.5,
          dashArray: 0,
        },
        tooltip: {
          enabled: false,
        },
        xaxis: {
          axisBorder: {
            show: false,
          },
        },

        colors: ["#ff534d"],
      }
    };
  }

  render() {
    return (

      <div>
        <ReactApexChart height={20} width={120} options={this.state.options} series={this.state.series} type="line" />
      </div>
    );
  }
};

export class Neo extends Component {
  constructor(props) {
    super(props);

    this.state = {

      series: [
        {
          name: "Value",
          data: [
            62, 51, 35, 41, 43, 19, 56, 24, 65, 35, 27, 93, 53, 46, 31, 61, 27, 54,
            37, 39, 0, 45, 54, 38,
          ],
        },
      ],
      options: {
        chart: {
          type: "line",
          height: 20,
          width: 120,
          sparkline: {
            enabled: true,
          },
          dropShadow: {
            enabled: true,
            enabledOnSeries: undefined,
            top: 0,
            left: 0,
            blur: 3,
            color: "#000",
            opacity: 0.1,
          },
        },
        stroke: {
          show: true,
          curve: "smooth",
          lineCap: "butt",
          colors: undefined,
          width: 1.5,
          dashArray: 0,
        },
        tooltip: {
          enabled: false,
        },
        xaxis: {
          axisBorder: {
            show: false,
          },
        },

        colors: ["#ff534d"],
      }
    };
  }

  render() {
    return (

      <div>
        <ReactApexChart height={20} width={120} options={this.state.options} series={this.state.series} type="line" />
      </div>
    );
  }
};
//Sales Overview

export class SalesOverview extends Component {
  constructor(props) {
    super(props);

    this.state = {

      series: [
        {
          data: [
            {
              x: new Date(1538778600000),
              y: [6629.81, 6650.5, 6623.04, 6633.33],
            },
            {
              x: new Date(1538780400000),
              y: [6632.01, 6643.59, 6620, 6630.11],
            },
            {
              x: new Date(1538782200000),
              y: [6630.71, 6648.95, 6623.34, 6635.65],
            },
            {
              x: new Date(1538784000000),
              y: [6635.65, 6651, 6629.67, 6638.24],
            },
            {
              x: new Date(1538785800000),
              y: [6638.24, 6640, 6620, 6624.47],
            },
            {
              x: new Date(1538787600000),
              y: [6624.53, 6636.03, 6621.68, 6624.31],
            },
            {
              x: new Date(1538789400000),
              y: [6624.61, 6632.2, 6617, 6626.02],
            },
            {
              x: new Date(1538791200000),
              y: [6627, 6627.62, 6584.22, 6603.02],
            },
            {
              x: new Date(1538793000000),
              y: [6605, 6608.03, 6598.95, 6604.01],
            },
            {
              x: new Date(1538794800000),
              y: [6604.5, 6614.4, 6602.26, 6608.02],
            },
            {
              x: new Date(1538796600000),
              y: [6608.02, 6610.68, 6601.99, 6608.91],
            },
            {
              x: new Date(1538798400000),
              y: [6608.91, 6618.99, 6608.01, 6612],
            },
            {
              x: new Date(1538800200000),
              y: [6612, 6615.13, 6605.09, 6612],
            },
            {
              x: new Date(1538802000000),
              y: [6612, 6624.12, 6608.43, 6622.95],
            },
            {
              x: new Date(1538803800000),
              y: [6623.91, 6623.91, 6615, 6615.67],
            },
            {
              x: new Date(1538805600000),
              y: [6618.69, 6618.74, 6610, 6610.4],
            },
            {
              x: new Date(1538807400000),
              y: [6611, 6622.78, 6610.4, 6614.9],
            },
            {
              x: new Date(1538809200000),
              y: [6614.9, 6626.2, 6613.33, 6623.45],
            },
            {
              x: new Date(1538811000000),
              y: [6623.48, 6627, 6618.38, 6620.35],
            },
            {
              x: new Date(1538812800000),
              y: [6619.43, 6620.35, 6610.05, 6615.53],
            },
            {
              x: new Date(1538814600000),
              y: [6615.53, 6617.93, 6610, 6615.19],
            },
            {
              x: new Date(1538816400000),
              y: [6615.19, 6621.6, 6608.2, 6620],
            },
            {
              x: new Date(1538818200000),
              y: [6619.54, 6625.17, 6614.15, 6620],
            },
            {
              x: new Date(1538820000000),
              y: [6620.33, 6634.15, 6617.24, 6624.61],
            },
            {
              x: new Date(1538821800000),
              y: [6625.95, 6626, 6611.66, 6617.58],
            },
            {
              x: new Date(1538823600000),
              y: [6619, 6625.97, 6595.27, 6598.86],
            },
            {
              x: new Date(1538825400000),
              y: [6598.86, 6598.88, 6570, 6587.16],
            },
            {
              x: new Date(1538827200000),
              y: [6588.86, 6600, 6580, 6593.4],
            },
            {
              x: new Date(1538829000000),
              y: [6593.99, 6598.89, 6585, 6587.81],
            },
            {
              x: new Date(1538830800000),
              y: [6587.81, 6592.73, 6567.14, 6578],
            },
            {
              x: new Date(1538832600000),
              y: [6578.35, 6581.72, 6567.39, 6579],
            },
            {
              x: new Date(1538834400000),
              y: [6579.38, 6580.92, 6566.77, 6575.96],
            },
            {
              x: new Date(1538836200000),
              y: [6575.96, 6589, 6571.77, 6588.92],
            },
            {
              x: new Date(1538838000000),
              y: [6588.92, 6594, 6577.55, 6589.22],
            },
            {
              x: new Date(1538839800000),
              y: [6589.3, 6598.89, 6589.1, 6596.08],
            },
            {
              x: new Date(1538841600000),
              y: [6597.5, 6600, 6588.39, 6596.25],
            },
            {
              x: new Date(1538843400000),
              y: [6598.03, 6600, 6588.73, 6595.97],
            },
            {
              x: new Date(1538845200000),
              y: [6595.97, 6602.01, 6588.17, 6602],
            },
            {
              x: new Date(1538847000000),
              y: [6602, 6607, 6596.51, 6599.95],
            },
            {
              x: new Date(1538848800000),
              y: [6600.63, 6601.21, 6590.39, 6591.02],
            },
            {
              x: new Date(1538850600000),
              y: [6591.02, 6603.08, 6591, 6591],
            },
            {
              x: new Date(1538852400000),
              y: [6591, 6601.32, 6585, 6592],
            },
            {
              x: new Date(1538854200000),
              y: [6593.13, 6596.01, 6590, 6593.34],
            },
            {
              x: new Date(1538856000000),
              y: [6593.34, 6604.76, 6582.63, 6593.86],
            },
            {
              x: new Date(1538857800000),
              y: [6593.86, 6604.28, 6586.57, 6600.01],
            },
            {
              x: new Date(1538859600000),
              y: [6601.81, 6603.21, 6592.78, 6596.25],
            },
            {
              x: new Date(1538861400000),
              y: [6596.25, 6604.2, 6590, 6602.99],
            },
            {
              x: new Date(1538863200000),
              y: [6602.99, 6606, 6584.99, 6587.81],
            },
            {
              x: new Date(1538865000000),
              y: [6587.81, 6595, 6583.27, 6591.96],
            },
            {
              x: new Date(1538866800000),
              y: [6591.97, 6596.07, 6585, 6588.39],
            },
            {
              x: new Date(1538868600000),
              y: [6587.6, 6598.21, 6587.6, 6594.27],
            },
            {
              x: new Date(1538870400000),
              y: [6596.44, 6601, 6590, 6596.55],
            },
            {
              x: new Date(1538872200000),
              y: [6598.91, 6605, 6596.61, 6600.02],
            },
            {
              x: new Date(1538874000000),
              y: [6600.55, 6605, 6589.14, 6593.01],
            },
            {
              x: new Date(1538875800000),
              y: [6593.15, 6605, 6592, 6603.06],
            },
            {
              x: new Date(1538877600000),
              y: [6603.07, 6604.5, 6599.09, 6603.89],
            },
            {
              x: new Date(1538879400000),
              y: [6604.44, 6604.44, 6600, 6603.5],
            },
            {
              x: new Date(1538881200000),
              y: [6603.5, 6603.99, 6597.5, 6603.86],
            },
            {
              x: new Date(1538883000000),
              y: [6603.85, 6605, 6600, 6604.07],
            },
            {
              x: new Date(1538884800000),
              y: [6604.98, 6606, 6604.07, 6606],
            },
          ],
        },
      ],
      options: {
        chart: {
          type: "candlestick",
          height: 330,
          toolbar: {
            show: false,
          },
        },
        plotOptions: {
          candlestick: {
            colors: {
              upward: "rgba(var(--color-primary))",
              downward: "#60a5fa",
            },
          },
        },
        grid: {
          borderColor: "rgba(107 ,114 ,128,0.1)",
        },
        title: {
          align: "left",
        },
        xaxis: {
          type: "datetime",
          labels: {
            rotate: -90,
            style: {
              colors: "rgb(107 ,114 ,128)",
              fontSize: "12px",
            },
          },
        },
        yaxis: {
          tooltip: {
            enabled: true,
          },
          labels: {
            rotate: -90,
            style: {
              colors: "rgb(107 ,114 ,128)",
              fontSize: "10px",
            },
          },
        },
      },
      selection: "one_year",
    };

  }

  render() {
    return (

      <div className="box">
        <div className="box-header">
          <div className="sm:flex justify-between space-y-2 sm:space-y-0">
            <h5 className="box-title my-auto">Sales Overview</h5>
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
        <div className="box-body p-0">
          <div className="sm:flex flex-wrap p-4 border-b border-dashed border-gray-200 dark:border-white/10">
            <div className="ltr:mr-3 rtl:ml-3">
              <span className="avatar avatar-sm rounded-full p-2 bg-gray-100 dark:bg-black/20">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128">
                  <path fill="#f89f36" d="M109.8 75.7c-.8-5.7-3.6-10.1-8.6-13-2.3-1.3-4.8-2.2-7.4-3.3.3-.2.5-.4.7-.5 12.5-6.4 11.4-25.7 2.3-32.3-3.7-2.7-7.8-4.4-12.1-5.4-3.1-.7-6.2-1.2-9.4-1.7 0-5.6.1-13.3.1-19.5H63.7c-.1 6.1-.1 13.6-.2 19.1h-9.4c0-5.5.1-13 .1-19.1H42.6c-.1 6.2-.1 13.9-.2 19.4-8-.1-15.7-.1-23.7-.2 0 4.3-.1 8.3-.1 12.5 1.7 0 3.2 0 4.6.1 1.5 0 3 0 4.4.1 4.1.3 6.2 2.6 6.2 6.6-.2 16.7-.4 33.5-.5 50.2 0 3.7-1.6 5.1-5.2 5.1h-7.8c-.8 4.7-1.6 9.2-2.4 13.9 7.9.1 15.7.2 23.7.3 0 6-.1 13.6-.1 19.9h11.7c.1-6.3.1-13.7.2-19.6 3.3.1 6.3.2 9.4.3 0 6-.1 13.3-.1 19.4h11.7c.1-6.3.1-13.7.2-19.5.4-.1.7-.1 1-.2 5.6-.9 11.3-1.4 16.7-2.7 7.1-1.8 12.7-5.9 15.7-12.9 2.1-5.4 2.6-11.1 1.8-17zM54.3 32.9c7.3 0 14.4-.6 21 2.4 4.4 1.9 6.6 5.5 6.3 9.8-.3 4.6-2.9 7.9-7.6 9.4-6.4 2.1-13.1 2-20 1.7.1-7.6.2-15.2.3-23.3zm25.5 58.4c-6.5 2.9-13.3 2.9-20.2 3-1.9 0-3.8-.1-5.9-.1l.3-25.9c8.9 0 17.7-.7 26 3 4.3 1.9 6.8 5.2 6.8 10.1-.1 4.9-2.7 8-7 9.9z" />
                </svg>
              </span>
            </div>
            <div className="sm:flex flex-wrap justify-evenly flex-auto">
              <div className="sm:m-0 m-2">
                <span className="text-gray-500 dark:text-white/70">Symbol</span>
                <p className="font-semibold mb-0">BTC</p>
              </div>
              <div className="sm:m-0 m-2">
                <span className="text-gray-500 dark:text-white/70">Price Benchmark</span>
                <p className="font-semibold mb-0">128.00%</p>
              </div>
              <div className="sm:m-0 m-2">
                <span className="text-gray-500 dark:text-white/70">Price (USD)</span>
                <p className="text-success font-semibold mb-0">$4,253.49</p>
              </div>
              <div className="sm:m-0 m-2">
                <span className="text-gray-500 dark:text-white/70">Change (24H)</span>
                <p className="text-danger font-semibold mb-0">-0.24%</p>
              </div>
              <div className="sm:m-0 m-2">
                <span className="text-gray-500 dark:text-white/70">Market Cap</span>
                <p className="font-semibold mb-0">$179.12B</p>
              </div>
            </div>
          </div>

          <div id="crypto">
            <ReactApexChart className="p-4" height={330} width={"100%"} options={this.state.options} series={this.state.series} type="candlestick" />
          </div>

        </div>
      </div>

    );
  }
}

//Select2

export const CurrencyConverter = [
  { value: "BTC", label: "BTC" },
  { value: "ETH", label: "ETH" },
  { value: "XRP", label: "XRP" },
  { value: "DASH", label: "DASH" },
  { value: "NEO", label: "NEO" },
  { value: "LTC", label: "LTC" },
  { value: "BSD", label: "BSD" },
];
