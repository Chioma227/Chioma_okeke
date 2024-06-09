"use client"
import React, { useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Icon from '@/components/atoms/Icon'
import Container from '@/components/atoms/container'
import { containerVariants } from '@/variants/rootVariants'
import { IoIosArrowRoundDown } from "react-icons/io";

const Steps = () => {
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
        <main className='steps'>
            <section className='steps--text-section'>
                <small>The process</small>
                <p>Your Website <span>in 5 steps</span></p>
                <small>These steps to ensure a functional and visually appealing website that meets your goals and provide positive experience.</small>
            </section>
            <Container variant={containerVariants.FLEX} className='gap-[20px] mt-[30px] mb-[30px] md:flex hidden h-fit'>
                <section className=' w-[100%]'>
                    <motion.div
                        ref={ref}
                        initial="hidden"
                        animate={controls}
                        variants={{
                            visible: { opacity: 1, x: 0 },
                            hidden: { opacity: 0, x: 90 }
                        }}
                        transition={{ duration: 0.8, delay: 0.7 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className='mt-[27rem] step-container'>
                        <p>Development</p>
                        <p>I&apos;ll translate design assets and functionalities into code using HTML, CSS, and JavaScript framework like React.
                            This stage involves building reusable components, structuring website layouts, and implementing interactive elements.</p>
                    </motion.div>
                    <motion.div
                        ref={ref}
                        initial="hidden"
                        animate={controls}
                        variants={{
                            visible: { opacity: 1, x: 0 },
                            hidden: { opacity: 0, x: 90 }
                        }}
                        transition={{ duration: 0.8, delay: 0.7 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className='mt-[20rem] step-container'>
                        <p>Deployment</p>
                        <p>Once testing is complete, I&apos;ll work with the team to deploy the website to a web hosting platform, making it accessible to the public.
                            This might involve configuration settings and launch procedures specific to the chosen hosting provider.</p>
                    </motion.div>
                </section>
                <section className=' relative flex items-center gap-4 justify-center flex-col'>
                    <Icon>
                        <IoIosArrowRoundDown />
                    </Icon>
                    <div className='absolute top-[15rem] z-30  p-[10px] bg-[#0E0E0E] rounded-full'>
                        <Icon className='text-[11px]'>
                            01
                        </Icon>
                    </div>
                    <div className='absolute top-[30rem] z-30  p-[10px] bg-[#0E0E0E] rounded-full'>
                        <Icon className='text-[11px]'>
                            02
                        </Icon>
                    </div>
                    <div className='absolute top-[45rem] z-30  p-[10px] bg-[#0E0E0E] rounded-full'>
                        <Icon className='text-[11px]'>
                            03
                        </Icon>
                    </div>
                    <div className='absolute top-[60rem] z-30  p-[10px] bg-[#0E0E0E] rounded-full'>
                        <Icon className='text-[11px]'>
                            04
                        </Icon>
                    </div>
                    <div className='absolute top-[75rem] z-30  p-[10px] bg-[#0E0E0E] rounded-full'>
                        <Icon className='text-[11px]'>
                            05
                        </Icon>
                    </div>
                    <div className='bg-[#dac5a75d] w-[1px] h-[100%]'></div>
                </section>
                <section className='w-[100%] '>
                    <motion.div
                        ref={ref}
                        initial="hidden"
                        animate={controls}
                        variants={{
                            visible: { opacity: 1, x: 0 },
                            hidden: { opacity: 0, x: -90 }
                        }}
                        transition={{ duration: 0.8 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className='mt-[12rem] step-container'>
                        <p>Planning and Requirement Gathering</p>
                        <p>
                            With clients, designers, and potential back-end developers, I collaborate to understand the project goals, target audience, and functionalities.
                            reviewing wireframes or mockups, and clarify technical details.
                        </p>
                    </motion.div>
                    <motion.div
                        ref={ref}
                        initial="hidden"
                        animate={controls}
                        variants={{
                            visible: { opacity: 1, x: 0 },
                            hidden: { opacity: 0, x: -90 }
                        }}
                        transition={{ duration: 0.8, delay: 0.7 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className='mt-[19rem] step-container'>
                        <p>Responsiveness and Cross-Browser Compatibility</p>
                        <p>In this step, I&apos;ll ensure the website adapts seamlessly to different screen sizes (desktop, mobile, tablet) for optimal user experience across devices.
                            I&apos;ll also test the website&apos;s functionality and appearance across various web browsers (Chrome, Firefox, Safari, etc.) to guarantee consistent performance.</p>
                    </motion.div>
                    <motion.div
                        ref={ref}
                        initial="hidden"
                        animate={controls}
                        variants={{
                            visible: { opacity: 1, x: 0 },
                            hidden: { opacity: 0, x: -90 }
                        }}
                        transition={{ duration: 0.8, delay: 0.7 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className='mt-[18rem] step-container'>
                        <p>Maintenance and Updates</p>
                        <p>Depending on the project agreement, I could be involved in the website&apos;s maintenance, fixing bugs, implementing new features, or updating content as needed.</p>
                    </motion.div>

                </section>
            </Container>
            <Container variant={containerVariants.FLEX} className='gap-[20px] mt-[30px] mb-[30px] md:hidden flex h-fit'>
                <section className=' relative flex items-center gap-4 justify-center flex-col'>
                    <Icon>
                        <IoIosArrowRoundDown />
                    </Icon>
                    <div className='absolute top-[18rem] z-30  p-[10px] bg-[#0E0E0E] rounded-full'> {/*//15*/}
                        <Icon className='text-[11px]'>
                            01
                        </Icon>
                    </div>
                    <div className='absolute top-[38rem] z-30  p-[10px] bg-[#0E0E0E] rounded-full'> {/*//30*/}
                        <Icon className='text-[11px]'>
                            02
                        </Icon>
                    </div>
                    <div className='absolute top-[55rem] z-30  p-[10px] bg-[#0E0E0E] rounded-full'>{/*//45*/}
                        <Icon className='text-[11px]'>
                            03
                        </Icon>
                    </div>
                    <div className='absolute top-[73rem] z-30  p-[10px] bg-[#0E0E0E] rounded-full'> {/*//60*/}
                        <Icon className='text-[11px]'>
                            04
                        </Icon>
                    </div>
                    <div className='absolute top-[90rem] z-30  p-[10px] bg-[#0E0E0E] rounded-full'>{/*//75*/}
                        <Icon className='text-[11px]'>
                            05
                        </Icon>
                    </div>
                    <div className='bg-[#dac5a75d] w-[1px] h-[100%]'></div>
                </section>
                <section className=' w-[100%]'>
                    <motion.div
                        ref={ref}
                        initial="hidden"
                        animate={controls}
                        variants={{
                            visible: { opacity: 1, x: 0 },
                            hidden: { opacity: 0, x: -90 }
                        }}
                        transition={{ duration: 0.8 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className='smx:mt-[9rem] step-container'>  {/*//12*/}
                        <p>Planning and Requirement Gathering</p>
                        <p>
                            With clients, designers, and potential back-end developers, I collaborate to understand the project goals, target audience, and functionalities.
                            reviewing wireframes or mockups, and clarify technical details.
                        </p>
                    </motion.div>
                    <motion.div
                        ref={ref}
                        initial="hidden"
                        animate={controls}
                        variants={{
                            visible: { opacity: 1, x: 0 },
                            hidden: { opacity: 0, x: -90 }
                        }}
                        transition={{ duration: 0.8, delay: 0.7 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className='mt-[6rem] step-container'>
                        <p>Development</p>
                        <p>I&apos;ll translate design assets and functionalities into code using HTML, CSS, and JavaScript framework like React.
                            This stage involves building reusable components, structuring website layouts, and implementing interactive elements.</p>
                    </motion.div>
                     <motion.div
                        ref={ref}
                        initial="hidden"
                        animate={controls}
                        variants={{
                            visible: { opacity: 1, x: 0 },
                            hidden: { opacity: 0, x: -90 }
                        }}
                        transition={{ duration: 0.8, delay: 0.7 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className='mt-[6rem] step-container'>
                        <p>Responsiveness and Cross-Browser Compatibility</p>
                        <p>In this step, I&apos;ll ensure the website adapts seamlessly to different screen sizes (desktop, mobile, tablet) for optimal user experience across devices.
                            I&apos;ll also test the website&apos;s functionality and appearance across various web browsers.</p>
                    </motion.div>
                    <motion.div
                        ref={ref}
                        initial="hidden"
                        animate={controls}
                        variants={{
                            visible: { opacity: 1, x: 0 },
                            hidden: { opacity: 0, x: -90 }
                        }}
                        transition={{ duration: 0.8, delay: 0.7 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className='mt-[5rem] step-container'>
                        <p>Deployment</p>
                        <p>Once testing is complete, I&apos;ll work with the team to deploy the website to a web hosting platform, making it accessible to the public.
                            This might involve configuration settings and launch procedures specific to the chosen hosting provider.</p>
                    </motion.div>
                    <motion.div
                        ref={ref}
                        initial="hidden" 
                        animate={controls}
                        variants={{
                            visible: { opacity: 1, x: 0 },
                            hidden: { opacity: 0, x: -90 }
                        }}
                        transition={{ duration: 0.8, delay: 0.7 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className='mt-[6rem] step-container'>
                        <p>Maintenance and Updates </p>
                        <p>Depending on the project agreement, I could be involved in the website&apos;s maintenance, fixing bugs, implementing new features, or updating content as needed.</p>
                    </motion.div>
                </section>
            </Container>
        </main>
    )
}

export default Steps
