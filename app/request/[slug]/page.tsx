// app/services/[slug]/page.tsx
"use client";
import { useTranslation } from "@/app/hooks/Slug";
import ServiceRequestForm from "@/app/components/ServiceRequestForm";

interface Props {
  params: { slug: string };
}

export default function ServicePage({ params }: Props) {
  const slug = params.slug;
  const t = useTranslation();
  const service = t.services[slug as keyof typeof t.services];

  if (!service) {
    return <div className="p-6">Service not found</div>;
  }

  const handleSubmit = (data: any) => {
    console.log("Order Submitted:", data);
    // Later: send this data to API / email service
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">{service.title}</h1>
      <ServiceRequestForm
        serviceName={service.title}
        description={service.description}
        onSubmit={handleSubmit}
      />
    </div>
  );
}
