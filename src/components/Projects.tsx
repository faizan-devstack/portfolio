'use client'
import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import ProjectData from "@/data/projects.json"
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
    return (
        <div className="py-10 px-4 w-full flex flex-col justify-center items-center h-auto shadow-lg shadow-gray-800">
            {/* Title Section */}
            <div className="flex justify-center text-4xl md:text-5xl my-3">
                <p className="bg-gradient-to-r  from-indigo-500 to-purple-500 bg-clip-text text-transparent leading-relaxed">Projects</p>
            </div>
            <div className="flex flex-wrap justify-center ">
                {ProjectData.Projects.map((Project: Project) => (
                    <CardContainer key={Project.id} className="inter-var m-4">
                        <CardBody className="relative group/card  hover:shadow-2xl hover:shadow-emerald-500/[0.1] bg-black border-white/[0.2] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
                            <CardItem
                                translateZ="50"
                                className="text-xl font-semibold text-white"
                            >
                                {Project.title}
                            </CardItem>
                            <CardItem
                                as="p"
                                translateZ="60"
                                className="text-sm max-w-sm mt-2 text-neutral-300"
                            >
                                {Project.description}
                            </CardItem>
                            <CardItem translateZ="100" className="w-full mt-4">
                                <Image
                                    src={Project.image}
                                    height="1000"
                                    width="1000"
                                    className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                                    alt={Project.title}
                                />
                            </CardItem>
                            <div className="flex justify-between items-center mt-20">
                                <Link href={Project.link}>
                                    <CardItem
                                        translateZ={20}
                                        as="button"
                                        className="px-4 py-2 rounded-xl bg-white text-black text-sm font-semibold"
                                    >
                                        Checkout now →
                                    </CardItem>
                                </Link>
                            </div>
                        </CardBody>
                    </CardContainer>
                ))}
            </div>
        </div>
    )
}

export default Projects