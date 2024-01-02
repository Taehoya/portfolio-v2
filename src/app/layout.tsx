'use client';

import StyledComponentsRegistry from '@/lib/registry';
import { GlobalStyle } from '@/styles/GlobalStyle';
import { theme } from '@/styles/theme';
import type { Metadata } from 'next';
import { ThemeProvider } from 'styled-components';

export const metadata: Metadata = {
    title: 'portfoli-v2',
    description: 'My portfolio v2',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body>
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
