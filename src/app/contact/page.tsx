"use client"
import React from 'react'
import Header from '../components/Header'
import Container from '../components/Container'
import Title from '../components/Title'
import FadeIn from '../components/FadeIn'

const ContactPage = () => {
  return (
    <Container>
      <div className='flex flex-col gap-6 p-8'>
        <FadeIn>
          <Title title={'一緒に未来を築きましょう'}/>
        </FadeIn>
        <FadeIn>
          <div className='flex flex-col md:flex-row items-center gap-10'>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti esse eveniet hic a ipsam quidem architecto, deleniti mollitia beatae atque culpa voluptatem quasi repellat, sed vitae sunt eligendi placeat expedita!
            </p>
          </div>
        </FadeIn>
      </div>
    </Container>
  )
}

export default ContactPage