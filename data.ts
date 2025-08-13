import { Data } from "./types";

export const data: Data = {
  todo: [
    {
      id: "t1",
      priority: "low",
      title: "Brainstorming",
      description:
        "Brainstorming brings team members' diverse experience into play.",
      images: [],
      comments: 12,
      files: 0,
      avatars: [
        {
          id: "a2",
          alt: "User2",
          src: "/user-2.png",
        },
        {
          id: "a3",
          alt: "User3",
          src: "/user-3.png",
        },
        {
          id: "a4",
          alt: "User4",
          src: "/user-4.png",
        },
      ],
    },
    {
      id: "t6",
      priority: "high",
      title: "Research",
      description:
        "User research helps you to create an optimal product for users.",
      images: [],
      comments: 10,
      files: 13,
      avatars: [
        {
          id: "a2",
          alt: "User2",
          src: "/user-2.png",
        },
        {
          id: "a4",
          alt: "User4",
          src: "/user-4.png",
        },
      ],
    },
    {
      id: "t7",
      priority: "high",
      title: "Wireframes",
      description:
        "Low fidelity wireframes include the most basic content and visuals.",
      images: [],
      comments: 5,
      files: 4,
      avatars: [
        {
          id: "a2",
          alt: "User2",
          src: "/user-2.png",
        },
        {
          id: "a3",
          alt: "User3",
          src: "/user-3.png",
        },
        {
          id: "a4",
          alt: "User4",
          src: "/user-4.png",
        },
      ],
    },
  ],
  onProgress: [
    {
      id: "t2",
      priority: "low",
      title: "Onboarding Illustrations",
      description: "",
      images: [
        {
          id: "i1",
          src: "/image-1.jpg",
          alt: "Image 1",
        },
      ],
      comments: 14,
      files: 15,
      avatars: [
        {
          id: "a2",
          alt: "User2",
          src: "/user-2.png",
        },
        {
          id: "a3",
          alt: "User3",
          src: "/user-3.png",
        },
        {
          id: "a4",
          alt: "User4",
          src: "/user-4.png",
        },
      ],
    },
    {
      id: "t3",
      priority: "high",
      title: "Mood board",
      description: "",
      images: [
        {
          id: "i1",
          src: "/image-3.jpg",
          alt: "Image 3",
        },
        {
          id: "i2",
          src: "/image-4.jpg",
          alt: "Image 4",
        },
      ],
      comments: 8,
      files: 5,
      avatars: [
        {
          id: "a2",
          alt: "User2",
          src: "/user-2.png",
        },
        {
          id: "a4",
          alt: "User4",
          src: "/user-4.png",
        },
      ],
    },
    {
      id: "t4",
      priority: "low",
      title: "Brainstorming",
      description:
        "Brainstorming brings team members' diverse experience into play.",
      images: [],
      comments: 12,
      files: 0,
      avatars: [
        {
          id: "a2",
          alt: "User2",
          src: "/user-2.png",
        },
        {
          id: "a3",
          alt: "User3",
          src: "/user-3.png",
        },
        {
          id: "a4",
          alt: "User4",
          src: "/user-4.png",
        },
      ],
    },
  ],
  done: [
    {
      id: "t5",
      priority: "completed",
      title: "Mobile Design",
      description: "It just needs to adapt the UI from what you did before.",
      images: [
        {
          id: "i2",
          src: "/image-2.jpg",
          alt: "Image 2",
        },
      ],
      comments: 12,
      files: 15,
      avatars: [
        {
          id: "a3",
          alt: "User3",
          src: "/user-3.png",
        },
        {
          id: "a4",
          alt: "User4",
          src: "/user-4.png",
        },
      ],
    },
  ],
};
