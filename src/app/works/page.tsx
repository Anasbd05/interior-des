"use client"
import {WorksGallery} from '@/assets/assets'
import Image from 'next/image'
import Link from 'next/link'
import React,{useState} from 'react'


const WorksPage = () => {

    const [filter,setFilter] = useState("all")
    const [show,setShow] = useState(false)


    return (
        <section className='py-10 w-full'>
            <div className="flex flex-col lg:flex-row gap-2 justify-between md:items-center px-4">
                <h1 className='md:text-3xl text-2xl font-bold font-header'>Crafted Spaces, Lasting Impressions</h1>
                <main className='flex gap-2 flex-wrap '>
                    <button onClick={() => setFilter('all')} className={`bg-accent text-white py-1 px-4 rounded-md font-semibold ${filter === "all" && "bg-black text-white"}`}>ALL</button>
                    <button onClick={() => setFilter('living')} className={`bg-accent text-white py-1 px-4 rounded-md font-semibold ${filter === "living" && "bg-black text-white"}`}>Living Rooms</button>
                    <button onClick={() => setFilter('bathrooms')} className={`bg-accent text-white py-1 px-4 rounded-md font-semibold ${filter === "bathrooms" && "bg-black text-white"}`}>Bathrooms</button>
                    <button onClick={() => setFilter('kitchen')} className={`bg-accent text-white py-1 px-4 rounded-md font-semibold ${filter === "kitchen" && "bg-black text-white"}`}>Kitchen</button>
                    <button onClick={() => setFilter('outdoor')} className={`bg-accent text-white py-1 px-4 rounded-md font-semibold ${filter === "outdoor" && "bg-black text-white"}`}>Outdoor</button>
                    <button onClick={() => setFilter('dining')} className={`bg-accent text-white py-1 px-4 rounded-md font-semibold ${filter === "dining" && "bg-black text-white"}`}>Dining Rooms</button>
                </main>
            </div>
            <main className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 auto-rows-[200px] sm:gap-4 lg:gap-2 my-8">
                {WorksGallery.filter((item) => filter === 'all' || item.room === filter)
                    .slice(0,15)
                    .map((item,index) => (
                        <Link href={`/works/${item.title?.replaceAll(' ',"")}`}
                            key={index}
                            className={`relative col-span-1 row-span-2 ${filter !== "all" ? "col-span-1 row-span-2" : `md:col-span-${item.col} md:row-span-${item.row}`}`}
                        >
                            <Image
                                src={item.image}
                                alt={`work-${index}`}
                                fill
                                className="object-cover"
                            />
                        </Link>
                    ))}
                {show &&
                    WorksGallery.filter((item) => filter === 'all' || item.room === filter)
                        .slice(16,26)
                        .map((item,index) => (
                            <Link href={`/works/${item.title?.replaceAll(' ','')}`}
                                key={index}
                                className={`relative col-span-1 row-span-2 ${filter !== "all" ? "col-span-1 row-span-2" : `md:col-span-${item.col} md:row-span-${item.row}`}`}
                            >
                                <Image
                                    src={item.image}
                                    alt={`work-${index}`}
                                    fill
                                    className="object-cover"
                                />
                            </Link>
                        ))
                }
            </main>
            <div className='w-full flex justify-center'>
                <button onClick={() => setShow(true)} className={`bg-accent animate-bounce cursor-pointer hover:opacity-80 text-white py-2 px-10 rounded-sm ${show === true ? "hidden" : "flex"}`}>Show more</button>
            </div>
        </section >
    )
}

export default WorksPage
