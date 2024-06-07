'use client'
import React from 'react'
import Container from './Container'
import Image from 'next/image'
import { motion, useInView } from "framer-motion"
import FadeIn from './FadeIn'


const Banner = () => {

  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div className='bg-primeColor w-full rounded-3xl  relative px-4'>
      <Container>
        <div className='text-white grid md:grid-cols-2 gap-20 place-items-center'>
          {/* left */}
          <div className='flex flex-col gap-6'>

            <FadeIn>
              <h1 className='text-3xl lg:text-4xl xl:text-5xl font-semibold'>無料で使えます</h1>
            </FadeIn>

            <FadeIn>
              <p className='text-sm tracking-wider xl-:gap-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos distinctio tempore qui fugit obcaecati possimus fuga neque exercitationem et ipsa consequuntur maxime pariatur sunt, ipsum eum? Vel nam praesentium reprehenderit!</p>
            </FadeIn>

            <FadeIn>
              <div className='w-fll p-6 xl:p-10 bg-white rounded-3xl flex flex-col lg:flex-row text-black justify-between gap-5'>
                <input 
                type="text" 
                placeholder='メールアドレス'
                className='w-full h-12 border-[1px] border-gray-300 rounded-xl text-base text-gray-600 placeholder:tracking-wider px-4 outline-none hover:border-primeColor duration-300 focus-visible:border-primeColor'/>
                <button className='w-full h-12 rounded-xl bg-black text-white font-medium hover:bg-darkBlue duration-300 cursor-pointer '>無料で試す→</button>
              </div>
            </FadeIn>
          </div>
          {/* right */}
          <div className='w-full relative flex justify-center items-center gap-6'>
            <motion.div
              ref={ref}
              initial={{opacity:0, y:100}}
              animate={{opacity: isInView ? 1: 0, y:isInView ? 0 : 100}}
              transition={{duration:1}}
              >
              <Image 
              src="/images/bannerImg/banner1.jpg" alt="Banner Image 1" 
              width={500} 
              height={300} 
              className='rounded-2xl w-52'/>
            </motion.div>

            <div className='flex flex-col gap-7'>
              <motion.div
                ref={ref}
                initial={{opacity:0, y:200}}
                animate={{opacity: isInView ? 1: 0, y:isInView ? 0 : 200}}
                transition={{duration:0.6}}>
                <Image 
                src="/images/bannerImg/banner2.jpg" alt="Banner Image 2" 
                width={500} 
                height={300} 
                className='rounded-2xl w-52'/>
              </motion.div>

              <motion.div
                ref={ref}
                initial={{opacity:0, y:100}}
                animate={{opacity: isInView ? 1: 0, y:isInView ? 0 : 100}}
                transition={{duration:0.8}}>
                <Image 
                src="/images/bannerImg/banner3.jpg" alt="Banner Image 3" 
                width={500} 
                height={300} 
                className='rounded-2xl w-52'/>
              </motion.div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Banner