import {ShoppingBag} from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    return (
        <nav className='flex justify-between py-5 items-center bg-[#151B06] px-8'>
            <Link href={"/"}>
                <h1 className='text-3xl font-bold text-white font-header'>Airt<span className='text-accent'>alee</span> </h1>
            </Link>
            <div className="flex gap-10">
                <Link className='hover:text-accent text-white' href={"/store"}>Store</Link>
                <Link className='hover:text-accent text-white' href={"/works"}>Our works</Link>
            </div>
            <ShoppingBag className='text-white hover:text-accent' />
        </nav>
    )
}

export default Navbar
