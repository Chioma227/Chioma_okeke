import React from 'react'
import Footer from '@/components/molecules/footer/Footer'
import Header from '@/components/molecules/header/Header'

const PortfolioLayout = ({ children }: {children:React.ReactNode}) => {
  return (
    <main className='relative ' >
      <Header />
      <section className='md:w-[80%] px-3 w-[95%] mx-auto relative'>
        {children}
      </section>
      <Footer/>
    </main>
  )
}

export default PortfolioLayout
