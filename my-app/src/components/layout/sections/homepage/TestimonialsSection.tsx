import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import React from 'react'

const TestimonialsSection = () => {
  return (
    <section className='flex flex-col items-center py-12 sm:py-16 lg:py-20 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <h2 className='text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl '>
            Testimonials
        </h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam sequi,</p>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mt-8'>
            <div className='flex flex-col items-center justify-center text-center p-6 border rounded-lg shadow-sm'>
                <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <p>Mohammed</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel, sed. Deserunt, eveniet illum perspiciatis ducimus nobis et, beatae sunt</p>                
            </div>
            <div className='flex flex-col items-center justify-center text-center p-6 border rounded-lg shadow-sm'>
                <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <p>Mohammed</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel, sed. Deserunt, eveniet illum perspiciatis ducimus nobis et, beatae sunt</p>                
            </div>
        </div>
    </section>
  )
}

export default TestimonialsSection