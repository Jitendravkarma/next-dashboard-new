import React from "react";
import { Doughnut } from "react-chartjs-2";

export const fileData = {
  labels: ["My First Dataset"],
  datasets: [
    {
      data: [75, 25],
      backgroundColor: ["rgb(94, 166, 142)", "rgb(249, 250, 251)"],
      borderWidth: 0,
    },
  ],
};

export const fileOptions = {
  responsive: true,
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

export const RecentfileData = [
  { id: 1, name: "Josh Brown", File: "5 files", Size: "250 MB", Type: "Folder", Date: "29-09-2022, 16:40" },
  { id: 2, name: "Jim Green", File: "2 files", Size: "100 MB", Type: "Folder", Date: "27-09-2022, 3:40" },
  { id: 3, name: "Joe Black", File: "1 file", Size: "50 MB", Type: "PDF file", Date: "17-09-2022, 13:40" },
  { id: 4, name: "Edward king", File: "1 file", Size: "50 MB", Type: "Word Document", Date: "17-09-2022, 13:40" },
  { id: 5, name: "Jim red", File: "10 files", Size: "500MB", Type: "Folder", Date: "13-09-2022, 5:20" },
];
