'use client'
import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import ProjectData from "@/data/projects.json";
import Link from "next/link";

interface Project {
    id: number,
    title: string,
    slug: string,
    description: string,
    image: string,
    link: string,
}

function Projects() {
    const topProjects = ProjectData.Projects.slice(0, 2);

    return (
        <section className="py-10 px-4 w-full flex flex-col justify-center items-center h-auto shadow-lg shadow-gray-800">
            {/* Title Section */}
            <div className="flex justify-center text-4xl md:text-5xl my-3">
                <p className="bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent leading-relaxed">Projects</p>
            </div>
            <div className="mx-3 px-3 py-1 rounded-md text-wrap text-gray-200 bg-gray-500/10">
                NOTE: You'll get the credentials for each project in my
                <Link href="https://github.com/faizan-devstack" className="text-violet-700"> GitHub account</Link>.
            </div>

            {/* Display Top 2 Projects */}
            <div className="flex flex-wrap justify-center">
                {topProjects.map((project: Project) => (
                    <CardContainer key={project.id} className="inter-var m-4">
                        <CardBody className="relative group/card hover:shadow-2xl hover:shadow-emerald-500/[0.1] bg-black border-white/[0.2] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
                            <CardItem translateZ="50" className="text-xl font-semibold text-white">
                                {project.title}
                            </CardItem>
                            <CardItem as="p" translateZ="60" className="text-sm max-w-sm mt-2 text-neutral-300">
                                {project.description}
                            </CardItem>
                            <CardItem translateZ="100" className="w-full mt-4">
                                <Image
                                    src={project.image}
                                    height="1000"
                                    width="1000"
                                    className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                                    alt={project.title}
                                />
                            </CardItem>
                            <div className="flex justify-between items-center mt-20">
                                <Link href={project.link}>
                                    <CardItem translateZ={20} as="button" className="px-4 py-2 rounded-xl bg-white text-black text-sm font-semibold">
                                        Checkout now →
                                    </CardItem>
                                </Link>
                            </div>
                        </CardBody>
                    </CardContainer>
                ))}
            </div>

            {/* Show All Projects Link */}
            <div className="my-6">
                <Link href="/projects" className="text-violet-700 hover:underline text-lg font-semibold">
                    Show All Projects →
                </Link>
            </div>
        </section>
    );
}

export default Projects;
