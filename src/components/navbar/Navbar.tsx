import { useState } from 'react'
import logo from '../../assets/logo.png'
import NavItem from './NavItem'
export default function Navbar() {
    const [isVisible, setIsVisible] = useState(false)
    return (
        <nav className="w-full h-20 flex items-center justify-between  border-b border-r  bg-gradient-to-r from-primary/30 from-35% to-primary/30 rounded-br-full z-[400]"
        >
            <div className='basis-1/2 lg:basis-1/4 h-full flex items-center justify-center border-b border-r border-primary  bg-primary rounded-br-full'>
                <img src={logo} alt="expertmove" className='h-5 lg:h-10 ' />
            </div>
            <ul className={`${!isVisible ? '-translate-x-full md:translate-x-0' : ''} absolute md:static top-20 h-full md:h-fit pt-10 md:pt-0 px-4 md:px-0 bg-primary/80 md:bg-transparent w-full flex flex-col md:flex-row md:items-center md:justify-end gap-2 lg:gap-16 mr-5 lg:mr-24 transition-transform z-30`}>
                <NavItem href='#home' isActive >Home</NavItem>
                <NavItem href='#services'>Services</NavItem>
                <NavItem href='#about' >About</NavItem>


            </ul>
            <button className='md:hidden mr-10 bg-secondrey text-white px-3 py-1 rounded' onClick={() => { setIsVisible(!isVisible) }}>Menu</button>
        </nav>
    )
}