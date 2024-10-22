"use client";
import { Button } from "@/design-system/components/atoms/Fields/Button";
import { TopNavBarLayout } from "@/design-system/components/templates/Layouts/TopNavBarLayout";
import { IconName } from "@/icons-kit/icons";

const menuTitle = "LSSM Project";
const testMenu = [
  {
    id: "build",
    category: "Build",
    IconElement: {
      name: "Blocks" as IconName,
    },
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
    IconElement: {
      name: "Sparkles" as IconName,
    },
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
