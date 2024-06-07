import React from 'react'
import Container from '../components/Container'
import Title from '../components/Title'
import Image from 'next/image'
import directorImg from '/public/images/bannerImg/director.jpg'
import PageTransition from '../components/PageTransition'

const DirectorPage = () => {
  return (
    <Container>
      <PageTransition>
          <div className='flex flex-col gap-6 p-8'>
            <Title title={'代表者からの挨拶'}/>
            <div className='flex flex-col md:flex-row items-center gap-10'>
              <p className='max-w-2xl'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias facilis veritatis aspernatur illum quis? Cupiditate ducimus dolorem possimus, consectetur eveniet id ab reiciendis corrupti cum minus commodi voluptate perferendis magni.
              </p>
              <Image
              src={directorImg}
              alt='directorImg'
              width={200}
              className='rounded object-cover'/>
            </div>
            <div className='flex flex-col md:flex-row items-center gap-10'>
              <p className='max-w-2xl'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi tempore beatae impedit, deserunt quisquam exercitationem maiores at eum ducimus eaque nihil modi consequuntur, animi, in pariatur vitae quae illo alias.
              </p>
              <p className='max-w-2xl'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure, quos voluptatem quidem deserunt vel fugiat sed illum quas corrupti architecto ea illo! Facilis nihil ipsum eaque labore adipisci quidem necessitatibus?
              </p>
            </div>
          </div>
      </PageTransition>
    </Container>
    )
}

export default DirectorPage