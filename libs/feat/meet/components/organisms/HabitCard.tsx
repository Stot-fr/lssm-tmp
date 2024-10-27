import React from 'react';
import { View } from 'react-native';
import BodyCard from '../molecules/BodyCard';
import { Card } from '@lssm/ui-kit/ui/card';

interface Habit {
  id: number; // Identifiant de l'habitude
  minDuration: number; // Durée minimale
  maxDuration: number; // Durée maximale
  name: string; // Nom de l'habitude
  hours: string; // Heures idéales
  days: string[]; // Jours de la semaine
}

interface HabitListProps {
  habits: Habit[]; // Liste des habitudes
}

const HabitCard: React.FC<HabitListProps> = ({ habits }) => {
  const [habitList, setHabitList] = React.useState<Habit[]>(habits);

  const handleDelete = (id: number) => {
    setHabitList((prevHabits) => prevHabits.filter((habit) => habit.id !== id));
  };

  return (
    <View>
      {habitList.map((habit) => (
        <Card size="md" variant="outline" className="m-3" key={habit.id}>
          <BodyCard
            minDuration={habit.minDuration}
            maxDuration={habit.maxDuration}
            name={habit.name}
            hours={habit.hours}
            days={habit.days}
            onDelete={() => handleDelete(habit.id)}
          />
        </Card>
      ))}
    </View>
  );
};

export default HabitCard;
