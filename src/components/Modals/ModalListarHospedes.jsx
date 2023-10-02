import { useState } from "react"

import { Trash, User } from "lucide-react"
import TratarValorToBRL from "../../utils/tratarMoeda"

export const ModalListarHospedes = () => {
    const hospedagensCheck = localStorage.getItem("hospedagens") ? JSON.parse(localStorage.getItem("hospedagens")) : false
    const [hospedagens, setHospedagens] = useState(hospedagensCheck)
    
    const removerIndex = index => {
        let CloneArray = hospedagens.slice()
        CloneArray.splice(index, 1)

        if(CloneArray.length == 0) {
            localStorage.removeItem("hospedagens")
            setHospedagens(false)
        } else localStorage.setItem("hospedagens", JSON.stringify(CloneArray))
       
        setHospedagens(CloneArray)
    }

    return (
        <div className='w-screen h-full flex justify-center items-center gap-4 overflow-x-auto'>
            <div className='w-full h-full flex justify-start items-center gap-4 overflow-x-auto p-10'>
                {
                    hospedagens ? 
                    hospedagens.map((hospedagem, index) => (
                        <div key={index} className='min-w-fit max-w-[70vw] max-h-[580px] h-[95%] bg-primary p-5 rounded-md shadow-lg font-poppins relative flex gap-2 flex-col justify-start'>
                            <h3 className='text-center mb-3 font-bold text-[1.2em] text-primary/40'>{index + 1}</h3>
                            <div className='w-full h-[80%] overflow-y-auto flex flex-col gap-3'>
                                {
                                    hospedagem.data.map((e, index) => (
                                        <article key={index} className='min-w-[290px] text-lsm w-full border border-green-500 p-3 rounded-md flex gap-2 relative items-center'>
                                            <User size={20} />
                                            <span>{e.nomeHospede}</span>
                                            <div className='h-full border border-black/30' />
                                            <span>{e.idadeHospede} Anos</span>
                                            {
                                                e.idadeHospede < 6 ?
                                                    <span className='text-xxsm font-bold absolute right-2 bottom-2 text-actionSecondary'>possui gratuidade</span>
                                                    : e.idadeHospede > 60 ?
                                                        <span className='text-xxsm font-bold absolute right-2 bottom-2 text-actionSecondary'>paga meia</span>
                                                        : null
                                            }
                                        </article>
                                    ))
                                }
                            </div>
                            <div className='w-full h-fit font-mono py-2 text-xsm'>
                                <p>Total: <span className='font-bold'>{TratarValorToBRL(hospedagem.total)}</span></p>
                                <p>Numero de diarias: <span className='font-bold'> {hospedagem.numeroDiarias} </span></p>
                                <p className='font-mono'>Meias: <span className='font-bold'>{hospedagem.meias}</span></p>
                                <p className='font-mono'>Gratuidades: <span className='font-bold'>{hospedagem.gratuidades}</span></p>
                            </div>
                            <button onClick={() => removerIndex(index)} className='absolute bottom-3 right-5 text-actionDark'>
                                <Trash />
                            </button>
                        </div>
                    ))

                    : <h3 className='font-bold text-lg text-center w-full'>Nenhum hospede foi encontrado</h3>
                } 
            </div>
        </div>
    )
}
