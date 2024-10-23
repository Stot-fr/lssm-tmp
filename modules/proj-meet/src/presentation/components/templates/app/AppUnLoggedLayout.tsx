"use client";
import type { IconName } from "@lssm/icons-kit/icons";

import { type PropsWithChildren, useMemo } from "react";
import { APP_NAME } from "../../../constants/app";
import {
  type NavigationTopMenuProps,
  TopNavBarLayout,
} from "@lssm/design-system/components/templates/layouts/TopNavBarLayout";

export const AppUnLoggedLayout = (props: PropsWithChildren) => {
  const user = null;

  const menuItems = useMemo<NavigationTopMenuProps["items"]>(() => {
    return [
      {
        id: "home",
        title: "Home",
        target: "/",
        IconElement: {
          name: "View" as IconName,
        },
      },
      {
        id: "login",
        title: "Login",
        target: "/login",
        IconElement: {
          name: "View" as IconName,
        },
      },
      {
        id: "build",
        category: "Legal",
        items: [
          {
            id: "privacy",
            title: "Privacy policy",
            target: "/legal/privacy",
            IconElement: {
              name: "View" as IconName,
            },
          },
          {
            id: "legal-notice",
            title: "Legal notice",
            target: "/legal/notice",
            IconElement: {
              name: "LockOpen" as IconName,
            },
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
            IconElement: {
              name: "ChartSpline" as IconName,
            },
          },
          {
            id: "performance",
            title: "Performance",
            target: "/perf",
            IconElement: {
              name: "Rabbit" as IconName,
            },
          },
        ],
      },
    ];
  }, []);

  return (
    <TopNavBarLayout navigationMenu={{ items: menuItems, menuTitle: APP_NAME }}>
      {props.children}
    </TopNavBarLayout>
  );
};
