import React from 'react'
import Link from 'next/link';
import {Facebook,Heart,Instagram,PhoneCall} from 'lucide-react';
const Footer = () => {
    return (
        <footer className="bg-gray-100 mt-10 py-10  flex flex-col">
            <section className="flex flex-col gap-4 py-6 md:flex-row justify-between items-start px-12">
                <div className="flex flex-col gap-3 ">
                    <h1 className="font-bold text-4xl font-header tracking-wide text-accent">
                        Airtalee
                    </h1>
                    <p className='text-gray-700 max-w-xl'>
                        Explore our diverse range of aromas that complement every mood and personality.
                    </p>
                </div>
                <div className="flex flex-col gap-3">
                    <h1 className='font-header font-bold text-lg'>Contact Us</h1>
                    <div className="flex gap-6">
                        <Link target='_blank' href={"https://www.instagram.com/ismaelsabry?igsh=bGYwb2x6N2g3YXNk"}>
                            <Instagram fontSize="large" className='text-red-500 text-4xl' />
                        </Link>
                        <Link target='_blank' href={"https://api.whatsapp.com/send/?phone=212605097089&text&type=phone_number&app_absent=0"}>
                            <PhoneCall fontSize='large' className='text-green-500 text-3xl' />
                        </Link>
                        <Link target='_blank' href={"https://www.facebook.com/profile.php?id=61550476321065"}>
                            <Facebook fontSize='large' className='text-blue-600 text-3xl' />
                        </Link>
                    </div>
                </div>
            </section>
            <hr className='border-none h-0.5 w-full bg-neutral-700' />
            <div className="flex items-center justify-center pt-5 gap-1">
                <p className='text-center'> Made with by</p>
                <Heart className='text-red-600' fontSize='medium' />
                <Link href={"https://www.instagram.com/vnas_trying/"} target='_blank' className='text-accent'>Anas_bd</Link>

            </div>
        </footer>
    )
}

export default Footer
