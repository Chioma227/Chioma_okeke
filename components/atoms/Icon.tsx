import React from 'react'
import clsx from 'clsx'


const Icon = (
    { children, className }
        :
        { children: React.ReactNode | string, className?: string}
) => {

    const style = clsx(
        'border border-yellow-50 bg-yellow-100 bg-opacity-[.1]',
        'border-opacity-[.2] rounded-full w-6 h-6 flex items-center justify-center text-[#dac5a791]'
    )

    return (
        <div className={clsx(style, className)}>
            {children}
        </div>
    )
}

export default Icon
