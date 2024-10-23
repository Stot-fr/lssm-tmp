"use client";
import { Button } from "@/design-system/components/atoms/Fields/Button";

import { Link, LinkText } from "@/ui-kit/ui/link";
import { AppLoggedLayout } from "@/module.proj-meet/src/presentation/components/templates/app/AppLoggedLayout";

const Page = () => {
  return (
    <AppLoggedLayout>
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
    </AppLoggedLayout>
  );
};

export default Page;
