import React, { useState } from 'react';
import { View, Text, Pressable, StyleSheet, Alert } from 'react-native';
import { Screen } from './ui';

export default function QuizScreen({ lesson, onFinish }: any) {
  const [selectedOption, setSelectedOption] = useState<number | null>(null);

  const handleFinish = () => {
    if (selectedOption === null) {
      Alert.alert('Ескерту', 'Жауапты таңдаңыз!');
      return;
    }
    Alert.alert('Жарайсың! 🎉', 'Тапсырма сәтті аяқталды!', [
      { text: 'ОК', onPress: onFinish }
    ]);
  };

  return (
    <Screen>
      <Text style={s.title}>Тест: {lesson?.name}</Text>
      <Text style={s.question}>Төмендегі сұраққа дұрыс жауапты таңдаңыз:</Text>

      {['Жауап A', 'Жауап B', 'Жауап C'].map((option, idx) => (
        <Pressable 
          key={idx}
          style={[s.option, selectedOption === idx && s.selectedOption]}
          onPress={() => setSelectedOption(idx)}
        >
          <Text style={selectedOption === idx ? s.selectedText : s.optionText}>{option}</Text>
        </Pressable>
      ))}

      <Pressable style={s.button} onPress={handleFinish}>
        <Text style={s.buttonText}>Аяқтау</Text>
      </Pressable>
    </Screen>
  );
}

const s = StyleSheet.create({
  title: { fontSize: 20, fontWeight: '700', color: '#222', marginTop: 10 },
  question: { color: '#888', marginVertical: 15 },
  option: { padding: 15, backgroundColor: '#F7F7F8', borderRadius: 10, marginBottom: 10 },
  selectedOption: { backgroundColor: '#B000E8' },
  optionText: { color: '#222', fontWeight: '500' },
  selectedText: { color: 'white', fontWeight: 'bold' },
  button: { backgroundColor: '#B000E8', padding: 14, borderRadius: 9, alignItems: 'center', marginTop: 20 },
  buttonText: { color: 'white', fontWeight: '600' }
});