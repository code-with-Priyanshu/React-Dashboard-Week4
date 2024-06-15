import React from "react";
import { Bar } from "react-chartjs-2";
import { Box } from "@mui/material";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Charts = ({ tableData }) => {
  const labels = tableData.map((row) => row.name);
  const calories = tableData.map((row) => row.calories);
  const fat = tableData.map((row) => row.fat);
  const carbs = tableData.map((row) => row.carbs);
  const protein = tableData.map((row) => row.protein);

  const data = {
    labels,
    datasets: [
      {
        label: "Calories",
        data: calories,
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: "Fat",
        data: fat,
        backgroundColor: "rgba(54, 162, 235, 0.5)",
      },
      {
        label: "Carbs",
        data: carbs,
        backgroundColor: "rgba(75, 192, 192, 0.5)",
      },
      {
        label: "Protein",
        data: protein,
        backgroundColor: "rgba(153, 102, 255, 0.5)",
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Nutritional Information",
      },
    },
  };

  return (
    <Box>
      <Bar data={data} options={options} />
    </Box>
  );
};

export default Charts;
