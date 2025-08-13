import { BoardDataType } from "./types";

export const defaultData: BoardDataType[] = [
  {
    id: "p1",
    title: "Mobile App",
    isActive: true,
    color: "text-green",
    board: {
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
            { id: "a2", alt: "User2", src: "/user-2.png" },
            { id: "a3", alt: "User3", src: "/user-3.png" },
            { id: "a4", alt: "User4", src: "/user-4.png" },
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
            { id: "a2", alt: "User2", src: "/user-2.png" },
            { id: "a4", alt: "User4", src: "/user-4.png" },
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
            { id: "a2", alt: "User2", src: "/user-2.png" },
            { id: "a3", alt: "User3", src: "/user-3.png" },
            { id: "a4", alt: "User4", src: "/user-4.png" },
          ],
        },
      ],
      onProgress: [
        {
          id: "t2",
          priority: "low",
          title: "Onboarding Illustrations",
          description: "",
          images: [{ id: "i1", src: "/image-1.jpg", alt: "Image 1" }],
          comments: 14,
          files: 15,
          avatars: [
            { id: "a2", alt: "User2", src: "/user-2.png" },
            { id: "a3", alt: "User3", src: "/user-3.png" },
            { id: "a4", alt: "User4", src: "/user-4.png" },
          ],
        },
        {
          id: "t3",
          priority: "high",
          title: "Mood board",
          description: "",
          images: [
            { id: "i1", src: "/image-3.jpg", alt: "Image 3" },
            { id: "i2", src: "/image-4.jpg", alt: "Image 4" },
          ],
          comments: 8,
          files: 5,
          avatars: [
            { id: "a2", alt: "User2", src: "/user-2.png" },
            { id: "a4", alt: "User4", src: "/user-4.png" },
          ],
        },
        {
          id: "t4",
          priority: "low",
          title: "Innovation",
          description:
            "Innovation is the process of implementing new ideas to create value, often through the introduction of new products, services, or processes.",
          images: [],
          comments: 12,
          files: 0,
          avatars: [
            { id: "a2", alt: "User2", src: "/user-2.png" },
            { id: "a3", alt: "User3", src: "/user-3.png" },
            { id: "a4", alt: "User4", src: "/user-4.png" },
          ],
        },
      ],
      done: [
        {
          id: "t5",
          priority: "completed",
          title: "Mobile Design",
          description:
            "It just needs to adapt the UI from what you did before.",
          images: [{ id: "i2", src: "/image-2.jpg", alt: "Image 2" }],
          comments: 12,
          files: 15,
          avatars: [
            { id: "a3", alt: "User3", src: "/user-3.png" },
            { id: "a4", alt: "User4", src: "/user-4.png" },
          ],
        },
      ],
    },
  },
  {
    id: "p2",
    title: "Website Redesign",
    isActive: false,
    color: "text-orange",
    board: {
      todo: [
        {
          id: "t8",
          priority: "high",
          title: "Gather Requirements",
          description: "Collect all requirements from stakeholders.",
          images: [],
          comments: 6,
          files: 2,
          avatars: [{ id: "a2", alt: "User2", src: "/user-2.png" }],
        },
      ],
      onProgress: [
        {
          id: "t9",
          priority: "high",
          title: "Create Mockups",
          description: "Design mockups for the new website layout.",
          images: [{ id: "i3", src: "/image-5.jpg", alt: "Image 5" }],
          comments: 3,
          files: 1,
          avatars: [{ id: "a3", alt: "User3", src: "/user-3.png" }],
        },
      ],
      done: [
        {
          id: "t10",
          priority: "completed",
          title: "Initial Meeting",
          description: "Kickoff meeting with the redesign team.",
          images: [],
          comments: 2,
          files: 0,
          avatars: [{ id: "a4", alt: "User4", src: "/user-4.png" }],
        },
      ],
    },
  },
  {
    id: "p3",
    title: "Design System",
    isActive: false,
    color: "text-lavender",
    board: {
      todo: [
        {
          id: "t11",
          priority: "low",
          title: "Audit Components",
          description: "List all UI components used in current projects.",
          images: [],
          comments: 4,
          files: 1,
          avatars: [{ id: "a2", alt: "User2", src: "/user-2.png" }],
        },
      ],
      onProgress: [
        {
          id: "t12",
          priority: "low",
          title: "Define Tokens",
          description: "Define color, spacing, and typography tokens.",
          images: [],
          comments: 5,
          files: 2,
          avatars: [{ id: "a3", alt: "User3", src: "/user-3.png" }],
        },
      ],
      done: [
        {
          id: "t13",
          priority: "completed",
          title: "Design Principles",
          description: "Document the design principles for the system.",
          images: [],
          comments: 1,
          files: 0,
          avatars: [{ id: "a4", alt: "User4", src: "/user-4.png" }],
        },
      ],
    },
  },
  {
    id: "p4",
    title: "Mobile App",
    isActive: false,
    color: "text-blue",
    board: {
      todo: [
        {
          id: "t14",
          priority: "high",
          title: "Setup Project",
          description: "Initialize the mobile app repository and tools.",
          images: [],
          comments: 2,
          files: 1,
          avatars: [{ id: "a2", alt: "User2", src: "/user-2.png" }],
        },
      ],
      onProgress: [
        {
          id: "t15",
          priority: "completed",
          title: "Implement Authentication",
          description: "Add login and registration screens.",
          images: [],
          comments: 3,
          files: 2,
          avatars: [{ id: "a3", alt: "User3", src: "/user-3.png" }],
        },
      ],
      done: [
        {
          id: "t16",
          priority: "completed",
          title: "App Icon",
          description: "Design and export the app icon.",
          images: [{ id: "i4", src: "/image-6.jpg", alt: "Image 6" }],
          comments: 1,
          files: 1,
          avatars: [{ id: "a4", alt: "User4", src: "/user-4.png" }],
        },
      ],
    },
  },
];
