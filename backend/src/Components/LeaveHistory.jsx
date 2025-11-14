import React, { useState } from "react";

// Fake leave history data
const leaveHistoryData = [
  {
    id: 1,
    employee: "John Doe",
    department: "IT",
    leaveType: "Sick Leave",
    date: "2025-11-01",
    status: "Approved",
    reason: "Fever",
  },
  {
    id: 2,
    employee: "Jane Smith",
    department: "HR",
    leaveType: "Casual Leave",
    date: "2025-10-15",
    status: "Approved",
    reason: "Family Function",
  },
  {
    id: 3,
    employee: "Ali Khan",
    department: "Marketing",
    leaveType: "Academic Leave",
    date: "2025-09-05",
    status: "Rejected",
    reason: "Academic Exam",
  },
  {
    id: 4,
    employee: "John Doe",
    department: "IT",
    leaveType: "Sick Leave",
    date: "2025-08-20",
    status: "Approved",
    reason: "Fever",
  },
];

const LeaveHistory = () => {
  const [filters, setFilters] = useState({
    department: "",
    leaveType: "",
    year: "",
  });

  const handleFilterChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  // Filter data based on selected filters
  const filteredData = leaveHistoryData.filter((leave) => {
    return (
      (filters.department === "" || leave.department === filters.department) &&
      (filters.leaveType === "" || leave.leaveType === filters.leaveType) &&
      (filters.year === "" || new Date(leave.date).getFullYear().toString() === filters.year)
    );
  });

  return (
    <div className="p-6 bg-white mx-2">
      <h2 className="text-3xl font-bold mb-6">Leave History</h2>

      {/* Filters */}
      <div className="flex flex-wrap gap-4 mb-6">
        <select
          name="department"
          value={filters.department}
          onChange={handleFilterChange}
          className="p-2 border rounded"
        >
          <option value="">All Departments</option>
          <option value="IT">IT</option>
          <option value="HR">HR</option>
          <option value="Marketing">Marketing</option>
        </select>

        <select
          name="leaveType"
          value={filters.leaveType}
          onChange={handleFilterChange}
          className="p-2 border rounded"
        >
          <option value="">All Leave Types</option>
          <option value="Sick Leave">Sick Leave</option>
          <option value="Casual Leave">Casual Leave</option>
          <option value="Academic Leave">Academic Leave</option>
        </select>

        <select
          name="year"
          value={filters.year}
          onChange={handleFilterChange}
          className="p-2 border rounded"
        >
          <option value="">All Years</option>
          <option value="2025">2025</option>
          <option value="2024">2024</option>
        </select>
      </div>

      {/* Leave History Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-200 rounded-lg shadow-sm">
          <thead className="bg-gray-50">
            <tr>
              <th className="py-2 px-4 border-b text-left">Employee</th>
              <th className="py-2 px-4 border-b text-left">Department</th>
              <th className="py-2 px-4 border-b text-left">Leave Type</th>
              <th className="py-2 px-4 border-b text-left">Date</th>
              <th className="py-2 px-4 border-b text-left">Status</th>
              <th className="py-2 px-4 border-b text-left">Reason</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.length === 0 ? (
              <tr>
                <td colSpan="6" className="text-center py-4">
                  No leave records found.
                </td>
              </tr>
            ) : (
              filteredData.map((leave) => (
                <tr
                  key={leave.id}
                  className="hover:bg-gray-50 border-b border-gray-200"
                >
                  <td className="py-2 px-4">{leave.employee}</td>
                  <td className="py-2 px-4">{leave.department}</td>
                  <td className="py-2 px-4">{leave.leaveType}</td>
                  <td className="py-2 px-4">{leave.date}</td>
                  <td
                    className={`py-2 px-4 font-semibold ${
                      leave.status === "Approved"
                        ? "text-green-600"
                        : leave.status === "Rejected"
                        ? "text-red-600"
                        : "text-gray-800"
                    }`}
                  >
                    {leave.status}
                  </td>
                  <td className="py-2 px-4">{leave.reason}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LeaveHistory;
