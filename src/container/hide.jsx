import React, { useEffect, useState } from "react";
import { db } from "../../Firebase"; // update the path as needed
import {
    collection,
    addDoc,
    onSnapshot,
    query,
    orderBy,
} from "firebase/firestore";
import imageCompression from "browser-image-compression";
import { FaTrophy, FaRunning, FaUsers } from 'react-icons/fa'; // Import icons

// Cloudinary Config
const CLOUD_NAME = "dyt1xzrcv";
const UPLOAD_PRESET = "firstTime";

const ProfileCard = ({ athlete }) => (
    <div className="bg-white border rounded-lg shadow-md overflow-hidden hover:shadow-xl transition duration-300 ease-in-out">
        <div className="relative">
            <img
                src={athlete.imageUrl}
                alt={athlete.name}
                className="w-full h-[300px] object-cover"
            />
            <div className="absolute top-2 left-2 bg-green-600 text-white rounded-full p-2 shadow-md">
                <FaRunning size={16} /> {/* Sport Icon */}
            </div>
        </div>
        <div className="p-4">
            <h3 className="text-xl font-semibold text-green-800 mb-2">{athlete.name}</h3>
            <div className="flex items-center text-gray-700 mb-1">
                <FaUsers className="mr-2" />
                <p className="text-sm">{athlete.team}</p>
            </div>
            <div className="mb-3">
                <h4 className="text-sm font-semibold text-gray-800 flex items-center">
                    <FaTrophy className="mr-2 text-yellow-500" /> Achievements
                </h4>
                <ul className="list-disc pl-5 text-sm text-gray-600">
                    {athlete.achievements.map((ach, index) => (
                        <li key={index}>{ach}</li>
                    ))}
                </ul>
            </div>
            <p className="text-sm italic text-gray-500">Playing: {athlete.sport}</p>
        </div>
    </div>
);

export default function Athletes() {
    const [athletes, setAthletes] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [newAthlete, setNewAthlete] = useState({
        name: "",
        sport: "",
        team: "",
        achievements: "",
        image: null,
    });

    // Realtime Firestore fetch
    useEffect(() => {
        const q = query(collection(db, "athletes"), orderBy("name"));
        const unsubscribe = onSnapshot(q, (snapshot) => {
            const updated = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));
            setAthletes(updated);
        });
        return () => unsubscribe();
    }, []);

    const handleInputChange = (e) => {
        const { name, value, files } = e.target;
        setNewAthlete((prev) => ({
            ...prev,
            [name]: files ? files[0] : value,
        }));
    };

    const uploadFileToCloudinary = async (file, fieldName) => {
        if (!file) return null;

        try {
            const options = {
                maxSizeMB: 1,
                maxWidthOrHeight: 1024,
                useWebWorker: true,
            };

            const compressedFile = await imageCompression(file, options);
            const uploadData = new FormData();
            uploadData.append("file", compressedFile);
            uploadData.append("upload_preset", UPLOAD_PRESET);
            uploadData.append("folder", "North-Caroline-Academy/form");

            const response = await fetch(`https://api.cloudinary.com/v1_1/${CLOUD_NAME}/upload`, {
                method: "POST",
                body: uploadData,
            });

            const data = await response.json();
            if (data.error) throw new Error(data.error.message);

            return data.secure_url;
        } catch (err) {
            console.error(`Cloudinary Upload Error (${fieldName}):`, err);
            return null;
        }
    };

    const handleAddAthlete = async (e) => {
        e.preventDefault();

        const imageUrl = await uploadFileToCloudinary(newAthlete.image, "Athlete Image");

        if (!imageUrl) return;

        const achievementsList = newAthlete.achievements
            .split(",")
            .map((a) => a.trim());

        await addDoc(collection(db, "athletes"), {
            name: newAthlete.name,
            sport: newAthlete.sport,
            team: newAthlete.team,
            achievements: achievementsList,
            imageUrl: imageUrl,
        });

        setNewAthlete({
            name: "",
            sport: "",
            team: "",
            achievements: "",
            image: null,
        });
    };

    const filteredAthletes = athletes.filter((athlete) =>
        athlete.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        athlete.team.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <main className="pt-24 pb-16 px-4 md:px-12 bg-white min-h-screen">
            <section className="text-center mb-10">
                <h1 className="text-4xl font-bold text-green-700">Athlete Profiles</h1>
                <p className="mt-2 text-gray-600">
                    Search and explore registered athletes across various disciplines.
                </p>
            </section>

            {/* Add Athlete Form */}
            <form
                onSubmit={handleAddAthlete}
                className="bg-gray-50 p-4 rounded-md shadow max-w-xl mx-auto mb-8"
            >
                <h2 className="text-xl font-bold mb-4">Add New Athlete</h2>
                <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    required
                    value={newAthlete.name}
                    onChange={handleInputChange}
                    className="w-full mb-2 px-3 py-2 border rounded"
                />
                <input
                    type="text"
                    name="sport"
                    placeholder="Sport"
                    required
                    value={newAthlete.sport}
                    onChange={handleInputChange}
                    className="w-full mb-2 px-3 py-2 border rounded"
                />
                <input
                    type="text"
                    name="team"
                    placeholder="Team"
                    required
                    value={newAthlete.team}
                    onChange={handleInputChange}
                    className="w-full mb-2 px-3 py-2 border rounded"
                />
                <input
                    type="text"
                    name="achievements"
                    placeholder="Achievements (comma separated)"
                    value={newAthlete.achievements}
                    onChange={handleInputChange}
                    className="w-full mb-2 px-3 py-2 border rounded"
                />
                <input
                    type="file"
                    name="image"
                    accept="image/*"
                    required
                    onChange={handleInputChange}
                    className="w-full mb-4"
                />
                <button
                    type="submit"
                    className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700"
                >
                    Upload Athlete
                </button>
            </form>

            {/* Search Box */}
            <section className="mb-6 max-w-xl mx-auto">
                <input
                    type="text"
                    placeholder="Search by name or team"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full px-3 py-2 border rounded"
                />

            </section>

            {/* Athlete List card */}
            <section className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {filteredAthletes.map((athlete) => (
                    <ProfileCard key={athlete.id} athlete={athlete} />
                ))}
                {filteredAthletes.length === 0 && (
                    <p className="col-span-full text-center text-gray-500">
                        No athletes found.
                    </p>
                )}
            </section>
        </main>
    );
}