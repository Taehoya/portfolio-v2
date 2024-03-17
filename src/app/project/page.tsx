'use client';

import CProjectCard from '@/components/c-project-card';
import CSideBar from '@/components/c-sidebar';
import CSubHeader from '@/components/c-sub-header';
import * as S from './page.styled';

export default function ProjectPage() {
    return (
        <>
            <CSideBar />
            <S.ContainerWrapper>
                <S.Container>
                    <S.ProjectContainer>
                        <CSubHeader title="Projects" />
                        <S.ProjectList>
                            <CProjectCard
                                title="Portfolio V2"
                                techStack={['ts', 'react', 'next', 'docker', 'aws']}
                                description={
                                    'Second iteration of portfolio developed using Next.js and deployed through AWS Amplify'
                                }
                                imgSrc="/image/Project/portfolio.jpg"
                            />
                            <CProjectCard
                                title="Tastetionary"
                                techStack={['ts', 'go', 'nest', 'react', 'next', 'docker', 'aws']}
                                description={
                                    'A lunchtime menu and restaurant assistant service, designed to streamline the menu selection process for busy working professionals by offering location-based recommendations for nearby dining options.'
                                }
                                imgSrc="/image/Project/taste.png"
                            />
                            <CProjectCard
                                title="With Trip"
                                techStack={['ts', 'go', 'mysql', 'react', 'next', 'docker', 'aws']}
                                description={
                                    'A travel-focused expense tracking web-application that users can document trip expenses individually or as a group.'
                                }
                                imgSrc="/image/Project/trip2.png"
                            />
                        </S.ProjectList>
                    </S.ProjectContainer>
                </S.Container>
            </S.ContainerWrapper>
        </>
    );
}
