"use client"
import {ProductGallery} from '@/assets/assets'
import {Star} from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import {useCart} from 'react-use-cart'

interface PageProps {
    params: {
        title: string
    }
}

const ProductPage = ({params}: PageProps) => {
    const {title} = React.use(params)
    const product = ProductGallery.find((item) => item.title.replaceAll(' ','') === title.replaceAll(' ',''))

    const {addItem,items,inCart,removeItem} = useCart()
    console.log(items)

    if(!product) {
        return (
            <section className="w-full flex justify-center items-center h-screen">
                <h2 className="text-2xl font-bold">Produit introuvable</h2>
            </section>
        )
    }

    return (
        <section className="w-full py-4 px-2">
            <div className="flex flex-col md:flex-row gap-8 w-full">
                <Image
                    src={product.image}
                    alt={product.title}
                    width={600}
                    height={400}
                    className="max-h-[500px] object-fill w-full lg:w-2/4"
                />
                <div className="flex justify-between flex-col w-full lg:w-2/4 gap-4">
                    <div className="flex gap-2 flex-col">
                        <small className='bg-emerald-400 rounded-full place-self-end px-4 py-0.5'>In Stock</small>
                        <div className="flex gap-1">
                            <Star className='w-4 h-4 text-amber-500' />
                            <Star className='w-4 h-4 text-amber-500' />
                            <Star className='w-4 h-4 text-amber-500' />
                            <Star className='w-4 h-4 text-amber-500' />
                            <Star className='w-4 h-4 text-amber-500' />
                        </div>
                        <h2 className="text-3xl font-header font-bold">{product.title}</h2>
                        <span className="text-3xl text-accent mb-4 font-mono font-semibold">{product.price} DH</span>
                        <p className="text-lg text-neutral-700">{product.description}</p>
                    </div>
                    {inCart(product.id) ?
                        <button onClick={() => removeItem(product.id)} className='bg-red-500 text-white font-bold py-2 mb-4 cursor-pointer hover:opacity-80 rounded-sm'>Remove form cart</button> :
                        <button onClick={() => addItem(product)} className='bg-accent text-white  font-bold py-2 mb-4 cursor-pointer hover:opacity-80 rounded-sm'>Add to cart</button>
                    }
                </div>
            </div>
            <div className="lg:flex justify-center hidden  relative my-4 gap-1">
                <h1 className='text-3xl font-header  font-bold'>Related Products</h1>
                <div className="flex absolute top-4 right-[430px] gap-0">
                    <hr className='bg-neutral-600  border-0 w-10 h-1' />
                    <hr className='bg-neutral-300  border-0 w-10 h-1' />
                </div>
            </div>            <div className="grid grid-cols-2 md:grid-cols-3 py-4 lg:grid-cols-4 xl:grid-cols-5 gap-2 space-y-2">
                {ProductGallery.slice(0,5).map((product) => (
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
        </section>
    )
}

export default ProductPage
