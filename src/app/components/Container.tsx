import React, { Children, ReactNode } from 'react'

interface ContainerProps {
  children: ReactNode;
}


const Container: React.FC<ContainerProps>  = ({children}) => {
  return (
    <div className='max-w-screen-2xl mx-auto px-2 py-10'>
      {children}
    </div>
  )
}

export default Container