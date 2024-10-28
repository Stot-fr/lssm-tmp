import { cn } from '@gluestack-ui/nativewind-utils/cn';
import { i18n, useTranslation } from '@lssm/lib-feat.translation';
import Icon, { type IconProps } from '@lssm/lib-service.icons-kit';
import { Link } from '@lssm/lib-service.ui-kit/ui/link/index';
import { Text } from '@lssm/lib-service.ui-kit/ui/text';
import { VStack } from '@lssm/lib-service.ui-kit/ui/vstack';
import { usePathname } from '@unitools/navigation';
import React from 'react';
import { ScrollView } from 'react-native';

export type SidebarEntryItem = {
  icon: IconProps;
  name: string;
  link: null | string;
};

export type SidebarSection = {
  title: string;
  items: SidebarEntryItem[];
};

type SidebarSectionProps = {
  section: SidebarSection;
};

const SidebarSection = (props: SidebarSectionProps) => {
  const pathname = usePathname();

  return (
    <VStack className="w-full px-0 py-2" space="xs">
      <Text className="text-typography-600 px-4 py-2">
        {props.section.title}
      </Text>

      {props.section.items.map((item) => {
        const isActive = !!(
          item.link &&
          pathname &&
          (item.link.length === 1
            ? pathname === item.link
            : pathname.startsWith(item.link))
        );

        const className = cn({
          'flex-row px-4 py-3 items-center gap-2 rounded': true,
          'bg-background-950': isActive,
          'bg-background-0': !isActive,
        });
        const content = (
          <>
            <Icon
              {...item.icon}
              className={cn({
                'stroke-background-0 fill-background-800': isActive,
                'stroke-background-800 fill-none': !isActive,
              })}
            />
            <Text
              className={cn({
                'text-typography-0': isActive,
                'text-typography-700': !isActive,
              })}
            >
              {item.name}
            </Text>
          </>
        );

        if (item.link) {
          return (
            <Link href={item.link} key={item.name} className={className}>
              {content}
            </Link>
          );
        }

        return (
          <VStack key={item.name} className={className}>
            {content}
          </VStack>
        );
      })}
    </VStack>
  );
};

export type SidebarProps = {
  nothing?: undefined;
};

export const Sidebar = (_props: SidebarProps) => {
  const { t } = useTranslation();

  const SECTIONS: Array<SidebarSection> = [
    {
      title: t('appMeet:sideBar.appLinks.title'),
      items: [
        {
          name: t('appMeet:sideBar.appLinks.links.home'),
          icon: { name: 'House' },
          link: '/',
        },
        {
          name: t('appMeet:sideBar.appLinks.links.habits'),
          icon: { name: 'Repeat' },
          link: '/habits',
        },
        {
          name: t('appMeet:sideBar.appLinks.links.events'),
          icon: { name: 'CalendarDays' },
          link: '/events',
        },
        {
          name: t('appMeet:sideBar.appLinks.links.contacts'),
          icon: { name: 'Users' },
          link: '/contacts',
        },
      ],
    },
    {
      title: t('appMeet:sideBar.settings.title'),
      items: [
        {
          name: t('appMeet:sideBar.settings.links.profile'),
          icon: { name: 'UserCog' },
          link: '/profile',
        },
        {
          name: t('appMeet:sideBar.settings.links.preferences'),
          icon: { name: 'Cog' },
          link: '/settings',
        },
        {
          name: t('appMeet:sideBar.settings.links.billing'),
          icon: { name: 'CreditCard' },
          link: '/billing',
        },
      ],
    },
    {
      title: t('appMeet:sideBar.resources.title'),
      items: [
        {
          name: t('appMeet:sideBar.resources.links.blog'),
          icon: { name: 'Newspaper' },
          link: null,
        },
        {
          name: t('appMeet:sideBar.resources.links.faq'),
          icon: { name: 'CircleHelp' },
          link: null,
        },
        {
          name: t('appMeet:sideBar.resources.links.community'),
          icon: { name: 'Boxes' },
          link: null,
        },
      ],
    },
    {
      title: t('appMeet:sideBar.moreApps.title'),
      items: [
        {
          name: t('appMeet:sideBar.moreApps.links.freelance'),
          icon: { name: 'Timer' },
          link: null,
        },
        {
          name: t('appMeet:sideBar.moreApps.links.messaging'),
          icon: { name: 'MailWarning' },
          link: null,
        },
        {
          name: t('appMeet:sideBar.moreApps.links.habits'),
          icon: { name: 'Calendar' },
          link: null,
        },
      ],
    },
  ];

  return (
    <ScrollView className=" h-full" contentContainerStyle={{ flexGrow: 1 }}>
      <VStack
        className="h-full flex-1 w-[280px] py-4 pr-4 pl-8 items-center border-r border-border-300"
        space="xl"
      >
        {SECTIONS.map((section) => (
          <SidebarSection key={section.title} section={section} />
        ))}
      </VStack>
    </ScrollView>
  );
};
