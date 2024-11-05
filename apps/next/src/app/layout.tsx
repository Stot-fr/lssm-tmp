'use client';

import { ClerkProvider } from '@clerk/nextjs';
import { GluestackUIProvider } from '@lssm/lib-service.ui-kit/ui/gluestack-ui-provider';

import StyledJsxRegistry from './registry';

// const inter = Inter({ subsets: ['latin'] });
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body style={{ display: 'flex' }}>
          {/*<body className={inter.className} style={{ display: 'flex' }}>*/}
          <StyledJsxRegistry>
            <GluestackUIProvider mode="light">{children}</GluestackUIProvider>
          </StyledJsxRegistry>
        </body>
      </html>
    </ClerkProvider>
  );
}
