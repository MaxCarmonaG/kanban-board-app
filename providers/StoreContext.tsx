"use client";

import { StoreContextType } from "@/types";
import { createContext } from "react";

const StoreContext = createContext<StoreContextType>({
  projectsList: [],
  handleCurrentBoard: () => {},
  currentBoard: { todo: [], onProgress: [], done: [] },
  statusKeys: ["todo", "onProgress", "done"],
  activeData: undefined,
  onDragStartHandler: () => {},
  onDragEndHandler: () => {},
});

export default StoreContext;
