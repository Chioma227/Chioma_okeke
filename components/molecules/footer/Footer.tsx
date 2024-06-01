import Button from '@/components/atoms/button'
import { ButtonVariant } from '@/variants/rootVariants'
import React from 'react'

const Footer = () => {
    return (
        <footer className='w-full footer'>
            <section className='secOne text-center flex items-center justify-center flex-col'>
                <p className='textone'>PROJECT IN MIND?</p>
                <p className='texttwo'>Let&apos;s bring your <span>ideas to life.</span></p>
                <p className='textthree'>Translating design ideas into visually appealing websites and enhancing performance.</p>
                <Button variant={ButtonVariant.DEFAULT}>GET IN TOUCH</Button>
            </section>
            <section className='flex items-center justify-between border border-t-2 border-opacity-5 border-yellow-50 py-[20px] px-[10px]'>
                <small className='text-[10px]'>&copy; 2024. Made By Chioma Okeke.</small>
                <p className='text-[10px]'>something here</p>
            </section>
        </footer>
    )
}
export default Footer
