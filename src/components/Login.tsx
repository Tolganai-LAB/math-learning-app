
import React, { useState } from "react";
import { Alert, Text, Pressable } from "react-native";
import { Screen, Field, PrimaryButton, textStyles } from "./ui";

type Props = {
  go: (screen: string) => void;
  phone: string;
  setPhone: (value: string) => void;
};

export default function Login({ go, phone, setPhone }: Props) {
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (!phone.trim() || !password.trim()) {
      Alert.alert("Ескерту", "Телефон нөмірі мен құпиясөзді енгіз.");
      return;
    }

    go("home");
  };

  return (
    <Screen>
      <Text style={textStyles.title}>Қош келдің!</Text>
      <Text style={textStyles.subtitle}>
        5-сынып математикасын бірге үйренейік.
      </Text>

      <Field
        placeholder="Телефон нөмірі"
        value={phone}
        onChangeText={setPhone}
        keyboardType="phone-pad"
      />

      <Field
        placeholder="Құпиясөз"
        value={password}
        onChangeText={setPassword}
        password
      />

      <Pressable onPress={() => go("forgot")}>
        <Text style={textStyles.link}>Құпиясөзді ұмыттыңыз ба?</Text>
      </Pressable>

      <PrimaryButton title="Кіру" onPress={handleLogin} />

      <Text style={{ textAlign: "center", marginTop: 28, color: "#77778A" }}>
        Аккаунтыңыз жоқ па?
      </Text>

      <Pressable onPress={() => go("register")}>
        <Text style={textStyles.link}>Тіркелу</Text>
      </Pressable>
    </Screen>
  );
}