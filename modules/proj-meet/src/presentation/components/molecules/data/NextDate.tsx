import React from 'react';
import { Text, View } from 'react-native';

import commonStyles from '../../../styles/common';

interface NextDateProps {
  habitDays: string[];
}

export const NextDate: React.FC<NextDateProps> = ({ habitDays }) => {
  const getNextDate = () => {
    const today = new Date();
    const currentDay = today.getDay();
    const daysOfWeek = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ];

    for (let i = 1; i <= 7; i++) {
      const nextDayIndex = (currentDay + i) % daysOfWeek.length;
      if (habitDays.includes(daysOfWeek[nextDayIndex]!)) {
        const nextDate = new Date(today);
        nextDate.setDate(today.getDate() + i);
        return nextDate.toLocaleDateString();
      }
    }
    return 'No date found';
  };

  return (
    <View style={commonStyles.container}>
      <Text style={commonStyles.h3}>Next date :</Text>
      <Text>{getNextDate()}</Text>
    </View>
  );
};
