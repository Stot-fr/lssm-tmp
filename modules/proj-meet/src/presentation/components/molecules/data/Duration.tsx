import React from 'react';
import { Text, View } from 'react-native';

import commonStyles from '../../../styles/common';

interface DurationProps {
  minDuration: number; // Durée minimale
  maxDuration: number; // Durée maximale
}

export const Duration: React.FC<DurationProps> = ({
  minDuration,
  maxDuration,
}) => {
  return (
    <View style={commonStyles.container}>
      <Text style={commonStyles.h3}>Duration : </Text>
      <Text>
        {minDuration} - {maxDuration}
      </Text>
    </View>
  );
};
