import React, { useState } from 'react';
import { Button, View } from 'react-native';

import ChangeHabit from '../atoms/ChangeHabit';
import Duration from '../atoms/Duration';
import IdealTime from '../atoms/IdealTime';
import NameHabits from '../atoms/NameHabits';
import NextDate from '../atoms/NextDate';
import Repeat from '../atoms/Repeat';

interface BodyCardProps {
  minDuration: number; // Durée minimale
  maxDuration: number; // Durée maximale
  name: string; // Nom de l'habitude
  hours: string; // Heures idéales
  days: string[]; // Jours de la semaine
  onDelete: () => void; // Fonction pour supprimer l'habit
}

const BodyCard: React.FC<BodyCardProps> = ({
  minDuration,
  maxDuration,
  name,
  hours,
  days,
  onDelete,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <View>
      <NameHabits name={name} />
      <Duration minDuration={minDuration} maxDuration={maxDuration} />
      <IdealTime hours={hours} />
      <Repeat days={days} />
      <NextDate habitDays={days} />
      <Button title="Supprimer l'habit" onPress={onDelete} />
      <Button title="Modifier l'habit" onPress={() => setIsOpen(true)} />
      <ChangeHabit isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </View>
  );
};

export default BodyCard;
