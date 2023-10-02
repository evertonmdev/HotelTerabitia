import React from 'react'
import { ArrowRightCircle, Plus } from 'lucide-react'
import Button from './Button'

const ButtonAddHospede = ({setAddingAction, finalizar}) => {
    const handleClick = () =>  setAddingAction(true)

  return (
    <div className='flex gap-2'>
        <Button Icon={Plus} onClick={handleClick} placeholder={"Adicionar hospede"} className={"hover:bg-actionSecondary hover:text-secondary"} />
        <Button Icon={ArrowRightCircle} onClick={finalizar} placeholder={"Finalizar"} className={"hover:bg-action hover:text-secondary"} />
    </div>
  )
}

export default ButtonAddHospede