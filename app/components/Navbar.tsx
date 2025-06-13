"use client";
import Image from "next/image";
import logo from "@/public/logo.png";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X } from "lucide-react";

const services = [
  {
    label: "Food",
    submenu: [
      { label: "Ordering & Delivery", href: "/food/ordering-delivery" },
      { label: "Local Restaurants", href: "/food/local-restaurants" },
      { label: "Delivery Options", href: "/food/delivery-options" },
      { label: "Events Catering", href: "/food/events-catering" },
      { label: "Decorators & Servers", href: "/food/decorators-servers" },
      { label: "Personal Chefs", href: "/food/personal-chefs" },
      { label: "Busy Professionals", href: "/food/busy-professionals" },
    ],
  },
  {
    label: "Transport",
    submenu: [
      { label: "Car Renting", href: "/transport/car-renting" },
      { label: "With/Without Driver", href: "/transport/with-without-driver" },
      { label: "Events & Tourism", href: "/transport/events-tourism" },
      { label: "Driver Services", href: "/transport/driver-services" },
      { label: "Long-term Hiring", href: "/transport/long-term-hiring" },
      { label: "Package Delivery", href: "/transport/package-delivery" },
    ],
  },
  {
    label: "Weddings",
    submenu: [
      { label: "Event Management", href: "/weddings/event-management" },
      { label: "Music & Bands", href: "/weddings/music-bands" },
      { label: "Attire & Gifts", href: "/weddings/attire-gifts" },
    ],
  },
  {
    label: "Rentals",
    submenu: [
      { label: "Car Rentals", href: "/rentals/car-rentals" },
      { label: "Apartments & Houses", href: "/rentals/apartments-houses" },
      { label: "Short & Long Stay", href: "/rentals/short-long-stay" },
      { label: "Office & Space", href: "/rentals/office-space" },
    ],
  },
  {
    label: "Tourism",
    submenu: [
      { label: "Travel Packages", href: "/tourism/travel-packages" },
      { label: "Hotel Booking", href: "/tourism/hotel-booking" },
      { label: "City & Rural Tours", href: "/tourism/city-rural-tours" },
    ],
  },
  {
    label: "Data Services",
    submenu: [
      { label: "Field Enumerators", href: "/data-services/field-enumerators" },
      { label: "Data Analysis", href: "/data-services/data-analysis" },
      { label: "Survey & Reports", href: "/data-services/survey-reports" },
    ],
  },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileDropdownIndex, setMobileDropdownIndex] = useState<number | null>(
    null
  );

  // Check if current path matches exact href
  const isActive = (href: string) => pathname === href;

  // Check if any submenu item matches current path
  const isSubmenuActive = (submenu: { href: string }[]) =>
    submenu.some((item) => pathname === item.href);

  return (
    <nav className="bg-blue-700 text-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-24">
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
              className={`px-3 py-2 rounded-md  transition duration-300 hover:bg-blue-600  ease-in-out hover:scale-105   ${
                isActive("/")
                  ? "bg-blue-900 font-extrabold text-yellow-300 border-b-4 border-yellow-300"
                  : ""
              }`}
            >
              Home
            </Link>
            <Link
              href="/who-we-are"
              className={`px-3 py-2 rounded-md transition duration-300 hover:bg-blue-600 hover:scale-105 ${
                isActive("/who-we-are")
                  ? "bg-blue-900 font-extrabold text-yellow-300 border-b-4 border-yellow-300"
                  : ""
              }`}
            >
              Who We Are
            </Link>

            {services.map((menu, idx) => {
              const parentActive = isSubmenuActive(menu.submenu);
              return (
                <div key={idx} className="relative group">
                  <div
                    className={`flex items-center gap-1 px-3 py-2 rounded-md transition duration-300 hover:bg-blue-600 hover:scale-105 ${
                      parentActive
                        ? "bg-blue-900 font-extrabold text-yellow-300 border-b-4 border-yellow-300"
                        : ""
                    }`}
                  >
                    {menu.label}
                    <ChevronDown
                      size={16}
                      className="transition-transform duration-300 ease-in-out group-hover:rotate-180"
                      aria-hidden="true"
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
                <X size={28} className="text-white" />
              ) : (
                <Menu size={28} className="text-white" />
              )}
            </button>
          </div>
          {/*conact page*/}
          <div className="hidden md:flex">
            <Link
              href="/contact"
              className={`px-3 py-2 rounded-md transition duration-300 hover:bg-blue-600 hover:scale-105 ${
                isActive("/contact")
                  ? "bg-blue-900 font-extrabold text-yellow-300 border-b-4 border-yellow-300"
                  : ""
              }`}
            >
              Contact us
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-blue-600 text-white animate-slideDown">
          <ul className="flex flex-col space-y-1 py-2">
            <li>
              <Link
                href="/"
                className={`block px-5 py-3 rounded-md transform transition duration-300 ease-in-out hover:scale-105 hover:bg-blue-400 hover:text-white  ${
                  isActive("/")
                    ? "bg-slate-600 text-white font-extrabold border-l-4 border-yellow-800"
                    : "text-white"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/who-we-are"
                className={`block px-5 py-3 rounded-md transform transition duration-300 ease-in-out hover:scale-105 hover:bg-blue-400 hover:text-white ${
                  isActive("/who-we-are")
                    ? "bg-slate-600 text-white font-extrabold border-l-4 border-yellow-800"
                    : ""
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Who We Are
              </Link>
            </li>

            {services.map((menu, idx) => {
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
          </ul>
        </div>
      )}
    </nav>
  );
}
