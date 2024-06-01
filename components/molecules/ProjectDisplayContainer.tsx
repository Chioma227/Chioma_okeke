import React from 'react'
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
    return (
        <main className='w-[30rem] border border-1 relative border-amber-100 border-opacity-10'>
            <div className=''>
                <Img {...img} className='w-[100%] object-cover' />
            </div>
            <Container variant={containerVariants.PFLEXED}>
                <p>{projectName}</p>
                <Link href="">View</Link>
            </Container>
        </main>
    )
}

export default ProjectDisplayContainer
