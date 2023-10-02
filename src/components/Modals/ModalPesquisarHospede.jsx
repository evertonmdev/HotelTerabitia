import { useState } from 'react'
import ModalChildrenContainer from '../ModalChildrenContainer'
import HeaderModal from '../HeaderModal'

import { motion } from 'framer-motion'
import {toast} from 'react-toastify'

export const ModalPesquisarHospede = () => {
    const [nomeHospede, setNomeHospede] = useState("")
    const handleChange = event => setNomeHospede(event.currentTarget.value)
    
    const ProcurarHospede = () => {
        let encontrado = false
        const hospedagens = localStorage.getItem("hospedagens") ? JSON.parse(localStorage.getItem("hospedagens")) : false

        if(!hospedagens) {
            return toast.error("O hotel não tem hospedes.")
        }

        for(let hospedagem of hospedagens) {
            if(encontrado == true) return
            
            for(let hospede of hospedagem.data) {
                if(hospede.nomeHospede === nomeHospede) {
                    encontrado = true
                    toast.success(`Hóspede ${hospede.nomeHospede} foi encontrada(o)!`)
                }
            }
        }

        if(encontrado === false) {
            toast.error(`Hóspede ${nomeHospede} não foi encontrada(o)!`)
        }
    }

    return (
        <ModalChildrenContainer>
            <HeaderModal title={"Pesquisando Hospede"} />

            <div className='w-full shadow-sm p-3'>
                <label>Qual o nome do Hóspede?</label>
                <input onChange={handleChange} type='text' required className='bg-transparent outline-none w-full border-actionDark/50 p-3 border-b ' placeholder='Nome:' />
                {
                    nomeHospede.length > 0 ?
                        <motion.button initial={{ y: -30 }} whileInView={{ y: 0 }} onClick={ProcurarHospede} className='w-full bg-actionSecondary text-secondary p-3 rounded-md my-5'>
                            Checkar
                        </motion.button>
                    : null
                }
            </div>
        </ModalChildrenContainer>
    )
}
