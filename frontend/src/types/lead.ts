export interface Lead {
    id: string;
    name: string;
    email: string;
    company?: string;
    source?: string;
    score: number;
    status: "new" | "contacted" | "qualified" | "lost" | "converted";
    nextBestAction?: string;
    createdAt: string;
  }