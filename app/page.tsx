import Header from "@/components/Header";
import Navigation from "@/components/Navigation";
import Menu from "@/components/Menu";
import { StoreProvider } from "@/providers";
import Main from "@/components/Main";

export default function Home() {
  return (
    <StoreProvider>
      <div className="grid grid-rows-[auto_844px] grid-cols-[250px_1fr] max-w-360 bg-white rounded-[30px] overflow-hidden">
        <Header />
        <Navigation />
        <Menu />
        <Main />
      </div>
    </StoreProvider>
  );
}
