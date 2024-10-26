import { icons } from 'lucide-react';
export type IconName = keyof typeof icons;
export interface IconProps {
    name: IconName;
    color?: string;
    size?: number;
    className?: string;
}
declare const Icon: (props: IconProps) => import("react/jsx-runtime").JSX.Element;
export default Icon;
