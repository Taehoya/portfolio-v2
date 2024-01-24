'use client';

import StyledComponentsRegistry from '@/lib/registry';
import { GlobalStyle } from '@/styles/GlobalStyle';
import { theme } from '@/styles/theme';
import { ThemeProvider } from 'styled-components';
import localFont from 'next/font/local';

const subFont = localFont({
    src: '../assets/fonts/PretendardVariable.woff2',
    display: 'swap',
    variable: '--Pretendard-Variable',
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className={`${subFont.variable}`}>
                <StyledComponentsRegistry>
                    <ThemeProvider theme={theme}>
                        <GlobalStyle />
                        {children}
                    </ThemeProvider>
                </StyledComponentsRegistry>
            </body>
        </html>
    );
}
