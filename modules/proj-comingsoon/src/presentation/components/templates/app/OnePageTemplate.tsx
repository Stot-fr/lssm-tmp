import { ScrollToTop } from '@lssm/lib-feat.design-system/components/molecules/ScrollToTop/index';
import { useTranslation } from '@lssm/lib-feat.translation';
import { VStack } from '@lssm/lib-service.ui-kit/ui/vstack';
import { type ReactNode } from 'react';

import { Footer } from '../../organisms/Footer';
import { Header } from '../../organisms/Header';

export type AppUnLoggedLayoutProps = {
  children: ReactNode;
  title: string;
};

export const OnePageTemplate = (props: AppUnLoggedLayoutProps) => {
  const { t } = useTranslation('landing');

  return (
    <VStack className="bg-[#FCFCFC] dark:bg-black ${inter.className}">
      <Header />
      {props.children}
      <Footer />
      <ScrollToTop />
    </VStack>
  );
};
