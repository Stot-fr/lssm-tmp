import { Button as UiButton, ButtonText as UiButtonText, } from "@/ui-kit/ui/button";
import Icon from "@/icons-kit/icons";
export const Button = (props) => {
    const { label, startIcon, endIcon } = props;
    return (<UiButton {...props}>
      {startIcon && <Icon name={startIcon} color="#FFFFFF" size={32}/>}
      <UiButtonText>{label}</UiButtonText>
      {endIcon && <Icon name={endIcon} color="#FFFFFF" size={32}/>}
    </UiButton>);
};
