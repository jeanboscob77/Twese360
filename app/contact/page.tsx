"use client";

import { useState } from "react";
import toast from "react-hot-toast";
import { useTranslation } from "@/app/hooks/Contact";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Globe } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const t = useTranslation();
  const [success, setSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // --------------- Basic Validation ----------------
    if (!formData.name.trim()) {
      toast.error(t.alerts.invalidName.text);
      return;
    }
    if (!formData.message.trim()) {
      toast.error(t.alerts.invalidMessage.text);
      return;
    }
    if (
      formData.email &&
      !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(formData.email)
    ) {
      toast.error(t.alerts.invalidEmail.text);
      return;
    }
    if (formData.phone && !/^[0-9+\-\s]{7,15}$/.test(formData.phone)) {
      toast.error(t.alerts.invalidPhone.text);
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error("Failed to submit");

      toast.success(t.alerts.successContact.text);
      setSuccess(true);
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (err) {
      console.error(err);
      toast.error(t.alerts.submissionError.text);
    }
  };

  return (
    <div className="bg-gradient-to-b from-blue-100 via-white to-blue-100 min-h-screen">
      <div className="max-w-6xl mx-auto px-6 py-16">
        {/* Page Title */}
        <motion.h1
          className="text-4xl md:text-5xl font-bold text-center text-blue-900 mb-12"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {t.contactPage?.title || "Contact Us"}
        </motion.h1>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.form
            onSubmit={handleSubmit}
            className="bg-white rounded-2xl shadow-lg p-8 space-y-6"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            {success && (
              <p className="text-green-600 font-semibold text-center">
                {t.contactPage?.successMessage}
              </p>
            )}
            <input
              type="text"
              name="name"
              placeholder={t.contactPage?.form.name}
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
            <input
              type="email"
              name="email"
              placeholder={t.contactPage?.form.email}
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
            <input
              type="text"
              name="phone"
              placeholder={t.contactPage?.form.number}
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
            <textarea
              name="message"
              placeholder={t.contactPage?.form.message}
              value={formData.message}
              onChange={handleChange}
              rows={5}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold text-lg hover:bg-blue-500 transition"
            >
              {t.contactPage?.form.submit}
            </button>
          </motion.form>

          {/* Contact Info */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-white rounded-2xl shadow-lg p-8 space-y-6">
              {/* Emails */}
              <div>
                <h3 className="text-xl font-semibold text-blue-800 mb-2">
                  {t.contactPage.labels.email}
                </h3>

                <p className="flex items-center gap-2 text-gray-700">
                  <Mail className="w-5 h-5 text-blue-600" />{" "}
                  {t.contactPage?.address.email}
                </p>
              </div>

              {/* Phones */}
              <div>
                <h3 className="text-xl font-semibold text-blue-800 mb-2">
                  {t.contactPage.labels.phone}
                </h3>
                {t.contactPage?.address.phones.map(
                  (phone: string, idx: number) => (
                    <p
                      key={idx}
                      className="flex items-center gap-2 text-gray-700"
                    >
                      <Phone className="w-5 h-5 text-blue-600" /> {phone}
                    </p>
                  )
                )}
              </div>

              {/* Location */}
              <div>
                <h3 className="text-xl font-semibold text-blue-800 mb-2">
                  {t.contactPage.labels.location}
                </h3>
                <p className="flex items-center gap-2 text-gray-700">
                  <MapPin className="w-5 h-5 text-blue-600" />{" "}
                  {t.contactPage?.address.location}
                </p>
              </div>

              {/* Website */}
              <div>
                <h3 className="text-xl font-semibold text-blue-800 mb-2">
                  {t.contactPage.labels.website}
                </h3>
                <p className="flex items-center gap-2 text-gray-700">
                  <Globe className="w-5 h-5 text-blue-600" />{" "}
                  {t.contactPage?.address.website}
                </p>
              </div>
            </div>

            {/* Map */}
            <motion.div
              className="rounded-2xl overflow-hidden shadow-lg"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3979.203876007722!2d30.061771375228056!3d-1.9440726351629426!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dca6e22542b7b5%3A0x123456789abcdef!2sKigali%2C%20Rwanda!5e0!3m2!1sen!2sus!4v1695450000000!5m2!1sen!2sus"
                className="w-full h-64 md:h-80 border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
