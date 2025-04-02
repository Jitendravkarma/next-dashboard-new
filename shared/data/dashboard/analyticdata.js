
import dynamic from "next/dynamic";
import { Component } from "react";
const ReactApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });

//Visitors By Channel

export const channel = [
  { id: 1, icon: "search-2-line", class: "Organic Search", text: "782", text1: "32.09%", data: "0 hrs : 0 mins : 32 secs", data1: "278", data2: "2.9", color: "primary" },
  { id: 2, icon: "globe-line", class: "Direct", text: "882", text1: "39.38%", data: "0 hrs : 2 mins : 45 secs	", data1: "782", data2: "1.5", color: "secondary" },
  { id: 3, icon: "share-forward-line", class: "Referral", text: "322", text1: "22.67%", data: "0 hrs : 38 mins : 28 secs", data1: "622", data2: "3.2", color: "danger" },
  { id: 4, icon: "reactjs-line", class: "Social", text: "389", text1: "25.11%", data: "0 hrs : 12 mins : 89 secs", data1: "142", data2: "1.4", color: "warning" },
  { id: 5, icon: "mail-line", class: "Email", text: "378", text1: "23.79%", data: "0 hrs : 14 mins : 27 secs", data1: "178", data2: "1.6", color: "info" },
  { id: 6, icon: "bank-card-line", class: "Paid Search", text: "488", text1: "28.77%", data: "0 hrs : 16 mins : 28 secs", data1: "578", data2: "2.5", color: "success" },
];
//Audience Overview

export class AudienceOverview extends Component {
  constructor(props) {
    super(props);

    this.state = {

      series: [{
        data: [44, 55, 41, 64, 22, 43, 21]
      }, {
        data: [53, 32, 33, 52, 13, 44, 32]
      }],
      options: {
        chart: {
          type: 'bar',
          height: 280,
          toolbar: {
            show: false,
          },
        },
        plotOptions: {
          bar: {
            horizontal: true,
            dataLabels: {
              position: 'top',
            },
          }
        },
        grid: {
          borderColor: "rgba(107 ,114 ,128,0.1)",
        },
        colors: ["rgba(var(--color-primary))", "rgb(203,213,225)"],
        dataLabels: {
          enabled: false,
          offsetX: -6,
          style: {
            fontSize: '12px',
            colors: ['#fff']
          }
        },
        legend: {
          show: false,
        },
        stroke: {
          show: true,
          width: 1,
          colors: ['rgba(107 ,114 ,128,0.1)']
        },
        tooltip: {
          shared: true,
          intersect: false
        },
        xaxis: {
          categories: ['Jan', 'feb', 'mar', 'apr', 'jun', 'jul', 'aug'],
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
              fontWeight: 500,
              cssClass: 'apexcharts-yaxis-label',
            },
          }
        }

      },

    };
  }

  render() {
    return (

      <div className='overview'>
        <ReactApexChart className="flex justify-center" height={280} width={"100%"} options={this.state.options} series={this.state.series} type="bar" />
      </div>
    );
  }
};
//Device views

export class Deviceview extends Component {
  constructor(props) {
    super(props);

    this.state = {

      series: [1754, 1234, 878, 270],
      options: {
        chart: {
          height: 325,
          type: "donut",
        },
        dataLabels: {
          enabled: false,
        },

        legend: {
          position: "bottom",
          horizontalAlign: "center",
          fontSize: "15px",
          fontWeight: 500,

        },
        stroke: {
          show: true,
          curve: "smooth",
          lineCap: "round",
          width: 0,
          dashArray: 0,
        },
        grid: {
          borderColor: "rgba(107 ,114 ,128,0.1)",
        },
        plotOptions: {
          pie: {
            expandOnClick: false,
            donut: {
              size: "80%",
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
                  fontSize: "20px",
                  fontWeight: 600,
                  offsetY: 8,
                  formatter: function (val) {
                    return val + "%";
                  },
                },
                total: {
                  show: true,
                  showAlways: true,
                  label: "Total",
                  fontSize: "20px",
                  color: "rgb(100, 116, 139)",
                },
              },
            },
          },
        },
        labels: ["Mobile", "Tablet", "Desktop", "Others"],
        colors: [
          "rgba(var(--color-primary))",
          "rgba(96,165,250, 1)",
          "rgba(234,179 ,8, 1)",
          "rgba(203,213,225, 1)",
        ],
      },

    };
  }

  render() {
    return (

      <div>
        <ReactApexChart height={340} width={"100%"} options={this.state.options} series={this.state.series} type="donut" />
      </div>
    );
  }
};
//Session Overview

export class SessionOverview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      series: [props.data], // ✅ updated to match the new structure
      options: {
        chart: {
          height: 300,
          type: "bar",
          zoom: { enabled: false },
          toolbar: { show: false },
        },
        grid: {
          borderColor: "rgba(107 ,114 ,128,0.1)",
        },
        plotOptions: {
          bar: {
            columnWidth: "55%",
            borderRadius: 4,
            borderRadiusApplication: 'end',
            borderRadiusWhenStacked: 'last',
          },
        },
        dataLabels: { enabled: false },
        legend: { show: false },
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
            formatter: y => y.toFixed(0) + "",
          },
        },
        xaxis: {
          categories: [
            "Jan", "Feb", "Mar", "Apr", "May", "Jun",
            "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
          ],
          axisBorder: {
            show: true,
            color: "rgba(119, 119, 142, 0.05)",
          },
          axisTicks: {
            show: true,
            borderType: "solid",
            color: "rgba(119, 119, 142, 0.05)",
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

  componentDidUpdate(prevProps) {
    if (prevProps.data !== this.props.data) {
      this.setState({
        series: [this.props.data], // ✅ update series properly
      });
    }
  }

  render() {
    return (
      <div>
        <ReactApexChart
          height={315}
          width={"100%"}
          options={this.state.options}
          series={this.state.series}
          type="bar"
        />
      </div>
    );
  }
}
//Sessions By Gender

export class SessionsByGender extends Component {
  constructor(props) {
    super(props);

    this.state = {

      series: [40, 40, 20],
      options: {
        chart: {
          type: 'polarArea',
          height: 350,
          width: 450
        },
        labels: ['Male', 'Female', 'Others'],
        stroke: {
          colors: ['#fff']
        },
        fill: {
          opacity: 0.8
        },
        legend: {
          position: 'bottom'
        },
        colors: ["#5a66f1", "#d5dde7", "#60a5fa"],
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
      },
    };
  }

  render() {
    return (

      <div>
        <ReactApexChart className="flex justify-center" height={350} width={"100%"} options={this.state.options} series={this.state.series} type="polarArea" />
      </div>
    );
  }
};
//Earnings Report

export class EarningReport extends Component {
  constructor(props) {
    super(props);

    this.state = {

      series: [
        {
          name: 'Students',
          type: 'column',
          data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 45, 35]
        },
        {
          name: 'Earnings',
          type: 'line',
          data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43, 27]
        },
      ],
      options: {
        chart: {
          toolbar: {
            show: false
          },
          type: 'line',
          height: 340,
        },
        grid: {
          borderColor: "rgba(107 ,114 ,128,0.1)",
          strokeDashArray: 3
        },
        colors: ["rgba(var(--color-primary))", "rgb(203,213,225)"],
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        dataLabels: {
          enabled: false
        },
        stroke: {
          width: [1, 1.1],
          curve: ['straight', 'smooth'],
        },
        legend: {
          show: false,
        },
        xaxis: {
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
        },
        plotOptions: {
          bar: {
            columnWidth: "22%",
            borderRadius: 2,
            borderRadiusApplication: 'end', // 'around', 'end'
            borderRadiusWhenStacked: 'last', // 'all', 'last'
          }
        },
      },

    };
  }

  render() {
    return (

      <div>
        <ReactApexChart height={340} width={"100%"} options={this.state.options} series={this.state.series} type="line" />
      </div>
    );
  }
};
//Dashboard CRM

//Revenue

export class Revenue extends Component {
  constructor(props) {
    super(props);

    this.state = {

      series: [
        {
          name: "Deals",
          type: "column",
          data: [23, 11, 22, 35, 17, 28, 22, 37, 21, 44, 22, 30],
        },
        {
          name: "Revenue",
          type: "line",
          data: [30, 25, 36, 30, 45, 35, 64, 51, 59, 36, 39, 51],
        },
      ],
      options: {
        chart: {
          height: 280,
          type: "line",
          stacked: !1,
          toolbar: {
            show: !1,
          },
        },
        grid: {
          borderColor: "rgba(107 ,114 ,128,0.1)",
        },
        dataLabels: {
          enabled: false,
        },
        xaxis: {
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
        },
        legend: {
          position: "top",
          show: false,
        },
        colors: ["rgba(var(--color-primary))", "rgb(203,213,225)"],
        stroke: {
          width: [1.3, 1],
          curve: ["straight", "smooth"],
        },
        labels: [
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
        plotOptions: {
          bar: {
            columnWidth: "15%",
            borderRadius: 1,
          },
        },
      },

    };
  }

  render() {
    return (

      <div>
        <ReactApexChart height={280} width={"100%"} options={this.state.options} series={this.state.series} type="line" />
      </div>
    );
  }
};

//Leads By Source

export class LeadsBySource extends Component {
  constructor(props) {
    super(props);

    this.state = {

      series: [
        {
          data: [400, 430, 470, 540, 600, 800]
        },
      ],
      options: {
        chart: {
          type: "bar",
          height: 380,
          toolbar: {
            show: false,
          },
        },
        fill: {
          type: "gradient",
          gradient: {
            shadeIntensity: 1,
            opacityFrom: 0.7,
            opacityTo: 1,
            colorStops: [
              {
                offset: 0,
                color: "#60a5fa",
                opacity: 1,
              },
              {
                offset: 100,
                color: "#5a66f1",
                opacity: 1,
              },
            ],
          },
        },
        plotOptions: {
          bar: {
            borderRadius: 4,
            horizontal: true,
            borderRadiusApplication: 'end', // 'around', 'end'
            borderRadiusWhenStacked: 'last', // 'all', 'last'
          },
        },
        colors: ["#5e76a6"],
        grid: {
          borderColor: "transparent",
        },
        dataLabels: {
          enabled: false,
        },
        xaxis: {
          categories: ['Marketing', 'Digital', 'Web', 'Advertisement', 'Employee Referal', 'Other'],
          axisBorder: {
            show: true,
            color: "rgba(119, 119, 142, 0.1)",
            offsetX: 0,
            offsetY: 0,
          },
          axisTicks: {
            show: true,
            borderType: "solid",
            color: "rgba(119, 119, 142, 0.1)",
            offsetX: 0,
            offsetY: 0,
          },
          labels: {
            show: true,
            style: {
              colors: "#adb5be",
              fontSize: "11px",
              fontWeight: 600,
              cssClass: "apexcharts-xaxis-label",
            },
          },
        },
        yaxis: {
          labels: {
            show: true,
            style: {
              colors: "#adb5be",
              fontSize: "11px",
              fontWeight: 600,
              cssClass: "apexcharts-yaxis-label",
            },
          },
        },
      },

    };
  }

  render() {
    return (

      <div id="leads-by-soruce" className='leads'>
        <ReactApexChart height={380} width={"100%"} options={this.state.options} series={this.state.series} type="bar" />
      </div>
    );
  }
};

//CRM DATA

//Leads Report

export const leadsreport = [
  { id: 1, src: "../../assets/img/users/2.jpg", class: "Socrates Itumay", mail: "socratesitumay@gmail.com", phone: "+1(555) 354 2345", company: "Beckle Heth Corp.", location: "Germany", date: "02-04-2023", status: "Won Lead", color: "success" },
  { id: 2, src: "../../assets/img/users/12.jpg", class: "Luke Cooper", mail: "LukeCooper@gmail.com", phone: "+1(555) 873 8923", company: "Lackme Info Et.", location: "London", date: "03-04-2023", status: "New Lead", color: "primary" },
  { id: 3, src: "../../assets/img/users/14.jpg", class: "Rony Brad", mail: "RonyBrad@gmail.com", phone: "+1(555) 347 0923", company: "Mevengo Tech Et Sed", location: "Usa", date: "04-04-2023", status: "New Lead", color: "primary" },
  { id: 4, src: "../../assets/img/users/4.jpg", class: "Sophia Khud", mail: "RonyBrad@gmail.com", phone: "+1(555) 674 7824", company: "Jeveda Group En.", location: "Canada", date: "05-04-2023", status: "Lost Lead", color: "danger" },
  { id: 5, src: "../../assets/img/users/3.jpg", class: "Cooper Hard", mail: "CooperHard@gmail.com", phone: "+1(555) 985 2893", company: "Neveia Exp Sid", location: "England", date: "06-04-2023", status: "New Lead", color: "primary" },
  { id: 6, src: "../../assets/img/users/5.jpg", class: "Chad Xic", mail: "ChadXic@gmail.com", phone: "+1(555) 238 2342", company: "Ixin Corp.", location: "Australia", date: "07-04-2023", status: "New Lead", color: "primary" },
  { id: 7, src: "../../assets/img/users/15.jpg", class: "Rover Imo", mail: "RoverImo@gmail.com", phone: "+1(555) 972 9883", company: "Myami Group & Tech.", location: "Spain", date: "08-04-2023", status: "Won Lead", color: "success" },
  { id: 8, src: "../../assets/img/users/11.jpg", class: "Helen Sha", mail: "HelenSha@gmail.com", phone: "+1(555) 890 5687", company: "Inferno Xo", location: "China", date: "09-04-2023", status: "New Lead", color: "primary" },
  { id: 9, src: "../../assets/img/users/8.jpg", class: "Shakira Neo", mail: "ShakiraNeo@gmail.com", phone: "+1(555) 765 8937", company: "Ideal IT Sol.", location: "Italy", date: "10-04-2023", status: "Lost Lead", color: "danger" },
  { id: 10, src: "../../assets/img/users/13.jpg", class: "Shaggy Yt", mail: "ShaggyYt@gmail.com", phone: "+1(555) 675 4680", company: "Xenon Tech. Ed.", location: "Europe", date: "11-04-2023", status: "New Lead", color: "primary" },
];

//COURSE DATA

//New Students

export const students = [
  { id: 1, src: "../../assets/img/users/11.jpg", class: "Richard Dom", mail: "richarddom1116@demo.com", course: "9", complete: "1" },
  { id: 2, src: "../../assets/img/users/4.jpg", class: "Jonathan Ion", mail: "john.ion@demo", course: "9", complete: "0" },
  { id: 3, src: "../../assets/img/users/3.jpg", class: "Mary Curie", mail: "mary.11@demo.com", course: "15", complete: "0" },
  { id: 4, src: "../../assets/img/users/13.jpg", class: "Richard Nike", mail: "richard.16@demo.com", course: "16", complete: "3" },
  { id: 5, src: "../../assets/img/users/2.jpg", class: "Socrates Itumay", mail: "socratesitumay@gmail.com", course: "10", complete: "5" },
  { id: 6, src: "../../assets/img/users/12.jpg", class: "Charlie Davieson", mail: "charliedavieson@gmail.com", course: "10", complete: "5" },
];

//Top Instructors

export const Instructors = [
  { id: 1, class: "Jony Hny", course: "M.tech", data: "321 courses", data1: "Digital Marketing", src: "../../assets/img/users/2.jpg", class1: "mb-6" },
  { id: 2, class: "Mortal Yun", course: "Phd", data: "25 courses", data1: "Stocks & trading", src: "../../assets/img/users/12.jpg", class1: "mb-6" },
  { id: 3, class: "Trex Con", course: "MBBS", data: "39 courses", data1: "Science", src: "../../assets/img/users/13.jpg", class1: "mb-6" },
  { id: 4, class: "Saiu Sarah", course: "Phd", data: "11 courses", data1: "Science", src: "../../assets/img/users/3.jpg", class1: "mb-6" },
  { id: 5, class: "Ion Hao", course: "M tech", data: "124 courses", data1: "Web Development", src: "../../assets/img/users/4.jpg", class1: "mb-6" },
  { id: 6, class: "Roman Killan", course: "M.tech", data: "163 courses", data1: "Ui/Ux designing", src: "../../assets/img/users/14.jpg", class1: "mb-6" },
  { id: 7, class: "Suzuika Stallone", course: "Phd", data: "110 courses", data1: "Machine Leadning", src: "../../assets/img/users/5.jpg", class1: "mb-6" },
  { id: 8, class: "Robert Lewis", course: "Phd", data: "150 courses", data1: "Java Development", src: "../../assets/img/users/15.jpg", class1: "" },
];
