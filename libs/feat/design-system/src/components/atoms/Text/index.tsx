import { Text as UiText } from '@lssm/lib-service.ui-kit/ui/text';
import type { ComponentProps } from 'react';

interface TextProps extends ComponentProps<typeof UiText> {}

export const Text = (props: TextProps) => {
  return <UiText {...props} />;
};
