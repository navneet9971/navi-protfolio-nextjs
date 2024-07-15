import { projects } from '@/data';
import React from 'react';
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { FaLocationArrow } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';
// import use from "@/public/bg.png";

const RecentProjects = () => {
  return (

    <div className='py-20' id="projects">
      <h1 className='heading'>
        Recent project showcase:{' '}
        <span className='text-purple'> innovation in action
        </span>
      </h1>
      <div
        className='flex flex-wrap items-center 
        justify-center p-4 gap-x-24 gap-y-8 mt-10' >

        {projects.map(({ id, title, des, img, iconLists, live, github, perview, gitText }) => (
          <CardContainer className="inter-var">

            <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">

              <div key={id}>
                <CardItem
                  translateZ="50"
                  className="text-xl font-bold text-neutral-600 dark:text-white"
                >
                  {title}
                </CardItem>
                <CardItem
                  as="p"
                  translateZ="60"
                  className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                >
                  {des}
                </CardItem>
                <CardItem
                  translateZ="100"
                  rotateX={20}
                  rotateZ={-5}
                  className="w-full mt-4"
                >
                  <Image
                    src={img}
                    height="1000"
                    width="1000"
                    className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                    alt="thumbnail"
                  />
                </CardItem>


                <div className="flex items-center justify-between mt-7 mb-3">

                  <CardItem
                    translateZ={20}
                    translateX={-40}
                    className='flex items-center'
                  >
                    {iconLists.map((icon, index) => (
                      <div
                        key={index}
                        className='border border-white/[0.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center'
                        style={{ transform: `translateX(-${5 * index * 2}px)` }}
                      >
                        <Image src={icon} alt={icon} className='p-2' />
                      </div>
                    ))}

                  </CardItem>

                  <div className='flex flex-row gap-5  justify-center items-center'>
                    <CardItem
                      translateZ={20}
                      translateX={40}
                    >
                      <Link href={live} target="_blank" rel="noopener noreferrer" className="hover-red-600">
                        {perview}
                      </Link>

                    </CardItem>

                    <CardItem
                      translateZ={20}
                      translateX={40}
                    >
                      <Link href={github as string} target="_blank" rel="noopener noreferrer" className="hover-red-600">
                        {gitText}
                      </Link>

                    </CardItem>

                  </div>
                </div>
              </div>

            </CardBody>

          </CardContainer>
        ))}
      </div>
    </div>
  );
}

export default RecentProjects;
