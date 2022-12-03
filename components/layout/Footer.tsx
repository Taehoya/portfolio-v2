import React from 'react'
import {AiOutlineMail, AiOutlineLinkedin, AiOutlineGithub} from 'react-icons/ai'

const Footer = () => {
  return (
    <>
        <footer className= "fixed bottom-10 left-5">
            <div>
                <ul className = "flex flex-col md:flex-row justify-center gap-4">
                    <li className="hover:bg-black/10 rounded-lg">
                        <a href = "https://github.com/Taehoya" target="_blank" rel="noreferrer" >
                            <span>
                                <AiOutlineGithub size="1.5rem"/>
                            </span>
                        </a>
                    </li>
                    <li className="hover:bg-black/10 rounded-lg">
                        <a href = "https://www.linkedin.com/in/taehoya/" target="_blank" rel="noreferrer">
                            <span>
                                <AiOutlineLinkedin size="1.5rem"/>
                            </span>
                        </a>
                    </li>
                    <li className="hover:bg-black/10 rounded-lg">
                        <a href ="mailto:cth6809@gmail.com">
                            <span>
                                <AiOutlineMail size="1.5rem"/>
                            </span>
                        </a>
                    </li>
                </ul>
                <p className="mt-3 text-xs hidden md:block">&copy; Taeho Choi</p>
            </div>
            
        </footer>
    </>
  )
}

export default Footer