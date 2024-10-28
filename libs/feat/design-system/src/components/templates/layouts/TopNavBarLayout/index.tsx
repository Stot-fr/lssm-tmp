import type { IconProps } from '@lssm/lib-service.icons-kit';
import { Box } from '@lssm/lib-service.ui-kit/ui/box';
import { HStack } from '@lssm/lib-service.ui-kit/ui/hstack';
import { VStack } from '@lssm/lib-service.ui-kit/ui/vstack';
import React, { useState } from 'react';
import { SafeAreaView, ScrollView } from 'react-native';

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
  isSidebarVisible?: boolean;
  children: React.ReactNode;
}
export const TopNavBarLayout: React.FC<NavigationTopMenuProps> = (props) => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(
    props.isSidebarVisible !== undefined ? props.isSidebarVisible : true,
  );

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  const Header = (
    <>
      <Box className="md:hidden">
        <HeaderMobileTopNavBar title={props.menuTitle} />
      </Box>
      <Box className="hidden md:flex">
        <HeaderWebTopNavBar
          toggleSidebar={toggleSidebar}
          title={props.menuTitle}
        />
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
            <ScrollView className="w-full flex-1 p-4">
              {props.children}
            </ScrollView>
          </HStack>
        </VStack>
      </VStack>
    </SafeAreaView>
  );
};
