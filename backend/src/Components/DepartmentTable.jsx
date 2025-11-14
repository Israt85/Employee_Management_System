import React from "react";

export const DepartmentTable = () => {
  return (
    <div className="overflow-x-auto p-4 bg-gray-100 min-h-screen">
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <table className="min-w-full border border-gray-200 divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-2 border-b text-left text-sm font-medium text-gray-700">#</th>
              <th className="px-4 py-2 border-b text-left text-sm font-medium text-gray-700">Name</th>
              <th className="px-4 py-2 border-b text-left text-sm font-medium text-gray-700">Job</th>
              <th className="px-4 py-2 border-b text-left text-sm font-medium text-gray-700">Company</th>
              <th className="px-4 py-2 border-b text-left text-sm font-medium text-gray-700">Location</th>
              <th className="px-4 py-2 border-b text-left text-sm font-medium text-gray-700">Last Login</th>
              <th className="px-4 py-2 border-b text-left text-sm font-medium text-gray-700">Favorite Color</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            <tr className="hover:bg-gray-50">
              <td className="px-4 py-2 border-b">1</td>
              <td className="px-4 py-2 border-b">Cy Ganderton</td>
              <td className="px-4 py-2 border-b">Quality Control Specialist</td>
              <td className="px-4 py-2 border-b">Littel, Schaden and Vandervort</td>
              <td className="px-4 py-2 border-b">Canada</td>
              <td className="px-4 py-2 border-b">12/16/2020</td>
              <td className="px-4 py-2 border-b">Blue</td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="px-4 py-2 border-b">2</td>
              <td className="px-4 py-2 border-b">Hart Hagerty</td>
              <td className="px-4 py-2 border-b">Desktop Support Technician</td>
              <td className="px-4 py-2 border-b">Zemlak, Daniel and Leannon</td>
              <td className="px-4 py-2 border-b">United States</td>
              <td className="px-4 py-2 border-b">12/5/2020</td>
              <td className="px-4 py-2 border-b">Purple</td>
            </tr>
            {/* Add the rest of your rows similarly */}
          </tbody>
          <tfoot className="bg-gray-50">
            <tr>
              <th className="px-4 py-2 border-t text-left text-sm font-medium text-gray-700">#</th>
              <th className="px-4 py-2 border-t text-left text-sm font-medium text-gray-700">Name</th>
              <th className="px-4 py-2 border-t text-left text-sm font-medium text-gray-700">Job</th>
              <th className="px-4 py-2 border-t text-left text-sm font-medium text-gray-700">Company</th>
              <th className="px-4 py-2 border-t text-left text-sm font-medium text-gray-700">Location</th>
              <th className="px-4 py-2 border-t text-left text-sm font-medium text-gray-700">Last Login</th>
              <th className="px-4 py-2 border-t text-left text-sm font-medium text-gray-700">Favorite Color</th>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};
