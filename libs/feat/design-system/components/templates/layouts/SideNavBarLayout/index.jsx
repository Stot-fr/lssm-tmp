import React, { useEffect, useState } from "react";
import { Dimensions } from "react-native";
import { View } from "@/ui-kit/ui/view";
import { Button } from "../../../atoms/Fields/Button";
import { Drawer, DrawerBackdrop, DrawerContent } from "@/ui-kit/ui/drawer";
import { NavigationSideMenu, } from "../../../organisms/NavigationSideMenu";
export const SideNavBarLayout = ({ children, navigationMenu }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(Dimensions.get("window").width <= 800);
    useEffect(() => {
        const handleResize = () => {
            const screenWidth = Dimensions.get("window").width;
            setIsMobile(screenWidth <= 800);
            if (screenWidth > 800) {
                setIsMenuOpen(false);
            }
        };
        const subscription = Dimensions.addEventListener("change", handleResize);
        return () => {
            subscription.remove();
        };
    }, []);
    if (isMobile)
        return (<View className="flex flex-row h-screen w-screen">
        <Button onPress={() => {
                setIsMenuOpen(true);
            }} label="Show Drawer"/>
        <Drawer isOpen={isMenuOpen} onClose={() => {
                setIsMenuOpen(false);
            }}>
          <DrawerBackdrop />
          <DrawerContent className="p-0 w-1/3 max-w-sm min-w-64 shadow-md border-0">
            <NavigationSideMenu {...navigationMenu}/>
          </DrawerContent>
        </Drawer>

        <View className="flex-1">{children}</View>
      </View>);
    else {
        return (<View className="flex flex-row h-screen w-screen">
        <View className="top-0 left-0 h-screen z-10 w-1/4 max-w-sm min-w-64 shadow-md">
          <NavigationSideMenu {...navigationMenu}/>
        </View>

        <View className="flex-1">{children}</View>
      </View>);
    }
};
