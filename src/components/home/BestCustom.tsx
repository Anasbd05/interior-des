import Image from 'next/image'
import React from 'react'
import design1 from "../../assets/design1.jpg"
import design2 from "../../assets/design2.jpg"
import design3 from "../../assets/design3.jpg"
import design4 from "../../assets/design4.jpg"
import design5 from "../../assets/design5.jpg"
import design6 from "../../assets/design6.jpg"
import design7 from "../../assets/design7.jpg"
import design10 from "../../assets/design10.jpg"

const BestCustom = () => {
    return (
        <section className='my-10 w-full mx-auto'>
            <h1 className='text-4xl font-bold font-header text-center mb-5'>Some Works</h1>
            <main className='grid grid-cols-2 md:grid-cols-3 gap-2 auto-rows-[200px] sm:gap-4 md:gap-4 lg:gap-2'>
                <div className='relative col-span-2 row-span-2'>
                    <Image src={design1} alt='' fill className='object-cover ' />
                </div>
                <div className='relative col-span-1 row-span-2'>
                    <Image src={design2} alt='' fill className='object-cover ' />
                </div>
                <div className='relative col-span-1 row-span-2'>
                    <Image src={design5} alt='' fill className='object-cover ' />
                </div>
                <div className='relative col-span-1 row-span-2'>
                    <Image src={design10} alt='' fill className='object-cover ' />
                </div>
                <div className='relative col-span-1 row-span-2'>
                    <Image src={design4} alt='' fill className='object-cover ' />
                </div>
                <div className='relative col-span-1 row-span-1'>
                    <Image src={design6} alt='' fill className='object-cover ' />
                </div>
                <div className='relative object-fill col-span-2 row-span-3'>
                    <Image src={design3} alt='' fill className='object-cover' />
                </div>
                <div className='relative col-span-1 row-span-2'>
                    <Image src={design7} alt='' fill className='object-cover ' />
                </div>
            </main>
        </section>
    )
}

export default BestCustom
