import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Component/Navbar';
import Footer from './Component/Footer';
import Auth from './Pages/Auth';
import Home from './Pages/Home';
import PYQ from './Pages/PYQ';
import Resources from './Pages/Resources';
import Semester from './Pages/Semester';
import AdminPanel from './Pages/AdminPanel';
import StudentPyqDownload from './Pages/StudentPyqDownload';
import AdminPyqUpload from './Pages/AdminPyqUpload';


function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <div className='sticky top-0 left-0 w-full z-50'>
        < Navbar />
        </div>
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pyq" element={<PYQ />} />
            <Route path="/semester/:id" element={<Semester/>}/>
            <Route path="/resources" element={<Resources />} />
            <Route path="/auth" element={<Auth/>} />
            <Route path="/AdminPanel" element={<AdminPanel/>} />
            <Route path="/StudentPyqDownload" element={<StudentPyqDownload/>} />
            {/* <Route path="/AdminPyqDownload" element={<AdminPyqDownload />} /> */}
            <Route path="/AdminPyqDownload" element={<AdminPyqUpload />}></Route>
          </Routes>
        </main>
        <Footer/>
      </div>
    </Router>
  );
}
export default App
