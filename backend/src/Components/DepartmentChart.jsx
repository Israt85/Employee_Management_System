import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const DepartmentChart = () => {
  const data = [
    { department: "HR", employees: 8 },
    { department: "Finance", employees: 12 },
    { department: "IT", employees: 20 },
    { department: "Marketing", employees: 15 },
    { department: "Sales", employees: 18 },
    { department: "Operations", employees: 10 },
  ];

  return (
    <div className="w-full max-w-3xl mx-auto bg-white p-6 rounded-2xl shadow-md">
      <h2 className="text-xl font-semibold mb-4 text-center text-purple-700">
        Department-wise Employee Count
      </h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
          <XAxis dataKey="department" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="employees" fill="#a855f7" radius={[10, 10, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default DepartmentChart;
