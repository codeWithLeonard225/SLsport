import React from "react";

export default function Contact() {
  return (
    <main className="pt-24 pb-16 px-4 md:px-12 bg-white min-h-screen">
      {/* Header */}
      <section className="text-center mb-10">
        <h1 className="text-4xl font-bold text-green-700">Contact Us</h1>
        <p className="mt-2 text-gray-600 max-w-xl mx-auto">
          Have questions, suggestions, or need assistance? Reach out to us through the form or our contact details below.
        </p>
      </section>

      {/* Contact Info */}
      <section className="mb-12 grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <div className="bg-gray-100 p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold text-green-700">Email</h3>
          <p className="text-gray-700 mt-2">info@sportsauthoritysl.org</p>
        </div>
        <div className="bg-gray-100 p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold text-green-700">Phone</h3>
          <p className="text-gray-700 mt-2">+232 76 123 456</p>
        </div>
        <div className="bg-gray-100 p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold text-green-700">Office Address</h3>
          <p className="text-gray-700 mt-2">National Stadium, Freetown, Sierra Leone</p>
        </div>
      </section>

      {/* Contact Form */}
      <section className="bg-gray-50 p-8 rounded-lg shadow max-w-3xl mx-auto mb-12">
        <h2 className="text-2xl font-semibold text-green-700 mb-6">Send Us a Message</h2>
        <form className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input type="text" className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-green-600 focus:border-green-600" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input type="email" className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-green-600 focus:border-green-600" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Message</label>
            <textarea rows="4" className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-green-600 focus:border-green-600"></textarea>
          </div>
          <button type="submit" className="bg-green-700 text-white px-6 py-2 rounded-md hover:bg-green-800 transition">
            Send Message
          </button>
        </form>
      </section>

      {/* Google Map Embed */}
      <section className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-semibold text-green-700 text-center mb-4">Find Us Here</h2>
        <div className="w-full h-80 rounded-lg overflow-hidden shadow-lg">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3953.1074485552687!2d-13.233279924193892!3d8.48032579885815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xf0fb4a1b6f17827%3A0x92f65ed708c15b6!2sNational%20Stadium%2C%20Freetown!5e0!3m2!1sen!2ssl!4v1713253584792!5m2!1sen!2ssl"
            width="100%"
            height="100%"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="border-0 w-full h-full"
          ></iframe>
        </div>
      </section>
    </main>
  );
}
