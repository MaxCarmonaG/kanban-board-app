"use client";

import { FC } from "react";
import Card from "./Card";
import Status from "./Status";
import { data } from "@/data";
import { StatusType, Task } from "@/types";
import { DragifyProvider } from "react-beautiful-dragify";

const Board: FC = () => {
  const statuses = Object.keys(data) as StatusType[];
  return (
    <DragifyProvider onDragEnd={() => {}}>
      <section className="flex gap-x-4">
        {statuses.map((status) => (
          <Status key={status} status={status} count={data[status].length}>
            {data[status].map((task, i) => (
              <Card key={task.id} {...task} index={i} />
            ))}
          </Status>
        ))}
      </section>
    </DragifyProvider>
  );
};

export default Board;
