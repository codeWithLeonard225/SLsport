import React from 'react';

// Sample facilities and venues data
const venues = [
  {
    id: 1,
    name: "National Sports Stadium",
    location: "Freetown",
    capacity: "50,000",
    amenities: ["Football Field", "Track & Field", "Locker Rooms", "VIP Seating"],
    imageUrl: "/Siaka-Steven-Stadium.jpg",
    bookingDetails: "Available for booking. Contact us at bookings@stadium.com"
  },
  {
    id: 2,
    name: "Makeni Indoor Court",
    location: "Makeni",
    capacity: "2,000",
    amenities: ["Indoor Volleyball Court", "Basketball Court", "Seating Area", "Cafeteria"],
    imageUrl: "/volley.jpg",
    bookingDetails: "To book, please email indoor@makeni.com"
  },
  {
    id: 3,
    name: "Bo City Stadium",
    location: "Bo",
    capacity: "30,000",
    amenities: ["Football Field", "Seating Areas", "Parking", "Restrooms"],
    imageUrl: "/Southern Arena.jpg",
    bookingDetails: "Contact bookings@bo-stadium.com to reserve"
  },
  {
    id: 4,
    name: "Bintumani Conference Hall",
    location: "Freetown",
    capacity: "500",
    amenities: ["Projector", "Sound System", "Seating Arrangement", "Free Wi-Fi"],
    imageUrl: "/bintimani.jpg",
    bookingDetails: "Email conference@bintumani.com to book"
  }
];

export default function Facilities() {
  return (
    <main className="pt-24 pb-16 bg-gray-50 min-h-screen px-4 md:px-12">
      {/* Page Header */}
      <section className="mb-10 text-center">
        <h1 className="text-4xl font-bold text-green-800">Facilities & Venues</h1>
        <p className="mt-4 text-lg text-gray-600">Explore our range of facilities and venues available for sports events, conferences, and other activities.</p>
      </section>

      {/* Facilities List */}
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {venues.map((venue) => (
          <div key={venue.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src={venue.imageUrl} alt={venue.name} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-green-700">{venue.name}</h3>
              <p><strong>Location:</strong> {venue.location}</p>
              <p><strong>Capacity:</strong> {venue.capacity}</p>
              <p><strong>Amenities:</strong></p>
              <ul className="list-disc pl-5">
                {venue.amenities.map((amenity, index) => (
                  <li key={index} className="text-sm text-gray-700">{amenity}</li>
                ))}
              </ul>
              <p className="mt-3 text-sm text-gray-600">{venue.bookingDetails}</p>
            </div>
          </div>
        ))}
      </section>

      {/* CTA Section */}
      <section className="text-center mt-12">
        <a href="#booking-form" className="inline-block bg-green-700 text-white px-6 py-2 rounded-md shadow-md hover:bg-green-800 transition">
          Book a Facility Now
        </a>
      </section>
    </main>
  );
}
