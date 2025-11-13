// SalaryPieChart.jsx
import React from "react";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

const data = [
  { name: "HR", value: 4000 },
  { name: "Engineering", value: 8000 },
  { name: "Sales", value: 3000 },
  { name: "Marketing", value: 2000 },
  { name: "Finance", value: 1000 },
];

const COLORS = ["#8A2BE2", "#9B30FF", "#A74AC7", "#B565A7", "#C875C4"];

const SalaryPieChart = () => {
  return (
    <div className="flex justify-center items-center bg-gray-100">
      <div className="bg-white rounded-xl shadow-lg">
        <h2 className="text-2xl font-bold text-center mb-4">Salary Distribution</h2>
        <PieChart width={400} height={400}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
            outerRadius={150}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </div>
    </div>
  );
};

export default SalaryPieChart;
