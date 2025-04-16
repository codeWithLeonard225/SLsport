import React, { useState } from 'react';

const mockEvents = [
  {
    id: 1,
    title: "National Football Finals",
    sport: "Football",
    location: "Freetown",
    date: "2025-05-10",
    sessions: [
        {
            time: "4:00 PM",
            venue: "National Stadium",
            teams: ["Western Lions", "Eastern Stars"],
        },
        {
          time: "3:00 PM",
          venue: "Bo School Field",
          teams: ["Southern Racers", "Northern Dashers"]
        }
      ]
  },
  {
    id: 2,
    title: "Inter-District Athletics Meet",
    sport: "Athletics",
    location: "Bo",
    date: "2025-05-15",
    sessions: [
      {
        time: "10:00 AM",
        venue: "Bo City Stadium",
        teams: ["Western Eagles", "Eastern Runners"]
      },
      {
        time: "3:00 PM",
        venue: "Bo School Field",
        teams: ["Southern Racers", "Northern Dashers"]
      }
    ]
  },
  {
    id: 3,
    title: "Volleyball Zonal Qualifiers",
    sport: "Volleyball",
    location: "Makeni",
    date: "2025-06-01",
    time: "2:00 PM",
    venue: "Makeni Indoor Court",
    teams: ["North Spikers", "Southern Blocks"],
  },
];

const unique = (arr, key) => [...new Set(arr.map(item => item[key]))];

export default function Events() {
  const [filters, setFilters] = useState({
    sport: "",
    location: "",
    date: "",
  });

  const [expandedEventId, setExpandedEventId] = useState(null);

  const filteredEvents = mockEvents.filter(event => {
    const matchSport = filters.sport ? event.sport === filters.sport : true;
    const matchLocation = filters.location ? event.location === filters.location : true;
    const matchDate = filters.date ? event.date === filters.date : true;
    return matchSport && matchLocation && matchDate;
  });

  return (
    <main className="pt-24 pb-16 bg-gray-50 min-h-screen px-4 md:px-12">
      {/* Page Header */}
      <section className="mb-10 text-center">
        <h1 className="text-4xl font-bold text-green-800">Upcoming Sports Events</h1>
      </section>

      {/* Filter Controls */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <select
          className="p-2 border border-gray-300 rounded"
          value={filters.sport}
          onChange={e => setFilters({ ...filters, sport: e.target.value })}
        >
          <option value="">Filter by Sport</option>
          {unique(mockEvents, "sport").map((sport, index) => (
            <option key={index} value={sport}>{sport}</option>
          ))}
        </select>

        <select
          className="p-2 border border-gray-300 rounded"
          value={filters.location}
          onChange={e => setFilters({ ...filters, location: e.target.value })}
        >
          <option value="">Filter by Location</option>
          {unique(mockEvents, "location").map((location, index) => (
            <option key={index} value={location}>{location}</option>
          ))}
        </select>

        <input
          type="date"
          className="p-2 border border-gray-300 rounded"
          value={filters.date}
          onChange={e => setFilters({ ...filters, date: e.target.value })}
        />
      </section>

      {/* Upcoming Events List */}
      <section className="space-y-6">
        {filteredEvents.length > 0 ? (
          filteredEvents.map(event => {
            const isExpanded = expandedEventId === event.id;

            return (
              <div key={event.id} className="bg-white rounded-xl shadow-md p-4 border-l-4 border-green-600">
                <h2 className="text-xl font-bold text-green-700">{event.title}</h2>
                <p><strong>Sport:</strong> {event.sport}</p>
                <p><strong>Location:</strong> {event.location}</p>
                <p><strong>Date:</strong> {new Date(event.date).toLocaleDateString()}</p>

                <button
                  onClick={() => setExpandedEventId(isExpanded ? null : event.id)}
                  className="mt-3 px-3 py-1 bg-green-700 text-white rounded hover:bg-green-800 transition"
                >
                  {isExpanded ? "Hide Details" : "View Details"}
                </button>

                {isExpanded && (
                  <div className="mt-4 bg-gray-50 p-3 rounded shadow-inner text-sm space-y-3">
                    {event.sessions ? (
                      event.sessions.map((session, idx) => (
                        <div key={idx} className="border-l-4 border-green-300 pl-4">
                          <p><strong>Time:</strong> {session.time}</p>
                          <p><strong>Venue:</strong> {session.venue}</p>
                          <p><strong>Teams:</strong> {session.teams.join(" vs ")}</p>
                        </div>
                      ))
                    ) : (
                      <div className="border-l-4 border-green-300 pl-4">
                        <p><strong>Time:</strong> {event.time}</p>
                        <p><strong>Venue:</strong> {event.venue}</p>
                        <p><strong>Teams:</strong> {event.teams.join(" vs ")}</p>
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })
        ) : (
          <p className="text-gray-600 text-center">No events found for selected filters.</p>
        )}
      </section>

      {/* Past Event Results Archive */}
      {/* <section className="mt-16">
        <h2 className="text-3xl font-bold text-green-800 text-center mb-6">Past Event Results Archive</h2>
        
      
        <div className="space-y-4">
          {mockEvents.map(event => (
            <div key={event.id} className="bg-white rounded-xl shadow-md p-4 border-l-4 border-green-600">
              <h3 className="text-xl font-bold text-green-700">{event.title}</h3>
              <p><strong>Sport:</strong> {event.sport}</p>
              <p><strong>Location:</strong> {event.location}</p>
              <p><strong>Date:</strong> {new Date(event.date).toLocaleDateString()}</p>

           
              <div className="mt-4 bg-gray-50 p-3 rounded shadow-inner text-sm">
                <p><strong>Results:</strong> You can display the results here.</p>
              </div>
            </div>
          ))}
        </div>
      </section> */}
    </main>
  );
}
