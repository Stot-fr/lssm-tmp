import React from "react";
import { View } from "@/ui-kit/ui/view";
import { NavigationSideMenu } from "../../../organisms/NavigationSideMenu";

const menu = [
  {
    id: "build",
    category: "Build",
    items: [
      {
        id: "overview",
        title: "Overview",
        target: "/overview",
      },
      {
        id: "auth",
        title: "Authentification",
        target: "/auth",
      },
      {
        id: "db",
        title: "Database",
        target: "/database",
      },
    ],
  },
  {
    id: "quality",
    category: "Quality",
    items: [
      {
        id: "analytics",
        title: "Analytics",
        target: "/analytics",
      },
      {
        id: "performance",
        title: "Performance",
        target: "/perf",
      },
    ],
  },
];

export const SideNavBarLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <View className="flex h-screen w-screen">
      <View className="absolute top-0 left-0 h-screen z-10 w-1/5 max-w-sm min-w-min">
        <NavigationSideMenu menuTitle="LSSM Test Project" menu={menu} />
      </View>

      <View className="flex-1">{children}</View>
    </View>
  );
};
