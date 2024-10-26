import { icons } from 'lucide-react';

export type IconName = keyof typeof icons;

export interface IconProps {
  name: IconName;
  color?: string;
  size?: number;
  className?: string;
}

const Icon = (props: IconProps) => {
  const { name } = props;
  const LucideIcon = icons[name];

  return <LucideIcon {...props} size={props?.size ?? 16} />;
};

export default Icon;
