// en.ts
const en = {
  subservices: {
    labels: {
      features: "Features", // RW: "Ibikurikira"
      benefits: "Benefits", // RW: "Inyungu"
    },
    // ================= FOOD =================
    "ordering-delivery": {
      title: "Ordering & Delivery",
      description:
        "Fast and reliable food ordering and delivery service from your favorite restaurants directly to your doorstep.",
      features: [
        "Wide variety of cuisines",
        "Easy mobile ordering",
        "Real-time delivery tracking",
        "Multiple payment options",
      ],
      benefits: [
        "Save time and effort",
        "Enjoy hot meals anytime",
        "Affordable service fees",
      ],
      cta: { text: "Order Now", link: "/services/food/ordering-and-delivery" },
      image: "/images/services/ordering-delivery.jpg",
    },
    "local-restaurants": {
      title: "Local Restaurants",
      description:
        "Explore a curated selection of local restaurants offering fresh meals and unique dining experiences.",
      features: [
        "Trusted local partners",
        "Exclusive discounts",
        "Traditional & modern dishes",
      ],
      benefits: [
        "Support local businesses",
        "Affordable and tasty meals",
        "New food experiences daily",
      ],
      cta: {
        text: "Explore Restaurants",
        link: "/services/food/local-restaurants",
      },
      image: "/images/services/local-restaurants.jpg",
    },
    "delivery-options": {
      title: "Delivery Options",
      description:
        "Choose flexible delivery packages including express, scheduled, and group delivery options.",
      features: [
        "Express and same-day delivery",
        "Custom time slots",
        "Safe and hygienic handling",
      ],
      benefits: [
        "On-time deliveries",
        "Reliable service",
        "Designed to fit your schedule",
      ],
      cta: {
        text: "Check Options",
        link: "/services/food/delivery-options",
      },
      image: "/images/services/delivery-options.jpg",
    },
    "events-catering": {
      title: "Events Catering",
      description:
        "Delicious and professional catering services for weddings, birthdays, corporate events, and more.",
      features: [
        "Customized menu options",
        "Experienced chefs",
        "On-site staff and setup",
      ],
      benefits: [
        "Stress-free event planning",
        "High-quality meals",
        "Memorable dining experience",
      ],
      cta: { text: "Book Catering", link: "/services/food/events-catering" },
      image: "/images/services/events-catering.jpg",
    },
    "decorators-servers": {
      title: "Decorators & Servers",
      description:
        "Professional decorators and servers to make your events elegant and organized.",
      features: [
        "Event setup and serving staff",
        "Creative decoration ideas",
        "Affordable packages",
      ],
      benefits: [
        "Impress your guests",
        "Well-organized service",
        "Stress-free hosting",
      ],
      cta: {
        text: "Hire Team",
        link: "/services/food/decorators-servers",
      },
      image: "/images/services/decorators-servers.jpg",
    },
    "personal-chefs": {
      title: "Personal Chefs",
      description:
        "Hire professional personal chefs for your private events or daily home meals.",
      features: [
        "Trained and skilled chefs",
        "Customized meal plans",
        "Healthy and delicious options",
      ],
      benefits: [
        "Enjoy gourmet meals at home",
        "Save cooking time",
        "Healthy eating habits",
      ],
      cta: {
        text: "Hire Chef",
        link: "/services/food/personal-chefs",
      },
      image: "/images/services/personal-chefs.jpg",
    },
    "busy-professionals": {
      title: "Busy Professionals",
      description:
        "Meal plans and delivery services tailored for professionals with busy schedules.",
      features: [
        "Weekly subscription plans",
        "Nutritious and ready-to-eat meals",
        "Office delivery service",
      ],
      benefits: [
        "Save time at work",
        "Eat healthy every day",
        "Boost productivity",
      ],
      cta: {
        text: "Get Meal Plan",
        link: "/services/food/busy-professionals",
      },
      image: "/images/services/busy-professionals.jpg",
    },

    // ================= TRANSPORT =================
    "car-renting": {
      title: "Car Renting",
      description:
        "Affordable car rental services with a wide variety of vehicles to meet your travel needs.",
      features: [
        "Compact and luxury cars",
        "Short-term and long-term rentals",
        "Affordable rates",
      ],
      benefits: [
        "Reliable vehicles",
        "Flexible rental packages",
        "24/7 support",
      ],
      cta: { text: "Rent Car", link: "/services/transport/car-renting" },
      image: "/images/services/car-renting.jpg",
    },
    "with-without-driver": {
      title: "With/Without Driver",
      description:
        "Choose self-drive rentals for independence or hire professional drivers for convenience.",
      features: [
        "Licensed professional drivers",
        "Option for self-drive",
        "Safe and insured vehicles",
      ],
      benefits: [
        "Freedom of choice",
        "Safe transportation",
        "Affordable service",
      ],
      cta: {
        text: "Book Ride",
        link: "/services/transport/with-without-driver",
      },
      image: "/images/services/with-without-driver.jpg",
    },
    "purchase-car": {
      title: "Purchase Car",
      description:
        "Find and purchase high-quality new or used cars at competitive prices.",
      features: [
        "Verified car dealers",
        "Affordable financing options",
        "Wide range of brands",
      ],
      benefits: [
        "Safe and trusted process",
        "Flexible payment",
        "Durable vehicles",
      ],
      cta: {
        text: "Buy Car",
        link: "/services/transport/purchase-car",
      },
      image: "/images/services/purchase-car.jpg",
    },

    // ================= WEDDINGS =================
    "event-management": {
      title: "Event Management",
      description:
        "Complete wedding planning and coordination for a memorable celebration.",
      features: [
        "Budget planning",
        "Full event coordination",
        "Vendor management",
      ],
      benefits: [
        "Stress-free planning",
        "Tailored experiences",
        "Memorable day",
      ],
      cta: {
        text: "Plan Wedding",
        link: "/services/weddings/event-management",
      },
      image: "/images/services/event-management.jpg",
    },
    "music-bands": {
      title: "Music & Bands",
      description:
        "Make your wedding unforgettable with live bands, DJs, and music entertainment.",
      features: ["Live bands", "Professional DJs", "Sound systems"],
      benefits: [
        "Fun and lively event",
        "Professional sound quality",
        "Memorable music",
      ],
      cta: { text: "Book Music", link: "/services/weddings/music-bands" },
      image: "/images/services/music-bands.jpg",
    },
    protocol: {
      title: "Protocol",
      description:
        "Professional protocol teams to ensure your wedding or event runs smoothly.",
      features: [
        "Guest coordination",
        "Event protocol management",
        "Reliable staff",
      ],
      benefits: [
        "Well-organized event",
        "Stress-free hosting",
        "Professional image",
      ],
      cta: { text: "Hire Protocol", link: "/services/weddings/protocol" },
      image: "/images/services/protocol.jpg",
    },
    "wedding-transport": {
      title: "Wedding Transport",
      description:
        "Luxury and classic cars for weddings to make your day elegant and memorable.",
      features: ["Luxury vehicles", "Chauffeur services", "On-time arrival"],
      benefits: ["Arrive in style", "Memorable photos", "Reliable service"],
      cta: {
        text: "Book Car",
        link: "/services/weddings/transport",
      },
      image: "/images/services/wedding-transport.jpg",
    },
    "food-and-drinks": {
      title: "Food & Drinks",
      description:
        "Customized catering and bar services to delight your guests on your wedding day.",
      features: [
        "Diverse menu options",
        "Professional bartenders",
        "High-quality ingredients",
      ],
      benefits: ["Memorable experience", "Delicious meals", "Happy guests"],
      cta: {
        text: "Book Catering",
        link: "/services/weddings/food-and-drinks",
      },
      image: "/images/services/wedding-food.jpg",
    },
    clothes: {
      title: "Clothes",
      description:
        "Elegant wedding gowns and suits tailored for your special day.",
      features: [
        "Designer gowns",
        "Tailored suits",
        "Rental & purchase options",
      ],
      benefits: [
        "Look your best",
        "Affordable packages",
        "Latest fashion trends",
      ],
      cta: { text: "Shop Outfits", link: "/services/weddings/clothes" },
      image: "/images/services/wedding-clothes.jpg",
    },
    "save-the-date": {
      title: "Save the Date",
      description:
        "Beautifully designed Save the Date cards and reminders for your guests.",
      features: [
        "Custom designs",
        "Digital and printed cards",
        "Affordable packages",
      ],
      benefits: [
        "Keep guests informed",
        "Stylish designs",
        "Affordable pricing",
      ],
      cta: {
        text: "Design Card",
        link: "/services/weddings/save-the-date",
      },
      image: "/images/services/save-the-date.jpg",
    },
    "wedding-invitation": {
      title: "Wedding Invitation",
      description:
        "Custom wedding invitations tailored to your theme and style.",
      features: ["Digital & print", "Creative designs", "Affordable packages"],
      benefits: [
        "Impress your guests",
        "Memorable invitations",
        "Professional printing",
      ],
      cta: {
        text: "Design Invitation",
        link: "/services/weddings/wedding-invitation",
      },
      image: "/images/services/wedding-invitation.jpg",
    },
    "gifts-cover-badges": {
      title: "Gifts Cover & Badges",
      description:
        "Stylish gift covers and wedding badges to make your event unique.",
      features: [
        "Custom covers",
        "Creative badge designs",
        "Affordable packages",
      ],
      benefits: [
        "Memorable experience",
        "Unique branding",
        "Affordable extras",
      ],
      cta: {
        text: "Order Accessories",
        link: "/services/weddings/gifts-cover-badges",
      },
      image: "/images/services/wedding-gifts.jpg",
    },
    // en.ts (Weddings - Transport)
    transport: {
      title: "Wedding Transport",
      description:
        "Luxury and classic cars for weddings to make your special day elegant and memorable. Choose from a variety of vehicles and professional chauffeur services.",
      features: [
        "Luxury vehicles for wedding day",
        "Professional chauffeurs available",
        "Timely pickup and drop-off",
        "Decorated cars for ceremonies",
      ],
      benefits: [
        "Arrive in style",
        "Memorable wedding photos",
        "Stress-free transportation",
        "Reliable and safe travel",
      ],
      cta: {
        text: "Book Car",
        link: "/services/weddings/transport",
      },
      image: "/images/services/wedding-transport.jpg",
    },

    // ================= RENTALS =================
    "apartments-houses": {
      title: "Apartments & Houses",
      description: "Find affordable rental apartments and houses in Kigali.",
      features: ["Verified listings", "Safe neighborhoods", "Flexible payment"],
      benefits: [
        "Stress-free rental process",
        "Affordable housing",
        "Variety of choices",
      ],
      cta: {
        text: "Find a Home",
        link: "/services/rentals/apartments-houses",
      },
      image: "/images/services/apartments-houses.jpg",
    },
    house: {
      title: "House",
      description:
        "Spacious and affordable house rentals for families and individuals.",
      features: [
        "Different sizes available",
        "Safe and secure",
        "Affordable rent",
      ],
      benefits: [
        "Comfortable living",
        "Verified listings",
        "Trusted landlords",
      ],
      cta: { text: "Rent House", link: "/services/rentals/house" },
      image: "/images/services/house.jpg",
    },
    "office-space": {
      title: "Office & Space",
      description: "Affordable and well-located office rentals for businesses.",
      features: [
        "Flexible contracts",
        "Modern infrastructure",
        "Central locations",
      ],
      benefits: [
        "Boost your business",
        "Affordable rent",
        "Ready-to-use spaces",
      ],
      cta: {
        text: "Rent Office",
        link: "/services/rentals/office-space",
      },
      image: "/images/services/office-space.jpg",
    },

    // ================= TOURISM =================
    "hotel-booking": {
      title: "Hotel Booking",
      description:
        "Book budget-friendly or luxury hotels with our trusted partners.",
      features: ["Verified hotels", "Affordable rates", "Easy booking"],
      benefits: ["No hidden charges", "Trusted service", "24/7 support"],
      cta: {
        text: "Book Hotel",
        link: "/services/tourism/hotel-booking",
      },
      image: "/images/services/hotel-booking.jpg",
    },
    guidance: {
      title: "Guidance",
      description:
        "Get professional tour guides to make your travel safe and exciting.",
      features: ["Experienced guides", "Local insights", "Safe journeys"],
      benefits: [
        "Memorable experiences",
        "Learn local culture",
        "Safe travels",
      ],
      cta: { text: "Hire Guide", link: "/services/tourism/guidance" },
      image: "/images/services/guidance.jpg",
    },
    "gorilla-trekking": {
      title: "Gorilla Trekking",
      description:
        "Experience Rwanda’s famous gorilla trekking adventures in Volcanoes National Park.",
      features: [
        "Experienced tour guides",
        "Secure permits",
        "Full package tours",
      ],
      benefits: [
        "Lifetime experience",
        "Safe and organized",
        "Expert guidance",
      ],
      cta: {
        text: "Book Trek",
        link: "/services/tourism/gorilla-trekking",
      },
      image: "/images/services/gorilla-trekking.jpg",
    },
    "city-tours": {
      title: "City Tours",
      description:
        "Discover Kigali with guided tours covering culture, history, and modern attractions.",
      features: ["Local guides", "Flexible packages", "Affordable prices"],
      benefits: [
        "Learn Kigali’s history",
        "Safe and fun trips",
        "Great for families",
      ],
      cta: { text: "Explore Kigali", link: "/services/tourism/city-tours" },
      image: "/images/services/city-tours.jpg",
    },
    "nature-walks": {
      title: "Nature Walks",
      description:
        "Reconnect with nature through guided nature walks and eco-tours.",
      features: [
        "Trained eco-guides",
        "Beautiful trails",
        "Affordable packages",
      ],
      benefits: ["Relax and refresh", "Learn biodiversity", "Safe eco-tourism"],
      cta: { text: "Go for Walk", link: "/services/tourism/nature-walks" },
      image: "/images/services/nature-walks.jpg",
    },

    // ================= RESEARCH =================
    "field-enumerators": {
      title: "Field Enumerators",
      description:
        "Trained field enumerators to collect reliable data for your research projects.",
      features: [
        "Experienced team",
        "Mobile data collection",
        "Reliable results",
      ],
      benefits: [
        "Accurate field data",
        "Fast turnaround",
        "Affordable service",
      ],
      cta: {
        text: "Hire Team",
        link: "/services/research/field-enumerators",
      },
      image: "/images/services/field-enumerators.jpg",
    },
    "data-analysis": {
      title: "Data Analysis",
      description:
        "Turn raw data into insights with our professional analysis services.",
      features: ["Advanced tools", "Clear dashboards", "Expert analysts"],
      benefits: [
        "Informed decision making",
        "Accurate insights",
        "Easy reporting",
      ],
      cta: {
        text: "Request Analysis",
        link: "/services/research/data-analysis",
      },
      image: "/images/services/data-analysis.jpg",
    },
    "survey-design-reports": {
      title: "Survey Design & Reports",
      description:
        "Professional survey design and reporting services for NGOs, businesses, and individuals.",
      features: ["Customized surveys", "Clear reports", "Affordable service"],
      benefits: [
        "Accurate responses",
        "Well-structured data",
        "Actionable insights",
      ],
      cta: {
        text: "Design Survey",
        link: "/services/research/survey-design-reports",
      },
      image: "/images/services/survey-design.jpg",
    },
    "software-training": {
      title: "Software Training",
      description:
        "Practical software training for data analysis and research tools.",
      features: ["Hands-on sessions", "Skilled trainers", "Affordable courses"],
      benefits: ["Learn new skills", "Advance career", "Practical knowledge"],
      cta: {
        text: "Join Training",
        link: "/services/research/software-training",
      },
      image: "/images/services/software-training.jpg",
    },
    "data-entry": {
      title: "Data Entry",
      description:
        "Fast and accurate data entry services to support your projects.",
      features: ["Skilled staff", "Secure systems", "Affordable packages"],
      benefits: ["Save time", "Accurate records", "Affordable service"],
      cta: { text: "Request Service", link: "/services/research/data-entry" },
      image: "/images/services/data-entry.jpg",
    },
    "dashboard-design": {
      title: "Dashboard Design",
      description:
        "Interactive dashboard design to visualize your data and track performance.",
      features: ["Custom dashboards", "Modern tools", "User-friendly design"],
      benefits: [
        "Real-time insights",
        "Better decisions",
        "Professional design",
      ],
      cta: {
        text: "Design Dashboard",
        link: "/services/research/dashboard-design",
      },
      image: "/images/services/dashboard-design.jpg",
    },
  },
};

export default en;
