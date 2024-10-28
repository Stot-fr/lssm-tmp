import type { IconName } from '@lssm/icons-kit/icons';
import Icon from '@lssm/icons-kit/icons';
import {
  Button as UiButton,
  ButtonText as UiButtonText,
} from '@lssm/lib-service.ui-kit/ui/button';
import type { ComponentProps } from 'react';

export interface ButtonProps extends ComponentProps<typeof UiButton> {
  label: string;
  startIcon?: IconName;
  endIcon?: IconName;
}

export const Button = (props: ButtonProps) => {
  const { label, startIcon, endIcon } = props;

  return (
    <UiButton {...props}>
      {startIcon && <Icon name={startIcon} color="#FFFFFF" size={32} />}
      <UiButtonText>{label}</UiButtonText>
      {endIcon && <Icon name={endIcon} color="#FFFFFF" size={32} />}
    </UiButton>
  );
};
