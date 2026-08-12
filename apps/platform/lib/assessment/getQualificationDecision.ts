import { AssessmentResult } from "./calculateRisk";
import { EvidenceItem } from "./requiredEvidence";

export type QualificationDecision = {
  status: "Ready" | "Needs Review" | "Not Ready";

  reasons: string[];

  nextSteps: string[];
};

export function getQualificationDecision(
  result: AssessmentResult,
  evidence: EvidenceItem[]
): QualificationDecision {
  const reasons: string[] = [];
  const nextSteps: string[] = [];

  if (result.riskLevel === "High") {
    reasons.push("Overall vendor risk is High.");
  }

  if (evidence.length > 0) {
    reasons.push("Required evidence is still outstanding.");

    nextSteps.push(
      "Collect and review all required evidence."
    );
  }

  if (result.recommendations.length > 0) {
    nextSteps.push(
      ...result.recommendations
    );
  }

  let status: QualificationDecision["status"];

  if (result.riskLevel === "High") {
    status = "Not Ready";
  } else if (evidence.length > 0) {
    status = "Needs Review";
  } else {
    status = "Ready";
  }

  return {
    status,
    reasons,
    nextSteps,
  };
}