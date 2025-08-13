"use client";

import Image from "next/image";
import { FC } from "react";
import MeatballsIcon from "@/public/meatballs.svg";
import { Task } from "@/types";
import { useDraggable } from "react-beautiful-dragify";

interface CardProps extends Task {
  index: number;
}

const Card: FC<CardProps> = ({
  id,
  priority,
  title,
  description,
  images,
  avatars,
  comments,
  files,
  index,
}) => {
  const { draggableProps, dragHandleProps } = useDraggable({
    id: id,
    type: "task",
    index: index,
  });

  const baseTagStyle = "capitalize text-xs/6 font-medium rounded-sm px-1.5";

  const priorityStyles = {
    low: `${baseTagStyle} text-warning bg-warning-bg`,
    high: `${baseTagStyle} text-danger bg-danger-bg`,
    completed: `${baseTagStyle} text-success bg-success-bg`,
  }[priority];

  return (
    <article
      className="p-5 bg-white rounded-2xl"
      {...dragHandleProps}
      {...draggableProps}
    >
      <div className="flex items-center justify-between mb-1">
        <span className={priorityStyles}>{priority}</span>
        <button aria-label="More Options">
          <MeatballsIcon className="text-dark" />
        </button>
      </div>
      <h3 className="text-h3 text-dark pb-1.5">{title}</h3>
      {description && <p className="text-xs mb-7">{description}</p>}
      {!!images.length && (
        <div
          className={`mb-7 ${
            images.length > 1 ? "grid grid-cols-2 gap-3" : ""
          }`}
        >
          {images.map((image) => (
            <div className="relative w-full h-25" key={image.id}>
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="rounded-lg"
                objectFit="contain"
              />
            </div>
          ))}
        </div>
      )}
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          {avatars.map(({ id, alt, src }, idx, arr) => (
            <Image
              key={id}
              src={src}
              alt={alt}
              width={24}
              height={24}
              style={{ zIndex: arr.length - idx }}
              className="rounded-full border border-white -mr-1"
            />
          ))}
        </div>
        <div className="flex gap-x-3.5">
          <div className="flex items-center gap-x-1">
            <Image
              src="/message.svg"
              alt="Comment Icon"
              width={16}
              height={16}
            />
            <span className="text-xs">{comments} comments</span>
          </div>
          <div className="flex items-center gap-x-1">
            <Image src="/folder.svg" alt="Folder Icon" width={16} height={16} />
            <span className="text-xs">{files} files</span>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Card;
