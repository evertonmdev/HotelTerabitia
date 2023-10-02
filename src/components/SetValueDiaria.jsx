import React, { useContext, useState } from 'react'
import { ChevronRight, Edit } from 'lucide-react'
import TratarValorToBRL from '../utils/tratarMoeda';
import { Context } from '../Context';
import { toast } from 'react-toastify';

const SetValueDiaria = () => {
    const { valorDiaria, setValorDiaria } = useContext(Context)
    const [editContainer, setEditContainer] = useState(false);



    return (
        <>
           {
            valorDiaria === 0 || editContainer ? 
                <QuestionContainer onValueChange={() => setEditContainer(false)} setValorDiaria={setValorDiaria} />
            : 
            <div className='flex-col gap-10'>
               <div className='w-full flex justify-between items-center gap-10'>
                    <h3 className='text-primary text-sm font-bold'>A diaria está custando:</h3>
                    <Edit className='cursor-pointer' onClick={() => setEditContainer(true)} size={15} />
               </div>
                <span className='font-extrabold text-xl'>{TratarValorToBRL(valorDiaria)}</span>
            </div>
            
           }
        </>
    )
}


function QuestionContainer({onValueChange, setValorDiaria}) {
    const [ valor, setValor ] = useState(0)   
    
    const HandleAction = () => {
        const BrlToNum = valor.toString().replace(/[^0-9]/g, '');
        if(BrlToNum < 1) {
            alert("Valor invalido.")
        } else {
            localStorage.setItem("valorDiaria", BrlToNum)
            setValorDiaria(BrlToNum)
            onValueChange()
            return toast.success("Valor alterado com sucesso!")
        }
    }

    return (
        <>
            <h3 className='font-bold text-primary text-[1.2em]'>Qual é o valor padrão da diaria?</h3>
            <div className='relative w-full flex justify-center items-center'>
                    <input value={TratarValorToBRL(valor)} onChange={event => setValor(event.currentTarget.value)}  className='bg-transparent outline-none border-b border-black w-full p-2' />
                    <button onClick={HandleAction} className='absolute bottom-2 right-2 p-1 bg-actionSecondary flex justify-center items-center rounded-r-md w-fit transition-all duration-200 hover:scale-110'>
                        <ChevronRight color='white'  />
                    </button>
            </div>
        </>
    )
}

export default SetValueDiaria