// src/data/hotels.ts
export type Hotel = {
  slug: string;
  name: string;
  desc: string;
  image: string; // مسیر باید با /images/ شروع کند
  map?: string;
};

export const hotels: Hotel[] = [
  { slug: "pera-palace", name: "Pera Palace Hotel", desc: "Historic luxury hotel in Beyoğlu.", image: "/images/image1.jpg", map: "#" },
  { slug: "hilton-bosphorus", name: "Hilton Istanbul Bosphorus", desc: "Classic waterfront hotel with Bosphorus views.", image: "/images/25.webp", map: "#" },
  { slug: "boutique-small", name: "Boutique Small Hotel", desc: "Boutique hotels with character.", image: "/images/20.webp", map: "#" },
  { slug: "best-airbnbs", name: "The 10 Best Airbnbs in Istanbul", desc: "Unique stays across the city.", image: "/images/10.webp", map: "#" },
  { slug: "four-seasons-istanbul", name: "Four Seasons Hotel Istanbul at Sultanahmet", desc: "Luxury near Hagia Sophia.", image: "/images/image2.jpg", map: "#" },
  { slug: "ciragan-palace", name: "Ciragan Palace Kempinski", desc: "Palatial hotel on the Bosphorus.", image: "/images/image3.jpg", map: "#" },
  { slug: "raffles-istanbul", name: "Raffles Istanbul", desc: "Modern luxury with panoramic views.", image: "/images/image4.jpg", map: "#" },
  { slug: "shangri-la-bosphorus", name: "Shangri-La Bosphorus", desc: "Five-star comfort near Dolmabahçe.", image: "/images/image5.jpg", map: "#" },
  { slug: "park-hyatt-istanbul", name: "Park Hyatt Istanbul", desc: "Elegant stay in the heart of the city.", image: "/images/image6.jpg", map: "#" },
  { slug: "sofitel-taksim", name: "Sofitel Istanbul Taksim", desc: "Contemporary hotel close to Taksim Square.", image: "/images/image7.jpg", map: "#" },
  { slug: "the-house-hotel-beyoglu", name: "The House Hotel Beyoğlu", desc: "Stylish boutique hotel in a historic building.", image: "/images/image8.jpg", map: "#" },
  { slug: "w-istanbul", name: "W Istanbul", desc: "Trendy design hotel with lively nightlife nearby.", image: "/images/image9.jpg", map: "#" },
  { slug: "adahan-istanbul", name: "Adahan Istanbul", desc: "Charming boutique hotel in Sultanahmet.", image: "/images/image10.jpg", map: "#" },
  { slug: "grand-hyatt-istanbul", name: "Grand Hyatt Istanbul", desc: "Modern amenities and central location.", image: "/images/image11.jpg", map: "#" },
  { slug: "intercontinental-istanbul", name: "InterContinental Istanbul", desc: "Comfortable stay with Bosphorus views.", image: "/images/image12.jpg", map: "#" },
  { slug: "the-marmara-taksim", name: "The Marmara Taksim", desc: "Central location and sweeping panoramas.", image: "/images/image13.jpg", map: "#" },
  { slug: "taksim-hotel", name: "Taksim Hotel", desc: "Good value close to Taksim Square.", image: "/images/image14.jpg", map: "#" },
  { slug: "sultanahmet-inn", name: "Sultanahmet Inn", desc: "Cozy guesthouse steps from the Blue Mosque.", image: "/images/image15.jpg", map: "#" },
  { slug: "nobu-istanbul", name: "Nobu Hotel Istanbul", desc: "Stylish modern hotel with signature dining.", image: "/images/image16.jpg", map: "#" },
  { slug: "w-levent", name: "W Istanbul (Levent)", desc: "Design-forward hotel in the business district.", image: "/images/image17.jpg", map: "#" },
  { slug: "radisson-blu-bosphorus", name: "Radisson Blu Bosphorus", desc: "Comfortable international option on the waterfront.", image: "/images/image18.jpg", map: "#" },
  { slug: "novotel-bosphorus", name: "Novotel Istanbul Bosphorus", desc: "Family-friendly hotel with modern facilities.", image: "/images/image19.jpg", map: "#" },
  { slug: "boutique-istanbul-suites", name: "Boutique Istanbul Suites", desc: "Intimate suites with local character.", image: "/images/35.webp", map: "#" },
  { slug: "city-center-inn", name: "City Center Inn", desc: "Budget-friendly option in the city center.", image: "/images/image4.jpg", map: "#" }
];
