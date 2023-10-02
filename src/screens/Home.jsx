import React, { useContext, useRef } from 'react'

import { motion } from 'framer-motion'
import { DropTopToDown, SlideLeftToRight } from '../utils/animations'
import { Context } from '../Context'

export const Home = () => {
  const { ChangeScreen } = useContext(Context)

  const RefTextPrimary = useRef(null)
  const SubText = useRef(null)
  const DropButton = useRef(null)

  const RedirectToIntro = () => ChangeScreen(1)
  
  const animar = async () => {
    await SlideLeftToRight(SubText, .6)
    DropTopToDown(DropButton)
  }

  return (
    <div className="w-full min-h-screen text-primary flex justify-center items-center flex-col relative font-poppins">
        <section className='mx-auto flex flex-col gap-8 justify-center items-center '>
            <div className='w-fit relative'>
              <motion.div 
                initial={{
                  width: "100%"
                }}

                animate={{
                  width: "0%"
                }}

                transition={{
                  duration: 0.9,
                  ease: 'easeInOut'
                }}
                
                onAnimationComplete={animar}
                className='absolute w-full h-full bg-primary right-0'
              />
              <h3 ref={RefTextPrimary} className="text-3xl font-medium" >Maximize o Conforto, Minimize o Esforço: Seu Hotel no Controle Perfeito!</h3>
            </div>
            <motion.h4 ref={SubText} className="text-2xl font-light text-primary opacity-0">Gestão Hoteleira Descomplicada.</motion.h4>
        </section>
        <motion.button onClick={RedirectToIntro} ref={DropButton} className='opacity-0 absolute bottom-20 p-5 bg-action text-primary rounded-2xl  font-bold text-xl HoverButtonShadow'>
            <h5 className='text-secondary'>Experimente Já!</h5>
        </motion.button>
    </div>
  )
}