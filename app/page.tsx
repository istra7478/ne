// app/page.tsx
import HeroCarousel from "./components/HeroCarousel";
import { hotels } from "@/data/hotels";
import Link from "next/link";
import Image from "next/image";

export default function Page() {
  return (
    <div>
      <HeroCarousel />

      <header className="navbar" style={{ marginTop: 16 }}>
        <div className="nav-container">
          <div className="logo">Istralife</div>
         
        </div>
      </header>

      <main className="container" style={{ padding: "28px 20px" }}>
        <h1>The 25 best hotels in Istanbul</h1>
        <p className="subtitle">Palatial luxury along the Bosphorus...</p>
        <div className="meta" style={{ marginTop: 12 }}>
          <span>April 2026</span>
          <button className="share-btn" style={{ marginLeft: 12 }}>Share</button>
        </div>
      </main>

      <section className="hotels-list" style={{ padding: "20px", maxWidth: 1200, margin: "0 auto" }}>
        {hotels.map((hotel, index) => (
          <article key={hotel.slug} className="hotel-card" style={{ marginBottom: 28 }}>
            <header className="hotel-header" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <h2 style={{ margin: 0 }}>{index + 1}. {hotel.name}</h2>
            </header>

            <div style={{ display: "flex", gap: 16, marginTop: 12, alignItems: "flex-start", flexWrap: "wrap" }}>
              <div style={{ width: 320, height: 200, position: "relative", borderRadius: 8, overflow: "hidden" }}>
                <Image src={hotel.image} alt={hotel.name} fill style={{ objectFit: "cover" }} sizes="(max-width:768px) 100vw, 320px" priority={index < 2} />
              </div>

              <div style={{ flex: 1, minWidth: 220 }}>
                <p className="hotel-desc" style={{ marginTop: 0 }}>{hotel.desc}</p>

                <div className="actions" style={{ marginTop: 12, display: "flex", gap: 12 }}>
                  <Link href={`/hotels/${hotel.slug}`} className="read-more-btn">
                    <button style={{ padding: "8px 12px", borderRadius: 6, background: "#e50914", color: "#fff", border: "none" }}>Read More</button>
                  </Link>

                  {hotel.map && hotel.map !== "#" && (
                    <a href={hotel.map} target="_blank" rel="noopener noreferrer" className="price-btn">
                      <button style={{ padding: "8px 12px", borderRadius: 6, background: "#fff", color: "#000", border: "1px solid #ddd" }}>Check Location</button>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </article>
        ))}
      </section>
    </div>
  );


}



TEST 123