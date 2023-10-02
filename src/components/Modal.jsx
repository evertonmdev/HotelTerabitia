import React, { useContext, useState } from 'react'
import { X } from 'lucide-react'
import { motion } from 'framer-motion'

import { Context } from '../Context'



const ModalContainer = () => {
    const { showModal, SetShowModal, ModalChidren } = useContext(Context)
    return (
        <>
            {
                showModal ?
                <motion.div className='z-50 absolute top-0 left-0 w-full h-full backdrop-blur-xl bg-black/5 flex justify-center items-center'>
                    <button onClick={SetShowModal} className='absolute top-5 right-10 rounded-sm p-2 bg-primary shadow-lg'>
                        <X />
                    </button>
                    {
                    ModalChidren
                    }
                </motion.div>
                : null
            }
        </>
    )
}

export {
    ModalContainer
}