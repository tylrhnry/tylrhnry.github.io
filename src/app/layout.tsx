import type { Metadata, Viewport } from 'next';
import ClientLayout from './ClientLayout';
import * as React from 'react';

export const metadata: Metadata = {
  title: 'Tyler Henry - Portfolio',
  description: 'Web site showcasing skills and experience',
  icons: {
    icon: '/favicons/favicon-dark.ico',
  },
};

export const viewport: Viewport = {
  themeColor: '#000000',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <title>Tyler Henry</title>
      </head>
      <body>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
