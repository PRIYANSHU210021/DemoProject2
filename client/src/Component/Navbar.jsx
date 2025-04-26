import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, FileText, BookOpen, User, Menu, X ,HomeIcon} from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white text-gray-700 shadow-lg">
      <div className="max-w-7xl mx-auto px-8 md:px-16 py-1">
        <div className="flex items-center justify-between h-16">
          {/* Logo Section */}
          <Link to="/" className="flex items-center space-x-2">
            {/* <GraduationCap className="h-8 w-8" />
            <span className="font-bold text-xl">DesireLearner</span> */}
            <img src="./logo.png" className='w-[160px] h-[45px]' />
          </Link>

          {/* Desktop Menu */}
        
          <div className="hidden md:flex space-x-6">
            <Link to="/" className="flex items-center space-x-1 hover:text-gray-500 transition">
              <HomeIcon className="h-5 w-5" />
              <span className='text-lg'>Home</span>
            </Link>
            <Link to="/pyq" className="flex items-center space-x-1 hover:text-gray-500 transition">
              <FileText className="h-5 w-5"/>
              <span className='text-lg'>PYQs</span>
            </Link>
            <Link to="/resources" className="flex items-center space-x-1 hover:text-gray-500 transition">
              <BookOpen className="h-5 w-5" />
              <span className='text-lg'>Resources</span>
            </Link>
            <Link to="/auth" className="flex items-center space-x-1 hover:text-gray-500 transition">
              <User className="h-5 w-5" />
              <span className='text-lg'>Login</span>
            </Link>
            <Link to="/AdminPanel" className="flex items-center space-x-1 hover:text-gray-500 transition">
              <User className="h-5 w-5" />
              <span className='text-lg'>Admin</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-white text-gray-700 py-4">
            <Link
              to="/pyq"
              className="block text-center py-2 hover:text-gray-500 transition"
              onClick={() => setIsOpen(false)}
            >
              PYQs
            </Link>
            <Link
              to="/resources"
              className="block text-center py-2 hover:text-gray-500 transition"
              onClick={() => setIsOpen(false)}
            >
              Resources
            </Link>
            <Link
              to="/auth"
              className="block text-center py-2 hover:text-gray-500 transition"
              onClick={() => setIsOpen(false)}
            >
              Login
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
