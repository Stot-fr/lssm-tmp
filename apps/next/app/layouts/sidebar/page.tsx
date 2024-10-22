"use client";
import { Button } from "@/design-system/components/atoms/Fields/Button";
import { SideNavBarLayout } from "@/design-system/components/templates/Layouts/SideNavBarLayout";
import { IconName } from "@/icons-kit/icons";

import { Link, LinkText } from "@/ui-kit/ui/link";

const menuTitle = "LSSM Project";
const testMenu = [
  {
    id: "build",
    category: "Build",
    items: [
      {
        id: "overview",
        title: "Overview",
        target: "/overview",
        IconElement: {
          name: "View" as IconName,
        },
      },
      {
        id: "auth",
        title: "Authentification",
        target: "/auth",
        IconElement: {
          name: "LockOpen" as IconName,
        },
      },
      {
        id: "db",
        title: "Database",
        target: "/database",
        IconElement: {
          name: "Database" as IconName,
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

const Page = () => {
  return (
    <SideNavBarLayout navigationMenu={{ menu: testMenu, menuTitle }}>
      <Button
        onPress={() => {
          console.log("test");
        }}
        label={"Test"}
      />
      <Link href="/">
        <LinkText>Home</LinkText>
      </Link>
      <Link href="/layouts/topbar">
        <LinkText>Topbar</LinkText>
      </Link>
    </SideNavBarLayout>
  );
};

export default Page;
