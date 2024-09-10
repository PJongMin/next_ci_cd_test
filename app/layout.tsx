import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/providers/themeProvider';
import { sleep } from '@/lib/utils';
import Sidebar from '../components/Sidebar';

export default async function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  // console.log('before rootLayout sleep');
  // await sleep(2000); // 외부 백엔드 데이터 요청 //루트에서는 최대한 바로 페이지를 보여주고 다른 하위 컴포넌트에서 데이터를 요청할것
  // console.log('after rootLayout sleep');
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body>
          <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
            <Sidebar>{children}</Sidebar>
          </ThemeProvider>
        </body>
      </html>
    </>
  );
}
