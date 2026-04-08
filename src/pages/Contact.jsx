import React from "react";

const Contact = () => {
  return (
    <div className="bg-gray-100 min-h-screen">


      {/* Hero Section */}
      <div className="relative h-[300px] bg-gray-300 flex items-center justify-center">
        <img
          src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
          alt="hero"
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />

        <h1 className="relative text-4xl font-bold text-gray-800">
          Contact Us
        </h1>
      </div>

      {/* Contact Section */}
      <div className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10">

        {/* Left Side */}
        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Let's talk with us
          </h2>

          <p className="text-gray-500 mb-6">
            Questions, comments, or suggestions? Simply fill in the form and
            we’ll be in touch shortly.
          </p>

          <div className="space-y-4 text-gray-600">
            <div className="flex items-center gap-3">
              <span className="text-purple-500">📍</span>
              <p>
                1055 Arthur ave Elk Groot, 67, New Palmas South Carolina.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-purple-500">📞</span>
              <p>+1 234 678 9108 99</p>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-purple-500">✉️</span>
              <p>Contact@moralizer.com</p>
            </div>
          </div>
        </div>

        {/* Right Form */}
        <div className="bg-white rounded-xl shadow-lg drop-shadow-xl p-6 ">

          <form className="space-y-4">

            <div className="flex gap-4">
              <input
                type="text"
                placeholder="First Name"
                className="w-1/2 p-3 shadow-md border border-gray-300 rounded-lg  focus:outline-secondary"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="w-1/2 p-3  shadow-md border border-gray-300  rounded-lg  focus:outline-secondary"
              />
            </div>

            <input
              type="email"
              placeholder="Email*"
              className="w-full p-3 shadow-md border border-gray-300 rounded-lg  focus:outline-secondary"
            />

            <input
              type="text"
              placeholder="Phone Number*"
              className="w-full p-3 shadow-md border border-gray-300 rounded-lg  focus:outline-secondary"
            />

            <textarea
              rows="4"
              placeholder="Your message..."
              className="w-full p-3 shadow-md border border-gray-300 rounded-lg  focus:outline-secondary"
            ></textarea>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-primary to-secondary text-white py-3 rounded-full font-semibold hover:opacity-90 transition"
            >
              Send Message
            </button>

          </form>

        </div>
      </div>
    </div>
  );
};

export default Contact;