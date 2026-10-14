
import React from "react";
import { Alert, Text, Pressable, StyleSheet } from "react-native";
import { Screen, PrimaryButton, textStyles } from "./ui";
import { colors } from "../theme";

type Props = {
  go: (screen: string) => void;
  city: string;
  setCity: (value: string) => void;
};

const cities = ["Алматы", "Астана", "Шымкент", "Қарағанды", "Ақтөбе"];

export default function SelectCity({ go, city, setCity }: Props) {
  const handleContinue = () => {
    if (!city) {
      Alert.alert("Ескерту", "Қаланы таңда.");
      return;
    }

    go("home");
  };

  return (
    <Screen onBack={() => go("register")}>
      <Text style={textStyles.title}>Қалаңды таңда</Text>
      <Text style={textStyles.subtitle}>
        Өзің тұратын қаланы белгіле.
      </Text>

      {cities.map((item) => (
        <Pressable
          key={item}
          onPress={() => setCity(item)}
          style={[
            localStyles.city,
            city === item && localStyles.selected,
          ]}
        >
          <Text
            style={[
              localStyles.cityText,
              city === item && localStyles.selectedText,
            ]}
          >
            {city === item ? "✓  " : ""}
            {item}
          </Text>
        </Pressable>
      ))}

      <PrimaryButton title="Курсты ашу" onPress={handleContinue} />
    </Screen>
  );
}

const localStyles = StyleSheet.create({
  city: {
    padding: 16,
    backgroundColor: colors.white,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: colors.border,
    marginBottom: 10,
  },
  selected: {
    backgroundColor: colors.lightPurple,
    borderColor: colors.primary,
  },
  cityText: {
    fontSize: 16,
    color: colors.text,
  },
  selectedText: {
    color: colors.primary,
    fontWeight: "700",
  },
});