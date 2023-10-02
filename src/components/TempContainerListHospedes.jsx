import React from 'react'
import { User } from 'lucide-react'

const TempContainerListHospedes = ({hospedes}) => {
    return (
        <div className='max-h-[70%] flex-col overflow-auto flex gap-3'>
            {
                hospedes.length > 0 ?
                    hospedes.map((e, index) => (
                        <article key={index} className='w-full border border-green-500 p-3 rounded-md flex gap-2 relative items-center'>
                            <User size={20} />
                            <span>{e.nomeHospede}</span>
                            <div className='h-full border border-black/30' />
                            <span>{e.idadeHospede} Anos</span>
                            {
                                e.idadeHospede < 6 ?
                                    <span className='text-sm font-bold absolute right-2 bottom-2 text-actionSecondary'>possui gratuidade</span>
                                    : e.idadeHospede > 60 ?
                                        <span className='text-sm font-bold absolute right-2 bottom-2 text-actionSecondary'>paga meia</span>
                                        : null
                            }
                        </article>
                    ))
                    : null
            }
        </div>
    )
}

export default TempContainerListHospedes