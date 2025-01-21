'use client'

import React, { useEffect, useRef, useState } from "react";
import classNames from "classnames";

type SkillsCardProps = {
  logo: string; // Path to the logo image
  title: string;
  description: string;
};

const SkillsCard: React.FC<SkillsCardProps> = ({ logo, title, description }) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 } // Adjust as needed
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  const cardColors: { [key: string]: string } = {
    HTML5: "bg-[#E96228]",
    CSS3: "bg-[#2AA3D7]",
    TypeScript: "bg-[#377CC8]",
    React: "bg-[#08D9FF]",
    Nextjs: "bg-[#080808]",
    Nodejs: "bg-[#7AB068]",
    TailwindCSS: "bg-[#3EBDF6]",
    MongoDB: "bg-[#55AD47]",
    Postman: "bg-[#FD713B]",
    Vercel: "bg-[#080808]",
    Git: "bg-[#F05539]",
    GitHub: "bg-[#292837]",
  };

  const cardColor = cardColors[title] || cardColors["Default"];

  return (
    <div
      ref={cardRef}
      className={classNames(
        "w-full max-w-[250px] md:max-w-[300px] h-auto p-4 md:p-5 rounded-lg shadow-md text-center text-white cursor-pointer transform transition-transform duration-400 ease-in-out hover:scale-105",
        cardColor,
        isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-32" // Start hidden and slightly below
      )}
    >
      <img
        src={logo}
        alt={`${title} Logo`}
        className="w-10 h-10 md:w-12 md:h-12 mx-auto my-4 md:my-5 animate-bounce-custom"
      />
      <h3 className="text-lg md:text-xl font-semibold">{title}</h3>
      <p className="text-sm md:text-base mt-2">{description}</p>
    </div>

  );
};

export default SkillsCard;
