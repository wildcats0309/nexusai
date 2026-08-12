"use client";
import { calculateRisk } from "@/lib/assessment/calculateRisk";
import { getRequiredEvidence } from "@/lib/assessment/getRequiredEvidence";
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
  const [assessmentResult, setAssessmentResult] = useState<
  ReturnType<typeof calculateRisk> | null
>(null);
const [requiredEvidence, setRequiredEvidence] = useState<
  ReturnType<typeof getRequiredEvidence>
>([]);
  return (
    <>
      <VendorProfileHeader
  vendor={vendor}
  onRunAssessment={() => setShowAssessment(true)}
/>

      <VendorTabs activeTab="overview" />

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

     <AssessmentModal
  open={showAssessment}
  onClose={() => setShowAssessment(false)}
  onComplete={(answers) => {
  console.log("Assessment complete");
  console.log(answers);

  const result = calculateRisk(answers);
  const evidence = getRequiredEvidence(answers);

setAssessmentResult(result);
setRequiredEvidence(evidence);

setShowAssessment(false);
setShowResults(true);
}}
/>

{showResults && assessmentResult && (
  <AssessmentResults
  result={assessmentResult}
  evidence={requiredEvidence}
  onClose={() => {
    setShowResults(false);
    setAssessmentResult(null);
    setRequiredEvidence([]);
  }}
/>
)}
    </>
  );
}