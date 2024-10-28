import {
  Drawer,
  DrawerBackdrop,
  DrawerContent,
} from '@lssm/lib-service.ui-kit/ui/drawer';
import { View } from '@lssm/lib-service.ui-kit/ui/view';
import React, { useEffect, useState } from 'react';
import { Dimensions, SafeAreaView } from 'react-native';

import { Button } from '../../../atoms/Fields/Button';
import {
  NavigationSideMenu,
  type NavigationSideMenuProps,
} from '../../../organisms/NavigationSideMenu';

export type SideNavBarLayoutProps = {
  children: React.ReactNode;
  navigationMenu: NavigationSideMenuProps;
};

export const SideNavBarLayout: React.FC<SideNavBarLayoutProps> = ({
  children,
  navigationMenu,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(
    Dimensions.get('window').width <= 800,
  );

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = Dimensions.get('window').width;
      setIsMobile(screenWidth <= 800);

      if (screenWidth > 800) {
        setIsMenuOpen(false);
      }
    };

    const subscription = Dimensions.addEventListener('change', handleResize);

    return () => {
      subscription.remove();
    };
  }, []);

  if (isMobile) {
    return (
      <View className="flex flex-row h-screen w-screen">
        <Button
          onPress={() => {
            setIsMenuOpen(true);
          }}
          label="Show Drawer"
        />
        <Drawer
          isOpen={isMenuOpen}
          onClose={() => {
            setIsMenuOpen(false);
          }}
        >
          <DrawerBackdrop />
          <DrawerContent className="p-0 w-1/3 max-w-sm min-w-64 shadow-md border-0">
            <NavigationSideMenu {...navigationMenu} />
          </DrawerContent>
        </Drawer>

        <View className="flex-1">{children}</View>
      </View>
    );
  }

  return (
    <SafeAreaView className="h-full w-full">
      <View className="flex flex-row h-screen w-screen">
        <View className="top-0 left-0 h-screen z-10 w-1/4 max-w-sm min-w-64 shadow-md">
          <NavigationSideMenu {...navigationMenu} />
        </View>

        <View className="flex-1">{children}</View>
      </View>
    </SafeAreaView>
  );
};
