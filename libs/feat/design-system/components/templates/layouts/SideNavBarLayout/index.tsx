import React, { useEffect, useState } from "react";
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
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

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

  if (isMobile) return children;
  else {
    return (
      <View className="flex flex-row h-screen w-screen">
        <View className="top-0 left-0 h-screen z-10 w-1/4 max-w-sm min-w-64 shadow-md">
          <NavigationSideMenu menuTitle="LSSM Test Project" menu={menu} />
        </View>

        <View className="flex-1">{children}</View>
      </View>
    );
  }
};
