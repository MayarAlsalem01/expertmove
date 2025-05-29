import { MouseEvent, MouseEventHandler, ReactEventHandler, ReactNode } from "react";

export default function NavItem({ children, isActive, href, onClick }: { children: ReactNode, isActive?: boolean, href: string, onClick?: MouseEventHandler<HTMLAnchorElement> }) {
    return (
        <a href={href} onClick={onClick}>

            <li className={`text-white px-3 py-1 lg:px-9 lg:py-3 font-bold AeonikTRIALBoldItalic italic lg:text-lg ${isActive ? 'bg-secondrey  rounded-tl-[30px] rounded-br-[30px]  shadow-sm shadow-black' : ''}`}>
                {children}
            </li>
        </a>
    )
}