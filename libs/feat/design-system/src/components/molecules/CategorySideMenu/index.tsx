import type { IconProps } from '@lssm/lib-service.icons-kit';
import Icon from '@lssm/lib-service.icons-kit';
import { Link } from '@lssm/lib-service.ui-kit/ui/link';
import { Text } from '@lssm/lib-service.ui-kit/ui/text';
import { View } from '@lssm/lib-service.ui-kit/ui/view';

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
    <View className="space-y-2 mb-4 border-gray-500 border-t">
      <Text className="text-lg font-semibold text-white px-3 py-4">
        {category}
      </Text>

      {items.map((item) => (
        <Link
          key={item.id}
          href={item.target}
          className="flex items-center space-x-2 py-3 px-3 hover:bg-gray-900 hover:bg-opacity-50 flex-row"
        >
          {item.IconElement && (
            <Icon {...item.IconElement} className="text-gray-400" />
          )}
          <Text className="text-gray-400">{item.title}</Text>
        </Link>
      ))}
    </View>
  );
};
