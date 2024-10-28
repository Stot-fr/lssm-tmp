import React from 'react';
import { Text, View } from 'react-native';

import commonStyles from '../../../styles/common';

interface IdealTimeProps {
  hours: string;
}

export const IdealTime: React.FC<IdealTimeProps> = ({ hours }) => {
  return (
    <View style={commonStyles.container}>
      <Text style={commonStyles.h3}>Ideal time: </Text>
      <Text>{hours}</Text>
    </View>
  );
};
