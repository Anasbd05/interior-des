import React from 'react'

const Map = () => {
    return (
        <div className='w-10/12 mx-auto py-10'>
            <div className="flex flex-col items-center my-5">
                <h1 className='text-4xl font-header font-bold tracking-wider text-center mb-2'>Find Our Store on the Map</h1>
                <p className='text-center leading-relaxed text-gray-700 max-w-2xl'>
                    Locate our store easily on the map and get directions for a seamless shopping experience.
                </p>
            </div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13384.84090353202!2d-7.6412777445800835!3d32.9982326!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda60535fd0fb2ed%3A0xb3a6a16d0a78cdd5!2sSabry%20Team%20Parfums!5e0!3m2!1sen!2sma!4v1742998103414!5m2!1sen!2sma"
                width="600" height="450" allowFullScreen={true} loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className='border-none w-full '>
            </iframe>
        </div>
    )
}

export default Map
