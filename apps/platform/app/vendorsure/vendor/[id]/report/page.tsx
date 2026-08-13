import QualificationReport from "@/components/vendorsure/QualificationReport";

export default function QualificationReportPage() {
  return (
    <main className="mx-auto max-w-7xl p-8">
      <QualificationReport
        vendorName="Intel Corporation"
        result={{
          totalScore: 75,
          riskLevel: "High",
          recommendations: [
            "Execute a Business Associate Agreement.",
            "Review all open CAPAs.",
            "Verify ISO 13485 certification.",
          ],
          categoryScores: {
            Compliance: 55,
            Security: 10,
            Quality: 20,
            Operations: 5,
            Financial: 0,
            Business: 0,
          },
        }}
        decision={{
          status: "Not Ready",
          reasons: [
            "Critical evidence is missing.",
            "Compliance requirements are incomplete.",
          ],
          nextSteps: [
            "Collect required evidence.",
            "Complete QA review.",
            "Approve once evidence is verified.",
          ],
        }}
        evidence={[
          {
            id: "baa",
            name: "Business Associate Agreement",
          },
          {
            id: "iso13485",
            name: "ISO 13485 Certificate",
          },
          {
            id: "capa",
            name: "Current CAPA Log",
          },
        ]}
        summary={`Intel presents a High Risk supplier profile.

The assessment identified elevated compliance and quality risk.

Vendor approval is not recommended until all required evidence has been reviewed.`}
      />
    </main>
  );
}