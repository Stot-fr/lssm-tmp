import { ScrollView } from '@lssm/lib-service.ui-kit/ui/scroll-view';
import { Text } from '@lssm/lib-service.ui-kit/ui/text';

import {
  CategorySideMenu,
  type CategorySideMenuProps,
} from '../../molecules/CategorySideMenu';

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
      <Text className="text-xl text-white p-4 border-gray-500 border-b">
        {menuTitle}
      </Text>
      {menu.map((menuCategory) => (
        <CategorySideMenu {...menuCategory} key={menuCategory.id} />
      ))}
    </ScrollView>
  );
};
