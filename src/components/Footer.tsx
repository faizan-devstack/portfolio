'use client'

import { useState } from "react";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "./ui/hero-highlight";

const Footer: React.FC = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [status, setStatus] = useState("");

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("Sending...");

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setStatus("Message sent successfully!");
                setFormData({ name: "", email: "", message: "" });
            } else {
                setStatus("Failed to send the message. Try again.");
            }
        } catch (error) {
            console.error("Error sending message:", error);
            setStatus("An error occurred. Please try again.");
        }
    };

    return (
        <footer className="w-full text-white border-t border-gray-700">
            <HeroHighlight>
                <motion.h1
                    initial={{
                        opacity: 0,
                        y: 20,
                    }}
                    animate={{
                        opacity: 1,
                        y: [20, -5, 0],
                    }}
                    transition={{
                        duration: 0.5,
                        ease: [0.4, 0.0, 0.2, 1],
                    }}
                    className="w-full flex flex-col items-center gap-10 justify-around"
                >
                    {" "}
                    <Highlight className=" text-xl px-4 md:pb-2 md:text-3xl lg:text-4xl max-w-4xl">
                        Thanks for exploring my work!
                    </Highlight>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mx-5">
                        <div className="w-full">
                            <h2 className="text-xl mb-4">Have Questions? Email Me!</h2>
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Your Name"
                                    className="w-full p-2 border border-gray-800 rounded-md text-white focus:outline-none bg-black text-sm"
                                    required
                                />
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="Your Email"
                                    className="w-full p-2 border border-gray-800 rounded-md text-white focus:outline-none bg-black text-sm"
                                    required
                                />
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Your Message"
                                    className="w-full p-2 border border-gray-800 rounded-md text-white focus:outline-none bg-black text-sm"
                                    rows={4}
                                    required
                                />
                                <button
                                    type="submit"
                                    className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-4 py-2 rounded-md hover:opacity-90 transition duration-200"
                                >
                                    Submit
                                </button>
                            </form>
                            {status && <p className="mt-4 text-sm">{status}</p>}
                        </div>
                        <div className="w-full mt-4 md:mt-0">
                            <h2 className="text-xl mb-4">My Location</h2>
                            <iframe
                                className="w-full h-64 md:h-72 rounded-xl"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3321.49055976178!2d73.04285074236743!3d33.64444883434867!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38df950610bb90e1%3A0xfd3f3fb8f89bc8e1!2sKhadda%20Ground%20Park!5e0!3m2!1sen!2s!4v1737396146446!5m2!1sen!2s"
                                allowFullScreen
                                loading="lazy"
                            ></iframe>
                        </div>
                    </div>

                </motion.h1>
            </HeroHighlight>
        </footer>
    );
};

export default Footer;
