"use client"
import React from 'react'
import Header from '../components/Header'
import Container from '../components/Container'
import Title from '../components/Title'
import FadeIn from '../components/FadeIn'

const AbautPage = () => {
  return (
    <Container>
      <div className='flex flex-col gap-6 p-8'>
        <FadeIn>
          <Title title={'私たちのビジョンと使命'}/>
        </FadeIn>

        <FadeIn>
          <div className='flex flex-col md:flex-row items-center gap-10'>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, amet unde placeat doloribus voluptatibus harum ratione quisquam maiores blanditiis et earum fuga commodi eaque mollitia perspiciatis. Odit error in architecto.
              <br/>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam fugit accusamus ipsum rem vitae veritatis voluptatum vero distinctio quam laborum nam esse excepturi reprehenderit, necessitatibus dignissimos, voluptate blanditiis unde. Quo.
            </p>
          </div>
        </FadeIn>
        <FadeIn>
          <div  className='flex flex-col md:flex-row items-center gap-10'>
            <p className='max-w-2xl'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, tempora nulla vel in consectetur accusamus exercitationem quaerat facilis aliquid explicabo suscipit nostrum dolore obcaecati reprehenderit neque, quam fugiat necessitatibus magnam.
            </p>
          </div>
        </FadeIn>
        <FadeIn>
          <div className='flex flex-col md:flex-row items-center gap-10'>
            <p className='max-w-2xl'>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus itaque hic vitae necessitatibus quos, cupiditate asperiores maiores architecto, magnam suscipit, tempore saepe dolores sapiente rem aliquam? Facere iusto alias eos.
            </p>
            <p className='max-w-2xl'>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus itaque hic vitae necessitatibus quos, cupiditate asperiores maiores architecto, magnam suscipit, tempore saepe dolores sapiente rem aliquam? Facere iusto alias eos.
            </p>
          </div>
        </FadeIn>
      </div>
    </Container>
  )
}

export default AbautPage