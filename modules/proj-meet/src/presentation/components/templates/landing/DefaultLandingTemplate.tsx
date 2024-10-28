'use client';

import { Card } from '@lssm/design-system/components/atoms/Card/index';
import { Button } from '@lssm/design-system/components/atoms/Fields/Button/index';
import { Link, LinkText } from '@lssm/lib-service.ui-kit/ui/link';
import { Text } from '@lssm/lib-service.ui-kit/ui/text';
import { useTranslation } from '@lssm/libs-feat.translation';

export const DefaultLandingTemplate = () => {
  const { t } = useTranslation();

  return (
    <>
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

      <Card
        contentHeader={
          <>
            <Text>test</Text>
          </>
        }
        contentFooter={
          <>
            <Text>test</Text>
          </>
        }
        configActions={{ actions: [] }}
      >
        <Text>{t('common:actions.add')}</Text>
      </Card>
    </>
  );
};
