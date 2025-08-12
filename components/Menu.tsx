import { FC } from "react";
import Projects from "./Projects";
import Submenu from "./Submenu";
import Thoughts from "./Thoughts";

const Menu: FC = () => (
  <aside className="px-3 py-7.5 border-r border-gainsboro">
    <Submenu />
    <Projects />
    <Thoughts />
  </aside>
);

export default Menu;
