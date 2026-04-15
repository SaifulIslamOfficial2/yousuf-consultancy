import { useState } from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import contactbanner from "../../assets/image/madinah.jpg";
import officePic from "../../assets/image/madina head office.jpeg";

const contactData = {
  MADINAH: {
    name: "Madinah",
    sub: "Main Branch",
    banner:
      contactbanner,
    phone: "+966 57 146 1938",
    email: "madinah@example.com",
    location: "Madinah, Saudi Arabia",
    hours: [
      "Friday: 2 PM - 2 AM",
      "Saturday: 2 PM - 2 AM",
      "Sunday: 2 PM - 2 AM",
      "Monday: 2 PM - 2 AM",
      "Tuesday: 2 PM - 2 AM",
      "Wednesday: 2 PM - 2 AM",
      "Thursday: 2 PM - 2 AM",
    ],
    image:
      officePic,
  },

  JEDDAH: {
    name: "Jeddah",
    sub: "Saudi Arabia",
    banner:
      contactbanner,
    phone: "+966 50 983 2826",
    email: "jeddah@example.com",
    location: "Jeddah, Saudi Arabia",
    hours: [
      "Friday: 2 PM - 2 AM",
      "Saturday: 2 PM - 2 AM",
      "Sunday: 2 PM - 2 AM",
      "Monday: 2 PM - 2 AM",
      "Tuesday: 2 PM - 2 AM",
      "Wednesday: 2 PM - 2 AM",
      "Thursday: 2 PM - 2 AM",
    ],
    image:
      officePic,
  },

  SUKSAMAK: {
    name: "Madinah",
    sub: "Suksamak",
    banner:
      contactbanner,
    phone: "+966 500 000 000",
    email: "suksamak@example.com",
    location: "Madinah Suksamak Area",
    hours: [
      "Friday: 2 PM - 2 AM",
      "Saturday: 2 PM - 2 AM",
      "Sunday: 2 PM - 2 AM",
      "Monday: 2 PM - 2 AM",
      "Tuesday: 2 PM - 2 AM",
      "Wednesday: 2 PM - 2 AM",
      "Thursday: 2 PM - 2 AM",
    ],
    image:
      officePic,
  },

  BABUSSALAM: {
    name: "Madinah",
    sub: "Babussalam",
    banner:
      contactbanner,
    phone: "+966 511 111 111",
    email: "babussalam@example.com",
    location: "Madinah Babussalam Area",
    hours: [
      "Friday: 2 PM - 2 AM",
      "Saturday: 2 PM - 2 AM",
      "Sunday: 2 PM - 2 AM",
      "Monday: 2 PM - 2 AM",
      "Tuesday: 2 PM - 2 AM",
      "Wednesday: 2 PM - 2 AM",
      "Thursday: 2 PM - 2 AM",
    ],
    image:
      officePic,
  },
};

const Contact = () => {
  const [active, setActive] = useState("MADINAH");
  const data = contactData[active];

  return (
    <div className="bg-[#f7f9f8]">

<div
  className="h-[260px] relative flex items-center justify-center text-white text-center rounded-b-3xl overflow-hidden"
  style={{
    backgroundImage: `url(${data.banner})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>

  {/* 🔥 GRADIENT OVERLAY */}
  <div className="absolute inset-0 bg-gradient-to-r from-[#0B3B75]/50 to-[#1E6FB8]/50"></div>

  {/* 🔥 CONTENT */}
  <div className="relative z-10 flex flex-col items-center justify-center">
    <h1 className="text-4xl font-bold">Contact</h1>
    <p className="text-sm mt-2">
      {data.name} ({data.sub})
    </p>
  </div>

</div>

      {/* 🔥 TITLE */}
      <div className="text-center py-12">
        <p className="text-[#1E6FB8] text-sm font-semibold">
          CONTACT INFORMATION
        </p>
        <h2 className="text-4xl font-bold text-[#0B3B75]">
          Let Your Wanderlust Guide You
        </h2>
      </div>

      {/* 🔥 BUTTONS */}
      <div className="flex justify-center gap-4 flex-wrap mb-10">
        {Object.keys(contactData).map((key) => {
          const item = contactData[key];

          return (
            <button
              key={key}
              onClick={() => setActive(key)}
              className={`px-6 py-3 rounded-xl border transition flex flex-col items-center ${
                active === key
                  ? "text-white bg-gradient-to-r from-[#0B3B75] to-[#1E6FB8]"
                  : "border-[#1E6FB8] text-[#0B3B75]"
              }`}
            >
              <span className="font-semibold">{item.name}</span>
              <p className="text-xs opacity-80">{item.sub}</p>
            </button>
          );
        })}
      </div>

      {/* 🔥 CONTACT BOX */}
      <div className="max-w-7xl mx-auto px-6 pb-16">
        <div className="bg-white rounded-2xl shadow-md p-6 grid md:grid-cols-3 gap-6 items-center">

          {/* LEFT */}
          <div className="space-y-4">
            <div className="flex gap-3 items-center">
              <FaPhoneAlt className="text-[#1E6FB8]" />
              <div>
                <p className="text-sm text-gray-400">Call</p>
                <p className="font-semibold">{data.phone}</p>
              </div>
            </div>

            <div className="flex gap-3 items-center">
              <FaEnvelope className="text-[#1E6FB8]" />
              <div>
                <p className="text-sm text-gray-400">Email</p>
                <p className="font-semibold">{data.email}</p>
              </div>
            </div>

            <div className="flex gap-3 items-center">
              <FaMapMarkerAlt className="text-[#1E6FB8]" />
              <div>
                <p className="text-sm text-gray-400">Location</p>
                <p className="font-semibold">{data.location}</p>
              </div>
            </div>
          </div>

          {/* MIDDLE */}
          <div className="border-l pl-6">
            {data.hours.map((h, i) => (
              <p key={i} className="text-sm text-gray-600 mb-2">
                🟢 {h}
              </p>
            ))}
          </div>

          {/* RIGHT */}
          <div>
            <img
              src={data.image}
              alt="region"
              className="rounded-xl w-full h-[180px] object-cover"
            />
          </div>
        </div>
      </div>

      {/* 🔥 MAP */}
      <div className="max-w-7xl mx-auto px-6 pb-20">
        <iframe
          className="w-full h-[400px] rounded-2xl"
          src="https://maps.google.com/maps?q=Madinah%20Saudi%20Arabia&t=&z=13&ie=UTF8&iwloc=&output=embed"
        ></iframe>
      </div>

    </div>
  );
};

export default Contact;