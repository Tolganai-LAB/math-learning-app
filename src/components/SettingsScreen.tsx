
import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { Screen, PrimaryButton, textStyles } from "./ui";
import { colors } from "../theme";

type Props = {
  onBack: () => void;
};

export default function SettingsScreen({ onBack }: Props) {
  return (
    <Screen onBack={onBack}>
      <Text style={textStyles.title}>Баптаулар</Text>
      <Text style={textStyles.subtitle}>
        Қосымша туралы ақпарат.
      </Text>

      <View style={styles.card}>
        <Text style={styles.heading}>Оқу қосымшасы</Text>
        <Text style={styles.text}>Пән: 5-сынып математикасы</Text>
        <Text style={styles.text}>Оқытушы: Әлібек Толғанай Берікқызы</Text>
        <Text style={styles.text}>Бөлім: 1-тоқсан</Text>
      </View>

      <PrimaryButton title="Профильге қайту" onPress={onBack} />
    </Screen>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 20,
    backgroundColor: colors.white,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: colors.border,
  },
  heading: {
    fontSize: 19,
    fontWeight: "700",
    color: colors.primary,
    marginBottom: 12,
  },
  text: {
    fontSize: 15,
    lineHeight: 24,
    color: colors.text,
    marginBottom: 8,
  },
});