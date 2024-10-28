import { Card } from '@lssm/lib-service.ui-kit/ui/card';
import { HStack } from '@lssm/lib-service.ui-kit/ui/hstack';
import React from 'react';

import { HabitCard } from '../organisms/HabitCard';

type Habit = {
  id: number;
  minDuration: number;
  maxDuration: number;
  name: string;
  hours: string;
  days: string[];
};

type HabitCardListProps = {
  habits: Habit[];
};

export const HabitCardList: React.FC<HabitCardListProps> = ({ habits }) => {
  const [habitList, setHabitList] = React.useState<Habit[]>(habits);

  const handleDelete = (id: number) => {
    setHabitList((prevHabits) => prevHabits.filter((habit) => habit.id !== id));
  };

  return (
    <HStack>
      {habitList.map((habit) => (
        <Card size="lg" variant="outline" className="m-3 gap-1" key={habit.id}>
          <HabitCard
            minDuration={habit.minDuration}
            maxDuration={habit.maxDuration}
            name={habit.name}
            hours={habit.hours}
            days={habit.days}
            onDelete={() => handleDelete(habit.id)}
          />
        </Card>
      ))}
    </HStack>
  );
};
