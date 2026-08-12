import { assessmentQuestions } from "@/lib/mock-data/assessmentQuestions";

export type AssessmentResult = {
  totalScore: number;
  riskLevel: "Low" | "Medium" | "High";

  categoryScores: Record<string, number>;

  recommendations: string[];
};

export function calculateRisk(
  answers: Record<string, string>
): AssessmentResult {
  let totalScore = 0;

  const recommendations: string[] = [];

  const categoryScores: Record<string, number> = {
    Compliance: 0,
    Security: 0,
    Quality: 0,
    Operations: 0,
    Business: 0,
  };

  for (const question of assessmentQuestions) {
    const selectedAnswerId = answers[question.id];

    if (!selectedAnswerId) continue;

    const selectedAnswer = question.answers.find(
      (answer) => answer.id === selectedAnswerId
    );

    if (!selectedAnswer) continue;

    totalScore += selectedAnswer.score;

    categoryScores[question.category] +=
      selectedAnswer.score;

    if (selectedAnswer.recommendation) {
      recommendations.push(
        selectedAnswer.recommendation
      );
    }
  }

  let riskLevel: "Low" | "Medium" | "High";

  if (totalScore <= 25) {
    riskLevel = "Low";
  } else if (totalScore <= 55) {
    riskLevel = "Medium";
  } else {
    riskLevel = "High";
  }

  return {
    totalScore,
    riskLevel,
    categoryScores,
    recommendations,
  };
}