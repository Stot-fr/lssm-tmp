import { Divider as UiDivider } from '@lssm/ui-kit/ui/divider';
import type { ComponentProps } from 'react';

export type DividerProp = ComponentProps<typeof UiDivider>;

export const Divider = (props: DividerProp) => {
  return <UiDivider {...props} />;
};
