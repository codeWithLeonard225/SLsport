import React from 'react';

// Sample departments data
const departments = [
  {
    id: 1,
    name: "Human Resources",
    description: "Responsible for recruiting, training, and employee welfare.",
    contact: "hr@company.com",
    location: "Building A, 1st Floor",
  },
  {
    id: 2,
    name: "Finance",
    description: "Handles budgeting, accounting, and financial reporting.",
    contact: "finance@company.com",
    location: "Building B, 2nd Floor",
  },
  {
    id: 3,
    name: "IT & Support",
    description: "Manages IT infrastructure, software development, and technical support.",
    contact: "it.support@company.com",
    location: "Building C, 3rd Floor",
  },
  {
    id: 4,
    name: "Marketing",
    description: "Focuses on promoting the company's brand and services.",
    contact: "marketing@company.com",
    location: "Building D, 4th Floor",
  },
  {
    id: 5,
    name: "Sales",
    description: "Handles customer sales, client management, and business development.",
    contact: "sales@company.com",
    location: "Building E, 5th Floor",
  },
];

export default function Departments() {
  return (
    <main className="pt-24 pb-16 bg-gray-50 min-h-screen px-4 md:px-12">
      {/* Page Header */}
      <section className="mb-10 text-center">
        <h1 className="text-4xl font-bold text-green-800">Departments & Units</h1>
        <p className="mt-4 text-lg text-gray-600">Explore the different departments and units within our organization.</p>
      </section>

      {/* Departments List */}
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {departments.map((dept) => (
          <div key={dept.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="bg-green-700 text-white p-4">
              <h3 className="text-xl font-semibold">{dept.name}</h3>
            </div>
            <div className="p-4">
              <p className="text-sm text-gray-700 mb-3">{dept.description}</p>
              <p><strong>Contact:</strong> {dept.contact}</p>
              <p><strong>Location:</strong> {dept.location}</p>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}
