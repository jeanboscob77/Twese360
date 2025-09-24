// components/ServiceRequestForm.tsx
"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, User, FileText, Send } from "lucide-react";

interface ServiceRequestData {
  name: string;
  email: string;
  phone: string;
  address: string;
  serviceName?: string;
  notes?: string;
}

interface ServiceRequestFormProps {
  serviceName: string;
  description?: string;
  onSubmit: (formData: ServiceRequestData) => void;
}

export default function ServiceRequestForm({
  serviceName,
  description,
  onSubmit,
}: ServiceRequestFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    notes: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const fullData = { service: serviceName, ...formData };
    onSubmit(fullData);
    setFormData({
      name: "",
      email: "",
      phone: "",
      address: "",
      notes: "",
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-lg mx-auto bg-white p-6 rounded-2xl shadow-md space-y-4"
    >
      <h2 className="text-2xl font-bold text-gray-800 mb-2">
        Request: {serviceName}
      </h2>
      {description && (
        <p className="text-gray-600 mb-4 text-sm">{description}</p>
      )}

      {/* Name */}
      <div className="flex items-center border rounded-lg overflow-hidden focus-within:ring-2 focus-within:ring-blue-500">
        <User className="w-5 h-5 text-gray-500 mx-2" />
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-2 outline-none"
          required
        />
      </div>

      {/* Email */}
      <div className="flex items-center border rounded-lg overflow-hidden focus-within:ring-2 focus-within:ring-blue-500">
        <Mail className="w-5 h-5 text-gray-500 mx-2" />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-2 outline-none"
          required
        />
      </div>

      {/* Phone */}
      <div className="flex items-center border rounded-lg overflow-hidden focus-within:ring-2 focus-within:ring-blue-500">
        <Phone className="w-5 h-5 text-gray-500 mx-2" />
        <input
          type="text"
          name="phone"
          placeholder="Your Phone"
          value={formData.phone}
          onChange={handleChange}
          className="w-full p-2 outline-none"
          required
        />
      </div>

      {/* Address */}
      <div className="flex items-center border rounded-lg overflow-hidden focus-within:ring-2 focus-within:ring-blue-500">
        <MapPin className="w-5 h-5 text-gray-500 mx-2" />
        <input
          type="text"
          name="address"
          placeholder="Your Address / Location"
          value={formData.address}
          onChange={handleChange}
          className="w-full p-2 outline-none"
          required
        />
      </div>

      {/* Notes */}
      <div className="flex items-start border rounded-lg overflow-hidden focus-within:ring-2 focus-within:ring-blue-500">
        <FileText className="w-5 h-5 text-gray-500 mx-2 mt-2" />
        <textarea
          name="notes"
          placeholder="Additional details..."
          value={formData.notes}
          onChange={handleChange}
          rows={3}
          className="w-full p-2 outline-none resize-none"
        />
      </div>

      {/* Submit */}
      <button
        type="submit"
        className="w-full py-2 px-4 flex items-center justify-center gap-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold transition-colors"
      >
        <Send className="w-4 h-4" />
        Submit Request
      </button>
    </form>
  );
}
