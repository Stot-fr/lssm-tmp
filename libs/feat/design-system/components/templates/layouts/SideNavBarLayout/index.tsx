import React, { useEffect, useState } from "react";
import { View } from "@/ui-kit/ui/view";
import { Button } from "../../../atoms/Fields/Button";
import { Drawer, DrawerBackdrop, DrawerContent } from "@/ui-kit/ui/drawer";
import {
  NavigationSideMenu,
  type NavigationSideMenuProps,
} from "../../../organisms/NavigationSideMenu";

export const SideNavBarLayout: React.FC<{
  children: React.ReactNode;
  navigationMenu: NavigationSideMenuProps;
}> = ({ children, navigationMenu }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 800);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 800);
      if (window.innerWidth > 800) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (isMobile)
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
  else {
    return (
      <View className="flex flex-row h-screen w-screen">
        <View className="top-0 left-0 h-screen z-10 w-1/4 max-w-sm min-w-64 shadow-md">
          <NavigationSideMenu {...navigationMenu} />
        </View>

        <View className="flex-1">{children}</View>
      </View>
    );
  }
};
