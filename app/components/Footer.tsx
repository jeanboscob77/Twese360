"use client";
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
      { label: "With/Without Driver", href: "/transport/driver-options" },
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

  const isActive = (href: string) => pathname === href;

  // Check if any submenu item is active (used for highlighting parent menu)
  const isSubmenuActive = (submenu: (typeof services)[0]["submenu"]) =>
    submenu.some((item) => isActive(item.href));

  return (
    <nav className="bg-blue-700 text-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="font-bold text-xl tracking-wide">
            OneRwanda Hub
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 items-center">
            <Link
              href="/"
              className={`px-3 py-2 rounded-md transition duration-300 hover:bg-blue-600 hover:scale-105 ${
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
                <div
                  key={idx}
                  className="relative group"
                  style={{ minWidth: "10rem" }}
                >
                  <button
                    className={`flex items-center gap-1 px-3 py-2 rounded-md transition duration-300 hover:bg-blue-600 hover:scale-105 ${
                      parentActive
                        ? "bg-blue-900 font-extrabold text-yellow-300 border-b-4 border-yellow-300"
                        : ""
                    }`}
                  >
                    {menu.label}
                    <ChevronDown
                      size={16}
                      className="transition-transform duration-300 group-hover:rotate-180"
                    />
                  </button>

                  <div
                    className="absolute left-0 top-full mt-0 w-64 bg-white text-black rounded-md shadow-lg z-50 opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 origin-top pointer-events-auto"
                    style={{ userSelect: "none" }}
                  >
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
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
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
                className={`block px-5 py-3 rounded-md transform transition duration-300 ease-in-out hover:scale-105 hover:bg-yellow-500 hover:text-blue-900 ${
                  isActive("/")
                    ? "bg-yellow-600 text-blue-900 font-extrabold border-l-4 border-yellow-800"
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
                className={`block px-5 py-3 rounded-md transform transition duration-300 ease-in-out hover:scale-105 hover:bg-yellow-500 hover:text-blue-900 ${
                  isActive("/who-we-are")
                    ? "bg-yellow-600 text-blue-900 font-extrabold border-l-4 border-yellow-800"
                    : "text-white"
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
                    className={`w-full flex justify-between items-center px-5 py-3 font-semibold rounded-md transform transition duration-300 ease-in-out hover:scale-105 hover:bg-yellow-500 hover:text-blue-900 ${
                      parentActive
                        ? "bg-yellow-600 text-blue-900 border-l-4 border-yellow-800 underline underline-offset-4"
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
                    <ul className="bg-yellow-400 rounded-b-md overflow-hidden transition-all duration-300 ease-in-out">
                      {menu.submenu.map((sub, i) => (
                        <li key={i}>
                          <Link
                            href={sub.href}
                            className={`block px-8 py-2 rounded-md transform transition duration-200 hover:scale-105 hover:bg-yellow-300 hover:text-blue-900 ${
                              isActive(sub.href)
                                ? "bg-yellow-500 font-semibold text-blue-900 border-l-4 border-yellow-700"
                                : "bg-yellow-400"
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
