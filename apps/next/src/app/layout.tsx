'use client';

import i18n, { I18nextProvider } from '@lssm/libs-feat.translation/src/index';
import { GluestackUIProvider } from '@lssm/ui-kit/ui/gluestack-ui-provider';
import { Inter } from 'next/font/google';

import StyledJsxRegistry from './registry';

const inter = Inter({ subsets: ['latin'] });
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className} style={{ display: 'flex' }}>
        <StyledJsxRegistry>
          <GluestackUIProvider mode="light">
            <I18nextProvider i18n={i18n}>{children}</I18nextProvider>
          </GluestackUIProvider>
        </StyledJsxRegistry>
      </body>
    </html>
  );
}
