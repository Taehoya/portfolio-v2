'use client';

import StyledComponentsRegistry from '@/lib/registry';
import { GlobalStyle } from '@/styles/GlobalStyle';
import { theme } from '@/styles/theme';
import { ThemeProvider } from 'styled-components';
import localFont from 'next/font/local';
import { Quicksand } from 'next/font/google';

const font = Quicksand({
    weight: ['500', '700'],
    preload: false,
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className={`${font.className}`}>
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
