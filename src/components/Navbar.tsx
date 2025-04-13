"use client"
import {MenuIcon,ShoppingBag,X} from 'lucide-react'
import Link from 'next/link'
import React,{useState} from 'react'
import {useCart} from 'react-use-cart'

const Navbar = () => {
    const {items} = useCart()
    const [isMenuOpen,setIsMenuOpen] = useState(false)

    // Toggle menu visibility on mobile
    const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

    return (
        <nav className='flex justify-between fixed top-0 w-full z-50 py-5 items-center bg-[#151B06] px-8'>
            <Link href={"/"}>
                <h1 className='text-3xl font-bold text-white font-header'>
                    Airt<span className='text-accent'>alee</span>
                </h1>
            </Link>
            <div className="md:flex hidden gap-10">
                <Link className='hover:text-accent text-white' href={"/store"}>Store</Link>
                <Link className='hover:text-accent text-white' href={"/works"}>Our works</Link>
            </div>
            <Link href={'/shoppingcart'} className="md:flex hidden  relative">
                {items.length > 0 ? (
                    <small
                        className='bg-red-600 text-white text-xs w-4 flex items-center justify-center h-4 rounded-full absolute -top-2 -right-2'>
                        {items.length}
                    </small>
                ) : ""}
                <ShoppingBag className='text-white hover:text-accent' />
            </Link>

            {/* Mobile Menu Icon */}
            <div className="flex md:hidden">
                {isMenuOpen !== true ? <MenuIcon className='text-white w-7 h-7' onClick={toggleMenu} /> :
                    <X className='text-white w-7 h-7' onClick={toggleMenu} />}
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="flex flex-col gap-4  bg-[#151B06] h-screen w-2/4 absolute top-18 right-0 p-5 md:hidden">
                    <Link onClick={toggleMenu} className='hover:text-accent text-lg font-bold py-3 text-white' href={"/store"}>Store</Link>
                    <Link onClick={toggleMenu} className='hover:text-accent text-lg font-bold py-3 text-white' href={"/works"}>Our works</Link>
                    <Link onClick={toggleMenu} href={'/shoppingcart'} className="flex relative">
                        {items.length > 0 && (
                            <small className='bg-red-600 text-white text-xs w-4 flex items-center justify-center h-4 rounded-full absolute -top-2 right-34'>
                                {items.length}
                            </small>
                        )}
                        <ShoppingBag className='text-white hover:text-accent' />
                    </Link>
                </div>
            )}
        </nav>
    )
}

export default Navbar
