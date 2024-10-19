import {
  Button as UiButton,
  ButtonText as UiButtonText,
} from "@/ui-kit/ui/button";
import Icon from "@/icons-kit/icons";

import type { ComponentProps } from "react";
import type { IconName } from "@/icons-kit/icons";

interface ButtonProps extends ComponentProps<typeof UiButton> {
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
