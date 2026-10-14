
import React from "react";
import {
  View,
  Text,
  TextInput,
  Pressable,
  StyleSheet,
  ScrollView,
} from "react-native";
import { colors } from "../theme";

type ScreenProps = {
  children: React.ReactNode;
  onBack?: () => void;
  onNext?: () => void;
  onProfile?: () => void;
  showNavigation?: boolean;
};

export function Screen({
  children,
  onBack,
  onNext,
  onProfile,
  showNavigation = false,
}: ScreenProps) {
  return (
    <View style={s.screen}>
      {showNavigation && (
        <View style={s.navigation}>
          <Pressable onPress={onBack} disabled={!onBack}>
            <Text style={s.link}>← Артқа</Text>
          </Pressable>

          <Pressable onPress={onProfile} disabled={!onProfile}>
            <Text style={s.link}>👤 Профиль</Text>
          </Pressable>
        </View>
      )}

      <ScrollView
        contentContainerStyle={s.content}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        {children}

        {showNavigation && onNext && (
          <Pressable style={s.button} onPress={onNext}>
            <Text style={s.buttonText}>Келесі →</Text>
          </Pressable>
        )}
      </ScrollView>
    </View>
  );
}

type FieldProps = {
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
  password?: boolean;
  keyboardType?: any;
  autoCapitalize?: any;
};

export function Field({
  placeholder,
  value,
  onChangeText,
  password = false,
  keyboardType = "default",
  autoCapitalize = "none",
}: FieldProps) {
  return (
    <TextInput
      style={s.field}
      placeholder={placeholder}
      placeholderTextColor={colors.gray}
      value={value}
      onChangeText={onChangeText}
      secureTextEntry={password}
      keyboardType={keyboardType}
      autoCapitalize={autoCapitalize}
      autoCorrect={false}
    />
  );
}

type ButtonProps = {
  title: string;
  onPress: () => void;
};

export function PrimaryButton({ title, onPress }: ButtonProps) {
  return (
    <Pressable style={s.button} onPress={onPress}>
      <Text style={s.buttonText}>{title}</Text>
    </Pressable>
  );
}

export const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: "700",
    color: colors.text,
    marginBottom: 10,
  },
  sub: {
    color: colors.gray,
    fontSize: 15,
    marginBottom: 24,
    lineHeight: 22,
  },
  subtitle: {
    color: colors.gray,
    fontSize: 15,
    marginBottom: 24,
    lineHeight: 22,
  },
  paragraph: {
    color: colors.text,
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 12,
  },
});

export const textStyles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: "700",
    color: colors.text,
    marginBottom: 10,
  },
  subtitle: {
    color: colors.gray,
    fontSize: 15,
    marginBottom: 24,
    lineHeight: 22,
  },
  sub: {
    color: colors.gray,
    fontSize: 15,
    marginBottom: 24,
    lineHeight: 22,
  },
  paragraph: {
    color: colors.text,
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 12,
  },
  link: {
    color: colors.primary,
    textAlign: "center",
    fontWeight: "600",
    marginTop: 14,
  },
});

const s = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.background,
  },
  content: {
    padding: 22,
    paddingTop: 30,
    paddingBottom: 40,
    flexGrow: 1,
  },
  navigation: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 22,
    paddingTop: 52,
    paddingBottom: 8,
  },
  field: {
    backgroundColor: colors.input,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 12,
    padding: 15,
    marginBottom: 12,
    fontSize: 16,
    color: colors.text,
  },
  button: {
    backgroundColor: colors.primary,
    padding: 15,
    borderRadius: 12,
    alignItems: "center",
    marginTop: 12,
  },
  buttonText: {
    color: colors.white,
    fontWeight: "700",
    fontSize: 16,
  },
  link: {
    color: colors.primary,
    fontWeight: "600",
    paddingVertical: 8,
  },
});