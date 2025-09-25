// components/Footer.tsx
"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import logo from "@/public/logo.png";
import { useFooterTranslation } from "@/app/hooks/footer";
import toast from "react-hot-toast";

// --- Types ---
interface SocialMedia {
  facebook: string;
  twitter: string;
  instagram: string;
  linkedin: string;
}

interface QuickLink {
  label: string;
  href: string;
}

interface ContactInfo {
  address: string;
  email: string;
  phones: string[];
}

interface Newsletter {
  title: string;
  subtitle: string;
  placeholder: string;
  button: string;
  subscriptionSuccess: string;
  submissionError: string;
  invalidEmail: string;
}

interface FooterTranslation {
  description: string;
  socialMedia: SocialMedia;
  quickLinks: QuickLink[];
  contact: ContactInfo;
  newsletter: Newsletter;
  copyright: string;
  headings: {
    quickLinks: string;
    followUs: string;
  };
}

export default function Footer() {
  const t = useFooterTranslation() as FooterTranslation;
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const handleNewsletterSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    // Basic email validation
    if (
      !email ||
      !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)
    ) {
      toast.error(t.newsletter.invalidEmail || "Please enter a valid email");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("http://localhost:5000/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Subscription failed");

      toast.success(
        t.newsletter.subscriptionSuccess || "Subscribed successfully!"
      );
      setEmail("");
    } catch (err) {
      console.error(err);
      toast.error(t.newsletter.submissionError || "Failed to subscribe");
    } finally {
      setLoading(false);
    }
  };
  if (loading) {
    return <div className="text-center py-10">Loading...</div>;
  }

  return (
    <footer className="bg-gray-900 text-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Logo & Company Info */}
        <div>
          <div className="flex items-center mb-4">
            <Image
              src={logo}
              alt="Twese360 Logo"
              width={50}
              height={50}
              className="mr-3"
            />
            <h2 className="text-2xl font-bold text-white">Twese360</h2>
          </div>
          <p className="text-gray-400 mb-4">{t.description}</p>

          <div className="flex items-center gap-2 mb-2">
            <MapPin className="w-5 h-5 text-blue-500" />
            <span>{t.contact.address}</span>
          </div>
          <div className="flex items-center gap-2 mb-2">
            <Mail className="w-5 h-5 text-green-500" />
            <span>{t.contact.email}</span>
          </div>
          {t.contact.phones.map((phone, idx) => (
            <div key={idx} className="flex items-center gap-2">
              <Phone className="w-5 h-5 text-yellow-500" />
              <span>{phone}</span>
            </div>
          ))}
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">
            {t.headings.quickLinks}
          </h3>
          <ul className="space-y-2 text-gray-400">
            {t.quickLinks.map((link, idx) => (
              <li
                key={idx}
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <ArrowRight className="w-4 h-4 text-blue-500" />
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">
            {t.headings.followUs}
          </h3>
          <div className="flex space-x-4">
            <a
              href={t.socialMedia.facebook}
              className="p-3 rounded-full bg-gray-800 hover:bg-blue-600 transition-colors"
            >
              <FaFacebookF className="w-5 h-5 text-white" />
            </a>
            <a
              href={t.socialMedia.twitter}
              className="p-3 rounded-full bg-gray-800 hover:bg-blue-400 transition-colors"
            >
              <FaTwitter className="w-5 h-5 text-white" />
            </a>
            <a
              href={t.socialMedia.instagram}
              className="p-3 rounded-full bg-gray-800 hover:bg-pink-500 transition-colors"
            >
              <FaInstagram className="w-5 h-5 text-white" />
            </a>
            <a
              href={t.socialMedia.linkedin}
              className="p-3 rounded-full bg-gray-800 hover:bg-blue-700 transition-colors"
            >
              <FaLinkedinIn className="w-5 h-5 text-white" />
            </a>
          </div>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">
            {t.newsletter.title}
          </h3>
          <p className="text-gray-400 mb-4">{t.newsletter.subtitle}</p>
          <form
            className="flex flex-col sm:flex-row gap-2"
            onSubmit={handleNewsletterSubmit}
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={t.newsletter.placeholder}
              className="w-full px-4 py-2 rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-600 bg-gray-800 text-white"
            />
            <button
              type="submit"
              className="flex items-center justify-center px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 transition-colors text-white font-semibold"
            >
              {t.newsletter.button}
              <ArrowRight className="w-4 h-4 ml-2" />
            </button>
          </form>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-700 py-6 mt-6 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} Twese360. {t.copyright}
      </div>
    </footer>
  );
}
