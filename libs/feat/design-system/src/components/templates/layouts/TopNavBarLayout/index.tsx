import type { IconProps } from '@lssm/lib-service.icons-kit';
import { Box } from '@lssm/lib-service.ui-kit/ui/box';
import { HStack } from '@lssm/lib-service.ui-kit/ui/hstack';
import { VStack } from '@lssm/lib-service.ui-kit/ui/vstack';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native';

import { HeaderMobileTopNavBar } from '../../../organisms/headers/HeaderMobileTopNavBar';
import { HeaderWebTopNavBar } from '../../../organisms/headers/HeaderWebTopNavBar';
import { Sidebar } from '../../../organisms/Sidebar';

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
  title: string;
  isSidebarVisible?: boolean;
}> = (props) => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(
    props.isSidebarVisible,
  );

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

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

  const Header = (
    <>
      <Box className="md:hidden">
        <HeaderMobileTopNavBar title={props.title} />
      </Box>
      <Box className="hidden md:flex">
        <HeaderWebTopNavBar toggleSidebar={toggleSidebar} title={props.title} />
      </Box>
    </>
  );

  return (
    <SafeAreaView className="h-full w-full">
      <VStack className="h-full w-full bg-background-0">
        {Header}

        <VStack className="h-full w-full">
          <HStack className="h-full w-full">
            <Box className="hidden md:flex h-full">
              {isSidebarVisible && <Sidebar />}
            </Box>
            <VStack className="w-full flex-1">{props.children}</VStack>
          </HStack>
        </VStack>
      </VStack>

      {/*<View className="flex flex-row h-16 bg-white w-full items-center fixed z-20 shadow-md justify-between px-4">*/}
      {/*  <View className="flex-shrink-0">*/}
      {/*    <Text className="text-gray-800 font-semibold">*/}
      {/*      {props.navigationMenu.menuTitle}*/}
      {/*    </Text>*/}
      {/*  </View>*/}

      {/*  <View className="flex flex-row h-full space-x-8 items-center pr-6">*/}
      {/*    {props.navigationMenu.items.map((menuElement) => {*/}
      {/*      if (!('categoryTitle' in menuElement)) {*/}
      {/*        return (*/}
      {/*          <Link*/}
      {/*            key={menuElement.id}*/}
      {/*            href={menuElement.target}*/}
      {/*            className="flex flex-row items-center space-x-2"*/}
      {/*          >*/}
      {/*            {menuElement.IconElement && (*/}
      {/*              <Icon {...menuElement.IconElement} />*/}
      {/*            )}*/}
      {/*            <LinkText className="text-gray-800 no-underline">*/}
      {/*              {menuElement.title}*/}
      {/*            </LinkText>*/}
      {/*          </Link>*/}
      {/*        );*/}
      {/*      }*/}

      {/*      return (*/}
      {/*        <Menu*/}
      {/*          key={menuElement.id}*/}
      {/*          placement="bottom right"*/}
      {/*          offset={24}*/}
      {/*          disabledKeys={['Settings']}*/}
      {/*          trigger={({ ...triggerProps }) => {*/}
      {/*            return (*/}
      {/*              <Link*/}
      {/*                {...triggerProps}*/}
      {/*                className="flex flex-row items-center space-x-2"*/}
      {/*              >*/}
      {/*                {menuElement.IconElement && (*/}
      {/*                  <Icon {...menuElement.IconElement} />*/}
      {/*                )}*/}
      {/*                <LinkText className="text-gray-800 no-underline">*/}
      {/*                  {menuElement.categoryTitle}*/}
      {/*                </LinkText>*/}
      {/*              </Link>*/}
      {/*            );*/}
      {/*          }}*/}
      {/*          className="border-2-gray-800"*/}
      {/*        >*/}
      {/*          {menuElement.items.map((item) => (*/}
      {/*            <MenuItem*/}
      {/*              key={item.id}*/}
      {/*              textValue={item.target}*/}
      {/*              className="focus:bg-gray-100 hover:bg-gray-800"*/}
      {/*            >*/}
      {/*              <Link*/}
      {/*                href={item.target}*/}
      {/*                className="flex flex-row items-center space-x-2"*/}
      {/*              >*/}
      {/*                <MenuItemLabel size="sm">*/}
      {/*                  <LinkText className="">{item.title}</LinkText>*/}
      {/*                </MenuItemLabel>*/}
      {/*              </Link>*/}
      {/*            </MenuItem>*/}
      {/*          ))}*/}
      {/*        </Menu>*/}
      {/*      );*/}
      {/*    })}*/}

      {/*    <LanguageSwitcher />*/}
      {/*  </View>*/}
      {/*</View>*/}
    </SafeAreaView>
  );
};
