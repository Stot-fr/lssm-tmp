import { icons } from "lucide-react";

export type IconName = keyof typeof icons;

interface IconProps {
  name: IconName;
  color: string;
  size: number;
}

const Icon = ({ name, color, size }: IconProps) => {
  const LucideIcon = icons[name];

  return <LucideIcon color={color} size={size} />;
};

export default Icon;
