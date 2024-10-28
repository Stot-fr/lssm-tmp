import React, { useState } from 'react';
import { Button, View } from 'react-native';

import { Duration } from '../molecules/data/Duration';
import { IdealTime } from '../molecules/data/IdealTime';
import { NameHabits } from '../molecules/data/NameHabits';
import { NextDate } from '../molecules/data/NextDate';
import { Repeat } from '../molecules/data/Repeat';
import { ChangeHabit } from './ChangeHabit';
import { HStack } from '@lssm/lib-service.ui-kit/ui/hstack';
import { VStack } from '@lssm/lib-service.ui-kit/ui/vstack';
import { Divider } from '@lssm/lib-service.ui-kit/ui/divider';
import { HabitCardInformationEntry } from '../molecules/data/HabitCardInformationEntry';

type HabitCardProps = {
  minDuration: number; // Durée minimale
  maxDuration: number; // Durée maximale
  name: string; // Nom de l'habitude
  hours: string; // Heures idéales
  days: string[]; // Jours de la semaine
  onDelete: () => void; // Fonction pour supprimer l'habit
};

export const HabitCard: React.FC<HabitCardProps> = ({
  minDuration,
  maxDuration,
  name,
  hours,
  days,
  onDelete,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <ChangeHabit isOpen={isOpen} onClose={() => setIsOpen(false)} />
      <HabitCardInformationEntry name="Min Duration">
        {minDuration} min
      </HabitCardInformationEntry>
      <HabitCardInformationEntry name="Max Duration">
        {maxDuration} min
      </HabitCardInformationEntry>
      <HabitCardInformationEntry name="Name">
        {name}
      </HabitCardInformationEntry>
      <HabitCardInformationEntry name="Hours">
        {hours}
      </HabitCardInformationEntry>
      <HabitCardInformationEntry name="Days">
        {days.join(', ')}
      </HabitCardInformationEntry>

      <VStack space="xs" className="py-4">
        <Button title="Delete habit" onPress={onDelete} />
        <Button title="Custom habit" onPress={() => setIsOpen(true)} />
      </VStack>
    </>
  );
};
