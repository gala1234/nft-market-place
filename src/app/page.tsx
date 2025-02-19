import { Navigation } from "../components/navigation";
import { Hero } from "../components/Hero";
import { TrendingCollections } from "../components/TrendingCollections";
import { LiveAuctions } from "../components/LiveAuctions";

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <div className="container mx-auto px-4 py-25">
        <Navigation />
        <Hero />
        <TrendingCollections />
        <LiveAuctions />
      </div>
    </div>
  );
}
