import React, { useState } from "react";

const AdminPyqUpload = () => {
  const [selectedSemester, setSelectedSemester] = useState("1st Sem");
  const [pyqData, setPyqData] = useState({});
  const [years, setYears] = useState(["2022", "2023", "2024"]); // Initial Years

  const semesters = ["1st Sem", "2nd Sem", "3rd Sem", "4th Sem", "5th Sem", "6th Sem"];
  const subjects = [
    "Mathematical Foundation of Computer Applications",
    "Probability and Statistics",
    "Problem Solving using C",
    "Computer Organization and Architectures",
    "Resource Management Techniques"
  ];

  // Function to Handle File Upload
  const handleFileUpload = (event, year, subject, type) => {
    const file = event.target.files[0];
    if (file) {
      const newData = { ...pyqData };
      if (!newData[selectedSemester]) newData[selectedSemester] = {};
      if (!newData[selectedSemester][year]) newData[selectedSemester][year] = {};
      if (!newData[selectedSemester][year][subject]) newData[selectedSemester][year][subject] = {};
      newData[selectedSemester][year][subject][type] = file.name;
      setPyqData(newData);
    }
  };

  // Function to Add a New Year
  const addYear = () => {
    const lastYear = parseInt(years[years.length - 1]);
    const newYear = (lastYear + 1).toString();
    setYears([...years, newYear]);
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4 text-center">Admin PYQ Upload</h2>

      {/* Semester Selection */}
      <div className="mb-4 text-center">
        <label className="font-semibold">Select Semester: </label>
        <select
          className="border p-2 ml-2"
          value={selectedSemester}
          onChange={(e) => setSelectedSemester(e.target.value)}
        >
          {semesters.map((sem) => (
            <option key={sem} value={sem}>{sem}</option>
          ))}
        </select>
      </div>

      {/* Add Year Button */}
      <div className="mb-4 text-center">
        <button onClick={addYear} className="bg-blue-500 text-white px-4 py-2 rounded-md">
          + Add Year
        </button>
      </div>

      {/* Table Display */}
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-300 text-sm">
          <thead>
            <tr className="bg-gray-200">
              <th className="border px-4 py-2">Year</th>
              {subjects.map((subject) => (
                <th key={subject} className="border px-4 py-2">{subject}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {years.map((year) => (
              <tr key={year}>
                <td className="border px-4 py-2 font-medium bg-gray-100">{year}</td>
                {subjects.map((subject) => (
                  <td key={subject} className="border px-4 py-2 text-center">
                    <div className="flex items-center  justify-center gap-2 ">
                      <label className="bg-gray-700 text-white cursor-pointer border-2 rounded-sm py-0.5 px-1 ">
                        Mid-Sem
                        <input
                          type="file"
                          className="hidden"
                          onChange={(e) => handleFileUpload(e, year, subject, "mid")}
                        />
                      </label>
                      <label className="bg-gray-700 text-white cursor-pointer border-2 rounded-sm py-0.5 px-1 ">
                        End-Sem
                        <input
                          type="file"
                          className="hidden"
                          onChange={(e) => handleFileUpload(e, year, subject, "end")}
                        />
                      </label>
                    </div>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminPyqUpload;
