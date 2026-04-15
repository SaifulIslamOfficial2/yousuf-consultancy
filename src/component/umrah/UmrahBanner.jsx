import React from "react";
import umrahimg from "../../assets/image/investorImage/makkah.png";
import { Link } from "react-router-dom";

const UmrahBanner = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT CONTENT */}
        <div>
          <p className="text-blue-600 font-semibold mb-2 tracking-wide">
            Umrah Package
          </p>

          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
            হজ পরবর্তী ওমরাহ প্যাকেজ
          </h2>

          <p className="mt-4 text-gray-600 leading-relaxed">
            জুন / জুলাই ২০২৬ এর জন্য আমাদের বিশেষ ওমরাহ প্যাকেজ।
            নিরাপদ, নির্ভরযোগ্য এবং সম্পূর্ণ সাপোর্টসহ।
          </p>

          {/* PRICE BOX */}
          <div className="mt-6 bg-gradient-to-r from-orange-500 to-yellow-500 text-white p-5 rounded-xl shadow-lg">
            <p className="font-semibold">ডিরেক্ট ফ্লাইট = ১৪০,০০০</p>
            <p className="font-semibold">ট্রানজিট ফ্লাইট = ১৩০,০০০</p>
          </div>

          {/* BUTTON */}
          <Link 
            to="/contact" 
            className="inline-block mt-6 bg-blue-600 hover:bg-blue-700 text-white px-7 py-3 rounded-full shadow-lg transition duration-300"
          >
            বিস্তারিত জানতে যোগাযোগ করুন
          </Link>

          {/* BOTTOM CARD */}
          <div className="mt-10 flex items-center bg-gradient-to-r from-blue-900 to-blue-700 text-white rounded-xl shadow-lg overflow-hidden">
            
            <div className="px-6 py-5">
              <h3 className="text-xl font-semibold">
                Yousuf Consultancy
              </h3>
              <p className="text-yellow-300 text-sm">
                Trusted Umrah Service
              </p>

              <div className="mt-2 text-sm opacity-90">
                <p>মদিনা: +966 57 146 1938</p>
                <p>জেদ্দা: +966 50983 2826</p>
                <p>ঢাকা: +88 01636050945</p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative">
          <img
            src={umrahimg}
            alt="Umrah"
            className="w-full h-[420px] md:h-[520px] object-cover rounded-2xl shadow-xl"
          />

          {/* Bottom Fade Effect (image er moto) */}
          <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent rounded-b-2xl"></div>
        </div>

      </div>
    </section>
  );
};

export default UmrahBanner;