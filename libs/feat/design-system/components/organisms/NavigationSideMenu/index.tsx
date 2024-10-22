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
    <ScrollView className="w-full bg-gray-700 text-white h-screen">
      <Text className="text-xl text-white p-4 border-gray-500 border-b">{menuTitle}</Text>
      {menu.map((menuCategory) => (
        <CategorySideMenu {...menuCategory} key={menuCategory.id} />
      ))}
    </ScrollView>
  );
};
