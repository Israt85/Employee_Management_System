import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Legend,
  LineChart,
  Line,
} from "recharts";

// Fake data
const leaveSummary = [
  { name: "Taken", value: 8 },
  { name: "Remaining", value: 12 },
];

const departmentStats = [
  { department: "IT", leaves: 15 },
  { department: "HR", leaves: 10 },
  { department: "Marketing", leaves: 8 },
  { department: "Finance", leaves: 5 },
];

const leaveTrends = [
  { month: "Jan", leaves: 5 },
  { month: "Feb", leaves: 3 },
  { month: "Mar", leaves: 8 },
  { month: "Apr", leaves: 6 },
  { month: "May", leaves: 7 },
];

const upcomingLeaves = [
  { employee: "John Doe", date: "2025-11-20", type: "Full Day" },
  { employee: "Jane Smith", date: "2025-11-22", type: "Half Day" },
  { employee: "Ali Khan", date: "2025-11-25", type: "Full Day" },
];

const COLORS = ["#6366F1", "#A78BFA"];

const LeaveDashboard = () => {
  return (
    <div className="p-6 space-y-6">
      <h2 className="text-3xl font-bold mb-6">Leave Dashboard / Overview</h2>

      {/* Two-column grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        {/* Leave Summary */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4">Total Leave Taken vs Remaining</h3>
          <div className="w-full h-64">
            <ResponsiveContainer>
              <PieChart>
                <Pie
                  data={leaveSummary}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  label
                >
                  {leaveSummary.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Department-wise Statistics */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4">Leave Statistics by Department</h3>
          <div className="w-full h-64">
            <ResponsiveContainer>
              <BarChart data={departmentStats}>
                <XAxis dataKey="department" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="leaves" fill="#6366F1" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Upcoming Leaves Calendar */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4">Upcoming Leaves</h3>
          <ul className="divide-y divide-gray-200">
            {upcomingLeaves.map((leave, idx) => (
              <li key={idx} className="py-2 flex justify-between">
                <span>{leave.employee}</span>
                <span>{leave.date}</span>
                <span className="text-sm text-gray-500">{leave.type}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Leave Trends */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4">Leave Trends (Monthly)</h3>
          <div className="w-full h-64">
            <ResponsiveContainer>
              <LineChart data={leaveTrends}>
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="leaves" stroke="#6366F1" strokeWidth={3} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

      </div>
    </div>
  );
};

export default LeaveDashboard;
