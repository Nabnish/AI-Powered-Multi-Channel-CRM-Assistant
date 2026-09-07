export interface Email {
    id: string;
    clientId: string;
    clientName: string;
    subject: string;
    snippet: string;
    direction: "inbound" | "outbound";
    status: "sent" | "received" | "draft" | "scheduled";
    intent?: string;
    receivedAt: string;
  }