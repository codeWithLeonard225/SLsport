import React, { useState } from "react";

// Dummy athlete data
const athleteData = [
    {
        id: 1,
        name: "Fatmata Kamara",
        sport: "100m Sprint",
        team: "Freetown Speedsters",
        achievements: ["Gold Medal - National Games 2023", "Silver - West Africa Trials"],
        imageUrl: "/sl-women2.jpg"
    },
    {
        id: 2,
        name: "Mohamed Conteh",
        sport: "Football",
        team: "Bo Strikers",
        achievements: ["Top Scorer - District League 2024"],
        imageUrl: "/kai.jpg"
    },
    {
        id: 3,
        name: "Isatu Sesay",
        sport: "Volleyball",
        team: "Makeni Eagles",
        achievements: ["Captain - National Volleyball Team"],
        imageUrl: "/sl-women.jpg"
    },
    {
        id: 4,
        name: "Joseph Kallon",
        sport: "Boxing",
        team: "Kenema Knockouts",
        achievements: ["Bronze - ECOWAS Boxing Tournament"],
        imageUrl: "/mohamed-kallon.jpg"
    },
];

export default function Athletes() {
    const [searchQuery, setSearchQuery] = useState("");

    const filteredAthletes = athleteData.filter((athlete) =>
        athlete.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        athlete.team.toLowerCase().includes(searchQuery.toLowerCase())
    );


    return (
        <main className="pt-24 pb-16 px-4 md:px-12 bg-white min-h-screen">
            {/* Header */}
            <section className="text-center mb-10">
                <h1 className="text-4xl font-bold text-green-700">Athlete Profiles</h1>
                <p className="mt-2 text-gray-600">Search and explore registered athletes across various disciplines.</p>
            </section>

            {/* Search Box */}
            <section className="mb-6 max-w-xl mx-auto">
                <input
                    type="text"
                    placeholder="Search by name or team..."
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />

            </section>

            {/* Athlete Cards */}
            <section className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {filteredAthletes.length > 0 ? (
                    filteredAthletes.map((athlete) => (
                        <div key={athlete.id} className="bg-gray-100 shadow rounded-lg overflow-hidden">
                            <img src={athlete.imageUrl} alt={athlete.name} className="w-full h-48 object-cover" />
                            <div className="p-4">
                                <h2 className="text-xl font-semibold text-green-800">{athlete.name}</h2>
                                <p className="text-sm text-gray-700"><strong>Sport:</strong> {athlete.sport}</p>
                                <p className="text-sm text-gray-700"><strong>Team:</strong> {athlete.team}</p>
                                <div className="mt-2">
                                    <p className="text-sm font-semibold">Achievements:</p>
                                    <ul className="list-disc pl-5 text-sm text-gray-600">
                                        {athlete.achievements.map((item, idx) => (
                                            <li key={idx}>{item}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="col-span-full text-center text-gray-500 text-lg">No athletes found.</p>
                )}
            </section>
        </main>
    );
}
