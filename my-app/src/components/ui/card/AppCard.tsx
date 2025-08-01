

"use client"

import React, { useState } from 'react'
import { Button } from '../button'

const words: Array<string> = ['walk', 'walking', 'walked']
const answer:string = 'walking'

const stayles = {
    noAnswerYet: 'bg-gradient-to-r from-gray-200 to-gray-300 hover:bg-gray-100 shadow-sm',
     wrongAnswer:  'bg-gradient-to-r bg-red-300 hover:bg-red-200 shadow-md',
    correctAnswer: 'bg-gradient-to-r from-green-500 to-teal-500 shadow-lg ring-4 ring-green-300 ring-opacity-50',
}

const getButtunstyle = (selectedWord:string, word:string,answer:string) => {
    if (selectedWord === '') {
        return stayles.noAnswerYet;
    }
    if (word === answer && selectedWord === answer) {
        return stayles.correctAnswer;
    }
    if (word ===  answer && selectedWord !== answer) {
        return stayles.correctAnswer;
    }
 
    if (word !== answer ) {
        return stayles.wrongAnswer;
    }   
    return stayles.wrongAnswer;
}

const AppCard = () => {
    const [wordSpace, setWordSpace] = useState<string>('_____')
    const [selectedWord, setSelectedWord] = useState('')
    const [showFeedback, setShowFeedback] = useState(false)
    const [isChosen, setIsChosen] = useState(false)

    const handleWordSelect = (word:string, index:number) => {
        setWordSpace(word)
        setSelectedWord(word)
        setShowFeedback(true)
        setIsChosen(true)
        
        // Hide feedback after 2 seconds
        setTimeout(() => setShowFeedback(false), 2000)
    }

    const resetGame = () => {
        setWordSpace('_____')
        setSelectedWord('')
        setShowFeedback(false) 
        setIsChosen(false)

    }

    return (
            <div className='relative max-w-md w-full'>
                {/* Floating background elements 
                <div className='absolute -top-4 -left-4 w-20 h-20 bg-white bg-opacity-20 rounded-full blur-xl animate-pulse'></div>
                <div className='absolute -bottom-4 -right-4 w-16 h-16 bg-yellow-300 bg-opacity-30 rounded-full blur-lg animate-bounce'></div>
                */}
                {/* Main card */}
                <div className='relative bg-blue-400 dark:bg-blue-300 bg-opacity-10 backdrop-blur-lg border border-white border-opacity-20 shadow-2xl rounded-3xl p-8 transform hover:scale-105 transition-all duration-300'>
                    {/* Glass morphism overlay 
                    <div className='absolute inset-0 bg-gradient-to-br from-white from-opacity-20 to-transparent rounded-3xl'></div>
                    */}
                    <div className='relative z-10'>
                        {/* Header */}
                        <div className='text-center mb-8'>
                            <h2 className='text-2xl font-bold text-white mb-2 drop-shadow-lg'>
                                📚 
                            </h2>
                            <div className='w-16 h-1 bg-gradient-to-r from-yellow-400 to-pink-400 rounded-full mx-auto'></div>
                        </div>

                        {/* Sentence display */}
                        <div className='text-center mb-8'>
                            <p className='text-xl text-white font-medium drop-shadow-md leading-relaxed'>
                                I'm{' '}
                                <span className={`inline-block min-w-[80px] px-4 py-2 rounded-xl font-bold transition-all duration-500 ${
                                    wordSpace === '_____' 
                                        ? ' bg-opacity-30 text-white  ' 
                                        : selectedWord === answer
                                        ? 'bg-gradient-to-r from-green-400 to-green-500 mx-3 text-white shadow-lg transform scale-110'
                                        : 'bg-gradient-to-r from-red-400 to-red-500 mx-3 text-white shadow-lg transform scale-110'
                                }`}>
                                    {wordSpace}
                                </span>
                                {' '}now
                            </p>
                        </div>

                        {/* Feedback message */}
                        {showFeedback && (
                            <div className='text-center mb-6'>
                                <div className='inline-flex items-center bg-blue-500 bg-opacity-90 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg animate-bounce'>
                                    { selectedWord === answer ? '✨ Great choice! ✨': '❌ Try again! ❌'}
                                </div>
                            </div>
                        )}

                        {/* Word buttons */}
                        <div className='flex flex-col sm:flex-row gap-3 mb-6'>
                            {words.map((word, index) => (
                                <Button
                                    
                                    key={word}
                                    onClick={() => handleWordSelect(word, index)}
                                    disabled={isChosen}
                                    className={`flex-1 relative group overflow-hidden px-6 py-4 rounded-2xl font-semibold text-white transition-all duration-300 transform hover:scale-105 hover:shadow-xl ${
                                        
                                            getButtunstyle(selectedWord, word, answer)}`}
                                >
                                    {/* Button shine effect 
                                    <div className='absolute inset-0 bg-white bg-opacity-20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700'></div>
                                    */}
                                    <span className='relative z-10 flex items-center justify-center'>
                                        {selectedWord === word && <span className='mr-2'>✓</span>}
                                        {word}
                                    </span>
                                </Button>
                            ))}
                        </div>

                        {/* Reset button */}
                        {selectedWord && (
                            <div className='text-center '>
                                <button
                                    onClick={resetGame}
                                    className='inline-flex items-center px-6 py-3 bg-blue-800 bg-opacity-20 hover:bg-opacity-30 text-white rounded-full font-medium transition-all duration-300 backdrop-blur-sm border border-white border-opacity-30 hover:scale-105'
                                >
                                    <span className='mr-2'>🔄</span>
                                    Try Again
                                </button>
                            </div>
                        )}

                       
                    </div>
                </div>

                {/* Floating particles
                <div className='absolute top-10 left-10 w-2 h-2 bg-white rounded-full animate-ping opacity-75'></div>
                <div className='absolute bottom-20 right-10 w-1 h-1 bg-yellow-300 rounded-full animate-pulse'></div>
                <div className='absolute top-1/2 left-0 w-3 h-3 bg-pink-300 rounded-full animate-bounce opacity-60'></div>
                */}
            </div>
    )
}

export default AppCard



{/** "use client"

import React, { useState } from 'react'
import { Button } from '../button'

const words = ['walk', 'walking', 'walked']
const AppCard = () => {
    const [wordSpace, setWordSpace] = useState('_____')
  return (
    <div className='flex flex-col items-center justify-center p-4 bg-white shadow-md rounded-lg'>
        <p>I'm {wordSpace} now </p>
        <div className='flex space-x-2 mt-4'>
            <Button onClick={()=> {setWordSpace(words[0])}}>{words[0]}</Button>
            <Button onClick={()=> {setWordSpace(words[1])}}>{words[1]}</Button>
            <Button onClick={()=> {setWordSpace(words[2])}}>{words[2]}</Button>
        </div>
        
    </div>
  )
}

export default AppCard*/}