import { type CategorySideMenuProps } from "../../molecules/CategorySideMenu";
export interface NavigationSideMenuProps {
    menuTitle: string;
    menu: CategorySideMenuProps[];
}
export declare const NavigationSideMenu: ({ menu, menuTitle, }: NavigationSideMenuProps) => import("react/jsx-runtime").JSX.Element;
