import { PlusSquare } from 'lucide-react'
import React from 'react'

const FAQSection = () => {
  return (
    <section className='py-12 flex flex-col items-center justify-center space-y-4 text-center'>
        <h2>Frequently Asked Questions</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque tenetur incidunt aut architecto necessitatibus sint in porro iste cumque, perspiciatis enim quisquam maiores molestiae nobis adipisci accusamus repudiandae laudantium nihil!</p>
        <div>
            <div className='flex  items-center justify-center gap-9 space-x-2'>
                <p>What is </p>
                <PlusSquare/>
            </div>
            <div className='flex  items-center justify-center gap-9 space-x-2'>
                <p>What is </p>
                <PlusSquare/>
            </div>
            <div className='flex  items-center justify-center gap-9 space-x-2'>
                <p>What is </p>
                <PlusSquare/>
            </div>
            <div className='flex  items-center justify-center gap-9 space-x-2'>
                <p>What is </p>
                <PlusSquare/>
            </div>
        </div>
    </section>
  )
}

export default FAQSection