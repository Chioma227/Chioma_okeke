import React from 'react'
import Header from '@/components/molecules/header/Header'

const PortfolioLayout = ({ children }: {children:React.ReactNode}) => {
  return (
    <main className='md:w-[80%] w-[95%] mx-auto relative'>
      <Header />
      <section>
        {children}
      </section>
    </main>
  )
}

export default PortfolioLayout
