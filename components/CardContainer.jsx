import React from 'react'
import Cards from './Cards'

const CardContainer = () => {
  return (
    <div className='max-w-screen-xl mx-auto p-4 flex flex-wrap justify-between gap-10'>
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
    </div>
  )
}

export default CardContainer