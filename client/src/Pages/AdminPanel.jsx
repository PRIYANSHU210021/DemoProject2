import React from "react";

const crList = [
  {
    id: "1",
    name: "Himanshu Sharma",
    classAssigned: "MCA 1st Year",
    uploadPermission: false,
  },
  {
    id: "2",
    name: "Priya Singh",
    classAssigned: "MCA 2nd Year",
    uploadPermission: true,
  },
  {
    id: "3",
    name: "Aman Verma",
    classAssigned: "MCA 3rd Year",
    uploadPermission: false,
  },
];

const AdminPanel = () => {
  return (
    <div className="max-w-4xl mx-auto mt-12 p-6 bg-white rounded-xl shadow-lg">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
        Admin Panel - Upload Access Control
      </h1>

      <div className="space-y-4">
        {crList.map((cr) => (
          <div
            key={cr.id}
            className="flex justify-between items-center bg-gray-100 px-4 py-3 rounded-lg shadow-sm"
          >
            <div>
              <h2 className="text-lg font-semibold text-gray-800">{cr.name}</h2>
              <p className="text-sm text-gray-600">{cr.classAssigned}</p>
            </div>

            {cr.uploadPermission ? (
              <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                Access Granted
              </span>
            ) : (
              <button
                className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-200"
              >
                Give Access
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminPanel;
