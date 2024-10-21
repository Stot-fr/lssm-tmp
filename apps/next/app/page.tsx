"use client";
import { Button } from "@/design-system/components/atoms/Fields/Button";
import { SideNavBarLayout } from "@/design-system/components/templates/Layouts/SideNavBarLayout";

const Page = () => {
  return (
    <SideNavBarLayout>
      <Button
        onPress={() => {
          console.log("test");
        }}
        label={"Test"}
      />
    </SideNavBarLayout>
  );
};

export default Page;
