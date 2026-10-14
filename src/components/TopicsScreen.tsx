
import React from "react";
import { Text, View, StyleSheet, Pressable } from "react-native";
import { Screen, textStyles } from "./ui";
import { colors } from "../theme";

type Props = {
  onBack: () => void;
  onNext: () => void;
  onProfile: () => void;
};

const topics = [
  "Натурал сандар және нөл",
  "Натурал сандарды салыстыру",
  "Қосу және азайту",
  "Көбейту және бөлу",
  "Арифметикалық амалдардың реті",
  "Өрнектер және жақшалар",
];

export default function TopicsScreen({
  onBack,
  onNext,
  onProfile,
}: Props) {
  return (
    <Screen
      onBack={onBack}
      onProfile={onProfile}
      showNavigation
    >
      <Text style={textStyles.title}>1-тоқсан тақырыптары</Text>
      <Text style={textStyles.subtitle}>
        Өзіңе қажет тақырыпты таңда.
      </Text>

      {topics.map((topic, index) => (
        <Pressable
          key={topic}
          onPress={onNext}
          style={styles.topic}
        >
          <View style={styles.number}>
            <Text style={styles.numberText}>{index + 1}</Text>
          </View>
          <Text style={styles.topicText}>{topic}</Text>
          <Text style={styles.arrow}>›</Text>
        </Pressable>
      ))}
    </Screen>
  );
}

const styles = StyleSheet.create({
  topic: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.white,
    borderRadius: 12,
    padding: 14,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: colors.border,
  },
  number: {
    width: 34,
    height: 34,
    borderRadius: 17,
    backgroundColor: colors.lightPurple,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },
  numberText: {
    color: colors.primary,
    fontWeight: "700",
  },
  topicText: {
    flex: 1,
    fontSize: 15,
    color: colors.text,
  },
  arrow: {
    fontSize: 24,
    color: colors.primary,
  },
});