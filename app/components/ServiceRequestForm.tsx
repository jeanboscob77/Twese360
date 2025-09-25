// components/ServiceRequestForm.tsx
"use client";

import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  User,
  FileText,
  Send,
  IdCard,
} from "lucide-react";

interface ServiceRequestData {
  name: string;
  email?: string;
  phone: string;
  address: string;
  notes?: string;
  idType?: "nationalId" | "passport";
  nationalId?: string;
  passport?: string;
}

interface Placeholders {
  name: string;
  email: string;
  phone: string;
  address: string;
  notes: string;
  nationalId: string;
  passport: string;
}

interface IdTypeLabels {
  label: string;
  nationalId: string;
  passport: string;
}

interface ServiceRequestFormProps {
  serviceName: string;
  description?: string;
  submit: string;
  request: string;
  placeholders: Placeholders;
  idType: IdTypeLabels;
  onSubmit: (formData: ServiceRequestData) => void;
}

export default function ServiceRequestForm({
  serviceName,
  description,
  onSubmit,
  submit,
  request,
  placeholders,
  idType,
}: ServiceRequestFormProps) {
  const [formData, setFormData] = useState<ServiceRequestData>({
    name: "",
    email: "",
    phone: "",
    address: "",
    notes: "",
    idType: "nationalId",
    nationalId: "",
    passport: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
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
      idType: "nationalId",
      nationalId: "",
      passport: "",
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-lg mx-auto bg-white p-6 rounded-2xl shadow-md space-y-4"
    >
      <h2 className="text-2xl font-bold text-gray-800 mb-2">
        {request}: {serviceName}
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
          placeholder={placeholders.name}
          value={formData.name}
          onChange={handleChange}
          className="w-full p-2 outline-none"
          required
        />
      </div>

      {/* Email (optional) */}
      <div className="flex items-center border rounded-lg overflow-hidden focus-within:ring-2 focus-within:ring-blue-500">
        <Mail className="w-5 h-5 text-gray-500 mx-2" />
        <input
          type="email"
          name="email"
          placeholder={placeholders.email}
          value={formData.email}
          onChange={handleChange}
          className="w-full p-2 outline-none"
        />
      </div>

      {/* Phone */}
      <div className="flex items-center border rounded-lg overflow-hidden focus-within:ring-2 focus-within:ring-blue-500">
        <Phone className="w-5 h-5 text-gray-500 mx-2" />
        <input
          type="text"
          name="phone"
          placeholder={placeholders.phone}
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
          placeholder={placeholders.address}
          value={formData.address}
          onChange={handleChange}
          className="w-full p-2 outline-none"
          required
        />
      </div>

      {/* ID Type Selection */}
      <div className=" text-gray-500">
        <label className="block text-sm  text-gray-500 font-semibold mb-2">
          {idType.label}
        </label>
        <select
          name="idType"
          value={formData.idType}
          onChange={handleChange}
          className="w-full border rounded-lg p-2"
        >
          <option value="nationalId" className=" text-gray-500">
            {idType.nationalId}
          </option>
          <option value="passport" className=" text-gray-500">
            {idType.passport}
          </option>
        </select>
      </div>

      {/* National ID */}
      {formData.idType === "nationalId" && (
        <div className="flex items-center border rounded-lg overflow-hidden focus-within:ring-2 focus-within:ring-blue-500">
          <IdCard className="w-5 h-5 text-gray-500 mx-2" />
          <input
            type="text"
            name="nationalId"
            placeholder={placeholders.nationalId}
            value={formData.nationalId}
            onChange={handleChange}
            className="w-full p-2 outline-none"
            required
          />
        </div>
      )}

      {/* Passport */}
      {formData.idType === "passport" && (
        <div className="flex items-center border rounded-lg overflow-hidden focus-within:ring-2 focus-within:ring-blue-500">
          <IdCard className="w-5 h-5 text-gray-500 mx-2" />
          <input
            type="text"
            name="passport"
            placeholder={placeholders.passport}
            value={formData.passport}
            onChange={handleChange}
            className="w-full p-2 outline-none"
            required
          />
        </div>
      )}
      {/* Notes */}
      <div className="flex items-start border rounded-lg overflow-hidden focus-within:ring-2 focus-within:ring-blue-500">
        <FileText className="w-5 h-5 text-gray-500 mx-2 mt-2" />
        <textarea
          name="notes"
          placeholder={placeholders.notes}
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
        {submit}
      </button>
    </form>
  );
}
