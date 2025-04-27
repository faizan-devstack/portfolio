"use client";

import { TextGenerateEffect } from "../ui/text-generate-effect";
import React, { useState, useEffect } from "react";
import Image from "next/image";

const paragraphs = [
  `I hold a bachelor's degree in Civil Engineering from COMSATS University Islamabad. However, driven by my deep interest and passion for technology, I transitioned into web development. I have honed my skills in building responsive, scalable, and user-friendly web applications.`,

  `Currently, I am working as a Next.js Developer at New Web Order, a company based in Bahria Phase 7, Rawalpindi. In this role, I contribute to developing high-performance web solutions, leveraging modern technologies to create seamless user experiences.`,

  `I am committed to continuous learning and staying at the forefront of industry trends, ensuring that my expertise evolves with the ever-changing landscape of web development. My journey reflects a unique blend of formal education and proactive self-learning, driving my growth as a developer.`,
];

function About() {
  const [visibleParagraphs, setVisibleParagraphs] = useState<number>(0);

  useEffect(() => {
    paragraphs.forEach((_, index) => {
      setTimeout(() => {
        setVisibleParagraphs((prev) => prev + 1);
      }, index * 8500); 
    });
  }, []);

  return (
    <section className="py-10 px-4 w-full flex flex-col justify-center items-center h-auto shadow-lg shadow-gray-800">
      {/* Title Section */}
      <div className="flex justify-center text-4xl md:text-5xl my-8">
        <p className="bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
          About
        </p>
      </div>

      {/* Image Section */}
      <div className="relative inline-block p-[3px] bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full my-10 animate-bounce-custom">
        <Image
          src="/images/5.JPG"
          alt="Portrait"
          width={300}
          height={300}
          className="rounded-full w-36 h-36 md:w-64 md:h-64 bg-gray-900"
        />
      </div>

      {/* Text Section (Sequential Animation) */}
      <div className="text-center">
        {paragraphs.map((paragraph, index) =>
          index < visibleParagraphs ? (
            <TextGenerateEffect key={index} words={paragraph} />
          ) : null
        )}
      </div>
    </section>
  );
}

export default About;
