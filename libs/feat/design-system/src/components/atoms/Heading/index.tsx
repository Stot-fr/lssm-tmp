import { Heading as UiHeading } from '@lssm/lib-service.ui-kit/ui/heading';
import type { ComponentProps } from 'react';

export type HeadingProps = ComponentProps<typeof UiHeading>;

export const Heading = (props: HeadingProps) => {
  return <UiHeading {...props} />;
};
