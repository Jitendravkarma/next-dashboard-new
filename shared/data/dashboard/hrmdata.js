
import dynamic from "next/dynamic";
import { Component } from "react";
const ReactApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });

//Employee Salary Details

export const salarydetails = [
  { id: 1, src: "../../assets/img/users/8.jpg", class: "Robert Steeve", mail: "robertsteeve112@demo.com", department: "Front End", design: "UI Designer", salary: "$12,000", leaves: "2", net: "$11,890", status: "Paid", color: "success" },
  { id: 2, src: "../../assets/img/users/4.jpg", class: "Steeve Robert", mail: "steeverobert121@demo.com", department: "Front End", design: "UI Developer", salary: "$15,000", leaves: "0", net: "$15,000", status: "Paid", color: "success" },
  { id: 3, src: "../../assets/img/users/3.jpg", class: "Mary Rose", mail: "marymary334@demo.com", department: "Back End", design: "PHP Developer", salary: "$22,000", leaves: "1", net: "$21,890", status: "pending", color: "warning" },
  { id: 4, src: "../../assets/img/users/21.jpg", class: "Stella Rose", mail: "stellarose258@demo.com", department: "Android", design: "Ionic Developer", salary: "$21,500", leaves: "0", net: "$21,500", status: "Technical Issue", color: "danger" },
  { id: 5, src: "../../assets/img/users/11.jpg", class: "John Abraham", mail: "abrahamjohn394@demo.com", department: "Front End", design: "UI Designer", salary: "$12,000", leaves: "3", net: "$11,835", status: "Paid", color: "success" },
  { id: 6, src: "../../assets/img/users/12.jpg", class: "Richard Bose", mail: "richardrichi.1233@demo.com", department: "Front End", design: "UI Developer", salary: "$12,000", leaves: "4", net: "$11,780", status: "pending", color: "warning" },
  { id: 7, src: "../../assets/img/users/13.jpg", class: "Abagnale Mal", mail: "abgnalemal000@demo.com", department: "Back End", design: "Java Developer", salary: "$25,000", leaves: "0", net: "$25,000", status: "Paid", color: "success" },
  { id: 8, src: "../../assets/img/users/5.jpg", class: "Rose Mary", mail: "rosemary434@demo.com", department: "Back End", design: "PHP Developer", salary: "$22,000", leaves: "0", net: "$22,000", status: "Technical Issue", color: "danger" },
  { id: 9, src: "../../assets/img/users/6.jpg", class: "Johnson Oley", mail: "johnsonoley394@demo.com", department: "Android", design: "Ionic Developer", salary: "$21,500", leaves: "1", net: "$21,455", status: "pending", color: "warning" },
  { id: 10, src: "../../assets/img/users/7.jpg", class: "Stephen Msi", mail: "stephenmsi222@demo.com", department: "Back End", design: "PHP Developer", salary: "$25,000", leaves: "0", net: "$25,000", status: "Paid", color: "success" },
];

//Sales Overview

export class SalesOverviewHRM extends Component {
  constructor(props) {
    super(props);

    this.state = {

      series: [{
        name: 'Designing',
        data: [44, 55, 41, 67, 22, 43, 44, 55, 41, 67, 22, 43]
      }, {
        name: 'Development',
        data: [13, 23, 20, 8, 13, 27, 13, 23, 20, 8, 13, 27]
      }, {
        name: 'SEO',
        data: [11, 17, 15, 15, 21, 14, 11, 17, 15, 15, 21, 14]
      }],
      options: {
        chart: {
          type: 'bar',
          height: 310,
          stacked: true,
          toolbar: {
            show: false
          },
          zoom: {
            enabled: true
          }
        },
        grid: {
          borderColor: "rgba(107 ,114 ,128,0.1)",
        },
        responsive: [{
          breakpoint: 480,
          options: {
            legend: {
              position: 'bottom',
              offsetX: 0,
              offsetY: 5
            }
          }
        }],
        colors: ["rgba(var(--color-primary))", "#60a5fa", "#d5dde7"],
        legend: {
          show: true,
          position: 'top',
          labels: {
            colors: '#74767c',
          },
        },
        plotOptions: {
          bar: {
            columnWidth: "20%",
            borderRadius: 5
          }
        },
        dataLabels: {
          enabled: false
        },
        xaxis: {
          categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
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
              colors: "#8c9097",
            },
          }
        },
        fill: {
          opacity: 1
        }
      },

    };
  }

  render() {
    return (

      <div id="chart">
        <ReactApexChart height={320} width={"100%"} options={this.state.options} series={this.state.series} type="bar" />
      </div>
    );
  }
};
