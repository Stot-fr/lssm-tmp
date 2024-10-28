import type { IconProps } from '@lssm/icons-kit/icons';
import Icon from '@lssm/icons-kit/icons';
import { Link, LinkText } from '@lssm/lib-service.ui-kit/ui/link';
import {
  Menu,
  MenuItem,
  MenuItemLabel,
} from '@lssm/lib-service.ui-kit/ui/menu';
import { Text } from '@lssm/lib-service.ui-kit/ui/text';
import { View } from '@lssm/lib-service.ui-kit/ui/view';
import { LanguageSwitcher } from '@lssm/module.proj-meet/presentation/components/molecules/LanguageSwitcher';
import React from 'react';
import { SafeAreaView } from 'react-native';

type CategoryTopMenuItem = {
  id: string;
  target: string;
  title: string;
  IconElement?: IconProps;
};

export interface CategoryTopMenuProps {
  id: string;
  categoryTitle: string;
  IconElement?: IconProps;
  items: CategoryTopMenuItem[];
  target?: undefined;
}

export type NavigationTopMenuItem = CategoryTopMenuItem | CategoryTopMenuProps;

export interface NavigationTopMenuProps {
  menuTitle: string;
  items: Array<NavigationTopMenuItem>;
}

export const TopNavBarLayout: React.FC<{
  children: React.ReactNode;
  navigationMenu: NavigationTopMenuProps;
}> = ({ children, navigationMenu }) => {
  const { menuTitle, items } = navigationMenu;
  // const [isMobile, setIsMobile] = useState(
  //   Dimensions.get('window').width <= 800,
  // );

  // useEffect(() => {
  //   const handleResize = () => {
  //     const screenWidth = Dimensions.get('window').width;
  //     setIsMobile(screenWidth <= 800);
  //   };
  //
  //   const subscription = Dimensions.addEventListener('change', handleResize);
  //
  //   return () => {
  //     subscription.remove();
  //   };
  // }, []);

  return (
    <SafeAreaView className="h-full w-full">
      <View className="flex flex-row h-16 bg-white w-full items-center fixed z-20 shadow-md justify-between px-4">
        <View className="flex-shrink-0">
          <Text className="text-gray-800 font-semibold">{menuTitle}</Text>
        </View>

        <View className="flex flex-row h-full space-x-8 items-center pr-6">
          {items.map((menuElement) => {
            if (!('categoryTitle' in menuElement)) {
              return (
                <Link
                  key={menuElement.id}
                  href={menuElement.target}
                  className="flex flex-row items-center space-x-2"
                >
                  {menuElement.IconElement && (
                    <Icon {...menuElement.IconElement} />
                  )}
                  <LinkText className="text-gray-800 no-underline">
                    {menuElement.title}
                  </LinkText>
                </Link>
              );
            }

            return (
              <Menu
                key={menuElement.id}
                placement="bottom right"
                offset={24}
                disabledKeys={['Settings']}
                trigger={({ ...triggerProps }) => {
                  return (
                    <Link
                      {...triggerProps}
                      className="flex flex-row items-center space-x-2"
                    >
                      {menuElement.IconElement && (
                        <Icon {...menuElement.IconElement} />
                      )}
                      <LinkText className="text-gray-800 no-underline">
                        {menuElement.categoryTitle}
                      </LinkText>
                    </Link>
                  );
                }}
                className="border-2-gray-800"
              >
                {menuElement.items.map((item) => (
                  <MenuItem
                    key={item.id}
                    textValue={item.target}
                    className="focus:bg-gray-100 hover:bg-gray-800"
                  >
                    <Link
                      href={item.target}
                      className="flex flex-row items-center space-x-2"
                    >
                      <MenuItemLabel size="sm">
                        <LinkText className="">{item.title}</LinkText>
                      </MenuItemLabel>
                    </Link>
                  </MenuItem>
                ))}
              </Menu>
            );
          })}

          <LanguageSwitcher />
        </View>
      </View>

      <View className="flex flex-1 pt-20">{children}</View>
    </SafeAreaView>
  );
};
