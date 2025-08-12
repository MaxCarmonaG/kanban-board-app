import Header from "@/components/Header";
import Navigation from "@/components/Navigation";
import Image from "next/image";
import Menu from "@/components/Menu";
import HeaderSection from "@/components/HeaderSection";
import OutlineButton from "@/components/OutlineButton";
import ArrowIcon from "@/public/arrow-down.svg";
import FilterSection from "@/components/FilterSection";
import DotIcon from "@/public/dot.svg";

export default function Home() {
  return (
    <div className="grid grid-rows-[auto_1fr] grid-cols-[250px_1fr] max-w-[1440px]  bg-white rounded-[30px] overflow-hidden">
      <Header />
      <Navigation />
      <Menu />
      <main className="px-12 py-10">
        <HeaderSection />
        <FilterSection />
        <div className="flex gap-x-4">
          <div className="p-5 bg-whitesmoke rounded-2xl">
            <div className="flex items-center justify-between border-b border-purple pb-5">
              <div className="flex items-center gap-x-3">
                <div className="flex items-center gap-x-2">
                  <DotIcon width={8} height={8} className="text-purple" />
                  <span className="text-dark font-medium">To Do</span>
                </div>
                <span className="w-5 h-5 bg-gainsboro rounded-full text-center text-xs/5">
                  4
                </span>
              </div>
              <Image src="/add-square.svg" alt="Add" width={24} height={24} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
