// app/page.tsx
export default function HomePage() {
  return (
    <section className="location-search">
      <div className="location-container">
        <h1>Discover the world’s coolest cities</h1>
        <div className="quick-links">
          <a href="/cities/istanbul">Explore Istanbul</a>
          <a href="/cities/london">Discover London</a>
          <a href="/cities/paris">Paris Highlights</a>
          <a href="/cities/new-york">New York Guide</a>
          <a href="/cities/miami">Miami Tips</a>
          <a href="/cities/all" className="discover-all">Discover All Cities</a>
        </div>
      </div>
    </section>
  );
}
