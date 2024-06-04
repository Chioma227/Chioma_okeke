"use client"
import React, { useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Img from '../atoms/img'
import Link from 'next/link'
import Container from '../atoms/container'
import { containerVariants } from '@/variants/rootVariants'


interface imgProps {
    src: string;
    alt: string;
    width: number;
    height: number;
    className?: string;
    ext: string
}

interface projectContainerProps {
    img: imgProps
    projectName: string;
}

const ProjectDisplayContainer = ({ img, projectName }: projectContainerProps) => {
    const controls = useAnimation();
    const { ref, inView } = useInView();

    useEffect(() => {
        if (inView) {
            controls.start("visible");
        } else {
            controls.start("hidden");
        }
    }, [controls, inView]);
    return (
        <motion.main
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={{
                visible: { y: 1, opacity: 1 },
                hidden: { y: 50, opacity: 0 },
            }}
            transition={{ duration: 0.9, type: "tween" }}
            whileInView={{ opacity: 1, }}
            className='border border-1 relative border-amber-100 border-opacity-10 md:mb-0 mb-[10px]'>
            <div className='img-container'>
                <Img {...img} className='w-[100%] m-auto object-cover' />
            </div>
            <Container variant={containerVariants.PFLEXED}>
                <p>{projectName}</p>
                <Link href="">View</Link>
            </Container>
        </motion.main>
    )
}

export default ProjectDisplayContainer
