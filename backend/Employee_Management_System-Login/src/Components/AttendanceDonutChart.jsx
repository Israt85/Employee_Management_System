// AttendanceDonutChart.jsx
import React from "react";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

const data = [
  { name: "Present", value: 120 },
  { name: "Absent", value: 20 },
  { name: "Late", value: 10 },
];

const COLORS = ["#4CAF50", "#F44336", "#FFC107"]; // Green, Red, Yellow

const AttendanceDonutChart = () => {
  return (
    <div className="flex justify-center items-center h-full">
      <div className="bg-white p-6 rounded-xl shadow-lg">
        <h2 className="text-2xl font-bold text-center mb-4">Attendance Overview</h2>
        <PieChart width={350} height={350}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={80}  // Makes it a donut
            outerRadius={140}
            fill="#8884d8"
            paddingAngle={5}
            dataKey="value"
            label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend verticalAlign="bottom" height={36}/>
        </PieChart>
      </div>
    </div>
  );
};

export default AttendanceDonutChart;
