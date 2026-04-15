import { FaCheckCircle, FaPlane, FaPassport, FaBriefcase } from "react-icons/fa";
import aboutImg from "../../assets/image/investorImage/aboutimg.jpg"; // image replace korish

const About = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">

        {/* 🔥 LEFT IMAGE */}
        <div className="relative">
          <img
            src={aboutImg}
            alt="Yousuf Consultancy"
            className="rounded-2xl shadow-2xl w-full"
          />

          {/* floating badge */}
          <div className="absolute -bottom-6 left-6 bg-[#0B3B75] text-white px-6 py-3 rounded-xl shadow-lg">
            <p className="text-lg font-semibold">5+ Years Experience</p>
          </div>
        </div>

        {/* 🔥 RIGHT CONTENT */}
        <div>

          {/* small title */}
          <p className="text-[#0B3B75] font-semibold mb-3">
            About Yousuf Consultancy
          </p>

          {/* main title */}
          <h2 className="text-4xl font-bold text-gray-800 leading-snug">
            Your Trusted Partner For <br />
            <span className="text-red-500">Visa & Business Solutions</span>
          </h2>

          {/* description */}
          <p className="text-gray-600 mt-5 leading-relaxed">
            Yousuf Consultancy is a professional service provider specializing in 
            visa processing, investor license, business setup, and air ticket booking. 
            We help individuals and businesses achieve their global goals with reliable 
            and fast services, especially in Saudi Arabia.
          </p>

          {/* services */}
          <div className="mt-6 space-y-3 text-gray-700">

            <div className="flex items-center gap-3">
              <FaCheckCircle className="text-green-500" />
              <p>Investor License & Business Setup in Saudi Arabia</p>
            </div>

            <div className="flex items-center gap-3">
              <FaPassport className="text-blue-500" />
              <p>Tourist, Work & Family Visa Processing</p>
            </div>

            <div className="flex items-center gap-3">
              <FaPlane className="text-orange-500" />
              <p>Domestic & International Air Ticket Booking</p>
            </div>

            <div className="flex items-center gap-3">
              <FaBriefcase className="text-purple-500" />
              <p>Business Consultancy & Documentation Support</p>
            </div>

          </div>

          {/* button */}
          <button className="mt-8 px-6 py-3 bg-[#0B3B75] text-white rounded-full font-semibold hover:bg-red-500 transition">
            Contact Us
          </button>

        </div>

      </div>
    </section>
  );
};

export default About;