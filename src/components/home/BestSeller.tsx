import {Seller} from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const BestSeller = () => {
    return (
        <section className='py-10 w-full mx-auto'>
            <h1 className='text-4xl font-bold font-header text-center mb-5'>Best Seller</h1>
            <main className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-2 sm:gap-4">
                {Seller.map((item) => (
                    <div className="p-4" key={item.id}>
                        <div className="flex relative">
                            <Image alt='' src={item.image} className='h-64 object-cover brightness-90 relative ' />
                            <small className='bg-[#e07b5fb9]  rounded-full py-0.5 px-5 font-bold font-mono absolute top-2 right-1'>{item.price}DH</small>
                        </div>
                        <h1 className='text-lg font-semibold font-header'>{item.title}</h1>
                        <p className='text-neutral-700'>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                    </div>
                ))}
            </main>
        </section>
    )
}

export default BestSeller
