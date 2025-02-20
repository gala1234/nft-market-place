import { Navigation } from "../components/navigation";
import { Hero } from "../components/Hero";
import { TrendingCollections } from "../components/TrendingCollections";
import { LiveAuctions } from "../components/LiveAuctions";

export default function Home() {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-0 md:px-4 pt-[73px] md:py-25">
        <Navigation />
        <Hero />
        <TrendingCollections />
        <LiveAuctions />
      </div>
    </div>
  );
}
