"use client"
import React, { useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { serviceSchema } from '@/helpers/helpers'

const HomeService = () => {
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
        <main className='home-service'>
            <motion.section
                ref={ref}
                initial="hidden"
                animate={controls}
                variants={{
                    visible: { opacity: 1, y: 0 },
                    hidden: { opacity: 0, y: 100 }
                }}
                transition={{ duration: 0.8 }}
                className='flex items-center gap-[20px] h-[200px] service-container'>
                {serviceSchema.map((slug, i) => (
                    <motion.div
                        style={{ transitionDelay: `${i * 0.2}s` }}
                        whileInView={{ opacity: 1 }}
                        key={slug.label} className='item'>
                        <span className='label font-extralight'>{`0${slug.label}`}</span>
                        <p className=' font-extralight name'>{slug.name}</p>
                        <p className='desc'>{slug.description}</p>
                    </motion.div>
                ))}
            </motion.section>
        </main>
    )
}

export default HomeService
