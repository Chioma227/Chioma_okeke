import React from 'react'
import ProjectDisplayContainer from '@/components/molecules/ProjectDisplayContainer'
import { projectData } from '@/helpers/helpers'

const SelectedWork = () => {
    return (
        <div className='grid grid-cols-2 gap-2 mt-[9rem] mb-[3rem]'>
            {projectData.map((slug, i) => (
                <ProjectDisplayContainer
                    key={i}
                    img={{
                        src: slug.imgSrc,
                        alt: slug.alt,
                        width: slug.width,
                        height: slug.height,
                        ext: slug.extension,
                        className:"w-full"
                    }}
                    projectName={slug.name}
                />
            ))}
        </div>
    )
}

export default SelectedWork
