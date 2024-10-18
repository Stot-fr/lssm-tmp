import {
  Button as UiButton,
  ButtonText as UiButtonText,
} from "@/ui-kit/ui/button";

import type { ComponentProps } from "react";

interface ButtonProps extends ComponentProps<typeof UiButton> {
  label: string;
  icon?: string;
}

export const Button = (props: ButtonProps) => {
  const { label } = props;

  return (
    <UiButton {...props}>
      <UiButtonText>{label}</UiButtonText>
    </UiButton>
  );
};
