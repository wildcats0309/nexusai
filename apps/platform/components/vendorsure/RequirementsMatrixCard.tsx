export default function RequirementsMatrixCard() {
  const requirements = [
    {
      requirement: "ISO 9001",
      status: "Complete",
      evidence: "Certificate",
      reviewer: "QA",
    },
    {
      requirement: "Cybersecurity Assessment",
      status: "Complete",
      evidence: "Assessment",
      reviewer: "IT Security",
    },
    {
      requirement: "Insurance Certificate",
      status: "Complete",
      evidence: "Policy",
      reviewer: "Procurement",
    },
    {
      requirement: "Business Continuity Plan",
      status: "Pending",
      evidence: "-",
      reviewer: "Quality",
    },
  ];

  return (
    <div className="rounded-xl border bg-white p-6 shadow-sm">
      <h2 className="text-xl font-semibold">
        Requirements Matrix
      </h2>

      <div className="mt-6 overflow-x-auto">
        <table className="min-w-full text-left">
          <thead>
            <tr className="border-b">
              <th className="pb-3">Requirement</th>
              <th className="pb-3">Status</th>
              <th className="pb-3">Evidence</th>
              <th className="pb-3">Reviewer</th>
            </tr>
          </thead>

          <tbody>
            {requirements.map((row) => (
              <tr
                key={row.requirement}
                className="border-b hover:bg-gray-50"
              >
                <td className="py-4">{row.requirement}</td>

                <td className="py-4">
                  {row.status === "Complete"
                    ? "✅ Complete"
                    : "⏳ Pending"}
                </td>

                <td className="py-4">
                  {row.evidence}
                </td>

                <td className="py-4">
                  {row.reviewer}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}