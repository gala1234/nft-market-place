import { Hero } from "../components/Hero";
import { TrendingCollections } from "../components/TrendingCollections";
import { LiveAuctions } from "../components/LiveAuctions";

export default function Home() {
  return (
    <>
      <Hero />
      <TrendingCollections />
      <LiveAuctions />
    </>
  );
}
