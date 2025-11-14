import React from "react";

// Sample data (replace with your API or state data)
const employees = [
  { id: 1, name: "Alice", department: "HR", salary: 5000, hireDate: "2025-10-01", projects: ["Proj A"] },
  { id: 2, name: "Bob", department: "HR", salary: 5500, hireDate: "2025-11-01", projects: ["Proj B"] },
  { id: 3, name: "Charlie", department: "HR", salary: 6000, hireDate: "2025-11-10", projects: [] },
];

export const DepartmentAnalytics = ({ departmentName }) => {
  // Filter employees by department
  const deptEmployees = employees.filter(emp => emp.department === departmentName);

  // Total employees
  const totalEmployees = deptEmployees.length;

  // Average salary
  const avgSalary =
    deptEmployees.reduce((sum, emp) => sum + emp.salary, 0) /
    (totalEmployees || 1);

  // Ongoing projects (unique)
  const ongoingProjects = [
    ...new Set(deptEmployees.flatMap(emp => emp.projects))
  ].length;

  // Recent hires (last 30 days)
  const recentHires = deptEmployees.filter(emp => {
    const hireDate = new Date(emp.hireDate);
    const now = new Date();
    const diffTime = now - hireDate;
    const diffDays = diffTime / (1000 * 60 * 60 * 24);
    return diffDays <= 30;
  }).length;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 p-6">
      <div className="bg-purple-600 text-white rounded-xl p-6 shadow-lg flex flex-col items-center">
        <p className="text-sm">Total Employees</p>
        <p className="text-2xl font-bold">{totalEmployees}</p>
      </div>
      <div className="bg-purple-500 text-white rounded-xl p-6 shadow-lg flex flex-col items-center">
        <p className="text-sm">Average Salary</p>
        <p className="text-2xl font-bold">${avgSalary.toFixed(2)}</p>
      </div>
      <div className="bg-purple-400 text-white rounded-xl p-6 shadow-lg flex flex-col items-center">
        <p className="text-sm">Ongoing Projects</p>
        <p className="text-2xl font-bold">{ongoingProjects}</p>
      </div>
      <div className="bg-purple-300 text-white rounded-xl p-6 shadow-lg flex flex-col items-center">
        <p className="text-sm">Recent Hires</p>
        <p className="text-2xl font-bold">{recentHires}</p>
      </div>
    </div>
  );
};
