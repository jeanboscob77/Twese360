// components/ServiceRequestForm.tsx
"use client";
import toast from "react-hot-toast";
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
import { useTranslation } from "@/app/hooks/Slug";
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
}

export default function ServiceRequestForm({
  serviceName,
  description,
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

  const t = useTranslation();
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const fullData = { serviceName, ...formData };

    // ---------------- Validation ----------------
    if (!formData.name || !/^[A-Za-z\s]{2,50}$/.test(formData.name)) {
      toast.error(t.alerts.invalidName.text);
      return;
    }

    if (!formData.address || formData.address.trim().length < 5) {
      toast.error(t.alerts.invalidAddress.text);
      return;
    }

    if (!formData.phone || !/^[0-9+\-\s]{7,15}$/.test(formData.phone)) {
      toast.error(t.alerts.invalidPhone.text);
      return;
    }

    if (
      formData.email &&
      !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(formData.email)
    ) {
      toast.error(t.alerts.invalidEmail.text);
      return;
    }

    if (
      formData.idType === "nationalId" &&
      !/^\d{16}$/.test(String(formData.nationalId || ""))
    ) {
      toast.error(t.alerts.invalidNationalId.text);
      return;
    }

    if (
      formData.idType === "passport" &&
      (!formData.passport || formData.passport.trim().length < 3)
    ) {
      toast.error(t.alerts.invalidPassport.text);
      return;
    }

    // ---------------- Submit ----------------
    try {
      const response = await fetch(
        "http://localhost:5000/api/service-request",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(fullData),
        }
      );

      const data = await response.json(); // Read JSON from response
      console.log("Response data:", data);

      if (!response.ok) {
        toast.error(data.error || t.alerts.submissionError.text);
        return;
      }
      toast.success(t.alerts.success.text);

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
    } catch (error) {
      console.error(error);
      toast.error(t.alerts.submissionError.text);
    }
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
