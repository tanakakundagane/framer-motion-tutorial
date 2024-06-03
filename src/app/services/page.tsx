"use client"
import React from 'react'
import Header from '../components/Header'
import Container from '../components/Container'
import Title from '../components/Title'
import FadeIn from '../components/FadeIn'

const ServicePage = () => {
  return (
    <div>
      <Container>
        <div className='flex flex-col gap-6 p-8'>
          <FadeIn>
            <Title title={'簡単なレポートアプリです'}/>
          </FadeIn>

          <FadeIn>
            <div className='flex flex-col md:flex-row items-center gap-10'>
              <p className='max-2w-xl'>
                シンプルなポート作成：
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque reprehenderit dolorem, repellendus eos necessitatibus, perspiciatis ipsum laudantium sed id dicta aliquam voluptas recusandae alias ipsa iure aspernatur esse molestiae tempore!
              </p>
              <p className='max-w-2xl'>
                データ可視化ツール:
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut ad temporibus, ducimus quas architecto ipsa fugit? Commodi ducimus, nesciunt dolore nihil cum assumenda rem, non suscipit tenetur sit sapiente iste.
              </p>
            </div>
          </FadeIn>

          <FadeIn>
            <div className='flex flex-col md:flex-row items-center gap-10'>
              <p className='max-w-2xl'>
                セキュリティーとプライバシー:
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis esse non voluptatem, culpa iusto possimus est ea debitis ullam consequuntur laudantium quisquam laborum quae eaque, necessitatibus earum sunt eos dolorem.
              </p>
              <p className='max-w-2xl'>
                自動データ連携:
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos earum commodi harum corrupti distinctio. Vel asperiores illum tempora explicabo, saepe pariatur, ipsam consectetur id repudiandae dicta corporis magnam omnis ipsa?
              </p>
            </div>
          </FadeIn>

        </div>
      </Container>
    </div>
  )
}

export default ServicePage