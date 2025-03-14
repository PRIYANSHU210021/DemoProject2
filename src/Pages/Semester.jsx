// import React from 'react'
// import { FileText, Download } from 'lucide-react';
// import { useParams } from 'react-router-dom';

// // const Subjects = [{id:1,title:"Mathematical Foundation of Computer Applications",downloadLink:"/pdf/MFCA.pdf"},
// //   {id:2,title:"Probability and Statistical Computing", downloadLink:"/pdf/PS.pdf"},
// //   {id:3,title:"Computer Programming and Problem Solving using C", downloadLink:"/pdf/PS.pdf"},
// //   {id:4,title:"Computer Organization and Architectures", downloadLink:"/pdf/PS.pdf"},
// //   {id:5,title:"Resource Management Techniques", downloadLink:"/pdf/RMT.pdf"},
// // ]



// const Subjects = [
//   {
//     id: 1,
//     semester: "First Semester",
//     subject: [
//       { subject: 's1', title: "Mathematical Foundation of Computer Applications", downloadLink: "/pdf/MFCA.pdf" },
//       { subject: 's2', title: "Probability and Statistical Computing", downloadLink: "/pdf/PS.pdf" },
//       { subject: 's3', title: "Computer Programming and Problem Solving using C", downloadLink: "/pdf/PS.pdf" },
//       { subject: 's4', title: "Computer Organization and Architectures", downloadLink: "/pdf/PS.pdf" },
//       { subject: 's5', title: "Resource Management Techniques", downloadLink: "/pdf/RMT.pdf" }
//     ]
//   },
//   {
//     id: 2,
//     semester: "Second Semester",
//     subject: [
//       { subject: 's1', title: " Foundation of Computer Applications", downloadLink: "/pdf/MFCA.pdf" },
//       { subject: 's2', title: "Probability and Statistical Computing", downloadLink: "/pdf/PS.pdf" },
//       { subject: 's3', title: "Computer Programming and Problem Solving using C", downloadLink: "/pdf/PS.pdf" },
//       { subject: 's4', title: "Computer Organization and Architectures", downloadLink: "/pdf/PS.pdf" },
//       { subject: 's5', title: "Resource Management Techniques", downloadLink: "/pdf/RMT.pdf" }
//     ]
//   },
//   {
//     id: 3,
//     semester: "Third Semester",
//     subject: [
//       { subject: 's1', title: "Mathematical  of Computer Applications", downloadLink: "/pdf/MFCA.pdf" },
//       { subject: 's2', title: "Probability and Statistical Computing", downloadLink: "/pdf/PS.pdf" },
//       { subject: 's3', title: "Computer Programming and Problem Solving using C", downloadLink: "/pdf/PS.pdf" },
//       { subject: 's4', title: "Computer Organization and Architectures", downloadLink: "/pdf/PS.pdf" },
//       { subject: 's5', title: "Resource Management Techniques", downloadLink: "/pdf/RMT.pdf" }
//     ]
//   },
//   {
//     id: 4,
//     semester: "Fourth Semester",
//     subject: [
//       { subject: 's1', title: "Mathematipplications", downloadLink: "/pdf/MFCA.pdf" },
//       { subject: 's2', title: "Probability and Statistical Computing", downloadLink: "/pdf/PS.pdf" },
//       { subject: 's3', title: "Computer Programming and Problem Solving using C", downloadLink: "/pdf/PS.pdf" },
//       { subject: 's4', title: "Computer Organization and Architectures", downloadLink: "/pdf/PS.pdf" },
//       { subject: 's5', title: "Resource Management Techniques", downloadLink: "/pdf/RMT.pdf" }
//     ]
//   },
//   {
//     id: 5,
//     semester: "Fifth Semester",
//     subject: [
//       { subject: 's1', title: "Mathematical Foundation ", downloadLink: "/pdf/MFCA.pdf" },
//       { subject: 's2', title: "Probability and Statistical Computing", downloadLink: "/pdf/PS.pdf" },
//       { subject: 's3', title: "Computer Programming and Problem Solving using C", downloadLink: "/pdf/PS.pdf" },
//       { subject: 's4', title: "Computer Organization and Architectures", downloadLink: "/pdf/PS.pdf" },
//       { subject: 's5', title: "Resource Management Techniques", downloadLink: "/pdf/RMT.pdf" }
//     ]
//   },
//   {
//     id: 6,
//     semester: "Sixth Semester",
//     subject: [
//       { subject: 's1', title: "Computer Applications", downloadLink: "/pdf/MFCA.pdf" },
//       { subject: 's2', title: "Probability and Statistical Computing", downloadLink: "/pdf/PS.pdf" },
//       { subject: 's3', title: "Computer Programming and Problem Solving using C", downloadLink: "/pdf/PS.pdf" },
//       { subject: 's4', title: "Computer Organization and Architectures", downloadLink: "/pdf/PS.pdf" },
//       { subject: 's5', title: "Resource Management Techniques", downloadLink: "/pdf/RMT.pdf" }
//     ]
//   }
// ]

// // const Subjects = {1:[
// //   {id:1,title:"Mathematical Foundation of Computer Applications",downloadLink:"/pdf/MFCA.pdf"},
// //   {id:2,title:"Probability and Statistical Computing", downloadLink:"/pdf/PS.pdf"},
// //   {id:3,title:"Computer Programming and Problem Solving using C", downloadLink:"/pdf/PS.pdf"},
// //   {id:4,title:"Computer Organization and Architectures", downloadLink:"/pdf/PS.pdf"},
// //   {id:5,title:"Resource Management Techniques", downloadLink:"/pdf/RMT.pdf"},
// // ],
// // 2:[
// //   {id:1,title:"Numerical Methods",downloadLink:"/pdf/NM.pdf"},
// //   {id:2,title:"Object Oriented Programming using C++", downloadLink:"/pdf/OOPS.pdf"},
// //   {id:3,title:"Data Structures", downloadLink:"/pdf/DS.pdf"},
// //   {id:4,title:"Object Oriented Analysis and Design", downloadLink:"/pdf/OOAD.pdf"},
// //   {id:5,title:"Operating Systems", downloadLink:"/pdf/OS.pdf"},
// // ],
// // 3:[
// //   {id:1,title:"Database Management System",downloadLink:"/pdf/NM.pdf"},
// //   {id:2,title:"Computer Communication and Networks", downloadLink:"/pdf/OOPS.pdf"},
// //   {id:3,title:"Design and Analysis of Algorithms", downloadLink:"/pdf/DS.pdf"},
// //   {id:4,title:"Computer Graphics", downloadLink:"/pdf/OOAD.pdf"},
// //   {id:5,title:"Java Programming", downloadLink:"/pdf/JAVA PROGRAMMING.pdf"},
// // ],
// // }

// const Semester = () => {
//   const { id } = useParams();
//   const semId = parseInt(id, 10); // Convert string ID to number

//   return (
//     <div className="max-w-7xl mx-auto md:px-16 px-4 py-8">
//       <div className="mb-8">
//         <h1 className="text-center text-3xl text-gray-700 font-bold mb-4">
//           Download PYQs Subject Wise
//         </h1>
//       </div>

//       {/* Subject Grid */}
//       <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-3 max-md:grid-cols-2">
//         {Subjects.map((subject) => (

//           {
//             subject.id === semId ? (
//               subject.subject.map((item) => (

//                 <div
//                   key={subject.id}
//                   className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow flex flex-col items-center hover:bg-gray-200 max-md:px-4"
//                 >
//                   <FileText className="text-red-600 h-16 w-16" />
//                   <h4 className="text-center mt-4 text-base mb-2 text-gray-700 font-semibold max-md:text-sm">
//                     {item.subject}
//                   </h4>
//                   <a
//                     key={item.subject}
//                     href={item.downloadLink}
//                     download
//                     className="mt-auto flex items-center justify-center px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-600 hover:text-gray-100"
//                   >
//                     <Download className="h-5 w-5 mr-2" />
//                     {item.title}
//                   </a>
//  ))
//       )}
//                 </div>
//               ))  ) : (
//                 <p className="text-gray-500 text-center">No subjects found for this semester.</p>
//             }
//       </div>
//     </div>
//   );
// };

// export default Semester;


// // const Semester = [
// //   { id: 1, title: 'First Semester', subject: [{
// //     name: "Mathematical Foundation of Computer Applications",
// //     link: "F:\pyq-react\New folder\PYQ\public\pdf\MFCA.pdf"
// //   }, {
// //     name: "Mathematical Foundation of Computer Applications",
// //     link: "F:\pyq-react\New folder\PYQ\public\pdf\MFCA.pdf"
// //   }, {
// //     name: "Mathematical Foundation of Computer Applications",
// //     link: "F:\pyq-react\New folder\PYQ\public\pdf\MFCA.pdf"
// //   }, {
// //     name: "Mathematical Foundation of Computer Applications",
// //     link: "F:\pyq-react\New folder\PYQ\public\pdf\MFCA.pdf"
// //   }, {
// //     name: "Mathematical Foundation of Computer Applications",
// //     link: "F:\pyq-react\New folder\PYQ\public\pdf\MFCA.pdf"
// //   }], Semester: 2023, downloads: 145 },
// //   // { id: 2, title: 'Second Semester', subject: 'Algorithms', Semester: 2023, downloads: 98 },
// //   // { id: 3, title: 'Third Semester', subject: 'DBMS', Semester: 2022, downloads: 234 },
// //   // { id: 3, title: 'Fourth Semester', subject: 'DBMS', Semester: 2022, downloads: 234 },
// //   // { id: 3, title: 'Fifth Semester', subject: 'DBMS', Semester: 2022, downloads: 234 },
// //   // { id: 3, title: 'Sixth Semester', subject: 'DBMS', Semester: 2022, downloads: 234 },
// // ];
import React from 'react';
import { FileText, Download } from 'lucide-react';
import { useParams } from 'react-router-dom';

const Subjects = [
  {
    id: 1,
    semester: "First Semester",
    subject: [
      { subject: 's1', title: "Mathematical Foundation of Computer Applications", downloadLink: "/pdf/MFCA.pdf" },
      { subject: 's2', title: "Probability and Statistical Computing", downloadLink: "/pdf/PS.pdf" },
      { subject: 's3', title: "Computer Programming and Problem Solving using C", downloadLink: "/pdf/PS.pdf" },
      { subject: 's4', title: "Computer Organization and Architectures", downloadLink: "/pdf/PS.pdf" },
      { subject: 's5', title: "Resource Management Techniques", downloadLink: "/pdf/RMT.pdf" }
    ]
  },
  {
    id: 2,
    semester: "Second Semester",
    subject: [
      { subject: 's1', title: "Foundation of Computer Applications", downloadLink: "/pdf/MFCA.pdf" },
      { subject: 's2', title: "Probability and Statistical Computing", downloadLink: "/pdf/PS.pdf" },
      { subject: 's3', title: "Computer Programming and Problem Solving using C", downloadLink: "/pdf/PS.pdf"},
      { subject: 's4', title: "Computer Organization and Architectures", downloadLink: "/pdf/PS.pdf" },
      { subject: 's5', title: "Resource Management Techniques", downloadLink: "/pdf/RMT.pdf" }
    ]
  },
  {
    id: 3,
    semester: "Second Semester",
    subject: [
      { subject: 's1', title: "Foundation of Computer Applications", downloadLink: "/pdf/MFCA.pdf" },
      { subject: 's2', title: "Probability and Statistical Computing", downloadLink: "/pdf/PS.pdf" },
      { subject: 's3', title: "Computer Programming and Problem Solving using C", downloadLink: "/pdf/PS.pdf" },
      { subject: 's4', title: "Computer Organization and Architectures", downloadLink: "/pdf/PS.pdf" },
      { subject: 's5', title: "Resource Management Techniques", downloadLink: "/pdf/RMT.pdf" }
    ]
  },{
    id: 4,
    semester: "Second Semester",
    subject: [
      { subject: 's1', title: "Software Engineering", downloadLink: "/pdf/MFCA.pdf" },
      { subject: 's2', title: "IWT", downloadLink: "/pdf/PS.pdf" },
      { subject: 's3', title: "FLAT", downloadLink: "/pdf/PS.pdf" },
      { subject: 's4', title: "Artificial Intelligence", downloadLink: "/pdf/PS.pdf" },
      { subject: 's5', title: "DWDM", downloadLink: "/pdf/RMT.pdf" }
    ]
  }
  ,{
    id: 5,
    semester: "Second Semester",
    subject: [
      { subject: 's1', title: "Foundation of Computer Applications", downloadLink: "/pdf/MFCA.pdf" },
      { subject: 's2', title: "Probability and Statistical Computing", downloadLink: "/pdf/PS.pdf" },
      { subject: 's3', title: "Computer Programming and Problem Solving using C", downloadLink: "/pdf/PS.pdf" },
      { subject: 's4', title: "Computer Organization and Architectures", downloadLink: "/pdf/PS.pdf" },
      { subject: 's5', title: "Resource Management Techniques", downloadLink: "/pdf/RMT.pdf" }
    ]
  },{
    id: 6,
    semester: "Second Semester",
    subject: [
      { subject: 's1', title: "Foundation of Computer Applications", downloadLink: "/pdf/MFCA.pdf" },
      { subject: 's2', title: "Probability and Statistical Computing", downloadLink: "/pdf/PS.pdf" },
      { subject: 's3', title: "Computer Programming and Problem Solving using C", downloadLink: "/pdf/PS.pdf" },
      { subject: 's4', title: "Computer Organization and Architectures", downloadLink: "/pdf/PS.pdf" },
      { subject: 's5', title: "Resource Management Techniques", downloadLink: "/pdf/RMT.pdf" }
    ]
  }
];

const Semester = () => {
  const { id } = useParams();
  const semId = parseInt(id, 10); // Convert string ID to number

  return (
    <div className="max-w-7xl mx-auto md:px-16 px-4 py-8">
      <div className="mb-8">
        <h1 className="text-center text-3xl text-gray-700 font-bold mb-4">
          Download PYQs Subject Wise
        </h1>

      </div>

      {/* Subject Grid */}
      <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-3 max-md:grid-cols-2">
        {Subjects.map((subject) => (
          subject.id === semId ? (
            
            subject.subject.map((item) => (
              <div
                key={item.subject}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow flex flex-col items-center hover:bg-gray-200 max-md:px-4"
              >
                <FileText className="text-red-600 h-16 w-16" />
                <h4 className="text-center mt-4 text-base mb-2 text-gray-700 font-semibold max-md:text-sm">
                  {item.title}
                </h4>
                <a
                  href={item.downloadLink}
                  download
                  className="mt-auto flex items-center justify-center px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-600 hover:text-gray-100"
                >
                  <Download className="h-5 w-5 mr-2" />
                  Download
                </a>
              </div>
            ))
          ) : null
        ))}
      </div>
    </div>
  );
};

export default Semester;
