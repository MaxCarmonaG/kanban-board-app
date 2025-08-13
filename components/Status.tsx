import { FC, PropsWithChildren } from "react";
import Image from "next/image";
import DotIcon from "@/public/dot.svg";
import { StatusType } from "@/types";

interface StatusProps {
  status: StatusType;
  count: number;
}

const Status: FC<PropsWithChildren<StatusProps>> = ({
  children,
  status,
  count,
}) => {
  const baseBorderStyle =
    "flex items-center justify-between border-b-3 pb-5 mb-7";

  const { title, textColor, borderStyle } = {
    todo: {
      title: "To Do",
      textColor: "text-purple",
      borderStyle: `${baseBorderStyle} border-purple`,
    },
    onProgress: {
      title: "On Progress",
      textColor: "text-orange",
      borderStyle: `${baseBorderStyle} border-orange`,
    },
    done: {
      title: "Done",
      textColor: "text-blue",
      borderStyle: `${baseBorderStyle} border-green`,
    },
  }[status];

  return (
    <div className="p-5 bg-whitesmoke rounded-2xl w-88.5">
      <div className={borderStyle}>
        <div className="flex items-center gap-x-3">
          <div className="flex items-center gap-x-2">
            <DotIcon width={8} height={8} className={textColor} />
            <span className="text-dark font-medium">{title}</span>
          </div>
          <span className="w-5 h-5 bg-gainsboro rounded-full text-center text-xs/5">
            {count}
          </span>
        </div>
        {status === "todo" && (
          <Image src="/add-square.svg" alt="Add" width={24} height={24} />
        )}
      </div>
      <div className="flex flex-col gap-y-5">{children}</div>
    </div>
  );
};

export default Status;
