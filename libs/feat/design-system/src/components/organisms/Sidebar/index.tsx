import { cn } from '@gluestack-ui/nativewind-utils/cn';
import Icon, { type IconProps } from '@lssm/lib-service.icons-kit';
import { Pressable } from '@lssm/lib-service.ui-kit/ui/pressable/index';
import { Text } from '@lssm/lib-service.ui-kit/ui/text';
import { VStack } from '@lssm/lib-service.ui-kit/ui/vstack';
import { usePathname } from '@unitools/navigation';
import useRouter from '@unitools/router';
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

const AppLinks: SidebarSection = {
  title: 'AppLinks',
  items: [
    {
      name: 'Home',
      icon: { name: 'House' },
      link: '/',
    },
    {
      name: 'Habits',
      icon: { name: 'Repeat' },
      link: '/habits',
    },
  ],
};
const SettingsList: SidebarSection = {
  title: 'Settings',
  items: [
    {
      name: 'Profile',
      icon: { name: 'UserCog' },
      link: '/profile',
    },
    {
      name: 'Preferences',
      icon: { name: 'Cog' },
      link: '/settings',
    },
    {
      name: 'Subscription',
      icon: { name: 'CreditCard' },
      link: '/billing',
    },
  ],
};
const ResourcesList: SidebarSection = {
  title: 'Resources',
  items: [
    {
      name: 'Downloads',
      icon: { name: 'Download' },
      link: null,
    },
    {
      name: 'FAQs',
      icon: { name: 'CircleHelp' },
      link: null,
    },
    {
      name: 'News & Blogs',
      icon: { name: 'Newspaper' },
      link: null,
    },
  ],
};

type SidebarSectionProps = {
  section: SidebarSection;
};

const SidebarSection = (props: SidebarSectionProps) => {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <VStack className="w-full px-0 pt-3 pb-4" space="xs">
      <Text className="text-typography-600 px-4 py-2">
        {props.section.title}
      </Text>

      {props.section.items.map((item, index) => {
        const isActive = item.link && !!pathname?.startsWith(item.link);

        return (
          <Pressable
            key={index}
            onPress={() => {
              if (!item.link) {
                return;
              }

              void router.push(item.link);
            }}
            className={cn({
              'flex-row px-4 py-3 items-center gap-2 rounded': true,
              'bg-background-950': isActive,
              'bg-background-0': !isActive,
            })}
          >
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
          </Pressable>
        );
      })}
    </VStack>
  );
};

export type SidebarProps = {
  nothing?: undefined;
};

export const Sidebar = (_props: SidebarProps) => {
  return (
    <ScrollView className=" h-full" contentContainerStyle={{ flexGrow: 1 }}>
      <VStack
        className="h-full flex-1 w-[280px] py-4 pr-4 pl-8 items-center border-r border-border-300"
        space="xl"
      >
        <SidebarSection section={AppLinks} />
        <SidebarSection section={SettingsList} />
        <SidebarSection section={ResourcesList} />
      </VStack>
    </ScrollView>
  );
};
