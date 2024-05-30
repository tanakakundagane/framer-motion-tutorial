import React, { createContext, useContext, ReactNode, HTMLAttributes } from 'react';
import { motion, MotionProps } from 'framer-motion'


type HTMLDivProps = Omit<HTMLAttributes<HTMLDivElement>, 'onAnimationStart' | 'onDrag' | 'onDragStart' | 'onDragEnd' | 'onDragOver' | 'style'>;

interface FadeInProps extends HTMLDivProps, MotionProps {
  children: ReactNode;
}

const FadeInStaggerContext = createContext(false)
const viewport ={once:true, margin:'0px 0px -200px'}


const FadeIn:React.FC<FadeInProps>  = (props) => {
  const isInstaggerGroupe = useContext(FadeInStaggerContext)
  return (
    <motion.div
    variants={{
      hidden:{opacity:0, y:20},
      visible:{opacity:1, y:0}
    }}
    transition={{duration:0.5}}
    {...(isInstaggerGroupe 
      ? {} 
      : {
        initial:'hidden',
        whileInView:'visible',
        viewport,
      })}
      {...props}
    >
      
    </motion.div>
  )
}

export default FadeIn

