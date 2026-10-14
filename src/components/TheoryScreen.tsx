
import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { Screen, textStyles } from "./ui";
import { colors } from "../theme";

type Props = {
  onBack: () => void;
  onNext: () => void;
  onProfile: () => void;
};

export default function TheoryScreen({
  onBack,
  onNext,
  onProfile,
}: Props) {
  return (
    <Screen
      onBack={onBack}
      onNext={onNext}
      onProfile={onProfile}
      showNavigation
    >
      <Text style={textStyles.title}>Теория және мысалдар</Text>

      <View style={styles.card}>
        <Text style={styles.heading}>1. Натурал сандар</Text>
        <Text style={textStyles.paragraph}>
          Натурал сандар заттарды санау үшін қолданылады: 1, 2, 3, 4, 5 және
          әрі қарай. Кейбір тапсырмаларда 0 саны да қарастырылады.
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.heading}>2. Қосу</Text>
        <Text style={textStyles.paragraph}>
          Қосу кезінде сандар біріктіріледі.
        </Text>
        <Text style={styles.example}>Мысал: 12 + 5 = 17</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.heading}>3. Азайту</Text>
        <Text style={textStyles.paragraph}>
          Азайту бір саннан екінші санды кемітеді.
        </Text>
        <Text style={styles.example}>Мысал: 17 − 5 = 12</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.heading}>4. Көбейту және бөлу</Text>
        <Text style={textStyles.paragraph}>
          Көбейту — бірдей қосылғыштарды қосуға ұқсас амал. Бөлу санды тең
          бөліктерге бөлуге көмектеседі.
        </Text>
        <Text style={styles.example}>Мысал: 4 × 3 = 12</Text>
        <Text style={styles.example}>Мысал: 12 ÷ 3 = 4</Text>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.white,
    padding: 17,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: colors.border,
    marginBottom: 14,
  },
  heading: {
    fontSize: 18,
    fontWeight: "700",
    color: colors.primary,
    marginBottom: 10,
  },
  example: {
    fontSize: 16,
    fontWeight: "700",
    color: colors.text,
    marginTop: 7,
  },
});