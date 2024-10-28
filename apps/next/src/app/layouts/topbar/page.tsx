'use client';
import { Button } from '@lssm/lib-feat.design-system/components/atoms/Fields/Button/index';
import { Link, LinkText } from '@lssm/lib-service.ui-kit/ui/link';
import { AppUnLoggedLayout } from '@lssm/module.proj-meet/presentation/components/templates/app/AppUnLoggedLayout';

const Page = () => {
  return (
    <AppUnLoggedLayout title="test">
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
