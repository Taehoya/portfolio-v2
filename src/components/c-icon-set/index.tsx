import { IconType } from 'react-icons';
import * as S from './page.styled';

interface Props {
    icons: IconType[];
}

export default function CIConSet({ icons }: Props) {
    return (
        <S.Container>
            {icons.map((IconComponent, index) => (
                <S.Icon key={index}>
                    <IconComponent />
                </S.Icon>
            ))}
        </S.Container>
    );
}
