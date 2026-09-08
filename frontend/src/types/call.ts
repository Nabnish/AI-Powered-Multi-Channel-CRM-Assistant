export interface Call {
    id: string;
    clientId: string;
    clientName: string;
    direction: "inbound" | "outbound";
    status: "completed" | "missed" | "scheduled" | "voicemail";
    durationSeconds?: number;
    summary?: string;
    transcriptAvailable: boolean;
    occurredAt: string;
  }