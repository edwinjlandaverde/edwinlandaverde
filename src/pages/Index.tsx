import Nav from "@/components/portfolio/Nav";
import Hero from "@/components/portfolio/Hero";
import BrandsMarquee from "@/components/portfolio/BrandsMarquee";
import About from "@/components/portfolio/About";
import Experience from "@/components/portfolio/Experience";
import Services from "@/components/portfolio/Services";
import Portfolio from "@/components/portfolio/Portfolio";
import AISection from "@/components/portfolio/AISection";
import Stack from "@/components/portfolio/Stack";
import Contact from "@/components/portfolio/Contact";

const Index = () => {
  return (
    <main className="grain min-h-screen bg-background text-foreground">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Edwin Landaverde",
            jobTitle: "Content & Multimedia Strategist",
            email: "hola@edwinlandaverde.com",
            telephone: "+503-7402-2992",
            address: { "@type": "PostalAddress", addressLocality: "Santa Tecla", addressCountry: "SV" },
            url: typeof window !== "undefined" ? window.location.href : "",
            sameAs: ["https://instagram.com/edwinjlandaverde", "https://www.linkedin.com/in/edwinmorenosv/"],
          }),
        }}
      />
      <Nav />
      <Hero />
      <About />
      <Experience />
      <Services />
      <Portfolio />
      <BrandsMarquee />
      <AISection />
      <Stack />
      <Contact />
    </main>
  );
};

export default Index;
