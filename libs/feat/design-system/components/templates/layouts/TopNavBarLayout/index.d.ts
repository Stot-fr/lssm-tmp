import type { IconProps } from "@/icons-kit/icons";
type CategoryTopMenuItem = {
    id: string;
    target: string;
    title: string;
};
interface CategoryTopMenuProps {
    id: string;
    category: string;
    IconElement?: IconProps;
    items: CategoryTopMenuItem[];
}
interface NavigationTopMenuProps {
    menuTitle: string;
    menu: CategoryTopMenuProps[];
}
export declare const TopNavBarLayout: React.FC<{
    children: React.ReactNode;
    navigationMenu: NavigationTopMenuProps;
}>;
export {};
