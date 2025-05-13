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
    <div className="bg-white border rounded-lg shadow-md overflow-hidden hover:shadow-xl transition duration-300 ease-in-out z-10 relative">
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
    const [isFormVisible, setIsFormVisible] = useState(false);
    const [uploadProgress, setUploadProgress] = useState(0);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState(null);

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

    const uploadFileToCloudinary = async (file, fieldName, onProgress) => {
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

            return new Promise((resolve, reject) => {
                const xhr = new XMLHttpRequest();
                xhr.open('POST', `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/upload`);

                xhr.upload.onprogress = (event) => {
                    if (event.lengthComputable && onProgress) {
                        const progress = Math.round((event.loaded * 100) / event.total);
                        onProgress(progress);
                    }
                };

                xhr.onload = () => {
                    if (xhr.status >= 200 && xhr.status < 300) {
                        resolve(JSON.parse(xhr.responseText).secure_url);
                    } else {
                        reject(new Error(`Cloudinary Upload Failed with status ${xhr.status}`));
                    }
                };

                xhr.onerror = () => {
                    reject(new Error("Network error during Cloudinary upload."));
                };

                xhr.send(uploadData);
            });

        } catch (err) {
            console.error(`Cloudinary Upload Error (${fieldName}):`, err);
            setError(`Failed to upload ${fieldName}: ${err.message}`);
            return null;
        }
    };

    const handleAddAthlete = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError(null);
        setUploadProgress(0);

        const imageUrl = await uploadFileToCloudinary(
            newAthlete.image,
            "Athlete Image",
            (progress) => setUploadProgress(progress)
        );

        if (!imageUrl) {
            setIsSubmitting(false);
            return;
        }

        const achievementsList = newAthlete.achievements
            .split(",")
            .map((a) => a.trim());

        try {
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
            setIsFormVisible(false);
            setUploadProgress(0);
        } catch (dbError) {
            console.error("Error adding document:", dbError);
            setError("Failed to add athlete data to Firestore.");
        } finally {
            setIsSubmitting(false);
        }
    };

    const toggleFormVisibility = () => {
        setIsFormVisible(!isFormVisible);
        setError(null); // Clear error when opening the form
        setNewAthlete({ name: "", sport: "", team: "", achievements: "", image: null }); // Reset form on open
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
                <button
                    onClick={toggleFormVisibility}
                    className="mt-6 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline z-20 relative"
                >
                    Add New Athlete
                </button>
            </section>

            {/* Add Athlete Form (Modal-like) */}
            {isFormVisible && (
                <div className="fixed top-0 left-0 w-full h-full bg-gray-500 bg-opacity-75 flex justify-center items-center z-30">
                    <form
                        onSubmit={handleAddAthlete}
                        className="bg-white p-6 rounded-md shadow-lg max-w-xl w-full relative z-40"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            type="button"
                            onClick={toggleFormVisibility}
                            className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 z-50"
                        >
                            <svg className="h-6 w-6 fill-current" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                        </button>
                        <h2 className="text-xl font-bold mb-4">Add New Athlete</h2>
                        {error && <p className="text-red-500 mb-2">{error}</p>}
                        <input
                            type="text"
                            name="name"
                            placeholder="Full Name"
                            required
                            value={newAthlete.name}
                            onChange={handleInputChange}
                            className="w-full mb-2 px-3 py-2 border rounded"
                            disabled={isSubmitting}
                        />
                        <input
                            type="text"
                            name="sport"
                            placeholder="Sport"
                            required
                            value={newAthlete.sport}
                            onChange={handleInputChange}
                            className="w-full mb-2 px-3 py-2 border rounded"
                            disabled={isSubmitting}
                        />
                        <input
                            type="text"
                            name="team"
                            placeholder="Team"
                            required
                            value={newAthlete.team}
                            onChange={handleInputChange}
                            className="w-full mb-2 px-3 py-2 border rounded"
                            disabled={isSubmitting}
                        />
                        <input
                            type="text"
                            name="achievements"
                            placeholder="Achievements (comma separated)"
                            value={newAthlete.achievements}
                            onChange={handleInputChange}
                            className="w-full mb-2 px-3 py-2 border rounded"
                            disabled={isSubmitting}
                        />
                        <input
                            type="file"
                            name="image"
                            accept="image/*"
                            required
                            onChange={handleInputChange}
                            className="w-full mb-4"
                            disabled={isSubmitting}
                        />
                        <button
                            type="submit"
                            className={`bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? 'Uploading...' : 'Upload Athlete'}
                        </button>
                        {isSubmitting && (
                            <div className="mt-4 bg-gray-200 rounded-full h-2">
                                <div
                                    className="bg-green-500 h-2 rounded-full"
                                    style={{ width: `${uploadProgress}%` }}
                                ></div>
                            </div>
                        )}
                    </form>
                </div>
            )}

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
            <section className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 z-0 relative">
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