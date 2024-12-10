
import dynamic from "next/dynamic";
import React, { Component } from "react";
const ReactApexChart = dynamic(() => import("react-apexcharts"), { ssr: false, });
const ReactEcharts = dynamic(() => import("echarts-for-react"), { ssr: false });
import { Doughnut, Line, Bar, Radar, Scatter, Bubble, Pie } from 'react-chartjs-2';


// Chart Component data

// ** Apex Chart Souurce **

export class LineChart extends Component {
  constructor(props) {
    super(props);

    this.state = {

      series: [{
        name: "Desktops",
        data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
      }],
      options: {
        chart: {
          height: 320,
          type: 'line',
          zoom: {
            enabled: false
          }
        },
        colors: ['#6366f1'],
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: 'straight',
          width: 3,
        },
        grid: {
          borderColor: 'rgba(119, 119, 142, 0.05)',
        },
        title: {
          text: 'Product Trends by Month',
          align: 'left',
          style: {
            fontSize: '13px',
            fontWeight: 'bold',
            color: '#8c9097'
          },
        },
        xaxis: {
          categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
          labels: {
            show: true,
            style: {
              colors: "#8c9097",
              fontSize: '11px',
              fontWeight: 600,
              cssClass: 'apexcharts-xaxis-label',
            },
          },
          axisBorder: {
            show: true,
            color: '#8c90976b',
          },
        },
        yaxis: {
          labels: {
            show: true,
            style: {
              colors: "#8c9097",
              fontSize: '11px',
              fontWeight: 600,
              cssClass: 'apexcharts-yaxis-label',
            },
          }
        }
      },

    };
  }

  render() {
    return (

      <div>
        <ReactApexChart height={320} width={"100%"} options={this.state.options} series={this.state.series} type="line" />
      </div>
    );
  }
};
let AreaPrices = [8107.85, 8128.0, 8122.9, 8165.5, 8340.7, 8423.7, 8423.5, 8514.3, 8481.85, 8487.7, 8506.9, 8626.2, 8668.95, 8602.3, 8607.55, 8512.9, 8496.25, 8600.65, 8881.1, 9340.85];
let AreaDate = ["13 Nov 2017", "14 Nov 2017", "15 Nov 2017", "16 Nov 2017", "17 Nov 2017", "20 Nov 2017", "21 Nov 2017", "22 Nov 2017", "23 Nov 2017", "24 Nov 2017", "27 Nov 2017", "28 Nov 2017", "29 Nov 2017", "30 Nov 2017", "01 Dec 2017", "04 Dec 2017", "05 Dec 2017", "06 Dec 2017", "07 Dec 2017", "08 Dec 2017",];
export class AreaChart extends Component {
  constructor(props) {
    super(props);

    this.state = {

      series: [{
        name: "STOCK ABC",
        data: AreaPrices
      }],
      options: {
        chart: {
          type: 'area',
          height: 320,
          zoom: {
            enabled: false
          }
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: 'straight'
        },
        subtitle: {
          text: 'Price Movements',
          align: 'left',
          style: {
            fontSize: '11px',
            fontWeight: 'normal',
            color: '#8c9097'
          },
        },
        grid: {
          borderColor: 'rgba(119, 119, 142, 0.05)',
        },
        labels: AreaDate,
        title: {
          text: 'Fundamental Analysis of Stocks',
          align: 'left',
          style: {
            fontSize: '13px',
            fontWeight: 'bold',
            color: '#8c9097'
          },
        },
        colors: ['#6366f1'],
        xaxis: {
          type: 'datetime',
          labels: {
            show: true,
            style: {
              colors: "#8c9097",
              fontSize: '11px',
              fontWeight: 600,
              cssClass: 'apexcharts-xaxis-label',
            },
          },
          axisBorder: {
            show: true,
            color: '#8c90976b',
          },
        },
        yaxis: {
          opposite: true,
          labels: {
            show: true,
            style: {
              colors: "#8c9097",
              fontSize: '11px',
              fontWeight: 600,
              cssClass: 'apexcharts-xaxis-label',
            },
          },
          axisBorder: {
            show: true,
            color: '#8c90976b',
          },
        },
        legend: {
          horizontalAlign: 'left'
        }
      },

    };
  }

  render() {
    return (

      <div>
        <ReactApexChart height={320} width={"100%"} options={this.state.options} series={this.state.series} type="area" />
      </div>
    );
  }
};
export class ColumnChart extends Component {
  constructor(props) {
    super(props);

    this.state = {

      series: [{
        name: 'Net Profit',
        data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
      }, {
        name: 'Revenue',
        data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
      }, {
        name: 'Free Cash Flow',
        data: [35, 41, 36, 26, 45, 48, 52, 53, 41]
      }],
      options: {
        chart: {
          type: 'bar',
          height: 320
        },
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: '55%',
          },
        },
        grid: {
          borderColor: 'rgba(119, 119, 142, 0.05)',
        },
        dataLabels: {
          enabled: false
        },
        colors: ["#6366f1", "#60a5fa", "#f43f63"],
        stroke: {
          show: true,
          width: 2,
          colors: ['transparent']
        },
        legend: {
          show: true,
          labels: {
            colors: '#74767c',
          },
        },
        xaxis: {
          categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
          labels: {
            show: true,
            style: {
              colors: "#8c9097",
              fontSize: '11px',
              fontWeight: 600,
              cssClass: 'apexcharts-xaxis-label',
            },
          },
          axisBorder: {
            show: true,
            color: '#8c90976b',
          },
        },
        yaxis: {
          title: {
            style: {
              color: "#8c9097",
            }
          },
          labels: {
            show: true,
            style: {
              colors: "#8c9097",
              fontSize: '11px',
              fontWeight: 600,
              cssClass: 'apexcharts-xaxis-label',
            },
          },
          axisBorder: {
            show: true,
            color: '#8c90976b',
          },
        },
        fill: {
          opacity: 1
        },
        tooltip: {
          y: {
            formatter: function (val) {
              return "$ " + val + " thousands";
            }
          }
        }
      },

    };
  }

  render() {
    return (

      <div>
        <ReactApexChart height={320} width={"100%"} options={this.state.options} series={this.state.series} type="bar" />
      </div>
    );
  }
};
export class BarChart extends Component {
  constructor(props) {
    super(props);

    this.state = {

      series: [{
        data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380]
      }],
      options: {
        chart: {
          type: 'bar',
          height: 320
        },
        plotOptions: {
          bar: {
            borderRadius: 4,
            horizontal: true,
          }
        },
        colors: ["#6366f1"],
        grid: {
          borderColor: 'rgba(119, 119, 142, 0.05)',
        },
        dataLabels: {
          enabled: false
        },
        xaxis: {
          categories: ['South Korea', 'Canada', 'United Kingdom', 'Netherlands', 'Italy', 'France', 'Japan',
            'United States', 'China', 'Germany'
          ],
          labels: {
            show: true,
            style: {
              colors: "#8c9097",
              fontSize: '11px',
              fontWeight: 600,
              cssClass: 'apexcharts-xaxis-label',
            },
          },
          axisBorder: {
            show: true,
            color: '#8c90976b',
          },
        },
        yaxis: {
          labels: {
            show: true,
            style: {
              colors: "#8c9097",
              fontSize: '11px',
              fontWeight: 600,
              cssClass: 'apexcharts-yaxis-label',
            },
          },
          axisBorder: {
            show: true,
            color: '#8c90976b',
          },
        }
      },

    };
  }

  render() {
    return (

      <div>
        <ReactApexChart height={320} width={"100%"} options={this.state.options} series={this.state.series} type="bar" />
      </div>
    );
  }
};
export class LineAndColumnChart extends Component {
  constructor(props) {
    super(props);

    this.state = {

      series: [{
        name: 'Website Blog',
        type: 'column',
        data: [440, 505, 414, 671, 227, 413, 201, 352, 752, 320, 257, 160]
      }, {
        name: 'Social Media',
        type: 'line',
        data: [23, 42, 35, 27, 43, 22, 17, 31, 22, 22, 12, 16]
      }],
      options: {
        chart: {
          height: 320,
          type: 'line',
        },
        stroke: {
          width: [0, 4]
        },
        grid: {
          borderColor: 'rgba(119, 119, 142, 0.05)',
        },
        title: {
          text: 'Traffic Sources',
          align: 'left',
          style: {
            fontSize: '13px',
            fontWeight: 'bold',
            color: '#8c9097'
          },
        },
        dataLabels: {
          enabled: true,
          enabledOnSeries: [1]
        },
        legend: {
          show: true,
          labels: {
            colors: '#74767c',
          },
        },
        colors: ["#6366f1", "#60a5fa"],
        labels: ['01 Jan 2001', '02 Jan 2001', '03 Jan 2001', '04 Jan 2001', '05 Jan 2001', '06 Jan 2001', '07 Jan 2001', '08 Jan 2001', '09 Jan 2001', '10 Jan 2001', '11 Jan 2001', '12 Jan 2001'],
        xaxis: {
          type: 'datetime',
          labels: {
            show: true,
            style: {
              colors: "#8c9097",
              fontSize: '11px',
              fontWeight: 600,
              cssClass: 'apexcharts-xaxis-label',
            },
          },
          axisBorder: {
            show: true,
            color: '#8c90976b',
          },
        },
        yaxis: [{
          title: {
            style: {
              color: "#8c9097",
            }
          },
          labels: {
            show: true,
            style: {
              colors: "#8c9097",
              fontSize: '11px',
              fontWeight: 600,
              cssClass: 'apexcharts-yaxis-label',
            },
          }
        }, {
          opposite: true,
          title: {
            style: {
              color: "#8c9097",
            }
          }
        }]
      }
    };
  }

  render() {
    return (

      <div>
        <ReactApexChart height={320} width={"100%"} options={this.state.options} series={this.state.series} type="bar" />
      </div>
    );
  }
};
export class TimelineBasic extends Component {
  constructor(props) {
    super(props);

    this.state = {

      series: [
        {
          data: [
            {
              x: 'Code',
              y: [
                new Date('2019-03-02').getTime(),
                new Date('2019-03-04').getTime()
              ]
            },
            {
              x: 'Test',
              y: [
                new Date('2019-03-04').getTime(),
                new Date('2019-03-08').getTime()
              ]
            },
            {
              x: 'Validation',
              y: [
                new Date('2019-03-08').getTime(),
                new Date('2019-03-12').getTime()
              ]
            },
            {
              x: 'Deployment',
              y: [
                new Date('2019-03-12').getTime(),
                new Date('2019-03-18').getTime()
              ]
            }
          ]
        }
      ],
      options: {
        chart: {
          height: 320,
          type: 'rangeBar'
        },
        grid: {
          borderColor: 'rgba(119, 119, 142, 0.05)',
        },
        plotOptions: {
          bar: {
            horizontal: true
          }
        },
        colors: ["#6366f1"],
        xaxis: {
          type: 'datetime',
          labels: {
            show: true,
            style: {
              colors: "#8c9097",
              fontSize: '11px',
              fontWeight: 600,
              cssClass: 'apexcharts-xaxis-label',
            },
          },
          axisBorder: {
            show: true,
            color: '#8c90976b',
          },
        },
        yaxis: {
          labels: {
            show: true,
            style: {
              colors: "#8c9097",
              fontSize: '11px',
              fontWeight: 600,
              cssClass: 'apexcharts-yaxis-label',
            },
          },
          axisBorder: {
            show: true,
            color: '#8c90976b',
          },
        }
      }
    };
  }

  render() {
    return (

      <div>
        <ReactApexChart height={320} width={"100%"} options={this.state.options} series={this.state.series} type="rangeBar" />
      </div>
    );
  }
};
export class CandleStick extends Component {
  constructor(props) {
    super(props);

    this.state = {

      series: [{
        data: [{
          x: new Date(1538778600000),
          y: [6629.81, 6650.5, 6623.04, 6633.33]
        },
        {
          x: new Date(1538780400000),
          y: [6632.01, 6643.59, 6620, 6630.11]
        },
        {
          x: new Date(1538782200000),
          y: [6630.71, 6648.95, 6623.34, 6635.65]
        },
        {
          x: new Date(1538784000000),
          y: [6635.65, 6651, 6629.67, 6638.24]
        },
        {
          x: new Date(1538785800000),
          y: [6638.24, 6640, 6620, 6624.47]
        },
        {
          x: new Date(1538787600000),
          y: [6624.53, 6636.03, 6621.68, 6624.31]
        },
        {
          x: new Date(1538789400000),
          y: [6624.61, 6632.2, 6617, 6626.02]
        },
        {
          x: new Date(1538791200000),
          y: [6627, 6627.62, 6584.22, 6603.02]
        },
        {
          x: new Date(1538793000000),
          y: [6605, 6608.03, 6598.95, 6604.01]
        },
        {
          x: new Date(1538794800000),
          y: [6604.5, 6614.4, 6602.26, 6608.02]
        },
        {
          x: new Date(1538796600000),
          y: [6608.02, 6610.68, 6601.99, 6608.91]
        },
        {
          x: new Date(1538798400000),
          y: [6608.91, 6618.99, 6608.01, 6612]
        },
        {
          x: new Date(1538800200000),
          y: [6612, 6615.13, 6605.09, 6612]
        },
        {
          x: new Date(1538802000000),
          y: [6612, 6624.12, 6608.43, 6622.95]
        },
        {
          x: new Date(1538803800000),
          y: [6623.91, 6623.91, 6615, 6615.67]
        },
        {
          x: new Date(1538805600000),
          y: [6618.69, 6618.74, 6610, 6610.4]
        },
        {
          x: new Date(1538807400000),
          y: [6611, 6622.78, 6610.4, 6614.9]
        },
        {
          x: new Date(1538809200000),
          y: [6614.9, 6626.2, 6613.33, 6623.45]
        },
        {
          x: new Date(1538811000000),
          y: [6623.48, 6627, 6618.38, 6620.35]
        },
        {
          x: new Date(1538812800000),
          y: [6619.43, 6620.35, 6610.05, 6615.53]
        },
        {
          x: new Date(1538814600000),
          y: [6615.53, 6617.93, 6610, 6615.19]
        },
        {
          x: new Date(1538816400000),
          y: [6615.19, 6621.6, 6608.2, 6620]
        },
        {
          x: new Date(1538818200000),
          y: [6619.54, 6625.17, 6614.15, 6620]
        },
        {
          x: new Date(1538820000000),
          y: [6620.33, 6634.15, 6617.24, 6624.61]
        },
        {
          x: new Date(1538821800000),
          y: [6625.95, 6626, 6611.66, 6617.58]
        },
        {
          x: new Date(1538823600000),
          y: [6619, 6625.97, 6595.27, 6598.86]
        },
        {
          x: new Date(1538825400000),
          y: [6598.86, 6598.88, 6570, 6587.16]
        },
        {
          x: new Date(1538827200000),
          y: [6588.86, 6600, 6580, 6593.4]
        },
        {
          x: new Date(1538829000000),
          y: [6593.99, 6598.89, 6585, 6587.81]
        },
        {
          x: new Date(1538830800000),
          y: [6587.81, 6592.73, 6567.14, 6578]
        },
        {
          x: new Date(1538832600000),
          y: [6578.35, 6581.72, 6567.39, 6579]
        },
        {
          x: new Date(1538834400000),
          y: [6579.38, 6580.92, 6566.77, 6575.96]
        },
        {
          x: new Date(1538836200000),
          y: [6575.96, 6589, 6571.77, 6588.92]
        },
        {
          x: new Date(1538838000000),
          y: [6588.92, 6594, 6577.55, 6589.22]
        },
        {
          x: new Date(1538839800000),
          y: [6589.3, 6598.89, 6589.1, 6596.08]
        },
        {
          x: new Date(1538841600000),
          y: [6597.5, 6600, 6588.39, 6596.25]
        },
        {
          x: new Date(1538843400000),
          y: [6598.03, 6600, 6588.73, 6595.97]
        },
        {
          x: new Date(1538845200000),
          y: [6595.97, 6602.01, 6588.17, 6602]
        },
        {
          x: new Date(1538847000000),
          y: [6602, 6607, 6596.51, 6599.95]
        },
        {
          x: new Date(1538848800000),
          y: [6600.63, 6601.21, 6590.39, 6591.02]
        },
        {
          x: new Date(1538850600000),
          y: [6591.02, 6603.08, 6591, 6591]
        },
        {
          x: new Date(1538852400000),
          y: [6591, 6601.32, 6585, 6592]
        },
        {
          x: new Date(1538854200000),
          y: [6593.13, 6596.01, 6590, 6593.34]
        },
        {
          x: new Date(1538856000000),
          y: [6593.34, 6604.76, 6582.63, 6593.86]
        },
        {
          x: new Date(1538857800000),
          y: [6593.86, 6604.28, 6586.57, 6600.01]
        },
        {
          x: new Date(1538859600000),
          y: [6601.81, 6603.21, 6592.78, 6596.25]
        },
        {
          x: new Date(1538861400000),
          y: [6596.25, 6604.2, 6590, 6602.99]
        },
        {
          x: new Date(1538863200000),
          y: [6602.99, 6606, 6584.99, 6587.81]
        },
        {
          x: new Date(1538865000000),
          y: [6587.81, 6595, 6583.27, 6591.96]
        },
        {
          x: new Date(1538866800000),
          y: [6591.97, 6596.07, 6585, 6588.39]
        },
        {
          x: new Date(1538868600000),
          y: [6587.6, 6598.21, 6587.6, 6594.27]
        },
        {
          x: new Date(1538870400000),
          y: [6596.44, 6601, 6590, 6596.55]
        },
        {
          x: new Date(1538872200000),
          y: [6598.91, 6605, 6596.61, 6600.02]
        },
        {
          x: new Date(1538874000000),
          y: [6600.55, 6605, 6589.14, 6593.01]
        },
        {
          x: new Date(1538875800000),
          y: [6593.15, 6605, 6592, 6603.06]
        },
        {
          x: new Date(1538877600000),
          y: [6603.07, 6604.5, 6599.09, 6603.89]
        },
        {
          x: new Date(1538879400000),
          y: [6604.44, 6604.44, 6600, 6603.5]
        },
        {
          x: new Date(1538881200000),
          y: [6603.5, 6603.99, 6597.5, 6603.86]
        },
        {
          x: new Date(1538883000000),
          y: [6603.85, 6605, 6600, 6604.07]
        },
        {
          x: new Date(1538884800000),
          y: [6604.98, 6606, 6604.07, 6606]
        },
        ]
      }],
      options: {
        chart: {
          type: 'candlestick',
          height: 350
        },
        title: {
          text: 'CandleStick Chart',
          align: 'left',
          style: {
            color: "#8c9097",
            fontSize: '13px',
            fontWeight: 'bold',
          }
        },
        plotOptions: {
          candlestick: {
            colors: {
              upward: '#6366f1',
              downward: '#60a5fa'
            }
          }
        },
        grid: {
          borderColor: 'rgba(119, 119, 142, 0.05)',
        },
        xaxis: {
          type: 'datetime',
          labels: {
            show: true,
            style: {
              colors: "#8c9097",
              fontSize: '11px',
              fontWeight: 600,
              cssClass: 'apexcharts-xaxis-label',
            },
          },
          axisBorder: {
            show: true,
            color: '#8c90976b',
          },
        },
        yaxis: {
          tooltip: {
            enabled: true
          },
          labels: {
            show: true,
            style: {
              colors: "#8c9097",
              fontSize: '11px',
              fontWeight: 600,
              cssClass: 'apexcharts-yaxis-label',
            },
          },
          axisBorder: {
            show: true,
            color: '#8c90976b',
          },
        }
      }
    };
  }

  render() {
    return (

      <div>
        <ReactApexChart height={320} width={"100%"} options={this.state.options} series={this.state.series} type="candlestick" />
      </div>
    );
  }
};
export class Boxplot extends Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [
        {
          type: 'boxPlot',
          data: [
            {
              x: 'Jan 2015',
              y: [54, 66, 69, 75, 88]
            },
            {
              x: 'Jan 2016',
              y: [43, 65, 69, 76, 81]
            },
            {
              x: 'Jan 2017',
              y: [31, 39, 45, 51, 59]
            },
            {
              x: 'Jan 2018',
              y: [39, 46, 55, 65, 71]
            },
            {
              x: 'Jan 2019',
              y: [29, 31, 35, 39, 44]
            },
            {
              x: 'Jan 2020',
              y: [41, 49, 58, 61, 67]
            },
            {
              x: 'Jan 2021',
              y: [54, 59, 66, 71, 88]
            }
          ]
        }
      ],
      options: {
        chart: {
          type: 'boxPlot',
          height: 350
        },
        title: {
          text: 'Basic BoxPlot Chart',
          align: 'left',
          style: {
            fontSize: '13px',
            fontWeight: 'bold',
            color: '#8c9097'
          },
        },
        grid: {
          borderColor: '#77778e0d',
        },
        plotOptions: {
          boxPlot: {
            colors: {
              upper: '#6366f1',
              lower: '#60a5fa'
            }
          }
        },
        xaxis: {
          labels: {
            show: true,
            style: {
              colors: "#8c9097",
              fontSize: '11px',
              fontWeight: 600,
              cssClass: 'apexcharts-xaxis-label',
            },
          },
          axisBorder: {
            show: true,
            color: '#8c90976b',
          },
        },
        yaxis: {
          labels: {
            show: true,
            style: {
              colors: "#8c9097",
              fontSize: '11px',
              fontWeight: 600,
              cssClass: 'apexcharts-yaxis-label',
            },
          }
        },
        axisBorder: {
          show: true,
          color: '#8c90976b',
        },
      }
    };
  }

  render() {
    return (

      <div>
        <ReactApexChart height={320} width={"100%"} options={this.state.options} series={this.state.series} type="boxPlot" />
      </div>
    );
  }
};
function generateData(baseval, count, yrange) {
  let i = 0;
  let series = [];
  while (i < count) {
    const x = Math.floor(Math.random() * (750 - 1 + 1)) + 1;;
    const y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
    const z = Math.floor(Math.random() * (75 - 15 + 1)) + 15;

    series.push([x, y, z]);
    baseval += 86400000;
    i++;
  }
  return series;
}
export class Bubble3D extends Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [{
        name: 'Product1',
        data: generateData(new Date('11 Feb 2017 GMT').getTime(), 20, {
          min: 10,
          max: 60
        })
      },
      {
        name: 'Product2',
        data: generateData(new Date('11 Feb 2017 GMT').getTime(), 20, {
          min: 10,
          max: 60
        })
      },
      {
        name: 'Product3',
        data: generateData(new Date('11 Feb 2017 GMT').getTime(), 20, {
          min: 10,
          max: 60
        })
      },
      {
        name: 'Product4',
        data: generateData(new Date('11 Feb 2017 GMT').getTime(), 20, {
          min: 10,
          max: 60
        })
      }],
      options: {
        chart: {
          height: 320,
          type: 'bubble',
        },
        dataLabels: {
          enabled: false
        },
        fill: {
          type: 'gradient',
        },
        grid: {
          borderColor: 'rgba(119, 119, 142, 0.05)',
        },
        colors: ["#6366f1", "#60a5fa", "#f43f63"],
        title: {
          text: '3D Bubble Chart',
          align: 'left',
          style: {
            fontSize: '13px',
            fontWeight: 'bold',
            color: '#8c9097'
          },
        },
        legend: {
          show: true,
          position: 'top',
          labels: {
            colors: '#74767c',
          },
        },
        xaxis: {
          tickAmount: 12,
          type: 'datetime',
          labels: {
            rotate: 0,
            style: {
              colors: "#8c9097",
              fontSize: '11px',
              fontWeight: 600,
              cssClass: 'apexcharts-xaxis-label',
            },
          },
          axisBorder: {
            show: true,
            color: '#8c90976b',
          },
        },
        yaxis: {
          max: 70,
          labels: {
            show: true,
            style: {
              colors: "#8c9097",
              fontSize: '11px',
              fontWeight: 600,
              cssClass: 'apexcharts-yaxis-label',
            },
          },
          axisBorder: {
            show: true,
            color: '#8c90976b',
          },
        },
        theme: {
          palette: 'palette2'
        }
      }
    };
  }
  render() {
    return (
      <div>
        <ReactApexChart height={320} width={"100%"} options={this.state.options} series={this.state.series} type="bubble" />
      </div>
    );
  }
};
function generateDayWiseTimeSeries(baseval, count, yrange) {
  let i = 0;
  let series = [];
  while (i < count) {
    const y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

    series.push([baseval, y]);
    baseval += 86400000;
    i++;
  }
  return series;
}
export class ScatterChart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [{
        name: 'TEAM 1',
        data: generateDayWiseTimeSeries(new Date('11 Feb 2017 GMT').getTime(), 20, {
          min: 10,
          max: 60
        })
      },
      {
        name: 'TEAM 2',
        data: generateDayWiseTimeSeries(new Date('11 Feb 2017 GMT').getTime(), 20, {
          min: 10,
          max: 60
        })
      },
      {
        name: 'TEAM 3',
        data: generateDayWiseTimeSeries(new Date('11 Feb 2017 GMT').getTime(), 30, {
          min: 10,
          max: 60
        })
      },
      {
        name: 'TEAM 4',
        data: generateDayWiseTimeSeries(new Date('11 Feb 2017 GMT').getTime(), 10, {
          min: 10,
          max: 60
        })
      },
      {
        name: 'TEAM 5',
        data: generateDayWiseTimeSeries(new Date('11 Feb 2017 GMT').getTime(), 30, {
          min: 10,
          max: 60
        })
      },
      ],
      options: {
        chart: {
          height: 320,
          type: 'scatter',
          zoom: {
            type: 'xy'
          }
        },
        dataLabels: {
          enabled: false
        },
        colors: ["#6366f1", "#60a5fa", "#f43f63", "#b95d4b", "#5e9aa6"],
        grid: {
          borderColor: 'rgba(119, 119, 142, 0.05)',
        },
        legend: {
          show: true,
          position: 'top',
          labels: {
            colors: '#74767c',
          },
        },
        xaxis: {
          type: 'datetime',
          labels: {
            show: true,
            style: {
              colors: "#8c9097",
              fontSize: '11px',
              fontWeight: 600,
              cssClass: 'apexcharts-xaxis-label',
            },
          },
          axisBorder: {
            show: true,
            color: '#8c90976b',
          },
        },
        yaxis: {
          max: 70,
          labels: {
            show: true,
            style: {
              colors: "#8c9097",
              fontSize: '11px',
              fontWeight: 600,
              cssClass: 'apexcharts-yaxis-label',
            },
          },
          axisBorder: {
            show: true,
            color: '#8c90976b',
          },
        }
      }
    };
  }
  render() {
    return (
      <div>
        <ReactApexChart height={320} width={"100%"} options={this.state.options} series={this.state.series} type="scatter" />
      </div>
    );
  }
};

function generateData1(count, yrange) {
  let i = 0;
  let series = [];
  while (i < count) {
    const x = 'w' + (i + 1).toString();
    const y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

    series.push({
      x: x,
      y: y
    });
    i++;
  }
  return series;
}
export class BasicHeatMap extends Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [{
        name: 'Metric1',
        data: generateData1(18, {
          min: 0,
          max: 90
        })
      },
      {
        name: 'Metric2',
        data: generateData1(18, {
          min: 0,
          max: 90
        })
      },
      {
        name: 'Metric3',
        data: generateData1(18, {
          min: 0,
          max: 90
        })
      },
      {
        name: 'Metric4',
        data: generateData1(18, {
          min: 0,
          max: 90
        })
      },
      {
        name: 'Metric5',
        data: generateData1(18, {
          min: 0,
          max: 90
        })
      },
      {
        name: 'Metric6',
        data: generateData1(18, {
          min: 0,
          max: 90
        })
      },
      {
        name: 'Metric7',
        data: generateData1(18, {
          min: 0,
          max: 90
        })
      },
      {
        name: 'Metric8',
        data: generateData1(18, {
          min: 0,
          max: 90
        })
      },
      {
        name: 'Metric9',
        data: generateData1(18, {
          min: 0,
          max: 90
        })
      }
      ],
      options: {
        chart: {
          height: 350,
          type: 'heatmap',
        },
        dataLabels: {
          enabled: false
        },
        colors: ["#6366f1"],
        grid: {
          borderColor: 'rgba(119, 119, 142, 0.05)',
        },
        title: {
          text: 'HeatMap Chart (Single color)',
          align: 'left',
          style: {
            fontSize: '13px',
            fontWeight: 'bold',
            color: '#8c9097'
          },
        },
        xaxis: {
          labels: {
            show: true,
            style: {
              colors: "#8c9097",
              fontSize: '11px',
              fontWeight: 600,
              cssClass: 'apexcharts-xaxis-label',
            },
          }
        },
        yaxis: {
          labels: {
            show: true,
            style: {
              colors: "#8c9097",
              fontSize: '11px',
              fontWeight: 600,
              cssClass: 'apexcharts-yaxis-label',
            },
          }
        }
      }
    };
  }
  render() {
    return (
      <div>
        <ReactApexChart height={320} width={"100%"} options={this.state.options} series={this.state.series} type="heatmap" />
      </div>
    );
  }
};
export class TreeMap extends Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [
        {
          data: [
            {
              x: 'New Delhi',
              y: 218
            },
            {
              x: 'Kolkata',
              y: 149
            },
            {
              x: 'Mumbai',
              y: 184
            },
            {
              x: 'Ahmedabad',
              y: 55
            },
            {
              x: 'Bangaluru',
              y: 84
            },
            {
              x: 'Pune',
              y: 31
            },
            {
              x: 'Chennai',
              y: 70
            },
            {
              x: 'Jaipur',
              y: 30
            },
            {
              x: 'Surat',
              y: 44
            },
            {
              x: 'Hyderabad',
              y: 68
            },
            {
              x: 'Lucknow',
              y: 28
            },
            {
              x: 'Indore',
              y: 19
            },
            {
              x: 'Kanpur',
              y: 29
            }
          ]
        }
      ],
      options: {
        legend: {
          show: false
        },
        chart: {
          height: 350,
          type: 'treemap'
        },
        colors: ["#6366f1"],
        title: {
          text: 'Basic Treemap',
          align: 'left',
          style: {
            fontSize: '13px',
            fontWeight: 'bold',
            color: '#8c9097'
          },
        },
      }
    };
  }
  render() {
    return (
      <div>
        <ReactApexChart height={320} width={"100%"} options={this.state.options} series={this.state.series} type="treemap" />
      </div>
    );
  }
};
export class PieChart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [44, 55, 13, 43, 22],
      options: {
        chart: {
          width: 350,
          type: 'pie',
        },
        colors: ["#6366f1", "#60a5fa", "#f43f63", "#5e9aa6", "#b95d4b"],
        labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
        legend: {
          position: "bottom",
          labels: {
            colors: '#74767c',
          },
        },
        responsive: [{
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
          }
        }],
        dataLabels: {
          dropShadow: {
            enabled: false
          }
        },
      }
    };
  }
  render() {
    return (
      <div>
        <ReactApexChart height={320} width={"100%"} options={this.state.options} series={this.state.series} type="pie" />
      </div>
    );
  }
};
export class DonutChart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [44, 55, 41, 17, 15],
      options: {
        chart: {
          type: 'donut',
          height: 290
        },
        legend: {
          position: 'bottom',
          labels: {
            colors: '#74767c',
          },
        },
        colors: ["#6366f1", "#60a5fa", "#f43f63", "#5e9aa6", "#b95d4b"],
        responsive: [{
          breakpoint: 480,
          options: {
            chart: {
              height: 250
            },
            legend: {
              position: 'bottom'
            }
          }
        }],
        dataLabels: {
          dropShadow: {
            enabled: false
          }
        },
      }
    };
  }
  render() {
    return (
      <div>
        <ReactApexChart height={320} width={"100%"} options={this.state.options} series={this.state.series} type="donut" />
      </div>
    );
  }
};
export class RadialChart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [70],
      options: {
        chart: {
          height: 350,
          type: 'radialBar',
        },
        colors: ["#6366f1"],
        plotOptions: {
          radialBar: {
            hollow: {
              size: '70%',
            }
          },
        },
        labels: ['Cricket'],
        responsive: [{
          breakpoint: 350,
          options: {
            chart: {
              height: 300,
            },
          }
        }],
      }
    };
  }
  render() {
    return (
      <div>
        <ReactApexChart height={300} width={"100%"} options={this.state.options} series={this.state.series} type="radialBar" />
      </div>
    );
  }
};
export class StrokedCircularGauge extends Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [67],
      options: {
        chart: {
          height: 350,
          type: 'radialBar',
          offsetY: -10
        },
        colors: ["#6366f1"],
        plotOptions: {
          radialBar: {
            startAngle: -135,
            endAngle: 135,
            dataLabels: {
              name: {
                fontSize: '16px',
                color: undefined,
                offsetY: 120
              },
              value: {
                offsetY: 76,
                fontSize: '22px',
                color: undefined,
                formatter: function (val) {
                  return val + "%";
                }
              }
            }
          }
        },
        fill: {
          type: 'gradient',
          gradient: {
            shade: 'dark',
            shadeIntensity: 0.15,
            inverseColors: false,
            opacityFrom: 1,
            opacityTo: 1,
            stops: [0, 50, 65, 91]
          },
        },
        stroke: {
          dashArray: 4
        },
        labels: ['Median Ratio'],
      }
    };
  }
  render() {
    return (
      <div>
        <ReactApexChart height={320} width={"100%"} options={this.state.options} series={this.state.series} type="radialBar" />
      </div>
    );
  }
};
export class RaderChart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [{
        name: 'Series 1',
        data: [80, 50, 30, 40, 100, 20],
      }, {
        name: 'Series 2',
        data: [20, 30, 40, 80, 20, 80],
      }, {
        name: 'Series 3',
        data: [44, 76, 78, 13, 43, 10],
      }],
      options: {
        chart: {
          height: 350,
          type: 'radar',
          dropShadow: {
            enabled: true,
            blur: 1,
            left: 1,
            top: 1
          }
        },
        title: {
          text: 'Radar Chart - Multi Series',
          align: 'left',
          style: {
            fontSize: '13px',
            fontWeight: 'bold',
            color: '#8c9097'
          },
        },
        legend: {
          labels: {
            colors: '#74767c',
          },
        },
        colors: ["#6366f1", "#60a5fa", "#f43f63"],
        stroke: {
          width: 2
        },
        fill: {
          opacity: 0.1
        },
        markers: {
          size: 0
        },
        xaxis: {
          categories: ['2011', '2012', '2013', '2014', '2015', '2016']
        }
      }
    };
  }
  render() {
    return (
      <div>
        <ReactApexChart height={320} width={"100%"} options={this.state.options} series={this.state.series} type="radar" />
      </div>
    );
  }
};
export class PolarAreaChart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [14, 23, 21, 17, 15, 10, 12, 17, 21],
      options: {
        chart: {
          type: 'polarArea',
          width: 400
        },
        stroke: {
          colors: ['#fff']
        },
        fill: {
          opacity: 0.8
        },
        legend: {
          position: 'bottom',
          labels: {
            colors: '#74767c',
          },
        },
        colors: ["#6366f1", "#60a5fa", "#f43f63", "#5e9aa6", "#b95d4b", "#76a65e", "#a65e76", "#5e9aa6", "#5b67c7"],
        responsive: [{
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: 'bottom'
            }
          }
        }]
      }
    };
  }
  render() {
    return (
      <div>
        <ReactApexChart className="flex justify-center" height={400} width={"100%"} options={this.state.options} series={this.state.series} type="polarArea" />
      </div>
    );
  }
};

// **************************************************************************************************************

// ** Chart.JS Souurce **

const LineData = {
  type: 'line',
  labels: ['January', 'February', 'March', 'April', 'May', 'June'],
  datasets: [
    {
      data: [0, 10, 5, 2, 20, 30, 45],
      label: 'My First dataset',
      backgroundColor: '#6366f1',
      borderColor: '#6366f1',
    },
  ],
};

const LineOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
    },
  },
  cutout: 90,
};

export function LineChartJS() {
  return <Line width={741} height={300} options={LineOptions} data={LineData} />;
}

const BarData = {
  type: 'line',
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July',],
  datasets: [
    {
      label: 'My First Dataset',
      data: [65, 59, 80, 81, 56, 55, 40],
      backgroundColor: [
        'rgba(94, 118, 166, 0.2)',
        'rgba(94, 166, 142, 0.2)',
        'rgba(166, 142, 94, 0.2)',
        'rgba(94, 154, 166, 0.2)',
        'rgba(185, 93, 75, 0.2)',
        'rgba(118, 166, 94, 0.2)',
        'rgba(140, 144, 151, 0.2)'
      ],
      borderColor: [
        '#6366f1',
        'rgb(94, 166, 142)',
        'rgb(166, 142, 94)',
        'rgb(94, 154, 166)',
        'rgb(185, 93, 75)',
        'rgb(118, 166, 94)',
        'rgb(140, 144, 151)'
      ],
      borderWidth: 1
    },
  ],
};

const BarOptions = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    y: {
      beginAtZero: true
    }
  },
  plugins: {
    legend: {
      display: false,
    },
  },
  cutout: 90,
};

export function BarChartJS() {
  return <Bar width={741} height={300} options={BarOptions} data={BarData} />;
}

const RadarData = {
  type: 'radar',
  labels: ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'],
  datasets: [
    {
      label: 'My First Dataset',
      data: [65, 59, 90, 81, 56, 55, 40],
      fill: true,
      backgroundColor: 'rgba(94, 118, 166, 0.2)',
      borderColor: '#6366f1',
      pointBackgroundColor: '#6366f1',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: '#6366f1'
    }, {
      label: 'My Second Dataset',
      data: [28, 48, 40, 19, 96, 27, 100],
      fill: true,
      backgroundColor: 'rgba(94, 166, 142, 0.2)',
      borderColor: 'rgb(94, 166, 142)',
      pointBackgroundColor: 'rgb(94, 166, 142)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgb(94, 166, 142)'
    }]
};

const RadarOptions = {
  responsive: true,
  maintainAspectRatio: false,
  elements: {
    line: {
      borderWidth: 3
    }
  }
};

export function RadarChartJS() {
  return <Radar width={741} height={300} options={RadarOptions} data={RadarData} />;
}

const ScatterData = {
  type: 'scatter',
  datasets: [{
    label: 'Scatter Dataset',
    data: [{
      x: -10,
      y: 0
    }, {
      x: 0,
      y: 10
    }, {
      x: 10,
      y: 5
    }, {
      x: 0.5,
      y: 5.5
    }],
    backgroundColor: '#6366f1'
  }],
};

const ScatterOptions = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    x: {
      type: 'linear',
      position: 'bottom'
    }
  }
};

export function ScatterChartJS() {
  return <Scatter width={741} height={300} options={ScatterOptions} data={ScatterData} />;
}

const MixedChartData = {
  type: 'scatter',
  labels: ['January', 'February', 'March', 'April'],
  datasets: [{
    type: 'bar',
    label: 'Bar Dataset',
    data: [10, 20, 30, 40],
    borderColor: '#6366f1',
    backgroundColor: 'rgba(94, 118, 166, 0.2)',
  }, {
    type: 'line',
    label: 'Line Dataset',
    data: [50, 50, 50, 50],
    fill: false,
    borderColor: 'rgb(94, 166, 142)',
  }]
};

const MixedChartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    y: {
      beginAtZero: true
    }
  }
};

export function MixedChartJS() {
  return <Scatter width={741} height={300} options={MixedChartOptions} data={MixedChartData} />;
}

const BubbleData = {
  type: 'bubble',
  datasets: [{
    label: 'First Dataset',
    data: [{
      x: 20,
      y: 30,
      r: 15
    }, {
      x: 40,
      y: 10,
      r: 10
    }],
    backgroundColor: '#6366f1'
  }]
};

const BubbleOptions = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    y: {
      beginAtZero: true
    }
  }
};

export function BubbleChart() {
  return <Bubble width={741} height={300} options={BubbleOptions} data={BubbleData} />;
}

const PieData = {
  type: 'pie',
  labels: ['Red', 'Blue', 'Yellow'],
  datasets: [{
    label: 'My First Dataset',
    data: [300, 50, 100],
    backgroundColor: [
      '#6366f1',
      'rgb(94, 166, 142)',
      'rgb(166, 142, 94)'
    ],
    hoverOffset: 4,
    borderColor: 'rgba(142, 156, 173,0.1)'
  }]
};

const PieOptions = {
  responsive: true,
  maintainAspectRatio: false
};

export function ChartPie() {
  return <Pie width={741} height={300} options={PieOptions} data={PieData} />;
}

const DoughnutData = {
  type: 'doughnut',
  labels: ['Red', 'Blue', 'Yellow'],
  datasets: [{
    label: 'My First Dataset',
    data: [300, 50, 100],
    backgroundColor: [
      '#6366f1',
      'rgb(94, 166, 142)',
      'rgb(166, 142, 94)'
    ],
    hoverOffset: 4,
    borderColor: 'rgba(142, 156, 173,0.1)'
  }]
};

const DoughnutOptions = {
  responsive: true,
  maintainAspectRatio: false
};

export function DoughnutChart() {
  return <Doughnut width={741} height={300} options={DoughnutOptions} data={DoughnutData} />;
}

const polarData = {
  type: 'doughnut',
  labels: ['Red', 'Green', 'Yellow', 'Grey', 'Blue'],
  datasets: [{
    label: 'My First Dataset',
    data: [11, 16, 7, 3, 14],
    backgroundColor: [
      '#6366f1',
      'rgb(75, 192, 192)',
      'rgb(166, 142, 94)',
      'rgb(201, 203, 207)',
      'rgb(94, 166, 142)'
    ],
    borderColor: 'rgba(142, 156, 173,0.1)'
  }]
};

const polarOptions = {
  responsive: true,
  maintainAspectRatio: false
};

export function ChartPolar() {
  return <Doughnut width={741} height={300} options={polarOptions} data={polarData} />;
}

// **************************************************************************************************************

// ** E-Chart Souurce **

export function LineEChart() {
  const options = {
    grid: {
      left: "0%",
      right: "0%",
      bottom: "0%",
      top: "10%",
      containLabel: true,
    },
    splitLine: {
      lineStyle: {
        color: "rgba(142, 156, 173,0.1)",
      },
    },
    axisLine: {
      lineStyle: {
        color: "#8c9097",
      },
    },
    xAxis: {
      type: "category",
      data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      axisLine: {
        lineStyle: {
          color: "#8c9097",
        },
      },
      splitLine: {
        lineStyle: {
          color: "rgba(142, 156, 173,0.1)",
        },
      },
    },
    yAxis: {
      type: "value",
      axisLine: {
        lineStyle: {
          color: "#8c9097",
        },
      },
      splitLine: {
        lineStyle: {
          color: "rgba(142, 156, 173,0.1)",
        },
      },
    },
    series: [
      {
        data: [150, 230, 224, 218, 135, 147, 260],
        type: "line",
      },
    ],
    color: "#6366f1",
  };

  return <ReactEcharts className="chartsh" option={options} />;
}

export function SmoothLineEChart() {
  const options = {
    grid: {
      left: "0%",
      right: "0%",
      bottom: "0%",
      top: "10%",
      containLabel: true
    },
    splitLine: {
      lineStyle: {
        color: "rgba(142, 156, 173,0.1)"
      }
    },
    axisLine: {
      lineStyle: {
        color: "#8c9097"
      }
    },
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    },
    yAxis: {
      type: 'value',
      axisLine: {
        lineStyle: {
          color: "#8c9097"
        }
      },
      splitLine: {
        lineStyle: {
          color: "rgba(142, 156, 173,0.1)"
        }
      }
    },
    series: [
      {
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: 'line',
        smooth: true
      }
    ],
    color: "#6366f1"
  };

  return (
    <ReactEcharts className="chartsh" option={options} />
  );
};
export function AreaEChart() {
  const options = {
    grid: {
      left: "0%",
      right: "0%",
      bottom: "0%",
      top: "10%",
      containLabel: true
    },
    splitLine: {
      lineStyle: {
        color: "rgba(142, 156, 173,0.1)"
      }
    },
    axisLine: {
      lineStyle: {
        color: "#8c9097"
      }
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
      type: 'value',
      axisLine: {
        lineStyle: {
          color: "#8c9097"
        }
      },
      splitLine: {
        lineStyle: {
          color: "rgba(142, 156, 173,0.1)"
        }
      }
    },
    series: [
      {
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: 'line',
        areaStyle: {}
      }
    ],
    color: "#6366f1"
  };

  return (<ReactEcharts className="chartsh" option={options} />);
};
export function StackedLineEChart() {
  const options = {
    grid: {
      left: "0%",
      right: "0%",
      bottom: "0%",
      top: "10%",
      containLabel: true,
    },
    tooltip: {
      trigger: 'axis'
    },
    legend: {
      data: ['Email', 'Union Ads', 'Video Ads', 'Direct', 'Search Engine'],
      textStyle: {
        color: 'rgb(119, 119, 142)'
      }
    },
    toolbox: {
      feature: {
        saveAsImage: {}
      }
    },
    splitLine: {
      lineStyle: {
        color: "rgba(142, 156, 173,0.1)"
      }
    },
    axisLine: {
      lineStyle: {
        color: "#8c9097"
      }
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],

    },
    yAxis: {
      type: 'value',
      axisLine: {
        lineStyle: {
          color: "#8c9097"
        }
      },
      splitLine: {
        lineStyle: {
          color: "rgba(142, 156, 173,0.1)"
        }
      }
    },
    series: [
      {
        name: 'Email',
        type: 'line',
        stack: 'Total',
        data: [120, 132, 101, 134, 90, 230, 210]
      },
      {
        name: 'Union Ads',
        type: 'line',
        stack: 'Total',
        data: [220, 182, 191, 234, 290, 330, 310]
      },
      {
        name: 'Video Ads',
        type: 'line',
        stack: 'Total',
        data: [150, 232, 201, 154, 190, 330, 410]
      },
      {
        name: 'Direct',
        type: 'line',
        stack: 'Total',
        data: [320, 332, 301, 334, 390, 330, 320]
      },
      {
        name: 'Search Engine',
        type: 'line',
        stack: 'Total',
        data: [820, 932, 901, 934, 1290, 1330, 1320]
      }
    ],
    color: ["#6366f1", "#60a5fa", "#eab308", "#f43f5e", "#22c55e"]
  };

  return (<ReactEcharts className="chartsh" option={options} />);
};
export function StackedAreaEChart() {
  const options = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross',
        label: {
          backgroundColor: '#6a7985'
        }
      }
    },
    legend: {
      data: ['Email', 'Union Ads', 'Video Ads', 'Direct', 'Search Engine'],
      textStyle: {
        color: 'rgb(119, 119, 142)'
      }
    },
    toolbox: {
      feature: {
        saveAsImage: {}
      }
    },
    grid: {
      left: '0%',
      right: '0%',
      bottom: '0%',
      top: '10%',
      containLabel: true
    },
    splitLine: {
      lineStyle: {
        color: "rgba(142, 156, 173,0.1)"
      }
    },
    axisLine: {
      lineStyle: {
        color: "#8c9097"
      }
    },
    xAxis: [
      {
        type: 'category',
        boundaryGap: false,
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      }
    ],
    yAxis: {
      type: 'value',
      axisLine: {
        lineStyle: {
          color: "#8c9097"
        }
      },
      splitLine: {
        lineStyle: {
          color: "rgba(142, 156, 173,0.1)"
        }
      }
    },
    series: [
      {
        name: 'Email',
        type: 'line',
        stack: 'Total',
        areaStyle: {},
        emphasis: {
          focus: 'series'
        },
        data: [120, 132, 101, 134, 90, 230, 210]
      },
      {
        name: 'Union Ads',
        type: 'line',
        stack: 'Total',
        areaStyle: {},
        emphasis: {
          focus: 'series'
        },
        data: [220, 182, 191, 234, 290, 330, 310]
      },
      {
        name: 'Video Ads',
        type: 'line',
        stack: 'Total',
        areaStyle: {},
        emphasis: {
          focus: 'series'
        },
        data: [150, 232, 201, 154, 190, 330, 410]
      },
      {
        name: 'Direct',
        type: 'line',
        stack: 'Total',
        areaStyle: {},
        emphasis: {
          focus: 'series'
        },
        data: [320, 332, 301, 334, 390, 330, 320]
      },
      {
        name: 'Search Engine',
        type: 'line',
        stack: 'Total',
        label: {
          show: true,
          position: 'top'
        },
        areaStyle: {},
        emphasis: {
          focus: 'series'
        },
        data: [820, 932, 901, 934, 1290, 1330, 1320]
      }
    ],
    color: ["#6366f1", "#60a5fa", "#eab308", "#f43f5e", "#22c55e"]
  };

  return (<ReactEcharts className="chartsh" option={options} />);
};
export function StepLineEChart() {
  const options = {
    tooltip: {
      trigger: 'axis'
    },
    legend: {
      data: ['Step Start', 'Step Middle', 'Step End'],
      textStyle: {
        color: 'rgb(119, 119, 142)'
      }
    },
    grid: {
      left: '0%',
      right: '0%',
      bottom: '0%',
      top: '10%',
      containLabel: true
    },
    toolbox: {
      feature: {
        saveAsImage: {}
      }
    },
    splitLine: {
      lineStyle: {
        color: "rgba(142, 156, 173,0.1)"
      }
    },
    axisLine: {
      lineStyle: {
        color: "#8c9097"
      }
    },
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    },
    yAxis: {
      type: 'value',
      axisLine: {
        lineStyle: {
          color: "#8c9097"
        }
      },
      splitLine: {
        lineStyle: {
          color: "rgba(142, 156, 173,0.1)"
        }
      }
    },
    series: [
      {
        name: 'Step Start',
        type: 'line',
        step: 'start',
        data: [120, 132, 101, 134, 90, 230, 210]
      },
      {
        name: 'Step Middle',
        type: 'line',
        step: 'middle',
        data: [220, 282, 201, 234, 290, 430, 410]
      },
      {
        name: 'Step End',
        type: 'line',
        step: 'end',
        data: [450, 432, 401, 454, 590, 530, 510]
      }
    ],
    color: ["#6366f1", "#60a5fa", "#eab308", "#f43f5e", "#22c55e"]
  };

  return (<ReactEcharts className="chartsh" option={options} />);
};
export function BarEChart() {
  const options = {
    grid: {
      left: '0%',
      right: '0%',
      bottom: '0%',
      top: '10%',
      containLabel: true
    },
    splitLine: {
      lineStyle: {
        color: "rgba(142, 156, 173,0.1)"
      }
    },
    axisLine: {
      lineStyle: {
        color: "#8c9097"
      }
    },
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    },
    yAxis: {
      type: 'value',
      axisLine: {
        lineStyle: {
          color: "#8c9097"
        }
      },
      splitLine: {
        lineStyle: {
          color: "rgba(142, 156, 173,0.1)"
        }
      }
    },
    series: [
      {
        data: [120, 200, 150, 80, 70, 110, 130],
        type: 'bar'
      }
    ],
    color: "#6366f1"
  };

  return (<ReactEcharts className="chartsh" option={options} />);
};
export function BarWithBackgroundEChart() {
  const options = {
    grid: {
      left: '0%',
      right: '0%',
      bottom: '0%',
      top: '10%',
      containLabel: true
    },
    splitLine: {
      lineStyle: {
        color: "rgba(142, 156, 173,0.1)"
      }
    },
    axisLine: {
      lineStyle: {
        color: "#8c9097"
      }
    },
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],

    },
    yAxis: {
      type: 'value',
      axisLine: {
        lineStyle: {
          color: "#8c9097"
        }
      },
      splitLine: {
        lineStyle: {
          color: "rgba(142, 156, 173,0.1)"
        }
      }
    },
    series: [
      {
        data: [120, 200, 150, 80, 70, 110, 130],
        type: 'bar',
        showBackground: true,
        backgroundStyle: {
          color: 'rgba(180, 180, 180, 0.2)'
        }
      }
    ],
    color: "#6366f1"
  };

  return (<ReactEcharts className="chartsh" option={options} />);
};
export function StyleForASingleBarEChart() {
  const options = {
    grid: {
      left: '0%',
      right: '0%',
      bottom: '0%',
      top: '10%',
      containLabel: true
    },
    splitLine: {
      lineStyle: {
        color: "rgba(142, 156, 173,0.1)"
      }
    },
    axisLine: {
      lineStyle: {
        color: "#8c9097"
      }
    },
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    },
    yAxis: {
      type: 'value',
      axisLine: {
        lineStyle: {
          color: "#8c9097"
        }
      },
      splitLine: {
        lineStyle: {
          color: "rgba(142, 156, 173,0.1)"
        }
      }
    },
    series: [
      {
        data: [
          120,
          {
            value: 200,
            itemStyle: {
              color: '#60a5fa'
            }
          },
          150,
          80,
          70,
          110,
          130
        ],
        type: 'bar'
      }
    ],
    color: "#6366f1"
  };

  return (<ReactEcharts className="chartsh" option={options} />);
};
export function WaterFallEChart() {
  const options = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      },
      // formatter: function ({params}:any) {
      //   var tar:any = params[1];
      //   return tar.name + '<br/>' + tar.seriesName + ' : ' + tar.value;
      // }
    },
    grid: {
      left: '0%',
      right: '0%',
      bottom: '0%',
      top: '10%',
      containLabel: true
    },
    splitLine: {
      lineStyle: {
        color: "rgba(142, 156, 173,0.1)"
      }
    },
    axisLine: {
      lineStyle: {
        color: "#8c9097"
      }
    },
    xAxis: {
      type: 'category',
      data: ['Total', 'Rent', 'Utilities', 'Transportation', 'Meals', 'Other'],
    },
    yAxis: {
      type: 'value',
      axisLine: {
        lineStyle: {
          color: "#8c9097"
        }
      },
      splitLine: {
        lineStyle: {
          color: "rgba(142, 156, 173,0.1)"
        }
      }
    },
    series: [
      {
        name: 'Placeholder',
        type: 'bar',
        stack: 'Total',
        itemStyle: {
          borderColor: 'transparent',
          color: 'transparent'
        },
        emphasis: {
          itemStyle: {
            borderColor: 'transparent',
            color: 'transparent'
          }
        },
        data: [0, 1700, 1400, 1200, 300, 0]
      },
      {
        name: 'Life Cost',
        type: 'bar',
        stack: 'Total',
        label: {
          show: true,
          position: 'inside'
        },
        data: [2900, 1200, 300, 200, 900, 300]
      }
    ],
    color: "#6366f1"
  };

  return (<ReactEcharts className="chartsh" option={options} />);
};
const labelRight = {
  position: 'right'
};
export function BarWithNegativeValuesEChart() {
  const option = {
      tooltip: {
          trigger: 'axis',
          axisPointer: {
              type: 'shadow'
          }
      },
      grid: {
          left: '0%',
          right: '0%',
          bottom: '0%',
          top: '10%',
          containLabel: true
      },
      xAxis: {
          type: 'value',
          position: 'top',
          splitLine: {
              lineStyle: {
                  type: 'dashed',
                  color: "rgba(142, 156, 173,0.1)"
              }
          }
      },
      yAxis: {
          type: 'category',
          axisLine: {
              show: false,
              lineStyle: {
                  color: "#8c9097"
              }
          },
          axisLabel: { show: false },
          axisTick: { show: false },
          splitLine: {
              show: false,
              lineStyle: {
                  color: "rgba(142, 156, 173,0.1)"
              }
          },
          data: [
              'ten',
              'nine',
              'eight',
              'seven',
              'six',
              'five',
              'four',
              'three',
              'two',
              'one'
          ],
      },
      series: [
          {
              name: 'Cost',
              type: 'bar',
              stack: 'Total',
              label: {
                  show: true,
                  formatter: '{b}'
              },
              data: [
                  { value: -0.07, label: labelRight },
                  { value: -0.09, label: labelRight },
                  0.2,
                  0.44,
                  { value: -0.23, label: labelRight },
                  0.08,
                  { value: -0.17, label: labelRight },
                  0.47,
                  { value: -0.36, label: labelRight },
                  0.18
              ]
          }
      ],
      color:  "rgb(84, 109, 254)"
  }

  return <ReactEcharts className="chartsh" option={option} />;
}
export function HorizontalBarEChart() {
  const option = {
      tooltip: {
          trigger: 'axis',
          axisPointer: {
              type: 'shadow'
          }
      },
      legend: {
          textStyle: {
              color: '#777'
          }
      },
      grid: {
          left: '0%',
          right: '0%',
          bottom: '0%',
          top: '10%',
          containLabel: true
      },
      xAxis: {
          type: 'value',
          boundaryGap: [0, 0.01],
          splitLine: {
              lineStyle: {
                  type: 'dashed',
                  color: "rgba(142, 156, 173,0.1)"
              }
          }
      },
      yAxis: {
          type: 'category',
          data: ['Brazil', 'Indonesia', 'USA', 'India', 'China', 'World'],
          axisLine: {
              lineStyle: {
                  color: "#8c9097"
              }
          },
          splitLine: {
              lineStyle: {
                  color: "rgba(142, 156, 173,0.1)"
              }
          }
      },
      series: [
          {
              name: '2011',
              type: 'bar',
              data: [18203, 23489, 29034, 104970, 131744, 630230]
          },
          {
              name: '2012',
              type: 'bar',
              data: [19325, 23438, 31000, 121594, 134141, 681807]
          }
      ],
      color: ["rgb(84, 109, 254)", "rgb(215, 124, 247)"]
  }

  return <ReactEcharts className="chartsh" option={option} />;
}
export function HorizontalStackedBarEChart() {

  const options = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        // Use axis to trigger tooltip
        type: 'shadow' // 'shadow' as default; can also be 'line' or 'shadow'
      }
    },
    legend: {
      textStyle: {
        color: 'rgb(119, 119, 142)'
      }
    },
    grid: {
      left: '0%',
      right: '0%',
      bottom: '0%',
      top: '10%',
      containLabel: true
    },
    splitLine: {
      lineStyle: {
        color: "rgba(142, 156, 173,0.1)"
      }
    },
    xAxis: {
      type: 'value'
    },
    yAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      axisLine: {
        lineStyle: {
          color: "#8c9097"
        }
      }
    },
    series: [
      {
        name: 'Direct',
        type: 'bar',
        stack: 'total',
        label: {
          show: true
        },
        emphasis: {
          focus: 'series'
        },
        data: [320, 302, 301, 334, 390, 330, 320]
      },
      {
        name: 'Mail Ad',
        type: 'bar',
        stack: 'total',
        label: {
          show: true
        },
        emphasis: {
          focus: 'series'
        },
        data: [120, 132, 101, 134, 90, 230, 210]
      },
      {
        name: 'Affiliate Ad',
        type: 'bar',
        stack: 'total',
        label: {
          show: true
        },
        emphasis: {
          focus: 'series'
        },
        data: [220, 182, 191, 234, 290, 330, 310]
      },
      {
        name: 'Video Ad',
        type: 'bar',
        stack: 'total',
        label: {
          show: true
        },
        emphasis: {
          focus: 'series'
        },
        data: [150, 212, 201, 154, 190, 330, 410]
      },
      {
        name: 'Search Engine',
        type: 'bar',
        stack: 'total',
        label: {
          show: true
        },
        emphasis: {
          focus: 'series'
        },
        data: [820, 832, 901, 934, 1290, 1330, 1320]
      }
    ],
    color: ["#6366f1", "#60a5fa", "#eab308", "#22c55e", "#f43f5e"]
  };

  return (<ReactEcharts className="chartsh" option={options} />);
};
export function PieEChart() {

  const options = {
    tooltip: {
      trigger: 'item'
    },
    legend: {
      orient: 'vertical',
      left: 'left',
      textStyle: {
        color: 'rgb(119, 119, 142)'
      }
    },
    series: [
      {
        name: 'Access From',
        type: 'pie',
        radius: '50%',
        data: [
          { value: 1048, name: 'Search Engine' },
          { value: 735, name: 'Direct' },
          { value: 580, name: 'Email' },
          { value: 484, name: 'Union Ads' },
          { value: 300, name: 'Video Ads' }
        ],
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      }
    ],
    color: ["#6366f1", "#60a5fa", "#eab308", "#22c55e", "#f43f5e"]
  };

  return (<ReactEcharts className="chartsh" option={options} />);
};
export function DoughnutEChart() {

  const options = {
    tooltip: {
      trigger: 'item'
    },
    legend: {
      top: '0%',
      left: 'center',
      textStyle: {
        color: 'rgb(119, 119, 142)'
      }
    },
    series: [
      {
        name: 'Access From',
        type: 'pie',
        radius: ['40%', '70%'],
        avoidLabelOverlap: false,
        label: {
          show: false,
          position: 'center'
        },
        emphasis: {
          label: {
            show: true,
            fontSize: '17',
            fontWeight: 'bold'
          }
        },
        labelLine: {
          show: false
        },
        data: [
          { value: 1048, name: 'Search Engine' },
          { value: 735, name: 'Direct' },
          { value: 580, name: 'Email' },
          { value: 484, name: 'Union Ads' },
          { value: 300, name: 'Video Ads' }
        ]
      }
    ],
    color: ["#6366f1", "#60a5fa", "#eab308", "#22c55e", "#f43f5e"]
  };

  return (<ReactEcharts className="chartsh" option={options} />);
};
export function BasicScatterEChart() {

  const options = {
    grid: {
      left: '0%',
      right: '0%',
      bottom: '0%',
      top: '10%',
      containLabel: true
    },
    splitLine: {
      lineStyle: {
        color: "rgba(142, 156, 173,0.1)"
      }
    },
    // yAxis: {
    //     axisLine: {
    //         lineStyle: {
    //             color: "#8c9097"
    //         }
    //     }
    // },
    series: [
      {
        symbolSize: 20,
        data: [
          [10.0, 8.04],
          [8.07, 6.95],
          [13.0, 7.58],
          [9.05, 8.81],
          [11.0, 8.33],
          [14.0, 7.66],
          [13.4, 6.81],
          [10.0, 6.33],
          [14.0, 8.96],
          [12.5, 6.82],
          [9.15, 7.2],
          [11.5, 7.2],
          [3.03, 4.23],
          [12.2, 7.83],
          [2.02, 4.47],
          [1.05, 3.33],
          [4.05, 4.96],
          [6.03, 7.24],
          [12.0, 6.26],
          [12.0, 8.84],
          [7.08, 5.82],
          [5.02, 5.68]
        ],
        type: 'scatter'
      }
    ],
    color: ["#6366f1"]
  };

  return (<ReactEcharts className="chartsh" option={options} />);
};

export function CandlestickEChart() {
  const options = {
    grid: {
      left: '5%',
      right: '0%',
      bottom: '10%',
      top: '10%'
    },
    splitLine: {
      lineStyle: {
        color: "rgba(142, 156, 173,0.1)"
      }
    },
    xAxis: {
      data: ['2017-10-24', '2017-10-25', '2017-10-26', '2017-10-27'],
    },
    yAxis: {
      type: 'value',
      axisLine: {
        lineStyle: {
          color: "#8c9097"
        }
      },
      splitLine: {
        lineStyle: {
          color: "rgba(142, 156, 173,0.1)"
        }
      }
    },
    series: [
      {
        type: 'candlestick',
        data: [
          [20, 34, 10, 38],
          [40, 35, 30, 50],
          [31, 38, 33, 44],
          [38, 15, 5, 42]
        ],
        itemStyle: {
          normal: {
            color: "#6366f1",
            color0: "#60a5fa",
            borderColor: "#6366f1",
            borderColor0: "#60a5fa",
          }
        }
      }
    ]
  };

  return (<ReactEcharts className="chartsh" option={options} />);
};
export function RadarEChart() {
  const options = {
    legend: {
      data: ['Allocated Budget', 'Actual Spending'],
      left: '0%',
      top: '0%',
      textStyle: {
        color: 'rgb(119, 119, 142)'
      }
    },
    radar: {
      indicator: [
        { name: 'Sales', max: 6500 },
        { name: 'Administration', max: 16000 },
        { name: 'Information Technology', max: 30000 },
        { name: 'Customer Support', max: 38000 },
        { name: 'Development', max: 52000 },
        { name: 'Marketing', max: 25000 }
      ]
    },
    series: [
      {
        name: 'Budget vs spending',
        type: 'radar',
        data: [
          {
            value: [4200, 3000, 20000, 35000, 50000, 18000],
            name: 'Allocated Budget'
          },
          {
            value: [5000, 14000, 28000, 26000, 42000, 21000],
            name: 'Actual Spending'
          }
        ]
      }
    ],
    color: ["#6366f1", "#60a5fa"]
  };

  return (<ReactEcharts className="chartsh" option={options} />);
};
export function HeatmapEChart() {

  const options = {
    title: {
      top: 30,
      left: 'center',
      text: 'Daily Step Count'
    },
    tooltip: {},
    visualMap: {
      min: 0,
      max: 10000,
      type: 'piecewise',
      orient: 'horizontal',
      left: 'center',
      top: 65
    },
    calendar: {
      top: 120,
      left: 30,
      right: 30,
      cellSize: ['auto', 13],
      range: '2016',
      itemStyle: {
        borderWidth: 0.5
      },
      yearLabel: { show: false }
    },
    series: {
      type: 'heatmap',
      coordinateSystem: 'calendar',
      data: ('2016')
    }
  };

  return (<ReactEcharts className="chartsh" option={options} />);
};
export function TreemapEChart() {

  const options = {
    series: [
      {
        type: 'treemap',
        data: [
          {
            name: 'nodeA',
            value: 10,
            children: [
              {
                name: 'nodeAa',
                value: 4
              },
              {
                name: 'nodeAb',
                value: 6
              }
            ]
          },
          {
            name: 'nodeB',
            value: 20,
            children: [
              {
                name: 'nodeBa',
                value: 20,
                children: [
                  {
                    name: 'nodeBa1',
                    value: 20
                  }
                ]
              }
            ]
          }
        ]
      }
    ],
    color: ["#6366f1", "#60a5fa"]
  };

  return (<ReactEcharts className="chartsh" option={options} />);
};
export function FunnelEChart() {

  const options = {
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b} : {c}%'
    },
    toolbox: {
      feature: {
        dataView: { readOnly: false },
        restore: {},
        saveAsImage: {}
      }
    },
    legend: {
      data: ['Show', 'Click', 'Visit', 'Inquiry', 'Order'],
      textStyle: {
        color: 'rgb(119, 119, 142)'
      }
    },
    series: [
      {
        name: 'Funnel',
        type: 'funnel',
        left: '10%',
        top: 60,
        bottom: 60,
        width: '80%',
        min: 0,
        max: 100,
        minSize: '0%',
        maxSize: '100%',
        sort: 'descending',
        gap: 2,
        label: {
          show: true,
          position: 'inside'
        },
        labelLine: {
          length: 10,
          lineStyle: {
            width: 1,
            type: 'solid'
          }
        },
        itemStyle: {
          borderColor: '#fff',
          borderWidth: 1
        },
        emphasis: {
          label: {
            fontSize: 20
          }
        },
        data: [
          { value: 60, name: 'Visit' },
          { value: 40, name: 'Inquiry' },
          { value: 20, name: 'Order' },
          { value: 80, name: 'Click' },
          { value: 100, name: 'Show' }
        ]
      }
    ],
    color: ["#6366f1", "#60a5fa", "#eab308", "#22c55e", "#f43f5e"]
  };

  return (<ReactEcharts className="chartsh" option={options} />);
};
export function BasicGaugeEChart() {

  const options = {
    tooltip: {
      formatter: '{a} <br/>{b} : {c}%'
    },
    series: [
      {
        name: 'Pressure',
        type: 'gauge',
        progress: {
          show: true
        },
        detail: {
          valueAnimation: true,
          formatter: '{value}'
        },
        data: [
          {
            value: 50,
            name: 'SCORE'
          }
        ]
      }
    ],
    color: ["#6366f1"]
  };

  return (<ReactEcharts className="chartsh" option={options} />);
};
export function SimpleGraphEChart() {

  const options = {
    tooltip: {},
    animationDurationUpdate: 1500,
    animationEasingUpdate: 'quinticInOut',
    series: [
      {
        type: 'graph',
        layout: 'none',
        symbolSize: 50,
        roam: true,
        label: {
          show: true
        },
        edgeSymbol: ['circle', 'arrow'],
        edgeSymbolSize: [4, 10],
        edgeLabel: {
          fontSize: 20
        },
        data: [
          {
            name: 'Node 1',
            x: 300,
            y: 300
          },
          {
            name: 'Node 2',
            x: 800,
            y: 300
          },
          {
            name: 'Node 3',
            x: 550,
            y: 100
          },
          {
            name: 'Node 4',
            x: 550,
            y: 500
          }
        ],
        links: [
          {
            source: 0,
            target: 1,
            symbolSize: [5, 20],
            label: {
              show: true
            },
            lineStyle: {
              width: 5,
              curveness: 0.2
            }
          },
          {
            source: 'Node 2',
            target: 'Node 1',
            label: {
              show: true
            },
            lineStyle: {
              curveness: 0.2
            }
          },
          {
            source: 'Node 1',
            target: 'Node 3'
          },
          {
            source: 'Node 2',
            target: 'Node 3'
          },
          {
            source: 'Node 2',
            target: 'Node 4'
          },
          {
            source: 'Node 1',
            target: 'Node 4'
          }
        ],
        lineStyle: {
          opacity: 0.9,
          width: 2,
          curveness: 0
        }
      }
    ],
    color: ["#6366f1"]
  };

  return (<ReactEcharts className="chartsh" option={options} />);
};

// **************************************************************************************************************

// **************************************************************************************************************

//  **Stock Dashboard**

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

      <div >
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

      <div >
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

      <div >
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

      <div >
        <ReactApexChart height={50} width={100} className="min-w-fit" options={this.state.options} series={this.state.series} type="line" />
      </div>
    );
  }
};

const fileData = {
  type: 'doughnut',
  label: 'My First Dataset',
  datasets: [
    {
      data: [75, 25],
      backgroundColor: [
        'rgb(94, 166, 142)',
        'rgb(249, 250, 251)'
      ],
      borderWidth: 0,
    },
  ],
};

const fileOptions = {
  responsive: true,
  // maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
    },
  },
  cutout: "75%",
};

export function FileChart() {
  return <Doughnut className="chartjs-chart w-full" data={fileData} options={fileOptions} height={250} />;
}
