import {
  FaGlobe,
  FaFileAlt,
  FaChartLine,
  FaArrowRight,
} from "react-icons/fa";

// import planeImg from "../../assets/image/investorImage/plane.png"; // plane image add korbi

const Features = () => {
  return (
    <section className="bg-[#eef3f9]">

      <div className="grid lg:grid-cols-2">

        {/* 🔥 LEFT SIDE */}
        <div className="p-12 lg:p-20 flex flex-col justify-center relative">

          {/* SMALL TAG */}
          <span className="bg-[#0B3B75] text-white text-sm px-4 py-1 rounded-full w-fit mb-5">
            OUR FEATURES
          </span>

          {/* TITLE */}
          <h2 className="text-4xl font-bold text-[#0B3B75] leading-snug">
            Experience The Best <br /> Service With Yousuf Consultancy
          </h2>

          {/* DESC */}
          <p className="text-gray-500 mt-6 leading-relaxed max-w-md">
            With years of expertise in global immigration laws and visa
            processes, our mission is to simplify your journey to studying,
            working, or settling abroad. We pride ourselves on delivering
            trusted consultancy services.
          </p>

          {/* BUTTON */}
          <button className="mt-8 bg-[#0B3B75] text-white px-6 py-3 rounded-xl flex items-center gap-2 w-fit hover:scale-105 transition">
            CONTACT US NOW <FaArrowRight />
          </button>

          {/* ✈️ PLANE IMAGE */}
          <img
            // src={planeImg}
            className="mt-12 w-[400px] lg:w-[500px]"
          />

        </div>

        {/* 🔥 RIGHT SIDE */}
        <div className="border-l">

          {/* CARD 1 */}
          <div className="p-10 flex gap-6 items-start border-b">

            <div className="text-4xl text-[#0B3B75]">
              <FaGlobe />
            </div>

            <div>
              <h3 className="text-xl font-semibold text-[#0B3B75]">
                Global Visa Expertise
              </h3>

              <p className="text-gray-500 mt-2">
                Specialized knowledge of immigration laws and policies for
                multiple countries and visa processes.
              </p>
            </div>

          </div>

          {/* CARD 2 */}
          <div className="p-10 flex gap-6 items-start border-b">

            <div className="text-4xl text-[#0B3B75]">
              <FaFileAlt />
            </div>

            <div>
              <h3 className="text-xl font-semibold text-[#0B3B75]">
                Personalized Solutions
              </h3>

              <p className="text-gray-500 mt-2">
                Custom strategies designed for your unique background and
                aspirations for visa success.
              </p>
            </div>

          </div>

          {/* CARD 3 */}
          <div className="p-10 flex gap-6 items-start">

            <div className="text-4xl text-[#0B3B75]">
              <FaChartLine />
            </div>

            <div>
              <h3 className="text-xl font-semibold text-[#0B3B75]">
                High Success Rate
              </h3>

              <p className="text-gray-500 mt-2">
                Proven track record in securing visas across different
                categories with maximum success rate.
              </p>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default Features;