import React, { useEffect, useState } from "react";
import { Dimensions } from "react-native";

import { View } from "@lssm/ui-kit/ui/view";

import { Menu, MenuItem, MenuItemLabel } from "@lssm/ui-kit/ui/menu";
import { Link, LinkText } from "@lssm/ui-kit/ui/link";

import { Text } from "@lssm/ui-kit/ui/text";
import type { IconProps } from "@lssm/icons-kit/icons";
import Icon from "@lssm/icons-kit/icons";

type CategoryTopMenuItem = {
  id: string;
  target: string;
  title: string;
  IconElement?: IconProps;
};

interface CategoryTopMenuProps {
  id: string;
  category: string;
  IconElement?: IconProps;
  items: CategoryTopMenuItem[];
}

export interface NavigationTopMenuProps {
  menuTitle: string;
  items: Array<CategoryTopMenuItem | CategoryTopMenuProps>;
}

export const TopNavBarLayout: React.FC<{
  children: React.ReactNode;
  navigationMenu: NavigationTopMenuProps;
}> = ({ children, navigationMenu }) => {
  const { menuTitle, items } = navigationMenu;
  const [isMobile, setIsMobile] = useState(
    Dimensions.get("window").width <= 800,
  );

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = Dimensions.get("window").width;
      setIsMobile(screenWidth <= 800);
    };

    const subscription = Dimensions.addEventListener("change", handleResize);

    return () => {
      subscription.remove();
    };
  }, []);

  return (
    <View className="flex flex-column h-screen w-screen">
      <View className="flex flex-row h-16 bg-white w-full items-center fixed z-20 shadow-md justify-between px-4">
        <View className="flex-shrink-0">
          <Text className="text-gray-800 font-semibold">{menuTitle}</Text>
        </View>

        <View className="flex flex-row h-full space-x-8 items-center pr-6">
          {items.map((menuElement) => {
            if (!("category" in menuElement)) {
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
                disabledKeys={["Settings"]}
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
                        {menuElement.category}
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
        </View>
      </View>

      <View className="flex flex-1 pt-20">{children}</View>
    </View>
  );
};
