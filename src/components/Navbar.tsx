import {ShoppingBag} from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    return (
        <nav className='flex justify-between py-5 items-center px-8'>
            <Link href={"/"}>
                <h1 className='text-3xl font-bold'>Airt<span className='text-accent'>alee</span> </h1>
            </Link>
            <div className="flex gap-8">
                <Link href={"/"}>Store</Link>
                <Link href={"/"}>Our works</Link>
            </div>
            <ShoppingBag />
        </nav>
    )
}

export default Navbar
