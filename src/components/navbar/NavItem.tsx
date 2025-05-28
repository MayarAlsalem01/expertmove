import { ReactNode } from "react";

export default function NavItem({ children, isActive, href }: { children: ReactNode, isActive?: boolean, href: string }) {
    return (
        <a href={href}>

            <li className={`text-white px-3 py-1 lg:px-9 lg:py-3 font-bold AeonikTRIALBoldItalic italic lg:text-lg ${isActive ? 'bg-secondrey  rounded-tl-[30px] rounded-br-[30px]  shadow-sm shadow-black' : ''}`}>
                {children}
            </li>
        </a>
    )
}