
import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { Screen, PrimaryButton, textStyles } from "./ui";
import { colors } from "../theme";

type Props = {
  onBack: () => void;
  onNext: () => void;
  onProfile: () => void;
  studentName: string;
};

export default function MathHomeScreen({
  onBack,
  onNext,
  onProfile,
  studentName,
}: Props) {
  return (
    <Screen onBack={onBack} onProfile={onProfile} showNavigation>
      <Text style={textStyles.title}>
        Сәлем, {studentName.trim() || "оқушы"}!
      </Text>
      <Text style={textStyles.subtitle}>
        Бүгін математика үйренетін күн.
      </Text>

      <View style={styles.card}>
        <Text style={styles.emoji}>📐</Text>
        <Text style={styles.courseTitle}>5-сынып математикасы</Text>
        <Text style={styles.description}>
          1-тоқсан тақырыптары, түсінікті теория, жаттығулар және үй тапсырмасы.
        </Text>
        <Text style={styles.teacher}>
          Оқытушы: Әлібек Толғанай Берікқызы
        </Text>
      </View>

      <PrimaryButton title="Курсты бастау" onPress={onNext} />
    </Screen>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.lightPurple,
    padding: 22,
    borderRadius: 18,
    marginTop: 12,
    marginBottom: 16,
  },
  emoji: {
    fontSize: 48,
    marginBottom: 14,
  },
  courseTitle: {
    fontSize: 22,
    fontWeight: "700",
    color: colors.text,
    marginBottom: 12,
  },
  description: {
    color: colors.text,
    fontSize: 15,
    lineHeight: 23,
    marginBottom: 18,
  },
  teacher: {
    color: colors.primary,
    fontSize: 14,
    fontWeight: "600",
  },
});