"use client";
import { Button } from "@lssm/design-system/components/atoms/Fields/Button";

import { Link, LinkText } from "@lssm/ui-kit/ui/link";
import { AppLoggedLayout } from "@lssm/module.proj-meet/src/presentation/components/templates/app/AppLoggedLayout";

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
