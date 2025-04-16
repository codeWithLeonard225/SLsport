import React from 'react';

// Sample images array
const images = [
  { id: 1, src: '/female-football-tournament.jpg', alt: 'Image 1' },
  { id: 2, src: '/aminata-fullah.jpeg', alt: 'Image 2' },
  { id: 3, src: '/female-football-tournament.jpg', alt: 'Image 3' },
  { id: 4, src: '/sl-women.jpg', alt: 'Image 4' },
  { id: 5, src: '/female-football-tournament.jpg', alt: 'Image 5' },
  { id: 6, src: '/sl-women.jpg', alt: 'Image 6' },
  // Add more images as needed
];

export default function Gallery() {
  return (
    <main className="pt-24 pb-16 bg-gray-50 min-h-screen px-4 md:px-12">
      {/* Page Header */}
      <section className="mb-10 text-center">
        <h1 className="text-4xl font-bold text-green-800">Gallery</h1>
        <p className="mt-4 text-lg text-gray-600">Explore our collection of images from various events and activities.</p>
      </section>

      {/* Gallery Grid */}
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {images.map((image) => (
          <div key={image.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src={image.src} alt={image.alt} className="w-full h-64 object-cover" />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-green-700">{image.alt}</h3>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}
