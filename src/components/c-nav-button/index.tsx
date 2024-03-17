import { motion } from 'framer-motion';
import * as S from './page.styled';

interface Props {
    title: string;
    isActive: boolean;
    clickEvent?: () => void;
}

const buttonVariants = {
    transition: {
        opacity: 1,
        type: 'spring',
        duration: 0.5,
        bounce: 0.5,
        delayChildren: 0.3,
        staggerChildren: 0.2,
    },
};

export default function CNavButton({ title, isActive, clickEvent }: Props) {
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={buttonVariants}>
            <S.Button
                $isActive={isActive}
                onClick={() => {
                    if (clickEvent) clickEvent();
                }}
            >
                <S.Title>{title}</S.Title>
            </S.Button>
        </motion.div>
    );
}
