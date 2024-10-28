'use client';

import {
  type CategoryTopMenuProps,
  type NavigationTopMenuItem,
  TopNavBarLayout,
} from '@lssm/design-system/components/templates/layouts/TopNavBarLayout/index';
import type { IconName, IconProps } from '@lssm/icons-kit/icons';
import { type PropsWithChildren, useMemo } from 'react';

import { APP_NAME } from '../../../constants/app';
import { useTranslation } from '@lssm/libs-feat.translation';

export const AppUnLoggedLayout = (props: PropsWithChildren) => {
  const { t } = useTranslation('appMeet');

  const menuItems = useMemo<Array<NavigationTopMenuItem>>(() => {
    return [
      {
        id: 'home',
        title: t('navBar.unlogged.home'),
        target: '/',
        IconElement: {
          name: 'View',
        } as IconProps,
      },
      {
        id: 'login',
        title: t('navBar.unlogged.login'),
        target: '/login',
        IconElement: {
          name: 'View',
        } as IconProps,
      },
      {
        id: 'build',
        categoryTitle: t('navBar.unlogged.legal').toString(),
        items: [
          {
            id: 'privacy',
            title: 'Privacy policy',
            target: '/legal/privacy',
            IconElement: {
              name: 'View',
            } as IconProps,
          },
          {
            id: 'legal-notice',
            title: 'Legal notice',
            target: '/legal/notice',
            IconElement: {
              name: 'LockOpen',
            } as IconProps,
          },
        ],
      } satisfies CategoryTopMenuProps,
    ] satisfies Array<NavigationTopMenuItem>;
  }, []);

  return (
    <TopNavBarLayout navigationMenu={{ items: menuItems, menuTitle: APP_NAME }}>
      {props.children}
    </TopNavBarLayout>
  );
};
