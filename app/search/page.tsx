// app/search/page.tsx
"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SearchPage() {
  const [query, setQuery] = useState("");
  const router = useRouter();

  const handleSearch = () => {
    if (query.trim()) {
      router.push(`/dictionary/${query.toLowerCase()}`);
    }
  };

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold">Dictionary Search</h1>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Enter a word..."
        className="border p-2 mr-2"
      />
      <button onClick={handleSearch} className="bg-blue-500 text-white px-4 py-2">
        Search
      </button>
    </main>
  );
}
