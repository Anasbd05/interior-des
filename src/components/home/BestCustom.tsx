import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import {WorksGallery} from '@/assets/assets'

const BestCustom = () => {
    return (
        <section className='py-10 w-full mx-auto'>
            <h1 className='text-4xl font-bold font-header text-center mb-5'>Some Works</h1>
            <main className='grid grid-cols-2 lg:grid-cols-3 gap-2 auto-rows-[200px] sm:gap-4  lg:gap-2'>
                {WorksGallery.slice(4,14)
                    .map((work,index) => (
                        <Link href={`/works/${work.title?.replaceAll(' ',"")}`}
                            key={index}
                            className={`relative md:col-span-${work.col} row-span-${work.row}`}
                        >
                            <Image
                                src={work.image}
                                alt={`work - ${index} `}
                                fill
                                className="object-fill"
                            />
                        </Link>
                    ))}
            </main>
            <Link href={"/works"} className='bg-accent font-bold text-white py-2 w-full flex justify-center my-3 hover:opacity-80 animate-pulse'>View all works</Link>
        </section>
    )
}

export default BestCustom
