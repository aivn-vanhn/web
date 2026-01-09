import { MOCK_TOPICS } from "./mockTopics";

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

export { MOCK_TOPICS as TOPICS } from "./mockTopics";

export function generateRandomTopics(
  _seed: string,
  count: number = 16,
  excludeTopicIds: string[] = []
): Topic[] {
  const excludeSet = new Set(excludeTopicIds);
  const topics =
    excludeTopicIds.length > 0
      ? MOCK_TOPICS.filter((topic) => !excludeSet.has(topic.id))
      : MOCK_TOPICS;

  if (topics.length === 0) return [];

  return topics.slice(0, Math.min(count, topics.length));
}
