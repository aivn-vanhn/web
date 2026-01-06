export interface Topic {
  id: string;
  title: string;
  questions: string[];
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
    questions: ["What is your favourite place to study?"],
    theme: {
      primary: "#06B6D4",
      secondary: "#0891B2",
      gradientFrom: "#CFFAFE",
      gradientTo: "#A5F3FC",
      border: "#06B6D4",
    },
  },
  {
    id: "0f182a9d-fb71-4fe0-a055-d73c6b3b777d",
    title: "Study",
    questions: ["How do you usually study or prepare for exams?"],
    theme: {
      primary: "#06B6D4",
      secondary: "#0891B2",
      gradientFrom: "#CFFAFE",
      gradientTo: "#A5F3FC",
      border: "#06B6D4",
    },
  },
  {
    id: "fa0e505e-2e05-4637-8525-6235efba7d9d",
    title: "Fire Safety",
    questions: ["What should students do to help prevent a fire at school?"],
    theme: {
      primary: "#06B6D4",
      secondary: "#0891B2",
      gradientFrom: "#CFFAFE",
      gradientTo: "#A5F3FC",
      border: "#06B6D4",
    },
  },
  {
    id: "4710ec29-893e-4559-9de7-ef3128b76213",
    title: "Environment",
    questions: ["How does technology help us protect the environment?"],
    theme: {
      primary: "#06B6D4",
      secondary: "#0891B2",
      gradientFrom: "#CFFAFE",
      gradientTo: "#A5F3FC",
      border: "#06B6D4",
    },
  },
  {
    id: "1092115f-1230-482c-b9da-a8878be480cf",
    title: "E-Learning",
    questions: [
      "Which method of learning is helpful for students, online or in-person classes?",
    ],
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
    questions: ["How do outdoor activities help us improve our health?"],
    theme: {
      primary: "#06B6D4",
      secondary: "#0891B2",
      gradientFrom: "#CFFAFE",
      gradientTo: "#A5F3FC",
      border: "#06B6D4",
    },
  },
  {
    id: "d7d11ab5-9ecd-481e-a3c9-8757d8f7d62c",
    title: "Technology",
    questions: ["How do robots help people at work?"],
    theme: {
      primary: "#06B6D4",
      secondary: "#0891B2",
      gradientFrom: "#CFFAFE",
      gradientTo: "#A5F3FC",
      border: "#06B6D4",
    },
  },
  {
    id: "5b0f3b3e-a779-467d-a8e0-fba52ff82114",
    title: "Future Jobs",
    questions: ["What is your dream job when you grow up?"],
    theme: {
      primary: "#06B6D4",
      secondary: "#0891B2",
      gradientFrom: "#CFFAFE",
      gradientTo: "#A5F3FC",
      border: "#06B6D4",
    },
  },
  {
    id: "396b4674-74ca-4408-be71-8ac08a4f1af9",
    title: "Holidays",
    questions: ["How do Vietnamese people celebrate public holidays?"],
    theme: {
      primary: "#06B6D4",
      secondary: "#0891B2",
      gradientFrom: "#CFFAFE",
      gradientTo: "#A5F3FC",
      border: "#06B6D4",
    },
  },
  {
    id: "c8844978-e78f-402d-bb70-4d26e2ef4abb",
    title: "Family",
    questions: [
      "Can you describe a special time that you spent with your family?",
    ],
    theme: {
      primary: "#06B6D4",
      secondary: "#0891B2",
      gradientFrom: "#CFFAFE",
      gradientTo: "#A5F3FC",
      border: "#06B6D4",
    },
  },
  {
    id: "6ebb72a1-dd3b-4832-80f1-9798643a40e9",
    title: "Friend",
    questions: [
      "Is it better to have lots of friends or just a few close friends? Why?",
    ],
    theme: {
      primary: "#06B6D4",
      secondary: "#0891B2",
      gradientFrom: "#CFFAFE",
      gradientTo: "#A5F3FC",
      border: "#06B6D4",
    },
  },
  {
    id: "84e549c2-5c1a-4089-b363-d7e2f3516ce1",
    title: "Music",
    questions: ["Tell about studying music at school."],
    theme: {
      primary: "#06B6D4",
      secondary: "#0891B2",
      gradientFrom: "#CFFAFE",
      gradientTo: "#A5F3FC",
      border: "#06B6D4",
    },
  },
  {
    id: "8744fdd8-3446-4afa-b201-9af9783c5234",
    title: "Sport",
    questions: ["Describe a live sport event you've watched before."],
    theme: {
      primary: "#06B6D4",
      secondary: "#0891B2",
      gradientFrom: "#CFFAFE",
      gradientTo: "#A5F3FC",
      border: "#06B6D4",
    },
  },
  {
    id: "b38a1bf9-2d1d-4b64-a366-3b6114c530cc",
    title: "Weather",
    questions: [
      "What's your favorite type of weather? Do you like sunny days or rainy days more?",
    ],
    theme: {
      primary: "#06B6D4",
      secondary: "#0891B2",
      gradientFrom: "#CFFAFE",
      gradientTo: "#A5F3FC",
      border: "#06B6D4",
    },
  },
  {
    id: "70ac4dc7-9744-4910-9b82-9c79bb0495b0",
    title: "Travel",
    questions: [
      "What do you like to do during your travels? Do you prefer going to cities or exploring natural landscapes?",
    ],
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
    questions: [
      "What kind of clothes do you like to wear? Is it a good idea to buy clothes online?",
    ],
    theme: {
      primary: "#06B6D4",
      secondary: "#0891B2",
      gradientFrom: "#CFFAFE",
      gradientTo: "#A5F3FC",
      border: "#06B6D4",
    },
  },
];
