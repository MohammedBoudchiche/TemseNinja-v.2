import { ScanSearch } from 'lucide-react'
import React from 'react'

const HowItWorksSection = () => {
  return (
    <section className='py-12 flex flex-col items-center justify-center space-y-8'>
        <h2>
            How it works?
        </h2>
        <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-8'>
            <div className='flex flex-col items-center text-center space-y-4'>
                <ScanSearch/>
                <h3>Scan</h3>
                <p>Scan the text you want to learn from.</p>
            </div>
            <div className='flex flex-col items-center text-center space-y-4'>
                <ScanSearch/>
                <h3>Scan</h3>
                <p>Scan the text you want to learn from.</p>
            </div>
            <div className='flex flex-col items-center text-center space-y-4'>
                <ScanSearch/>
                <h3>Scan</h3>
                <p>Scan the text you want to learn from.</p>
            </div>
        </div>
    </section>
  )
}

export default HowItWorksSection