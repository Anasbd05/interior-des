import Image from 'next/image'
import React from 'react'

const Hero = () => {
    return (
        <section>
            <Image src={"/banner.jpg"} width={1400} height={1000} className='w-full brightness-50 relative h-[700px] object-cover rounded-b-4xl' alt='' />
            <div className="flex top-2/4 absolute w-full flex-col gap-3 items-center justify-center">
                <h1 className='lg:text-6xl w-2xl text-center text-4xl sm:text-4xl md:text-5xl font-header font-bold text-white'>Transform Your Space with Us</h1>
                <span className='text-xl text-center w-2xl text-white'>Discover elegant interiors tailored to your lifestyle. From modern minimalism to cozy sophistication — we bring your vision to life with style and intention.</span>
            </div>
        </section>
    )
}

export default Hero
