import React from 'react';
import { Text, Pressable, StyleSheet, ScrollView } from 'react-native';
import { Screen } from './ui';

export default function LessonView({ lesson, onBack, onStartQuiz }: any) {
  return (
    <Screen>
      <Pressable onPress={onBack}>
        <Text style={s.back}>‹</Text>
      </Pressable>

      <Text style={s.title}>{lesson?.name}</Text>

      <ScrollView style={{ flex: 1, marginVertical: 15 }}>
        <Text style={s.text}>
          Құрметті 5-сынып оқушысы! 🌟{"\n\n"}
          Бұл сабақта біз негізгі ережелермен және мысалдармен танысамыз.
          Ережелерді мұқият оқып шығып, төмендегі батырманы басып тест тапсырмасын орындаңыз.
        </Text>
      </ScrollView>

      <Pressable style={s.button} onPress={onStartQuiz}>
        <Text style={s.buttonText}>Тест тапсыру 📝</Text>
      </Pressable>
    </Screen>
  );
}

const s = StyleSheet.create({
  back: { fontSize: 28, marginBottom: 15, color: '#222' },
  title: { fontSize: 20, fontWeight: '700', color: '#222' },
  text: { fontSize: 15, lineHeight: 22, color: '#555' },
  button: { backgroundColor: '#B000E8', padding: 14, borderRadius: 9, alignItems: 'center' },
  buttonText: { color: 'white', fontWeight: '600' }
});