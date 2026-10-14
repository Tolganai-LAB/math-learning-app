
import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { Screen, PrimaryButton, textStyles } from "./ui";
import { colors } from "../theme";

type Props = {
  onBack: () => void;
  onSettings: () => void;
  onLogout: () => void;
  studentName: string;
  phone: string;
  city: string;
  score: number;
};

export default function ProfileScreen({
  onBack,
  onSettings,
  onLogout,
  studentName,
  phone,
  city,
  score,
}: Props) {
  return (
    <Screen onBack={onBack}>
      <Text style={textStyles.title}>Менің профилім</Text>

      <View style={styles.avatar}>
        <Text style={styles.avatarText}>👤</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>Оқушының аты-жөні</Text>
        <Text style={styles.value}>
          {studentName.trim() || "Аты көрсетілмеген"}
        </Text>

        <Text style={styles.label}>Телефон нөмірі</Text>
        <Text style={styles.value}>
          {phone.trim() || "Нөмір көрсетілмеген"}
        </Text>

        <Text style={styles.label}>Қала</Text>
        <Text style={styles.value}>{city}</Text>

        <Text style={styles.label}>Жиналған ұпай</Text>
        <Text style={styles.score}>{score}</Text>
      </View>

      <PrimaryButton title="Баптаулар" onPress={onSettings} />
      <PrimaryButton title="Кіру бетіне қайту" onPress={onLogout} />
    </Screen>
  );
}

const styles = StyleSheet.create({
  avatar: {
    alignSelf: "center",
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: colors.lightPurple,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 18,
  },
  avatarText: {
    fontSize: 42,
  },
  card: {
    backgroundColor: colors.white,
    padding: 20,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: colors.border,
  },
  label: {
    fontSize: 13,
    color: colors.gray,
    marginTop: 12,
    marginBottom: 4,
  },
  value: {
    fontSize: 17,
    fontWeight: "600",
    color: colors.text,
  },
  score: {
    fontSize: 28,
    fontWeight: "700",
    color: colors.primary,
  },
});