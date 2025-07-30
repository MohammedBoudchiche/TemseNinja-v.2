"use client";

import React from 'react'
import { Button } from '../button'

const FeaturesCard = () => {
  return (
    <div className='p-6 bg-blue-300 dark:bg-blue-100s rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300'>
        <h3>
            First Feauture
        </h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi dolor natus numquam a iure excepturi laborum, unde hic odit voluptatibus error, voluptate tempore vitae laudantium maxime cum, ipsam nulla temporibus.</p>
        <Button>click</Button>
    </div>
  )
}

export default FeaturesCard