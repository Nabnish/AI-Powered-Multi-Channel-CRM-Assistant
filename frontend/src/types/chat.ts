export interface ChatSummary {
    id: string;
    clientId: string;
    summary: string;
    keyPoints: string[];
    sentiment?: "positive" | "neutral" | "negative";
    createdAt: string;
  }