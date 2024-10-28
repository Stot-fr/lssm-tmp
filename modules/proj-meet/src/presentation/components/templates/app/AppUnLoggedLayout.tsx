'use client';

import {
  type CategoryTopMenuProps,
  type NavigationTopMenuItem,
  TopNavBarLayout,
} from '@lssm/lib-feat.design-system/components/templates/layouts/TopNavBarLayout/index';
import { useTranslation } from '@lssm/lib-feat.translation';
import type { IconProps } from '@lssm/lib-service.icons-kit';
import { type ReactNode, useMemo } from 'react';

import { APP_NAME } from '../../../constants/app';

export type AppUnLoggedLayoutProps = {
  children: ReactNode;
  title: string;
};

export const AppUnLoggedLayout = (props: AppUnLoggedLayoutProps) => {
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
  }, [t]);

  return (
    <TopNavBarLayout menuTitle={APP_NAME} items={menuItems}>
      {props.children}
    </TopNavBarLayout>
  );
};
