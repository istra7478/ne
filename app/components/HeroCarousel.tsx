// app/components/HeroCarousel.tsx
"use client";
import { useEffect, useState } from "react";

const slides = [
  { title: "The 10 Best Airbnbs in Istanbul", subtitle: "Unique stays across the city", image: "/images/10.webp" },
  { title: "The 20 best small hotels of Istanbul", subtitle: "Boutique hotels with character", image: "/images/20.webp" },
  { title: "The 25 best hotels in Istanbul", subtitle: "Where to stay for every budget", image: "/images/25.webp" },
  { title: "The 35 best things to do in Istanbul", subtitle: "Top experiences, sights and hidden gems", image: "/images/35.webp" },
];

export default function HeroCarousel() {
  const [index, setIndex] = useState(0);
  const duration = 5000;

  useEffect(() => {
    const t = setInterval(() => setIndex((p) => (p + 1) % slides.length), duration);
    return () => clearInterval(t);
  }, [duration]);

  const mobileVars = { ["--progress-duration" as any]: `${duration}ms` };

  return (
    <section className="hero-carousel">
      {slides.map((s, i) => (
        <div
          key={i}
          className={`slide ${i === index ? "active" : ""}`}
          style={{ backgroundImage: `url(${s.image})` }}
        />
      ))}

      <div className="hero-content">
        <h1 className="hero-title">{slides[index].title}</h1>
        <p className="hero-sub">{slides[index].subtitle}</p>
      </div>

      <div className="hero-controls">
        {slides.map((s, i) => (
          <button
            key={i}
            className={`control ${i === index ? "active" : ""}`}
            onClick={() => setIndex(i)}
            aria-pressed={i === index}
          >
            <span className="control-title">{s.title}</span>
            <div className={`bar ${i === index ? "active" : ""}`}>
              <div className="fill" />
            </div>
          </button>
        ))}
      </div>

      <div className="hero-mobile" style={mobileVars}>
        <h2 className="mobile-title">{slides[index].title}</h2>
        <div className="mobile-bars" role="list">
          {slides.map((_, i) => (
            <div key={i} className={`mobile-bar ${i === index ? "active" : ""}`} role="listitem" aria-current={i === index}>
              <div className="fill" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
