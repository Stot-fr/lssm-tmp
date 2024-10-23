"use client";
import { Button } from "@/design-system/components/atoms/Fields/Button";

import { Link, LinkText } from "@/ui-kit/ui/link";
import { AppUnLoggedLayout } from "@/module.proj-meet/src/presentation/components/templates/app/AppUnLoggedLayout";

const Page = () => {
  return (
    <AppUnLoggedLayout>
      <Button
        onPress={() => {
          console.log("test");
        }}
        label={"Test"}
      />
      <Link href="/">
        <LinkText>Home</LinkText>
      </Link>
      <Link href="/layouts/sidebar">
        <LinkText>Sidebar</LinkText>
      </Link>
    </AppUnLoggedLayout>
  );
};

export default Page;
