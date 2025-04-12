import {Checkbox} from '@/components/ui/checkbox'
import {Label} from '@/components/ui/label'
import React from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

const StorePage = () => {
    return (
        <section className='w-full'>
            <main className='flex w-full gap-2'>
                {/* filter */}
                <main className="flex flex-col w-4/12 bg-neutral-100 p-3">
                    <div className="flex flex-col gap-1">
                        <h3 className='text-lg font-semibold mb-2'>Prix</h3>
                        <div className="flex items-center space-x-2 ">
                            <Checkbox id="low" />
                            <Label className='font-bold' htmlFor="low">Low to High</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <Checkbox id="high" />
                            <Label className='font-bold' htmlFor="high">High to Low</Label>
                        </div>
                    </div>
                    <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value="item-1">
                            <AccordionTrigger className='text-lg font-semibold mb-2'>Category</AccordionTrigger>
                            <AccordionContent className='text-black hover:text-accent cursor-pointer font-bold'>
                                Vases
                            </AccordionContent>
                            <AccordionContent className='text-black hover:text-accent cursor-pointer font-bold'>
                                Art
                            </AccordionContent>
                            <AccordionContent className='text-black hover:text-accent cursor-pointer font-bold'>
                                Shelfs
                            </AccordionContent>
                            <AccordionContent className='text-black hover:text-accent cursor-pointer font-bold'>
                                Planters
                            </AccordionContent>
                            <AccordionContent className='text-black hover:text-accent cursor-pointer font-bold'>
                                Chairs
                            </AccordionContent>
                            <AccordionContent className='text-black hover:text-accent cursor-pointer font-bold'>
                                Bowls
                            </AccordionContent>
                            <AccordionContent className='text-black hover:text-accent cursor-pointer font-bold'>
                                Lamps
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </main>


            </main>
        </section>
    )
}

export default StorePage
