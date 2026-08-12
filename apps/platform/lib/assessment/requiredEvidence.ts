export type EvidenceItem = {
  id: string;
  name: string;
};

export const evidenceMap: Record<string, EvidenceItem[]> = {
  "processes-phi": [
    {
      id: "baa",
      name: "Business Associate Agreement",
    },
  ],

  "soc2": [
    {
      id: "soc2",
      name: "SOC 2 Type II Report",
    },
  ],

  "iso13485": [
    {
      id: "iso13485",
      name: "ISO 13485 Certificate",
    },
  ],

  "quality-audit": [
    {
      id: "audit",
      name: "Latest Quality Audit Report",
    },
  ],

  "open-capas": [
    {
      id: "capa",
      name: "Current CAPA Log",
    },
  ],
};