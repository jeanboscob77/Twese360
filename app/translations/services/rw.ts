// rw.ts
const rw = {
  subservices: {
    labels: {
      features: "Features", // RW: "Ibikurikira"
      benefits: "Benefits", // RW: "Inyungu"
    },
    // ================= FOOD =================
    "ordering-delivery": {
      title: "Gutanga Ibiryo & Kuzigeza",
      description:
        "Serivisi yihuse kandi yizewe yo gutumiza no kugeza ibiryo by’amarestora ukunda aho utuye.",
      features: [
        "Ubwoko bwinshi bw’amafunguro",
        "Gutumiza ukoresheje telefoni byoroshye",
        "Kugenzura uko byatanzwe mu gihe nyacyo",
        "Uburyo butandukanye bwo kwishyura",
      ],
      benefits: [
        "Kuzigama igihe n’imbaraga",
        "Kunyurwa n’amafunguro ashyushye igihe cyose",
        "Kwishyurwa ku giciro gito",
      ],
      cta: {
        text: "Tegereza Ubu",
        link: "/request/ordering-and-delivery",
      },
      image: "/images/services/ordering-delivery.jpg",
    },
    "local-restaurants": {
      title: "Amarestora Yaho",
      description:
        "Menya amarestora yatoranyijwe neza atanga amafunguro mashya n’uburyo bwo kurya budasanzwe.",
      features: [
        "Abafatanyabikorwa b’inyangamugayo",
        "Ibiciro bidasanzwe",
        "Ibiryo gakondo n’igezweho",
      ],
      benefits: [
        "Gushyigikira ubucuruzi bw’imbere mu gihugu",
        "Amafunguro meza ku giciro gito",
        "Kugira uburambe bushya buri munsi",
      ],
      cta: {
        text: "Reba Amarestora",
        link: "/request/local-restaurants",
      },
      image: "/images/services/local-restaurants.jpg",
    },
    "delivery-options": {
      title: "Amahitamo yo Kuzigeza",
      description:
        "Hitamo uburyo bworoshye bwo kugeza ibiryo harimo vuba cyane, byagenwe igihe, cyangwa bizanwa rimwe.",
      features: [
        "Kugeza ako kanya cyangwa ku munsi umwe",
        "Amasaha uhitemo",
        "Kwitwararika isuku n’umutekano",
      ],
      benefits: [
        "Kuzigezwa ku gihe",
        "Serivisi yizewe",
        "Byateguwe kugira ngo bihuze n’igihe cyawe",
      ],
      cta: { text: "Reba Amahitamo", link: "/request/delivery-options" },
      image: "/images/services/delivery-options.jpg",
    },
    "events-catering": {
      title: "Serivisi y’Amafuguro ku Bikorwa",
      description:
        "Serivisi y’amaserivisi y’amafunguro meza kandi yabigize umwuga ku bukwe, isabukuru, ibikorwa bya sosiyete n’ibindi.",
      features: [
        "Menu zateguwe ukurikije ibyo ushaka",
        "Abashinzwe guteka bafite uburambe",
        "Abakozi ku rubuga n’imyiteguro yose",
      ],
      benefits: [
        "Kugabanya imihangayiko mu gutegura ibirori",
        "Amafunguro yo mu rwego rwo hejuru",
        "Ubunararibonye bwo gufata neza abashyitsi",
      ],
      cta: { text: "Bukinga Serivisi", link: "/request/events-catering" },
      image: "/images/services/events-catering.jpg",
    },
    "decorators-servers": {
      title: "Abategura & Abakozi bo Gutanga Serivisi",
      description:
        "Abategura ibirori n’abatanga serivisi babigize umwuga kugira ngo ibirori byawe bibe byiza kandi biteguwe neza.",
      features: [
        "Abashinzwe gutegura no gutanga serivisi",
        "Ibitekerezo byihariye mu gutegura",
        "Pakeji zihendutse",
      ],
      benefits: [
        "Gutera isura nziza abashyitsi",
        "Serivisi iteguwe neza",
        "Kwirinda imihangayiko mu kwakira abashyitsi",
      ],
      cta: {
        text: "Kodesha Itsinda",
        link: "/request/decorators-servers",
      },
      image: "/images/services/decorators-servers.jpg",
    },
    "personal-chefs": {
      title: "Ababitsi b’Amafuguro ku Giti",
      description:
        "Kodesha abashinzwe guteka babigize umwuga ku bikorwa byawe cyangwa ku mafunguro yo mu rugo buri munsi.",
      features: [
        "Abatetsi bafite ubumenyi buhanitse",
        "Igenamafunguro rikozwe ku giti",
        "Amafunguro meza kandi akize ku buzima",
      ],
      benefits: [
        "Kunyurwa n’amafunguro y’indobanure mu rugo",
        "Kuzigama igihe cyo guteka",
        "Kugira imirire myiza",
      ],
      cta: {
        text: "Kodesha Umunyamwuga",
        link: "/request/personal-chefs",
      },
      image: "/images/services/personal-chefs.jpg",
    },
    "busy-professionals": {
      title: "Abafite Akazi Kenshi",
      description:
        "Igenamafunguro n’uburyo bwo kugeza ibiryo byateguwe ku bantu bafite gahunda zihugije.",
      features: [
        "Pakeji z’isubizwamo buri cyumweru",
        "Amafunguro akize ku buzima kandi ateguye",
        "Kuzigeza ku kazi",
      ],
      benefits: [
        "Kuzigama igihe ku kazi",
        "Kurya ibiryo byiza buri munsi",
        "Kongera ubushobozi bwo gukora",
      ],
      cta: {
        text: "Fata Igenamafunguro",
        link: "/request/busy-professionals",
      },
      image: "/images/services/busy-professionals.jpg",
    },

    // ================= TRANSPORT =================
    "car-renting": {
      title: "Gukodesha Imodoka",
      description:
        "Serivisi yo gukodesha imodoka ku giciro gito, harimo imodoka nyinshi zitandukanye zikwiranye n’urugendo rwawe.",
      features: [
        "Imodoka nto n’iz’ubukungu",
        "Gukodesha igihe gito cyangwa kirekire",
        "Ibiciro bihendutse",
      ],
      benefits: ["Imodoka zizewe", "Amahitamo atandukanye", "Ubufasha 24/7"],
      cta: { text: "Kodesha Imodoka", link: "/request/car-renting" },
      image: "/images/services/car-renting.jpg",
    },
    "with-without-driver": {
      title: "Ifite/Idafite Umushoferi",
      description:
        "Hitamo kwitwara wenyine cyangwa gukodesha abashoferi babigize umwuga kugira ngo byorohe.",
      features: [
        "Abashoferi bafite uruhushya",
        "Amahitamo yo kwitwara",
        "Imodoka zizewe kandi zishingiwe",
      ],
      benefits: [
        "Ubwisanzure mu kugenda",
        "Umutekano mu rugendo",
        "Ibiciro bihendutse",
      ],
      cta: {
        text: "Bukinga Urugendo",
        link: "/request/with-without-driver",
      },
      image: "/images/services/with-without-driver.jpg",
    },
    "purchase-car": {
      title: "Kugura Imodoka",
      description:
        "Shakisha kandi ugure imodoka nshya cyangwa zakoze ku giciro cyiza.",
      features: [
        "Abacuruzi b’imodoka b’inyangamugayo",
        "Amahitamo yo kwishyura make make",
        "Ibimenyetso byinshi by’imodoka",
      ],
      benefits: [
        "Uburyo bwizewe bwo kugura",
        "Kwishyura mu buryo bworoshye",
        "Imodoka zikomeye kandi zidapfa vuba",
      ],
      cta: { text: "Gura Imodoka", link: "/request/purchase-car" },
      image: "/images/services/purchase-car.jpg",
    },

    // ================= WEDDINGS =================
    "event-management": {
      title: "Gutunganya Ibirori",
      description:
        "Gahunda yose yo gutegura no kuyobora ubukwe kugira ngo bube umunsi wibukwa.",
      features: [
        "Gucunga ingengo y’imari",
        "Guhuza ibikorwa byose",
        "Guhuza abatanga serivisi",
      ],
      benefits: [
        "Gucungura imihangayiko",
        "Uburambe bwihariye",
        "Umunsi wibukwa",
      ],
      cta: {
        text: "Tegura Ubukwe",
        link: "/request/event-management",
      },
      image: "/images/services/event-management.jpg",
    },
    "music-bands": {
      title: "Umuziki & Amatsinda",
      description:
        "Kora ubukwe bwawe budasanzwe ukoresheje amatsinda y’umuziki, DJs, n’imyidagaduro itandukanye.",
      features: [
        "Amatsinda y’umuziki",
        "DJs babigize umwuga",
        "Ibikoresho by’ijwi",
      ],
      benefits: [
        "Ibikorwa bishimishije",
        "Ireme ry’ijwi ryiza",
        "Umuziki wibukwa",
      ],
      cta: { text: "Bukinga Umuziki", link: "/request/music-bands" },
      image: "/images/services/music-bands.jpg",
    },
    protocol: {
      title: "Protokole",
      description:
        "Amatsinda ya protokole yabigize umwuga yemeza ko ubukwe cyangwa ibirori bigenda neza.",
      features: [
        "Guhuza abashyitsi",
        "Kuyobora imihango",
        "Abakozi b’inyangamugayo",
      ],
      benefits: [
        "Ibikorwa biteguwe neza",
        "Kwakira bitariho imihangayiko",
        "Isura y’ubunyamwuga",
      ],
      cta: { text: "Kodesha Protokole", link: "/request/protocol" },
      image: "/images/services/protocol.jpg",
    },
    "wedding-transport": {
      title: "Imodoka z’Ubukwe",
      description:
        "Imodoka zigezweho cyangwa gakondo ku munsi w’ubukwe kugira ngo ube uw’ibihe byose.",
      features: [
        "Imodoka z’uburanga",
        "Abashoferi babigize umwuga",
        "Kugerera ku gihe",
      ],
      benefits: ["Kugera mu buryo bwiza", "Amafoto yibukwa", "Serivisi yizewe"],
      cta: { text: "Bukinga Imodoka", link: "/request/transport" },
      image: "/images/services/wedding-transport.jpg",
    },
    "food-and-drinks": {
      title: "Amafunguro & Ibinyobwa",
      description:
        "Amafunguro n’ibinyobwa biteguwe byihariye bigenewe kunyura abashyitsi ku munsi w’ubukwe.",
      features: [
        "Menu zitandukanye",
        "Abakozi babigize umwuga",
        "Ibikoresho byiza",
      ],
      benefits: ["Uburambe bwiza", "Amafunguro meza", "Abashyitsi banyuzwe"],
      cta: {
        text: "Bukinga Serivisi",
        link: "/request/food-and-drinks",
      },
      image: "/images/services/wedding-food.jpg",
    },
    clothes: {
      title: "Imyambaro",
      description:
        "Amakanzu n’amasutiya y’ubukwe ateguwe neza ku munsi wawe wihariye.",
      features: [
        "Amakanzu y’abahanga",
        "Amasutiya yihariye",
        "Amahitamo yo gukodesha cyangwa kugura",
      ],
      benefits: [
        "Kugaragara neza",
        "Pakeji zihendutse",
        "Imyambarire igezweho",
      ],
      cta: { text: "Shaka Imyambaro", link: "/request/clothes" },
      image: "/images/services/wedding-clothes.jpg",
    },
    "save-the-date": {
      title: "Kwibutsa Itariki",
      description:
        "Amakarita yo kwibutsa atunganyijwe neza mu buryo bw’ikoranabuhanga cyangwa acapwe.",
      features: [
        "Igishushanyo cyihariye",
        "Digital & acapwe",
        "Ibiciro bihendutse",
      ],
      benefits: [
        "Kubwira abashyitsi ku gihe",
        "Ibishushanyo byiza",
        "Ibiciro byiza",
      ],
      cta: { text: "Tegura Ikarita", link: "/request/save-the-date" },
      image: "/images/services/save-the-date.jpg",
    },
    "wedding-invitation": {
      title: "Ubutumire bw’Ubukwe",
      description:
        "Amakarita y’ubutumire akozwe mu buryo bujyanye n’inyito n’imyambaro yawe.",
      features: [
        "Digital & acapwe",
        "Ibishushanyo bishya",
        "Pakeji zihendutse",
      ],
      benefits: [
        "Gushimisha abashyitsi",
        "Ubutumire bwibukwa",
        "Icapiro ry’umwuga",
      ],
      cta: {
        text: "Tegura Ubutumire",
        link: "/request/wedding-invitation",
      },
      image: "/images/services/wedding-invitation.jpg",
    },
    "gifts-cover-badges": {
      title: "Gupfunyika Impano & Ibirango",
      description:
        "Uburyo bugezweho bwo gupfunyika impano no gukora ibirango by’ubukwe bigufasha kurushaho kurimbisha ibirori.",
      features: [
        "Uburyo bushya bwo gupfunyika",
        "Ibikoresho byiza",
        "Ibiciro bihendutse",
      ],
      benefits: [
        "Ubunararibonye bwihariye",
        "Ikirango cyihariye",
        "Ibikoresho by’inyongera bihendutse",
      ],
      cta: {
        text: "Tegura Ibikoresho",
        link: "/request/gifts-cover-badges",
      },
      image: "/images/services/wedding-gifts.jpg",
    },
    // rw.ts (Weddings - Transport)
    transport: {
      title: "Gutwara Abashyitsi b'Ubukwe",
      description:
        "Imodoka zigezweho kandi zihenze zikoreshwa mu bukwe kugirango umunsi wawe ube mwiza kandi wibukwa. Hitamo imodoka zitandukanye hamwe n’abashoferi b’inzobere.",
      features: [
        "Imodoka zigezweho ku munsi w’ubukwe",
        "Abashoferi b’inzobere bahari",
        "Kujyana no kugarura ku gihe",
        "Imodoka ziteye neza ku mihango",
      ],
      benefits: [
        "Kugerayo mu buryo bwiza",
        "Amafoto y’ukwibukwa y’ubukwe",
        "Gutwara nta stress",
        "Umutekano no kwizerwa",
      ],
      cta: {
        text: "Tegura Imodoka",
        link: "/request/transport",
      },
      image: "/images/services/wedding-transport.jpg",
    },

    // ================= RENTALS =================
    "apartments-houses": {
      title: "Inzu & Apartments",
      description:
        "Shaka inzu cyangwa apartments zihendutse mu mujyi wa Kigali.",
      features: ["Inzu zizewe", "Aho gutura hizewe", "Kwishyura byoroshye"],
      benefits: ["Gukodesha bitagoye", "Inzu zihendutse", "Amahitamo menshi"],
      cta: { text: "Shaka Inzu", link: "/request/apartments-houses" },
      image: "/images/services/apartments-houses.jpg",
    },
    house: {
      title: "Inzu",
      description:
        "Inzu nini kandi zihendutse zikwiranye n’imiryango n’abantu ku giti cyabo.",
      features: [
        "Ingano zitandukanye",
        "Umutekano wizewe",
        "Ibiciro bihendutse",
      ],
      benefits: ["Kubaho neza", "Inzu zizewe", "Ba nyir’inzu b’inyangamugayo"],
      cta: { text: "Kodesha Inzu", link: "/services/rentals/house" },
      image: "/images/services/house.jpg",
    },
    "office-space": {
      title: "Ibiro & Aho Gukorera",
      description: "Ibiro bihendutse kandi byiza biri mu duce twiza.",
      features: [
        "Amasezerano yoroshye",
        "Ibikoresho igezweho",
        "Aho muri hagati y’umujyi",
      ],
      benefits: [
        "Guteza imbere ubucuruzi",
        "Ibiciro bihendutse",
        "Aho gukorera hateguye",
      ],
      cta: { text: "Kodesha Ibiro", link: "/request/office-space" },
      image: "/images/services/office-space.jpg",
    },

    // ================= TOURISM =================
    "hotel-booking": {
      title: "Kubika Hoteli",
      description: "Shaka hoteli zihendutse cyangwa zigezweho dukorana nazo.",
      features: ["Hoteli zizewe", "Ibiciro bihendutse", "Kubika byoroshye"],
      benefits: ["Nta biciro byihishe", "Serivisi yizewe", "Ubufasha 24/7"],
      cta: { text: "Bukinga Hoteli", link: "/services/tourism/hotel-booking" },
      image: "/images/services/hotel-booking.jpg",
    },
    guidance: {
      title: "Abayobora",
      description:
        "Shaka abayobora babigize umwuga bagufasha kugira urugendo rwiza kandi rumeze neza.",
      features: ["Abayobora b’inzobere", "Kumenya iby’aho", "Urugendo rwizewe"],
      benefits: [
        "Uburambe budasanzwe",
        "Kumenya umuco",
        "Urugendo rw’umutekano",
      ],
      cta: { text: "Kodesha Umuyobozi", link: "/request/guidance" },
      image: "/images/services/guidance.jpg",
    },
    "gorilla-trekking": {
      title: "Kureba Ingagi",
      description:
        "Gira ubunararibonye bwo gusura ingagi mu Birunga bya Pariki y’Igihugu.",
      features: ["Abayobora b’inzobere", "Uruhushya rwizewe", "Pakeji zuzuye"],
      benefits: [
        "Uburambe bwo mu buzima",
        "Urugendo rwizewe",
        "Ubuyobozi bw’umwuga",
      ],
      cta: {
        text: "Bukinga Urugendo",
        link: "/request/gorilla-trekking",
      },
      image: "/images/services/gorilla-trekking.jpg",
    },
    "city-tours": {
      title: "Gusura Umujyi",
      description:
        "Sura Kigali cyangwa indi mijyi usobanurirwa amateka n’umuco.",
      features: [
        "Amamodoka agezweho",
        "Abayobora babigize umwuga",
        "Ibyo gusura byinshi",
      ],
      benefits: ["Gukunda igihugu", "Kumenya amateka", "Iburambe ryihariye"],
      cta: { text: "Bukinga Tour", link: "/request/city-tours" },
      image: "/images/services/city-tours.jpg",
    },
    "nature-walks": {
      title: "Kugenda mu Bidukikije",
      description:
        "Menya ibyiza by’icyaro, amashyamba, n’ibidukikije nyaburanga.",
      features: [
        "Abayobora babigize umwuga",
        "Amerekezo atandukanye",
        "Pakeji zihendutse",
      ],
      benefits: ["Kuruhuka", "Kumenya ibyiza by’igihugu", "Iburambe ryiza"],
      cta: { text: "Tangira Kugenda", link: "/request/nature-walks" },
      image: "/images/services/nature-walks.jpg",
    },

    // ================= RESEARCH =================
    "field-enumerators": {
      title: "Abakusanya Amakuru",
      description:
        "Abashinzwe gukusanya amakuru bafite ubumenyi mu gukora ubushakashatsi.",
      features: [
        "Itsinda ry’ubushakashatsi",
        "Ubumenyi mu mikoranire",
        "Ibikoresho by’ikoranabuhanga",
      ],
      benefits: ["Ibisubizo byizewe", "Amakuru meza", "Itsinda ry’umwuga"],
      cta: {
        text: "Kodesha Abashakashatsi",
        link: "/services/research/field-enumerators",
      },
      image: "/images/services/field-enumerators.jpg",
    },
    "data-analysis": {
      title: "Isesengura ry’Amakuru",
      description:
        "Serivisi yo gusesengura amakuru mu buryo buhanitse hifashishijwe ibikoresho by’ikoranabuhanga.",
      features: ["SPSS, STATA, R", "Raporo zuzuye", "Ibipimo nyabyo"],
      benefits: ["Ibisubizo byizewe", "Amakuru meza", "Raporo z’umwuga"],
      cta: {
        text: "Tangira Isesengura",
        link: "/request/data-analysis",
      },
      image: "/images/services/data-analysis.jpg",
    },
    "survey-design-reports": {
      title: "Gushushanya Ubushakashatsi & Raporo",
      description:
        "Serivisi yo gukora ubushakashatsi no gutegura raporo zifite ireme.",
      features: [
        "Ibipimo nyabyo",
        "Ubushakashatsi bwuzuye",
        "Raporo zikozwe neza",
      ],
      benefits: ["Ibisubizo bifatika", "Raporo zizewe", "Uburambe buhanitse"],
      cta: {
        text: "Tangira Ubushakashatsi",
        link: "/request/survey-design-reports",
      },
      image: "/images/services/survey-design.jpg",
    },
    "software-training": {
      title: "Amahugurwa ku Mikoreshereze ya Software",
      description:
        "Amahugurwa ku buryo bwo gukoresha software zifasha mu bushakashatsi n’imibare.",
      features: ["SPSS, STATA, R", "Power BI, Excel", "QGIS, Nvivo"],
      benefits: [
        "Kumenya ibikoresho bishya",
        "Ubumenyi bw’umwuga",
        "Impamyabumenyi",
      ],
      cta: {
        text: "Iyandikishe",
        link: "/request/software-training",
      },
      image: "/images/services/software-training.jpg",
    },
    "data-entry": {
      title: "Kwandika Amakuru",
      description: "Serivisi yanditse amakuru mu buryo bwizewe no ku gihe.",
      features: [
        "Kwandika mu buryo bwihuse",
        "Uburyo bugezweho",
        "Itsinda ry’umwuga",
      ],
      benefits: ["Amakuru yizewe", "Kuzigama igihe", "Kwishyura bike"],
      cta: { text: "Tangira Ubu", link: "/request/data-entry" },
      image: "/images/services/data-entry.jpg",
    },
    "dashboard-design": {
      title: "Gushushanya Dashboard",
      description:
        "Gukora dashboards zigezweho zo kugaragaza amakuru mu buryo bugaragara.",
      features: [
        "Power BI, Tableau",
        "Ibishushanyo bishya",
        "Raporo mu gihe nyacyo",
      ],
      benefits: [
        "Gusobanukirwa amakuru byoroshye",
        "Imyanzuro myiza",
        "Kwishyura bike",
      ],
      cta: {
        text: "Shaka Dashboard",
        link: "/request/dashboard-design",
      },
      image: "/images/services/dashboard-design.jpg",
    },
  },
};

export default rw;
