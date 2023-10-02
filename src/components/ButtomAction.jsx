import React, { useContext } from 'react'
import { Context } from '../Context'

const ButtomAction = ({text, Modal}) => {
    const { SetShowModal, setModalChildren } = useContext(Context)

    const mostrarModal = () => {
        const modal  = <Modal />
        setModalChildren(modal)
        SetShowModal()
    }

    return (
        <button onClick={mostrarModal} className='text-xsm bg-black/5 min-w-fit py-3 px-4 rounded-md hover:bg-actionSecondary/40 flex-1'>
            <h3 className='font-bold'>{text}</h3>
        </button>
    )
}

export default ButtomAction