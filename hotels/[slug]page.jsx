import { hotels } from "@/data/hotels";

export default function HotelPage({ params }) {
  const hotel = hotels.find(h => h.slug === params.slug);

  if (!hotel) return <h1>Not Found</h1>;

  return (
    <div className="container">
      <h1>{hotel.name}</h1>

      <img src={hotel.image} alt="" />

      <p>{hotel.desc}</p>

      <a href={hotel.map} target="_blank">
        View on Google Maps
      </a>
    </div>
  );
}