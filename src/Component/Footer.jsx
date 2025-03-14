import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-700 text-white py-8">
      <div className="max-w-7xl mx-auto px-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">DesireLearner</h3>
            <p className="text-white">
              Your one-stop solution for academic and placement preparation.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-white-700">
              <li><a href="/pyq" className="hover:text-white">Previous Year Papers</a></li>
              <li><a href="/resources" className="hover:text-white">Resources</a></li>
              <li><a href="/auth" className="hover:text-white">Login/Register</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <p className="text-white">
              Email: support@DesireLearner.com<br />
              Follow us on social media
            </p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-white text-center text-white">
          <p className="flex items-center justify-center">
            Made with <Heart className="h-4 w-4 mx-1 text-red-500" /> by DesireLearner | Developed By Priyanshu Prajapati
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;