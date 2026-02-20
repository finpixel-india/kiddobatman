import Hero from "@/components/Hero";
import CartoonsList from "@/components/CartoonsList";
import BatGadgets from "@/components/BatGadgets";
import FlashCards from "@/components/FlashCards";
import Stories from "@/components/Stories";
import BatFacts from "@/components/BatFacts";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-brand-white text-brand-dark selection:bg-brand-pink selection:text-brand-dark overflow-x-hidden">
      {/* Scroll-linked video background acts as Hero */}
      <Hero />

      {/* Content Sections */}
      <div className="relative z-40 bg-brand-white">

        <CartoonsList />

        <BatGadgets />

        <FlashCards />

        <Stories />

        <BatFacts />

        {/* Footer */}
        <footer className="bg-brand-dark text-white text-center py-12 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-4 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMCIgaGVpZ2h0PSIxMCI+PHBhdGggZD0iTTAgMEwxNSAxMEwzMCAwVjEwSDBWMHoiIGZpbGw9IiNGRjlDRUUiLz48L3N2Zz4=')]"></div>
          <p className="text-xl font-bold mt-4">Made with 💖 for Batman Fans</p>
        </footer>

      </div>
    </main>
  );
}
