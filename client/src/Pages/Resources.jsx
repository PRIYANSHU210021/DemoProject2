import React from 'react';
import { BookOpen, Code, Building2, ExternalLink } from 'lucide-react';

const Resources = () => {
  const resources = [
    {
      category: 'Data Structures & Algorithms',
      items: [
        { title: 'LeetCode Premium Guide', description: 'Comprehensive guide for mastering DSA problems', url: '#' },
        { title: 'System Design Basics', description: 'Learn fundamentals of system design', url: '#' },
        { title: 'Advanced Algorithms Course', description: 'In-depth course on complex algorithms', url: '#' },
      ]
    },
    {
      category: 'Interview Preparation',
      items: [
        { title: 'Mock Interview Platform', description: 'Practice with peers and get feedback', url: '#' },
        { title: 'HR Interview Questions', description: 'Common HR questions and best answers', url: '#' },
        { title: 'Resume Building Guide', description: 'Create an impressive tech resume', url: '#' },
      ]
    },
    {
      category: 'Company Specific',
      items: [
        { title: 'FAANG Interview Experiences', description: 'Real interview experiences from top companies', url: '#' },
        { title: 'Company Specific Questions', description: 'Frequently asked questions by companies', url: '#' },
        { title: 'Salary Insights', description: 'Compensation details and negotiation tips', url: '#' },
      ]
    }
  ];

  return (
    <div className="max-w-7xl mx-auto md:px-16 px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">Placement Resources</h1>
        <p className="text-gray-600">
          Curated resources to help you prepare for your dream job.
        </p>
      </div>

      {/* Quick Links */}
      <div className="grid md:grid-cols-3 gap-6 mb-12">
        <div className="bg-blue-50 p-6 rounded-lg">
          <Code className="h-8 w-8 text-blue-600 mb-4" />
          <h3 className="text-lg font-semibold mb-2">Technical Preparation</h3>
          <p className="text-gray-600">DSA, System Design, and Programming concepts</p>
        </div>
        <div className="bg-green-50 p-6 rounded-lg">
          <BookOpen className="h-8 w-8 text-green-600 mb-4" />
          <h3 className="text-lg font-semibold mb-2">Interview Skills</h3>
          <p className="text-gray-600">Mock interviews, HR preparation, and soft skills</p>
        </div>
        <div className="bg-purple-50 p-6 rounded-lg">
          <Building2 className="h-8 w-8 text-purple-600 mb-4" />
          <h3 className="text-lg font-semibold mb-2">Company Insights</h3>
          <p className="text-gray-600">Company specific preparation and experiences</p>
        </div>
      </div>

      {/* Resource Categories */}
      <div className="space-y-12">
        {resources.map((category) => (
          <div key={category.category}>
            <h2 className="text-2xl font-bold mb-6">{category.category}</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {category.items.map((item) => (
                <div key={item.title} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-600 mb-4">{item.description}</p>
                  <a
                    href={item.url}
                    className="inline-flex items-center text-blue-600 hover:text-blue-800"
                  >
                    Learn More <ExternalLink className="h-4 w-4 ml-1" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Resources;