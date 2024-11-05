import { Box } from '@lssm/lib-service.ui-kit/ui/box';
import { Card as UiCard } from '@lssm/lib-service.ui-kit/ui/card';
import { Heading } from '@lssm/lib-service.ui-kit/ui/heading';
import { VStack } from '@lssm/lib-service.ui-kit/ui/vstack';
import type { ComponentProps, ReactNode } from 'react';

import { Divider } from '../Divider';
import type { ButtonProps } from '../Fields/Button';

export interface CardActionConfig {
  actions: Array<ButtonProps>;
}

export interface CardProps extends ComponentProps<typeof UiCard> {
  contentHeader: ReactNode;
  contentFooter: ReactNode;
  configActions: CardActionConfig;
}

export const Card = ({
  contentHeader,
  contentFooter,
  configActions,
  children,
  ...extraProps
}: CardProps) => {
  return (
    <UiCard {...extraProps} size="lg" variant="elevated" className="m-3">
      {contentHeader && (
        <>
          <Heading size="md" className="mb-1">
            Quick Start
          </Heading>
          <Divider orientation="horizontal" />
        </>
      )}

      {children}
      {/*<Text size="sm">Start building your next project in minutes</Text>*/}

      {contentHeader && (
        <>
          <Divider orientation="horizontal" />
          <VStack space="md" reversed={false}>
            <Box className="h-20 w-20 bg-primary-300" />
            <Box className="h-20 w-20 bg-primary-400" />
            <Box className="h-20 w-20 bg-primary-500" />

            <Box className="h-20 w-20 bg-primary-300" />
            <Box className="h-20 w-20 bg-primary-400" />
            <Box className="h-20 w-20 bg-primary-500" />

            <Box className="h-20 w-20 bg-primary-300" />
            <Box className="h-20 w-20 bg-primary-400" />
            <Box className="h-20 w-20 bg-primary-500" />

            <Box className="h-20 w-20 bg-primary-300" />
            <Box className="h-20 w-20 bg-primary-400" />
            <Box className="h-20 w-20 bg-primary-500" />

            <Box className="h-20 w-20 bg-primary-300" />
            <Box className="h-20 w-20 bg-primary-400" />
            <Box className="h-20 w-20 bg-primary-500" />

            <Box className="h-20 w-20 bg-primary-300" />
            <Box className="h-20 w-20 bg-primary-400" />
            <Box className="h-20 w-20 bg-primary-500" />

            <Box className="h-20 w-20 bg-primary-300" />
            <Box className="h-20 w-20 bg-primary-400" />
            <Box className="h-20 w-20 bg-primary-500" />

            <Box className="h-20 w-20 bg-primary-300" />
            <Box className="h-20 w-20 bg-primary-400" />
            <Box className="h-20 w-20 bg-primary-500" />
          </VStack>
        </>
      )}
    </UiCard>
  );
};
