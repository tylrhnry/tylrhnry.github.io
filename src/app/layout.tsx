import type { Metadata, Viewport } from 'next';
import ClientLayout from './ClientLayout';

export const metadata: Metadata = {
  title: 'Tyler Henry - Portfolio',
  description: 'Web site showcasing skills and experience',
};

export const viewport: Viewport = {
  themeColor: '#000000',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/*<link id="favicon" rel="icon" href="/favicons/favicon-dark.ico" />*/}
        {/*<link rel="manifest" href="/manifest.json" />*/}
        <title>Tyler Henry</title>
      </head>
      <body>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
