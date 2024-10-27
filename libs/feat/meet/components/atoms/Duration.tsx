import React from 'react';
import { Text, View } from 'react-native';

import styles from '../../style';

interface DurationProps {
  minDuration: number; // Durée minimale
  maxDuration: number; // Durée maximale
}

const Duration: React.FC<DurationProps> = ({ minDuration, maxDuration }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.h3}>Duration : </Text>
      <Text>
        {minDuration} - {maxDuration}
      </Text>
    </View>
  );
};

export default Duration;
