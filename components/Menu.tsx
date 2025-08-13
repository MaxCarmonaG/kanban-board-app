import { FC } from "react";
import Projects from "./Projects";
import Submenu from "./Submenu";
import Thoughts from "./Thoughts";

const Menu: FC = () => (
  <aside className="flex flex-col px-3 py-7.5 border-r border-gainsboro">
    <Submenu />
    <div className="flex flex-col justify-between">
      <Projects />
      <Thoughts />
    </div>
  </aside>
);

export default Menu;
