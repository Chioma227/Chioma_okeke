"use client"
import React from 'react'
import Img from '@/components/atoms/img';
import { FaReact } from "react-icons/fa";
import { RiNextjsLine } from "react-icons/ri";
import { TbBrandTypescript } from "react-icons/tb";
// import { Tooltip } from 'react-tooltip';
import { FaSass } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { BiLogoRedux } from "react-icons/bi";
import { TbBrandFramerMotion } from "react-icons/tb";


interface stackProps {
    name: string,
    icon: React.ReactNode | any,
}

const Hero = () => {
    const stackSchema: stackProps[] = [
        {
            name: "React",
            icon: <FaReact />
        },
        {
            name: "Next.js",
            icon: <RiNextjsLine />
        },
        {
            name: "Typescript",
            icon: <TbBrandTypescript />
        },
        {
            name: "Redux",
            icon: <BiLogoRedux />
        },
        {
            name: "Tailwind",
            icon: <SiTailwindcss />
        },
        {
            name: "Sass",
            icon: <FaSass />
        },
        {
            name: "Framer Motion",
            icon: <TbBrandFramerMotion />
        },
        {
            name: "Zustand",
            icon: "z"
        },
    ]
    return (
        <section>
            <div
                className='flex items-center justify-center mt-[-70px]'
            >
                <Img src="hero" alt='hero' width={500} height={200} ext='png' />
            </div>
            <div
                className='flex items-center justify-center flex-col md:mt-[-150px] sm:mt-[-100px] mt-[-70px] z-10'>
                <p className='hero-header'>Web Developer</p>
                <p className='hero-caption'>Translating design ideas into visually appealing websites and enhancing performance.</p>
            </div>
            <div>
                <section className='md:mt-[5rem] sm:mt-[4rem] mt-[2rem] flex items-center justify-center gap-[60px] overflow-x-scroll [&::-webkit-scrollbar]:hidden' >
                    {stackSchema.map((slug, i) => (
                        <div key={i} className=' cursor-pointer text-[30px] icon'>
                            <p>{slug.icon}</p>
                            {/* <Tooltip id={slug.name} /> */}
                        </div>
                    ))}
                </section>
            </div>
        </section>
    )
}

export default Hero
