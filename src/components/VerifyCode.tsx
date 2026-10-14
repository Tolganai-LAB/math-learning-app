
import React, { useState } from "react";
import { Alert, Text } from "react-native";
import { Screen, Field, PrimaryButton, textStyles } from "./ui";

type Props = {
  go: (screen: string) => void;
};

export default function VerifyCode({ go }: Props) {
  const [code, setCode] = useState("");

  const handleVerify = () => {
    if (code.trim() !== "1234") {
      Alert.alert("Қате", "Тестілеу коды: 1234");
      return;
    }

    go("reset");
  };

  return (
    <Screen onBack={() => go("forgot")}>
      <Text style={textStyles.title}>Растау коды</Text>
      <Text style={textStyles.subtitle}>
        Демонстрациялық код ретінде 1234 санын енгіз.
      </Text>

      <Field
        placeholder="4 таңбалы код"
        value={code}
        onChangeText={setCode}
        keyboardType="number-pad"
      />

      <PrimaryButton title="Растау" onPress={handleVerify} />
    </Screen>
  );
}