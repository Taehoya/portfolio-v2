'use client';

import { useState, useEffect } from 'react';
import * as S from './page.styled';

export default function CHamburgerIcon() {
    const [active, setActive] = useState(false);

    return (
        <S.Container
            onClick={() => {
                setActive(active => !active);
            }}
        >
            <S.Bar $active={active}></S.Bar>
            <S.Bar $active={active}></S.Bar>
            <S.Bar $active={active}></S.Bar>
            <S.Bar $active={active}></S.Bar>
        </S.Container>
    );
}
