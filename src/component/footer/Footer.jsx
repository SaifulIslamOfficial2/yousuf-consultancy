import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../../assets/image/investorImage/logo_no_bg_v2.png";
import footerbg from "../../assets/image/investorImage/csm_STRATEC_Worldmap_6864cded7c.png";

const Footer = () => {
  return (
    <footer
      className="pt-20 pb-6 relative bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${footerbg})` }}
    >

      {/* 🔥 IMPROVED OVERLAY (MAIN FIX) */}
      <div className="absolute inset-0 bg-gradient-to-b  backdrop-blur-sm"></div>

      {/* 🔥 CONTENT */}
      <div className="relative container mx-auto px-6">

        {/* TOP GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* 🔥 LOGO + ABOUT */}
          <div>
            <Link to={"/"} className="flex items-center justify-center">
              <img className="h-28 w-auto" src={logo} alt="Logo" />
            </Link>

            <p className="text-gray-800 mt-4 text-sm leading-relaxed">
              We provide professional visa processing, investor license,
              business setup, and travel solutions in Saudi Arabia. Your trusted
              partner for global mobility.
            </p>

            {/* SOCIAL */}
            <div className="flex gap-3 mt-5">
              {[FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn].map(
                (Icon, i) => (
                  <div
                    key={i}
                    className="p-3 bg-white rounded-full shadow hover:bg-[#0B3B75] hover:text-white cursor-pointer transition"
                  >
                    <Icon />
                  </div>
                )
              )}
            </div>
          </div>

          {/* 🔗 QUICK LINKS */}
          <div>
            <h3 className="text-lg font-semibold text-[#0B3B75] mb-4">
              Quick Links
            </h3>

            <ul className="space-y-2 text-gray-800 text-sm">
              <li className="hover:text-[#0B3B75] cursor-pointer transition">Home</li>
              <li className="hover:text-[#0B3B75] cursor-pointer transition">About Us</li>
              <li className="hover:text-[#0B3B75] cursor-pointer transition">Services</li>
              <li className="hover:text-[#0B3B75] cursor-pointer transition">Contact</li>
              <li className="hover:text-[#0B3B75] cursor-pointer transition">Blog</li>
            </ul>
          </div>

          {/* 🛠 SERVICES */}
          <div>
            <h3 className="text-lg font-semibold text-[#0B3B75] mb-4">
              Our Services
            </h3>

            <ul className="space-y-2 text-gray-800 text-sm">
              <li>Investor License</li>
              <li>Visa Processing</li>
              <li>Air Ticket Booking</li>
              <li>Business Setup</li>
              <li>Document Services</li>
            </ul>
          </div>

          {/* 🖼 GALLERY */}
          <div>
            <h3 className="text-lg font-semibold text-[#0B3B75] mb-4">
              Our Gallery
            </h3>

            <div className="grid grid-cols-3 gap-2">
              {[
                "photo-1521737604893-d14cc237f11d",
                "photo-1504384308090-c894fdcc538d",
                "photo-1519389950473-47ba0277781c",
                "photo-1522202176988-66273c2fd55f",
                "photo-1551836022-d5d88e9218df",
                "photo-1492724441997-5dc865305da7",
              ].map((img, i) => (
                <img
                  key={i}
                  src={`https://images.unsplash.com/${img}`}
                  className="rounded hover:scale-105 transition"
                />
              ))}
            </div>
          </div>

        </div>

        {/* 🔥 NEWSLETTER */}
        <div className="mt-16 bg-white shadow-xl rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6">

          <h2 className="text-2xl font-bold text-[#0B3B75]">
            Subscribe to our newsletter
          </h2>

          <div className="flex w-full md:w-auto gap-3">
            <input
              type="email"
              placeholder="Your Email"
              className="px-4 py-3 rounded-lg border w-full md:w-80 focus:outline-none focus:ring-2 focus:ring-[#0B3B75]"
            />

            <button className="bg-[#4f46e5] text-white px-6 py-3 rounded-lg font-semibold hover:scale-105 transition">
              Subscribe →
            </button>
          </div>

        </div>

        {/* 🔻 COPYRIGHT */}
        <div className="text-center mt-10 text-gray-700 text-sm">
          © {new Date().getFullYear()} Yousuf Consultancy. All rights reserved.
        </div>

      </div>
    </footer>
  );
};

export default Footer;