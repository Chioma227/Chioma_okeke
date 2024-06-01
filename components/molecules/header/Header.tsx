"use client"
import clsx from 'clsx'
import Button from '../../atoms/button'
import AnchorLink from '../../atoms/link'
import { linkSchema } from '@/helpers/helpers'
import React, { useEffect, useState } from 'react'
import { ButtonVariant } from '@/variants/rootVariants'



const Header = () => {
    const [isFixed, setIsFixed] = useState(false)
   
    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            setIsFixed(scrollPosition > 20);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    })
    return (
        <div className='flex justify-center items-center'>
            <nav className={clsx(
                isFixed ?
                    "bg-stone-300 transition-all fixed bg-opacity-10 w-[100%] z-[1000] top-0 start-0 duration-75 header backdrop-blur-sm"
                    : "bg-stone-300 transition-all duration-75 bg-opacity-10 md:mt-[30px] md:w-fit w-[90%] mt-[10px] border-gray-200 border border-opacity-10 header backdrop-blur-sm"
            )}>
                <div className="max-w-screen-xl flex items-center md:justify-around justify-between mx-auto p-4 gap-4">
                    <div className=" md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse md:block hidden">
                        <Button variant={ButtonVariant.DEFAULT}>LETS TALK</Button>
                    </div>
                    <div className="items-center  hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
                        {linkSchema.map((slug, i) => {
                            return (
                                <AnchorLink key={i} href={slug.href} className='md:px-2 md:py-2 uppercase navlink'>
                                    {slug.name}
                                </AnchorLink>
                            )
                        })}
                    </div>
                    <p className='logo'>chioma.</p>
                    <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-orange-50 rounded-lg md:hidden  dark:text-orange-50" aria-controls="navbar-sticky" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>
                </div>
            </nav>
        </div>
    )
}

export default Header
