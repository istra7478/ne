// app/dictionary/[word]/page.tsx
import { Metadata } from "next";

type Props = { params: { word: string } };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const word = params.word;
  return {
    title: `${word} - English ↔ Turkish Dictionary`,
    description: `Learn the meaning, examples, and pronunciation of ${word}.`,
    openGraph: {
      title: `${word} - Dictionary`,
      description: `Discover ${word} with examples and audio.`,
      url: `https://yourdomain.com/dictionary/${word}`,
    },
  };
}

export default function WordPage({ params }: Props) {
  const { word } = params;
  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold">{word}</h1>
      <p>Meaning in Turkish: ...</p>
      <p>Examples: ...</p>
      <button>🔊 Play Pronunciation</button>
    </main>
  );
}
