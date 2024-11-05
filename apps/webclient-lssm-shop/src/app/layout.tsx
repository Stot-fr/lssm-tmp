'use client';

import { GluestackUIProvider } from '@lssm/lib-service.ui-kit/ui/gluestack-ui-provider';
import { clsx } from 'clsx';
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
      <body
        className={clsx(
          'relative flex min-h-full w-full flex-col items-center overflow-x-clip bg-repeat',
          inter.className,
        )}
      >
        <StyledJsxRegistry>
          <GluestackUIProvider mode="light">{children}</GluestackUIProvider>
        </StyledJsxRegistry>
      </body>
    </html>
  );
}
