import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; 
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

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
    <div className="space-y-16">
      {/* Swiper Slider */}
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        loop={true}
        className="w-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <section className="relative bg-gray-700 text-white py-16">
              <div className="container mx-auto px-16 flex items-center justify-between">
                <div className="text-center space-y-8">
                  <h1 className="text-5xl font-bold">{slide.title}</h1>
                  <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                    {slide.description}
                  </p>
                  <div className="flex justify-center space-x-4">
                    <Link
                      to="/pyq"
                      className="bg-gray-600 border-3 border-transparent hover:border-white hover:border-3 hover:bg-transparent px-6 py-3 rounded-lg font-semibold flex items-center"
                    >
                      Get Started <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </div>
                </div>
                <img className="w-[420px] h-[388px]" src={slide.image} alt="" />
              </div>
            </section>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-16">
        <h2 className="text-3xl text-gray-700 font-bold text-center mb-12">
          Why Choose DesireLearner?
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-2 text-gray-700">
              Previous Year Papers
            </h3>
            <p className="text-gray-600">
              Access a comprehensive collection of previous year question
              papers from top companies.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-2 text-gray-700">
              Curated Resources
            </h3>
            <p className="text-gray-600">
              Get access to carefully selected study materials and placement
              preparation resources.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-2 text-gray-700">
              Community Support
            </h3>
            <p className="text-gray-600">
              Join a community of like-minded students and share your
              preparation journey.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
