import type { IconProps } from "@/icons-kit/icons";

import { View } from "@/ui-kit/ui/view";
import { Text } from "@/ui-kit/ui/text";
import { ScrollView } from "@/ui-kit/ui/scroll-view";

import {
  CategorySideMenu,
  type CategorySideMenuProps,
} from "../../molecules/CategorySideMenu";

export interface NavigationSideMenuProps {
  menuTitle: string;
  menu: CategorySideMenuProps[];
}

export const NavigationSideMenu = ({
  menu,
  menuTitle,
}: NavigationSideMenuProps) => {
  return (
    <ScrollView className="w-full bg-blue-900 text-white h-screen">
      <Text className="text-2xl font-semibold mb-4">{menuTitle}</Text>
      {menu.map((menuCategory) => (
        <CategorySideMenu {...menuCategory} key={menuCategory.id} />
      ))}
    </ScrollView>
  );
};
