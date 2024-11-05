import React from 'react';
import { SectionList, type SectionListData, Text, View } from 'react-native';

import commonStyles from '../../../styles/common';

interface RepeatProps {
  days: string[];
}

export const Repeat: React.FC<RepeatProps> = ({ days }) => {
  const sections = [
    {
      data: days,
    },
  ];

  return (
    <View style={commonStyles.container}>
      <Text style={commonStyles.h3}>Repeat days: </Text>

      {days.length === 7 ? (
        <Text style={commonStyles.label}>Everyday</Text>
      ) : (
        <SectionList<string>
          sections={sections}
          keyExtractor={(item, index) => item + index}
          renderItem={({ item }) => (
            <View>
              <Text>{item}</Text>
            </View>
          )}
        />
      )}
    </View>
  );
};
