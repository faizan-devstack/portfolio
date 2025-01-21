'use client'

import { TextGenerateEffect } from "./ui/text-generate-effect";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "./ui/hero-highlight";

const words = `I specialize in building responsive, scalable, and user-friendly web applications using Next.js, Tailwind CSS, TypeScript, and MongoDB. I focus on writing clean, maintainable code to make projects reliable and easy to grow. My approach ensures that projects are delivered on time while maintaining high quality.`;


export default function Introduction() {
    return (
        <div className="pt-4 w-full text-white flex flex-col justify-center items-center h-auto shadow-lg shadow-gray-800">
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
                    className="w-full flex flex-col items-center md:mt-20"
                >
                    {" "}
                    <Highlight className=" text-2xl px-4 md:pb-2 md:text-4xl lg:text-5xl max-w-4xl text-center mx-auto">
                        Hello! I am Muhammad Faizan.
                    </Highlight>

                    {/* Introduction Text */}
                    <div className="mb-10">
                        <TextGenerateEffect words={words} />
                    </div>


                    {/* Social Links Section */}
                    <div className="flex flex-wrap gap-10 justify-center md:mb-20">
                        <Link href="https://github.com/faizan-devstack">
                            <Image
                                src="/buttons/github.svg"
                                alt="GitHub Logo"
                                width={60}
                                height={60}
                                className="rounded animate-bounce-custom"
                            />
                        </Link>
                        <Link href="https://www.linkedin.com/in/ifaizan114/">
                            <Image
                                src="/buttons/linkedin.svg"
                                alt="LinkedIn Logo"
                                width={60}
                                height={60}
                                className="rounded-xl bg-white animate-bounce-custom"
                            />
                        </Link>
                    </div>
                </motion.h1>
            </HeroHighlight>
        </div>
    );
}
