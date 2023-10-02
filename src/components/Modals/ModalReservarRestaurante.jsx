import { useContext, useState } from 'react'
import { BookOpenCheck } from 'lucide-react'
import { motion } from 'framer-motion'
import { toast } from 'react-toastify'

import { Context } from '../../Context'
import Input from '../Input'
import Button from '../Button'
import ModalChildrenContainer from '../ModalChildrenContainer'
import HeaderModal from '../HeaderModal'


export const ModalReservarRestaurante = () => {    
    const { SetShowModal } = useContext(Context)

    const [ diaReserva, setDiaReserva ] = useState("")
    const [ horaReserva, setHoraReserva ] = useState(0)
    const [ maxHoraReserva, setMaxHoraReserva ] = useState(null)
    const [nomeEmpresa, setNomeEmpresa] = useState(null)

    const MapSemana = new Map([
        ["segunda", 0],
        ["terça", 1],
        ["quarta", 2],
        ["quinta", 3],
        ["sexta", 4],
        ["sabado", 5],
        ["domingo", 6]
    ])

    const handleChangeDay = event => {
        let valueSemana = MapSemana.get(event)
        if(valueSemana <= 4) {
            setDiaReserva(event)
            setMaxHoraReserva(23)
        } else if(valueSemana <= 6) {
            setDiaReserva(event)
            setMaxHoraReserva(15)
        } else {
            setDiaReserva(null)
            setMaxHoraReserva(null)
        }
    }

    const handleChangeHours = event => {
        if(parseInt(event) > maxHoraReserva) {
            toast.error(`O restaurante ficara aberto apenas das 7hs - ${maxHoraReserva}hs.`)
            setHoraReserva(null)
        } else if(parseInt(event) < 0) {
            toast.error(`Informe um valor válido`)
            setHoraReserva(null)
        } else {
            setHoraReserva(event)
        }
    }

    const handleChangeNameEnt = event => setNomeEmpresa(event)
    

    const handleSubmit = () => {
        if(horaReserva < 7) {
            toast.error(`O restaurante ficara aberto apenas das 7hs - ${maxHoraReserva}hs.`)
        } else {
            toast.success(`Restaurante reservado para ${nomeEmpresa}. ${diaReserva} às ${horaReserva}hs.`)
            SetShowModal()
        }
    }

    return (
        <ModalChildrenContainer>
            <HeaderModal title={"Reservar restaurante"} />
            
            <Input handleChange={handleChangeDay} title={"Qual dia da semana do seu evento?"} />
           
            {
                diaReserva ?
                <motion.div
                    initial={{y: -20}}
                    animate={{y: 0}}
                >
                    <Input maxLength={2} handleChange={handleChangeHours} title={"Qual a hora do seu evento?"} />
                </motion.div>
                : null
            }

            {
                horaReserva ?
                <motion.div
                    initial={{y: -20}}
                    animate={{y: 0}}
                >
                    <Input type={"text"} handleChange={handleChangeNameEnt} title={"Qual o nome da empresa?"} />
                </motion.div>
                : null
            }


            {
                nomeEmpresa ?
                <Button className={"hover:bg-actionSecondary hover:text-secondary mt-5"}  Icon={BookOpenCheck} placeholder={"Reservar"}  onClick={handleSubmit} />
                : null
            }

        </ModalChildrenContainer>
    )
}