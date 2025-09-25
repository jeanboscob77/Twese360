// translations/en.ts
const en = {
  form: {
    request: "Request Service",
    submit: "Submit Request",
    placeholders: {
      name: "Your Name",
      email: "Your Email (optional)",
      phone: "Your Phone",
      address: "Your Address / Location",
      notes: "Additional details...",
      nationalId: "Enter your National ID",
      passport: "Enter your Passport Number",
    },
    idType: {
      label: "Choose ID type:",
      nationalId: "National ID",
      passport: "Passport",
    },
  },
  services: {
    submit: "Submit",
    request: "Request Service",
    "not-found": "Service not found",
    // ============== FOOD ==================
    "ordering-delivery": {
      title: "Ordering & Delivery",
      description:
        "Fast and reliable food ordering and delivery service from your favorite restaurants directly to your doorstep.",
    },
    "local-restaurants": {
      title: "Local Restaurants",
      description:
        "Explore a curated selection of local restaurants offering fresh meals and unique dining experiences.",
    },
    "delivery-options": {
      title: "Delivery Options",
      description:
        "Choose flexible delivery packages including express, scheduled, and group delivery options.",
    },
    "events-catering": {
      title: "Events Catering",
      description:
        "Delicious and professional catering services for weddings, birthdays, corporate events, and more.",
    },
    "decorators-servers": {
      title: "Decorators & Servers",
      description:
        "Professional decorators and servers to make your events elegant and organized.",
    },
    "personal-chefs": {
      title: "Personal Chefs",
      description:
        "Hire professional personal chefs for your private events or daily home meals.",
    },
    "busy-professionals": {
      title: "Busy Professionals",
      description:
        "Meal plans and delivery services tailored for professionals with busy schedules.",
    },

    // ============== TRANSPORT ==================
    "car-renting": {
      title: "Car Renting",
      description:
        "Affordable car rental services with a wide variety of vehicles to meet your travel needs.",
    },
    "with-without-driver": {
      title: "With/Without Driver",
      description:
        "Choose self-drive rentals for independence or hire professional drivers for convenience.",
    },
    "purchase-car": {
      title: "Purchase Car",
      description:
        "Find and purchase high-quality new or used cars at competitive prices.",
    },

    // ============== WEDDINGS ==================
    "event-management": {
      title: "Event Management",
      description:
        "Complete wedding planning and coordination for a memorable celebration.",
    },
    "music-bands": {
      title: "Music & Bands",
      description:
        "Make your wedding unforgettable with live bands, DJs, and music entertainment.",
    },
    protocol: {
      title: "Protocol",
      description:
        "Professional protocol teams to ensure your wedding or event runs smoothly.",
    },
    "wedding-transport": {
      title: "Wedding Transport",
      description:
        "Luxury and classic cars for weddings to make your day elegant and memorable.",
    },
    "food-and-drinks": {
      title: "Food & Drinks",
      description:
        "Customized catering and bar services to delight your guests on your wedding day.",
    },
    clothes: {
      title: "Clothes",
      description:
        "Elegant wedding gowns and suits tailored for your special day.",
    },
    "save-the-date": {
      title: "Save the Date",
      description:
        "Beautifully designed Save the Date cards and reminders for your guests.",
    },
    "wedding-invitation": {
      title: "Wedding Invitation",
      description:
        "Custom wedding invitations tailored to your theme and style.",
    },
    "gifts-cover-badges": {
      title: "Gifts Cover & Badges",
      description:
        "Stylish gift covers and wedding badges to make your event unique.",
    },

    // ============== RENTALS ==================
    "apartments-houses": {
      title: "Apartments & Houses",
      description: "Find affordable rental apartments and houses in Kigali.",
    },
    house: {
      title: "House",
      description:
        "Spacious and affordable house rentals for families and individuals.",
    },
    "office-space": {
      title: "Office & Space",
      description: "Affordable and well-located office rentals for businesses.",
    },

    // ============== TOURISM ==================
    "hotel-booking": {
      title: "Hotel Booking",
      description:
        "Book budget-friendly or luxury hotels with our trusted partners.",
    },
    guidance: {
      title: "Guidance",
      description:
        "Get professional tour guides to make your travel safe and exciting.",
    },
    "gorilla-trekking": {
      title: "Gorilla Trekking",
      description:
        "Experience Rwanda’s famous gorilla trekking adventures in Volcanoes National Park.",
    },
    "city-tours": {
      title: "City Tours",
      description:
        "Discover Kigali with guided tours covering culture, history, and modern attractions.",
    },
    "nature-walks": {
      title: "Nature Walks",
      description:
        "Reconnect with nature through guided nature walks and eco-tours.",
    },

    // ============== RESEARCH ==================
    "field-enumerators": {
      title: "Field Enumerators",
      description:
        "Trained field enumerators to collect reliable data for your research projects.",
    },
    "data-analysis": {
      title: "Data Analysis",
      description:
        "Turn raw data into insights with our professional analysis services.",
    },
    "survey-design-reports": {
      title: "Survey Design & Reports",
      description:
        "Professional survey design and reporting services for NGOs, businesses, and individuals.",
    },
    "software-training": {
      title: "Software Training",
      description:
        "Practical software training for data analysis and research tools.",
    },
    "data-entry": {
      title: "Data Entry",
      description:
        "Fast and accurate data entry services to support your projects.",
    },
    "dashboard-design": {
      title: "Dashboard Design",
      description:
        "Interactive dashboard design to visualize your data and track performance.",
    },
  },
  alerts: {
    invalidName: {
      title: "Invalid Name",
      text: "Please enter a valid name (letters only, at least 2 characters).",
    },
    invalidAddress: {
      title: "Invalid Address",
      text: "Please enter a valid address or location (at least 5 characters).",
    },
    invalidPhone: {
      title: "Invalid Phone",
      text: "Please enter a valid phone number.",
    },
    invalidEmail: {
      title: "Invalid Email",
      text: "Please enter a valid email address or leave it empty.",
    },
    invalidNationalId: {
      title: "Invalid National ID",
      text: "National ID must be exactly 16 digits.",
    },
    invalidPassport: {
      title: "Invalid Passport",
      text: "Please enter a valid passport number.",
    },
    success: {
      title: "Request Submitted",
      text: "Your service request has been submitted successfully!",
    },
    submissionError: {
      title: "Submission Error",
      text: "Something went wrong. Please try again later.",
    },
  },
  // You can keep other sections like footer, navbar, etc.
};
export type Translation = typeof en;

export default en;
