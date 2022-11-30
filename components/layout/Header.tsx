import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { AiOutlineHome, AiOutlineFundProjectionScreen, AiOutlineIdcard } from 'react-icons/ai'
import { MdWorkOutline }  from 'react-icons/md'

const NavTable = {
    '/': {
        name: "Home",
        icon: <AiOutlineHome/>
    },
    '/Experience': {
        name: "Experience",
        icon: <MdWorkOutline/>
    },
    '/Project': {
        name: "Project",
        icon: <AiOutlineFundProjectionScreen/>
    },
    '/Contact': {
        name: "Contact",
        icon: <AiOutlineIdcard/>
    }
}


const Header = () => {
    const { asPath } = useRouter();

    return (
        <>
            <aside className="fixed top-0 bottom-0 w-1/6 max-w-sm border-r font-semibold">
                <div className="flex flex-col ml-2 xl:ml-5">
                    <div className = "hidden md:block mt-10 select-none">
                        <Link href = "/">
                            <p className="md:text-2xl xl:text-4xl 2xl:text-6xl  text-black hover:text-black/30 transition transition-duration:100ms">TaehoChoi</p>
                            <p className="text-sm xl:text-5sm text-black/40 xl:ml-1 2xl:ml-2">태호의 블로그</p>
                        </Link>
                    </div>

                    <ul className="mt-40 flex flex-col">
                        {Object.entries(NavTable).map(([href, value]) => (
                            <li 
                                key = {href} 
                                className={`text-3xl md:text-xl 2xl:text-4xl mb-2 2xl:mb-5 text-black/30 hover:text-black
                                ${asPath === href ? "text-black": ""}
                                `}
                            >
                                <Link href = {href}>
                                    <p className ="flex flex-row gap-2 items-center p-2">
                                        <span>{value.icon}</span>
                                        <span className='hidden md:block'>{value.name}</span>
                                    </p>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </aside>
        </>
    );
};

export default Header;