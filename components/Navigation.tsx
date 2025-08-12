import { FC } from "react";
import Image from "next/image";
import ArrowIcon from "@/public/arrow-down.svg";

const Navigation: FC = () => (
  <nav className="flex row justify-between items-center px-12 py-6 border-b border-gainsboro gap-x-14">
    <label className="flex items-center gap-x-4 px-4 py-3 bg-whitesmoke rounded-md">
      <Image
        src="/search-normal.svg"
        alt="Search Icon"
        width={24}
        height={24}
        className="h-6 w-6"
      />
      <input
        name="search"
        type="text"
        placeholder="Search for anything..."
        className="placeholder:text-foreground"
      />
    </label>
    <div className="flex items-center gap-x-14">
      <div className="flex items-center gap-x-6">
        <Image
          src="/calendar-2.svg"
          alt="Calendar Icon"
          width={24}
          height={24}
          className="h-6 w-6"
        />
        <Image
          src="/message-question.svg"
          alt="Message Question Icon"
          width={24}
          height={24}
          className="h-6 w-6"
        />
        <Image
          src="/notification.svg"
          alt="Notification Icon"
          width={24}
          height={24}
          className="h-6 w-6"
        />
      </div>
      <div className="flex items-center gap-x-6">
        <div>
          <div className="text-dark">Anima Agrawal</div>
          <div>U.P, India</div>
        </div>
        <div className="flex items-center justify-between gap-x-2.5">
          <Image
            src="/user-1.png"
            alt="User 1 Icon"
            width={38}
            height={38}
            className="h-[38px] w-[38px] rounded-full"
          />
          <ArrowIcon width={18} height={18} className="text-charcoal" />
        </div>
      </div>
    </div>
  </nav>
);

export default Navigation;
