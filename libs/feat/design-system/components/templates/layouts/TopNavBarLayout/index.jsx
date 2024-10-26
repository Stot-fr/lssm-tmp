import { useEffect, useState } from "react";
import { Dimensions } from "react-native";
import { View } from "@/ui-kit/ui/view";
import { Menu, MenuItem, MenuItemLabel } from "@/ui-kit/ui/menu";
import { Link, LinkText } from "@/ui-kit/ui/link";
import { Text } from "@/ui-kit/ui/text";
import Icon from "@/icons-kit/icons";
export const TopNavBarLayout = ({ children, navigationMenu }) => {
    const { menuTitle, menu } = navigationMenu;
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 800);
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
    return (<View className="flex flex-column h-screen w-screen">
      <View className="flex flex-row h-16 bg-white w-full items-center fixed z-20 shadow-md justify-between px-4">
        <View className="flex-shrink-0">
          <Text className="text-gray-800 font-semibold">{menuTitle}</Text>
        </View>

        <View className="flex flex-row h-full space-x-8 items-center pr-6">
          {menu.map((menuElement) => (<Menu key={menuElement.id} placement="bottom right" offset={24} disabledKeys={["Settings"]} trigger={({ ...triggerProps }) => {
                return (<Link {...triggerProps} className="flex flex-row items-center space-x-2">
                    {menuElement.IconElement && (<Icon {...menuElement.IconElement}/>)}
                    <LinkText className="text-gray-800 no-underline">
                      {menuElement.category}
                    </LinkText>
                  </Link>);
            }} className="border-2-gray-800">
              {menuElement.items.map((item) => (<MenuItem key={item.id} textValue={item.target} className="focus:bg-gray-100 hover:bg-gray-800">
                  <MenuItemLabel size="sm">{item.title}</MenuItemLabel>
                </MenuItem>))}
            </Menu>))}
        </View>
      </View>

      <View className="flex flex-1 pt-20">{children}</View>
    </View>);
};
