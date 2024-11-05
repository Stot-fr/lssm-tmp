import { ScrollToTop } from '@lssm/lib-feat.design-system/components/molecules/ScrollToTop/index';
import { useTranslation } from '@lssm/lib-feat.translation';
import { clsx } from 'clsx';
import { type ReactNode } from 'react';
import { ScrollView } from 'react-native';

import { Footer } from '../../organisms/Footer';
import { Header } from '../../organisms/Header';

export type AppUnLoggedLayoutProps = {
  children: ReactNode;
  title: string;
};

export const OnePageTemplate = (props: AppUnLoggedLayoutProps) => {
  const { t } = useTranslation('landing');

  return (
    <div className={`bg-[#FCFCFC] dark:bg-black w-full h-full`}>
      {/*<VStack className={`bg-[#FCFCFC] dark:bg-black ${inter.className}`}>*/}
      <Header />
      <ScrollView className={clsx('pt-[120px]')}>{props.children}</ScrollView>
      <Footer />
      <ScrollToTop />
    </div>
  );
};
