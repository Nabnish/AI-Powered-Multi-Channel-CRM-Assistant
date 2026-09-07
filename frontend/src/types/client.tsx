export interface Client {
    id: string;
    name: string;
    email: string;
    phone?: string;
    company?: string;
    role?: string;
    tags: string[];
    status: "active" | "inactive" | "prospect";
    avatarUrl?: string;
    lastContactedAt?: string;
    createdAt: string;
  }
export default function Clients() {
    return <h1 className="text-xl font-medium">Contacts</h1>;
  }