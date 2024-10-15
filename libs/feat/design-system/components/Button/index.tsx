import {
  Button as UIButton,
  ButtonText as UIButtonText,
} from "@lssm/libs.service-ui-kit/ui/button";
import { ComponentProps } from "react";

interface IButtonProps extends ComponentProps<typeof UIButton> {
  label: string;
  type: "primary" | "secondary";
}

const Button: React.FC<IButtonProps> = (props) => {
  return (
    <UIButton
      {...props}
      style={{
        backgroundColor: props.type === "primary" ? "red" : "blue",
      }}
    >
      <UIButtonText>{props.label}</UIButtonText>
    </UIButton>
  );
};

export { Button };
