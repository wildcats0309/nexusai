"use client";

import EvidenceWorkspace from "./EvidenceWorkspace";
import { getQualificationDecision } from "@/lib/assessment/getQualificationDecision";
import { calculateRisk } from "@/lib/assessment/calculateRisk";
import { getRequiredEvidence } from "@/lib/assessment/getRequiredEvidence";
import { generateAssessmentSummary } from "@/lib/ai/generateAssessmentSummary";
import AssessmentResults from "./AssessmentResults";
import { useState } from "react";

import type { Vendor } from "@/lib/types/vendor";

import VendorProfileHeader from "./VendorProfileHeader";
import VendorTabs from "./VendorTabs";
import PrimaryContactCard from "./PrimaryContactCard";
import QualificationStatusCard from "./QualificationStatusCard";
import DocumentsCard from "./DocumentsCard";
import RequirementsMatrixCard from "./RequirementsMatrixCard";
import CapaCard from "./CapaCard";
import ActivityTimeline from "./ActivityTimeline";
import AssessmentModal from "./AssessmentModal";

type Props = {
  vendor: Vendor;
};

export default function VendorWorkspace({
  vendor,
}: Props) {
  const [showAssessment, setShowAssessment] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [showReport, setShowReport] = useState(false);
  const [assessmentResult, setAssessmentResult] = useState<
  ReturnType<typeof calculateRisk> | null
>(null);
const [requiredEvidence, setRequiredEvidence] = useState<
  ReturnType<typeof getRequiredEvidence>
>([]);

const [qualificationDecision, setQualificationDecision] =
  useState<ReturnType<
    typeof getQualificationDecision
  > | null>(null);
  
  const [assessmentSummary, setAssessmentSummary] =
  useState("");

  const [activeTab, setActiveTab] = useState<
  "overview" | "documents" | "requirements" | "capas" | "activity" | "evidence"
>("overview");


  return (
    <>
      <VendorProfileHeader
  vendor={vendor}
  onRunAssessment={() => setShowAssessment(true)}
/>

      <VendorTabs
  activeTab={activeTab}
  onTabChange={setActiveTab}
/>

      {activeTab === "overview" && (
  <>
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
      <PrimaryContactCard vendor={vendor} />
      <QualificationStatusCard vendor={vendor} />
    </div>

    <DocumentsCard vendor={vendor} />

    <RequirementsMatrixCard />

    <CapaCard vendor={vendor} />

    <ActivityTimeline
      activities={[
        {
          date: "Today",
          title: "Vendor Profile Updated",
          description: "Vendor information was updated.",
        },
        {
          date: "Aug 8",
          title: "SOC 2 Certificate Uploaded",
          description: "New compliance documentation received.",
        },
        {
          date: "Aug 1",
          title: "CAPA Created",
          description: "Corrective action opened for supplier quality.",
        },
        {
          date: "Jul 15",
          title: "Vendor Approved",
          description: "Vendor completed qualification process.",
        },
      ]}
    />
  </>
)}

{activeTab === "evidence" && (
  <EvidenceWorkspace
    evidence={requiredEvidence}
  />
)}

     <AssessmentModal
  open={showAssessment}
  onClose={() => setShowAssessment(false)}
  onComplete={(answers) => {
  console.log("Assessment complete");
  console.log(answers);

const result = calculateRisk(answers);
const evidence = getRequiredEvidence(answers);
alert(`Evidence Count: ${evidence.length}`);
const decision = getQualificationDecision(
  result,
  evidence
);
const summary = generateAssessmentSummary(
  result,
  evidence,
  decision
);

setAssessmentResult(result);
setRequiredEvidence(evidence);
setQualificationDecision(decision);
setAssessmentSummary(summary);
setShowAssessment(false);
setShowResults(true);
}}
/>

{showResults && assessmentResult && (
  <AssessmentResults
  result={assessmentResult}
  evidence={requiredEvidence}
  decision={qualificationDecision!}
  summary={assessmentSummary}
  onClose={() => {
    setShowResults(false);
    setAssessmentResult(null);
    // setRequiredEvidence([]);
    setQualificationDecision(null);
  }}
/>
)}
    </>
  );
}