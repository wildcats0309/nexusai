export interface Vendor {
  id: number;

  name: string;
  customer: string;
  category: string;

  risk: string;
  status: string;
  lastReview: string;

  overallRiskScore?: number;

primaryContact?: {
    name: string;
    title: string;
    email: string;
    phone: string;
  };

  documents?: string[];

certifications?: string[];

assessments?: {
    id: number;
    name: string;
    status: string;
  }[];

  capas?: {
    id: string;
    status: string;
    priority: string;
  }[];
}