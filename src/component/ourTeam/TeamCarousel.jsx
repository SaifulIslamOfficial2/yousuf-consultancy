import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaGlobe,
} from "react-icons/fa";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import abuyousuf from "../../assets/image/investorImage/abuyousuf.jpg";
import mdsolaiman from "../../assets/image/investorImage/solaiman.jpeg";
// import mdminar from "../../assets/image/team/mdminar.jpg";
// import abdurrahman from "../../assets/image/team/abdurrahman.jpg";
import msaifulislam from "../../assets/image/investorImage/saiful.jpeg";
// import mdrihan from "../../assets/image/team/mdrihan.jpg";
// import abdullah from "../../assets/image/team/abdullah.jpg";

import "swiper/css";

const teamMembers = [
  {
    name: "ABU YOUSUF",
    role: "Founder & CEO",
    exp: "12+ Years",
    img: abuyousuf,
    desc: "Expert in visa processing, investor license and business setup.",
  },
  {
    name: "MD SOLAIMAN",
    role: "Senior Consultant",
    exp: "10+ Years",
    img: mdsolaiman,
    desc: "Handles visa processing and documentation support.",
  },
  {
    name: "MD MINAR",
    role: "Visa Specialist",
    exp: "8+ Years",
    // img: "https://randomuser.me/api/portraits/men/3.jpg",
    desc: "Expert in tourist and family visa processing.",
  },
  {
    name: "ABDUR RAHMAN",
    role: "Business Consultant",
    exp: "9+ Years",
    // img: "https://randomuser.me/api/portraits/men/4.jpg",
    desc: "Specialist in Saudi investor license and company setup.",
  },
  {
    name: "M SAIFUL ISLAM",
    role: "Ticket Manager",
    exp: "7+ Years",
    img: msaifulislam,
    desc: "Expert in air ticket booking worldwide.",
  },
  {
    name: "MD RIHAN",
    role: "Travel Advisor",
    exp: "6+ Years",
    // img: "https://randomuser.me/api/portraits/men/6.jpg",
    desc: "Guides clients for best travel solutions.",
  },
  {
    name: "ABDULLAH",
    role: "Support Executive",
    exp: "5+ Years",
    // img: "https://randomuser.me/api/portraits/men/7.jpg",
    desc: "Handles client communication and support.",
  },
    {
    name: "ABu AHMAD",
    role: "Support Executive",
    exp: "5+ Years",
    // img: "https://randomuser.me/api/portraits/men/7.jpg",
    desc: "Handles client communication and support.",
  },
];

const TeamCarousel = () => {
  return (
    <section className="py-20 bg-[#f7f9fc]">
      <div className="container mx-auto p-6">

        {/* TITLE */}
        <div className="text-center mb-14">
          <p className="inline-block bg-[#0B3B75] text-white px-4 py-1 rounded-full text-sm">
            OUR TEAM MEMBERS
          </p>

          <h2 className="text-4xl font-bold mt-4 text-[#0B3B75]">
            What Our Amazing & Expert <br /> Team Members
          </h2>
        </div>

        {/* SWIPER */}
        <Swiper
          modules={[Autoplay]}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          loop={true}
          spaceBetween={30}
          slidesPerView={4}
          breakpoints={{
            0: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
        >

          {teamMembers.map((member, index) => (
            <SwiperSlide key={index}>

              <div className="bg-white  rounded-2xl p-8 text-center shadow-md hover:shadow-xl transition h-[340px] flex flex-col justify-between">

                {/* IMAGE */}
                <div className="relative flex justify-center mb-5 h-[90px]">
                  <img
                    src={member.img}
                    className="w-24 h-24 rounded-full object-cover"
                    alt={member.name}
                  />

                  <span className="absolute top-0 right-6 bg-red-500 text-white text-xs px-3 py-1 rounded-full">
                    {member.exp}
                  </span>
                </div>

                {/* NAME */}
                <h3 className="font-semibold text-lg text-[#0B3B75] uppercase">
                  {member.name}
                </h3>

                {/* ROLE */}
                <p className="text-sm text-blue-500">
                  {member.role}
                </p>

                {/* DESC */}
                <p className="text-gray-500 text-sm mt-3 leading-relaxed h-[60px]">
                  {member.desc}
                </p>

                <div className="border-t my-4"></div>

                {/* SOCIAL */}
                <div className="flex justify-center gap-4 text-gray-500">
                  <FaFacebookF className="hover:text-[#0B3B75] cursor-pointer" />
                  <FaGlobe className="hover:text-[#0B3B75] cursor-pointer" />
                  <FaTwitter className="hover:text-[#0B3B75] cursor-pointer" />
                  <FaInstagram className="hover:text-[#0B3B75] cursor-pointer" />
                </div>

              </div>

            </SwiperSlide>
          ))}

        </Swiper>

      </div>
    </section>
  );
};

export default TeamCarousel;