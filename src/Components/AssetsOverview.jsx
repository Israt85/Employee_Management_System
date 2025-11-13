import React, { useState } from "react";

const AssetList = () => {

  const [assets, setAssets] = useState([
    {
      id: 1,
      assetId: "A001",
      assetName: "Laptop",
      category: "Electronics",
      assignedTo: "John Doe",
      status: "Assigned",
      location: "IT Department",
      purchaseDate: "2023-01-15",
      warrantyExpiry: "2025-01-15",
      condition: "Good",
    },
    {
      id: 2,
      assetId: "A002",
      assetName: "Monitor",
      category: "Electronics",
      assignedTo: "Jane Smith",
      status: "Available",
      location: "IT Department",
      purchaseDate: "2022-05-20",
      warrantyExpiry: "2024-05-20",
      condition: "New",
    },
    {
      id: 3,
      assetId: "A003",
      assetName: "Office Chair",
      category: "Furniture",
      assignedTo: "Marketing Dept.",
      status: "Under Maintenance",
      location: "Marketing",
      purchaseDate: "2021-11-10",
      warrantyExpiry: "2023-11-10",
      condition: "Needs Repair",
    },
    {
      id: 4,
      assetId: "A004",
      assetName: "Phone",
      category: "Electronics",
      assignedTo: "John Doe",
      status: "Assigned",
      location: "Sales Dept.",
      purchaseDate: "2023-06-01",
      warrantyExpiry: "2025-06-01",
      condition: "Good",
    },
  ]);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Asset Overview / List</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 rounded-lg">
          <thead className="bg-gray-100">
            <tr>
              <th className="py-2 px-4 border-b">Asset ID / Code</th>
              <th className="py-2 px-4 border-b">Asset Name</th>
              <th className="py-2 px-4 border-b">Category</th>
              <th className="py-2 px-4 border-b">Assigned To</th>
              <th className="py-2 px-4 border-b">Status</th>
              <th className="py-2 px-4 border-b">Location / Department</th>
              <th className="py-2 px-4 border-b">Purchase Date</th>
              <th className="py-2 px-4 border-b">Warranty Expiry</th>
              <th className="py-2 px-4 border-b">Condition</th>
            </tr>
          </thead>
          <tbody>
            {assets.map((asset) => (
              <tr key={asset.id} className="hover:bg-gray-50">
                <td className="py-2 px-4 border-b">{asset.assetId}</td>
                <td className="py-2 px-4 border-b">{asset.assetName}</td>
                <td className="py-2 px-4 border-b">{asset.category}</td>
                <td className="py-2 px-4 border-b">{asset.assignedTo}</td>
                <td className="py-2 px-4 border-b">{asset.status}</td>
                <td className="py-2 px-4 border-b">{asset.location}</td>
                <td className="py-2 px-4 border-b">{asset.purchaseDate}</td>
                <td className="py-2 px-4 border-b">{asset.warrantyExpiry}</td>
                <td className="py-2 px-4 border-b">{asset.condition}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AssetList;
