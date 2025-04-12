import Image from 'next/image'
import React from 'react'

const Hero = () => {
    return (
        <section>
            <Image src={"/banner.jpg"} width={1400} height={1000} className='w-full brightness-[40%] relative h-[400px] md:h-[600px] object-cover rounded-b-4xl' alt='' />
            <div className="flex top-1/4 md:top-2/5 absolute w-full flex-col gap-3 items-center justify-center">
                <h1 className='lg:text-6xl md:w-2xl text-center text-4xl sm:text-4xl md:text-5xl font-header font-bold text-white'>Transform Your Space With Us</h1>
                <span className='text-xl px-2 text-center md:w-2xl text-white'>Discover elegant interiors tailored to your lifestyle. From modern minimalism to cozy sophistication — we bring your vision to life with style and intention.</span>
            </div>
        </section>
    )
}

export default Hero
