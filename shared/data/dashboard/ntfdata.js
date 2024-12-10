
import dynamic from "next/dynamic";
import { Component, Fragment } from "react";
const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

//Personal Listings

export const Listings = [
  {
    id: 1,
    src: "../../assets/img/nft-images/8.png",
    class: "Kakasha Si",
    class1: "@sensei011",
    class3: "0.45%",
    data: "1.75BTC",
    color: "success",
  },
  {
    id: 2,
    src: "../../assets/img/nft-images/15.png",
    class: "Naruto Uzumaki",
    class1: "@naruto111",
    class3: "1.70%",
    data: "2.45BTC",
    color: "success",
  },
  {
    id: 3,
    src: "../../assets/img/nft-images/14.png",
    class: "Kazimo Aruke",
    class1: "@kazimo900",
    class3: "1.21%",
    data: "1.95BTC",
    color: "danger",
  },
  {
    id: 4,
    src: "../../assets/img/nft-images/2.png",
    class: "Oorichimaru lo",
    class1: "@ooro001",
    class3: "0.35%",
    data: "1.65BTC",
    color: "danger",
  },
  {
    id: 5,
    src: "../../assets/img/nft-images/10.png",
    class: "Sasuke Uchiha",
    class1: "@sasuke777",
    class3: "1.52%",
    data: "1.15BTC",
    color: "danger",
  },
  {
    id: 6,
    src: "../../assets/img/nft-images/12.png",
    class: "Lorem Ipsum Uch",
    class1: "@kakashi092",
    class3: "2.32%",
    data: "1.25BTC",
    color: "danger",
  },
  {
    id: 7,
    src: "../../assets/img/nft-images/4.png",
    class: "Nagiro Ohinavo",
    class1: "@nagiro096",
    class3: "0.99%",
    data: "1.12BTC",
    color: "success",
  },
];

//Sales Overview

export class NFTsalesOverview extends Component {
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
          height: 420,
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
    };

  };

  render() {

    return (

      <div className="box">
        <div className="box-header">
          <div className="sm:flex justify-between">
            <h5 className="box-title my-auto">Sales Overview</h5>
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
        <div className="box-body p-0">
          <div
            className="flex flex-wrap p-4 border-b border-dashed border-gray-200 dark:border-white/10">
            <div className="ltr:mr-3 rtl:ml-3">
              <span className="avatar avatar-sm rounded-full p-2 bg-gray-100 dark:bg-black/20">
                <img src="../../assets/img/crypto-currencies/regular/Bitcoin.svg" alt="" />
              </span>
            </div>
            <div className="flex flex-wrap justify-evenly flex-auto">
              <div className="sm:m-0 m-2">
                <span>Symbol</span>
                <p className="font-semibold mb-0">BTC</p>
              </div>
              <div className="sm:m-0 m-2">
                <span>Price Benchmark</span>
                <p className="font-semibold mb-0">-0.39%</p>
              </div>
              <div className="sm:m-0 m-2">
                <span>Price (USD)</span>
                <p className="text-success font-semibold mb-0">$1,212.67</p>
              </div>
              <div className="sm:m-0 m-2">
                <span>Change (24H)</span>
                <p className="text-danger font-semibold mb-0">-0.14%</p>
              </div>
              <div className="sm:m-0 m-2">
                <span>Market Cap</span>
                <p className="font-semibold mb-0">$148.20B</p>
              </div>
            </div>
          </div>
          <div id="chart">
            <ReactApexChart className="p-4 candlestick" height={423} width={"100%"} options={this.state.options} series={this.state.series} type="candlestick" />
          </div>
        </div>
      </div>
    );
  }
}
