"use client";

import Image from "next/image";
import { useTranslation } from "@/app/hooks/Home";
import { Utensils, Car, Heart, Building, Map, BarChart } from "lucide-react";
import { motion } from "framer-motion";
import heroImg from "@/public/logo.png"; // Your hero image

export default function HomePage() {
  const t = useTranslation();

  // Map service keys to icons
  const serviceIcons: Record<string, React.ReactNode> = {
    Food: <Utensils className="w-10 h-10 text-blue-600" />,
    Transport: <Car className="w-10 h-10 text-blue-600" />,
    Weddings: <Heart className="w-10 h-10 text-blue-600" />,
    Rentals: <Building className="w-10 h-10 text-blue-600" />,
    Tourism: <Map className="w-10 h-10 text-blue-600" />,
    "Research Services": <BarChart className="w-10 h-10 text-blue-600" />,
  };

  // Convert services object to array
  const servicesArray = Object.entries(t.services).map(([key, value]) => ({
    id: key,
    label: value.label,
    submenu: Object.entries(value.submenu).map(([subKey, subLabel]) => ({
      label: subLabel,
      href: `/${key.toLowerCase().replace(/\s+/g, "-")}/${subKey
        .toLowerCase()
        .replace(/\s+/g, "-")}`,
    })),
  }));

  // Framer Motion Variants
  const staggerContainer = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.2 } },
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative flex flex-col md:flex-row items-center bg-gradient-to-r from-blue-800 to-blue-600 text-white py-20 px-6 md:px-12">
        <motion.div
          className="md:w-1/2 mb-8 md:mb-0"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 drop-shadow-lg">
            {t.homepage?.heroTitle || "Welcome to Our Company"}
          </h1>
          <p className="text-lg md:text-xl mb-6 opacity-90">
            {t.homepage?.heroSubtitle ||
              "We provide a wide range of services to make your life easier."}
          </p>
          <a
            href="/contact"
            className="bg-yellow-400 text-blue-900 px-6 py-3 rounded-xl font-semibold text-lg shadow-md hover:bg-yellow-300 transition"
          >
            {t.contact}
          </a>
        </motion.div>
        <motion.div
          className="md:w-1/2"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Image
            src={heroImg}
            alt="Hero Image"
            className="rounded-2xl shadow-lg object-cover w-full h-80 md:h-96"
          />
        </motion.div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-900 mb-12">
          {t.homepage?.servicesTitle || "Our Services"}
        </h2>
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          {servicesArray.map((service, idx) => (
            <motion.div
              key={idx}
              className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition transform hover:-translate-y-1"
              variants={fadeInUp}
            >
              <div className="flex items-center gap-4 mb-4">
                {serviceIcons[service.id] || <Utensils />}
                <h3 className="text-xl font-semibold text-blue-800">
                  {service.label}
                </h3>
              </div>
              <motion.ul
                className="text-gray-700 space-y-1 text-sm"
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: {},
                  visible: { transition: { staggerChildren: 0.1 } },
                }}
              >
                {service.submenu.map((sub, i) => (
                  <motion.li
                    key={i}
                    variants={{
                      hidden: { opacity: 0, x: -20 },
                      visible: { opacity: 1, x: 0 },
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    • {sub.label}
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* About Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-blue-900 mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {t.homepage?.aboutTitle || "About Us"}
          </motion.h2>
          <motion.p
            className="text-gray-700 text-lg md:text-xl mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {t.homepage?.aboutText ||
              "Our company is dedicated to providing top-notch services across various industries. We focus on quality, reliability, and customer satisfaction."}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Image
              src={heroImg}
              alt="Company Overview"
              className="mx-auto rounded-xl shadow-md object-cover w-full h-80 md:h-96"
            />
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-900 text-white py-16 px-6 text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {t.homepage?.ctaTitle || "Get in Touch Today"}
        </motion.h2>
        <motion.p
          className="mb-6 opacity-90"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {t.homepage?.ctaSubtitle ||
            "Reach out to us and let’s discuss how we can help you."}
        </motion.p>
        <motion.a
          href="/contact"
          className="bg-yellow-400 text-blue-900 px-6 py-3 rounded-xl font-semibold text-lg shadow-md hover:bg-yellow-300 transition"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {t.contact}
        </motion.a>
      </section>
    </div>
  );
}
