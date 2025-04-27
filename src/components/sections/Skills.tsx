import React from 'react';
import SkillsCard from '../ui/SkillCard';

export default function Skills() {
  return (
    <section className="py-10 px-4 w-full flex flex-col justify-center items-center h-auto shadow-lg shadow-gray-800">
      {/* Title Section */}
      <div className="flex justify-center text-4xl md:text-5xl my-8">
      <p className="bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">Skills</p>
      </div>

      {/* Grid Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 justify-center items-center bg-black py-8 md:py-16 rounded-lg">
        <SkillsCard
          logo="/skills/html5.svg"
          title="HTML5"
          description="The foundational markup language for structuring content on the web, enabling semantic elements and multimedia integration."
        />

        <SkillsCard
          logo="/skills/css3.svg"
          title="CSS3"
          description="A powerful style sheet language that enhances HTML by enabling animations, layouts, and responsive designs."
        />

        <SkillsCard
          logo="/skills/typescript.svg"
          title="TypeScript"
          description="A statically-typed superset of JavaScript, improving code quality and reliability with strong typing and advanced features."
        />

        <SkillsCard
          logo="/skills/react.svg"
          title="React"
          description="A JavaScript library for building user interfaces, offering a component-based architecture and efficient state management."
        />

        <SkillsCard
          logo="/skills/nextjs.svg"
          title="Nextjs"
          description="A React-based framework for server-side rendering, static site generation, and modern full-stack web development."
        />

        <SkillsCard
          logo="/skills/nodejs.svg"
          title="Nodejs"
          description="A runtime environment for executing JavaScript on the server, enabling scalable and fast backend applications."
        />

        <SkillsCard
          logo="/skills/tailwindcss.svg"
          title="TailwindCSS"
          description="A utility-first CSS framework for rapidly building custom designs without leaving your HTML."
        />

        <SkillsCard
          logo="/skills/mongodb.svg"
          title="MongoDB"
          description="A NoSQL database solution offering high scalability and flexibility with a document-oriented data model."
        />

        <SkillsCard
          logo="/skills/postman.svg"
          title="Postman"
          description="An API platform for testing, building, and documenting APIs efficiently, with features like collections and collaboration."
        />

        <SkillsCard
          logo="/skills/vercel.svg"
          title="Vercel"
          description="A platform for deploying modern web applications with speed and reliability, optimized for Next.js."
        />

        <SkillsCard
          logo="/skills/git.svg"
          title="Git"
          description="A distributed version control system that helps track changes, collaborate, and manage source code effectively."
        />

        <SkillsCard
          logo="/skills/github.svg"
          title="GitHub"
          description="A web-based platform for hosting and collaborating on Git repositories, offering version control and CI/CD features."
        />
        <SkillsCard
          logo="/skills/supabase.svg"
          title="Supabase"
          description="An open-source Firebase alternative, providing a scalable backend with real-time databases, authentication, and APIs for developers."
        />
        <SkillsCard
          logo="/skills/openai.svg"
          title="OpenAI"
          description="Pioneering AI research and deployment, creating advanced models like ChatGPT to enhance human productivity."
        />
        <SkillsCard
          logo="/skills/light-bulb.svg"
          title="ProblemSolving"
          description="A critical skill involving analyzing challenges, identifying solutions, and implementing effective strategies across diverse contexts."
        />
      </div>
    </section>
  );
}
