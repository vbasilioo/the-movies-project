'use client';

import '@/styles/globals.css';
import { ScrollArea } from '@/components/ui/scroll-area';
import { ThemeProvider } from 'next-themes';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Toaster } from '@/components/ui/sonner';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from '@/lib/react-query';
import { TooltipProvider } from '@/components/ui/tooltip';
import { ThemeChanger } from '@/components/theme-changer';
import { NuqsAdapter } from 'nuqs/adapters/next/app';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning={true} lang="pt-BR">
      <body>
        <NuqsAdapter>
          <ScrollArea className="h-screen w-full">
            <main>
              <ThemeProvider attribute={'class'} defaultTheme="system">
                <Toaster theme="system" richColors position="top-center" />
                <HelmetProvider>
                  <Helmet titleTemplate="%s | The Movies" />
                  <QueryClientProvider client={queryClient}>
                    <TooltipProvider>{children}</TooltipProvider>
                    <ThemeChanger />
                  </QueryClientProvider>
                </HelmetProvider>
              </ThemeProvider>
            </main>
          </ScrollArea>
        </NuqsAdapter>
      </body>
    </html>
  );
}
