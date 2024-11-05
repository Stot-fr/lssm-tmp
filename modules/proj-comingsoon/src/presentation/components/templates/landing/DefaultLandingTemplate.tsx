import { Card } from '@lssm/lib-feat.design-system/components/atoms/Card/index';
import { Button } from '@lssm/lib-feat.design-system/components/atoms/Fields/Button/index';
import { useTranslation } from '@lssm/lib-feat.translation';
import { Text } from '@lssm/lib-service.ui-kit/ui/text';
import { VStack } from '@lssm/lib-service.ui-kit/ui/vstack';

import { AboutSectionOne } from '../../organisms/About/AboutSectionOne';
import { AboutSectionTwo } from '../../organisms/About/AboutSectionTwo';
import { Brands } from '../../organisms/Brands/index';
import { Contact } from '../../organisms/Contact/index';
import { Features } from '../../organisms/Features/index';
import { Hero } from '../../organisms/Hero/index';
import Pricing from '../../organisms/Pricing/index';

export const DefaultLandingTemplate = () => {
  const { t } = useTranslation();

  return (
    <>
      <Hero />
      <Features />
      <Brands />
      <AboutSectionOne />
      <AboutSectionTwo />
      <Pricing />
      <Contact />

      <VStack>
        <Button
          onPress={() => {
            console.log('test');
          }}
          label={'Test'}
          className="w-fit"
        />

        <Card
          contentHeader={<Text>test</Text>}
          contentFooter={<Text>test</Text>}
          configActions={{ actions: [] }}
        >
          <Text>{t('common:actions.add')}</Text>
        </Card>
      </VStack>
    </>
  );
};
