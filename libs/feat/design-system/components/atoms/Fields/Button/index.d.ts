import { Button as UiButton } from "@/ui-kit/ui/button";
import type { ComponentProps } from "react";
import type { IconName } from "@/icons-kit/icons";
interface ButtonProps extends ComponentProps<typeof UiButton> {
    label: string;
    startIcon?: IconName;
    endIcon?: IconName;
}
export declare const Button: (props: ButtonProps) => import("react/jsx-runtime").JSX.Element;
export {};
