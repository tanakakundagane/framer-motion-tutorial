"use client"
import React from 'react';
import Container from './Container';
import Image from 'next/image';
import FadeInStagger from './FadeIn';
import FadeIn from './FadeIn'

const clients = [
  '1.svg',
  '2.svg',
  '3.svg',
  '4.svg',
  '5.svg',
  '6.svg',
  '7.svg',
  '8.svg',
];

const Client = () => {
  return (
    <div className='mt-24 rounded-[50px] bg-gray-950 py-20'>
      <Container>
        <ul className='flex items-center gap-x-8'>
          <h2 className='text-center text-white text-sm font-semibold tracking-wider'>こちらの企業も導入しています</h2>
          <div className='h-px flex-auto bg-neutral-700'></div>
        </ul>

          <FadeInStagger>
            <ul className='mt-10 grid grid-cols-2 gap-x-8 lg:grid-cols-4 '>
              {clients.map((client) => (
                <li key={client} className='mt-5'>
                  <FadeIn>
                    <Image
                      src={`/images/clientimg/${client}`}
                      alt={`Client Logo ${client}`}
                      width={150}
                      height={100}
                    />
                  </FadeIn>
                </li>
              ))}
            </ul>
          </FadeInStagger>
      </Container>
    </div>
  );
};

export default Client;