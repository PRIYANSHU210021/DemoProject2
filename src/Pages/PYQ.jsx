import React, { useState } from 'react';
import { Search, Upload, Download, Filter } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const PYQ = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate(); // yaad krr lo ye hook hai navigation krne ke liye component ka

  // Dummy data for demonstration
  const Semesters = [
    { id: 1,imgLink:"/images/icon-1.png", title: 'First Semester', subject: 'Data Structures', Semester: 2023, downloads: 145 },
    { id: 2,imgLink:"/images/icon-2.png", title: 'Second Semester', subject: 'Algorithms', Semester: 2023, downloads: 98 },
    { id: 3,imgLink:"/images/icon-3.png", title: 'Third Semester', subject: 'DBMS', Semester: 2022, downloads: 234 },
    { id: 4,imgLink:"/images/icon-4.png", title: 'Fourth Semester', subject: 'DBMS', Semester: 2022, downloads: 234 },
    { id: 5,imgLink:"/images/icon-5.png", title: 'Fifth Semester', subject: 'DBMS', Semester: 2022, downloads: 234 },
    { id: 6,imgLink:"/images/icon-6.png", title: 'Sixth Semester', subject: 'DBMS', Semester: 2022, downloads: 234 },
  ];

  return (
    <div className="max-w-7xl mx-auto px-16 py-8">
      <div className="mb-8">
        <h1 className="text-3xl text-gray-700 font-bold mb-4">Previous Semester Question Semesters</h1>
        <p className="text-gray-700">
          Access and download question Semesters from previous Semesters to enhance your preparation.
        </p>
      </div>

      {/* Search and Filter Section */}
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <div className="flex-grow relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          <input
            type="text"
            placeholder="Search Semesters..."
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <button className="flex items-center justify-center px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200">
          <Filter className="h-5 w-5 mr-2" />
          Filters
        </button>
        <button className="flex items-center justify-center px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700">
          <Upload className="h-5 w-5 mr-2" />
          Upload Paper
        </button>
      </div>

      {/* Semesters Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
        {Semesters.map((paper) => (
          <div key={paper.id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow flex flex-col items-center hover:bg-gray-200 ">
            <img className="w-[96px] h-[96px]" src={paper.imgLink}></img>
            <h3 className="text-lg font-semibold my-2">{paper.title}</h3>
            <div className="text-sm text-gray-600 m2-4">
              {/* <p>Subject: {paper.subject}</p> */}
              {/* <p>Semester: {paper.Semester}</p> */}
              {/* <p>{paper.downloads} downloads</p> */}
            </div>
            <button onClick={()=> navigate(`/semester/${paper.id}`)} className=" flex items-center justify-center px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-700 hover:text-gray-100">
              Click Here
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PYQ;