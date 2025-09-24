"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X } from "lucide-react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "@/app/store/store";
import { setLanguage } from "@/app/store/languageSlice";
import { useTranslation } from "../hooks/useTranslation";
import logo from "@/public/logo.png";
export type SubmenuItem = {
  label: string;
  href: string;
};

export type ServiceItem = {
  label: string;
  submenu: SubmenuItem[];
};

export type Translations = {
  home: string;
  whoWeAre: string;
  contact: string;
  services: {
    [key: string]: {
      label: string;
      submenu: {
        [subKey: string]: string;
      };
    };
  };
};

export default function Navbar() {
  const pathname = usePathname();
  const dispatch = useDispatch<AppDispatch>();
  const language = useSelector((state: RootState) => state.language.language);

  const t = useTranslation() as Translations;

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileDropdownIndex, setMobileDropdownIndex] = useState<number | null>(
    null
  );

  const isActive = (href: string) => pathname === href;
  const isSubmenuActive = (submenu: { href: string }[]) =>
    submenu.some((item) => pathname === item.href);

  function slugify(text: string) {
    return text
      .toLowerCase()
      .replace(/\s+/g, "-") // replace spaces with hyphen
      .replace(/[^\w-]/g, "") // remove all non-alphanumeric chars except hyphen
      .replace(/-+/g, "-"); // replace multiple hyphens with a single one
  }
  // Convert t.services object into array for easier mapping
  const servicesArray: ServiceItem[] = Object.entries(t.services).map(
    ([categoryKey, categoryValue]) => ({
      label: categoryValue.label,
      submenu: Object.entries(categoryValue.submenu).map(
        ([subKey, subLabel]) => ({
          label: subLabel,
          href: `/services/${slugify(categoryKey)}/${slugify(subKey)}`,
        })
      ),
    })
  );

  return (
    <nav className="bg-white text-black shadow-md sticky top-0 z-50">
      {/* Language Switcher */}
      <div className="flex justify-end space-x-2 mt-2 mb-1 px-4 md:px-8">
        <button
          onClick={() => dispatch(setLanguage("en"))}
          className={`px-3 py-1 rounded-md text-sm transition duration-300 ${
            language === "en"
              ? "bg-blue-900 text-yellow-300 font-bold"
              : "hover:bg-blue-200"
          }`}
        >
          EN
        </button>
        <button
          onClick={() => dispatch(setLanguage("rw"))}
          className={`px-3 py-1 rounded-md text-sm transition duration-300 ${
            language === "rw"
              ? "bg-blue-900 text-yellow-300 font-bold"
              : "hover:bg-blue-200"
          }`}
        >
          RW
        </button>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 md:h-24">
          <Link
            href="/"
            className="font-bold text-xl tracking-wide hover:text-yellow-300 transition-colors duration-300"
          >
            <Image
              src={logo}
              alt="logo"
              className="w-14 h-14 rounded-full object-cover"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 items-center">
            <Link
              href="/"
              className={`px-3 py-2 rounded-md transition duration-300 hover:bg-blue-900 hover:text-white hover:scale-105 ${
                isActive("/")
                  ? "bg-blue-900 font-extrabold text-yellow-300 border-b-4 border-yellow-300"
                  : ""
              }`}
            >
              {t.home}
            </Link>
            <Link
              href="/who-we-are"
              className={`px-3 py-2 rounded-md transition duration-300 hover:bg-blue-900 hover:text-white hover:scale-105 ${
                isActive("/who-we-are")
                  ? "bg-blue-900 font-extrabold text-yellow-300 border-b-4 border-yellow-300"
                  : ""
              }`}
            >
              {t.whoWeAre}
            </Link>

            {/* Services */}
            {servicesArray.map((menu, idx) => {
              const parentActive = isSubmenuActive(menu.submenu);
              return (
                <div key={idx} className="relative group">
                  <div
                    className={`flex items-center gap-1 px-3 py-2 rounded-md transition duration-300 hover:bg-blue-900 hover:text-white hover:scale-105 ${
                      parentActive
                        ? "bg-blue-900 font-extrabold text-yellow-300 border-b-4 border-yellow-300"
                        : ""
                    }`}
                  >
                    {menu.label}
                    <ChevronDown
                      size={16}
                      className="transition-transform duration-300 ease-in-out group-hover:rotate-180"
                    />
                  </div>

                  <div className="absolute left-0 mt-2 w-64 bg-white text-black rounded-md shadow-lg z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 translate-y-1 transform transition-all duration-300 origin-top pointer-events-auto">
                    <ul className="py-2">
                      {menu.submenu.map((sub, i) => (
                        <li key={i}>
                          <Link
                            href={sub.href}
                            className={`block px-4 py-2 rounded-md transition duration-200 hover:bg-blue-100 hover:scale-105 ${
                              isActive(sub.href)
                                ? "bg-blue-200 font-semibold text-blue-900 border-l-4 border-blue-600"
                                : ""
                            }`}
                          >
                            {sub.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button
              aria-label="Toggle Menu"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="focus:outline-none"
            >
              {mobileMenuOpen ? (
                <X size={28} className="text-blue-600" />
              ) : (
                <Menu size={28} className="text-blue-600" />
              )}
            </button>
          </div>

          {/* Contact */}
          <div className="hidden md:flex">
            <Link
              href="/contact"
              className={`px-3 py-2 rounded-md transition duration-300 hover:bg-blue-600 hover:text-white hover:scale-105 ${
                isActive("/contact")
                  ? "bg-blue-900 font-extrabold text-yellow-300 border-b-4 border-yellow-300"
                  : ""
              }`}
            >
              {t.contact}
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-blue-500 text-white animate-slideDown">
          <ul className="flex flex-col space-y-1 py-2">
            <li>
              <Link
                href="/"
                className={`block px-5 py-3 rounded-md transform transition duration-300 ease-in-out hover:scale-105 hover:bg-blue-400 hover:text-white ${
                  isActive("/")
                    ? "bg-slate-600 text-white font-extrabold border-l-4 border-yellow-300"
                    : "text-white"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {t.home}
              </Link>
            </li>
            <li>
              <Link
                href="/who-we-are"
                className={`block px-5 py-3 rounded-md transform transition duration-300 ease-in-out hover:scale-105 hover:bg-blue-400 hover:text-white ${
                  isActive("/who-we-are")
                    ? "bg-slate-600 text-white font-extrabold border-l-4 border-yellow-300"
                    : ""
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {t.whoWeAre}
              </Link>
            </li>

            {/* Mobile Services */}
            {servicesArray.map((menu, idx) => {
              const parentActive = isSubmenuActive(menu.submenu);
              return (
                <li key={idx}>
                  <button
                    onClick={() =>
                      setMobileDropdownIndex(
                        mobileDropdownIndex === idx ? null : idx
                      )
                    }
                    className={`w-full flex justify-between items-center px-5 py-3 font-semibold rounded-md transform transition duration-300 hover:bg-blue-400 hover:scale-105 ${
                      parentActive
                        ? "bg-slate-600 font-extrabold text-white border-b-4 border-yellow-300"
                        : ""
                    }`}
                  >
                    {menu.label}
                    <ChevronDown
                      size={18}
                      className={`transition-transform duration-300 ease-in-out ${
                        mobileDropdownIndex === idx ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {mobileDropdownIndex === idx && (
                    <ul className="bg-white rounded-b-md overflow-hidden transition-all duration-300 ease-in-out">
                      {menu.submenu.map((sub, i) => (
                        <li key={i}>
                          <Link
                            href={sub.href}
                            className={`block px-8 py-2 rounded-md transform transition duration-200 hover:scale-105 hover:bg-white hover:text-blue-900 ${
                              isActive(sub.href)
                                ? "bg-green-300 font-semibold"
                                : "bg-white text-black"
                            }`}
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {sub.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              );
            })}
            {/* Contact Us Link */}
            <li>
              <Link
                href="/contact"
                className={`block px-5 py-3 rounded-md transform transition duration-300 ease-in-out hover:scale-105 hover:bg-blue-400 hover:text-white ${
                  isActive("/contact")
                    ? "bg-slate-600 text-white font-extrabold border-l-4 border-yellow-300"
                    : "text-white"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {t.contact}
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
