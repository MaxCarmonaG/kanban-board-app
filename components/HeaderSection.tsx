import { FC } from "react";
import Image from "next/image";

type Avatar = {
  id: string;
  title: string;
  src: string;
};

const data: Avatar[] = [
  {
    id: "a2",
    title: "User2 Avatar",
    src: "/user-2.png",
  },
  {
    id: "a3",
    title: "User3 Avatar",
    src: "/user-3.png",
  },
  {
    id: "a4",
    title: "User4 Avatar",
    src: "/user-4.png",
  },
  {
    id: "a5",
    title: "User5 Avatar",
    src: "/user-5.png",
  },
];

const totalUsers = 6;

const HeaderSection: FC = () => {
  const remainingUsers = totalUsers - data.length;

  return (
    <div className="flex justify-between items-center mb-10">
      <div className="flex items-center gap-x-5">
        <h1 className="text-dark font-semibold text-h1">Mobile App</h1>
        <div className="flex gap-x-3">
          <button>
            <Image src="/edit.svg" alt="Edit Icon" width={30} height={30} />
          </button>
          <button>
            <Image src="/link.svg" alt="Link Icon" width={30} height={30} />
          </button>
        </div>
      </div>
      <div className="flex items-center gap-x-5">
        <div className="flex items-center gap-x-2">
          <button>
            <Image
              src="/add-square.svg"
              alt="Add Icon"
              width={18}
              height={18}
            />
          </button>
          <span className="font-semibold text-purple">Invite</span>
        </div>
        <div className="flex items-center">
          {data.map(({ id, title, src }) => (
            <Image
              key={id}
              src={src}
              alt={title}
              width={38}
              height={38}
              className={`rounded-full border border-white -ml-2`}
            />
          ))}
          {remainingUsers > 0 && (
            <span className="w-9.5 h-9.5 leading-9.5 text-center text-danger font-semibold bg-danger-bg rounded-full border border-white -ml-2">
              +{remainingUsers}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default HeaderSection;
