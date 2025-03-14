import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; 
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { ArrowRight, BookOpen, FileText, Users } from 'lucide-react';
import { Link } from 'react-router-dom';


const slides = [
  {
    title: "Prepare Smarter, Not Harder",
    description:
      "Access previous year question papers, curated resources, and expert guidance all in one place to ace your placements.",
    image: "public/images/iconpng1.png",
  },
  {
    title: "Hustle first, comfort follows.",
    description:
      "Access previous year question papers, curated resources, and expert guidance all in one place to ace your placements.",
    image: "public/images/iconpng2.png",
  },
  {
    title: "Think well, choose wisely.",
    description:
      "Access previous year question papers, curated resources, and expert guidance all in one place to ace your placements.",
    image: "public/images/iconpng3.png",
  },
];


const Home = () => {
  return (
    <div className="space-y-16 ">
      {/* Hero Section */}
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 7000, disableOnInteraction: false }}
        loop={true}
        speed={1200} 
        className="w-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
          <section className="relative bg-gray-700 text-white py-12 sm:py-8 bg-[radial-gradient(circle_250px_at_74%_55%,rgba(255,255,255,0.15),transparent)]">
            <div className="container my-8 mx-auto px-6 sm:px-8 md:px-10 lg:px-36 flex flex-col md:flex-row items-center justify-between">
              <div className="text-center md:text-left space-y-4 md:w-1/2">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">{slide.title}</h1>
                <p className="text-lg sm:text-xl text-gray-300 max-w-lg mx-auto md:mx-0">
                  {slide.description}
                </p>
                <div className="flex justify-center md:justify-start space-x-4">
                  <Link
                    to="/pyq"
                    className="bg-gray-600 border-3 border-transparent hover:border-white hover:border-3 hover:bg-transparent px-5 py-3 rounded-lg font-semibold flex items-center"
                  >
                    Get Started <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </div>
              </div>
              <div className="mt-6 md:mt-0">
                <img className="w-[280px] sm:w-[320px] md:w-[400px] lg:w-[420px] h-auto" src={slide.image} alt="" />
              </div>
            </div>
          </section>
        </SwiperSlide>
        ))}
      </Swiper>



      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-16">
        <h2 className="text-3xl text-gray-700 font-bold text-center mb-12">Why Choose DesireLearner?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <FileText className="h-12 w-12 text-gray-600 mb-4"/>
            <h3 className="text-xl font-semibold mb-2 text-gray-700">Previous Year Papers</h3>
            <p className="text-gray-600">
              Access a comprehensive collection of previous year question papers from top companies.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <BookOpen className="h-12 w-12 text-gray-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-gray-700">Curated Resources</h3>
            <p className="text-gray-600">
              Get access to carefully selected study materials and placement preparation resources.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <Users className="h-12 w-12 text-gray-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-gray-700">Community Support</h3>
            <p className="text-gray-600">
              Join a community of like-minded students and share your preparation journey.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4 text-gray-700">Ready to Start Your Preparation?</h2>
          <p className="text-gray-600 mb-8">
          Join DesireLearner today and explore the best study resources, PYQs, and placement materials.
          </p>
          <Link to="/auth" className="bg-gray-600 text-white hover:bg-gray-700 px-8 py-3 rounded-lg font-semibold inline-flex items-center">
            Sign Up Now <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;