import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { Screen } from './ui';

export default function CourseDetail({ course, onBack, onSelectLesson }: any) {
  return (
    <Screen>
      <Pressable onPress={onBack}>
        <Text style={s.back}>‹</Text>
      </Pressable>

      <Text style={s.title}>{course?.title}</Text>
      <Text style={s.sub}>Сабақтар тізімі:</Text>

      {course?.lessons.map((lessonName: string, idx: number) => (
        <Pressable 
          key={idx} 
          style={s.item} 
          onPress={() => onSelectLesson({ name: lessonName, id: idx })}
        >
          <Text style={s.itemText}>{lessonName}</Text>
          <Text style={s.arrow}>›</Text>
        </Pressable>
      ))}
    </Screen>
  );
}

const s = StyleSheet.create({
  back: { fontSize: 28, marginBottom: 20, color: '#222' },
  title: { fontSize: 20, fontWeight: '700', color: '#222' },
  sub: { color: '#999', marginVertical: 15 },
  item: { flexDirection: 'row', justifyContent: 'space-between', padding: 16, backgroundColor: '#F7F7F8', borderRadius: 10, marginBottom: 10 },
  itemText: { fontSize: 15, fontWeight: '600', color: '#222' },
  arrow: { fontSize: 18, color: '#AAA' }
});