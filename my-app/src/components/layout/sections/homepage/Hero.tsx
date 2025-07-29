"use client"
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React, { useState } from 'react'

const Hero = () => {
  const [isMobile, setIsMobile] = useState(false);
  return (
    
    <section className={`p-10 flex flex-col  lg:flex-row items-center justify-between`}>        
        <div className="lg:w-1/2 space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Master English <span className="text-blue-600">Tenses</span> the Smart Way
            </h1>
            
            <p className="text-lg text-gray-600">
              Interactive exercises, instant feedback, and personalized progress tracking 
              to help you speak English confidently.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Link
                href="/quiz" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-all shadow-lg hover:shadow-blue-200 text-center"
              >
                Start Learning Free
              </Link>
              <Link 
                href="/features" 
                className="border border-gray-300 hover:border-blue-300 text-gray-700 px-6 py-3 rounded-lg font-medium transition-all hover:bg-white text-center"
              >
                How It Works →
              </Link>
            </div>
            
            <div className="flex items-center gap-2 pt-4 ">
              {/* Trust indicators (optional) */}
              <div className="flex -space-x-2">
                {[1, 2, 3].map((item) => (
                  <div 
                    key={item} 
                    className="w-8 h-8 rounded-full bg-blue-100 border-2 border-white"
                  ></div>
                ))}
              </div>
              <p className="text-sm text-gray-500">
                Join <span className="font-medium text-gray-700">1,000+</span> learners
              </p>
            </div>
          </div>

        <div className='py-10 px-30 sm:mt-6 rounded-xl shadow-xl border border-gray-100'>
          <div className='text-4xl'>
            I'm walking now
          </div>
          <div >
                <Button className='mt-5' variant='outline'>Start</Button>
                <Button className='mt-5' variant='outline'>Start</Button>
                <Button className='mt-5' variant='outline'>Start</Button>
          </div>
        </div>
    </section>
  )
}

export default Hero