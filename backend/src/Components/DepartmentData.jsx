import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend } from "recharts";

// Sample employee data
const employees = [
  { id: 1, name: "Alice", department: "HR" },
  { id: 2, name: "Bob", department: "HR" },
  { id: 3, name: "Charlie", department: "Engineering" },
  { id: 4, name: "David", department: "Engineering" },
  { id: 5, name: "Eva", department: "Marketing" },
];

// Process data for chart
const departmentData = Object.values(
  employees.reduce((acc, emp) => {
    if (!acc[emp.department]) {
      acc[emp.department] = { department: emp.department, count: 0 };
    }
    acc[emp.department].count += 1;
    return acc;
  }, {})
);

export const EmployeeDistributionChart = () => {
  return (
    <div className="w-full h-80 bg-white p-6 rounded-xl shadow-lg">
      <h2 className="text-xl font-bold mb-4 text-gray-700">Employee Distribution by Department</h2>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={departmentData} margin={{ top: 20, right: 20, left: 0, bottom: 5 }}>
          <XAxis dataKey="department" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="count" fill="#7C3AED" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};
