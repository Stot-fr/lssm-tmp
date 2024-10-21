"use client";
import { Button } from "@/design-system/components/atoms/Fields/Button";
import { TopNavBarLayout } from "@/design-system/components/templates/Layouts/TopNavBarLayout";
import { IconName } from "@/icons-kit/icons";

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
    <TopNavBarLayout navigationMenu={{ menu: testMenu, menuTitle }}>
      <Button
        onPress={() => {
          console.log("test");
        }}
        label={"Test"}
      />
    </TopNavBarLayout>
  );
};

export default Page;
