import React from 'react'
import { InfiniteMovingCards } from './ui/InfiniteMovingCards'
import { skills } from '@/data'

const Skills = () => {
  return (
    <div className='py-20' id="myskills">
      <h1 className='heading'>
        My
        <span className='text-purple'> Skills
        </span>
      </h1>

      <div
        className='flex flex-col items-center max-lg:mt-10' >

        <InfiniteMovingCards
          items={skills}
          direction='right'
          speed='slow'
        />
      </div>

    </div>
  )
}

export default Skills