import React from 'react';
import { Text, View } from 'react-native';

import commonStyles from '../../../styles/common';

interface RepeatProps {
  days: string[];
}

export const Repeat: React.FC<RepeatProps> = ({ days }) => {
  return (
    <View style={commonStyles.container}>
      <Text style={commonStyles.h3}>Repeat days: </Text>
      {days.length === 7 ? (
        <Text style={commonStyles.label}>Everyday</Text>
      ) : (
        days.map((day, index) => (
          <Text key={index} style={commonStyles.label}>
            {day}
          </Text>
        ))
      )}
    </View>
  );
};
