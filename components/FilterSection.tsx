import Image from "next/image";
import OutlineButton from "./OutlineButton";
import ArrowIcon from "@/public/arrow-down.svg";

const FilterSection = () => (
  <div className="flex justify-between align-center mb-10.5">
    <div className="flex align-center gap-x-3 font-medium">
      <OutlineButton>
        <div className="flex align-center gap-x-1.5">
          <Image src="/filter.svg" alt="Filter Icon" width={16} height={16} />
          <span>Filter</span>
        </div>
        <ArrowIcon width={16} height={16} />
      </OutlineButton>
      <OutlineButton>
        <div className="flex align-center gap-x-1.5">
          <Image
            src="/calendar.svg"
            alt="Calendar Icon"
            width={16}
            height={16}
          />
          <span>Today</span>
        </div>
        <ArrowIcon width={16} height={16} />
      </OutlineButton>
    </div>
    <div className="flex items-center">
      <OutlineButton>
        <div className="flex align-center gap-x-1.5">
          <Image
            src="/profile-2user.svg"
            alt="Profile Icon"
            width={16}
            height={16}
          />
          <span>Share</span>
        </div>
      </OutlineButton>
      <div className="mx-5 my-1.5 w-px h-7 bg-foreground" />
      <div className="flex align-center gap-x-5.5">
        <Image src="/pause.svg" alt="Pause Icon" width={40} height={40} />
        <Image src="/menu.svg" alt="Menu Icon" width={21} height={21} />
      </div>
    </div>
  </div>
);

export default FilterSection;
