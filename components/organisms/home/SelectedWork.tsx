import React from 'react'
import ProjectDisplayContainer from '@/components/molecules/ProjectDisplayContainer'
import { projectData } from '@/helpers/helpers'
import Container from '@/components/atoms/container'
import { GoArrowUpRight } from "react-icons/go";
import Link from 'next/link'
import { containerVariants } from '@/variants/rootVariants'
import Icon from '@/components/atoms/Icon';

const SelectedWork = () => {
    return (
        <main className='md:mt-[9rem] mt-[6rem]'>
            <Container variant={containerVariants.FLEX_BTWN}>
                <p className='projects-title'>Selected <span>Work</span></p>
                <Link href="/projects" className='flex items-center gap-1 font-light md:text-base text-[13px] text-wheat-bold'>
                    <small>SEE ALL</small>
                    <Icon>
                        <GoArrowUpRight />
                    </Icon>
                </Link>
            </Container>
            <div className='mb-[3rem] mt-[10px] w-[100%] grid-container'>
                {projectData.map((slug, i) => (
                    <ProjectDisplayContainer
                        key={i}
                        img={{
                            src: slug.imgSrc,
                            alt: slug.alt,
                            width: slug.width,
                            height: slug.height,
                            ext: slug.extension,
                            className: " grid-item"
                        }}
                        projectName={slug.name}
                    />
                ))}
            </div>
        </main>
    )
}

export default SelectedWork
