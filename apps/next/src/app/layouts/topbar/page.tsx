'use client';
import { Button } from '@lssm/design-system/components/atoms/Fields/Button';
import { AppUnLoggedLayout } from '@lssm/module.proj-meet/src/presentation/components/templates/app/AppUnLoggedLayout';
import { Link, LinkText } from '@lssm/ui-kit/ui/link';

const Page = () => {
  return (
    <AppUnLoggedLayout>
      <Button
        onPress={() => {
          console.log('test');
        }}
        label={'Test'}
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
