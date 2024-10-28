import { cn } from '@gluestack-ui/nativewind-utils/cn';
import Icon, { type IconProps } from '@lssm/lib-service.icons-kit';
import { Pressable } from '@lssm/lib-service.ui-kit/ui/pressable/index';
import { Text } from '@lssm/lib-service.ui-kit/ui/text';
import { VStack } from '@lssm/lib-service.ui-kit/ui/vstack';
// import { DownloadIcon, SettingsIcon } from 'lucide-react-native';
import React, { useState } from 'react';
import { ScrollView } from 'react-native';

export type EntryItem = IconProps & {
  title: string;
};

const SettingsList: EntryItem[] = [
  {
    name: 'Settings',
    title: 'Profile',
  },
  {
    name: 'Settings',
    title: 'Preferences',
  },
  {
    name: 'Settings',
    title: 'Subscription',
  },
];
const ResourcesList: EntryItem[] = [
  {
    name: 'Download',
    title: 'Downloads',
  },
  {
    name: 'Download',
    title: 'FAQs',
  },
  {
    name: 'Download',
    title: 'News & Blogs',
  },
];

export type SidebarProps = {
  nothing?: undefined;
};

export const Sidebar = (_props: SidebarProps) => {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const [selectedIndexResources, setSelectedIndexResources] =
    useState<number>(0);
  const handlePress = (index: number) => {
    setSelectedIndex(index);
    // router.push("/profile/profile");
  };
  const handlePressResources = (index: number) => {
    setSelectedIndexResources(index);
    // router.push("/profile/profile");
  };
  return (
    <ScrollView className=" h-full" contentContainerStyle={{ flexGrow: 1 }}>
      <VStack
        className="h-full flex-1 w-[280px] py-4 pr-4 pl-8 items-center border-r border-border-300"
        space="xl"
      >
        <VStack className="w-full px-2 pt-3 pb-4" space="xs">
          <Text className="text-typography-600 px-4 py-2">SETTINGS</Text>
          {SettingsList.map((item, index) => {
            return (
              <Pressable
                key={index}
                onPress={() => handlePress(index)}
                className={cn({
                  'flex-row px-4 py-3 items-center gap-2 rounded': true,
                  'bg-background-950': index === selectedIndex,
                  'bg-background-0': index !== selectedIndex,
                })}
              >
                <Icon
                  {...item}
                  className={cn({
                    'stroke-background-0 fill-background-800':
                      index === selectedIndex,
                    'stroke-background-800 fill-none': index !== selectedIndex,
                  })}
                />
                <Text
                  className={cn({
                    'text-typography-0': index === selectedIndex,
                    'text-typography-700': index !== selectedIndex,
                  })}
                >
                  {item.title}
                </Text>
              </Pressable>
            );
          })}
        </VStack>
        <VStack className="w-full px-2 pt-3 pb-4" space="xs">
          <Text className="text-typography-600 px-4 py-2">RESOURCES</Text>
          {ResourcesList.map((item, index) => {
            return (
              <Pressable
                key={index}
                onPress={() => handlePressResources(index)}
                className={cn({
                  'flex-row px-4 py-3 items-center gap-2 rounded': true,
                  'bg-background-950': index === selectedIndexResources,
                  'bg-background-0': index !== selectedIndexResources,
                })}
              >
                <Icon
                  {...item}
                  className={cn({
                    'h-10 w-10': true,
                    'stroke-background-0': index === selectedIndexResources,
                    'stroke-background-800': index !== selectedIndexResources,
                  })}
                />
                <Text
                  className={cn({
                    'text-typography-0': index === selectedIndexResources,
                    'text-typography-700': index !== selectedIndexResources,
                  })}
                >
                  {item.title}
                </Text>
              </Pressable>
            );
          })}
        </VStack>
      </VStack>
    </ScrollView>
  );
};
