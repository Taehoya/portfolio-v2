import * as S from './page.styled';

interface Props {
    title: string;
    icon: React.ReactNode;
    isActive: boolean;
    clickEvent?: () => void;
}

export default function CNavButton({ title, icon, isActive, clickEvent }: Props) {
    return (
        <>
            <S.Button
                $isActive={isActive}
                onClick={() => {
                    if (clickEvent) clickEvent();
                }}
            >
                <S.Title>{title}</S.Title>
            </S.Button>
        </>
    );
}
