"use client"
import React,{useState,useEffect} from 'react'
import Image from 'next/image'
import {Checkbox} from '@/components/ui/checkbox'
import {Label} from '@/components/ui/label'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion'
import {ProductGallery} from '@/assets/assets'
import Link from 'next/link'

const StorePage = () => {
    const [isScroll,setIsScroll] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScroll(window.scrollY >= 30)
        }

        window.addEventListener('scroll',handleScroll)
        return () => window.removeEventListener('scroll',handleScroll)
    },[])

    return (
        <section className="w-full">
            <main className="flex w-full gap-2">
                {/* Sidebar Filters */}
                <aside className={`fixed left-0 overflow-y-auto w-1/6 px-10 py-3 bg-neutral-100 transition-all duration-300 ${isScroll ? "top-0" : ""}`}>
                    <div className="flex flex-col gap-1 mb-4">
                        <h3 className="text-lg font-semibold mb-2">Prix</h3>
                        <div className="flex items-center space-x-2">
                            <Checkbox id="low" />
                            <Label htmlFor="low" className="font-bold">
                                Low to High
                            </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <Checkbox id="high" />
                            <Label htmlFor="high" className="font-bold">
                                High to Low
                            </Label>
                        </div>
                    </div>

                    <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value="item-1">
                            <AccordionTrigger className="text-lg font-semibold">Category</AccordionTrigger>
                            {['Vases','Art','Shelfs','Planters','Chairs','Bowls','Lamps'].map((category) => (
                                <AccordionContent
                                    key={category}
                                    className="px-4 font-bold text-black cursor-pointer hover:text-accent"
                                >
                                    {category}
                                </AccordionContent>
                            ))}
                        </AccordionItem>
                    </Accordion>
                </aside>

                {/* Product Grid */}
                <div className="ml-auto w-5/6 grid grid-cols-2 md:grid-cols-3 py-4 lg:grid-cols-4 gap-2 space-y-2">
                    {ProductGallery.map((product) => (
                        <Link href={`/store/${product.title.replaceAll(' ','')}`} key={product.id} className="flex flex-col gap-2 p-2">
                            <Image
                                src={product.image}
                                alt={product.title}
                                className="h-64 w-full object-cover brightness-90"
                            />
                            <div className="flex items-center justify-between w-full">
                                <h2 className="text-xl font-bold font-header">{product.title}</h2>
                                <span className="text-lg font-bold text-accent font-mono">
                                    {product.price}DH
                                </span>
                            </div>
                            <p className="text-neutral-800 text-sm">{product.small}</p>
                        </Link>
                    ))}
                </div>
            </main>
        </section>
    )
}

export default StorePage
