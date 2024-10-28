import Icon from '@lssm/lib-service.icons-kit';
import { Avatar, AvatarFallbackText } from '@lssm/lib-service.ui-kit/ui/avatar';
import { HStack } from '@lssm/lib-service.ui-kit/ui/hstack';
import { Pressable } from '@lssm/lib-service.ui-kit/ui/pressable/index';
import { Text } from '@lssm/lib-service.ui-kit/ui/text';
import React from 'react';

import { LanguageSwitcher } from '../../molecules/LanguageSwitcher';
import type { BaseHeaderTopNavProps } from './types';

export type HeaderWebTopNavProps = BaseHeaderTopNavProps & {
  toggleSidebar: () => void;
};

export const HeaderWebTopNavBar = (props: HeaderWebTopNavProps) => {
  return (
    <HStack className="pt-4 pr-10 pb-3 bg-background-0 items-center justify-between border-b border-border-300">
      <HStack className="items-center">
        <Pressable
          onPress={() => {
            props.toggleSidebar();
          }}
        >
          <Icon name="Menu" size="24" className="mx-5" />
        </Pressable>
        <Text className="text-2xl">{props.title}</Text>
      </HStack>

      <HStack className="gap-4">
        <Avatar className="h-9 w-9">
          <Icon name="User" className="stroke-white" />{' '}
        </Avatar>

        <LanguageSwitcher />
      </HStack>
    </HStack>
  );
};
