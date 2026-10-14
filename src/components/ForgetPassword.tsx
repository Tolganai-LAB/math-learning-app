
import React from "react";
import { Alert, Text } from "react-native";
import { Screen, Field, PrimaryButton, textStyles } from "./ui";

type Props = {
  go: (screen: string) => void;
  phone: string;
  setPhone: (value: string) => void;
};

export default function ForgetPassword({ go, phone, setPhone }: Props) {
  const handleContinue = () => {
    if (!phone.trim()) {
      Alert.alert("Ескерту", "Телефон нөмірін енгіз.");
      return;
    }

    Alert.alert(
      "Демонстрациялық режим",
      "Нақты SMS жіберілмейді. Тестілеу үшін келесі бетке өт."
    );
    go("verify");
  };

  return (
    <Screen onBack={() => go("login")}>
      <Text style={textStyles.title}>Құпиясөзді қалпына келтіру</Text>
      <Text style={textStyles.subtitle}>
        Тіркелген телефон нөміріңді енгіз.
      </Text>

      <Field
        placeholder="Телефон нөмірі"
        value={phone}
        onChangeText={setPhone}
        keyboardType="phone-pad"
      />

      <PrimaryButton title="Кодты енгізу" onPress={handleContinue} />
    </Screen>
  );
}