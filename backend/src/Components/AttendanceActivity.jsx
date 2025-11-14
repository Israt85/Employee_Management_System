import React from "react";

// Sample attendance data
const attendanceData = [
  {
    id: 1,
    fullName: "Alice Johnson",
    department: "Engineering",
    attendance: "Present",
    lastLogin: "2025-11-12 09:20 AM",
  },
  {
    id: 2,
    fullName: "Bob Smith",
    department: "HR",
    attendance: "Late",
    lastLogin: "2025-11-12 09:50 AM",
  },
  {
    id: 3,
    fullName: "Charlie Brown",
    department: "Marketing",
    attendance: "Absent",
    lastLogin: "2025-11-11 05:30 PM",
  },
  {
    id: 4,
    fullName: "David Lee",
    department: "Engineering",
    attendance: "Present",
    lastLogin: "2025-11-12 08:55 AM",
  },
];

export const AttendanceActivity = () => {
  const getBadgeColor = (status) => {
    switch (status) {
      case "Present":
        return "bg-green-500";
      case "Absent":
        return "bg-red-500";
      case "Late":
        return "bg-yellow-500";
      default:
        return "bg-gray-500";
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Attendance & Activity</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
          <thead className="bg-purple-600 text-white">
            <tr>
              <th className="py-3 px-4 text-left">Employee Name</th>
              <th className="py-3 px-4 text-left">Department</th>
              <th className="py-3 px-4 text-left">Attendance</th>
              <th className="py-3 px-4 text-left">Last Login / Activity</th>
            </tr>
          </thead>
          <tbody>
            {attendanceData.map((emp) => (
              <tr key={emp.id} className="border-b hover:bg-gray-100">
                <td className="py-3 px-4">{emp.fullName}</td>
                <td className="py-3 px-4">{emp.department}</td>
                <td className="py-3 px-4">
                  <span
                    className={`px-2 py-1 rounded-full text-white text-sm ${getBadgeColor(
                      emp.attendance
                    )}`}
                  >
                    {emp.attendance}
                  </span>
                </td>
                <td className="py-3 px-4">{emp.lastLogin}</td>
              </tr>
            ))}
            {attendanceData.length === 0 && (
              <tr>
                <td colSpan="4" className="text-center py-4 text-gray-500">
                  No attendance records available.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};
