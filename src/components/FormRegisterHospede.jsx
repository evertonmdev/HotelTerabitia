import React from 'react'
import { motion } from 'framer-motion'
import Input from './Input'

const FormRegisterHospede = ({setNomeHospede, setIdadeHospede, nomeHospede, idadeHospede, handleSubmit}) => {
  return (
    <div className={`flex justify-center flex-col p-3 gap-5 border border-black/40 rounded-md transition-all duration-200`}>
      
        <Input handleChange={setNomeHospede} title={"Qual o nome do Hóspede?"} type={"text"}/>
        <Input handleChange={setIdadeHospede} title={"Qual a idade do Hóspede?"} type={"number"}/>

            {
                nomeHospede.length > 0 && idadeHospede !== null ? 
                <motion.button 
                    initial={{
                        y: -100
                    }}
                    whileInView={{
                        y: 0
                    }}
                    onClick={handleSubmit}
                    className='bg-actionSecondary outline-none items-center justify-center flex w-full p-3 text-secondary rounded-md' 
                >
                    <span>Adicionar</span>
                </motion.button>
                : null
            }
    </div> 
  )
}

export default FormRegisterHospede