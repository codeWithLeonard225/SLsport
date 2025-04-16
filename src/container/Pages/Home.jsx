import React, { useState } from 'react'
import { FaRunning, FaTrophy, FaMedal, FaFutbol } from 'react-icons/fa'
import CountUp from 'react-countup'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import "@fortawesome/fontawesome-free/css/all.min.css";




import img1 from "../../../public/aminata-fullah.jpeg"
import img2 from "../../../public/mohamed-kallon.jpg"
import img3 from "../../../public/female-football-tournament.jpg"


import img4 from "../../../public/sl-women.jpg"
import img5 from "../../../public/swi.jpg"
import img6 from "../../../public/bo-rangers.jpg"


export default function Home() {
    const [modal, setModal] = useState(null)

    const stats = [
        { label: "Athletes", value: 1200, icon: <FaRunning size={30} /> },
        { label: "Sports", value: 18, icon: <FaFutbol size={30} /> },
        { label: "Competitions", value: 75, icon: <FaTrophy size={30} /> },
        { label: "Medals", value: 340, icon: <FaMedal size={30} /> },
    ]

    const news = [
        {
            title: "Mohamed Kallon Unveiled as Leone Stars Head Coach",
            date: "April 10, 2025",
            image: img2,
            content: "The Sierra Leone Football Association (SLFA), with support from the National Sports Authority (NSA) and the Ministry of Sports, has today Wednesday, February 25, officially unveiled Mohamed Kallon as the new Head Coach of the national senior men’s football team."
        },
        {
            title: "Mano River Union Female Football Tournament Kicks Off with Thrilling Goalless Draw in Makeni",
            date: "April 8, 2025",
            image: img3,
            content: "Makeni came alive on Sunday as the much-anticipated Mano River Union Female Football Tournament commenced at the Wusum Field. The opening match between Sierra Leone’s U20 side and Guinea’s Senior National Team ended in a hard-fought goalless draw, setting the stage for a highly competitive tournament."
        },
        {
            title: "Aminata Fullah: The Beacon of Hope for Sierra Leone Refereeing",
            date: "April 8, 2025",
            image: img1,
            content: "For the first time in 23 years, Sierra Leone celebrates a groundbreaking achievement in the realm of refereeing. Aminata Fullah, a rising star from Magburaka, has been appointed as the central referee for the FIFA U17 Girls World Cup qualifier between Cameroon and Egypt. Her appointment, alongside compatriot Humu Marrah as fourth official, marks a significant milestone for Sierra Leone and an inspiring moment for the nation’s football community."
        },
        // Add more news...
    ]

    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false
    }

    return (
        <>
            {/* Hero Section */}
            <section className='h-[500px] w-full bg-green-600 text-white flex items-center justify-center'>
                <div className="text-center">
                    <h1 className="text-4xl font-bold mb-4">Welcome to SL Sport</h1>
                    <p className="text-lg">Empowering Sports, Supporting Athletes</p>
                </div>
            </section>

            {/* Quick Stats Section */}
            <section className="bg-gray-100 py-10">
                <div className="max-w-6xl mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-8 text-green-700">Quick Stats</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                        {stats.map((stat, index) => (
                            <div key={index} className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
                                <div className="flex justify-center mb-2 text-green-600">
                                    {stat.icon}
                                </div>
                                <h3 className="text-4xl font-bold text-green-600">
                                    <CountUp end={stat.value} duration={2} />
                                </h3>
                                <p className="mt-2 text-gray-600">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* News Slider Section */}
            <section className="bg-white py-10">
                <div className="max-w-4xl mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-8 text-green-700">Latest Updates</h2>
                    <Slider {...sliderSettings}>
                        {news.map((item, index) => (
                            <div key={index} className="bg-green-100 rounded-xl shadow overflow-hidden">
                                <img src={item.image} alt={item.title} className="w-full h-64 object-cover object-top" />
                                <div className="p-6 text-center">
                                    <h3 className="text-xl font-semibold text-green-700">{item.title}</h3>
                                    <p className="text-sm text-gray-600 mt-2">{item.date}</p>
                                    <button
                                        onClick={() => setModal(item)}
                                        className="mt-4 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
                                    >
                                        Read More
                                    </button>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </section>

            {/* Modal */}
            {modal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white rounded-lg max-w-lg w-full p-6 relative">
                        <button onClick={() => setModal(null)} className="absolute top-2 right-2 text-gray-500 hover:text-red-600">&times;</button>
                        <img src={modal.image} alt={modal.title} className="w-full h-52 object-top rounded mb-4 object-cover" />
                        <h3 className="text-2xl font-bold mb-2 text-green-700">{modal.title}</h3>
                        <p className="text-sm text-gray-500 mb-2">{modal.date}</p>
                        <p className="text-gray-700">{modal.content}</p>
                    </div>
                </div>
            )}

            {/* Events Calendar Section */}
            <section className="bg-gray-50 py-10">
                <div className="max-w-6xl mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-8 text-green-700">Upcoming Sports Events</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            {
                                title: "National Inter-District Football Final",
                                date: "April 25, 2025",
                                location: "Bo Stadium",
                            },
                            {
                                title: "Sierra Leone Marathon Championship",
                                date: "May 5, 2025",
                                location: "Makeni City",
                            },
                            {
                                title: "Youth Athletics Trials",
                                date: "May 15, 2025",
                                location: "Kenema Sports Complex",
                            },
                            {
                                title: "National Swimming Qualifiers",
                                date: "May 20, 2025",
                                location: "Freetown Aquatics Arena",
                            },
                            {
                                title: "Regional Boxing Meet",
                                date: "June 2, 2025",
                                location: "Kono Indoor Stadium",
                            },
                        ].map((event, index) => (
                            <div key={index} className="bg-white p-6 rounded-xl shadow hover:shadow-md transition">
                                <h3 className="text-xl font-semibold text-green-700 mb-2">{event.title}</h3>
                                <p className="text-sm text-gray-600 mb-1"><strong>Date:</strong> {event.date}</p>
                                <p className="text-sm text-gray-600"><strong>Location:</strong> {event.location}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Featured Athletes / Teams Section */}
            <section className="bg-white py-10">
                <div className="max-w-6xl mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-8 text-green-700">Featured Athletes & Teams</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            {
                                name: "Mariatu Kamara",
                                role: "100m Sprinter",
                                image: img4,
                                bio: "Gold medalist at the West African Championships, inspiring a new generation of sprinters.",
                            },
                            {
                                name: "Bo Rangers FC",
                                role: "Football Team",
                                image: img6,
                                bio: "Dominant force in Sierra Leone's football league with a record of consistent wins.",
                            },
                            {
                                name: "Kadiatu Conteh",
                                role: "Swimmer",
                                image: img5,
                                bio: "Promising young swimmer qualifying for national and international competitions.",
                            },
                        ].map((athlete, index) => (
                            <div key={index} className="bg-gray-100 p-6 rounded-xl shadow hover:shadow-lg transition text-center">
                                <img src={athlete.image} alt={athlete.name} className="w-full h-52 object-cover object-top rounded-t-lg mb-4" />
                                <h3 className="text-xl font-bold text-green-700">{athlete.name}</h3>
                                <p className="text-sm text-gray-500 mb-2">{athlete.role}</p>
                                <p className="text-gray-700 text-sm">{athlete.bio}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Ministry Message Section */}
            <section className="bg-green-50 py-10">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold text-green-700 mb-6">Message from the Ministry</h2>
                    <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-green-600">
                        <p className="text-gray-700 text-lg italic mb-4">
                            "Sports unite communities, empower youth, and elevate our nation on the global stage.
                            Our commitment is to build a strong foundation for talent development and support all athletes across Sierra Leone."
                        </p>
                        <div className="text-right">
                            <p className="font-bold text-green-700">Hon. Ibrahim Nyelenkeh</p>
                            <p className="text-sm text-gray-500">Minister of Sports, Sierra Leone</p>
                        </div>
                    </div>
                </div>
            </section>
            {/* Footer Section */}
            <footer className="bg-green-700 text-white py-10">
                <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-xl font-bold mb-4">Contact Us</h3>
                        <p>Ministry of Sports, Sierra Leone</p>
                        <p>Email: info@slsport.gov.sl</p>
                        <p>Phone: +232 76 123 456</p>
                        <p>Address: Freetown, Sierra Leone</p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-xl font-bold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="hover:underline">Home</a></li>
                            <li><a href="#" className="hover:underline">Events</a></li>
                            <li><a href="#" className="hover:underline">Athletes</a></li>
                            <li><a href="#" className="hover:underline">News</a></li>
                        </ul>
                    </div>

                    {/* Social Media */}
                    <div>
                        <h3 className="text-xl font-bold mb-4">Follow Us</h3>
                        <div className="flex space-x-4">
                            <a href="#" className="hover:text-gray-300"><i className="fab fa-facebook fa-lg"></i></a>
                            <a href="#" className="hover:text-gray-300"><i className="fab fa-twitter fa-lg"></i></a>
                            <a href="#" className="hover:text-gray-300"><i className="fab fa-instagram fa-lg"></i></a>
                            <a href="#" className="hover:text-gray-300"><i className="fab fa-youtube fa-lg"></i></a>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="text-center text-sm mt-8 border-t border-green-500 pt-4">
                    © {new Date().getFullYear()} SL Sport. All rights reserved.
                </div>
            </footer>



        </>
    )
}
