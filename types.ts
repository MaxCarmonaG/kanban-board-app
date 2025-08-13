import { DragEndEvent, DragStartEvent } from "@dnd-kit/core";

export type AvatarType = {
  id: string;
  alt: string;
  src: string;
};

export type TaskType = {
  id: string;
  priority: "low" | "high" | "completed";
  title: string;
  description: string;
  images: {
    id: string;
    src: string;
    alt: string;
  }[];
  comments: number;
  files: number;
  avatars: AvatarType[];
};

export type ProjectDataType = {
  [key in StatusType]: TaskType[];
};

export type BoardDataType = {
  id: string;
  title: string;
  isActive: boolean;
  color: string;
  board: {
    [key in StatusType]: TaskType[];
  };
};

export type StatusType = "todo" | "onProgress" | "done";

export type StoreContextType = {
  projectsList: Omit<BoardDataType, "board">[];
  handleCurrentBoard: (id: string) => void;
  currentBoard: ProjectDataType;
  statusKeys: StatusType[];
  activeData?: AnyData;
  onDragStartHandler: (event: DragStartEvent) => void;
  onDragEndHandler: (event: DragEndEvent) => void;
};

export type AnyData = {
  [x: string]: any;
};
