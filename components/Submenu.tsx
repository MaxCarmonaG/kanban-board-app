import { FC } from "react";
import Image from "next/image";

const data = [
  {
    id: "i1",
    title: "Home",
    src: "/category.svg",
  },
  {
    id: "i2",
    title: "Messages",
    src: "/message.svg",
  },
  {
    id: "i3",
    title: "Tasks",
    src: "/task-square.svg",
  },
  {
    id: "i4",
    title: "Members",
    src: "/profile-2user.svg",
  },
  {
    id: "i5",
    title: "Settings",
    src: "/setting-2.svg",
  },
];

const Submenu: FC = () => {
  return (
    <div className="flex flex-col gap-y-6 pb-7.5 px-2.5 border-b border-gainsboro">
      {data.map(({ id, title, src }) => (
        <div key={id} className="flex items-center gap-x-3.5">
          <Image
            src={src}
            alt={`${title} Icon`}
            width={24}
            height={24}
            className="h-[24px] w-[24px]"
          />
          <span>{title}</span>
        </div>
      ))}
    </div>
  );
};

export default Submenu;
