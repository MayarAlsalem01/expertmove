import { useState } from 'react'
import logo from '../../assets/logo.png'
import NavItem from './NavItem'
export default function Navbar() {
    const NAV_LINKS = [
        { href: '#home', label: 'Home' },
        { href: '#services', label: 'Services' },
        { href: '#about', label: 'About Us' },
    ]
    const [isVisible, setIsVisible] = useState(false)
    const [activeHref, setActiveHref] = useState<string>(NAV_LINKS[0].href)
    const handleNavClick = (href: string) => {
        console.log(href);
        setActiveHref(href)
    }
    return (
        <nav className="w-full h-20 flex items-center justify-between  border-b border-r  bg-gradient-to-r from-primary/30 from-35% to-primary/30 rounded-br-full z-[400]"
        >
            <div className='basis-1/2 lg:basis-1/4 h-full flex items-center justify-center border-b border-r border-primary  bg-primary rounded-br-full'>
                <img src={logo} alt="expertmove" className='h-5 lg:h-10 ' />
            </div>
            <ul className={`${!isVisible ? '-translate-x-full md:translate-x-0' : ''} absolute md:static top-20 h-full md:h-fit pt-10 md:pt-0 px-4 md:px-0 bg-primary/80 md:bg-transparent w-full flex flex-col md:flex-row md:items-center md:justify-end gap-2 lg:gap-16 mr-5 lg:mr-24 transition-transform z-30`}>
                {
                    NAV_LINKS.map(link => (
                        <NavItem key={link.label}
                            href={link.href}
                            isActive={activeHref === link.href}
                            onClick={() => handleNavClick(link.href)}
                        >{link.label}</NavItem>
                    ))
                }
                <NavItem href='http://wa.me/+4917615299417'>Contact</NavItem>

            </ul>
            <button className='md:hidden mr-10 bg-secondrey text-white px-3 py-1 rounded' onClick={() => { setIsVisible(!isVisible) }}>Menu</button>
        </nav>
    )
}