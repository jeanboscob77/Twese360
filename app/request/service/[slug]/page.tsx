// app/services/[slug]/page.tsx
"use client";
import { useTranslation } from "@/app/hooks/Slug";
import ServiceRequestForm from "@/app/components/ServiceRequestForm";
import { useParams } from "next/navigation";

interface Service {
  title: string;
  description: string;
  "not-found": string;
  submit: string;
  request: string;
}

interface ServiceRequestData {
  name: string;
  email: string;
  phone: string;
  address: string;
  serviceName?: string;
  message?: string;
}

export default function ServicePage() {
  const pramas = useParams();
  const slug = pramas?.slug;
  const t = useTranslation();
  const rawService = t.services[slug as keyof typeof t.services];
  const service: Service | undefined =
    typeof rawService === "object" &&
    rawService !== null &&
    "title" in rawService &&
    "description" in rawService
      ? (rawService as Service)
      : undefined;

  if (!service) {
    return (
      <div className="min-h-96 flex items-center justify-center font-extrabold">
        {t.services["not-found"]}
      </div>
    );
  }

  const handleSubmit = (data: ServiceRequestData) => {
    console.log("Order Submitted:", data);
    // Later: send this data to API / email service
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl text-center font-bold mb-4">{service.title}</h1>
      <ServiceRequestForm
        serviceName={service.title}
        description={service.description}
        onSubmit={handleSubmit}
        request={t.services.request}
        submit={t.services.submit}
      />
    </div>
  );
}
