export type AssessmentCategory =
  | "Compliance"
  | "Security"
  | "Quality"
  | "Operations"
  | "Financial"
  | "Business";

export type AssessmentAnswer = {
  id: string;
  label: string;
  score: number;
  severity: "Low" | "Medium" | "High";
  recommendation?: string;
};

export type AssessmentQuestion = {
  id: string;
  category: AssessmentCategory;
  question: string;
  helpText: string;
  weight: number;
  answers: AssessmentAnswer[];
};

export const assessmentQuestions: AssessmentQuestion[] = [
  {
    id: "processes-phi",

    category: "Compliance",

    question:
      "Does this vendor process Protected Health Information (PHI)?",

    helpText:
      "Vendors that process PHI are subject to HIPAA requirements and generally require additional security and compliance review.",

    weight: 20,

    answers: [
      {
        id: "yes",
        label: "Yes",
        score: 20,
        severity: "High",

        recommendation:
          "Verify HIPAA compliance and execute a Business Associate Agreement (BAA).",
      },

      {
        id: "no",
        label: "No",
        score: 0,
        severity: "Low",
      },

      {
        id: "unknown",
        label: "Unknown",
        score: 10,
        severity: "Medium",

        recommendation:
          "Confirm whether PHI is processed before approving the vendor.",
      },
    ],
  },

  {
  id: "baa-required",

  category: "Compliance",

  question:
    "Is a Business Associate Agreement (BAA) required?",

  helpText:
    "A BAA is required whenever a vendor creates, receives, maintains, or transmits Protected Health Information on behalf of your organization.",

  weight: 15,

  answers: [
    {
      id: "yes",
      label: "Yes",
      score: 15,
      severity: "High",

      recommendation:
        "Execute a signed Business Associate Agreement before onboarding.",
    },

    {
      id: "no",
      label: "No",
      score: 0,
      severity: "Low",
    },

    {
      id: "unknown",
      label: "Unknown",
      score: 8,
      severity: "Medium",

      recommendation:
        "Determine whether the vendor handles PHI before approval.",
    },
  ],
},

{
  id: "fda-regulated",

  category: "Compliance",

  question:
    "Does the vendor support FDA-regulated activities?",

  helpText:
    "Suppliers supporting regulated manufacturing, quality, validation, or clinical activities typically require additional oversight.",

  weight: 20,

  answers: [
    {
      id: "yes",
      label: "Yes",
      score: 20,
      severity: "High",

      recommendation:
        "Ensure supplier qualification follows FDA and quality system requirements.",
    },

    {
      id: "no",
      label: "No",
      score: 0,
      severity: "Low",
    },

    {
      id: "unknown",
      label: "Unknown",
      score: 10,
      severity: "Medium",

      recommendation:
        "Confirm whether the vendor supports regulated activities.",
    },
  ],
},

{
  id: "soc2",

  category: "Security",

  question:
    "Does the vendor maintain a current SOC 2 Type II report?",

  helpText:
    "SOC 2 Type II demonstrates that the vendor's security controls have been independently audited over time.",

  weight: 15,

  answers: [
    {
      id: "yes",
      label: "Yes",
      score: 0,
      severity: "Low",
    },

    {
      id: "no",
      label: "No",
      score: 15,
      severity: "High",

      recommendation:
        "Request a SOC 2 Type II report or perform additional security due diligence.",
    },

    {
      id: "unknown",
      label: "Unknown",
      score: 8,
      severity: "Medium",

      recommendation:
        "Confirm whether a SOC 2 Type II report is available.",
    },
  ],
},

{
  id: "iso27001",

  category: "Security",

  question:
    "Is the vendor certified to ISO 27001?",

  helpText:
    "ISO 27001 demonstrates that the vendor maintains a formal Information Security Management System.",

  weight: 15,

  answers: [
    {
      id: "yes",
      label: "Yes",
      score: 0,
      severity: "Low",
    },

    {
      id: "no",
      label: "No",
      score: 15,
      severity: "High",

      recommendation:
        "Evaluate the vendor's security program or request equivalent controls.",
    },

    {
      id: "unknown",
      label: "Unknown",
      score: 8,
      severity: "Medium",

      recommendation:
        "Verify whether ISO 27001 certification exists.",
    },
  ],
},

{
  id: "mfa",

  category: "Security",

  question:
    "Is Multi-Factor Authentication (MFA) enforced for users?",

  helpText:
    "Multi-Factor Authentication significantly reduces the risk of unauthorized access.",

  weight: 10,

  answers: [
    {
      id: "yes",
      label: "Yes",
      score: 0,
      severity: "Low",
    },

    {
      id: "no",
      label: "No",
      score: 10,
      severity: "High",

      recommendation:
        "Require Multi-Factor Authentication before granting system access.",
    },

    {
      id: "unknown",
      label: "Unknown",
      score: 5,
      severity: "Medium",

      recommendation:
        "Confirm whether MFA is required for privileged and standard users.",
    },
  ],
},
{
  id: "iso13485",

  category: "Quality",

  question:
    "Is the vendor certified to ISO 13485?",

  helpText:
    "ISO 13485 demonstrates that the vendor maintains a quality management system for medical device manufacturing and related services.",

  weight: 15,

  answers: [
    {
      id: "yes",
      label: "Yes",
      score: 0,
      severity: "Low",
    },

    {
      id: "no",
      label: "No",
      score: 15,
      severity: "High",

      recommendation:
        "Request ISO 13485 certification or evaluate the vendor's quality system.",
    },

    {
      id: "unknown",
      label: "Unknown",
      score: 8,
      severity: "Medium",

      recommendation:
        "Verify whether ISO 13485 certification is current.",
    },
  ],
},
{
  id: "open-capas",

  category: "Quality",

  question:
    "Does the vendor currently have unresolved CAPAs?",

  helpText:
    "Open Corrective and Preventive Actions may indicate unresolved quality issues that require additional oversight.",

  weight: 20,

  answers: [
    {
      id: "yes",
      label: "Yes",
      score: 20,
      severity: "High",

      recommendation:
        "Review all open CAPAs before vendor approval.",
    },

    {
      id: "no",
      label: "No",
      score: 0,
      severity: "Low",
    },

    {
      id: "unknown",
      label: "Unknown",
      score: 10,
      severity: "Medium",

      recommendation:
        "Request the vendor's current CAPA status.",
    },
  ],
},
{
  id: "quality-audit",

  category: "Quality",

  question:
    "Has the vendor successfully passed its most recent quality audit?",

  helpText:
    "Recent quality audits provide confidence that the supplier's quality management system is operating effectively.",

  weight: 15,

  answers: [
    {
      id: "yes",
      label: "Yes",
      score: 0,
      severity: "Low",
    },

    {
      id: "no",
      label: "No",
      score: 15,
      severity: "High",

      recommendation:
        "Review audit findings and require corrective actions before approval.",
    },

    {
      id: "unknown",
      label: "Unknown",
      score: 8,
      severity: "Medium",

      recommendation:
        "Request the vendor's latest audit report.",
    },
  ],
},
];