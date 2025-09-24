"use client";

import { motion } from "framer-motion";
import { useTranslation } from "@/app/hooks/aboutUs";
import {
  Utensils,
  Car,
  Heart,
  Building,
  Map,
  BarChart,
  Flag,
  Eye,
  Star,
  CheckCircle,
} from "lucide-react";

export default function AboutPage() {
  const t = useTranslation();

  // Map services to icons
  const serviceIcons: Record<string, React.ReactNode> = {
    Food: <Utensils className="w-8 h-8 text-blue-600" />,
    Transport: <Car className="w-8 h-8 text-blue-600" />,
    Weddings: <Heart className="w-8 h-8 text-blue-600" />,
    Rentals: <Building className="w-8 h-8 text-blue-600" />,
    Tourism: <Map className="w-8 h-8 text-blue-600" />,
    "Research Services": <BarChart className="w-8 h-8 text-blue-600" />,
  };

  return (
    <div className="bg-gradient-to-b from-blue-50 to-blue-100 min-h-screen px-6 md:px-12 py-12">
      {/* Overview Section */}
      <motion.section
        className="max-w-5xl mx-auto text-center mb-16"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
          {t.aboutPage.title}
        </h1>
        <p className="text-lg md:text-xl text-gray-700">
          {t.aboutPage.overviewText}
        </p>
      </motion.section>

      {/* What We Do */}
      <motion.section
        className="max-w-6xl mx-auto mb-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.3 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-8 text-center">
          {t.aboutPage.whatWeDoTitle}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {Object.entries(t.servicesDetails).map(([key, service], idx) => (
            <div
              key={idx}
              className="flex items-start bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition transform hover:-translate-y-1"
            >
              <div className="mr-4">
                {serviceIcons[key] || (
                  <Utensils className="w-8 h-8 text-blue-600" />
                )}
              </div>
              <div>
                <h3 className="text-xl font-semibold text-blue-800 mb-2">
                  {service.label}
                </h3>
                <p className="text-gray-700 text-sm">
                  {service.shortDescription}
                </p>
              </div>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Our Mission */}
      <motion.section
        className="max-w-5xl mx-auto mb-16 bg-white rounded-2xl shadow-md p-8"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="flex items-center mb-4">
          <Flag className="w-6 h-6 text-blue-600 mr-2" />
          <h2 className="text-2xl font-bold text-blue-900">
            {t.aboutPage.missionTitle}
          </h2>
        </div>
        <p className="text-gray-700">{t.aboutPage.missionText}</p>
      </motion.section>

      {/* Our Vision */}
      <motion.section
        className="max-w-5xl mx-auto mb-16 bg-white rounded-2xl shadow-md p-8"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="flex items-center mb-4">
          <Eye className="w-6 h-6 text-blue-600 mr-2" />
          <h2 className="text-2xl font-bold text-blue-900">
            {t.aboutPage.visionTitle}
          </h2>
        </div>
        <p className="text-gray-700">{t.aboutPage.visionText}</p>
      </motion.section>

      {/* Our Core Values */}
      <motion.section
        className="max-w-5xl mx-auto mb-16 bg-white rounded-2xl shadow-md p-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="flex items-center mb-4">
          <Star className="w-6 h-6 text-blue-600 mr-2" />
          <h2 className="text-2xl font-bold text-blue-900">
            {t.aboutPage.valuesTitle}
          </h2>
        </div>
        <ul className="list-disc list-inside text-gray-700">
          {t.aboutPage.valuesList.map((value, idx) => (
            <li key={idx}>{value}</li>
          ))}
        </ul>
      </motion.section>

      {/* Why Choose Us */}
      <motion.section
        className="max-w-5xl mx-auto mb-16 bg-white rounded-2xl shadow-md p-8"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="flex items-center mb-4">
          <CheckCircle className="w-6 h-6 text-blue-600 mr-2" />
          <h2 className="text-2xl font-bold text-blue-900">
            {t.aboutPage.whyChooseTitle}
          </h2>
        </div>
        <p className="text-gray-700">{t.aboutPage.whyChooseText}</p>
      </motion.section>
    </div>
  );
}
