"use client"
import React from 'react'
import Img from '@/components/atoms/img';
import { motion } from 'framer-motion';
import { FaReact } from "react-icons/fa";
import { RiNextjsLine } from "react-icons/ri";
import { TbBrandTypescript } from "react-icons/tb";
import { Tooltip } from 'react-tooltip';
import { FaSass } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { BiLogoRedux } from "react-icons/bi";
import { TbBrandFramerMotion } from "react-icons/tb";
import Container from '@/components/atoms/container';
import { containerVariants } from '@/variants/rootVariants';

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

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ type: "tween", duration: 0.7 }}
                className='flex items-center justify-center mt-[-70px]'
            >
                <Img src="hero" alt='hero' width={500} height={200} ext='png' />
            </motion.div>
            <motion.div
                initial={{ y: 60, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ type: "tween", duration: 0.7 }}
                className='flex items-center justify-center flex-col mt-[-150px] z-10'>
                <p className='hero-header'>Web Developer</p>
                <p className='hero-caption'>Translating design ideas into visually appealing websites and enhancing performance.</p>
            </motion.div>
            <div>
                <section className='mt-[5rem] flex items-center justify-center gap-[60px]' >
                    {stackSchema.map((slug, i) => (
                        <div key={i} className=' cursor-pointer text-[30px] icon'>
                            <p data-tooltip-id={slug.name} data-tooltip-content={slug.name} data-tooltip-place='top' >{slug.icon}</p>
                            <Tooltip id={slug.name} />
                        </div>
                    ))}
                </section>
            </div>
        </section>
    )
}

export default Hero
