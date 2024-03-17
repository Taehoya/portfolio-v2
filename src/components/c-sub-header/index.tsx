import * as S from './page.styled';

interface Props {
    title: string;
    icon?: React.ReactElement;
}

export default function CSubHeader({ title, icon }: Props) {
    return (
        <S.Container>
            {icon && <S.Icon>{icon}</S.Icon>}
            <S.Title>{title}</S.Title>
        </S.Container>
    );
}
