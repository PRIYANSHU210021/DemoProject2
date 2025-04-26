import React, { useState } from "react";

const StudentPyqDownload = () => {
  const [selectedSemester, setSelectedSemester] = useState("1st Sem");

  const pyqData = {
    "1st Sem": {
      "2022": {
        "Mathematical Foundation of Computer Applications": {
          mid: "https://example.com/mid-maths-2022",
          end: "https://example.com/end-maths-2022",
        },
      },
    },
    "2nd Sem": {},
    "3rd Sem": {},
    "4th Sem": {},
    "5th Sem": {},
    "6th Sem": {},
  };

  const years = ["2022", "2023", "2024"];
  const semesters = [
    "1st Sem",
    "2nd Sem",
    "3rd Sem",
    "4th Sem",
    "5th Sem",
    "6th Sem",
  ];
  
  const subjectList = {
    "1st Sem": [
      "Mathematical Foundation of Computer Applications",
      "Probability and Statistics",
      "Problem Solving using C",
      "Computer Organization and Architectures",
      "Resource Management Techniques",
    ],
    "2nd Sem": [
      "Data Structures",
      "Object Oriented Programming using C++",
      "Operating Systems",
      "Software Engineering",
      "Discrete Mathematics",
    ],
    "3rd Sem": [
      "Database Management System",
      "Computer Communication and Networks",
      "Design and Analysis of Algorithms",
      "Computer Graphics",
      "Java Programming",
    ],
    "4th Sem": [
      "Artificial Intelligence",
      "Machine Learning",
      "Compiler Design",
      "Cloud Computing",
      "Cyber Security",
    ],
    "5th Sem": [
      "Big Data Analytics",
      "Blockchain Technology",
      "Internet of Things",
      "Deep Learning",
      "Human Computer Interaction",
    ],
    "6th Sem": [
      "Research Project",
      "Internship",
      "Advanced Web Development",
      "Data Science with Python",
      "Digital Image Processing",
    ],
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4 text-center">Student PYQ Download</h2>
      
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

      {/* Table Display */}
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-300 text-sm">
          <thead>
            <tr className="bg-gray-200">
              <th className="border px-4 py-2">Year</th>
              {subjectList[selectedSemester].map((subject) => (
                <th key={subject} className="border px-4 py-2">{subject}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {years.map((year) => (
              <tr key={year}>
                <td className="border px-4 py-2 font-medium bg-gray-100">{year}</td>
                {subjectList[selectedSemester].map((subject) => {
                  const paper = pyqData[selectedSemester]?.[year]?.[subject] || {};
                  return (
                    <td key={subject} className="border px-4 py-2 text-center">
                      {paper.mid || paper.end ? (
                        <div className="flex flex-col sm:flex-row justify-center gap-2">
                          {paper.mid && (
                            <a
                              href={paper.mid}
                              className="text-blue-500 underline"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              Mid-Sem
                            </a>
                          )}
                          {paper.end && (
                            <a
                              href={paper.end}
                              className="text-green-500 underline"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              End-Sem
                            </a>
                          )}
                        </div>
                      ) : (
                        <span className="text-gray-400">N/A</span>
                      )}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StudentPyqDownload;
