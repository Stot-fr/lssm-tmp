import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface NameHabitsProps {
  name: string;
}

const styles = StyleSheet.create({
  h2: {
    fontSize: 24, // Taille de police similaire à h2
    fontWeight: 'bold', // Gras
    marginVertical: 10, // Espacement vertical
  },
});

export const NameHabits: React.FC<NameHabitsProps> = ({ name }) => {
  return (
    <View>
      <Text style={styles.h2}>{name}</Text>
    </View>
  );
};
