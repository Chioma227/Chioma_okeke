"use client"
import React from 'react'
import { serviceSchema } from '@/helpers/helpers'

const HomeService = () => {
       return (
        <main className='home-service'>
            <section
                className='md:flex items-center block gap-[20px] md:h-[200px] h-fit service-container '>
                {serviceSchema.map((slug, i) => (
                    <div
                        key={slug.label} className='item hover:shadow-glow transition-all duration-200 cursor-pointer hover:border-wheat'>
                        <span className='label font-extralight'>{`0${slug.label}`}</span>
                        <p className=' font-thin name'>{slug.name}</p>
                        <p className='desc'>{slug.description}</p>
                    </div>
                ))}
            </section>
        </main>
    )
}

export default HomeService
