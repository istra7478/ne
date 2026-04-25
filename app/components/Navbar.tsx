// app/components/Navbar.tsx
"use client";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="navbar">
      <Link href="/cities" className="nav-item"> Explore Cities</Link>
      <Link href="/markets" className="nav-item">  Markets</Link>
      <Link href="/restaurants" className="nav-item">Restaurants & Cafes</Link>
      <Link href="/things-to-do" className="nav-item"> Things to Do</Link>
      <Link href="/film" className="nav-item">Film</Link>
      <Link href="/music" className="nav-item"> Music & Nightlife</Link>
      <Link href="/art" className="nav-item"> Art & Culture</Link>
      <Link href="/shopping" className="nav-item"> Shopping</Link>
      <Link href="/hotels" className="nav-item">Hotels</Link>
    </nav>
  );
}
