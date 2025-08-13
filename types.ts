export type Avatar = {
  id: string;
  alt: string;
  src: string;
};

export type Task = {
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
  avatars: Avatar[];
};

export type Data = {
  [key in StatusType]: Task[];
};

export type StatusType = "todo" | "onProgress" | "done";
