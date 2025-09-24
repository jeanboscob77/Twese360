// components/ServiceDetail.tsx
"use client";
import { useParams } from "next/navigation";
import Image from "next/image";
import { Button } from "@/app/components/ui/Button";
import { useTranslation } from "@/app/hooks/Service";
import { CheckCircleIcon, StarIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

interface SubService {
  title: string;
  description: string;
  features: string[];
  benefits: string[];
  cta?: { text: string; link: string };
  image: string;
}

export default function ServiceDetail() {
  const t = useTranslation(); // Translation hook for current language
  const { id } = useParams(); // Get subservice id from URL

  const service = t.subservices[id as keyof typeof t.subservices] as SubService;

  if (!service) {
    return <div className="text-center py-20">Service not found</div>;
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      {/* Hero Image */}
      <div className="relative h-72 w-full mb-8">
        <Image
          src={service.image}
          alt={service.title}
          fill
          className="rounded-2xl object-cover shadow-md"
        />
      </div>

      {/* Title & Description */}
      <h1 className="text-4xl font-extrabold mb-5 text-gray-800">
        {service.title}
      </h1>
      <p className="text-xg text-gray-600 mb-5">{service.description}</p>

      {/* Features */}
      {service.features && service.features.length > 0 && (
        <div className="mb-12">
          <h2 className="text-xl sm:text-md font-semibold mb-5 text-gray-800">
            {service.features}
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {service.features.map((f: string, idx: number) => (
              <div
                key={idx}
                className="flex items-start p-4 rounded-xl bg-white shadow hover:shadow-lg transition-shadow duration-300"
              >
                <CheckCircleIcon className="w-6 h-6 text-green-500 mt-1 mr-3" />
                <p className="text-gray-700">{f}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Benefits */}
      {service.benefits && service.benefits.length > 0 && (
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-5 text-gray-800">
            {service.benefits}
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {service.benefits.map((b: string, idx: number) => (
              <div
                key={idx}
                className="flex items-start p-4 rounded-xl bg-blue-50 border-l-4 border-blue-600 shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <StarIcon className="w-6 h-6 text-yellow-400 mt-1 mr-3" />
                <p className="text-gray-800">{b}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Call to Action */}
      {service.cta && (
        <div className="text-center mt-10">
          <Link href={service.cta.link} passHref>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">
              {service.cta.text}
            </Button>
          </Link>
        </div>
      )}
    </div>
  );
}
