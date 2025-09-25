"use client";
import { useTranslation } from "@/app/hooks/Slug";
import ServiceRequestForm from "@/app/components/ServiceRequestForm";
import { useParams } from "next/navigation";

interface Placeholders {
  name: string;
  email: string;
  phone: string;
  address: string;
  notes: string;
  nationalId: string;
  passport: string;
}

interface Service {
  title: string;
  description: string;
  "not-found": string;
  submit: string;
  request: string;
  placeholders: Placeholders;
}

export default function ServicePage() {
  const params = useParams();
  const slug = params?.slug as string | undefined;
  const t = useTranslation();

  // Pick service from translations
  const rawService = slug ? t.services[slug as keyof typeof t.services] : null;
  const service: Service | undefined =
    rawService &&
    typeof rawService === "object" &&
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

  return (
    <div className="p-6">
      <h1 className="text-3xl text-center font-bold mb-4">{service.title}</h1>
      <ServiceRequestForm
        serviceName={service.title}
        description={service.description}
        request={t.services.request}
        submit={t.form.submit}
        placeholders={t.form.placeholders}
        idType={t.form.idType}
      />
    </div>
  );
}
