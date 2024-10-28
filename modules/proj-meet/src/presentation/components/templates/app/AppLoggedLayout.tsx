'use client';
import type { CategorySideMenuProps } from '@lssm/design-system/components/molecules/CategorySideMenu/index';
import { SideNavBarLayout } from '@lssm/design-system/components/templates/Layouts/SideNavBarLayout/index';
import type { IconName } from '@lssm/icons-kit/icons';
import { type PropsWithChildren, useMemo } from 'react';

import { APP_NAME } from '../../../constants/app';

export const AppLoggedLayout = (props: PropsWithChildren) => {
  const menuItems = useMemo<Array<CategorySideMenuProps>>(() => {
    return [
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
  }, []);

  return (
    <SideNavBarLayout navigationMenu={{ menu: menuItems, menuTitle: APP_NAME }}>
      {props.children}
    </SideNavBarLayout>
  );
};
