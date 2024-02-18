import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import CSocialButton from '@/components/c-social-button';
import CNavButton from '@/components/c-nav-button';
import * as S from './page.styled';

export default function CSideBar() {
    return (
        <S.Wrapper>
            <S.Container>
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
