
import React, { useState } from "react";
import { Alert, Text } from "react-native";
import { Screen, Field, PrimaryButton, textStyles } from "./ui";

type Props = {
  go: (screen: string) => void;
};

export default function ResetPasswordScreen({ go }: Props) {
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  const handleSave = () => {
    if (!password || !repeatPassword) {
      Alert.alert("Ескерту", "Екі өрісті де толтыр.");
      return;
    }

    if (password.length < 4) {
      Alert.alert("Қате", "Құпиясөз кемінде 4 таңба болсын.");
      return;
    }

    if (password !== repeatPassword) {
      Alert.alert("Қате", "Құпиясөздер сәйкес келмейді.");
      return;
    }

    Alert.alert(
      "Ақпарат",
      "Бұл демонстрациялық нұсқада жаңа құпиясөз серверде сақталмайды."
    );
    go("login");
  };

  return (
    <Screen onBack={() => go("verify")}>
      <Text style={textStyles.title}>Жаңа құпиясөз</Text>
      <Text style={textStyles.subtitle}>
        Жаңа құпиясөзді екі рет енгіз.
      </Text>

      <Field
        placeholder="Жаңа құпиясөз"
        value={password}
        onChangeText={setPassword}
        password
      />

      <Field
        placeholder="Құпиясөзді қайтала"
        value={repeatPassword}
        onChangeText={setRepeatPassword}
        password
      />

      <PrimaryButton title="Сақтау" onPress={handleSave} />
    </Screen>
  );
}