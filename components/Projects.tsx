"use client";

import { FC, useContext } from "react";
import Image from "next/image";
import DotIcon from "@/public/dot.svg";
import MeatballsIcon from "@/public/meatballs.svg";
import { StoreContext } from "@/providers";

type Project = {
  id: string;
  title: string;
  isActive: boolean;
  color: string;
};

const data: Project[] = [
  {
    id: "p1",
    title: "Mobile App",
    isActive: true,
    color: "text-green",
  },
  {
    id: "p2",
    title: "Website Redesign",
    isActive: false,
    color: "text-orange",
  },
  {
    id: "p3",
    title: "Design System",
    isActive: false,
    color: "text-lavender",
  },
  {
    id: "p4",
    title: "Wireframes",
    isActive: false,
    color: "text-blue",
  },
];

const Projects: FC = () => {
  const { projectsList, handleCurrentBoard } = useContext(StoreContext);
  return (
    <div className="flex flex-col justify-between py-7.5">
      <div className="flex items-center justify-between gap-x-2.5 px-2.5 mb-5">
        <span>MY PROJECTS</span>
        <button aria-label="Add Project">
          <Image
            src="/add-square.svg"
            alt="Add Project"
            width={16}
            height={16}
          />
        </button>
      </div>

      <div>
        {projectsList.map(({ id, title, isActive, color }) => (
          <div
            key={id}
            className={`flex gap-x-4 justify-between px-3 py-2.5 ${
              isActive ? "bg-periwinkle rounded-md font-semibold text-dark" : ""
            }`}
          >
            <button onClick={() => handleCurrentBoard(id)}>
              <div className="flex items-center gap-x-4">
                <DotIcon className={color} />
                <span>{title}</span>
              </div>
            </button>
            {isActive && (
              <button aria-label="More Options">
                <MeatballsIcon className="text-dark" />
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
