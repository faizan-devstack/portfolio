"use client";

import { TextGenerateEffect } from "../ui/text-generate-effect";
import React from 'react'
import Image from 'next/image'

const words = `I hold a bachelor's degree in civil engineering from COMSATS University Islamabad. However, driven by my interest and passion for web development, I transitioned into the tech field. Through online courses, personal projects, and hands-on practice, I have developed the skills needed to build responsive, scalable, and user-friendly web applications. I am dedicated to staying up-to-date with the latest industry trends, ensuring that my knowledge and techniques evolve with the demands of the field. My journey reflects a unique blend of formal education and proactive self-learning, driving my growth as a developer.`;

function About() {
    return (
        <section className="py-10 px-4 w-full flex flex-col justify-center items-center h-auto shadow-lg shadow-gray-800">
            {/* Title Section */}
            <div className="flex justify-center text-4xl md:text-5xl my-8">
                <p className="bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">About</p>
            </div>
            <div className="relative inline-block p-[3px] bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full my-10 animate-bounce-custom">
                <Image
                    src="/images/5.JPG"
                    alt="Portrait"
                    width={300}
                    height={300}
                    className="rounded-full w-36 h-36 md:w-64 md:h-64 bg-gray-900"
                />
            </div>
            <div>
                <TextGenerateEffect words={words} />
            </div>
        </section>
    )
}

export default About
