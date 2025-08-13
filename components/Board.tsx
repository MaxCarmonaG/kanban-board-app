"use client";

import { FC, useContext } from "react";
import Status from "./Status";
import { DndContext, DragOverlay } from "@dnd-kit/core";
import Card, { CardProps } from "./Card";
import { StoreContext } from "@/providers";

const Board: FC = () => {
  const {
    statusKeys,
    currentBoard,
    activeData,
    onDragStartHandler,
    onDragEndHandler,
  } = useContext(StoreContext);

  return (
    <DndContext onDragEnd={onDragEndHandler} onDragStart={onDragStartHandler}>
      <div className="flex gap-x-4">
        {statusKeys.map((status) => (
          <Status
            key={status}
            status={status}
            count={currentBoard[status].length}
            tasks={currentBoard[status]}
          />
        ))}
      </div>
      <DragOverlay>
        {activeData ? (
          <div
            className="cursor-grabbing"
            style={{ transform: "rotate(5deg)" }}
          >
            <Card {...(activeData as CardProps)} />
          </div>
        ) : null}
      </DragOverlay>
    </DndContext>
  );
};

export default Board;
