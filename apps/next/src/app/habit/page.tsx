'use client';

import { SideNavBarLayout } from '@lssm/design-system/components/templates/Layouts/SideNavBarLayout';
import { IconName } from '@lssm/icons-kit/icons';
import HabitCard from '@lssm/lib-feat.meet/components/organisms/HabitCard';

const menuTitle = 'LSSM Project';
const testMenu = [
  {
    id: 'build',
    category: 'Build',
    items: [
      {
        id: 'overview',
        title: 'Overview',
        target: '/overview',
        IconElement: {
          name: 'View' as IconName,
        },
      },
      {
        id: 'auth',
        title: 'Authentification',
        target: '/auth',
        IconElement: {
          name: 'LockOpen' as IconName,
        },
      },
      {
        id: 'db',
        title: 'Database',
        target: '/database',
        IconElement: {
          name: 'Database' as IconName,
        },
      },
    ],
  },
  {
    id: 'quality',
    category: 'Quality',
    items: [
      {
        id: 'analytics',
        title: 'Analytics',
        target: '/analytics',
        IconElement: {
          name: 'ChartSpline' as IconName,
        },
      },
      {
        id: 'performance',
        title: 'Performance',
        target: '/perf',
        IconElement: {
          name: 'Rabbit' as IconName,
        },
      },
    ],
  },
];

const Page = () => {
  const habits = [
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
      name: 'Exercise',
      hours: '07:00',
      days: ['Tuesday', 'Thursday'],
    },
    {
      id: 3,
      minDuration: 10,
      maxDuration: 20,
      name: 'Meditate',
      hours: '08:00',
      days: ['Sunday', 'Saturday'],
    },
    {
      id: 4,
      minDuration: 20,
      maxDuration: 40,
      name: 'Write in a journal',
      hours: '21:00',
      days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday'],
    },
  ];

  return (
    <SideNavBarLayout navigationMenu={{ menu: testMenu, menuTitle }}>
      <HabitCard habits={habits} />
    </SideNavBarLayout>
  );
};

export default Page;
