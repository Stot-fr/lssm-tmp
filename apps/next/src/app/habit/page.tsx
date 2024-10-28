'use client';

import HabitCard from '@lssm/lib-feat.meet/components/organisms/HabitCard';
import { AppLoggedLayout } from '@lssm/module.proj-meet/presentation/components/templates/app/AppLoggedLayout';

const HABITS = [
  {
    id: 1,
    minDuration: 15,
    maxDuration: 30,
    name: 'Read a book',
    hours: '18:00',
    days: ['Monday', 'Wednesday', 'Friday'],
  },
  {
    id: 2,
    minDuration: 30,
    maxDuration: 60,
    name: 'Exercise: cardio',
    hours: '07:00',
    days: ['Tuesday', 'Thursday'],
  },
  {
    id: 3,
    minDuration: 30,
    maxDuration: 60,
    name: 'Exercise: muscle',
    hours: '07:00',
    days: ['Monday', 'Wednesday', 'Friday'],
  },
  {
    id: 4,
    minDuration: 10,
    maxDuration: 20,
    name: 'Meditate',
    hours: '08:00',
    days: ['Sunday', 'Saturday'],
  },
  {
    id: 5,
    minDuration: 20,
    maxDuration: 40,
    name: 'Write in a journal',
    hours: '21:00',
    days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday'],
  },
];

const Page = () => {
  return (
    <AppLoggedLayout>
      <HabitCard habits={HABITS} />
    </AppLoggedLayout>
  );
};

export default Page;
