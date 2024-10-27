import { View } from '@lssm/ui-kit/ui/view';
import { Text } from '@lssm/ui-kit/ui/text';
import { ScrollView } from '@lssm/ui-kit/ui/scroll-view';
import { CategorySideMenu } from '../../molecules/CategorySideMenu';
export const NavigationSideMenu = ({ menu, menuTitle }) => {
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
