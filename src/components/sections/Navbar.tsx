import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Navbar: React.FC = () => {
    return (
        <nav className="bg-black px-4 py-2 text-white shadow-lg shadow-gray-800">
            <div className="container mx-auto flex flex-wrap justify-between items-center">
                {/* Logo Section */}
                <div className="flex md:gap-3 justify-center items-center text-[30px] sm:text-[40px] mb-4 md:mb-0">
                    <div className="relative inline-block p-[2px] bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full w-20 h-20">
                        <Image
                            src="/images/6.jpg"
                            alt="Profile Photo"
                            width={200}
                            height={200}
                            className="rounded-full bg-gray-900"
                        />
                    </div>
                    <div className="flex ml-2 sm:ml-3">
                        <p className="bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">Portfolio</p>
                    </div>
                </div>

                {/* Contact Section */}
                <div className="flex flex-col gap-2 md:gap-8 sm:flex-row sm:items-center">
                    {/* Email Link */}
                    <Link
                        href="mailto:faizan.devstack@gmail.com?subject=Hello&body=I%20hope%20you%20are%20doing%20well."
                        passHref
                    >
                        <div className="cursor-pointer flex items-center gap-2 group hover:text-indigo-500">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="25"
                                height="25"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="group-hover:fill-indigo-500"
                            >
                                <path d="M12 12l8-6H4l8 6zm0 2L4 8v10h16V8l-8 6z" />
                            </svg>
                            <p className="text-sm sm:text-base">faizan.devstack@gmail.com</p>
                        </div>
                    </Link>

                    {/* WhatsApp Link */}
                    {/* <Link href="https://wa.me/923404185500" passHref>
                        <div className="cursor-pointer flex items-center gap-1 group hover:text-indigo-500 ml-1">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="group-hover:fill-indigo-500"
                            >
                                <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24a11.36 11.36 0 003.58.6c.55 0 1 .45 1 1v3.59c0 .55-.45 1-1 1C12.39 22 2 11.61 2 4.01c0-.55.45-1 1-1H6.6c.55 0 1 .45 1 1 0 1.25.2 2.48.6 3.58.12.34.03.74-.24 1.02l-2.2 2.2z" />
                            </svg>
                            <p className="text-sm sm:text-base">+92 340 4185500</p>
                        </div>
                    </Link> */}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
