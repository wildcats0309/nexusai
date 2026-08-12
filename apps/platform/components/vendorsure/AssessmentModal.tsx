"use client";

import { useState } from "react";
import { assessmentQuestions } from "@/lib/mock-data/assessmentQuestions";

type Props = {
  open: boolean;
  onClose: () => void;
  onComplete: (answers: Record<string, string>) => void;
};

export default function AssessmentModal({
  open,
  onClose,
  onComplete,
}: Props) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});

  const question = assessmentQuestions[currentQuestion];

  if (!open) return null;

  const isFirstQuestion = currentQuestion === 0;
  const isLastQuestion =
    currentQuestion === assessmentQuestions.length - 1;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="w-full max-w-2xl rounded-xl bg-white p-8 shadow-xl">

        <h2 className="text-2xl font-bold">
          Vendor Risk Assessment
        </h2>
<p className="mt-2 text-sm text-muted-foreground">
  Question {currentQuestion + 1} of {assessmentQuestions.length}
</p>
        <div className="mt-4 h-2 w-full overflow-hidden rounded-full bg-gray-200">
  <div
    className="h-full bg-blue-600 transition-all duration-300"
    style={{
      width: `${
        ((currentQuestion + 1) /
          assessmentQuestions.length) *
        100
      }%`,
    }}
  />
</div>

        <p className="mt-4 text-sm font-medium uppercase tracking-wide text-blue-600">
          {question.category}
        </p>

        <h3 className="mt-4 text-xl font-semibold">
          {question.question}
        </h3>

        <p className="mt-3 text-gray-600">
          {question.helpText}
        </p>

        <div className="mt-8 space-y-3">
          {question.answers.map((answer) => (
            <button
              key={answer.id}
              onClick={() =>
  setAnswers({
    ...answers,
    [question.id]: answer.id,
  })
}
              className={`w-full rounded-lg border p-4 text-left transition ${
                answers[question.id] === answer.id
                  ? "border-blue-600 bg-blue-50"
                  : "hover:bg-gray-50"
              }`}
            >
              {answer.label}
            </button>
          ))}
        </div>

        <div className="mt-8 flex justify-between">

          <button
            onClick={() => {
              if (!isFirstQuestion) {
                setCurrentQuestion(currentQuestion - 1);
              }
            }}
            disabled={isFirstQuestion}
            className={`rounded-lg px-5 py-2 ${
              isFirstQuestion
                ? "cursor-not-allowed bg-gray-100 text-gray-400"
                : "border hover:bg-gray-50"
            }`}
          >
            Back
          </button>

          <div className="flex gap-3">

            <button
              onClick={onClose}
              className="rounded-lg border px-5 py-2 hover:bg-gray-50"
            >
              Cancel
            </button>

            <button
  disabled={!answers[question.id]}
  onClick={() => {
    if (!isLastQuestion) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      onComplete(answers);
    }
  }}
  className={`rounded-lg px-5 py-2 text-white transition ${
    !answers[question.id]
      ? "cursor-not-allowed bg-gray-300"
      : "bg-blue-600 hover:bg-blue-700"
  }`}
>
  {isLastQuestion ? "Finish Assessment" : "Next"}
</button>

          </div>

        </div>

      </div>
    </div>
  );
}