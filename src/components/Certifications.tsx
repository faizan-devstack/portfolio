import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/timeline";
import CertificationData from "@/data/certifications.json"

interface Certificate {
  id: number,
  time: string,
  title: string,
  slug: string,
  description: string,
  image: string,
  link: string,
}

export default function Certifications() {

  const data = CertificationData.Certifications.map((Certificate: Certificate) => ({
    link: Certificate.link,
    time: Certificate.time,
    content: (
      <div key={Certificate.id}>
        <p className="text-neutral-200 text-sm font-normal mb-8">
          {Certificate.title}
        </p>
          <div className="grid grid-cols-1 gap-4">
            <Image
              src={Certificate.image}
              alt={Certificate.slug}
              width={500}
              height={500}
              className="rounded-lg object-cover w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
      </div>
    ),
  }));

  return (
    <div className="py-10 px-4 w-full flex flex-col justify-center Certificates-center h-auto shadow-lg shadow-gray-800">
      {/* Title Section */}
      <div className="flex justify-center text-4xl md:text-5xl my-8">
      <p className="bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">Certifications</p>
      </div>

      {/* Certificate Section */}
      <div className="flex justify-center">
        <Timeline data={data} />
      </div>
    </div>
  );
}
