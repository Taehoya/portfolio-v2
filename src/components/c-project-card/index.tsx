'use client';

import CIConSet from '@/components/c-icon-set';
import icons from '@/components/tech-icons';
import * as S from './page.styled';

interface Props {
    title: string;
    techStack: string[];
    github?: string;
    demo?: string;
    description: string;
    bullets?: string[];
    imgSrc: string;
}

export default function CProjectCard({ title, techStack, description, bullets, imgSrc }: Props) {
    const techIcons = techStack.map(icon => icons[icon]);

    return (
        <S.Container>
            <S.Content>
                <S.TitleContainer>
                    <S.Title>{title}</S.Title>
                </S.TitleContainer>
                <CIConSet icons={techIcons} />

                <S.DescriptionContainer>{description}</S.DescriptionContainer>
            </S.Content>

            <S.ThumbNailContainer>
                <S.Thumbnail>
                    <S.Image alt={title} src={imgSrc} />
                </S.Thumbnail>
            </S.ThumbNailContainer>
        </S.Container>
    );
}
