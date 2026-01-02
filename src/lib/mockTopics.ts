export interface Topic {
  id: string;
  title: string;
  description: string;
  theme: {
    primary: string;
    secondary: string;
    gradientFrom: string;
    gradientTo: string;
    border: string;
  };
}

export const MOCK_TOPICS: Topic[] = [
  {
    id: "659242b1-58f7-4c5c-99d3-2917f1fd4951",
    title: "School",
    description:
      "Explore topics related to school, education, and learning environments.",
    theme: {
      primary: "#3B82F6",
      secondary: "#2563EB",
      gradientFrom: "#DBEAFE",
      gradientTo: "#BFDBFE",
      border: "#3B82F6",
    },
  },
  {
    id: "0f182a9d-fb71-4fe0-a055-d73c6b3b777d",
    title: "Study",
    description:
      "Learn about effective study methods, techniques, and academic success.",
    theme: {
      primary: "#8B5CF6",
      secondary: "#7C3AED",
      gradientFrom: "#EDE9FE",
      gradientTo: "#DDD6FE",
      border: "#8B5CF6",
    },
  },
  {
    id: "fa0e505e-2e05-4637-8525-6235efba7d9d",
    title: "Fire Safety",
    description:
      "Important safety information about fire prevention and emergency procedures.",
    theme: {
      primary: "#EF4444",
      secondary: "#DC2626",
      gradientFrom: "#FEE2E2",
      gradientTo: "#FECACA",
      border: "#EF4444",
    },
  },
  {
    id: "4710ec29-893e-4559-9de7-ef3128b76213",
    title: "Environment",
    description:
      "Discover ways to protect our planet and understand environmental issues.",
    theme: {
      primary: "#10B981",
      secondary: "#059669",
      gradientFrom: "#D1FAE5",
      gradientTo: "#A7F3D0",
      border: "#10B981",
    },
  },
  {
    id: "1092115f-1230-482c-b9da-a8878be480cf",
    title: "E-Learning",
    description:
      "Explore digital learning platforms and online education opportunities.",
    theme: {
      primary: "#06B6D4",
      secondary: "#0891B2",
      gradientFrom: "#CFFAFE",
      gradientTo: "#A5F3FC",
      border: "#06B6D4",
    },
  },
  {
    id: "2b4c8d03-a634-4dcc-972f-5d36e476a35a",
    title: "Outdoor activities",
    description:
      "Enjoy nature, sports, and outdoor adventures for a healthy lifestyle.",
    theme: {
      primary: "#F59E0B",
      secondary: "#D97706",
      gradientFrom: "#FEF3C7",
      gradientTo: "#FDE68A",
      border: "#F59E0B",
    },
  },
  {
    id: "d7d11ab5-9ecd-481e-a3c9-8757d8f7d62c",
    title: "Technology",
    description:
      "Stay updated with the latest technological innovations and trends.",
    theme: {
      primary: "#6366F1",
      secondary: "#4F46E5",
      gradientFrom: "#E0E7FF",
      gradientTo: "#C7D2FE",
      border: "#6366F1",
    },
  },
  {
    id: "5b0f3b3e-a779-467d-a8e0-fba52ff82114",
    title: "Future Jobs",
    description:
      "Learn about career opportunities and skills needed for tomorrow's workforce.",
    theme: {
      primary: "#EC4899",
      secondary: "#DB2777",
      gradientFrom: "#FCE7F3",
      gradientTo: "#FBCFE8",
      border: "#EC4899",
    },
  },
  {
    id: "396b4674-74ca-4408-be71-8ac08a4f1af9",
    title: "Holidays",
    description:
      "Celebrate and learn about different holidays and traditions around the world.",
    theme: {
      primary: "#F97316",
      secondary: "#EA580C",
      gradientFrom: "#FFEDD5",
      gradientTo: "#FED7AA",
      border: "#F97316",
    },
  },
  {
    id: "c8844978-e78f-402d-bb70-4d26e2ef4abb",
    title: "Family",
    description:
      "Understand family relationships, values, and the importance of family bonds.",
    theme: {
      primary: "#14B8A6",
      secondary: "#0D9488",
      gradientFrom: "#CCFBF1",
      gradientTo: "#99F6E4",
      border: "#14B8A6",
    },
  },
  {
    id: "6ebb72a1-dd3b-4832-80f1-9798643a40e9",
    title: "Friend",
    description:
      "Build meaningful friendships and learn about social connections.",
    theme: {
      primary: "#A855F7",
      secondary: "#9333EA",
      gradientFrom: "#F3E8FF",
      gradientTo: "#E9D5FF",
      border: "#A855F7",
    },
  },
  {
    id: "84e549c2-5c1a-4089-b363-d7e2f3516ce1",
    title: "Music",
    description:
      "Explore different music genres, instruments, and musical expressions.",
    theme: {
      primary: "#8B5CF6",
      secondary: "#7C3AED",
      gradientFrom: "#EDE9FE",
      gradientTo: "#DDD6FE",
      border: "#8B5CF6",
    },
  },
  {
    id: "8744fdd8-3446-4afa-b201-9af9783c5234",
    title: "Sport",
    description:
      "Stay active and learn about various sports, fitness, and healthy competition.",
    theme: {
      primary: "#EF4444",
      secondary: "#DC2626",
      gradientFrom: "#FEE2E2",
      gradientTo: "#FECACA",
      border: "#EF4444",
    },
  },
  {
    id: "b38a1bf9-2d1d-4b64-a366-3b6114c530cc",
    title: "Weather",
    description:
      "Understand weather patterns, climate, and how weather affects our daily lives.",
    theme: {
      primary: "#0EA5E9",
      secondary: "#0284C7",
      gradientFrom: "#E0F2FE",
      gradientTo: "#BAE6FD",
      border: "#0EA5E9",
    },
  },
  {
    id: "70ac4dc7-9744-4910-9b82-9c79bb0495b0",
    title: "Travel",
    description:
      "Discover new places, cultures, and adventures through travel experiences.",
    theme: {
      primary: "#06B6D4",
      secondary: "#0891B2",
      gradientFrom: "#CFFAFE",
      gradientTo: "#A5F3FC",
      border: "#06B6D4",
    },
  },
  {
    id: "6d05e48d-6d67-4a14-b762-5699d14d3257",
    title: "Clothes",
    description:
      "Learn about fashion, clothing styles, and dressing for different occasions.",
    theme: {
      primary: "#EC4899",
      secondary: "#DB2777",
      gradientFrom: "#FCE7F3",
      gradientTo: "#FBCFE8",
      border: "#EC4899",
    },
  },
];
