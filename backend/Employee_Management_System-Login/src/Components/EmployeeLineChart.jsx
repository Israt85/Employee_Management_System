import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { month: "Jan", employees: 5 },
  { month: "Feb", employees: 8 },
  { month: "Mar", employees: 4 },
  { month: "Apr", employees: 10 },
  { month: "May", employees: 7 },
  { month: "Jun", employees: 12 },
  { month: "Jul", employees: 9 },
  { month: "Aug", employees: 15 },
  { month: "Sep", employees: 11 },
  { month: "Oct", employees: 13 },
  { month: "Nov", employees: 6 },
  { month: "Dec", employees: 14 },
];

export default function EmployeeLineChart() {
  return (
    <div
      style={{
        width: "100%",
        height: 400,
        background: "white",
        borderRadius: "12px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        padding: "16px",
      }}
    >
      <h3
        style={{
          textAlign: "center",
          marginBottom: "12px",
          color: "#6b21a8", // deep purple heading
          fontWeight: "600",
        }}
      >
        Employees Added Per Month
      </h3>
      <ResponsiveContainer width="100%" height="90%">
        <LineChart
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 10 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
          <XAxis dataKey="month" tick={{ fill: "#6b21a8" }} />
          <YAxis tick={{ fill: "#6b21a8" }} />
          <Tooltip
            contentStyle={{
              backgroundColor: "#f3e8ff",
              borderColor: "#a855f7",
              color: "#4c1d95",
            }}
          />
          <Line
            type="monotone"
            dataKey="employees"
            stroke="#8b5cf6" // main purple line
            strokeWidth={3}
            dot={{ fill: "#7c3aed", r: 6 }}
            activeDot={{ r: 8, fill: "#6d28d9" }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
