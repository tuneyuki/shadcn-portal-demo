import Hero from "@/components/Hero";
import Header from "@/components/Header";
import KnowledgeGrid from "@/components/KnowledgeGrid";
import Footer from "@/components/Footer";
import { knowledgeItems } from "@/data/knowledgeItems";
import NewContentCarousel from "@/components/NewContentCarousel";
import TwoColumnItems from "@/components/DataaiColumnItems";


export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground font-sans">
      <Header />
      <Hero />
      <NewContentCarousel />
      <TwoColumnItems />
      <KnowledgeGrid items={knowledgeItems} />
      <Footer />
    </main>
  );
}
