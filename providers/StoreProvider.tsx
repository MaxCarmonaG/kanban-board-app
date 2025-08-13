"use client";

import { FC, PropsWithChildren, useState } from "react";
import StoreContext from "./StoreContext";
import { defaultData } from "@/data";
import { AnyData, BoardDataType, StatusType } from "@/types";
import { DragEndEvent, DragStartEvent } from "@dnd-kit/core";
import { CardProps } from "@/components/Card";

const StoreProvider: FC<PropsWithChildren> = ({ children }) => {
  const [boardData, setBoardData] = useState<BoardDataType[]>(defaultData);

  const projectsList = boardData.map(({ id, title, isActive, color }) => ({
    id,
    title,
    isActive,
    color,
  }));

  const handleCurrentBoard = (id: string) =>
    setBoardData((prev) =>
      prev.map((board) =>
        board.id === id
          ? { ...board, isActive: true }
          : { ...board, isActive: false }
      )
    );

  const currentBoard =
    boardData.find(({ isActive }) => isActive)?.board ?? defaultData[0].board;

  const statusKeys = Object.keys(currentBoard) as StatusType[];
  const [activeData, setActiveData] = useState<AnyData>();

  const onDragStartHandler = ({ active }: DragStartEvent) =>
    setActiveData(active?.data?.current);

  const onDragEndHandler = ({ active, over }: DragEndEvent) => {
    setBoardData((prev) => {
      let activeData;
      let overId;

      if (active?.data?.current) {
        activeData = active.data.current as CardProps;
      }

      if (over?.id) {
        overId = over.id as StatusType;
      }

      if (!activeData || !overId || activeData.status === overId) {
        return prev;
      }

      const currentIndex = prev.findIndex(({ isActive }) => isActive);

      const newSourceTasks = prev[currentIndex].board[activeData.status].filter(
        (task) => task.id !== activeData.id
      );
      const newDestinationTasks = [
        ...prev[currentIndex].board[overId],
        { ...activeData, status: overId },
      ];

      return prev.toSpliced(currentIndex, 1, {
        ...prev[currentIndex],
        board: {
          ...prev[currentIndex].board,
          [activeData.status]: newSourceTasks,
          [overId]: newDestinationTasks,
        },
      });
    });

    setActiveData(undefined);
  };

  return (
    <StoreContext.Provider
      value={{
        projectsList,
        handleCurrentBoard,
        currentBoard,
        statusKeys,
        activeData,
        onDragStartHandler,
        onDragEndHandler,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

export default StoreProvider;
