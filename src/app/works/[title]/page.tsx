"use client"
import {WorksGallery} from '@/assets/assets'
import {ArrowLeftCircle,PhoneCall} from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import {useRouter} from 'next/navigation'
import React from 'react'


const WorkPage = ({params}: {params: Promise<{title: string}>}) => {
    const {title} = React.use(params)

    const work = WorksGallery.find((item) => item.title?.replaceAll(' ','') === title.replaceAll(' ',''))

    const relatedProducts = WorksGallery.filter((item) => item.room === work?.room)

    const router = useRouter()


    return (
        <section className='w-11/12 mx-auto py-6'>
            <div className="flex flex-col gap-2 mx-auto md:w-4/5">
                <ArrowLeftCircle onClick={() => router.back()} className='my-2 w-8 h-8' />
                {work?.image && (
                    <Image
                        className='w-full mx-auto rounded-sm md:h-[600px] object-center'
                        alt={work.title || 'Work Image'}
                        src={work.image}
                    />
                )}
                <Link target='_blank' href={"https://api.whatsapp.com/message/B5FEDOQRNKHQN1?autoload=1&app_absent=0"} className='bg-black text-white py-3 w-full mt-3 rounded-md flex gap-2 justify-center items-center'>Contact Us <PhoneCall className='text-green-500 w-4 h-4' /> </Link>
            </div>

            <div className="lg:flex justify-center hidden  relative my-4 gap-1">
                <h1 className='text-3xl font-header  font-bold'>Related Products</h1>
                <div className="flex absolute top-4 right-[390px] gap-0">
                    <hr className='bg-neutral-600  border-0 w-10 h-1' />
                    <hr className='bg-neutral-300  border-0 w-10 h-1' />
                </div>
            </div>

            <main className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 auto-rows-[200px] sm:gap-4 lg:gap-2 my-8">
                {relatedProducts.map((item,index) => (
                    <Link
                        href={`/works/${item.title?.replaceAll(' ','')}`}
                        key={index}
                        className={`relative lg:col-span-${item.col} lg:row-span-${item.row}`}
                    >
                        <div className="relative w-full h-full">
                            <Image
                                src={item.image}
                                alt={`work-${index}`}
                                fill
                                className="object-cover rounded-md"
                            />
                        </div>
                    </Link>
                ))}
            </main>
        </section>
    )
}

export default WorkPage
