
import React, { useState } from "react";
import { Alert, Text, Pressable, StyleSheet } from "react-native";
import { Screen, PrimaryButton, textStyles } from "./ui";
import { colors } from "../theme";

type Props = {
  onBack: () => void;
  onNext: () => void;
  onProfile: () => void;
  onScore: (points: number) => void;
};

const tasks = [
  {
    question: "1. 15 + 7 нешеге тең?",
    answers: ["21", "22", "23"],
    correct: "22",
  },
  {
    question: "2. 30 − 12 нешеге тең?",
    answers: ["18", "19", "20"],
    correct: "18",
  },
  {
    question: "3. 6 × 4 нешеге тең?",
    answers: ["20", "24", "28"],
    correct: "24",
  },
];

export default function TasksScreen({
  onBack,
  onNext,
  onProfile,
  onScore,
}: Props) {
  const [answers, setAnswers] = useState<string[]>([]);
  const [checked, setChecked] = useState(false);

  const chooseAnswer = (index: number, answer: string) => {
    if (checked) return;

    setAnswers((previous) => {
      const updated = [...previous];
      updated[index] = answer;
      return updated;
    });
  };

  const checkAnswers = () => {
    if (answers.length < tasks.length || answers.some((answer) => !answer)) {
      Alert.alert("Ескерту", "Үш тапсырманың бәріне жауап бер.");
      return;
    }

    const points = tasks.reduce(
      (total, task, index) =>
        total + (answers[index] === task.correct ? 1 : 0),
      0
    );

    setChecked(true);
    onScore(points);

    Alert.alert("Нәтиже", `Дұрыс жауаптар: ${points} / ${tasks.length}`);
  };

  return (
    <Screen
      onBack={onBack}
      onProfile={onProfile}
      showNavigation
    >
      <Text style={textStyles.title}>Сынып жұмысы</Text>
      <Text style={textStyles.subtitle}>
        Үш тапсырманы орындап, жауаптарыңды тексер.
      </Text>

      {tasks.map((task, index) => (
        <React.Fragment key={task.question}>
          <Text style={styles.question}>{task.question}</Text>

          {task.answers.map((answer) => {
            const selected = answers[index] === answer;
            const correct = checked && answer === task.correct;
            const wrong = checked && selected && answer !== task.correct;

            return (
              <Pressable
                key={answer}
                onPress={() => chooseAnswer(index, answer)}
                style={[
                  styles.answer,
                  selected && styles.selected,
                  correct && styles.correct,
                  wrong && styles.wrong,
                ]}
              >
                <Text style={styles.answerText}>
                  {selected ? "● " : "○ "}
                  {answer}
                </Text>
              </Pressable>
            );
          })}
        </React.Fragment>
      ))}

      {!checked ? (
        <PrimaryButton title="Жауаптарды тексеру" onPress={checkAnswers} />
      ) : (
        <PrimaryButton title="Үй тапсырмасына өту" onPress={onNext} />
      )}
    </Screen>
  );
}

const styles = StyleSheet.create({
  question: {
    fontSize: 17,
    fontWeight: "700",
    color: colors.text,
    marginTop: 14,
    marginBottom: 10,
  },
  answer: {
    backgroundColor: colors.white,
    padding: 14,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: colors.border,
    marginBottom: 8,
  },
  selected: {
    borderColor: colors.primary,
    backgroundColor: colors.lightPurple,
  },
  correct: {
    borderColor: "#269653",
    backgroundColor: colors.green,
  },
  wrong: {
    borderColor: "#D94848",
    backgroundColor: colors.red,
  },
  answerText: {
    color: colors.text,
    fontSize: 15,
  },
});