import * as S from './page.styled';
import Link from 'next/link';

interface Props {
    title: string;
    icon: React.ReactNode;
    href: string;
}

export default function CSocialButton({ title, icon, href }: Props) {
    return (
        <Link href={href} target="_blank">
            <S.Container>
                <S.Icon>{icon}</S.Icon>
                <S.Title>{title}</S.Title>
            </S.Container>
        </Link>
    );
}
