import { useEffect, useState } from "react";

import { View } from "@/ui-kit/ui/view";
import { Box } from "@/ui-kit/ui/box";
import { Menu, MenuItem, MenuItemLabel } from "@/ui-kit/ui/menu";

import type { NavigationSideMenuProps } from "../../../organisms/NavigationSideMenu";
import { Link, LinkText } from "@/ui-kit/ui/link";

export const TopNavBarLayout: React.FC<{
  children: React.ReactNode;
  navigationMenu: NavigationSideMenuProps;
}> = ({ children, navigationMenu }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 800);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 800);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <View className="flex flex-row h-screen w-screen">
      <Box className="flex flex-row h-16 bg-black flex-1 mx-8 my-4">
        {[1, 2, 3].map((idx) => (
          <Menu
            key={idx}
            placement="bottom left"
            offset={5}
            disabledKeys={["Settings"]}
            trigger={({ ...triggerProps }) => {
              return (
                <Link {...triggerProps}>
                  <LinkText>Menu</LinkText>
                </Link>
              );
            }}
          >
            <MenuItem key="Add account" textValue="Add account">
              <MenuItemLabel size="sm">Add account</MenuItemLabel>
            </MenuItem>
            <MenuItem key="Community" textValue="Community">
              <MenuItemLabel size="sm">Community</MenuItemLabel>
            </MenuItem>
            <MenuItem key="Plugins" textValue="Plugins">
              <MenuItemLabel size="sm">Plugins</MenuItemLabel>
            </MenuItem>
            <MenuItem key="Settings" textValue="Settings">
              <MenuItemLabel size="sm">Settings</MenuItemLabel>
            </MenuItem>
          </Menu>
        ))}
      </Box>
    </View>
  );
};
