import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import RecentProjects from "@/components/RecentProjects";
import Skills from "@/components/Skills";
import CustomCursor from "@/components/ui/CustomCursor";
import { FloatingNav } from "@/components/ui/FloatingNav";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-ink text-cream">
      <CustomCursor />
      <div className="noise-overlay" />
      <FloatingNav />
      <Hero />
      <Grid />
      <RecentProjects />
      <Skills />
      <Experience />
      <Footer />
    </main>
  );
}
