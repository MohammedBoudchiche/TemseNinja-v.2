import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import React from 'react'

const FinalCTASection = () => {
  return (
    <section className='py-12 flex flex-col items-center justify-center space-y-8 bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200'>
        <h2>sign up</h2>
        <div className="flex w-full max-w-sm items-center gap-2">
            <Input type="email" placeholder="Email" />
            <Button type="submit" variant="outline">
                Subscribe
            </Button>
        </div>
    </section>
  )
}

export default FinalCTASection