import Header from "@/components/Header";
import Navigation from "@/components/Navigation";
import Menu from "@/components/Menu";
import HeaderSection from "@/components/HeaderSection";
import FilterSection from "@/components/FilterSection";
import Board from "@/components/Board";
import { StoreProvider } from "@/providers";

export default function Home() {
  return (
    <StoreProvider>
      <div className="grid grid-rows-[auto_1fr] grid-cols-[250px_1fr] max-w-360 bg-white rounded-[30px] overflow-hidden">
        <Header />
        <Navigation />
        <Menu />
        <main className="px-12 py-10 max-h-211">
          <HeaderSection />
          <FilterSection />
          <Board />
        </main>
      </div>
    </StoreProvider>
  );
}
