import React from 'react';
import img1 from "/sl-women2.jpg";
import leader1 from "/sl-women2.jpg";
import leader2 from "/sl-women2.jpg";
import leader3 from "/sl-women2.jpg";

export default function History() {
  return (
    <main className="pt-24 pb-16 bg-gray-50 min-h-screen">
      
      {/* Hero Banner */}
      <section className="relative h-64 bg-green-800 text-white flex items-center justify-center">
        <h1 className="text-4xl font-bold">Our History</h1>
      </section>

      {/* History Content */}
      <section className="max-w-4xl mx-auto px-4 md:px-12 mt-10">
        <div className="bg-white shadow-md rounded-xl p-6 text-gray-700 leading-relaxed space-y-6">
          <p>
            The Sierra Leone Ministry of Sports was established to oversee the development and regulation of sports activities across the country.
            Over the decades, the Ministry has played a key role in shaping the national sports culture, promoting physical education, and supporting the dreams of young athletes from grassroots to international competitions.
          </p>

          <p>
            Since its founding, the Ministry has collaborated with numerous sports associations, institutions, and international bodies to ensure fair play, sportsmanship, and talent development throughout Sierra Leone.
          </p>

          <p>
            From early community matches in local fields to representing Sierra Leone on global stages like the Olympics and FIFA World Cups, the journey of SL Sport has been nothing short of inspiring.
          </p>

          <p>
            Key milestones include the establishment of district sports councils, construction of national sports facilities, and hosting of regional tournaments which boosted national pride and talent discovery.
          </p>

          <p>
            As we continue to grow, our mission remains clear: to use sports as a tool for unity, empowerment, and national transformation.
          </p>
        </div>

        {/* Timeline / Milestones */}
        <div className="border-l-4 border-green-600 pl-6 mt-10 space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-green-700">1961 - Formation</h3>
            <p>The Ministry of Sports was officially formed following Sierra Leone’s independence.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-green-700">1996 - Youth Development Program</h3>
            <p>Launch of the national youth athletics and football initiatives.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-green-700">2020 - National Sports Policy</h3>
            <p>Introduction of the first structured policy for long-term sports development.</p>
          </div>
        </div>

        {/* Optional Image */}
        <img 
          src={img1}
          alt="SL Sport History" 
          className="rounded-lg shadow-md mt-10"
        />

        {/* Mission & Vision */}
        <div className="bg-white shadow-md rounded-xl p-6 mt-16 text-gray-700 space-y-10">
          <h2 className="text-3xl font-bold text-green-700 text-center">Mission & Vision</h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-semibold text-green-600 mb-2">Our Mission</h3>
              <p>
                To promote and support the development of sports at all levels across Sierra Leone,
                fostering a culture of excellence, teamwork, discipline, and national pride through
                inclusive and sustainable sports programs.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-green-600 mb-2">Our Vision</h3>
              <p>
                To be a leading force in building a healthy, united, and globally competitive Sierra Leone
                through innovative sports initiatives that inspire and empower the youth and all citizens.
              </p>
            </div>
          </div>
        </div>

        {/* Organizational Structure */}
        <div className="bg-white shadow-md rounded-xl p-6 mt-16 text-gray-700 space-y-6">
          <h2 className="text-3xl font-bold text-green-700 text-center">Organizational Structure</h2>
          
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Minister of Sports</strong> – Provides overall leadership and policy direction.</li>
            <li><strong>Deputy Minister</strong> – Supports the minister and oversees special initiatives.</li>
            <li><strong>Permanent Secretary</strong> – Manages administrative and strategic operations.</li>
            <li><strong>Directors of Departments</strong> – Lead specialized units like Youth Sports, Facilities, Events, etc.</li>
            <li><strong>District Sports Officers</strong> – Represent the Ministry in each district, coordinating local programs.</li>
            <li><strong>Administrative Staff</strong> – Handle planning, finance, communication, and logistics.</li>
          </ul>
        </div>

        {/* Leadership Section */}
        <div className="bg-white shadow-md rounded-xl p-6 mt-16 text-gray-700 space-y-10">
          <h2 className="text-3xl font-bold text-green-700 text-center">Leadership</h2>

          <div className="grid gap-10 md:grid-cols-3 max-w-6xl mx-auto">
            <div className="text-center">
              <img 
                src={leader1} 
                alt="Minister" 
                className="w-32 h-32 object-cover rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-green-700">Hon. Ibrahim Nyelenkeh</h3>
              <p className="text-gray-600">Minister of Sports</p>
            </div>

            <div className="text-center">
              <img 
                src={leader2} 
                alt="Director" 
                className="w-32 h-32 object-cover rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-green-700">Mrs. Aminata Bangura</h3>
              <p className="text-gray-600">Director of Sports</p>
            </div>

            <div className="text-center">
              <img 
                src={leader3} 
                alt="Deputy Director" 
                className="w-32 h-32 object-cover rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-green-700">Mr. Abdulai Conteh</h3>
              <p className="text-gray-600">Deputy Director of Sports</p>
            </div>
          </div>
        </div>

        {/* Achievements Section */}
        <div className="bg-white shadow-md rounded-xl p-6 mt-16 text-gray-700 space-y-10">
          <h2 className="text-3xl font-bold text-green-700 text-center">Achievements</h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-semibold text-green-600 mb-2">Olympic Participation</h3>
              <p>
                Sierra Leone has consistently participated in the Summer Olympic Games, with athletes from various disciplines proudly representing the nation on the world stage.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-green-600 mb-2">FIFA World Cup Qualifiers</h3>
              <p>
                The Sierra Leone national football team has made significant strides in World Cup qualifiers, highlighting the country's growing talent pool.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-green-600 mb-2">National Sports Facilities</h3>
              <p>
                Investment in sports infrastructure, including the construction of the national stadium and regional facilities, has provided world-class venues for athletes.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-green-600 mb-2">Youth Development Programs</h3>
              <p>
                Launching the National Youth Sports Development Program, which has led to increased participation and success in athletics and football among young Sierra Leoneans.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
