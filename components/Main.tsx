import { FC } from "react";
import HeaderSection from "./HeaderSection";
import FilterSection from "./FilterSection";
import Board from "./Board";

const Main: FC = () => (
  <main className="px-12 pt-10 overflow-x-auto">
    <HeaderSection />
    <FilterSection />
    <Board />
  </main>
);

export default Main;
