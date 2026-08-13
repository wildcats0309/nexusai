import { AssessmentResult } from "../assessment/calculateRisk";
import { EvidenceItem } from "../assessment/requiredEvidence";
import { QualificationDecision } from "../assessment/getQualificationDecision";

export function generateAssessmentSummary(
  result: AssessmentResult,
  evidence: EvidenceItem[],
  decision: QualificationDecision
) {
  return `
${result.riskLevel} Risk

The vendor assessment identified ${result.riskLevel.toLowerCase()} overall risk.

${evidence.length} required evidence item(s) remain outstanding.

Overall qualification status:

${decision.status}
`;
}