import React from 'react'
import {services} from "../../assets/assets"

const Services = () => {
    return (
        <section className='py-10 w-10/12 mx-auto'>
            <h1 className='text-4xl font-bold font-header text-center mb-5'>Our Services</h1>
            <main className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 sm:gap-4 md:gap-5 lg:gap-8'>
                {services.map((service) => (
                    <div key={service.title} className="flex md:p-4 border-4 border-gray-300 shadow-md shadow-stone-100 rounded-lg lg:p-6 p-2 gap-2 flex-col">
                        <span>{service.icon}</span>
                        <h1 className='text-2xl font-header font-semibold'>{service.title}</h1>
                        <p className='text-gray-700 text-justify'>{service.description} </p>
                    </div>
                ))}
            </main>
        </section>
    )
}

export default Services
