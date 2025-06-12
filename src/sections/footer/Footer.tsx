import { ReactNode, useRef } from 'react'
import logo from '../../assets/logo.png'

import { useGSAP } from '@gsap/react';

export default function Footer() {

    return (
        <footer className='footer flex flex-col md:flex-row items-start justify-center gap-12 md:gap-0 px-4 lg:px-32 pt-6 pb-12 lg:py-20 bg-gradient-to-l from-secondrey to-60% to-primary '>
            <div className='pr-16'>
                <div className='w-48 md:w-64 border-b border-white/40 pb-5 mb-12'>
                    <img src={logo} alt='export move logo' className='w-full  object-cover' />
                </div>
                <section>
                    <ul className='text-white font-AeonikTRIALRegular flex flex-col gap-4'>
                        <FooterLi >+963 000 000 000</FooterLi>
                        <FooterLi > example@email.com</FooterLi>
                    </ul>
                </section>
            </div>
            <section className='md:px-16 w-full md:border-l border-white/40 h-full'>
                <ul className='flex flex-col gap-4'>
                    <span className='text-white text-lg md:text-xl font-bold font-AeonikTRIALBold opacity-80'>Links</span>
                    <a href="#home"><FooterLi>Home</FooterLi></a>
                    <a href="#services"><FooterLi>Services</FooterLi></a>
                    <a href="#about">  <FooterLi>About Us</FooterLi></a>
                </ul>
            </section>
        </footer>
    )
}
function FooterLi({ children }: { children: ReactNode }) {
    return <li className='text-white opacity-90 font-AeonikTRIALRegular text-md'>{children}</li>
}