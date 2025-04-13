"use client"
import React from 'react'
import Image from 'next/image'
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
    const [selectedCategory,setSelectedCategory] = React.useState<string[]>([])
    const [sortOrder,setSortOrder] = React.useState<'asc' | 'desc' | 'default'>('default')

    // Filter and Sort Products based on selected category and price
    const filteredAndSortedProducts = ProductGallery
        .filter(product =>
            selectedCategory.length === 0 || selectedCategory.includes(product.category)
        )
        .sort((a,b) => {
            if(sortOrder === 'asc') return a.price - b.price
            if(sortOrder === 'desc') return b.price - a.price
            return 0
        })

    // Handle Category Change
    const handleCategoryChange = (category: string) => {
        setSelectedCategory(prevState => {
            if(prevState.includes(category)) {
                return prevState.filter(item => item !== category)
            } else {
                return [...prevState,category]
            }
        })
    }

    return (
        <section className="w-full">
            <main className="flex w-full gap-2">
                {/* Sidebar Filters */}
                <aside className={`fixed top-20 hidden lg:flex flex-col w-1/6 px-10 py-3 bg-neutral-100 h-screen`}>
                    <div className="flex flex-col gap-1 mb-4">
                        <h3 className="text-lg font-semibold mb-2">Prix</h3>
                        <div className="flex items-center space-x-2">
                            <input
                                type="radio"
                                id="low"
                                checked={sortOrder === 'asc'}
                                onChange={() => setSortOrder('asc')}
                            />
                            <Label htmlFor="low" className="font-bold">
                                Low to High
                            </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <input
                                type="radio"
                                id="high"
                                checked={sortOrder === 'desc'}
                                onChange={() => setSortOrder('desc')}
                            />
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
                                    onClick={() => handleCategoryChange(category)}
                                >
                                    <span className={selectedCategory.includes(category) ? 'text-accent' : ''}>
                                        {category}
                                    </span>
                                </AccordionContent>
                            ))}
                        </AccordionItem>
                    </Accordion>
                </aside>

                {/* Product Grid */}
                <div className="ml-auto w-full lg:w-5/6 grid grid-cols-2 md:grid-cols-3 py-4 lg:grid-cols-4 gap-2 space-y-2">
                    {filteredAndSortedProducts.map((product) => (
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
