import React from 'react'
import { InfiniteMovingCards } from './ui/InfiniteMovingCards'
import { skills, icons } from '@/data'
import Image from 'next/image'
import { AnimatedTooltip } from './ui/animatedTooltip'
import IconCloud from './ui/IconCloud'

const Skills = () => {
  return (
    <div className='py-20' id="myskills">
      <h1 className='heading'>
        My
        <span className='text-purple'> Skills
        </span>
      </h1>
      <div className="flex items-center justify-around flex-col md:flex-col lg:flex-row" >
        <div className='flex items-center justify-center flex-row mt-3 max-lg:mt-10'>
          {/* <div className='grid grid-cols-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-12'> */}
         
          <IconCloud iconSlugs={icons} />
          {/* </div> */}
        </div>

<div className = "hidden lg:flex lg:flex-col lg:items-center lg:gap-8 lg:w-28 ">
  {/* {skills.map((skill) => (
    <div className ="flex items-center text-center gap-4" key={skill.id}>
      <h3>{skill.name} </h3>
    </div>
  ))} */}
   <AnimatedTooltip items={skills} />
</div>


      </div>
    </div>
  )
}

export default Skills