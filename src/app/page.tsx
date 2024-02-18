'use client';

import CSideBar from '@/components/c-sidebar';
import * as S from './page.styled';

export default function Home() {
    return (
        <S.Container>
            <CSideBar />
            <S.MainContent>
                <h1>Home</h1>
            </S.MainContent>
        </S.Container>
    );
}
