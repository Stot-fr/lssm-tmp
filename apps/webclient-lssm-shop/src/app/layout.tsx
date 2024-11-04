'use client';

import { GluestackUIProvider } from '@lssm/lib-service.ui-kit/ui/gluestack-ui-provider';
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
          <GluestackUIProvider mode="light">{children}</GluestackUIProvider>
        </StyledJsxRegistry>
      </body>
    </html>
  );
}
