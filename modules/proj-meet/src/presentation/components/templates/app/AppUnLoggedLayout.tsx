'use client';

import {
  type NavigationTopMenuProps,
  TopNavBarLayout,
} from '@lssm/design-system/components/templates/layouts/TopNavBarLayout';
import type { IconName } from '@lssm/icons-kit/icons';
import { type PropsWithChildren, useMemo } from 'react';

import { APP_NAME } from '../../../constants/app';
import { useTranslation } from '@lssm/libs-feat.translation/src';

export const AppUnLoggedLayout = (props: PropsWithChildren) => {
  const { t } = useTranslation('appMeet');

  const user = null;

  const menuItems = useMemo<NavigationTopMenuProps['items']>(() => {
    return [
      {
        id: 'home',
        title: t('navBar.unlogged.home'),
        target: '/',
        IconElement: {
          name: 'View' as IconName,
        },
      },
      {
        id: 'login',
        title: t('navBar.unlogged.login'),
        target: '/login',
        IconElement: {
          name: 'View' as IconName,
        },
      },
      {
        id: 'build',
        title: t('navBar.unlogged.legal'),
        items: [
          {
            id: 'privacy',
            title: 'Privacy policy',
            target: '/legal/privacy',
            IconElement: {
              name: 'View' as IconName,
            },
          },
          {
            id: 'legal-notice',
            title: 'Legal notice',
            target: '/legal/notice',
            IconElement: {
              name: 'LockOpen' as IconName,
            },
          },
        ],
      },
    ];
  }, []);

  return (
    <TopNavBarLayout navigationMenu={{ items: menuItems, menuTitle: APP_NAME }}>
      {props.children}
    </TopNavBarLayout>
  );
};
