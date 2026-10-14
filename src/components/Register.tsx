import React, { useState } from "react";
import { Text, Pressable } from "react-native";
import {
  Screen,
  Field,
  PrimaryButton,
  styles as s
} from "./ui";

export default function Register({ go }: any) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Screen>
      <Text style={s.title}>
        Регистрация
      </Text>

      <Text style={s.sub}>
        Создайте учетную запись
      </Text>

      <Field
        placeholder="Ваше имя"
        value={name}
        onChangeText={setName}
      />

      <Field
        placeholder="Номер телефона"
        value={phone}
        onChangeText={setPhone}
      />

      <Field
        placeholder="Пароль"
        value={password}
        onChangeText={setPassword}
        password
      />

      <PrimaryButton
        title="Зарегистрироваться"
        onPress={() => go("city")}
      />

      <Pressable onPress={() => go("login")}>
        <Text
          style={{
            textAlign: "center",
            marginTop: 20,
            color: "#B000E8",
          }}
        >
          Уже есть аккаунт? Войти
        </Text>
      </Pressable>
    </Screen>
  );
}