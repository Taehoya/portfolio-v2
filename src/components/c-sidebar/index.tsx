'use client';

import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import CSocialButton from '@/components/c-social-button';
import CNavButton from '@/components/c-nav-button';
import CHamburgerIcon from '@/components/c-hamburger-icon';
import { useState, useEffect } from 'react';
import * as S from './page.styled';

export default function CSideBar() {
    const [active, setActive] = useState(true);
    const toggleSideBar = () => setActive(prev => !prev);
    const handleResize = () => {
        if (window.innerWidth >= 1260) {
            setActive(true);
        } else {
            setActive(false);
        }
    };

    const variants = {
        open: { opacity: 1, x: 0 },
        closed: { opacity: 0, x: '-100%' },
    };

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <S.Wrapper>
            <CHamburgerIcon active={active} clickEvent={toggleSideBar} />
            <S.Container
                $active={active}
                animate={active ? 'open' : 'closed'}
                variants={variants}
                transition={{ duration: 0.6 }}
            >
                <S.Logo>
                    <S.Title>TaehoChoi</S.Title>
                    <S.SubTitle>태호의 스케치북</S.SubTitle>
                </S.Logo>

                <S.NavContainer>
                    <CNavButton title="About" isActive={true} />
                    <CNavButton title="Experience" isActive={true} />
                    <CNavButton title="Project" isActive={true} />
                </S.NavContainer>

                <S.SocialContainer>
                    <CSocialButton title="@taehoya" icon={<GitHubIcon />} href="https://www.github.com/Taehoya" />
                    <CSocialButton
                        title="/in/taehoya"
                        icon={<LinkedInIcon />}
                        href="https://www.linkedin.com/in/taehoya/"
                    />
                    <CSocialButton
                        title="taeho.choi6809@gmail.com"
                        icon={<EmailIcon />}
                        href="mailto:taeho.choi6809@gmail.com"
                    />
                </S.SocialContainer>
            </S.Container>
        </S.Wrapper>
    );
}
