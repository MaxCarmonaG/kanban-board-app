import Image from "next/image";
import { FC } from "react";

const Header: FC = () => (
  <header className="flex items-center row gap-x-12 py-8 px-6 border-r border-b border-gainsboro">
    <div className="flex gap-x-2">
      <Image
        src="/logo.svg"
        alt="Kanban Board Logo"
        width={24}
        height={24}
        className="h-6 w-6"
      />
      <h2 className="text-h2">Project M.</h2>
    </div>
    <Image
      src="/arrow-left.svg"
      alt="Arrow Left Icon"
      width={20}
      height={20}
      className="h-5 w-5"
    />
  </header>
);

export default Header;
