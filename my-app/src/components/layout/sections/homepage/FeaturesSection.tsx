import FeaturesCard from '@/components/ui/card/FeaturesCard'
import React from 'react'

const FeaturesSection = () => {
  return (
    <section
        className='py-12 sm:py-16 lg:py-20 '
        aria-labelledby='features-heading'
    >
        <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
            <div className='text-center'>
                <h2
                    id='features-heading'
                    className='text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'
                >
                    Features
                </h2>
                <p className='mt-4 max-w-2xl text-lg text-gray-500 mx-auto'>
                    Discover the powerful features that make learning English tenses easy and effective.
                </p>

            </div>
            <div className='mt-16 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4'>
                <FeaturesCard/>
                <FeaturesCard/>
                <FeaturesCard/>
                <FeaturesCard/>

            </div>

        </div>

    </section>
  )
}

export default FeaturesSection