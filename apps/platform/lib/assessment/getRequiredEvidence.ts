import { requiredEvidence, EvidenceItem } from "./requiredEvidence";

export function getRequiredEvidence(
  answers: Record<string, string>
): EvidenceItem[] {
  const evidence = new Map<string, EvidenceItem>();

  for (const [questionId, answerId] of Object.entries(answers)) {
    // Only require evidence for "yes" answers
    if (answerId !== "yes") continue;

    const items = requiredEvidence [questionId];

    if (!items) continue;

    for (const item of items) {
      evidence.set(item.id, item);
    }
  }

  return Array.from(evidence.values());
}