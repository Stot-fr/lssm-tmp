import type { IconProps } from "@/icons-kit/icons";
export type CategorySideMenuItem = {
    id: string;
    IconElement?: IconProps;
    target: string;
    title: string;
};
export interface CategorySideMenuProps {
    id: string;
    category: string;
    items: CategorySideMenuItem[];
}
export declare const CategorySideMenu: ({ category, items, }: CategorySideMenuProps) => import("react/jsx-runtime").JSX.Element;
