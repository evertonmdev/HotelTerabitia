import React, { useEffect, useRef } from 'react'
import { SlideLeftToRight } from '../utils/animations'

const ModalChildrenContainer = ({children}) => {
    const modalRef = useRef(null)

    useEffect(() => {
        if(modalRef.current) {
            SlideLeftToRight(modalRef, .6)
        }
    }, [])

    return (
        <div ref={modalRef} className='w-fit max-w-[90%] min-h-[80%] bg-primary p-5 rounded-md shadow-lg font-poppins relative flex gap-2 flex-col justify-start '>
            {children}
        </div>
     )
}

export default ModalChildrenContainer