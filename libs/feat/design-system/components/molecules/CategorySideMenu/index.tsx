import type { IconProps } from "@/icons-kit/icons";

import { View } from "@/ui-kit/ui/view";
import { Text } from "@/ui-kit/ui/text";
import { Link } from "@/ui-kit/ui/link";

export type CategorySideMenuItem = {
  id: string;
  IconElement?: IconProps;
  target: string;
  title: string;
};

export interface CategorySideMenuProps {
  id: string;
  category: string;
  items: CategorySideMenuItem[];
}

export const CategorySideMenu = ({
  category,
  items,
}: CategorySideMenuProps) => {
  return (
    <View className="space-y-2">
      <Text className="text-sm uppercase text-gray-400">{category}</Text>

      {items.map((item) => (
        <Link
          key={item.id}
          href={item.target}
          className="flex items-center space-x-2 py-2 px-3 hover:bg-blue-800 rounded-md"
        >
          <Text>{item.title}</Text>
        </Link>
      ))}
    </View>
  );
};
