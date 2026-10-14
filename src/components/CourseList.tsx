import React from 'react';
import { View, Text, Pressable, StyleSheet, ScrollView } from 'react-native';
import { Screen } from './ui';

const COURSES = [
  { id: '1', title: '🧮 Математика (5-сынып)', lessons: ['1. Жай бөлшектер', '2. Ондық бөлшектер'] },
  { id: '2', title: '📚 Қазақ тілі', lessons: ['1. Зат есім', '2. Етістік түрлері'] },
  { id: '3', title: '🌱 Жаратылыстану', lessons: ['1. Жер және Ғарыш', '2. Тірі табиғат'] },
];

export default function CourseList({ onSelectCourse, onProfile }: any) {
  return (
    <Screen>
      <View style={s.topBar}>
        <Text style={s.title}>5-сынып курстары 🎓</Text>
        <Pressable onPress={onProfile}>
          <Text style={s.profileIcon}>👤</Text>
        </Pressable>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {COURSES.map((item) => (
          <Pressable 
            key={item.id} 
            style={s.card} 
            onPress={() => onSelectCourse(item)}
          >
            <Text style={s.cardTitle}>{item.title}</Text>
            <Text style={s.subText}>{item.lessons.length} сабақ бар</Text>
          </Pressable>
        ))}
      </ScrollView>
    </Screen>
  );
}

const s = StyleSheet.create({
  topBar: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 },
  title: { fontSize: 20, fontWeight: '700', color: '#222' },
  profileIcon: { fontSize: 24 },
  card: { backgroundColor: '#F7F7F8', padding: 18, borderRadius: 12, marginBottom: 15 },
  cardTitle: { fontSize: 16, fontWeight: '700', color: '#222' },
  subText: { color: '#999', marginTop: 5, fontSize: 13 },
});