import { NavLink } from "react-router-dom";
import bimanTicket from "../../assets/image/2230596-biman-2310566.jpg";
import pasportgirl from "../../assets/image/ChatGPT Image Apr 7, 2026, 02_56_42 PM.png";
import img3 from "../../assets/image/hero image investor license.png";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Pagination, Autoplay } from "swiper/modules";

const Hero = () => {
  const slides = [
    {
      id: 1,
      title: "Launch Your Business in Saudi Arabia",
      highlight: "Investor License Made Easy",
      subtitle: "Yousuf Consultancy",
      desc: "We provide complete assistance for Saudi investor licenses, company formation, and legal documentation for a smooth business setup.",
      btn1: "Start Business",
      btn2: "Talk to Expert",
      img: img3,
    },
    {
      id: 2,
      title: "All-in-One KSA General Services",
      highlight: "Hassle-Free Process",
      subtitle: "Yousuf Consultancy",
      desc: "From iqama services to document clearance and visa processing — we ensure smooth and reliable support across Saudi Arabia.",
      btn1: "Start Now",
      btn2: "Talk to Expert",
      img: pasportgirl,
    },
    {
      id: 3,
      title: "Book Your Air Ticket",
      highlight: "Fast & Easy",
      subtitle: "Yousuf Consultancy",
      desc: "Get the best deals on international and domestic flights with quick booking and trusted support.",
      btn1: "Book Ticket",
      btn2: "Contact Us",
      img: bimanTicket,
    },
  ];

  return (
    <Swiper
      modules={[Pagination, Autoplay]}
      autoplay={{ delay: 3000 }}
      loop={true}
      pagination={{ clickable: true }}
      className="w-full"
    >
      {slides.map((slide) => (
        <SwiperSlide key={slide.id}>
          <div className="relative py-16 md:py-24 overflow-hidden bg-[#f7f9fc]">

            {/* 🔥 BACKGROUND GRADIENT LIGHT */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#0B3B75]/5 to-[#1E6FB8]/5"></div>

            <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
              <div className="lg:grid lg:grid-cols-12 lg:gap-12">

                {/* CONTENT */}
                <div className="lg:col-span-6 flex flex-col justify-center text-center lg:text-left">

                  {/* SUBTITLE */}
                  <p className="text-2xl mb-2 font-bold bg-gradient-to-r from-[#0B3B75] to-[#1E6FB8] bg-clip-text text-transparent">
                    {slide.subtitle}
                  </p>

                  {/* TITLE */}
                  <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0B3B75] leading-tight mb-4">
                    {slide.title} <br />
                    For{" "}
                    <span className="bg-gradient-to-r from-[#16166b] to-[#3A33B8] bg-clip-text text-transparent">
                      {slide.highlight}
                    </span>
                  </h1>

                  {/* DESC */}
                  <p className="mt-3 text-base text-gray-500 sm:text-lg">
                    {slide.desc}
                  </p>

                  {/* BUTTONS */}
                  <div className="mt-8 flex justify-center lg:justify-start space-x-4">

                    {/* PRIMARY */}
                    <NavLink
                      to="/courses"
                      className="px-6 py-3 rounded-md text-white bg-gradient-to-r from-[#0B3B75] to-[#1E6FB8] hover:opacity-90 transition"
                    >
                      {slide.btn1}
                    </NavLink>

                    {/* SECONDARY */}
                    <NavLink
                      to="/contact"
                      className="px-6 py-3 rounded-md text-white font-semibold 
bg-gradient-to-r from-[#16166b] to-[#1105f3] 
hover:from-[#1105f3] hover:to-[#16166b] 
transition-all duration-300"
                    >
                      {slide.btn2}
                    </NavLink>

                  </div>
                </div>

                {/* IMAGE */}
                <div className="mt-12 lg:mt-0 lg:col-span-6 flex justify-center lg:justify-end">
                  <img
                    className="w-full max-w-sm lg:max-w-none h-auto object-cover rounded-xl shadow-xl"
                    src={slide.img}
                    alt="hero"
                  />
                </div>

              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Hero;